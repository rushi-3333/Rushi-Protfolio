# Portfolio — M Rushendra Sai Murali Krishna (Rushi)

A personal portfolio site showcasing education, projects, skills, achievements, and a contact form. Built with React and Vite.

## Tech stack

- **React 19** + **Vite 7**
- **react-icons** (Fa, Si) for social and UI icons
- **CSS** (custom theme, no UI framework)

## Features

- **Hero** — Intro, title, summary, location, availability, CTAs (View Projects, Download Resume, Contact), profile photo, and social links (Email, GitHub, LeetCode, CodeChef, Codeforces, LinkedIn)
- **Education** — B.Tech CSE (Data Science), CMR Engineering College; Intermediate & SSC
- **Projects** — Timeline layout with alternating left/right cards; click a project to expand full details (problem & impact, outcome, tech stack, GitHub link). Projects: Alunite, Mov-ment, Amazon Clone, Darshi Foods, Rock Paper Scissors, Simple Calculator
- **Skills & Tools** — Languages & frameworks, tools & platforms, databases, soft skills, languages spoken
- **Achievements & Certifications** — Scroll-in highlight and hover highlight on list items; SIH, NextGenHack, Smart Interviews, ISTE; NPTEL, Forage, Google Cloud, Salesforce, etc.
- **About** — Story, focus areas, career goals, personality
- **Contact** — Centered “Contact Me” form (Name, Email, Message) with **Formspree** integration so messages are delivered to your inbox

## Project structure

```
protfilio/
├── public/           # Static assets (e.g. profile.jpg, Rushi-Resume.pdf)
├── src/
│   ├── App.jsx       # Main app, sections, and data
│   ├── App.css
│   ├── index.css     # Global and section styles
│   ├── main.jsx
│   └── index.html
├── package.json
└── README.md
```

## Setup and run

```bash
# Install dependencies
npm install

# Start dev server (with HMR)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Contact form (Formspree)

The contact form posts to [Formspree](https://formspree.io). The form ID is set in `App.jsx`:

```js
const FORMSPREE_FORM_ID = 'mqedndgr'
```

To use your own form: create a form at [formspree.io](https://formspree.io), add your email, and replace `FORMSPREE_FORM_ID` with your form ID.

## Customization

- **Profile and links** — Edit `placeholderProfile`, `contactInfo`, `resumeInfo` in `App.jsx`.
- **Projects** — Update the `projects` array (order, titles, taglines, links, tech, problemImpact, outcome).
- **Achievements & certifications** — Edit `achievements` and `certifications` arrays.
- **Education / about** — Edit `education`, `otherEducation`, `aboutStory`, `careerGoals`, `personality`, and related constants.
- **Experience** — The Experience section is commented out in JSX and in the nav; uncomment both to show it again.

## License

Private project. All rights reserved.
