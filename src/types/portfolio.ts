export interface ProjectImage {
  /** Path inside public/, or a complete https URL. */
  src: string
  alt: string
  caption?: string
}

export interface ProjectSection {
  label: string
  title: string
  paragraphs?: string[]
  points?: { title: string; text: string }[]
  images?: ProjectImage[]
}

export interface Project {
  /** Use a stable, URL-friendly slug. It is the project's public address. */
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  sample?: boolean
  context?: string
  cover?: ProjectImage
  tools?: string[]
  contributions?: { label: string; text: string }
  sections: ProjectSection[]
  links?: { repository?: string; demo?: string }
}
