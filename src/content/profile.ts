import type { Profile } from '../types/profile'

export const profile: Profile = {
  name: 'Conner',
  role: 'Software developer',

  headline: ['Building software', 'with purpose.'],

  introduction:
    'I’m a computer science student and software developer passionate about building meaningful applications, solving complex problems, and creating intuitive user experiences.',

  heroImage: 'images/studio-computer.webp',

  about: [
    'I’m a Computer Science student at Montana State University, approaching graduation and preparing to begin my career in software development. I enjoy the challenge of taking an idea from its earliest stages and turning it into something functional, meaningful, and enjoyable to use.',

    'My interests span full-stack development, object-oriented programming, database design, and user experience. I particularly enjoy independent projects that allow me to explore new technologies, solve real problems, and take ownership of the entire development process.',

    'I believe good software should do more than simply work. It should serve a purpose, be intuitive to use, and be built in a way that allows it to grow. I’m always looking for opportunities to challenge myself, learn something new, and become a better developer.',
  ],

  skills: [
    {
      title: 'Programming languages',
      items: [
        'Java',
        'C#',
        'TypeScript & JavaScript',
        'Python',
        'C',
        'SQL',
      ],
    },
    {
      title: 'Full-stack development',
      items: [
        'React',
        'ASP.NET Core',
        'HTML & CSS',
        'REST APIs',
        'PostgreSQL & SQLite',
        'Entity Framework Core',
      ],
    },
    {
      title: 'Software engineering',
      items: [
        'Object-oriented programming',
        'Software design patterns',
        'Data structures & algorithms',
        'Relational database design',
        'Unit testing',
        'Event-driven programming',
      ],
    },
    {
      title: 'User experience',
      items: [
        'User-centered design',
        'Wireframing & prototyping',
        'Usability evaluation',
        'Responsive design',
        'Interaction design',
      ],
    },
    {
      title: 'Tools & technologies',
      items: [
        'Git & GitHub',
        'IntelliJ IDEA',
        'Visual Studio Code',
        'Gradle',
        'Vite',
        'pgAdmin',
      ],
    },
  ],

  experience: [
    {
      title: 'Computer Science',
      context: 'Montana State University',
      description:
        'Developed a foundation in software engineering, algorithms, database systems, operating systems, computer networks, programming languages, and user experience design through academic coursework and hands-on projects.',
    },
    {
      title: 'Full-stack application development',
      context: 'Independent development',
      description:
        'Designed and developed Indwell, a Scripture memorization web application using React, TypeScript, ASP.NET Core, and PostgreSQL. Responsible for application architecture, authentication, database design, API integration, and interface development.',
    },
    {
      title: 'Java software development',
      context: 'Independent development',
      description:
        'Developed CommunityEconomy, a Minecraft server plugin featuring custom currency, interactive inventory menus, event-driven programming, command handling, and persistent data management.',
    },
    {
      title: 'User experience design',
      context: 'Academic & independent practice',
      description:
        'Applied user-centered design principles through problem definition, brainstorming, wireframing, prototyping, and usability evaluation to create intuitive and purposeful interfaces.',
    },
  ],

  sampleProfile: false,

  links: {
    github: 'https://github.com/reptinox',
  },
}