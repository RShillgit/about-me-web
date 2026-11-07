# about-me-web

Personal portfolio for Robert Siciliano: software engineering experience, endurance racing, and markets.

**Live:** https://rshillgit.github.io/about-me-web/

## Stack

Vite · React · TypeScript · Tailwind CSS v4. A static site with no backend.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173/about-me-web/
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to the
`gh-pages` branch. GitHub Pages serves that branch (Settings → Pages → Source: *Deploy from a branch*, `gh-pages`).
You can also run the workflow by hand from the Actions tab.

## Updating content

All content lives in `src/data/`. You shouldn't need to touch the components for routine updates.

| File | What it controls |
| --- | --- |
| `profile.ts` | Name, location, email, links, resume URL, headshot, and the start dates behind the auto-updating "N years" figures |
| `experience.ts` | Roles, dates, highlights, tech stack |
| `skills.ts` | Skill groups |
| `education.ts` | Degrees and certifications |
| `races.ts` | Endurance highlights and the lifetime marathon count |

**Races:** add an entry to `races`. Entries with `status: 'upcoming'` show as "Next up" and hide themselves a few days
after their date. When the race is done, change the status and result.

**Photos:** every image slot shows a placeholder until you give it a source. Put the file in `src/assets/`, import it,
and set it on the matching entry:

```ts
// src/data/races.ts
import suffolk from '../assets/suffolk-2026.jpg';
// ...
{ name: 'Suffolk County Marathon', /* ... */ photo: suffolk },
```

The headshot works the same way through `headshot` in `src/data/profile.ts`. Slots are 4:3 and crop with
`object-cover`, so landscape photos fit best.
