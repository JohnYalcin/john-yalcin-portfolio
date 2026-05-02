# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js v15 portfolio site for John Yalcin, deployed to Netlify. It is a minimal starter built with `create-next-app` and uses the `@netlify/plugin-nextjs` build plugin for SSR/ISR support via Netlify Functions.

## Commands

```bash
npm run dev    # Start development server at http://localhost:3000
npm run build  # Build for production
```

There are no tests or linting scripts configured.

## Architecture

**Routing:** Next.js file-based routing — each file in `pages/` is a route. `pages/_app.js` wraps all pages and loads global styles.

**Path aliases** (defined in `jsconfig.json`):
- `@components/*` → `components/*`
- `@styles/*` → `styles/*`

**Styling:** Two approaches are used side-by-side:
- `styles/globals.css` — imported once in `_app.js`, applies globally
- CSS Modules (e.g. `Footer.module.css`) — scoped to individual components, imported as `styles` object

**Deployment:** Netlify. The `netlify.toml` sets the build command to `npm run build` and publish directory to `.next`. The `@netlify/plugin-nextjs` plugin enables SSR and ISR through Netlify Functions — do not remove it.

**Dependency management:** Renovate is configured via `renovate.json` extending the `netlify-templates/renovate-config` preset.
