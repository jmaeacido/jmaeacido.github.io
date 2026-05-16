# John Mark Acido Developer VA Portfolio

A modern static portfolio website for **John Mark Agustin E. Acido**, positioned as a Developer VA, Technical VA, and Web Developer.

The site is built with plain HTML, CSS, and JavaScript. It has no custom backend and is ready for free hosting on GitHub Pages or any static hosting provider.

## Features

- Responsive portfolio layout for mobile, tablet, and desktop
- Hero, About, Services, Skills, Projects, Experience, Testimonials, Contact, and Footer sections
- Dark/light mode toggle saved in `localStorage`
- Mobile hamburger navigation
- Active section highlighting
- Smooth scrolling
- Subtle scroll reveal animations
- Project category filtering
- GitHub Pages-friendly contact form with visual validation and prefilled Gmail draft
- Confidentiality-friendly project placeholders
- Resume download link pointing to `assets/resume/John_Mark_Acido_Resume.pdf`

## File Structure

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   └── resume/
└── README.md
```

## How to Customize Content

Edit `index.html` to update:

- Name, role title, and hero tagline
- About paragraph
- Services and skill lists
- Project titles, descriptions, tech stacks, and categories
- Experience timeline entries
- Testimonial placeholders
- Contact links for email, GitHub, and Facebook

Edit `assets/css/style.css` to update:

- Colors in the `:root` variables
- Spacing, card styling, shadows, and responsive behavior
- Placeholder image styles

Edit `assets/js/main.js` only if you want to change:

- Theme toggle behavior
- Project filtering
- Contact form validation and email draft behavior
- Project details modal text
- Scroll animations or active navigation

## Resume

Place your resume PDF here:

```text
assets/resume/John_Mark_Acido_Resume.pdf
```

The hero button already points to that file. If you rename the PDF, update the link in `index.html`.

## Images

Place portfolio images in:

```text
assets/img/
```

Recommended filenames:

- `profile.jpg`
- `kodus-system.jpg`
- `reporting-tools.jpg`
- `secure-login.jpg`
- `workflow-automation.jpg`

Do not upload confidential government data or real client-sensitive screenshots. Use sanitized, cropped, redacted, or blurred images only.

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload or push this project folder.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save and wait for GitHub to publish the site.

Your site will usually be available at:

```text
https://your-username.github.io/repository-name/
```

## Contact Form

The contact form is configured for GitHub Pages. Since GitHub Pages does not process backend form submissions, the form validates required fields and opens a prefilled Gmail draft addressed to `94jmaea94@gmail.com`.

If you later want inbox-style form submissions without opening an email app, connect the form to a third-party service such as Formspree or another static-site form provider.

## Confidentiality Reminder

This portfolio intentionally uses placeholders. Keep screenshots sanitized, blurred, or redacted before publishing.
