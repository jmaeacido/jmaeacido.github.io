# John Mark Agustin E. Acido Portfolio

A modern static portfolio website for **John Mark Agustin E. Acido**, positioned as a Developer VA, Technical VA, and Web Developer.

The site is built with plain HTML, CSS, and JavaScript. It does not require a build step or custom backend, so it can be deployed directly to GitHub Pages, Netlify, Vercel, or any static hosting provider.

## Overview

This portfolio highlights technical virtual assistant work, web systems support, reporting workflows, documentation, and sanitized project examples from KODUS and ZYNQ. It also includes standalone mockups for portfolio samples and client-facing concept work.

## Features

- Responsive layout for mobile, tablet, and desktop
- Hero, About, Services, Skills, Projects, Mockups, Experience, Contact, and Footer sections
- Dark/light mode with the selected theme saved in `localStorage`
- Mobile hamburger navigation
- Active section highlighting while scrolling
- Smooth anchor navigation
- Scroll reveal animations
- Project category filtering
- Project detail modal with sanitized screenshot galleries and keyboard carousel support
- GitHub Pages-friendly contact form that validates fields and opens a prefilled Gmail draft
- Resume download button
- SEO basics, sitemap, robots file, manifest, favicons, and social preview assets

## File Structure

```text
.
|-- index.html
|-- README.md
|-- robots.txt
|-- sitemap.xml
|-- site.webmanifest
|-- google3591396b72fb49f9.html
|-- assets/
|   |-- css/
|   |   `-- style.css
|   |-- js/
|   |   `-- main.js
|   |-- img/
|   |   |-- projects/
|   |   |   |-- kodus/
|   |   |   `-- zynq/
|   |   |-- favicon files
|   |   |-- logo files
|   |   `-- social preview assets
|   `-- resume/
|       |-- John_Mark_Agustin_E_Acido.pdf
|       `-- John_Mark_Agustin_E_Acido_Resume.pdf
`-- mockups/
    |-- candle-wall-mockup/
    |-- kaila-marketplace/
    |-- resumo/
    `-- sjpgalido-va-portfolio/
```

## Main Files

- `index.html` contains the portfolio content, navigation, project cards, mockup previews, contact form, SEO tags, and modal markup.
- `assets/css/style.css` contains the complete visual system, layout rules, responsive behavior, theme colors, and component styles.
- `assets/js/main.js` handles theme switching, mobile navigation, scroll reveals, active nav state, project filters, modal galleries, carousel controls, and contact form behavior.
- `assets/img/projects/kodus/` and `assets/img/projects/zynq/` contain sanitized project screenshots used in the detail modal galleries.
- `mockups/` contains additional static demos that are embedded in the portfolio mockups section.

## How to Run Locally

Because this is a static site, you can open `index.html` directly in a browser.

For a local server, run one of these from the project root:

```powershell
python -m http.server 8000
```

or use Laragon, VS Code Live Server, or any static file server. Then open:

```text
http://localhost:8000/
```

## How to Customize Content

Edit `index.html` to update:

- Name, title, hero copy, and call-to-action links
- About, services, skills, experience, and contact details
- Project cards and mockup descriptions
- SEO title, description, Open Graph image, and structured data
- Resume link if the PDF filename changes

Edit `assets/css/style.css` to update:

- Theme colors in the `:root` variables
- Typography, spacing, cards, buttons, shadows, and responsive layouts
- Project gallery, modal, contact form, and mockup preview styling

Edit `assets/js/main.js` to update:

- Theme toggle behavior
- Project filter behavior
- Project detail copy and screenshot lists
- Modal carousel behavior
- Contact form validation and Gmail draft logic
- Scroll reveal and active navigation behavior

## Resume

The main resume download points to:

```text
assets/resume/John_Mark_Agustin_E_Acido.pdf
```

If you rename or replace the resume file, update the matching link in `index.html`.

## Project Screenshots

Project screenshots are organized here:

```text
assets/img/projects/kodus/
assets/img/projects/zynq/
```

Before publishing screenshots, make sure all private data is removed, blurred, cropped, replaced, or otherwise sanitized. Avoid exposing real beneficiary, tenant, branch, terminal, sales, audit, account, or client-sensitive information.

## Mockups

The portfolio includes these static mockups:

- `mockups/candle-wall-mockup/` - digital prayer candle wall concept
- `mockups/kaila-marketplace/` - founder-grade marketplace/product sample
- `mockups/resumo/` - resume intelligence dashboard concept
- `mockups/sjpgalido-va-portfolio/` - VA and social media manager portfolio sample

Each mockup has its own `index.html` and supporting assets. They are linked and previewed from the main portfolio page.

## Contact Form

The contact form is configured for static hosting. It validates required fields in the browser, then opens a prefilled Gmail compose window addressed to:

```text
94jmaea94@gmail.com
```

If popup blocking prevents the Gmail tab from opening, the page shows a manual Gmail link and mailto fallback.

To support inbox-style submissions later, connect the form to a static-site form service such as Formspree, Basin, Netlify Forms, or a custom API endpoint.

## SEO and Publishing Assets

The project includes:

- `robots.txt`
- `sitemap.xml`
- `site.webmanifest`
- Google verification HTML file
- Favicons and app icons in `assets/img/`
- Open Graph/social preview image assets

When the final domain changes, update canonical URLs and sitemap entries in `index.html` and `sitemap.xml`.

## Deploy to GitHub Pages

1. Push the project to a GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save and wait for GitHub Pages to publish.

The site will usually be available at:

```text
https://your-username.github.io/repository-name/
```

## Confidentiality Reminder

This portfolio is designed to show technical capability without exposing private operational data. Keep screenshots, documents, reports, and mock data sanitized before publishing.
