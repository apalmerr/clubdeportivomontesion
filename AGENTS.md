# clubdeportivomontesion

Página web del Club deportivo Montesion.

## Cursor Cloud specific instructions

### Current repository state

- As of this setup, the repository is a **placeholder**: it contains only `README.md`. There is **no application code, no `package.json`/lockfile, no framework, no build config, and no tests** yet.
- Because there is no dependency manifest, there is nothing to install, build, run, or test until source files are added. Do not fabricate an application to "prove" the environment — verify tooling directly instead.

### Preinstalled toolchain (provided by the VM image)

Node `v22`, npm `10`, pnpm `10`, yarn `1`, Python `3.12`, and git are already available on the base image. You do not need to install these.

### Intended stack

This project is a **static website** intended to deploy on **Netlify** (see the Netlify skills configured for this workspace). When you scaffold the site:

- Prefer committing a dependency manifest (`package.json` + a single lockfile) so the update script installs dependencies automatically on future boots.
- The update script auto-detects the package manager from the lockfile (`package-lock.json` → `npm ci`, `pnpm-lock.yaml` → `pnpm install`, `yarn.lock` → `yarn install`) and no-ops when no manifest exists, so it remains safe on the current empty repo.
- For a plain static site with no build step, you can serve locally with `npx serve` or `python3 -m http.server`.
- For deploy/preview workflows, use the Netlify CLI (`npx netlify dev` / `npx netlify deploy`); it is not preinstalled but runs via `npx`.
