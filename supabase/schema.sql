-- ============================================================================
-- Keilu — Esquema de base de datos (Supabase / Postgres)
-- ============================================================================
-- Mantiene la MISMA forma de datos que ya usa el frontend (identidad, ubicacion,
-- contacto, tiemposYAcciones, suscripcionInfo como objetos anidados) guardada en
-- columnas JSONB. Así el día que se conecta index.html, mock_data.js y
-- KeiluUtils.normalizeProvider() casi no cambian: siguen leyendo p.identidad?.nombre,
-- p.ubicacion?.lat, etc. Lo que sí es 100% relacional (usuarios, favoritos,
-- suscripciones/pagos) va en tablas propias, porque eso sí necesita relaciones
-- y reglas de seguridad reales.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. PERFILES DE USUARIO (1 a 1 con auth.users, que ya trae Supabase)
-- ----------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  nombre text,
  telefono text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is 'Datos de la cuenta de cada usuario (cliente o proveedor). auth.users ya maneja el login/password.';

-- ----------------------------------------------------------------------------
-- 2. PROVEEDORES (trabajadores azul, empresas verde, eventos naranjo)
-- ----------------------------------------------------------------------------
create table if not exists public.providers (
  id bigint generated always as identity primary key,
  owner_id uuid references auth.users(id) on delete set null,

  tipo text not null check (tipo in ('azul', 'verde', 'naranja')),
  plan text not null default 'gratis' check (plan in ('gratis', 'pro', 'ultra_pro', 'basico')),
  de_pago boolean not null default false,
  sub_plan text,
  radar_activo boolean not null default false,
  verificado boolean not null default false,
  ranking_score int not null default 50,

  -- Igual forma que identidad.* en mock_data.js: nombre, rubroId, emoji,
  -- especialidad, descripcion, foto, galeria, atendidoPor
  identidad jsonb not null default '{}'::jsonb,

  sticker_rubro text default '',
  sticker_accion text default '',

  -- { animClass, animSpeed, marcoEstrella, radarPulse }
  visual_mapa jsonb not null default '{}'::jsonb,

  -- { tiempoRespuesta, estadoVivo: {activo, texto, expiraEn}, boostGratis: {...} }
  tiempos_y_acciones jsonb not null default '{}'::jsonb,

  -- { duracionActiva, tarifaPagada } — el detalle de pago real vive en public.subscripciones
  suscripcion_info jsonb not null default '{}'::jsonb,

  -- { lat, lng, calle, sector, privacidad: 'exacta'|'aproximada', pinesAleatorios: [...] }
  ubicacion jsonb not null default '{}'::jsonb,

  -- { fono, whatsapp, horario, dias }
  contacto jsonb not null default '{}'::jsonb,

  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.providers is 'Unifica los 3 catálogos (azul/verde/naranjo). Reemplaza a mock_data.js cuando esté conectado.';
comment on column public.providers.owner_id is 'Quién es el dueño real de este perfil. NULL = todavía es un perfil de prueba/demo sin usuario asociado.';

create index if not exists providers_tipo_idx on public.providers (tipo);
create index if not exists providers_owner_idx on public.providers (owner_id);

-- ----------------------------------------------------------------------------
-- 3. FAVORITOS (hoy vive en localStorage bajo la key 'keilu_favoritos')
-- ----------------------------------------------------------------------------
create table if not exists public.favoritos (
  user_id uuid not null references auth.users(id) on delete cascade,
  provider_id bigint not null references public.providers(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, provider_id)
);

-- ----------------------------------------------------------------------------
-- 4. SUSCRIPCIONES / PAGOS (para conectar MercadoPago / Webpay más adelante)
-- ----------------------------------------------------------------------------
create table if not exists public.subscripciones (
  id bigint generated always as identity primary key,
  provider_id bigint not null references public.providers(id) on delete cascade,
  plan text not null check (plan in ('pro', 'ultra_pro', 'pro_diario', 'pro_semanal')),
  estado text not null default 'pendiente' check (estado in ('pendiente', 'activo', 'vencido', 'cancelado')),
  monto_clp int,
  metodo_pago text, -- 'mercadopago' | 'webpay'
  pago_externo_id text, -- ID que devuelve la pasarela de pago, para conciliar
  fecha_inicio timestamptz,
  fecha_fin timestamptz,
  created_at timestamptz not null default now()
);

comment on table public.subscripciones is 'Historial real de pagos/planes. El campo providers.suscripcion_info es solo el resumen que se muestra en el pin.';

-- ============================================================================
-- SEGURIDAD (Row Level Security) — quién puede ver y editar qué
-- ============================================================================

alter table public.profiles enable row level security;
alter table public.providers enable row level security;
alter table public.favoritos enable row level security;
alter table public.subscripciones enable row level security;

-- profiles: cada usuario ve y edita solo su propia fila
create policy "profiles_select_own" on public.profiles for select using (auth.uid() = id);
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);
create policy "profiles_insert_own" on public.profiles for insert with check (auth.uid() = id);

-- providers: cualquiera puede VER (necesario para el mapa público),
-- pero solo el dueño puede crear/editar/borrar su propio perfil
create policy "providers_select_public" on public.providers for select using (true);
create policy "providers_insert_own" on public.providers for insert with check (auth.uid() = owner_id);
create policy "providers_update_own" on public.providers for update using (auth.uid() = owner_id);
create policy "providers_delete_own" on public.providers for delete using (auth.uid() = owner_id);

-- favoritos: cada usuario ve y administra solo los suyos
create policy "favoritos_select_own" on public.favoritos for select using (auth.uid() = user_id);
create policy "favoritos_insert_own" on public.favoritos for insert with check (auth.uid() = user_id);
create policy "favoritos_delete_own" on public.favoritos for delete using (auth.uid() = user_id);

-- subscripciones: el dueño del proveedor puede ver su propio historial de pago,
-- pero NO puede crear ni modificar registros directamente desde el navegador
-- (eso lo va a hacer una función segura del servidor cuando la pasarela de pago confirme el cobro,
-- para que nadie pueda "regalarse" un plan Pro editando el navegador)
create policy "subscripciones_select_own" on public.subscripciones for select
  using (exists (
    select 1 from public.providers p
    where p.id = subscripciones.provider_id and p.owner_id = auth.uid()
  ));
