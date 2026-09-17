# aziz-hizem.github.io

Source of my portfolio site: [aziz-hizem.github.io](https://aziz-hizem.github.io).

Built with **React**, **Vite** and **Tailwind CSS**. Every push to `main` is built and deployed to GitHub Pages by the [workflow](.github/workflows/deploy.yml).

## Editing

All content lives in two files:

- [`src/data/profile.js`](src/data/profile.js): name, headline, availability, links, skills
- [`src/data/projects.js`](src/data/projects.js): featured projects, the current project and the "more projects" list

Project images are in `public/projects/` (1280×720 WebP).

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```
