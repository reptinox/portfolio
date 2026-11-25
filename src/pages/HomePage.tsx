import { Icon } from '../components/Icon'
import { ProjectCard } from '../components/ProjectCard'
import { ProfessionalLinks } from '../components/SiteChrome'
import { profile } from '../content/profile'
import { projects } from '../content/projects'
import { assetUrl } from '../lib/urls'
import '../styles/home.css'

function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="greeting">Hello, I’m Conner Brost</p>
      <h1 id="hero-title">{profile.headline[0]}<em>{profile.headline[1]}</em></h1>
      <p className="hero-intro">{profile.introduction}</p>
      <div className="hero-actions">
        <a className="primary-link" href="#/work"><Icon name="folder" size={18} />View my work</a>
        <a className="text-link" href="#/about">About me</a>
      </div>
    </div>
    <img className="hero-art" src={assetUrl(profile.heroImage)} alt="" width="1536" height="1024" fetchPriority="high" />
  </section>
}

function About() {
  return <section className="info-section" id="about" tabIndex={-1} aria-labelledby="about-title">
    <div className="info-heading">
      <h2 id="about-title">About me<span>.</span></h2>
      {profile.sampleProfile && <p className="sample-note">Sample profile</p>}
    </div>
    <div className="about-copy">{profile.about.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<ProfessionalLinks /></div>
  </section>
}

function Skills() {
  return <section className="info-section skills-section" id="skills" tabIndex={-1} aria-labelledby="skills-title">
    <div className="info-heading">
      <h2 id="skills-title">Skills &amp; <br />experience<span>.</span></h2>
      {profile.sampleProfile && <p className="sample-note">Sample background</p>}
    </div>
    <div className="skills-content">
      {profile.skills.length > 0 && <div className="skill-grid">
        {profile.skills.map(group => <div key={group.title}><h3>{group.title}</h3>
          <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
        </div>)}
      </div>}
      {profile.experience.map(item => <div className="experience-row" key={item.title}>
        <p className="experience-context">{item.context}</p>
        <div><h3>{item.title}</h3><p>{item.description}</p></div>
      </div>)}
    </div>
  </section>
}

export default function HomePage() {
  return <div className="container">
    <Hero />
    <section className="work-section" id="work" tabIndex={-1} aria-labelledby="work-title">
      <div className="work-heading">
        <h2 id="work-title">Selected work<span>.</span></h2>
        <span className="project-count"><Icon name="stack" size={15}/>{projects.length} {projects.length === 1 ? 'project' : 'projects'}</span>
      </div>
      <div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project} />)}</div>
    </section>
    <About />
    <Skills />
  </div>
}
