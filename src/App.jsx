import { useState, useRef, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaFolderOpen, FaFileAlt, FaPaperPlane } from 'react-icons/fa'
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si'

const CURRENT_YEAR = new Date().getFullYear()

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  // { id: 'experience', label: 'Experience' }, // Commented out – uncomment to show Experience section
  { id: 'achievements', label: 'Achievements' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

const profileImage = '/profile.jpg'

const placeholderProfile = {
  name: 'M Rushendra Sai Murali Krishna - ( Rushi )',
  title: 'B.Tech CSE (Data Science) Student & Aspiring Software Engineer',
  summary:
    'Motivated Computer Science undergraduate specializing in Data Science with strong problem-solving, leadership and communication skills, aiming to apply my software engineering and coding abilities to real-world projects.',
  location: 'Hyderabad, India',
  availability: 'Open to internships and software roles',
  avatarAlt: 'Portrait of M Rushendra Sai Murali Krishna',
}

const focusAreas = [
  'Data Science',
  'Software Engineering',
  'Problem Solving',
  'Full‑stack Development',
]

const aboutStory =
  'I am a B.Tech Computer Science & Engineering (Data Science) student at CMR Engineering College with a strong academic record and a passion for building practical software solutions.'

const careerGoals =
  'I am seeking challenging roles and internships in software engineering or data science where I can apply my coding skills, analytical thinking and data-driven mindset.'

const personality =
  'I enjoy solving problems, leading and organizing events as a class representative, and actively taking part in hackathons and extracurricular technical activities.'

const technicalSkills = [
  {
    category: 'Languages & Frameworks',
    items: [
      { name: 'C', level: 'Intermediate' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'Python (Basics)', level: 'Beginner' },
      { name: 'MySQL (Basics)', level: 'Beginner' },
      { name: 'HTML5 & CSS3', level: 'Intermediate' },
      { name: 'JavaScript', level: 'Intermediate' },
      { name: 'React.js', level: 'Intermediate' },
      { name: 'Node.js', level: 'Beginner' },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'VS Code', level: 'Advanced' },
      { name: 'Git & GitHub', level: 'Intermediate' },
      { name: 'Excel', level: 'Intermediate' },
      { name: 'PowerPoint', level: 'Intermediate' },
      { name: 'Word', level: 'Intermediate' },
    ],
  },
  {
    category: 'Databases',
    items: [
      { name: 'MySQL', level: 'Beginner' },
    ],
  },
]

const softSkills = [
  { name: 'Problem-solving', level: 'Strong' },
  { name: 'Leadership', level: 'Strong' },
  { name: 'Team worker', level: 'Strong' },
  { name: 'Critical Thinking', level: 'Strong' },
  { name: 'Communication', level: 'Strong' },
]

const languagesSpoken = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Intermediate' },
  { name: 'Telugu', level: 'Native' },
]

const projects = [
  {
    title: 'Alunite',
    tagline:
      'Alumni management system with role-based dashboards and event management.',
    problemImpact: [
      'Centralises alumni data so students, faculty and admins can access updated information in one place.',
      'Simplifies event management and communication between alumni and the institution.',
    ],
    role: 'Full‑stack Developer',
    tech: ['React.js', 'Node.js', 'Supabase'],
    links: {
      live: '#',
      github: '#',
      caseStudy: '#',
    },
    outcome: [
      'Implemented role-based dashboards for students, faculty and admins.',
      'Improved my understanding of authentication, data storage and dashboard design.',
    ],
  },
  {
    title: 'Mov-ment',
    tagline:
      'Full‑stack app with client and server, user profiles, PDF invoicing and manager workflows.',
    problemImpact: [
      'Provides a clear separation between front-end (client) and back-end (server), making the app easier to maintain and deploy.',
      'Supports user-facing features like profile dropdown and manager requests, plus PDF invoice generation for business use.',
      'Uses MongoDB Atlas for data storage, giving a solid foundation for real-world full‑stack development.',
    ],
    role: 'Full‑stack Developer',
    tech: ['React', 'Node.js', 'MongoDB'],
    links: {
      live: '#',
      github: 'https://github.com/rushi-3333/mov-ment',
      caseStudy: '#',
    },
    outcome: [
      'Built and maintained a full‑stack application with a React client and Node.js server, including Atlas setup and documentation.',
      'Implemented profile dropdown, PDF invoice generation and manager-request flows, improving both UI and server-side logic.',
      'Strengthened skills in API design, database integration and organising a monorepo-style project (client + server).',
    ],
  },
  {
    title: 'Amazon Clone',
    tagline:
      'E‑commerce clone with product listing, shopping cart, checkout and order history.',
    problemImpact: [
      'Demonstrates end‑to‑end e‑commerce flow: browse products, add to cart, checkout and view orders in one cohesive app.',
      'Uses structured data (product classes) and a backend so the project scales beyond static HTML and feels closer to a real store.',
      'Includes tests for cart logic, reinforcing clean, maintainable code and object‑oriented design.',
    ],
    role: 'Full‑stack Developer',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
    links: {
      live: '#',
      github: 'https://github.com/rushi-3333/amazon-project',
      caseStudy: '#',
    },
    outcome: [
      'Built product listing, cart, checkout and orders pages with a Node.js backend and organised front-end (scripts, styles, data).',
      'Implemented an OOP-based cart with tests, improving my understanding of data modelling and testable JavaScript.',
      'Gained hands-on experience in splitting front-end and back-end concerns and managing a multi-page e‑commerce flow.',
    ],
  },
  {
    title: 'Darshi Foods',
    tagline:
      'Multi‑page food ordering website for browsing menus, booking tables and placing online orders.',
    problemImpact: [
      'Gives a small restaurant a simple online presence where customers can see the menu, offers and contact details in one place.',
      'Lets users explore dishes, add items to a cart and review order history, improving the overall ordering experience.',
      'Helps practise structuring a complete static website with reusable layout, navigation and responsive design.',
    ],
    role: 'Frontend Web Developer',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    links: {
      live: '#',
      github: 'https://github.com/rushi-3333/Darshi-foods',
      caseStudy: '#',
    },
    outcome: [
      'Built a multi‑page site (home, menu, cart, booking, contact, order history) with consistent navigation and branding.',
      'Improved my skills in organising HTML/CSS structure across pages and managing basic cart behaviour with JavaScript.',
      'Strengthened understanding of responsive layouts and typography for real‑world UI.',
    ],
  },
  {
    title: 'Rock Paper Scissors',
    tagline:
      'Classic Rock Paper Scissors game built in first year with plain HTML, CSS and JavaScript.',
    problemImpact: [
      'Introduces core web dev concepts: DOM manipulation, user input and simple game logic in the browser.',
      'Gives a fun, playable result that reinforces event handling, conditional logic and basic UI updates.',
      'Serves as an early milestone to build confidence before tackling larger projects.',
    ],
    role: 'Frontend Developer',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    links: {
      live: '#',
      github: '#',
      caseStudy: '#',
    },
    outcome: [
      'Built a working game with clickable choices, result display and score tracking using only HTML, CSS and JS.',
      'Learned to wire buttons to JavaScript, update the DOM and structure a small single-page project.',
      'Solidified fundamentals that I later used in more complex front-end and full-stack projects.',
    ],
  },
  {
    title: 'Simple Calculator',
    tagline:
      'Basic calculator with a clean UI—HTML and CSS in first year, JavaScript logic added in second year.',
    problemImpact: [
      'Bridges layout and styling (HTML/CSS) with interactivity (JS), showing how front-end layers work together.',
      'Provides a familiar, practical example for practising DOM events, number handling and basic validation.',
      'Demonstrates iterative learning: starting with static UI, then adding behaviour in a later phase.',
    ],
    role: 'Frontend Developer',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    links: {
      live: '#',
      github: '#',
      caseStudy: '#',
    },
    outcome: [
      'Built the calculator UI and styling in first year, then wired buttons and arithmetic logic with JavaScript in second year.',
      'Learned to read user input, perform calculations and update the display dynamically without page reload.',
      'Gained a clear sense of separating structure (HTML), presentation (CSS) and behaviour (JS) in a small project.',
    ],
  },
]

const experience = [
  {
    role: 'Class Representative',
    org: 'CMR Engineering College',
    dates: '2023 – Present',
    bullets: [
      'Act as liaison between students and faculty for academic and technical activities.',
      'Coordinate project and workshop sessions to improve the overall workflow for the class.',
    ],
  },
]

const education = {
  degree: 'B.Tech in Computer Science & Engineering (Data Science)',
  university: 'CMR Engineering College',
  location: 'Hyderabad, India',
  graduation: '2023 – Present (CGPA 9.67 / 10.0)',
  gpa: '9.67 / 10.0',
  coursework: [
    'Data Structures and Algorithms',
    'Database Management Systems',
    'Operating Systems',
    'Web Technologies',
    'Software Engineering',
  ],
}

const otherEducation = [
  {
    level: 'Intermediate (MPC)',
    institution: 'Sri Chaitanya Jr. College',
    details: 'Score: 951 / 1000',
    year: '2023',
  },
  {
    level: 'SSC',
    institution: 'V V Vidyalayam',
    details: 'CGPA: 10.0 / 10.0',
    year: '2021',
  },
]

const achievements = [
  'Top 10 finalist team in Smart India Hackathon (SIH) 2023.',
  'Winner in Smart India Hackathon (SIH) 2025.',
  'Second prize in NextGenHack 16‑hour hackathon conducted by CMR Engineering College (2025).',
  'Completed Phase 1 and Phase 2 of Smart Interviews Data Structures & Algorithms training within the top 5 performers.',
  'Student member of The India Society for Technical Education (ISTE), 2023–2029.',
]

const certifications = [
  'Google Cloud Career Launchpad — Data Analytics track (Feb 2026).',
  'Salesforce Certified — Advanced Administrator, Agentforce Specialist (Dec 2025).',
  'Forage virtual job simulations — Solutions Architecture and Data Analytics (Deloitte), July 2025.',
  'NPTEL C Programming & Java (2024) — Elite in C, Elite + Silver in Java.',
  'IIT Bombay Spoken Tutorial — Completed programming courses in C, C++, Java and Python basics.',
  "Microsoft's SEFA (Software Engineering for All) program (2025).",
]

const publications = []

const resumeInfo = {
  pdfUrl: '/Rushi-Resume.pdf',
  note: 'You can view my full resume as a PDF or read the summary below.',
}

const contactInfo = {
  email: '238r1a6739@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/rushendra-smkm/',
  github: 'https://github.com/rushi-3333',
  leetcode: 'https://leetcode.com/u/rushi_2115/',
  codechef: 'https://www.codechef.com/users/rushi021105',
  codeforces: 'https://codeforces.com/profile/rushi021105',
  calendarLink: '#',
}

// Formspree: https://formspree.io/f/mqedndgr — submissions are emailed to your Formspree inbox
const FORMSPREE_FORM_ID = 'mqedndgr'

const blogPosts = []

function scrollToSection(id) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [contactStatus, setContactStatus] = useState(null) // 'sending' | 'success' | 'error'
  const [contactError, setContactError] = useState('')
  const [achievementsInView, setAchievementsInView] = useState(false)
  const achievementsRef = useRef(null)

  useEffect(() => {
    const el = achievementsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAchievementsInView(true)
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <div className="app">
      <header className="navbar">
        <div className="navbar-left">
          <span className="logo">{placeholderProfile.name}</span>
        </div>
        <nav className="navbar-right">
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button onClick={() => handleNavClick(link.id)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="section hero">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting">Hi, I'm Rushi,</p>
              <h1 className="hero-title">
                <span className="hero-title-line">I'm an aspiring</span>
                <span className="hero-title-line">Software Engineer</span>
              </h1>
              <p className="hero-summary">{placeholderProfile.summary}</p>
              <p className="hero-meta">
                <span>{placeholderProfile.location}</span> ·{' '}
                <span>{placeholderProfile.availability}</span>
              </p>
              <div className="hero-cta">
                <button onClick={() => scrollToSection('projects')}>
                  <FaFolderOpen />
                  View Projects
                </button>
                <a
                  href={resumeInfo.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  <FaFileAlt />
                  Download Resume
                </a>
                <button onClick={() => scrollToSection('contact')}>
                  <FaPaperPlane />
                  Contact
                </button>
              </div>
              <div className="hero-social">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="icon-circle-link"
                  aria-label="Email"
                >
                  <span className="icon-circle">
                    <FaEnvelope />
                  </span>
                </a>
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-circle-link"
                  aria-label="GitHub"
                >
                  <span className="icon-circle">
                    <FaGithub />
                  </span>
                </a>
                <a
                  href={contactInfo.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-circle-link"
                  aria-label="LeetCode"
                >
                  <span className="icon-circle">
                    <SiLeetcode />
                  </span>
                </a>
                <a
                  href={contactInfo.codechef}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-circle-link"
                  aria-label="CodeChef"
                >
                  <span className="icon-circle">
                    <SiCodechef />
                  </span>
                </a>
                <a
                  href={contactInfo.codeforces}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-circle-link"
                  aria-label="Codeforces"
                >
                  <span className="icon-circle">
                    <SiCodeforces />
                  </span>
                </a>
                <a
                  href={contactInfo.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-circle-link"
                  aria-label="LinkedIn"
                >
                  <span className="icon-circle">
                    <FaLinkedin />
                  </span>
                </a>
              </div>
            </div>
            <div className="hero-avatar">
              <img
                src={profileImage}
                alt={placeholderProfile.avatarAlt}
                className="hero-photo"
              />
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="card">
            <h3>{education.degree}</h3>
            <p className="muted">
              {education.university} · {education.location}
            </p>
            <p>{education.graduation}</p>
            <p>GPA: {education.gpa}</p>

            <h4>Relevant Coursework</h4>
            <ul className="chips">
              {education.coursework.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="cards-grid" style={{ marginTop: '16px' }}>
            {otherEducation.map((ed) => (
              <div key={ed.level} className="card">
                <h3>{ed.level}</h3>
                <p className="muted">{ed.institution}</p>
                <p>{ed.details}</p>
                <p>{ed.year}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section section-projects">
          <h2>Projects</h2>
          <p className="section-intro">
            Click a project marker to see full details. Projects alternate on the left and right
            of the timeline to show how my work has grown over time.
          </p>
          <div className="projects-timeline">
            {projects.map((project, index) => {
              const isActive = index === activeProjectIndex
              const isLeft = index % 2 === 0

              const card = (
                <article
                  className={`card project-panel${isActive ? ' project-panel--active' : ''}`}
                  onClick={() => setActiveProjectIndex(index)}
                >
                  <header className="project-panel-header">
                    <div>
                      <h3>{project.title}</h3>
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-header-link"
                        >
                          View on GitHub
                        </a>
                      )}
                      <p className="project-tagline">{project.tagline}</p>
                    </div>
                  </header>
                  <p className="project-role muted">Role: {project.role}</p>

                  <div className="project-tech-row">
                    <span className="muted label">Tech</span>
                    <ul className="chips">
                      {project.tech.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  {isActive && (
                    <div className="project-panel-body">
                      {project.problemImpact?.length ? (
                        <>
                          <h4>Problem &amp; Impact</h4>
                          <ul className="project-points">
                            {project.problemImpact.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </>
                      ) : null}

                      {project.outcome?.length ? (
                        <>
                          <h4>Outcome &amp; Results</h4>
                          <ul className="project-points">
                            {project.outcome.map((item, idx) => (
                              <li key={idx}>{item}</li>
                            ))}
                          </ul>
                        </>
                      ) : null}
                    </div>
                  )}
                </article>
              )

              return (
                <div
                  key={project.title}
                  className={`project-item ${isLeft ? 'project-item--left' : 'project-item--right'}${
                    isActive ? ' project-item--active' : ''
                  }`}
                >
                  <div className="project-item-col project-item-col--left">
                    {isLeft ? card : null}
                  </div>
                  <div className="project-item-col project-item-col--center">
                    <button
                      type="button"
                      className="project-node"
                      onClick={() => setActiveProjectIndex(index)}
                      aria-label={`View details for ${project.title}`}
                      aria-expanded={isActive}
                    >
                      <span className="project-node-index">
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                    </button>
                  </div>
                  <div className="project-item-col project-item-col--right">
                    {!isLeft ? card : null}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section id="skills" className="section section-skills">
          <h2>Skills & Tools</h2>
          <div className="skills-grid">
            {technicalSkills.map((group) => (
              <div key={group.category} className="card">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      <span className="skill-level">{item.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="two-column">
            <div className="card">
              <h3>Soft Skills</h3>
              <ul>
                {softSkills.map((skill) => (
                  <li key={skill.name}>
                    <span>{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Languages</h3>
              <ul>
                {languagesSpoken.map((lang) => (
                  <li key={lang.name}>
                    <span>{lang.name}</span>
                    <span className="skill-level">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Experience section – commented out; uncomment block below to show again
        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((exp) => (
              <article
                key={exp.role + exp.org}
                className="timeline-item"
              >
                <h3>{exp.role}</h3>
                <p className="muted">
                  {exp.org} · {exp.dates}
                </p>
                <ul>
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
        */}

        <section
          id="achievements"
          ref={achievementsRef}
          className={`section section-achievements${achievementsInView ? ' section-achievements--in-view' : ''}`}
        >
          <h2>Achievements &amp; Certifications</h2>
          <p className="section-intro">
            Highlights from hackathons, memberships, and completed courses and certifications.
          </p>
          <div className="two-column section-achievements-cards">
            <div className="card section-achievements-card">
              <h3>Achievements</h3>
              <ul className="achievements-list">
                {achievements.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="card section-achievements-card">
              <h3>Certifications</h3>
              <ul className="certifications-list">
                {certifications.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <h2>Contact Me</h2>
          <p className="section-intro">
            Have a role in mind or want to connect? Send a message and I’ll get back to you.
          </p>
          <div className="contact-layout">
            <div className="contact-form-card card">
              <h3 className="contact-form-title">Get in touch</h3>
            <form
              className="contact-form"
              onSubmit={async (e) => {
                e.preventDefault()
                const form = e.target
                const data = {
                  name: form.name.value,
                  email: form.email.value,
                  message: form.message.value,
                }
                if (FORMSPREE_FORM_ID === 'YOUR_FORMSPREE_FORM_ID') {
                  setContactStatus('error')
                  setContactError('Form not configured. Add your Formspree form ID in App.jsx.')
                  return
                }
                setContactStatus('sending')
                setContactError('')
                try {
                  const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                  })
                  if (res.ok) {
                    setContactStatus('success')
                    form.reset()
                  } else {
                    setContactStatus('error')
                    setContactError('Something went wrong. Please try again or email me directly.')
                  }
                } catch {
                  setContactStatus('error')
                  setContactError('Network error. Please try again or email me directly.')
                }
              }}
            >
              <label className="contact-label">
                <span className="contact-label-text">Name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="contact-input"
                  required
                  disabled={contactStatus === 'sending'}
                />
              </label>
              <label className="contact-label">
                <span className="contact-label-text">Email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  className="contact-input"
                  required
                  disabled={contactStatus === 'sending'}
                />
              </label>
              <label className="contact-label">
                <span className="contact-label-text">Message</span>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell me about the opportunity or your question..."
                  className="contact-input contact-textarea"
                  required
                  disabled={contactStatus === 'sending'}
                />
              </label>
              <button type="submit" className="contact-submit" disabled={contactStatus === 'sending'}>
                {contactStatus === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
              {contactStatus === 'success' && (
                <p className="contact-form-feedback contact-form-feedback--success">
                  Thanks! I’ll get back to you soon.
                </p>
              )}
              {contactStatus === 'error' && contactError && (
                <p className="contact-form-feedback contact-form-feedback--error">
                  {contactError}
                </p>
              )}
            </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {CURRENT_YEAR} {placeholderProfile.name}. All rights reserved.
        </p>
        <p className="muted">
          Crafted by Rushi with a focus on clarity, performance, and real-world problem solving.
        </p>
      </footer>
    </div>
  )
}

export default App
