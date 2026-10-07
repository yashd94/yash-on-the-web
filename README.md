# yash-on-the-web

Personal website for Yash Deshpande — a single-page site that presents the
same career history through two lenses, toggled live in the browser:

- **Computational Biologist** — ML for omics, genetic perturbation, and
  translational biomarker discovery.
- **ML Engineer** — multimodal AI systems, computer vision, and production ML
  platforms.

## Structure

```
index.html          Page markup
assets/style.css     Styling (dark/light theme)
assets/data.js        Résumé content for both personas
assets/script.js       Persona toggle + theme toggle logic
assets/resume-biology.pdf     Downloadable résumé (Computational Biology)
assets/resume-ml-engineer.tex Downloadable résumé source (ML Engineer)
```

## Running locally

No build step — open `index.html` directly, or serve it:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Deployment

This repo is set up for GitHub Pages, serving from the `main` branch root.

## Editing content

Update career details, skills, and publications in `assets/data.js` and the
publications list in `index.html`.
