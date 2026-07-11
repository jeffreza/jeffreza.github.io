# Syed Jaffar Raza — GitHub Pages Portfolio

Responsive professional portfolio configured for automatic GitHub Pages deployment. It supports both:

- `https://USERNAME.github.io`
- `https://USERNAME.github.io/REPOSITORY-NAME`

The included workflow detects the repository type and configures the correct asset path automatically.

## Requirements

- Node.js 22.13 or newer
- npm
- A GitHub account

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Test the production export

```bash
npm run build
npx serve out
```

The static website is generated inside the `out` directory.

## Deploy at `USERNAME.github.io`

1. Create a public GitHub repository named `USERNAME.github.io`.
2. Upload all files from this project to the repository.
3. Commit and push to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, select **GitHub Actions**.
6. Open **Actions** and wait for “Deploy portfolio to GitHub Pages” to finish.
7. Visit `https://USERNAME.github.io`.

## Deploy as a project site

Use any repository name, such as `portfolio`, and follow the same process. The address will be:

```text
https://USERNAME.github.io/portfolio/
```

## Update the website

- `app/page.tsx` — page content and structure
- `app/globals.css` — responsive styling and animations
- `public/syed-jaffar-raza.png` — profile portrait
- `app/layout.tsx` — title and SEO description

Every push to `main` automatically rebuilds and republishes the website.
