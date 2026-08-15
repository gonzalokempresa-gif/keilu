/**
 * desktop/js/utils.js — Keilu v2.3
 * Biblioteca Central de Utilidades y Helper Functions
 */

(function (global) {
  'use strict';

  /**
   * Normaliza y corrige rutas de stickers GIF
   * @param {string} path - Ruta original del sticker
   * @returns {string} Ruta corregida para ser leída desde archivos en /desktop/
   */
  function fixStickerPath(path) {
    if (!path || typeof path !== 'string') return '';
    let clean = path.trim();

    // Eliminar prefijos de barra o barra-punto
    if (clean.startsWith('/')) clean = clean.substring(1);
    if (clean.startsWith('./')) clean = clean.substring(2);

    // Corregir error de nombre de carpeta de avatar (18-avatar -> 17-avatar)
    if (clean.includes('18-avatar')) {
      clean = clean.replace('18-avatar', '17-avatar');
    }

    // Ajustar prefijos para que sea accesible desde el directorio /desktop/
    if (clean.startsWith('desktop/stickers/')) {
      clean = clean.replace('desktop/', '');
    } else if (clean.startsWith('../stickers/')) {
      clean = clean.replace('../', '');
    }

    return clean;
  }

  /**
   * Normaliza un objeto de proveedor garantizando acceso seguro a todas sus propiedades
   * independientemente de si usa el esquema nuevo (nesting) o legacy (plano).
   * @param {Object} p - Objeto de proveedor
   * @returns {Object} Objeto normalizado
   */
  function normalizeProvider(p) {
    if (!p) return {};
    const isNew = !!(p.identidad);

    const nombre = (isNew ? p.identidad?.nombre : p.nombre) || 'Proveedor Keilu';
    const especialidad = (isNew ? p.identidad?.especialidad : (p.rubro || p.especialidad)) || 'Servicios Generales';
    const emoji = (isNew ? p.identidad?.emoji : p.emoji) || '📍';
    const foto = (isNew ? p.identidad?.foto : p.foto) || '';
    const rubroId = (isNew ? p.identidad?.rubroId : p.rubroId) || '';
    const galeria = (isNew ? (p.identidad?.galeria || []) : (p.galeria || []));
    const atendidoPor = (isNew ? p.identidad?.atendidoPor : (p.contacto || nombre)) || nombre;
    const fono = (isNew ? p.contacto?.fono : p.fono) || '';
    const horario = (isNew ? p.contacto?.horario : p.horario) || 'Consultar Horario';
    const dias = (isNew ? p.contacto?.dias : p.dias) || 'Lunes a Sábado';
    const lat = (isNew ? p.ubicacion?.lat : (p.realLat !== undefined ? p.realLat : p.lat)) || -36.7946;
    const lng = (isNew ? p.ubicacion?.lng : (p.realLng !== undefined ? p.realLng : p.lng)) || -73.1118;
    const sector = (isNew ? p.ubicacion?.sector : (p.sector || 'Hualpén')) || 'Hualpén';
    const calle = (isNew ? p.ubicacion?.calle : (p.calle || 'Hualpén')) || 'Hualpén';
    const privacidad = (isNew ? p.ubicacion?.privacidad : (p.privacidad || 'exacta')) || 'exacta';
    const tarifaPagada = (isNew ? p.suscripcionInfo?.tarifaPagada : '$0 CLP') || '$0 CLP';
    const duracionActiva = (isNew ? p.suscripcionInfo?.duracionActiva : 'Gratis') || 'Gratis';
    const plan = isNew ? p.plan : (p.dePago ? 'pro' : 'gratis');
    const verificado = isNew ? !!p.verificado : false;
    const estadoVivo = isNew ? p.tiemposYAcciones?.estadoVivo : null;

    let stickerRubro = fixStickerPath(p.stickerRubro || p.identidad?.stickerRubro || '');
    let stickerAccion = fixStickerPath(p.stickerAccion || p.identidad?.stickerAccion || '');

    return {
      id: p.id || 999,
      tipo: p.tipo || 'azul',
      plan: plan,
      verificado: verificado,
      rankingScore: p.rankingScore || 50,
      nombre: nombre,
      especialidad: especialidad,
      rubroId: rubroId,
      emoji: emoji,
      foto: foto,
      galeria: galeria,
      atendidoPor: atendidoPor,
      fono: String(fono),
      horario: horario,
      dias: dias,
      lat: lat,
      lng: lng,
      sector: sector,
      calle: calle,
      privacidad: privacidad,
      tarifaPagada: tarifaPagada,
      duracionActiva: duracionActiva,
      stickerRubro: stickerRubro,
      stickerAccion: stickerAccion,
      swapStickerOrder: p.swapStickerOrder || false,
      estadoVivo: estadoVivo,
      original: p
    };
  }

  /**
   * Obtiene el nombre amigable del rubro a partir de la ruta del sticker
   */
  function obtenerNombreRubro(rubroPath, p) {
    if (p && p.identidad && p.identidad.nombre) {
      const nombre = p.identidad.nombre.toLowerCase();
      if (nombre.includes("cerrajero") || nombre.includes("cerrajería") || nombre.includes("llave")) return "Cerrajería y Chapas 🔑";
    }

    if (!rubroPath) return 'Servicios Generales';
    const parts = rubroPath.split('/');
    if (parts.length < 2) return 'Servicios Generales';
    const folder = parts[parts.length - 2] || '';

    const rubroNames = {
      '01-agua': 'Agua y Gasfitería',
      '02-luz': 'Electricidad',
      '02-electricidad': 'Electricidad',
      '03-jardin': 'Jardinería y Paisajismo',
      '03-hogar': 'Reparaciones del Hogar',
      '04-maderas': 'Carpintería y Maderas',
      '04-madera': 'Carpintería y Maderas',
      '05-metales': 'Herrería y Estructuras Metálicas',
      '06-transporte': 'Fletes y Mudanzas',
      '06-vehiculos': 'Mecánica y Automotriz',
      '07-limpieza': 'Limpieza y Desinfección',
      '07-tecnologia': 'Soporte Técnico e Informática',
      '08-textil': 'Confección y Sastrería',
      '09-estetica': 'Peluquería y Estética',
      '10-construccion': 'Albañilería y Obras',
      '10-salud': 'Cuidado de la Salud y Terapia',
      '11-hogar': 'Servicios del Hogar',
      '11-educacion': 'Educación y Tutorías',
      '12-tecnologia': 'Soporte Técnico y Computación',
      '12-eventos': 'Fotografía y Eventos',
      '13-vehiculos': 'Mecánica y Automotriz',
      '13-mascotas': 'Cuidado de Mascotas',
      '14-salud': 'Cuidado de la Salud y Terapia',
      '14-comida': 'Gastronomía y Repostería',
      '15-mascotas': 'Cuidado de Mascotas',
      '15-transporte': 'Fletes y Despacho',
      '16-ensenanza': 'Educación y Tutorías',
      '16-limpieza': 'Limpieza y Aseo',
      '17-asesorias': 'Asesorías, Leyes y Trámites',
      '17-avatar': 'Servicios Especializados',
      '18-avatar': 'Servicios Especializados'
    };

    return rubroNames[folder] || 'Servicio Independiente';
  }

  /**
   * Obtiene el nombre amigable de la acción a partir de la ruta del sticker
   */
  function obtenerNombreAccion(actionPath) {
    if (!actionPath) return 'Atención Regular';
    const parts = actionPath.split('/');
    if (parts.length < 2) return 'Atención Regular';
    const folder = parts[parts.length - 2] || '';

    const actionNames = {
      '01-reparar': 'Reparación y Mantención',
      '02-domicilio': 'Atención a Domicilio',
      '03-urgencias-24hrs': 'Urgencias 24 Horas',
      '04-construir': 'Construcción y Montaje',
      '05-limpiar': 'Limpieza e Higienización',
      '06-transportar': 'Traslados y Despacho',
      '07-pintar': 'Pintura y Acabados',
      '08-cortar': 'Corte, Poda y Mantención',
      '09-diagnosticar': 'Diagnóstico y Revisión',
      '10-cuidar': 'Cuidado y Acompañamiento',
      '11-ensenar': 'Clases y Tutorías',
      '12-gestionar': 'Asesoría y Trámites',
      '13-animar': 'Servicios y Shows'
    };

    return actionNames[folder] || 'Atención Regular';
  }

  /**
   * Obtiene el emoji amigable de la acción a partir de la ruta del sticker
   */
  function obtenerEmojiAccion(actionPath) {
    if (!actionPath) return '⚡';
    const parts = actionPath.split('/');
    if (parts.length < 2) return '⚡';
    const folder = parts[parts.length - 2] || '';

    const emojis = {
      '01-reparar': '🛠️',
      '02-domicilio': '🏠',
      '03-urgencias-24hrs': '🚨',
      '04-construir': '🧱',
      '05-limpiar': '🧼',
      '06-transportar': '🚚',
      '07-pintar': '🎨',
      '08-cortar': '✂️',
      '09-diagnosticar': '🔍',
      '10-cuidar': '❤️',
      '11-ensenar': '✏️',
      '12-gestionar': '📋',
      '13-animar': '🤵'
    };

    return emojis[folder] || '⚡';
  }

  /**
   * Comprueba si un día específico está activo dentro del string de días de atención
   */
  function isDayActive(diasStr, dayName) {
    if (!diasStr || typeof diasStr !== 'string') return false;
    const normalized = diasStr.toLowerCase().trim();
    if (!normalized) return false;

    if (normalized.includes("24/7") || normalized.includes("lunes a domingo") || normalized.includes("todos los días") || normalized.includes("siempre")) {
      return true;
    }
    if (normalized.includes("lunes a viernes")) {
      const weekdays = ["lunes", "martes", "miércoles", "jueves", "viernes"];
      return weekdays.includes(dayName.toLowerCase());
    }
    if (normalized.includes("lunes a sábado") || normalized.includes("lunes a sabado")) {
      const weekAndSat = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "sabado"];
      return weekAndSat.includes(dayName.toLowerCase());
    }
    if (normalized.includes("viernes a domingo")) {
      const wEnd = ["viernes", "sábado", "sabado", "domingo"];
      return wEnd.includes(dayName.toLowerCase());
    }

    return normalized.includes(dayName.toLowerCase());
  }

  /**
   * Genera la URL directa a WhatsApp (https://wa.me/...) procesando el número
   * telefónico ingresado en el perfil de forma segura y compatible internacionalmente.
   * @param {string|number} fono - Número telefónico
   * @param {string} msg - Mensaje opcional predeterminado
   * @returns {string} URL directa a WhatsApp
   */
  function buildWhatsAppUrl(fono, msg) {
    if (!fono) return '#';
    let clean = String(fono).replace(/\D/g, '');
    if (!clean) return '#';

    // Formatear números de Chile (+56 9 ...) si viene sin código de país
    if (clean.length === 9 && clean.startsWith('9')) {
      clean = '56' + clean;
    } else if (clean.length === 8) {
      clean = '569' + clean;
    }

    const textParam = msg ? `?text=${encodeURIComponent(msg)}` : '';
    return `https://wa.me/${clean}${textParam}`;
  }

  // Exportar al scope global (browser window)
  global.KeiluUtils = {
    fixStickerPath: fixStickerPath,
    normalizeProvider: normalizeProvider,
    obtenerNombreRubro: obtenerNombreRubro,
    obtenerNombreAccion: obtenerNombreAccion,
    obtenerEmojiAccion: obtenerEmojiAccion,
    isDayActive: isDayActive,
    buildWhatsAppUrl: buildWhatsAppUrl
  };

})(typeof window !== 'undefined' ? window : this);
