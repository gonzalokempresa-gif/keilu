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
  // CATÁLOGO VERDE 🟢 — COMERCIOS, LOCALES Y EMPRESAS (VACÍO - RECONSTRUCCIÓN DE 0)
  // =====================================================================

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
    ubicacion: { lat: -36.782000, lng: -73.100000, calle: 'Calle Las Orquídeas 320, Sede Social', sector: 'Hualpén Residencial', privacidad: 'exacta' },
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
    ubicacion: { lat: -36.778000, lng: -73.095000, calle: 'Calle Los Aromos 455, Multicancha', sector: 'Hualpén Residencial', privacidad: 'exacta' },
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
    ubicacion: { lat: -36.785000, lng: -73.090000, calle: 'Plaza Central Brisas del Sol', sector: 'Hualpén Residencial', privacidad: 'exacta' },
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
    ubicacion: { lat: -36.783000, lng: -73.085000, calle: 'Calle Nápoles, Pasaje B central', sector: 'Hualpén Residencial', privacidad: 'exacta' },
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
    ubicacion: { lat: -36.787000, lng: -73.088000, calle: 'Calle Florencia 800, Cancha Sintética', sector: 'Hualpén Residencial', privacidad: 'exacta' },
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
    ubicacion: { lat: -36.789000, lng: -73.097000, calle: 'Calle Suecia 544, Capilla', sector: 'Hualpén Residencial', privacidad: 'exacta' },
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
    ubicacion: { lat: -36.775000, lng: -73.105000, calle: 'Calle Las Magnolias 120, Sede Social', sector: 'Hualpén Residencial', privacidad: 'exacta' },
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
    ubicacion: { lat: -36.781000, lng: -73.093000, calle: 'Calle Viena 844, Sede Social', sector: 'Hualpén Residencial', privacidad: 'exacta' },
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
    ubicacion: { lat: -36.786000, lng: -73.082000, calle: 'Calle Milan 310, Sede Social', sector: 'Hualpén Residencial', privacidad: 'exacta' },
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
    ubicacion: { lat: -36.791000, lng: -73.091000, calle: 'Calle Las Magnolias 890, Capilla Sur', sector: 'Hualpén Residencial', privacidad: 'exacta' },
    contacto: { fono: '+56900112233', whatsapp: 'https://wa.me/56900112233', horario: 'Termina: 2026-07-31 22:30', dias: 'Sábado' }
  }

];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = providersData;
}
