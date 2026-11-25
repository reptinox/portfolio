export interface Profile {
  name: string
  role: string
  headline: [string, string]
  introduction: string
  heroImage: string
  about: string[]
  skills: { title: string; items: string[] }[]
  experience: { title: string; context: string; description: string }[]
  sampleProfile: boolean
  links: {
    github?: string
    linkedin?: string
    email?: string
    resume?: string
  }
}
