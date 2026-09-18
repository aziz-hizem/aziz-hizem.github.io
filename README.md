# aziz-hizem.github.io

Source of my portfolio site: **[aziz-hizem.github.io](https://aziz-hizem.github.io)**.

Built with **React**, **Vite** and **Tailwind CSS v4**. Every push to `main` triggers the
[workflow](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages.
Nothing else to do: push, wait about a minute, refresh.

---

## Working on it locally

```bash
npm install      # once, after cloning
npm run dev      # dev server at http://localhost:5173, reloads as you save
npm run build    # production build into dist/ (same thing the workflow runs)
npm run preview  # serve the built dist/ to check it before pushing
```

Publishing a change:

```bash
git add -A
git commit -m "Describe the change"
git push
```

---

## Where everything lives

```
├── index.html                  Page title, description, link-preview text, Google Fonts
├── src/
│   ├── data/
│   │   ├── profile.js          ← name, headline, availability, links, skills
│   │   └── projects.js         ← every project shown on the page
│   ├── components/
│   │   ├── Nav.jsx             Top bar: menu, progress line
│   │   ├── Hero.jsx            Portrait, name, headline, buttons
│   │   ├── Featured.jsx        The 7 big project cards
│   │   ├── Current.jsx         "Currently building" block
│   │   ├── More.jsx            Small cards grid
│   │   ├── Skills.jsx          Skill groups
│   │   ├── Contact.jsx         Contact block and footer
│   │   └── ui.jsx              Shared pieces: section header, tags, buttons, icons
│   ├── hooks/useReveal.js      Fade-in on scroll, active nav section
│   ├── index.css               Colors, fonts, animations
│   └── App.jsx                 Section order on the page
└── public/                     Files served as-is
    ├── profile.webp            Portrait (640×640)
    ├── favicon.svg             Browser tab icon
    └── projects/               One image per project (1280×720)
```

**Rule of thumb:** changing *words, links or projects* → `src/data/`. Changing *how it looks* →
`src/index.css` first, then the component. You rarely need to touch anything else.

---

## Common edits

### Change your headline, role or availability

[`src/data/profile.js`](src/data/profile.js), at the top. The headline is split into parts so some
words can get the teal-to-blue gradient. Set `accent: true` on a part to highlight it:

```js
headline: [
  { text: 'These projects are where my ' },
  { text: 'curiosity', accent: true },   // ← gradient
  { text: ' landed. DevOps, AI, …' },
],
```

### Highlight words with the gradient

Put **double square brackets** around any words and they get the teal-to-blue gradient:

```js
role: 'Final-year engineering student at [[INSAT]]',
headline: 'These projects are where my [[curiosity]] landed. [[DevOps]], [[AI]], software that…',
```

Use as many as you like, in any of these text fields:

- **`src/data/profile.js`**: `role`, `roleNote`, `headline`, `availability.detail`
- **`src/data/projects.js`**: `tagline`, `description`, `highlights`, `summary`, `works`, `roadmap`
- section `title` and `intro` passed to `<Section>` in the components

For text written straight into a component, use the class instead:

```jsx
<span className="text-gradient font-semibold">these words</span>
```

The gradient is `.text-gradient` in [`src/index.css`](src/index.css), running from `--color-accent`
to `--color-accent-2`. The markers are `[[ ]]` and not `*` because `*` already appears in text like
`A* Pathfinding`.

### Add your CV

Drop the PDF into `public/` (for example `public/Aziz_Hizem_CV.pdf`), then in `profile.js`:

```js
cv: '/Aziz_Hizem_CV.pdf',   // was null
```

The CV button appears by itself. Anything in `public/` is reachable at the site root, so
`public/foo.pdf` becomes `aziz-hizem.github.io/foo.pdf`.

### Add or edit a skill

`skills` at the bottom of `profile.js`. Four groups, each a list of strings. Add a group by copying
the shape of an existing one.

### Edit a project

[`src/data/projects.js`](src/data/projects.js) has three lists:

| List | Shown as | Fields |
|---|---|---|
| `featured` | The 7 large cards | `title`, `area`, `image`, `tagline`, `description`, `highlights`, `stack`, `links` |
| `current` | The "Currently building" block | plus `status`, `works`, `roadmap`, `exploration` |
| `more` | The small cards | `title`, `summary`, `stack`, `links` |

- **Reorder projects**: move an entry up or down in the list. The numbers (01, 02…) follow automatically.
- **Promote a project** from `more` to `featured`: move it and fill in the missing fields.
- **Add a link** (live demo, release, article): push another `{ label, href }` into `links`. The first
  link is the filled button, the rest are outlined.
- **Repository URLs** are written as `gh('repo-name')`, which expands to your GitHub account.
  If you rename a repo on GitHub, change the name here too.

### Replace a project image

Export at **1280×720** and save as WebP into `public/projects/`, keeping the same file name as the
`image` field. From a PNG or JPG:

```bash
python -c "from PIL import Image; im=Image.open('shot.png').convert('RGB').resize((1280,720)); im.save('public/projects/name.webp','WEBP',quality=85)"
```

The Azure project uses a hand-drawn diagram, `azure-devops-cicd-pipeline.svg`, since that repo has
no screenshot. It is plain SVG and can be edited in a text editor.

### Replace the portrait

Overwrite `public/profile.webp` with a **square** image (640×640 is plenty). The circular shape,
ring and glow come from the CSS, so any square photo works.

### Change the colors

Top of [`src/index.css`](src/index.css), in the `@theme` block. These names are used everywhere:

| Name | Now | Used for |
|---|---|---|
| `--color-bg` | near-black | page background |
| `--color-surface` | dark grey | cards |
| `--color-line` | grey | borders |
| `--color-ink` | near-white | main text |
| `--color-muted` | grey | secondary text |
| `--color-accent` | teal | highlights, buttons, links |
| `--color-accent-2` | blue | second half of gradients |

Change `--color-accent` and the whole site follows. The glow effects hardcode the teal as
`rgba(63, 214, 176, …)`, so search for that value if you change the accent.

### Change the fonts

Two places, and they must agree:

1. `index.html`, the Google Fonts `<link>`.
2. `src/index.css`, `--font-sans` and `--font-display` in `@theme`.

`--font-display` is for headings and small uppercase labels; `--font-sans` is body text.

### Reorder or remove a section

[`src/App.jsx`](src/App.jsx) lists the sections in page order. Remove a line to hide a section, and
also remove its entry from `items` at the top of [`Nav.jsx`](src/components/Nav.jsx) so the menu matches.

---

## Undoing things

```bash
git log --oneline              # list of versions
git revert <commit>            # undo one commit, keeping the history
git checkout <commit> -- src/  # restore src/ from an older version
```

Since each deploy comes from a push, reverting and pushing rolls the live site back too.

---

## Notes

- `profile_picture.jpg` (the full-size original) is git-ignored. Only the cropped
  `public/profile.webp` is published.
- The site is a **user site**, so the repository must keep the name `aziz-hizem.github.io`.
- Tailwind v4 has no `tailwind.config.js`. Theme values live in the `@theme` block in `src/index.css`.
