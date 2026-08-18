/**
 * mock_data.js — Keilu v2.2 | Base de datos de 50 proveedores
 * 20 Catálogo Azul (Trabajadores) + 20 Catálogo Verde (Comercios) + 10 Catálogo Naranjo (Eventos Vecinales)
 * Coordenadas reales de Google Earth asignadas sobre calles de Hualpén y Talcahuano.
 */

const providersData = [

  // =====================================================================
  // CATÁLOGO AZUL 🔵 — TRABAJADORES INDEPENDIENTES (IDs 101-120)
  // =====================================================================
  {
    id: 101, tipo: 'azul', plan: 'pro', dePago: true, subPlan: 'pro', radarActivo: true, verificado: true, rankingScore: 150,
    identidad: {
      nombre: 'Juan Carlos Aravena — Gasfiter', rubroId: 'wrench', emoji: '🔧',
      especialidad: '💧 Destape de cañerías, grifería y filtraciones 24/7',
      descripcion: 'Más de 10 años de experiencia solucionando urgencias de agua potable, grifería, alcantarillados y soldaduras en cobre en Hualpén y Talcahuano.',
      foto: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Juan Carlos Aravena'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/13.gif',
    stickerAccion: 'stickers/acciones trabajadores/03-urgencias-24hrs/00-default.gif',
    visualMapa: { animClass: 'anim-wrench', animSpeed: 1.6, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: {
      tiempoRespuesta: '15-20 min',
      estadoVivo: { activo: true, texto: '⚡ EN VIVO: Voy en camino', expiraEn: '2026-07-31T20:00:00Z' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Plan Pro', tarifaPagada: '$14.990 CLP' },
    ubicacion: { lat: -36.802952, lng: -73.101704, calle: 'Av. Gran Bretaña 1230', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301001', whatsapp: 'https://wa.me/56912301001', horario: '24/7', dias: 'Lunes a Domingo' }
  },
  {
    id: 102, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: true, rankingScore: 80,
    identidad: {
      nombre: 'Roberto Sanhueza — Garzón', rubroId: 'food', emoji: '🤵',
      especialidad: '🤵 Servicio de garzón para eventos y banquetes',
      descripcion: 'Atención profesional y cordial para bodas, cumpleaños, cenas de empresa y banquetes particulares. Excelente presencia y servicio de primer nivel.',
      foto: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Roberto Sanhueza'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/18.gif',
    stickerAccion: 'stickers/acciones trabajadores/13-animar/00-default.gif',
    visualMapa: { animClass: 'anim-eat', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.777602, lng: -73.114310, calle: 'Calle Los Acacios 340', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301002', whatsapp: 'https://wa.me/56912301002', horario: 'Flexible', dias: 'Viernes a Domingo' }
  },
  {
    id: 103, tipo: 'azul', plan: 'pro', dePago: true, subPlan: 'pro', radarActivo: true, verificado: true, rankingScore: 150,
    identidad: {
      nombre: 'Manuel Collao — Fletes', rubroId: 'truck', emoji: '📦',
      especialidad: '📦 Mudanzas locales y fletes express',
      descripcion: 'Traslados rápidos y seguros en Hualpén, Talcahuano y Concepción. Carga y descarga cuidadosa de muebles y electrodomésticos.',
      foto: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Manuel Collao'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/12.gif',
    stickerAccion: 'stickers/acciones trabajadores/06-transportar/00-default.gif',
    visualMapa: { animClass: 'anim-truck', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Plan Pro', tarifaPagada: '$14.990 CLP' },
    ubicacion: { lat: -36.778497, lng: -73.110512, calle: 'Calle Tirana 412', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301003', whatsapp: 'https://wa.me/56912301003', horario: '08:00 - 20:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 104, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: true, rankingScore: 80,
    identidad: {
      nombre: 'Nicole Valenzuela — Estilista', rubroId: 'scissors', emoji: '✂️',
      especialidad: '💇 Cortes unisex, peinados y tintura a domicilio',
      descripcion: 'Estilista profesional a domicilio. Especialista en visagismo, balayage, masajes capilares y peinados de fiesta para damas y varones.',
      foto: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Nicole Valenzuela'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/01.gif',
    stickerAccion: 'stickers/acciones trabajadores/02-domicilio/00-default.gif',
    visualMapa: { animClass: 'anim-scissors', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.772564, lng: -73.089774, calle: 'Calle Las Amapolas 421', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301004', whatsapp: 'https://wa.me/56912301004', horario: '10:00 - 19:30 hrs', dias: 'Martes a Domingo' }
  },
  {
    id: 105, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Javiera Ignacia — Manicurista', rubroId: 'nails', emoji: '💅',
      especialidad: '💅 Esmaltado permanente, acrílicas y nail art',
      descripcion: 'Manicurista profesional. Esculpidas en acrílico, gel, soft gel, diseños a mano alzada y tratamientos de spa de manos a domicilio.',
      foto: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Javiera Ignacia'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/01.gif',
    stickerAccion: 'stickers/acciones trabajadores/02-domicilio/00-default.gif',
    visualMapa: { animClass: 'anim-nails', animSpeed: 2.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.787291, lng: -73.092732, calle: 'Calle Los Tilos 120', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301005', whatsapp: 'https://wa.me/56912301005', horario: '09:00 - 18:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 106, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Claudio Villagrán — Albañil', rubroId: 'brick', emoji: '🧱',
      especialidad: '🧱 Radieres, ampliaciones y colocación de cerámica',
      descripcion: 'Maestro de construcción y albañilería general. Levantamiento de muros, radieres, revoques, instalación de revestimientos y cerámicas.',
      foto: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Claudio Villagrán'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/13.gif',
    stickerAccion: 'stickers/acciones trabajadores/04-construir/00-default.gif',
    visualMapa: { animClass: 'anim-brick', animSpeed: 1.5, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.774728, lng: -73.100094, calle: 'Calle Los Naranjos 305', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301006', whatsapp: 'https://wa.me/56912301006', horario: '08:30 - 18:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 107, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Sebastián Pino — Jardinero', rubroId: 'garden', emoji: '🌱',
      especialidad: '🌱 Mantención de jardines y poda de árboles',
      descripcion: 'Corte de césped, orillado, podas de formación, control de maleza, mantención de jardineras y paisajismo básico.',
      foto: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1599685315640-9ce545938f32?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80',
        'https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?auto=format&fit=crop&w=600&q=80'
      ], atendidoPor: 'Sebastián Pino'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/03.gif',
    stickerAccion: 'stickers/acciones trabajadores/08-cortar/00-default.gif',
    visualMapa: { animClass: 'anim-garden', animSpeed: 1.6, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.785080, lng: -73.103431, calle: 'Calle Las Orquídeas 320', sector: 'Hualpén Residencial', privacidad: 'aproximada',
      pinesAleatorios: [
        { lat: -36.785500, lng: -73.103500 },
        { lat: -36.787000, lng: -73.101000 },
        { lat: -36.783000, lng: -73.105000 }
      ]
    },
    contacto: { fono: '+56912301007', whatsapp: 'https://wa.me/56912301007', horario: '09:00 - 18:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 108, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: true, rankingScore: 80,
    identidad: {
      nombre: 'Andrés Leyton — Guardia', rubroId: 'shield', emoji: '🛡️',
      especialidad: '🛡️ Guardia de seguridad privado para eventos y recintos',
      descripcion: 'Servicio de seguridad con certificación OS-10 al día. Control de accesos, rondas nocturnas, resguardo de eventos privados y locales comerciales.',
      foto: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Andrés Leyton'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/16.gif',
    stickerAccion: 'stickers/acciones trabajadores/10-cuidar/00-default.gif',
    visualMapa: { animClass: 'anim-shield', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.781652, lng: -73.095730, calle: 'Calle Los Jazmines 340', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301008', whatsapp: 'https://wa.me/56912301008', horario: 'Flexible', dias: 'Lunes a Domingo' }
  },
  {
    id: 109, tipo: 'azul', plan: 'pro', dePago: true, subPlan: 'pro', radarActivo: true, verificado: true, rankingScore: 150,
    identidad: {
      nombre: 'Francisco Javier — Técnico PC', rubroId: 'screen', emoji: '💻',
      especialidad: '💻 Formateo, reparación y mantención de PC y notebooks',
      descripcion: 'Soporte informático integral a domicilio. Instalación de sistemas operativos, antivirus, optimización, respaldo y cambio de hardware.',
      foto: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Francisco Javier'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/05.gif',
    stickerAccion: 'stickers/acciones trabajadores/09-diagnosticar/00-default.gif',
    visualMapa: { animClass: 'anim-screen', animSpeed: 1.4, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Plan Pro', tarifaPagada: '$14.990 CLP' },
    ubicacion: { lat: -36.792888, lng: -73.105735, calle: 'Calle Los Maitenes 510', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301009', whatsapp: 'https://wa.me/56912301009', horario: '09:00 - 19:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 110, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'María Inés Troncoso — Costurera', rubroId: 'needle', emoji: '🧵',
      especialidad: '🧵 Bastas de ropa, entalles y cambio de cierres',
      descripcion: 'Costura rápida, remiendos, confección de cortinajes simples y arreglos de ropa de vestir, uniformes escolares y cierres.',
      foto: 'https://images.unsplash.com/photo-1528570916301-eb179b286b2e?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'María Inés Troncoso'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/14.gif',
    stickerAccion: 'stickers/acciones trabajadores/01-reparar/00-default.gif',
    visualMapa: { animClass: 'anim-needle', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.792241, lng: -73.089212, calle: 'Calle Nápoles 230', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301010', whatsapp: 'https://wa.me/56912301010', horario: '09:30 - 18:30 hrs', dias: 'Lunes a Viernes' }
  },
  {
    id: 111, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Mauricio Iron — Soldador', rubroId: 'solder', emoji: '🧑‍🏭',
      especialidad: '🧑‍🏭 Estructuras metálicas y soldaduras de emergencia',
      descripcion: 'Fabricación y mantención de rejas, portones automáticos, protecciones de ventanas y estructuras ligeras para terrazas.',
      foto: 'https://images.unsplash.com/photo-1531842477197-e3f85e431115?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Mauricio Iron'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/13.gif',
    stickerAccion: 'stickers/acciones trabajadores/04-construir/00-default.gif',
    visualMapa: { animClass: 'anim-solder', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.791686, lng: -73.111000, calle: 'Calle Milan 310', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301011', whatsapp: 'https://wa.me/56912301011', horario: '08:30 - 18:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 112, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Patricia Alarcón — Limpieza Tapices', rubroId: 'sponge', emoji: '🧹',
      especialidad: '🧹 Lavado profundo de sillones, alfombras y colchones',
      descripcion: 'Higienización y eliminación de manchas/olores en tapices de autos, sillones y colchones mediante inyección y extracción profunda.',
      foto: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Patricia Alarcón'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/09.gif',
    stickerAccion: 'stickers/acciones trabajadores/05-limpiar/00-default.gif',
    visualMapa: { animClass: 'anim-sponge', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.793125, lng: -73.113578, calle: 'Calle Verona 911', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301012', whatsapp: 'https://wa.me/56912301012', horario: '09:00 - 18:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 113, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Luis Hermosilla — Carpintero', rubroId: 'wood', emoji: '🪚',
      especialidad: '🪚 Clósets, muebles de cocina a medida y reparaciones',
      descripcion: 'Mueblista experto. Diseño e instalación de repisas, puertas, reparación de muebles de madera y construcciones de cobertizo.',
      foto: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Luis Hermosilla'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/13.gif',
    stickerAccion: 'stickers/acciones trabajadores/04-construir/00-default.gif',
    visualMapa: { animClass: 'anim-wood', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.797843, lng: -73.104002, calle: 'Calle Génova 412', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301013', whatsapp: 'https://wa.me/56912301013', horario: '09:00 - 18:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 114, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Cristóbal Kine — Kinesiólogo', rubroId: 'health', emoji: '🩺',
      especialidad: '🩺 Kinesiología respiratoria, motora y rehabilitación',
      descripcion: 'Evaluación y tratamiento integral en la comodidad de tu hogar. Especialista en geriatría, traumatología y lesiones deportivas.',
      foto: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Cristóbal Kine'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/15.gif',
    stickerAccion: 'stickers/acciones trabajadores/10-cuidar/00-default.gif',
    visualMapa: { animClass: 'anim-health', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.776812, lng: -73.090050, calle: 'Calle Los Tilos 912', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301014', whatsapp: 'https://wa.me/56912301014', horario: '08:00 - 20:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 115, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Constanza Mascotas — Paseadora', rubroId: 'pet', emoji: '🐕',
      especialidad: '🐕 Paseos recreativos y cuidado de mascotas',
      descripcion: 'Paseadora de perros con experiencia en conducta canina. Paseos individuales enriquecidos y cuidado a domicilio durante viajes.',
      foto: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Constanza Mascotas'
    },
    stickerRubro: 'stickers/trabajadores/13-mascotas/00-default.gif',
    stickerAccion: 'stickers/acciones trabajadores/10-cuidar/00-default.gif',
    visualMapa: { animClass: 'anim-pet', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.783806, lng: -73.097270, calle: 'Pasaje Nápoles 80', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301015', whatsapp: 'https://wa.me/56912301015', horario: '08:00 - 19:00 hrs', dias: 'Lunes a Viernes' }
  },
  {
    id: 116, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Elena Gómez — Profesora Baile', rubroId: 'dance', emoji: '💃',
      especialidad: '💃 Clases de baile, Zumba y Ritmos Latinos',
      descripcion: 'Instructora certificada de zumba y ritmos. Clases dinámicas grupales, coreografías personalizadas y talleres de baile para todas las edades.',
      foto: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Elena Gómez'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/07.gif',
    stickerAccion: 'stickers/acciones trabajadores/11-ensenar/00-default.gif',
    visualMapa: { animClass: 'anim-dance', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.779398, lng: -73.108760, calle: 'Calle Florencia 800', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301016', whatsapp: 'https://wa.me/56912301016', horario: 'Flexible', dias: 'Lunes a Sábado' }
  },
  {
    id: 117, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Gabriel Soto — Mecánico', rubroId: 'car', emoji: '🚗',
      especialidad: '🚗 Afinamiento, cambio de pastillas de freno y escáner en terreno',
      descripcion: 'Mecánico automotriz profesional a domicilio. Diagnóstico por escáner multimarca, mantención preventiva y reparaciones mecánicas menores.',
      foto: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Gabriel Soto'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/12.gif',
    stickerAccion: 'stickers/acciones trabajadores/09-diagnosticar/00-default.gif',
    visualMapa: { animClass: 'anim-car', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.777880, lng: -73.101931, calle: 'Calle Valdivia 110', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301017', whatsapp: 'https://wa.me/56912301017', horario: '09:00 - 18:30 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 118, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Elena Ruiz — Cuidadora y Tens', rubroId: 'health', emoji: '👵',
      especialidad: '👵 Cuidado y acompañamiento de adultos mayores a domicilio',
      descripcion: 'Técnico en Enfermería (TENS) con amplia experiencia en cuidado domiciliario de pacientes con movilidad reducida y adultos mayores.',
      foto: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Elena Ruiz'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/15.gif',
    stickerAccion: 'stickers/acciones trabajadores/10-cuidar/00-default.gif',
    visualMapa: { animClass: 'anim-health', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.769199, lng: -73.071916, calle: 'Pasaje El Roble 20', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301018', whatsapp: 'https://wa.me/56912301018', horario: 'Turnos a convenir', dias: 'Lunes a Domingo' }
  },
  {
    id: 119, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Catalina Paz — Profesora Particular', rubroId: 'education', emoji: '📝',
      especialidad: '📝 Reforzamiento de matemáticas, física y preparación PAES',
      descripcion: 'Clases particulares de reforzamiento escolar y preparación de pruebas de admisión. Metodología personalizada para enseñanza básica y media.',
      foto: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Catalina Paz'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/04.gif',
    stickerAccion: 'stickers/acciones trabajadores/11-ensenar/00-default.gif',
    visualMapa: { animClass: 'anim-education', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.791269, lng: -73.082015, calle: 'Calle Los Tilos 240', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301019', whatsapp: 'https://wa.me/56912301019', horario: '15:00 - 20:00 hrs', dias: 'Lunes a Viernes' }
  },
  {
    id: 120, tipo: 'azul', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Alejandro Llave Maestra — Cerrajero', rubroId: 'key', emoji: '🔑',
      especialidad: '🔑 Apertura de puertas y cambio de chapas de seguridad',
      descripcion: 'Servicio técnico de cerrajería domiciliaria de urgencia. Apertura de puertas trabadas, cambio de cilindros, chapas eléctricas y candados.',
      foto: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Alejandro Llave Maestra'
    },
    stickerRubro: 'stickers/trabajadores/18-avatar/13.gif',
    stickerAccion: 'stickers/acciones trabajadores/03-urgencias-24hrs/00-default.gif',
    visualMapa: { animClass: 'anim-key', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Agendamiento',
      estadoVivo: { activo: false, texto: '', expiraEn: '' },
      boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.797054, lng: -73.088420, calle: 'Calle Las Heras 90', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56912301020', whatsapp: 'https://wa.me/56912301020', horario: '24/7', dias: 'Lunes a Domingo' }
  },

  // =====================================================================
  // CATÁLOGO VERDE 🟢 — COMERCIOS, LOCALES Y EMPRESAS (IDs 301-320)
  // =====================================================================
  {
    id: 301, tipo: 'verde', plan: 'pro', dePago: true, subPlan: 'pro', radarActivo: true, verificado: true, rankingScore: 150,
    identidad: {
      nombre: 'Minimarket El Vecino', rubroId: 'minimarket', emoji: '🛒',
      especialidad: '🛒 Abarrotes, bebidas y productos de primera necesidad',
      descripcion: 'Minimarket de barrio abierto todos los días, con despacho a domicilio en el sector. Variedad de abarrotes, lácteos, bebidas y artículos de aseo.',
      foto: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Familia Muñoz'
    },
    stickerRubro: 'stickers/empresa/02-almacenes-minimarkets/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/01-desapacho-delivery/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: { tiempoRespuesta: '20-30 min', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Plan Pro', tarifaPagada: '$14.990 CLP' },
    ubicacion: { lat: -36.802900, lng: -73.100976, calle: 'Local 3, Avenida Gran Bretaña', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010001', whatsapp: 'https://wa.me/56930010001', horario: '08:00 - 22:00 hrs', dias: 'Lunes a Domingo' }
  },
  {
    id: 302, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: true, rankingScore: 80,
    identidad: {
      nombre: 'Panadería San Pedro', rubroId: 'panaderia', emoji: '🥖',
      especialidad: '🥖 Pan amasado, pastelería y tortas por encargo',
      descripcion: 'Panadería tradicional con horneado diario. Pan amasado, marraqueta, completos y tortas de cumpleaños por encargo con 24 horas de anticipación.',
      foto: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Panadería San Pedro'
    },
    stickerRubro: 'stickers/empresa/03-panaderia-reposteria/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/02-retiro-en-tienda/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Retiro en tienda', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.778639, lng: -73.114552, calle: 'Local 5, Calle Costanera', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010002', whatsapp: 'https://wa.me/56930010002', horario: '07:30 - 21:00 hrs', dias: 'Lunes a Domingo' }
  },
  {
    id: 303, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Ferretería Hualpén', rubroId: 'ferreteria', emoji: '🔨',
      especialidad: '🔨 Materiales de construcción y herramientas',
      descripcion: 'Ferretería de barrio con materiales de construcción, pinturas, herramientas manuales y artículos eléctricos básicos.',
      foto: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Ferretería Hualpén'
    },
    stickerRubro: 'stickers/empresa/07-ferreteria-construccion/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/07-compras-presencial/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Compra en local', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.778221, lng: -73.111213, calle: 'Local 8, Calle Tirana', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010003', whatsapp: 'https://wa.me/56930010003', horario: '09:00 - 19:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 304, tipo: 'verde', plan: 'pro', dePago: true, subPlan: 'pro', radarActivo: true, verificado: true, rankingScore: 150,
    identidad: {
      nombre: 'Botillería La Esquina', rubroId: 'botilleria', emoji: '🍾',
      especialidad: '🍾 Bebidas, cervezas y despacho express',
      descripcion: 'Botillería con despacho a domicilio en menos de 30 minutos. Amplia variedad de cervezas, vinos y bebidas heladas.',
      foto: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Botillería La Esquina'
    },
    stickerRubro: 'stickers/empresa/12-licoreria-botilleria/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/01-desapacho-delivery/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: { tiempoRespuesta: '15-30 min', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Plan Pro', tarifaPagada: '$14.990 CLP' },
    ubicacion: { lat: -36.771748, lng: -73.088862, calle: 'Local 2, Calle Las Amapolas', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010004', whatsapp: 'https://wa.me/56930010004', horario: '11:00 - 23:00 hrs', dias: 'Lunes a Domingo' }
  },
  {
    id: 305, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Pizzería Toscana', rubroId: 'pizzeria', emoji: '🍕',
      especialidad: '🍕 Pizzas artesanales a la piedra',
      descripcion: 'Pizzería familiar con masa artesanal fermentada 24 horas. Despacho propio y retiro en local.',
      foto: 'https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Pizzería Toscana'
    },
    stickerRubro: 'stickers/empresa/01-gastronomia-cafes/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/01-desapacho-delivery/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: '30-45 min', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.787852, lng: -73.092285, calle: 'Local 1, Calle Los Tilos', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010005', whatsapp: 'https://wa.me/56930010005', horario: '18:00 - 23:30 hrs', dias: 'Miércoles a Domingo' }
  },
  {
    id: 306, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: true, rankingScore: 80,
    identidad: {
      nombre: 'Farmacia Vida Sana', rubroId: 'farmacia', emoji: '💊',
      especialidad: '💊 Medicamentos y despacho de recetas',
      descripcion: 'Farmacia de barrio con atención de químico farmacéutico, despacho de recetas y productos de cuidado personal.',
      foto: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Farmacia Vida Sana'
    },
    stickerRubro: 'stickers/empresa/09-salud-farmacia/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/07-compras-presencial/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Atención en local', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.775058, lng: -73.101450, calle: 'Local 4, Calle Los Naranjos', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010006', whatsapp: 'https://wa.me/56930010006', horario: '08:30 - 21:00 hrs', dias: 'Lunes a Domingo' }
  },
  {
    id: 307, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Veterinaria Patitas', rubroId: 'veterinaria', emoji: '🐾',
      especialidad: '🐾 Consultas, vacunas y peluquería canina',
      descripcion: 'Clínica veterinaria de barrio. Consultas generales, vacunación, desparasitación y baño/peluquería para perros y gatos.',
      foto: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Veterinaria Patitas'
    },
    stickerRubro: 'stickers/empresa/10-mascotas-veterinaria/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/04-reservas-agendas/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Con hora agendada', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.784374, lng: -73.103451, calle: 'Local 6, Calle Génova', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010007', whatsapp: 'https://wa.me/56930010007', horario: '10:00 - 19:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 308, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Bazar y Librería El Estudiante', rubroId: 'libreria', emoji: '📚',
      especialidad: '📚 Útiles escolares, fotocopias e impresiones',
      descripcion: 'Bazar y librería con útiles escolares, artículos de oficina, fotocopiado, impresiones y encuadernado.',
      foto: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Bazar El Estudiante'
    },
    stickerRubro: 'stickers/empresa/05-bazar-libreria/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/07-compras-presencial/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Atención en local', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.781943, lng: -73.094308, calle: 'Local 9, Calle Suecia', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010008', whatsapp: 'https://wa.me/56930010008', horario: '09:00 - 20:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 309, tipo: 'verde', plan: 'pro', dePago: true, subPlan: 'pro', radarActivo: true, verificado: true, rankingScore: 150,
    identidad: {
      nombre: 'Carnicería Don José', rubroId: 'carniceria', emoji: '🥩',
      especialidad: '🥩 Carnes, cecinas y pollo fresco',
      descripcion: 'Carnicería de barrio con cortes frescos diarios, cecinas y pollo. Despacho a domicilio en el sector.',
      foto: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Carnicería Don José'
    },
    stickerRubro: 'stickers/empresa/13-carnes-alimentos-frescos/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/01-desapacho-delivery/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: { tiempoRespuesta: '20-40 min', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Plan Pro', tarifaPagada: '$14.990 CLP' },
    ubicacion: { lat: -36.793535, lng: -73.106201, calle: 'Local 7, Calle Los Maitenes', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010009', whatsapp: 'https://wa.me/56930010009', horario: '08:00 - 19:30 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 310, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Moda Sur', rubroId: 'ropa', emoji: '👕',
      especialidad: '👕 Ropa, calzado y accesorios',
      descripcion: 'Tienda de ropa y calzado para toda la familia, con nuevas colecciones cada temporada.',
      foto: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Moda Sur'
    },
    stickerRubro: 'stickers/empresa/04-ropa-zapatos-accesorios/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/07-compras-presencial/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Atención en local', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.791372, lng: -73.090274, calle: 'Local 10, Calle Nápoles', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010010', whatsapp: 'https://wa.me/56930010010', horario: '10:00 - 20:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 311, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Repuestos El Motor', rubroId: 'automotriz', emoji: '🚗',
      especialidad: '🚗 Repuestos y accesorios automotrices',
      descripcion: 'Venta de repuestos, lubricantes y accesorios para autos de todas las marcas. Asesoría técnica en el local.',
      foto: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Repuestos El Motor'
    },
    stickerRubro: 'stickers/empresa/08-automotriz-repuestos/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/07-compras-presencial/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Atención en local', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.791308, lng: -73.110139, calle: 'Local 11, Calle Milán', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010011', whatsapp: 'https://wa.me/56930010011', horario: '09:00 - 18:30 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 312, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: true, rankingScore: 80,
    identidad: {
      nombre: 'Cafetería Aroma', rubroId: 'cafeteria', emoji: '☕',
      especialidad: '☕ Café de especialidad y repostería',
      descripcion: 'Cafetería de barrio con café de grano, repostería casera y desayunos. Espacio para trabajar o reunirse con amigos.',
      foto: 'https://images.unsplash.com/photo-1516685018646-549198525c1b?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Cafetería Aroma'
    },
    stickerRubro: 'stickers/empresa/01-gastronomia-cafes/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/03-consumo-en-local/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Atención en local', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.794348, lng: -73.113222, calle: 'Local 13, Calle Verona', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010012', whatsapp: 'https://wa.me/56930010012', horario: '08:00 - 20:00 hrs', dias: 'Lunes a Domingo' }
  },
  {
    id: 313, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Construmax Ferretería', rubroId: 'ferreteria', emoji: '🧱',
      especialidad: '🧱 Cemento, fierros y materiales de obra gruesa',
      descripcion: 'Ferretería especializada en materiales de obra gruesa: cemento, fierros, áridos y despacho a obra.',
      foto: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Construmax'
    },
    stickerRubro: 'stickers/empresa/07-ferreteria-construccion/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/05-despacho-nacional/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Despacho a coordinar', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.797807, lng: -73.105034, calle: 'Local 14, Calle Génova', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010013', whatsapp: 'https://wa.me/56930010013', horario: '08:30 - 18:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 314, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Minimarket 24 Horas', rubroId: 'minimarket', emoji: '🏪',
      especialidad: '🏪 Abarrotes y snacks, atención nocturna',
      descripcion: 'Minimarket con atención las 24 horas. Snacks, bebidas, cigarrillos y artículos de urgencia.',
      foto: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Minimarket 24 Horas'
    },
    stickerRubro: 'stickers/empresa/02-almacenes-minimarkets/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/07-compras-presencial/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Atención en local', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.775580, lng: -73.089546, calle: 'Local 15, Calle Los Tilos', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010014', whatsapp: 'https://wa.me/56930010014', horario: '24/7', dias: 'Lunes a Domingo' }
  },
  {
    id: 315, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Pastelería Dulce Hogar', rubroId: 'pasteleria', emoji: '🎂',
      especialidad: '🎂 Tortas, kuchenes y pastelería fina',
      descripcion: 'Pastelería casera especializada en tortas de cumpleaños, kuchenes y pastelería fina por encargo.',
      foto: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Pastelería Dulce Hogar'
    },
    stickerRubro: 'stickers/empresa/03-panaderia-reposteria/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/04-reservas-agendas/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Por encargo', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.784288, lng: -73.096370, calle: 'Local 16, Calle Lebu', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010015', whatsapp: 'https://wa.me/56930010015', horario: '10:00 - 19:00 hrs', dias: 'Martes a Domingo' }
  },
  {
    id: 316, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Mi Casa Hogar y Decoración', rubroId: 'hogar', emoji: '🛋️',
      especialidad: '🛋️ Artículos de hogar, menaje y decoración',
      descripcion: 'Tienda de artículos para el hogar: menaje de cocina, textiles y decoración a precios convenientes.',
      foto: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Mi Casa Hogar y Decoración'
    },
    stickerRubro: 'stickers/empresa/06-hogar-decoracion/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/07-compras-presencial/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Atención en local', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.780268, lng: -73.110027, calle: 'Local 17, Calle Pasaje 1', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010016', whatsapp: 'https://wa.me/56930010016', horario: '10:00 - 19:30 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 317, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: true, rankingScore: 80,
    identidad: {
      nombre: 'Asesorías Sur', rubroId: 'oficina', emoji: '🗂️',
      especialidad: '🗂️ Asesoría contable, tributaria y trámites',
      descripcion: 'Oficina de contabilidad y asesorías para pymes y particulares: declaración de renta, boletas e IVA.',
      foto: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Asesorías Sur'
    },
    stickerRubro: 'stickers/empresa/11-servicios-oficinas/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/04-reservas-agendas/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Con hora agendada', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.777057, lng: -73.102409, calle: 'Local 18, Calle Iranda', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010017', whatsapp: 'https://wa.me/56930010017', horario: '09:00 - 18:00 hrs', dias: 'Lunes a Viernes' }
  },
  {
    id: 318, tipo: 'verde', plan: 'pro', dePago: true, subPlan: 'pro', radarActivo: true, verificado: true, rankingScore: 150,
    identidad: {
      nombre: 'Sushi Umi', rubroId: 'sushi', emoji: '🍣',
      especialidad: '🍣 Sushi y comida japonesa a domicilio',
      descripcion: 'Sushi bar con despacho a domicilio. Rolls tradicionales y especiales, promociones para grupos.',
      foto: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Sushi Umi'
    },
    stickerRubro: 'stickers/empresa/01-gastronomia-cafes/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/01-desapacho-delivery/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: { tiempoRespuesta: '30-50 min', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Plan Pro', tarifaPagada: '$14.990 CLP' },
    ubicacion: { lat: -36.769121, lng: -73.071326, calle: 'Local 19, Calle El Roble', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010018', whatsapp: 'https://wa.me/56930010018', horario: '18:30 - 23:00 hrs', dias: 'Miércoles a Domingo' }
  },
  {
    id: 319, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Zapatería El Paso', rubroId: 'zapateria', emoji: '👟',
      especialidad: '👟 Calzado para toda la familia',
      descripcion: 'Zapatería con calzado escolar, deportivo y de vestir para toda la familia.',
      foto: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Zapatería El Paso'
    },
    stickerRubro: 'stickers/empresa/04-ropa-zapatos-accesorios/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/07-compras-presencial/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Atención en local', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.792211, lng: -73.082145, calle: 'Local 20, Calle Los Tilos', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010019', whatsapp: 'https://wa.me/56930010019', horario: '10:00 - 20:00 hrs', dias: 'Lunes a Sábado' }
  },
  {
    id: 320, tipo: 'verde', plan: 'gratis', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Botillería Punto Full', rubroId: 'botilleria', emoji: '🍺',
      especialidad: '🍺 Cervezas artesanales y bebidas',
      descripcion: 'Botillería con selección de cervezas artesanales nacionales e importadas, bebidas y snacks.',
      foto: 'https://images.unsplash.com/photo-1567958451986-2de427a4a0be?auto=format&fit=crop&w=400&q=80',
      galeria: [], atendidoPor: 'Botillería Punto Full'
    },
    stickerRubro: 'stickers/empresa/12-licoreria-botilleria/00-default.gif',
    stickerAccion: 'stickers/acciones empresas/07-compras-presencial/00-default.gif',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: { tiempoRespuesta: 'Atención en local', estadoVivo: { activo: false, texto: '', expiraEn: '' }, boostGratis: { activo: false, turnosRestantes: 0, duracionHoras: 0 } },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.796860, lng: -73.089021, calle: 'Local 21, Calle Las Heras', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56930010020', whatsapp: 'https://wa.me/56930010020', horario: '11:00 - 22:00 hrs', dias: 'Lunes a Domingo' }
  },

  // =====================================================================
  // CATÁLOGO NARANJO 🟠 — EVENTOS Y ACTIVIDADES COMUNITARIAS (IDs 201-210)
  // =====================================================================

  {
    id: 201, tipo: 'naranja', plan: 'pro', dePago: true, subPlan: 'pro_diario', radarActivo: true, verificado: true, rankingScore: 150,
    identidad: {
      nombre: 'Bingo Solidario Sede Norte',
      rubroId: 'megafono', emoji: '🟠',
      especialidad: '🎲 Gran Bingo a beneficio de Don Lucho',
      descripcion: 'Bingo a beneficio para costear gastos médicos del vecino Luis Fuentes. Excelentes premios: electrodomésticos, canastas familiares y más. ¡Venta de empanadas y bebidas!',
      foto: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80'
      ],
      atendidoPor: 'Familia Fuentes y Vecinos'
    },
    stickerRubro: 'stickers/comunidad/01-solidario/00-default.gif',
    stickerAccion: '',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: {
      tiempoRespuesta: 'Evento',
      estadoVivo: { activo: true, texto: '🎲 BINGO SOLIDARIO HOY 15:00', expiraEn: '2026-07-31T22:00:00Z' }
    },
    suscripcionInfo: { duracionActiva: 'Evento Diario', tarifaPagada: '$990 CLP' },
    ubicacion: { lat: -36.803498, lng: -73.102701, calle: 'Calle Las Orquídeas 320, Sede Social', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56911223344', whatsapp: 'https://wa.me/56911223344', horario: 'Termina: 2026-07-31 22:00', dias: 'Viernes' }
  },
  {
    id: 202, tipo: 'naranja', plan: 'pro', dePago: true, subPlan: 'pro_diario', radarActivo: true, verificado: true, rankingScore: 150,
    identidad: {
      nombre: 'Completada Sede Vecinal',
      rubroId: 'megafono', emoji: '🌭',
      especialidad: '🌭 Ricas completadas solidarias a luca',
      descripcion: 'Venta de completadas italianas con bebida para reunir fondos de la junta de vecinos para el equipamiento de la multicancha del pasaje. ¡Apóyanos!',
      foto: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=400&q=80'
      ],
      atendidoPor: 'Junta de Vecinos N°4'
    },
    stickerRubro: 'stickers/comunidad/01-solidario/00-default.gif',
    stickerAccion: '',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: {
      tiempoRespuesta: 'Evento',
      estadoVivo: { activo: true, texto: '🌭 COMPLETADA SOLIDARIA AHORA', expiraEn: '2026-07-31T21:00:00Z' }
    },
    suscripcionInfo: { duracionActiva: 'Evento Diario', tarifaPagada: '$990 CLP' },
    ubicacion: { lat: -36.777987, lng: -73.110728, calle: 'Calle Los Aromos 455, Multicancha', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56922334455', whatsapp: 'https://wa.me/56922334455', horario: 'Termina: 2026-07-31 21:00', dias: 'Sábado' }
  },
  {
    id: 203, tipo: 'naranja', plan: 'pro', dePago: true, subPlan: 'pro_semanal', radarActivo: true, verificado: false, rankingScore: 120,
    identidad: {
      nombre: 'Taller de Yoga en Plaza',
      rubroId: 'megafono', emoji: '🧘',
      especialidad: '🧘 Clases de Yoga abiertas a la comunidad',
      descripcion: 'Clases de yoga multinivel al aire libre en la plaza Brisas del Sol. Trae tu mat o manta y conéctate con tus vecinos. Aporte voluntario sugerido.',
      foto: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=400&q=80'
      ],
      atendidoPor: 'Instructora Sofía G.'
    },
    stickerRubro: 'stickers/comunidad/02-talleres/00-default.gif',
    stickerAccion: '',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: {
      tiempoRespuesta: 'Taller',
      estadoVivo: { activo: true, texto: '🧘 YOGA AL AIRE LIBRE MAÑANA', expiraEn: '2026-07-31T18:00:00Z' }
    },
    suscripcionInfo: { duracionActiva: '1 Semana (7 días)', tarifaPagada: '$3.990 CLP' },
    ubicacion: { lat: -36.787237, lng: -73.091476, calle: 'Plaza Central Brisas del Sol', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56933445566', whatsapp: 'https://wa.me/56933445566', horario: 'Termina: 2026-08-05 12:00', dias: 'Sábados' }
  },
  {
    id: 204, tipo: 'naranja', plan: 'basico', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Reunión Vecinal Pasaje B',
      rubroId: 'megafono', emoji: '🗣️',
      especialidad: '📌 Reunión urgente para temas de seguridad',
      descripcion: 'Asamblea extraordinaria del pasaje B para coordinar la instalación de nuevas alarmas comunitarias e iluminación del portón. Asistencia obligatoria.',
      foto: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80'
      ],
      atendidoPor: 'Coordinador del Pasaje B'
    },
    stickerRubro: 'stickers/comunidad/03-reuniones/00-default.gif',
    stickerAccion: '',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Asamblea',
      estadoVivo: { activo: false, texto: '' }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.785645, lng: -73.103588, calle: 'Calle Nápoles, Pasaje B central', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56944556677', whatsapp: 'https://wa.me/56944556677', horario: 'Termina: 2026-07-31 21:30', dias: 'Hoy' }
  },
  {
    id: 205, tipo: 'naranja', plan: 'basico', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Taller de Fútbol Infantil',
      rubroId: 'megafono', emoji: '⚽',
      especialidad: '⚽ Clases gratis para niños de 6 a 12 años',
      descripcion: 'Escuela de fútbol de barrio en la multicancha municipal. Ejercicios, compañerismo y partidos recreativos. Inscripción totalmente gratuita.',
      foto: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80'
      ],
      atendidoPor: 'Profesor Ricardo S.'
    },
    stickerRubro: 'stickers/comunidad/02-talleres/00-default.gif',
    stickerAccion: '',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Taller',
      estadoVivo: { activo: false, texto: '' }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.792393, lng: -73.106889, calle: 'Calle Florencia 800, Cancha Sintética', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56955667788', whatsapp: 'https://wa.me/56955667788', horario: 'Termina: 2026-08-10 19:00', dias: 'Miércoles y Viernes' }
  },
  {
    id: 206, tipo: 'naranja', plan: 'pro', dePago: true, subPlan: 'pro_diario', radarActivo: true, verificado: false, rankingScore: 120,
    identidad: {
      nombre: 'Rifa Vecinal Pro-Fondos',
      rubroId: 'megafono', emoji: '🎟️',
      especialidad: '🎟️ Gran Rifa por remodelación de la Capilla',
      descripcion: 'Rifa comunitaria para reunir fondos para pintar la techumbre de la capilla del sector. 10 fabulosos premios sorpresa. ¡Pide tu número aquí!',
      foto: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80'
      ],
      atendidoPor: 'Comité de la Capilla Hualpén'
    },
    stickerRubro: 'stickers/comunidad/01-solidario/00-default.gif',
    stickerAccion: '',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: {
      tiempoRespuesta: 'Evento',
      estadoVivo: { activo: true, texto: '🎟️ ÚLTIMOS NÚMEROS DISPONIBLES', expiraEn: '2026-07-31T21:00:00Z' }
    },
    suscripcionInfo: { duracionActiva: 'Evento Diario', tarifaPagada: '$990 CLP' },
    ubicacion: { lat: -36.791239, lng: -73.110465, calle: 'Calle Suecia 544, Capilla', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56966778899', whatsapp: 'https://wa.me/56966778899', horario: 'Termina: 2026-07-31 21:00', dias: 'Sábado' }
  },
  {
    id: 207, tipo: 'naranja', plan: 'basico', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Asamblea Junta de Vecinos',
      rubroId: 'megafono', emoji: '📌',
      especialidad: '👥 Reunión ordinaria mensual de socios',
      descripcion: 'Asamblea general para discutir proyectos de pavimentación participativa, postulación a fondos FNDR y rendición de cuentas del mes.',
      foto: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=400&q=80'
      ],
      atendidoPor: 'Directiva JJVV N°3'
    },
    stickerRubro: 'stickers/comunidad/03-reuniones/00-default.gif',
    stickerAccion: '',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Asamblea',
      estadoVivo: { activo: false, texto: '' }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.798780, lng: -73.103311, calle: 'Calle Las Magnolias 120, Sede Social', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56977889900', whatsapp: 'https://wa.me/56977889900', horario: 'Termina: 2026-07-31 20:00', dias: 'Viernes' }
  },
  {
    id: 208, tipo: 'naranja', plan: 'pro', dePago: true, subPlan: 'pro_semanal', radarActivo: true, verificado: false, rankingScore: 120,
    identidad: {
      nombre: 'Taller de Tejido Vecinal',
      rubroId: 'megafono', emoji: '🧶',
      especialidad: '🧶 Clases de tejido a telar y crochet',
      descripcion: 'Taller recreativo gratuito para vecinos y vecinas del pasaje. Aprende técnicas básicas y avanzadas en un espacio de conversación y apoyo mutuo.',
      foto: 'https://images.unsplash.com/photo-1528570916301-eb179b286b2e?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1528570916301-eb179b286b2e?auto=format&fit=crop&w=400&q=80'
      ],
      atendidoPor: 'Monitora Elena R.'
    },
    stickerRubro: 'stickers/comunidad/02-talleres/00-default.gif',
    stickerAccion: '',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: {
      tiempoRespuesta: 'Taller',
      estadoVivo: { activo: true, texto: '🧶 TALLER DE TEJIDO MAÑANA', expiraEn: '2026-07-31T17:00:00Z' }
    },
    suscripcionInfo: { duracionActiva: '1 Semana (7 días)', tarifaPagada: '$3.990 CLP' },
    ubicacion: { lat: -36.783976, lng: -73.098065, calle: 'Calle Viena 844, Sede Social', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56988990011', whatsapp: 'https://wa.me/56988990011', horario: 'Termina: 2026-08-04 18:00', dias: 'Martes' }
  },
  {
    id: 209, tipo: 'naranja', plan: 'basico', dePago: false, subPlan: 'gratis', radarActivo: false, verificado: false, rankingScore: 50,
    identidad: {
      nombre: 'Operativo Vacunación Mascotas',
      rubroId: 'megafono', emoji: '🐶',
      especialidad: '🐕 Vacunación antirrábica a bajo costo',
      descripcion: 'Operativo veterinario municipal coordinado por la junta de vecinos. Vacunación y desparasitación para perros y gatos. Cupos limitados por orden de llegada.',
      foto: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=400&q=80'
      ],
      atendidoPor: 'Veterinario Municipal y Vecinos'
    },
    stickerRubro: 'stickers/comunidad/03-reuniones/00-default.gif',
    stickerAccion: '',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: false, radarPulse: false },
    tiemposYAcciones: {
      tiempoRespuesta: 'Operativo',
      estadoVivo: { activo: false, texto: '' }
    },
    suscripcionInfo: { duracionActiva: 'Gratis', tarifaPagada: '$0 CLP' },
    ubicacion: { lat: -36.776752, lng: -73.101914, calle: 'Calle Milan 310, Sede Social', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56999001122', whatsapp: 'https://wa.me/56999001122', horario: 'Termina: 2026-07-31 14:00', dias: 'Hoy' }
  },
  {
    id: 210, tipo: 'naranja', plan: 'pro', dePago: true, subPlan: 'pro_diario', radarActivo: true, verificado: true, rankingScore: 150,
    identidad: {
      nombre: 'Gran Bingo Capilla Sur',
      rubroId: 'megafono', emoji: '🎲',
      especialidad: '🎲 Bingo familiar pro-viaje scouts',
      descripcion: 'Gran Bingo para financiar el viaje de fin de año del grupo Scout local. Excelentes premios donados por comerciantes del barrio. ¡Parrilladas y música en vivo!',
      foto: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80',
      galeria: [
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=400&q=80'
      ],
      atendidoPor: 'Dirigentes Scouts Hualpén'
    },
    stickerRubro: 'stickers/comunidad/01-solidario/00-default.gif',
    stickerAccion: '',
    visualMapa: { animClass: '', animSpeed: 1.0, marcoEstrella: true, radarPulse: true },
    tiemposYAcciones: {
      tiempoRespuesta: 'Evento',
      estadoVivo: { activo: true, texto: '🎲 BINGO SCOUTS EN VIVO', expiraEn: '2026-07-31T22:30:00Z' }
    },
    suscripcionInfo: { duracionActiva: 'Evento Diario', tarifaPagada: '$990 CLP' },
    ubicacion: { lat: -36.791466, lng: -73.081177, calle: 'Calle Las Magnolias 890, Capilla Sur', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56900112233', whatsapp: 'https://wa.me/56900112233', horario: 'Termina: 2026-07-31 22:30', dias: 'Sábado' }
  }

];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = providersData;
}
