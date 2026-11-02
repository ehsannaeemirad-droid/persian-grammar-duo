# دستور زبان انگلیسی · Persian Grammar Duo

A **mobile-first**, Duolingo-style web app that teaches English grammar (GSE 59–66 / CEFR B2) to **Persian-speaking** adult learners.

## Live app (share with students)

**https://ehsannaeemirad-droid.github.io/persian-grammar-duo/**

## Publish / update the live site (Deploy from a branch)

1. On your computer:

```bash
npm install
npm run build

# put the built site into the docs folder
rm -rf docs
cp -r dist docs

git add docs
git commit -m "Publish site"
git push
```

2. On GitHub (one-time):
   - Repo → **Settings** → **Pages**
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/docs`
   - Save

After a minute the student link above will work.

> Note: GitHub does not allow “main + / (root)” for app source repos without overwriting your code. **main + /docs** is the correct “Deploy from a branch” setup.

## Run locally

```bash
npm install
npm run dev
```

## Features

- Full Persian UI (RTL) + Persian explanations
- 45 grammar points in 12 units (GSE 59–66 / B2)
- Short exercises, hearts, XP, streak
- Mobile-first

## License

MIT — free to share with students.
