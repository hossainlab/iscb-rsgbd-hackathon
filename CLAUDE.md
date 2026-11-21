# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Repository for the 1st Bioinformatics Hackathon 2026 by RSG Bangladesh (Regional Student Group under the ISCB Student Council). MIT licensed.

## Current state

- `challenges/` — the hackathon content as Markdown: `CHALLENGE_BOOK.md` (eleven challenges, rules, schedule, rubric), `DATA_README.md`, `SUBMISSION_TEMPLATE.md`, and `MENTOR_ANNEX.md` (mentors and judges only — never publish its expected results on the website).
- `web/` — the one-page participant website (Next.js App Router, TypeScript, static export). No Python code, tests, or lint configuration exist yet.

The root `.gitignore` is the standard GitHub Python template; `web/.gitignore` covers Node output. No Python package manager has been chosen; do not assume one.

## Website (`web/`)

Run from `web/`:

- `npm install` — install dependencies
- `npm run dev` — dev server at http://localhost:3000
- `npm run build` — type-check and write the static site to `web/out/` (`output: "export"` in `next.config.mjs`)
- `NEXT_PUBLIC_BASE_PATH=/iscb-rsgbd-hackathon npm run build` — build exactly as GitHub Pages serves it

## Deployment

`.github/workflows/deploy.yml` builds `web/` and publishes `web/out/` to GitHub Pages on every push to `main` that touches `web/`, and on manual dispatch. Pages must be set to **Build and deployment → Source: GitHub Actions** in the repository settings; the workflow needs no secrets.

The site is served from `https://<owner>.github.io/<repo>/`, so the workflow sets `NEXT_PUBLIC_BASE_PATH` to `/<repo>` and `next.config.mjs` applies it as `basePath`/`assetPrefix`. Local builds leave it empty and serve from the root. If a custom domain is added later, drop that `env:` block so the base path is empty again, and add a `CNAME` file to `web/public/`.

`web/public/.nojekyll` must stay: without it GitHub Pages runs Jekyll, which ignores the `_next/` directory and the site loads unstyled.

Architecture: a single route.

- `app/content.ts` — all page copy and data (the seven-step guide, the four challenge domains, the final presentation, the toolbox, the FAQ). Edit text here, not in components. The eleven challenges are placeholders in `domains[]`: give a challenge a `title` (and optional `summary`) and it stops rendering as "Challenge statement to come".
- `app/page.tsx` — server component that lays out the sections (hero, guide, challenges by domain, final presentation, toolbox, FAQ, footer with the "Designed and developed by Md. Jubayer Hossain" credit).
- `app/components/` — client components for the interactive parts: `Header` (theme toggle, mobile menu), `StepGuide` (seven-step stepper), `Toolbox` (collapsible "more tools" block with a numbered stage strip), `Faq` (search, category tabs, grouped accordions); `Icon` is a small inline SVG set, and every step, tool, stage and FAQ entry names one of its keys.
- `app/globals.css` — plain CSS, no framework. Colour tokens are defined on `:root` and repeated for dark mode (media query and `[data-theme="dark"]`); change both when changing a colour. The `--plddt-*` tokens are the AlphaFold confidence-band colours and are deliberately the same in both themes.

The site follows the structure of https://biohackathon.pkm.gov.gr/en/resources/ (tools guide, final presentation, toolbox by analysis stage) with content written for this hackathon.

## Keeping this file current

Once code is added, update this file with the real commands (environment setup, running, testing a single test, linting) and the architecture of whatever gets built.
