import Head from 'next/head'
import styles from '@styles/Home.module.css'

const projects = [
  {
    title: 'Project One',
    description: 'A full-stack web application built with React and Node.js, featuring real-time updates and a REST API.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    href: '#',
  },
  {
    title: 'Project Two',
    description: 'A mobile-first e-commerce platform with cart management, authentication, and payment integration.',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS'],
    href: '#',
  },
  {
    title: 'Project Three',
    description: 'An open-source CLI tool that automates repetitive development workflows.',
    tags: ['TypeScript', 'Node.js', 'CLI'],
    href: '#',
  },
]

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js',
  'Node.js', 'Python', 'PostgreSQL', 'Git',
]

export default function Home() {
  return (
    <div className={styles.page}>
      <Head>
        <title>John Yalcin — Portfolio</title>
        <meta name="description" content="Full-stack developer portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <span className={styles.logo}>JY</span>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <p className={styles.greeting}>Hi, I&apos;m</p>
          <h1 className={styles.name}>John Yalcin</h1>
          <p className={styles.tagline}>Full-Stack Developer who loves building fast, accessible web experiences.</p>
          <a href="#contact" className={styles.cta}>Get in touch</a>
        </section>

        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>About</h2>
            <p className={styles.bio}>
              I&apos;m a full-stack developer with a passion for clean code and great user experiences.
              I work across the entire stack — from designing APIs to shipping polished UIs.
              When I&apos;m not coding, you&apos;ll find me contributing to open source or exploring new technologies.
            </p>
            <div className={styles.skills}>
              {skills.map((skill) => (
                <span key={skill} className={styles.skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className={styles.section + ' ' + styles.sectionAlt}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.grid}>
              {projects.map((project) => (
                <a key={project.title} href={project.href} className={styles.card}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <p className={styles.bio}>
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            <a href="mailto:john@example.com" className={styles.cta}>
              john@example.com
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} John Yalcin</p>
      </footer>
    </div>
  )
}
