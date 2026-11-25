import ProjectArtwork from '../components/ProjectArtwork'
import { projects } from '../content/projects'
import { assetUrl } from '../lib/urls'
import type { Project, ProjectImage, ProjectSection } from '../types/portfolio'
import '../styles/project.css'

function Figure({ image, cover = false }: { image: ProjectImage; cover?: boolean }) {
  return (
    <figure className="case-figure">
      <img src={assetUrl(image.src)} alt={image.alt} loading={cover ? 'eager' : 'lazy'} decoding="async" />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  )
}

function Chapter({ section }: { section: ProjectSection }) {
  return (
    <section className="case-chapter">
      <p className="case-kicker">{section.label}</p>
      <h2>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {section.points && section.points.length > 0 && (
        <dl className="case-decisions">
          {section.points.map((point) => (
            <div key={point.title}>
              <dt>{point.title}</dt>
              <dd>{point.text}</dd>
            </div>
          ))}
        </dl>
      )}
      {section.images && section.images.length > 0 && (
        <div className={`case-gallery ${
          section.label === 'High-fidelity design' ? 'prototype-gallery' : ''
        }`}>
          {section.images.map((image) => <Figure key={image.src} image={image} />)}
        </div>
      )}
    </section>
  )
}

export default function ProjectPage({ project }: { project: Project }) {
  const index = projects.findIndex(({ slug }) => slug === project.slug)
  const next = projects.length > 1 ? projects[(index + 1) % projects.length] : undefined
  const hasFacts = Boolean(project.context || project.contributions || project.tools?.length || project.tags.length)
  const repository = project.links?.repository?.trim()
  const demo = project.links?.demo?.trim()

  return (
    <article className="case-page">
      <nav className="case-crumb" aria-label="Breadcrumb">
        <a href="#/">Home</a>
        <span aria-hidden="true">/</span>
        <a href="#/work">Work</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{project.title}</span>
      </nav>
      <header className="case-intro">
        <div className="case-heading">
          <p className="case-kicker">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-deck">{project.description}</p>
          {project.sample && <p className="case-sample">Illustrative case study</p>}
          {(repository || demo) && (
            <div className="case-links">
              {repository && <a href={repository}>Source code</a>}
              {demo && <a href={assetUrl(demo)}>Live demo</a>}
            </div>
          )}
        </div>
        <div className="case-cover">
          {project.cover ? <Figure image={project.cover} cover /> : <ProjectArtwork slug={project.slug} />}
        </div>
      </header>
      <div className={hasFacts ? 'case-body case-body-with-facts' : 'case-body'}>
        {hasFacts && (
          <aside className="case-facts" aria-label="Project details">
            <dl>
              {project.context && (
                <div>
                  <dt>Project context</dt>
                  <dd>{project.context}</dd>
                </div>
              )}
              {project.contributions && (
                <div>
                  <dt>{project.contributions.label}</dt>
                  <dd>{project.contributions.text}</dd>
                </div>
              )}
              {project.tags.length > 0 && (
                <div>
                  <dt>Project focus</dt>
                  <dd>{project.tags.join(' · ')}</dd>
                </div>
              )}
              {project.tools && project.tools.length > 0 && (
                <div>
                  <dt>Tools & technology</dt>
                  <dd><ul>{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></dd>
                </div>
              )}
            </dl>
          </aside>
        )}
        <div className="case-chapters">
          {project.sections.map((section) => <Chapter key={section.title} section={section} />)}
        </div>
      </div>
      {next && (
        <nav className="case-next" aria-label="More projects">
          <a href={`#/work/${next.slug}`}>
            <span className="case-kicker">Next case study</span>
            <strong>{next.title}</strong>
            <span className="case-next-category">{next.category}</span>
          </a>
        </nav>
      )}
    </article>
  )
}
