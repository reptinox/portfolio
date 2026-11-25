import type { Project } from '../types/portfolio'
import { assetUrl } from '../lib/urls'
import ProjectArtwork from './ProjectArtwork'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-image">
        {project.cover ? (
          <img
            src={assetUrl(project.cover.src)}
            alt={project.cover.alt}
            loading="lazy"
          />
        ) : (
          <ProjectArtwork slug={project.slug} />
        )}
      </div>

      <div className="project-category">
        {project.category}
      </div>

      <h3>
        <a className="project-link" href={`#/work/${project.slug}`}>
          {project.title}
        </a>
      </h3>

      <p>{project.description}</p>

      <a
        className="case-link"
        href={`#/work/${project.slug}`}
        aria-label={`Learn more about ${project.title}`}
      >
        View Project
      </a>
    </article>
  )
}