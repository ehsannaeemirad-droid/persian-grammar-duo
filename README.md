# دستور زبان انگلیسی · Persian Grammar Duo

A **mobile-first**, Duolingo-style web app that teaches English grammar (GSE 59–66 / CEFR B2) to **Persian-speaking** adult learners.

Built from the official **GSE Teacher Toolkit – Grammar** search results.

## Live app (share this with students)

**https://ehsannaeemirad-droid.github.io/persian-grammar-duo/**

No install needed — students just open the link on phone or computer.

## Features

- Full Persian UI (RTL) + Persian explanations of every grammar point
- 45 grammar “Can-do” statements organised into 12 thematic units
- Duolingo-style short lessons (multiple choice, fill-blank, reorder, true/false)
- Hearts, XP, daily streak (saved in the browser)
- Progressive unit unlocking
- Mobile-first

## For teachers / developers

```bash
git clone https://github.com/ehsannaeemirad-droid/persian-grammar-duo.git
cd persian-grammar-duo
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Deploy

This repo auto-deploys to **GitHub Pages** on every push to `main` (see `.github/workflows/deploy.yml`).

One-time setup (if the live link is not active yet):

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Source**, choose **GitHub Actions**
3. Wait for the Actions workflow to finish (Actions tab)
4. The site will be at:  
   https://ehsannaeemirad-droid.github.io/persian-grammar-duo/

## Content source

All grammar statements, structures and examples come from the **GSE Teacher Toolkit** (Audience: Adult Learners, GSE 59–66). Persian translations of the “Can-do” statements were added for the target audience.

## License

MIT — free to use and share with students.

---

ساخته‌شده برای فارسی‌زبانانی که می‌خواهند دستور زبان انگلیسی را درست و لذت‌بخش یاد بگیرند.
