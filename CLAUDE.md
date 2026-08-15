# Keilu — Instrucciones y Arquitectura del Proyecto (Para Claude Code)

Este archivo es la guía maestra para el desarrollo de **Keilu**. Léelo antes de realizar cualquier cambio en el código.

---

## 👑 1. Contexto del Negocio y Liderazgo
* **Fundador y Dueño del Proyecto**: Gonzalo (`gonzalokempresa-gif`).
* **Liderazgo Técnico**: Gonzalo toma todas las decisiones de diseño, estética y arquitectura.
* **Estilo de Comunicación**: Explicaciones en **español claro, directo, sencillo y paso a paso**, sin tecnicismos innecesarios.
* **Control de Versiones**: Repositorio privado en GitHub (`gonzalokempresa-gif/keilu`).

---

## 🗺️ 2. ¿Qué es Keilu?
Keilu es una plataforma web interactiva y mapa en tiempo real para conectar a la comunidad con:
1. 🔵 **Catálogo Azul**: Trabajadores independientes y oficios del hogar (Gasfiter, Fletes, Electricistas, Técnicos, etc.).
2. 🟠 **Catálogo Naranjo**: Eventos vecinales y actividades comunitarias.
3. 🟢 **Catálogo Verde**: Empresas, locales comerciales y pymes.

---

## 💻 3. Stack Tecnológico
* **Frontend**: HTML5 semántico, Vanilla JavaScript (ES6+ moderno), Tailwind CSS (vía CDN).
* **Mapas & GPS**: MapLibre GL + MapTiler API (tiles y estilos vectoriales personalizados). Motor de rutas en vivo OSRM.
* **Activos Visuales**: Colección de stickers GIFs animados (`desktop/stickers/`).
* **Librería Central**: `desktop/js/utils.js` (`KeiluUtils`).

---

## 📂 4. Estructura de Archivos Clave
* `desktop/index.html`: Mapa principal, buscador en tiempo real, pines dinámicos, trazado de rutas GPS, tarjeta emergente de proveedor y panel *Explorar* (feed por rol).
* `desktop/js/utils.js`: Funciones globales (`KeiluUtils.normalizeProvider`, `KeiluUtils.buildWhatsAppUrl`, `KeiluUtils.fixStickerPath`, `KeiluUtils.isDayActive`).
* `desktop/mock_data.js`: Dataset de proveedores de prueba.
* `desktop/profile_view_worker.html`: Vista de perfil para trabajadores (Catálogo Azul).
* `desktop/profile_view_community.html`: Vista de perfil para eventos (Catálogo Naranjo).
* `desktop/profile_view_company.html`: Vista de perfil para locales y empresas (Catálogo Verde).
* `desktop/profile_editor_*.html`: Editores de perfil para cada categoría.
* `desktop/users_book.html`: Catálogo de usuarios por pestañas de colores.

---

## 🎨 5. Reglas Estéticas y de Pines (INVIOLABLES)
1. **Pines Pro de Trabajadores (Catálogo Azul)**:
   * 2 stickers cuadrados animados flotantes arriba (`34px x 34px`) con borde blanco nítido, sin fondos azules pesados detrás.
   * Caja de texto azul marino (`#052659`) abajo con tipografía bold blanca que contiene el nombre del oficio (`Fletes`, `Gasfiter`, `Técnico PC`).
2. **Pines Naranjos y Verdes**:
   * Mantienen su diseño de gota con sticker circular interior y borde de color según catálogo.
3. **Enlaces a WhatsApp**:
   * Usar siempre `KeiluUtils.buildWhatsAppUrl(fono, mensaje)` para procesar el código de país de Chile (`+56`) y abrir `https://wa.me/...`.
4. **Tarjetas del Feed Explorar (`index.html`)**:
   * Azul: `bg-[#eff6ff]` y borde `border-blue-200/80`.
   * Naranjo: `bg-[#fff7ed]` y borde `border-orange-200/80`.
   * Verde: `bg-[#f0fdf4]` y borde `border-emerald-200/80`.

---

## 🚀 6. Buenas Prácticas al Editar
* **No inventar librerías pesadas**: Mantener Vanilla JS y Tailwind CDN existentes.
* **Compatibilidad Móvil**: Toda vista debe ser perfectamente responsiva (móviles y escritorio).
* **Integridad**: No sobrescribir ni romper la lógica de `mock_data.js` ni de `KeiluUtils`.
