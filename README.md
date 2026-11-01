# دستور زبان انگلیسی · Persian Grammar Duo

A **mobile-first**, Duolingo-style web app that teaches English grammar (GSE 59–66 / CEFR B2) to **Persian-speaking** adult learners.

Built from the official **GSE Teacher Toolkit – Grammar** search results.

## Features

- 🇮🇷 Full Persian UI (RTL) + Persian explanations of every grammar point
- 📚 45 grammar “Can-do” statements organised into 12 thematic units
- 🎮 Duolingo-style short lessons with multiple exercise types:
  - Multiple choice
  - Fill-in-the-blank
  - Word reordering
  - True / False
- ❤️ Hearts system
- ⭐ XP & daily streak (persisted in `localStorage`)
- 🔓 Progressive unit unlocking
- 📱 Mobile-first, safe-area aware, works great as a PWA candidate
- 🚀 Zero backend – ready for GitHub Pages / Vercel / Netlify

## Quick start

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The `dist/` folder is static and can be deployed anywhere.

### Deploy to GitHub Pages

1. In repo Settings → Pages → Source: Deploy from a branch or use GitHub Actions.
2. `vite.config.ts` already sets `base: "./"` so relative paths work.

## Project structure

```
src/
  data/grammar.ts      # All 45 grammar points + Persian titles
  lib/exercises.ts     # Exercise generator from examples
  store/progress.ts    # Zustand + persist (XP, hearts, streak, completed lessons)
  components/          # Header, UnitCard, LessonIntro, ExerciseSession, LessonComplete
  App.tsx              # Screen router (home → intro → exercise → complete)
```

## Content source

All grammar statements, structures and examples come from the **GSE Teacher Toolkit** (Audience: Adult Learners, GSE 59–66).

Persian translations of the “Can-do” statements were added for the target audience.

## License

MIT – feel free to fork, improve and share with Persian-speaking learners.

---

ساخته‌شده با ❤️ برای فارسی‌زبانانی که می‌خواهند دستور زبان انگلیسی را درست و لذت‌بخش یاد بگیرند.
