# AGENTS.md — Club Deportivo Esports Montesión

## Cursor Cloud specific instructions

### Product

Static multilingual marketing site for **Club Deportivo Esports Montesión** (Palma): home + image carousel, services (bar / padel / volleyball / private events), HTML bar menu (QR-friendly `/carta/`), blog, contact CTAs (phone, WhatsApp, Instagram, Playtomic), and Spain-oriented legal pages + cookie banner.

### Run locally

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080` (root redirects by `navigator.language`, fallback `es`). No `package.json` / install required. Optional: `node scripts/generate-site.mjs` after editing the generator or `data/site.json` fields that are baked into HTML.

### Lint / test / build

- No ESLint/test suite yet. Sanity-check with a static server and curl/browser.
- Netlify: publish directory `.`, no real build (`netlify.toml`).

### Edit content (prefer these over inventing pages)

- `data/carta.json` — menu prices/items (rendered client-side).
- `data/eventos.json` — homepage carousel slides.
- `data/blog.json` — blog index listing (post HTML files still needed under `es|ca|en/blog/`).
- `data/site.json` — phone, WhatsApp placeholders, Instagram, Playtomic, address.

### Gotchas

- WhatsApp bar/courts currently share the same number as voice (`+34657169332`) until the club provides separate numbers — see TODO in `data/site.json` and README.
- CIF and email are missing; legal pages show visible TODO callouts.
- Placeholder SVGs live under `assets/img/placeholders/`; replace with optimized WebP/JPEG when real photos arrive.
- Floating WhatsApp FAB + cookie banner are in every generated page via `scripts/generate-site.mjs`.
- **Netlify “Page not found”:** almost always means Publish directory is `dist`/`public`/`build`. Must be `.` (repo root). Local preview: `python3 -m http.server 8080` → `http://127.0.0.1:8080/es/`.
