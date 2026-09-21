# Selvaharshini C — Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## 1. Folder structure

```
selvaharshini-portfolio/
├── index.html                 Page shell + SEO/Open Graph meta tags
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg            Placeholder favicon — swap for your own mark
│   └── resume/
│       └── README.txt         Notes on where to drop your resume PDF
└── src/
    ├── main.jsx                React entry point
    ├── App.jsx                 Assembles all sections in order
    ├── index.css                Tailwind + global styles, theme tokens
    ├── data/
    │   └── portfolioData.js     ALL content lives here (name, projects, etc.)
    ├── hooks/
    │   └── useTheme.js          Light/dark theme logic
    └── components/
        ├── Navbar.jsx
        ├── ThemeToggle.jsx
        ├── Hero.jsx
        ├── HeroVisual.jsx        Animated terminal/code visual
        ├── SectionHeading.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Experience.jsx
        ├── Certifications.jsx
        ├── Achievements.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

Almost everything you'll want to edit — text, dates, links — is in
**`src/data/portfolioData.js`**. You shouldn't need to touch the component
files just to update content.

## 2. Install dependencies

You'll need [Node.js](https://nodejs.org) 18+ installed. Then, from the
project folder:

```bash
npm install
```

## 3. Run it locally

```bash
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`) with
hot-reload. Open that URL in your browser.

To build a production bundle and preview it:

```bash
npm run build
npm run preview
```

## 4. Where to add your GitHub project links

Open `src/data/portfolioData.js` and find the `projects` array. Each project
has a `github` and `demo` field currently set to `null`:

```js
{
  id: 'projectflow',
  ...
  github: null,   // ← replace with your repo URL, e.g. 'https://github.com/Selvaharshini024/projectflow'
  demo: null,      // ← replace with a live URL if you have one, or leave null
},
```

Until you fill these in, the buttons on each project card show
`[Add GitHub Project Link]` / `[Add Live Demo Link]` so it's obvious what
still needs updating — nothing fake is linked.

## 5. Where to add certificate links

Same file, in the `certifications` array — each entry has a `link` field:

```js
{
  name: 'TCS iON National Qualifier Test (NQT)',
  org: 'TCS iON',
  date: 'July 2026',
  link: null, // ← replace with a link to the certificate (PDF, Credly, etc.)
},
```

## 6. Where to place your resume PDF

Put your resume file at:

```
public/resume/Selvaharshini_C_Resume.pdf
```

The **Download Resume** button in the Hero section already points to
`/resume/Selvaharshini_C_Resume.pdf`, so no code changes are needed once the
file is there. If you'd rather use a different filename, update the
`resumePath` value near the top of `src/data/portfolioData.js`.

## 7. Wiring up the contact form

The contact form (`src/components/Contact.jsx`) is fully built on the
frontend — validation, state, and a success message — but isn't connected to
a backend yet, since that requires a service or server only you can set up.
Inside `handleSubmit`, there's a comment showing the Formspree pattern; the
same `form` state object also works with EmailJS or a custom API endpoint.
Pick whichever you prefer and replace the `TODO` block.

## 8. Deployment

### Vercel (recommended, zero-config for Vite)
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Vercel auto-detects Vite; leave the defaults and click **Deploy**.

### Netlify
1. Push the project to GitHub.
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**.
3. Build command: `npm run build`, Publish directory: `dist`.

### GitHub Pages
1. Install the deploy helper (already in `devDependencies`): `npm install`.
2. In `vite.config.js`, set `base: '/<your-repo-name>/'` (replace the current
   `base: './'`) so assets resolve correctly under a project page.
3. Run:
   ```bash
   npm run build
   npm run deploy
   ```
   This uses the `gh-pages` package to push the `dist/` folder to a `gh-pages`
   branch. Then enable GitHub Pages for that branch in your repo's Settings.

## Notes

- Every section reads from `src/data/portfolioData.js` — no content is
  hard-coded elsewhere, so updates stay in one place.
- The theme toggle remembers the visitor's choice via `localStorage` and
  respects `prefers-reduced-motion` for anyone with that OS setting enabled.
- No fake statistics, testimonials, links, or skill percentages are used
  anywhere — placeholders are clearly marked so you know exactly what to
  fill in before sharing this with recruiters.
