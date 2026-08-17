/**
 * desktop/js/supabase-client.js — Keilu Backend
 * Capa de conexión a la base de datos real (Supabase).
 *
 * Requiere que el HTML que lo use cargue antes la librería de Supabase, por ejemplo:
 *   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"></script>
 *   <script src="js/supabase-client.js"></script>
 *
 * TODO (Gonzalo): reemplazar SUPABASE_URL y SUPABASE_ANON_KEY una vez creado
 * el proyecto en https://supabase.com — Settings > API. La "anon key" es pública
 * y segura de exponer en el navegador (las reglas reales de seguridad viven en
 * supabase/schema.sql, no en esta key).
 */

(function (global) {
  'use strict';

  const SUPABASE_URL = 'TODO_PEGAR_URL_DEL_PROYECTO';
  const SUPABASE_ANON_KEY = 'TODO_PEGAR_ANON_KEY';

  let client = null;

  function getClient() {
    if (client) return client;

    if (typeof global.supabase === 'undefined' || typeof global.supabase.createClient !== 'function') {
      console.warn('[Keilu] Supabase todavía no está conectado: falta el script de la librería o las claves en supabase-client.js.');
      return null;
    }
    if (SUPABASE_URL.startsWith('TODO_')) {
      console.warn('[Keilu] Falta configurar SUPABASE_URL / SUPABASE_ANON_KEY en js/supabase-client.js.');
      return null;
    }

    client = global.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return client;
  }

  // ==========================================================================
  // AUTENTICACIÓN
  // ==========================================================================

  /** Registra un usuario nuevo con email y contraseña. */
  async function signUp(email, password) {
    const db = getClient();
    if (!db) return { data: null, error: { message: 'Supabase no está conectado todavía.' } };
    return db.auth.signUp({ email, password });
  }

  /** Inicia sesión con email y contraseña. */
  async function signIn(email, password) {
    const db = getClient();
    if (!db) return { data: null, error: { message: 'Supabase no está conectado todavía.' } };
    return db.auth.signInWithPassword({ email, password });
  }

  /** Cierra la sesión actual. */
  async function signOut() {
    const db = getClient();
    if (!db) return { error: null };
    return db.auth.signOut();
  }

  /** Devuelve la sesión activa (o null si nadie inició sesión). */
  async function getSession() {
    const db = getClient();
    if (!db) return null;
    const { data } = await db.auth.getSession();
    return data?.session || null;
  }

  // ==========================================================================
  // PERFIL DE USUARIO (tabla profiles)
  // ==========================================================================

  /** Trae el perfil (nombre, teléfono, avatar) del usuario que inició sesión. */
  async function getMyProfile() {
    const db = getClient();
    if (!db) return null;
    const session = await getSession();
    if (!session) return null;

    const { data, error } = await db.from('profiles').select('*').eq('id', session.user.id).maybeSingle();
    if (error) { console.error('[Keilu] Error al leer el perfil:', error); return null; }
    return data;
  }

  /** Crea o actualiza el perfil del usuario que inició sesión. */
  async function upsertMyProfile(datos) {
    const db = getClient();
    if (!db) return { data: null, error: { message: 'Supabase no está conectado todavía.' } };
    const session = await getSession();
    if (!session) return { data: null, error: { message: 'Tenés que iniciar sesión primero.' } };

    return db.from('profiles').upsert({ id: session.user.id, ...datos, updated_at: new Date().toISOString() });
  }

  // ==========================================================================
  // PROVEEDORES (tabla providers — trabajadores, empresas, eventos)
  // ==========================================================================

  /** Trae todos los proveedores públicos, en la misma forma que espera KeiluUtils.normalizeProvider(). */
  async function getProviders() {
    const db = getClient();
    if (!db) return [];

    const { data, error } = await db.from('providers').select('*').order('ranking_score', { ascending: false });
    if (error) { console.error('[Keilu] Error al leer proveedores:', error); return []; }

    // Traduce las columnas de la base (snake_case) a la forma que usa el frontend hoy (camelCase anidado)
    return data.map(mapRowToProvider);
  }

  /** Trae un solo proveedor por id. */
  async function getProviderById(id) {
    const db = getClient();
    if (!db) return null;

    const { data, error } = await db.from('providers').select('*').eq('id', id).maybeSingle();
    if (error) { console.error('[Keilu] Error al leer el proveedor:', error); return null; }
    return data ? mapRowToProvider(data) : null;
  }

  /** Crea o actualiza el perfil de proveedor del usuario que inició sesión. */
  async function upsertMyProvider(providerData) {
    const db = getClient();
    if (!db) return { data: null, error: { message: 'Supabase no está conectado todavía.' } };
    const session = await getSession();
    if (!session) return { data: null, error: { message: 'Tenés que iniciar sesión primero.' } };

    const row = mapProviderToRow(providerData);
    row.owner_id = session.user.id;

    return db.from('providers').upsert(row).select().maybeSingle();
  }

  /** Convierte una fila de la base (snake_case) a la forma anidada que ya usa el frontend. */
  function mapRowToProvider(row) {
    return {
      id: row.id,
      tipo: row.tipo,
      plan: row.plan,
      dePago: row.de_pago,
      subPlan: row.sub_plan,
      radarActivo: row.radar_activo,
      verificado: row.verificado,
      rankingScore: row.ranking_score,
      identidad: row.identidad || {},
      stickerRubro: row.sticker_rubro || '',
      stickerAccion: row.sticker_accion || '',
      visualMapa: row.visual_mapa || {},
      tiemposYAcciones: row.tiempos_y_acciones || {},
      suscripcionInfo: row.suscripcion_info || {},
      ubicacion: row.ubicacion || {},
      contacto: row.contacto || {}
    };
  }

  /** Convierte el objeto anidado del frontend a filas snake_case para guardar en la base. */
  function mapProviderToRow(p) {
    const row = {
      tipo: p.tipo,
      plan: p.plan,
      de_pago: p.dePago,
      sub_plan: p.subPlan,
      radar_activo: p.radarActivo,
      verificado: p.verificado,
      ranking_score: p.rankingScore,
      identidad: p.identidad || {},
      sticker_rubro: p.stickerRubro || '',
      sticker_accion: p.stickerAccion || '',
      visual_mapa: p.visualMapa || {},
      tiempos_y_acciones: p.tiemposYAcciones || {},
      suscripcion_info: p.suscripcionInfo || {},
      ubicacion: p.ubicacion || {},
      contacto: p.contacto || {}
    };
    if (p.id) row.id = p.id;
    return row;
  }

  // ==========================================================================
  // FAVORITOS (tabla favoritos)
  // ==========================================================================

  /** Trae la lista de IDs de proveedores favoritos del usuario que inició sesión. */
  async function getFavoritos() {
    const db = getClient();
    if (!db) return [];
    const session = await getSession();
    if (!session) return [];

    const { data, error } = await db.from('favoritos').select('provider_id').eq('user_id', session.user.id);
    if (error) { console.error('[Keilu] Error al leer favoritos:', error); return []; }
    return data.map(f => f.provider_id);
  }

  /** Agrega o quita un proveedor de favoritos. Devuelve true si quedó agregado, false si quedó quitado. */
  async function toggleFavorito(providerId) {
    const db = getClient();
    if (!db) return false;
    const session = await getSession();
    if (!session) return false;

    const { data: existente } = await db.from('favoritos').select('*').eq('user_id', session.user.id).eq('provider_id', providerId).maybeSingle();

    if (existente) {
      await db.from('favoritos').delete().eq('user_id', session.user.id).eq('provider_id', providerId);
      return false;
    } else {
      await db.from('favoritos').insert({ user_id: session.user.id, provider_id: providerId });
      return true;
    }
  }

  // ==========================================================================
  // EXPORTAR
  // ==========================================================================

  global.KeiluDB = {
    signUp,
    signIn,
    signOut,
    getSession,
    getMyProfile,
    upsertMyProfile,
    getProviders,
    getProviderById,
    upsertMyProvider,
    getFavoritos,
    toggleFavorito
  };

})(typeof window !== 'undefined' ? window : this);
