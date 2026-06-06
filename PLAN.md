# Plan de desarrollo — Sitio web Iglesia Cristiana

Propuesta integral, optimizada para tiempo de carga y mantenimiento simple (solo frontend, sin base de datos).

---

## 1. Stack tecnológico (implementado)

| Capa | Tecnología | Justificación |
|---|---|---|
| Estructura | **HTML5 estático** | Sin build, máxima simplicidad, abre directo en navegador |
| Estilos | **Tailwind CSS** (Play CDN) | Utility-first, sin paso de compilación |
| Interactividad | **Alpine.js** (CDN) | Menú mobile, acordeón declaración de fe, selector de idioma |
| Iconos | **SVG inline** (Heroicons) | Sin librerías externas |
| Tipografías | **Inter** (UI) + **Lora** (títulos/versículos) | Google Fonts |
| i18n | **Alpine.js Store** + `data-lang` + CSS | Selector ES/EN, persistencia en localStorage |
| Formulario de contacto | **Formspree** (pendiente configurar ID) | Sin backend propio |
| Hosting | Por definir (GitHub Pages, Cloudflare Pages o Netlify) | Gratis, CDN global, HTTPS automático |
| Analítica (opcional) | **Plausible** o **Umami** | Liviano, sin cookies |

---

## 2. Arquitectura de la información (páginas implementadas)

| # | Página | Archivo | Estado |
|---|---|---|---|
| 1 | **Home** | `index.html` | ✅ Hero + versículo, tarjetas de reuniones, sección redes sociales (YouTube/IG/FB), versículo destacado, CTA contacto |
| 2 | **Declaración de Fe** | `declaracion-de-fe.html` | ✅ 10 artículos doctrinales en acordeón colapsable (Alpine.js) |
| 3 | **Reuniones** | `reuniones.html` | ✅ 3 tarjetas de horario + ubicación + banner YouTube en vivo |
| 4 | **Noticias** | `noticias.html` | ✅ Página placeholder “Próximamente” con enlaces a redes sociales |
| 5 | **Contacto** | `contacto.html` | ✅ Formulario, mapa Google embebido, datos de contacto, WhatsApp |

**Secciones futuras (no implementadas aún):**
- Quiénes somos — Historia, misión, visión, pastores/liderazgo.
- Ministerios — Niños, jóvenes, matrimonios, alabanza, intercesión.
- Eventos y conferencias — Listado con fecha, lugar, imagen y enlace.
- Recursos / Prédicas — Embebidos de YouTube/Spotify.
- Galería — Fotos de eventos pasados.
- Ofrenda / Diezmo — Datos bancarios o enlace a pasarela.

---

## 3. Requisitos no funcionales

- **Responsive**: mobile-first, breakpoints 640 / 768 / 1024 / 1280 px.
- **Accesibilidad**: WCAG AA, navegación por teclado, contraste, `alt` en imágenes, `aria-*` en componentes interactivos.
- **SEO**: meta tags, Open Graph, `sitemap.xml`, `robots.txt`, datos estructurados `Church` (schema.org).
- **Performance objetivo**: Lighthouse ≥ 95 en las 4 métricas; LCP < 1.5 s en 4G.
- **Imágenes**: formato **WebP/AVIF**, `loading="lazy"`, tamaños responsivos (`srcset`).
- **PWA (opcional)**: manifest + service worker para acceso offline al horario y declaración de fe.
- **i18n**: Español e inglés implementados con Alpine.js Store (`lang.js`) + atributos `data-lang` + CSS toggle. Selector de idioma en nav (desktop dropdown + mobile botones). Preferencia persistida en `localStorage`.

---

## 4. Estructura de carpetas (actual)

```
Website/
├── index.html                  # Página de inicio
├── quienes-somos.html          # Quiénes Somos (próximamente)
├── declaracion-de-fe.html      # Declaración de Fe (acordeón)
├── reuniones.html              # Horarios y YouTube en vivo
├── eventos.html                # Eventos (próximamente)
├── ministerios.html            # Ministerios (próximamente)
├── noticias.html               # Noticias (próximamente)
├── contacto.html               # Formulario, mapa, datos de contacto
├── styles.css                  # Estilos complementarios (animaciones, a11y, i18n toggle)
├── lang.js                     # Alpine.js Store para idioma (ES/EN + localStorage)
├── .gitignore                  # Archivos ignorados por git
├── Logo cafe grande.png        # Logo vertical
├── Logo cafe pequeño.png       # Logo horizontal
├── Afiche reuniones.png        # Referencia de diseño
├── declaracion de fe.txt       # Fuente original del texto doctrinal
└── PLAN.md                     # Este documento
```

---

## 5. Diseño visual (lineamientos)

- Paleta definida:
  - Gris claro: `#e5e5e6`
  - Café claro: `#ac9784`
  - Blanco: `#ffffff`
  - Negro: `#000000`
- Tipografía: **Inter** o **Plus Jakarta Sans** (UI) + **Fraunces** o **Lora** (titulares / versículos).
- Componentes clave: tarjeta de evento, banner de versículo, botón flotante de WhatsApp, modal de transmisión en vivo.
- Animaciones discretas con `@keyframes` o `motion-safe:` de Tailwind (sin librerías).

---

## 6. Redes sociales (configuradas)

| Red | URL |
|---|---|
| YouTube | https://www.youtube.com/@IglesiaCristianaEchaurren80 |
| Instagram | https://www.instagram.com/echaurren80 |
| Facebook | https://www.facebook.com/iglesiacristianaechaurren80 |
| WhatsApp | https://wa.me/56942362365 |

- YouTube destacado: transmisión en vivo de reuniones + grabaciones disponibles.
- Iconos en footer de todas las páginas + sección dedicada en Home + banner en Reuniones.
- Botón flotante de WhatsApp en todas las páginas.

---

## 7. Fases de ejecución

| Fase | Entregable | Estado |
|---|---|---|
| **F1 — Setup** | HTML + Tailwind CDN + Alpine.js, layout base, paleta, tipografías. | ✅ Completada |
| **F2 — Páginas estáticas** | Home, Declaración de fe, Reuniones, Contacto. | ✅ Completada |
| **F3 — Redes sociales** | YouTube (en vivo + grabaciones), Instagram, Facebook, WhatsApp flotante. | ✅ Completada |
| **F4 — Contenido adicional** | Quiénes somos, Ministerios, Eventos (placeholders). | ✅ Completada (placeholders) |
| **F4b — Internacionalización** | Selector ES/EN, traducciones en 8 páginas, persistencia localStorage. | ✅ Completada |
| **F5 — Optimización** | Auditoría Lighthouse, SEO, accesibilidad, imágenes WebP, sitemap. | 🔲 Pendiente |
| **F6 — Lanzamiento** | Dominio, hosting, HTTPS, Formspree ID, analítica. | 🔲 Pendiente |

---

## 8. Decisiones resueltas

| # | Decisión | Resolución |
|---|---|---|
| 1 | Framework | ✅ HTML + Tailwind CDN + Alpine.js (máxima simplicidad) |
| 2 | Logo y colores | ✅ Logo proporcionado (vertical + horizontal). Paleta: `#e5e5e6`, `#ac9784`, `#fff`, `#000` |
| 3 | Idioma | ✅ Español + Inglés (Alpine.js Store + `data-lang` + CSS toggle) |
| 5 | Hosting | ✅ GitHub Pages — https://icech80.github.io/website/ (repo `icech80/website`) |
| 7 | Redes sociales | ✅ YouTube, Instagram, Facebook, WhatsApp |
| 8 | Teléfono / WhatsApp | ✅ +56 9 7499 1233 |

## 9. Decisiones pendientes

1. Configurar **Formspree ID** en `contacto.html` (action del formulario).
2. **Dominio personalizado**: ¿ya existe uno o se debe registrar? (actualmente en `icech80.github.io/website`).
3. ¿Incluir sección de **ofrenda/donaciones** en la siguiente iteración?
4. Contenido real para las páginas placeholder: **Quiénes Somos**, **Eventos**, **Ministerios**, **Noticias**.
5. Open Graph meta tags faltantes en algunas páginas secundarias.

---

_Última actualización: 2026-06-06_
