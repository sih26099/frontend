# MatSync — SIH26099 Frontend

Frontend demo for AI-Driven Standardization and Harmonization of Material Codes
Across CPSEs (Ministry of Petroleum & Natural Gas).

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed localhost URL. To build for production:

```bash
npm run build
```

## Structure

```
src/
  components/    Navbar, Footer
  pages/         Home, Upload, Processing, Results, About
  data/          mockClusters.js — demo data standing in for the Go backend
  index.css      Tailwind v4 + design tokens (colors, fonts) + tricolor signature element
```

## Current state

This is currently running on **mock data** in `src/data/mockClusters.js` — there's no
backend wired up yet. The Upload page's "Run Standardization" button just navigates to
the Processing page, which then navigates to Results after a scripted animation.

## Wiring up the real backend later

When the Go backend is ready, the natural places to connect are:

- `src/pages/Upload.jsx` — `handleRun` should POST the file to your backend's upload
  endpoint instead of just navigating.
- `src/pages/Results.jsx` — replace the `mockClusters` import with a fetch to your
  results endpoint.

## Design tokens

Colors and fonts are defined in `src/index.css` under `@theme` (Tailwind v4 style —
there's no separate `tailwind.config.js`). Change a value there and it updates
everywhere it's used (`bg-navy`, `text-steel`, `font-display`, etc.).

| Token | Hex | Used for |
|---|---|---|
| `navy` | `#0B2545` | Header, footer, primary text |
| `steel` | `#145DA0` | Buttons, links, active states |
| `surface` | `#F7F9FB` | Page background |
| `success` | `#1E7145` | High-confidence matches |
| `alert` | `#B3261E` | Flagged/unmatched |
| `saffron` / `indiagreen` | `#FF9933` / `#138808` | Tricolor accent bar only |

Everything here — pages, colors, copy, features — is a normal editable React codebase.
Add, remove, or restyle anything; nothing is locked in.
