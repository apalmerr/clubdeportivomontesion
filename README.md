# Club Deportivo Esports Montesión

Web estática del club (HTML + CSS + JS), multilenguaje (**ES / CA / EN**), lista para desplegar en **Netlify**.

## Cómo verla en local

```bash
# Desde la raíz del repo
python3 -m http.server 8080
# Abre http://localhost:8080
```

O con Node: `npx --yes serve -l 8080`.

## Estructura

| Ruta | Qué es |
|------|--------|
| `/` | Detecta el idioma del dispositivo (fallback: español) |
| `/es/`, `/ca/`, `/en/` | Web en cada idioma |
| `/carta/` | Atajo para el **QR de las mesas** → carta en el idioma del usuario |
| `/data/site.json` | Teléfono, Instagram, Playtomic, dirección… |
| `/data/carta.json` | **Carta del bar** (precios y platos) |
| `/data/eventos.json` | Imágenes del carrusel de inicio |
| `/data/blog.json` | Listado del blog |
| `/assets/` | CSS, JS, logo e imágenes |
| `scripts/generate-site.mjs` | Regenera el HTML de los 3 idiomas si cambias textos de plantilla |

## Qué editar tú desde GitHub (sin saber programar)

1. **Cambiar un precio / plato** → edita `data/carta.json` y guarda (commit).
2. **Cambiar fotos del carrusel** → sustituye los SVG/JPG en `assets/img/placeholders/` y actualiza rutas en `data/eventos.json`.
3. **Teléfono / Instagram / Playtomic** → `data/site.json`. Luego, si quieres que el HTML se regenere con esos datos en pie/botones: `node scripts/generate-site.mjs`.
4. **Nueva entrada de blog** →
   - Añade el post en `data/blog.json`
   - Crea `es/blog/mi-slug.html` (y CA/EN) copiando una entrada existente, **o** añade el texto en `scripts/generate-site.mjs` (sección `posts`) y regenera.

## Desplegar en Netlify

1. Entra en Netlify → *Add new site* → *Import from Git* → este repositorio.
2. **Build command:** déjalo vacío o el de `netlify.toml` (`echo 'No build step'`).
3. **Publish directory:** `.` (raíz).
4. Publica. Tendrás una URL tipo `algo.netlify.app`.
5. El QR de las mesas puede apuntar a: `https://TU-DOMINIO/carta/`

## Pendiente para completar la web

Marcado también en las páginas legales con avisos amarillos:

- [ ] **CIF/NIF** de la entidad (aviso legal y privacidad)
- [ ] **Email** de contacto corporativo
- [ ] **WhatsApp separados** para bar y para pistas (ahora ambos usan el teléfono `657 16 93 32`)
- [ ] **Horarios** del bar y de las pistas
- [ ] **Fotos reales** (instalaciones, bar, pistas, eventos, blog) en WebP/JPEG optimizado
- [ ] **Logo oficial** en SVG/PNG de alta calidad (ahora hay un escudo SVG aproximado)
- [ ] Dominio propio (opcional) conectado en Netlify
- [ ] Revisar textos legales con un asesor si hace falta (plantilla orientativa RGPD España)
- [ ] (Opcional) Google Analytics / similar **solo tras consentimiento** de cookies
- [ ] Contenido real de eventos en el carrusel cuando los tengáis

## Recomendaciones

1. **Fotos:** exporta a **WebP** (o JPEG calidad ~70–80), máximo ~1600px de ancho para carrusel; nombra archivos claros (`padel-pista-1.webp`).
2. **QR mesas:** imprime `https://tu-sitio.netlify.app/carta/` (o tu dominio + `/carta/`).
3. **Mantenimiento fácil:** casi todo el día a día es `data/*.json`. Regenera HTML solo si cambias menús/navegación/textos de plantilla.
4. **SEO:** cuando tengas dominio, configúralo en Netlify y actualiza `canonical` si más adelante usáis URLs absolutas.
5. **Instagram:** [instagram.com/montesion26](https://www.instagram.com/montesion26/)
6. **Playtomic:** [club en Playtomic](https://playtomic.com/es/clubs/club-deportivo-esports-montesion)

## Contacto actual (datos en `data/site.json`)

- Dirección: Carrer d'Andalusia, Ponent, 07013 Palma, Illes Balears
- Teléfono: 657 16 93 32
- Instagram: @montesion26
