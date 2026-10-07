# yash-on-the-web

Personal website for Yash Deshpande — a single-page site that presents three
sides of the same person, toggled live in the browser:

- **Research** — a research engineer working across computational biology,
  multi-omic data integration, and ML systems.
- **Wellness** — Tai Chi / Xin Yi Dao instruction, competitive martial arts,
  and Pilates instruction.
- **Poetry** — a small, growing collection of original poems.

🔗 **Live site:** https://yashd94.github.io/yash-on-the-web/

## Structure

```
index.html                     Page markup (hero, toggle, sections)
assets/style.css                 Styling (dark/light theme + per-persona accent colors)
assets/data.js                    Content for all three personas (Research, Wellness, Poetry)
assets/script.js                   Persona toggle, theme toggle, and rendering logic
assets/headshot.jpg                Profile photo
assets/resume-biology.pdf          Downloadable résumé (Research persona)
assets/resume-ml-engineer.tex      ML engineer résumé source (not currently linked)
.nojekyll                         Disables Jekyll processing on GitHub Pages
```

## Running locally

No build step — open `index.html` directly, or serve it:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

This repo is set up for GitHub Pages, serving from the `main` branch root at
https://yashd94.github.io/yash-on-the-web/. A `.nojekyll` file ensures assets
are served as-is without Jekyll processing.

## Editing content

- Career, training, and poem content live in `assets/data.js`, keyed by
  persona (`research`, `wellness`, `poetry`).
- The publications list is hardcoded in `index.html` under `#publications`.
- Each persona has its own accent color defined in `assets/style.css`: navy
  blue for Research, warm terracotta for Wellness, and sunflower gold for
  Poetry, each with light/dark mode variants.
