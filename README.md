# Personal website

My personal website at [nacx.dev](https://nacx.dev), built with [Astro](https://astro.build/) and the [AstroPaper](https://astro-paper.pages.dev/) theme.

## Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:4321` in your browser. Changes are hot-reloaded automatically.

## Content

All content lives in `src/data/` as Markdown files with frontmatter:

| Section | Directory |
|---------|-----------|
| Talks | `src/data/talks/` |
| Publications | `src/data/publications/` |
| Patents | `src/data/patents/` |
| Podcasts | `src/data/podcasts/` |

## Build

```bash
npm run build
```

## Deployment

The site deploys automatically to GitHub Pages via GitHub Actions on every push to `master`.
