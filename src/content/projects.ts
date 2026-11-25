import type { Project } from '../types/portfolio'

// Each project supplies its homepage preview and detailed project page.
// Optional images and sections can be added as the projects evolve.

export const projects: Project[] = [
  {
    slug: 'indwell',
    title: 'Indwell',
    category: 'Full-stack development',
    description:
      'A full-stack Scripture memorization application designed to help users build consistent memorization habits through interactive practice and personalized scheduling.',
    tags: ['Full-stack development', 'Web application'],
    sample: false,

    cover: {
      src: 'images/IndwellBannerLogo.png',
      alt: 'Indwell application preview',
    },

    context:
      'Indwell is an independently developed web application that combines Scripture memorization, Bible reading, and personalized scheduling into a unified experience.',

    tools: [
      'React',
      'TypeScript',
      'Vite',
      'C#',
      'ASP.NET Core',
      'PostgreSQL',
      'Entity Framework Core',
      'REST APIs',
      'Git',
    ],

    contributions: {
      label: 'Independent developer',
      text:
        'Responsible for the application architecture, frontend development, backend implementation, database design, API integration, and user interface design.',
    },

    sections: [
      {
        label: 'Project overview',
        title: 'Building software with a purpose.',
        paragraphs: [
          'Indwell was created to help people consistently memorize Scripture and incorporate it into their daily lives. The application brings together Bible reading, verse discovery, memorization, and personalized reminders within a single platform.',
          'The project also provided an opportunity to independently design and develop a complete full-stack application, applying concepts from software engineering, database systems, and web development.',
        ],
      },

      {
        label: 'Technical architecture',
        title: 'A structured full-stack application.',
        paragraphs: [
          'Indwell separates its frontend, backend, and database into distinct layers. This separation allows individual parts of the application to evolve independently while maintaining a clear flow of data and responsibilities.',
        ],
        points: [
          {
            title: 'Frontend',
            text:
              'Built with React and TypeScript using reusable components, typed data structures, and centralized application state where appropriate.',
          },
          {
            title: 'Backend',
            text:
              'Developed with C# and ASP.NET Core, providing REST API endpoints for authentication, user preferences, Bible content, and scheduling.',
          },
          {
            title: 'Database',
            text:
              'PostgreSQL provides persistent storage for user accounts, preferences, reminder settings, and scheduling information.',
          },
          {
            title: 'External integrations',
            text:
              'Bible API integrations provide access to Scripture content and support multiple Bible translations.',
          },
        ],
      },

      {
        label: 'Authentication and persistence',
        title: 'Creating a personalized experience.',
        paragraphs: [
          'Indwell uses cookie-based authentication to maintain authenticated user sessions. Protected API endpoints associate personal information and preferences with the authenticated user.',
          'User preferences are stored persistently, allowing settings such as preferred Bible translations, reminder configurations, and scheduling information to remain consistent across sessions.',
        ],
        points: [
          {
            title: 'Authentication',
            text:
              'Cookie-based sessions and authorization protect user-specific application functionality.',
          },
          {
            title: 'Database relationships',
            text:
              'Relational data models organize user accounts, preferences, and scheduling information.',
          },
          {
            title: 'Input validation',
            text:
              'Frontend and backend validation help prevent invalid scheduling information and unsupported operations.',
          },
        ],
      },

      {
        label: 'Key features',
        title: 'Supporting consistent Scripture memorization.',
        points: [
          {
            title: 'Bible reading and verse discovery',
            text:
              'Users can navigate Scripture, search for verses, and select their preferred Bible translation.',
          },
          {
            title: 'Interactive memorization',
            text:
              'The memorization experience is designed around active recall and progressively challenging practice techniques.',
          },
          {
            title: 'Personalized scheduling',
            text:
              'Users can manage recurring weekly commitments and one-time events to represent their daily schedules.',
          },
          {
            title: 'Reminder preferences',
            text:
              'Configurable reminder times, quiet hours, and time zone preferences provide the foundation for personalized notifications.',
          },
          {
            title: 'Responsive interface',
            text:
              'The application is designed to accommodate both desktop and mobile usage.',
          },
        ],
      },

      {
        label: 'Technical challenges',
        title: 'Solving problems beyond the interface.',
        paragraphs: [
          'One of the more complex aspects of Indwell is representing user schedules and reminder preferences in a way that supports different daily routines.',
          'Recurring commitments, one-time events, quiet hours, and time zones introduce additional considerations beyond a traditional reminder system.',
        ],
        points: [
          {
            title: 'Scheduling logic',
            text:
              'Representing recurring and temporary commitments while maintaining valid scheduling information.',
          },
          {
            title: 'Time zone handling',
            text:
              'Supporting user-selected time zones so scheduling preferences can be interpreted consistently.',
          },
          {
            title: 'State synchronization',
            text:
              'Keeping frontend preferences consistent with information stored by the backend.',
          },
          {
            title: 'Maintainability',
            text:
              'Separating application functionality into focused components, API endpoints, data models, and styles.',
          },
        ],
      },

      {
        label: 'Reflection and future development',
        title: 'Developing a complete application independently.',
        paragraphs: [
          'Indwell has strengthened my understanding of full-stack development by requiring me to make architectural decisions, integrate external services, design relational data models, and build a cohesive user experience.',
          'Future development will focus on expanding memorization techniques, completing notification delivery, improving application performance, and refining the progressive web application experience through real-world usage.',
        ],
      },
    ],
  },

  {
    slug: 'indwell-ux',
    title: 'Indwell — UX Design',
    category: 'User experience design',
    description:
      'A user-centered design exploration focused on making Scripture memorization more accessible, engaging, and adaptable to everyday routines.',
    tags: ['UX/UI design', 'Prototyping', 'Interaction design'],
    sample: false,

    cover: {
      src: 'images/IndwellIcon.png',
      alt: 'Indwell icon preview',
    },

    context:
      'This case study explores the user experience design process behind Indwell, focusing on understanding user needs and translating them into an intuitive application.',

    tools: [
      'Mind mapping',
      'Brainstorming',
      'Interface sketching',
      'Prototyping',
      'Usability heuristics',
    ],

    contributions: {
      label: 'Design contribution',
      text:
        'Contributed to problem definition, idea generation, interface design, prototyping, and the evaluation of usability principles.',
    },

    sections: [
      {
        label: 'The problem',
        title: 'Making memorization part of everyday life.',
        paragraphs: [
          'Scripture memorization requires consistency, repetition, and intentional practice. However, busy schedules and competing responsibilities can make it difficult to establish and maintain a regular memorization routine.',
          'Indwell explores how a digital application can reduce these barriers by providing accessible memorization tools, personalized scheduling, and a focused interface that encourages consistent engagement.',
        ],
      },

      {
        label: 'Discovery',
        title: 'Understanding the needs of the user.',
        paragraphs: [
          'The design process focused on identifying the challenges users may encounter when attempting to memorize Scripture consistently, with particular attention to students balancing classes, responsibilities, and personal commitments.',
          'Important design considerations included the amount of time available for practice, differences in memorization preferences, notification fatigue, and the need for an application that is easy to navigate.',
        ],
        points: [
          {
            title: 'Consistency',
            text:
              'Users need a way to incorporate memorization into their existing routines without creating unnecessary additional responsibilities.',
          },
          {
            title: 'Flexibility',
            text:
              'Different users benefit from different memorization techniques, practice schedules, and levels of difficulty.',
          },
          {
            title: 'Accessibility',
            text:
              'Important functionality should be easy to discover and use without requiring extensive instructions.',
          },
        ],
        images: [
          {
            src: 'images/IndwellEmpathyMap.jpg',
            alt: 'Empathy map exploring the needs of Indwell users',
            caption: 'Identifying user needs, challenges, and motivations.',
          },
        ],
      },

      {
        label: 'Brainstorming and ideation',
        title: 'Exploring possible solutions.',
        paragraphs: [
          'The ideation process explored different approaches to Scripture memorization, reminder systems, application organization, and personalized practice.',
          'Potential features were considered based on their usefulness, implementation complexity, and ability to address the central problem of maintaining consistent memorization habits.',
        ],
        points: [
          {
            title: 'Interactive memorization',
            text:
              'Explore active recall techniques such as first-letter prompts and progressively disappearing words.',
          },
          {
            title: 'Schedule-aware reminders',
            text:
              'Consider how reminders could accommodate existing commitments rather than interrupting important activities.',
          },
          {
            title: 'Personal organization',
            text:
              'Provide ways for users to organize Scripture and access the passages they want to practice.',
          },
        ],
        images: [
          {
            src: 'images/IndwellMindMap.jpg',
            alt: 'Mind map exploring potential features for Indwell',
            caption: 'Exploring and evaluating potential solutions through mind mapping.',
          },
        ],
      },

      {
        label: 'Low-fidelity design',
        title: 'Exploring the structure before the details.',
        paragraphs: [
          'Low-fidelity designs provide an opportunity to explore navigation, information hierarchy, and the placement of important features before focusing on visual styling.',
          'The primary design areas include the homepage, Scripture discovery, memorization activities, and personalized settings.',
        ],
        points: [
          {
            title: 'Navigation',
            text:
              'Organize major application features into clearly identifiable destinations.',
          },
          {
            title: 'Information hierarchy',
            text:
              'Prioritize important actions while minimizing unnecessary information and visual distractions.',
          },
          {
            title: 'Interaction flow',
            text:
              'Consider how users move between finding Scripture, practicing memorization, and managing their preferences.',
          },
        ],

        // Add your actual sketches and low-fidelity prototypes here.
      },

      {
        label: 'High-fidelity design',
        title: 'Creating a calm and cohesive experience.',
        paragraphs: [
          'Indwell uses a restrained visual identity built around dark green, olive, and cream tones. The design aims to create a calm environment that encourages users to focus on Scripture rather than the interface itself.',
          'Consistent typography, recognizable icons, clear navigation, and intentional spacing establish a unified experience across the application.',
        ],
        points: [
          {
            title: 'Visual identity',
            text:
              'A natural color palette and olive branch imagery reinforce the purpose and identity of the application.',
          },
          {
            title: 'Consistency',
            text:
              'Shared interface patterns and styling help users understand how different areas of the application behave.',
          },
          {
            title: 'Responsive design',
            text:
              'Layouts accommodate different screen sizes while maintaining readable content and accessible controls.',
          },
        ],

        // Add your high-fidelity prototypes and screenshots here.
      },

      {
        label: 'Usability heuristics',
        title: 'Applying established usability principles.',
        points: [
          {
            title: 'Visibility of system status',
            text:
              'Feedback messages communicate when preferences have been saved or when an operation requires additional attention.',
          },
          {
            title: 'Match between system and the real world',
            text:
              'Familiar terminology and recognizable time formats make scheduling and Scripture navigation easier to understand.',
          },
          {
            title: 'User control and freedom',
            text:
              'Users can modify reminder preferences, quiet hours, schedules, and Bible translations.',
          },
          {
            title: 'Consistency and standards',
            text:
              'Navigation, icons, typography, and interface controls follow consistent patterns throughout the application.',
          },
          {
            title: 'Error prevention',
            text:
              'Scheduling validation prevents users from creating one-time commitments that have already passed.',
          },
          {
            title: 'Recognition rather than recall',
            text:
              'Saved preferences and clearly labeled navigation reduce the need for users to remember previous selections.',
          },
          {
            title: 'Flexibility and efficiency of use',
            text:
              'Personalized settings accommodate different routines and memorization preferences.',
          },
          {
            title: 'Aesthetic and minimalist design',
            text:
              'A restrained interface keeps attention on Scripture and the current task rather than unnecessary visual elements.',
          },
          {
            title: 'Recognize, diagnose, and recover from errors',
            text:
              'Validation messages explain problems with user input and provide information needed to correct them.',
          },
          {
            title: 'Help and documentation',
            text:
              'Contextual descriptions within settings explain the purpose of features such as quiet hours and reminders.',
          },
        ],
      },

      {
        label: 'User testing',
        title: 'Evaluating the experience.',
        paragraphs: [
          'Usability testing should evaluate whether users can discover Scripture, understand the memorization experience, and configure personalized settings without additional assistance.',
          'Feedback from these activities can identify confusing interactions, unnecessary steps, and opportunities to improve the application.',
        ],
        points: [
          {
            title: 'Scripture discovery',
            text:
              'Evaluate whether users can locate a specific verse and navigate between Bible passages.',
          },
          {
            title: 'Personalization',
            text:
              'Evaluate whether users can configure reminders, quiet hours, and scheduling preferences.',
          },
          {
            title: 'Memorization',
            text:
              'Evaluate whether the available practice techniques are understandable and engaging.',
          },
        ],

        // Replace this testing plan with your actual testing
        // methods, findings, and resulting design changes.
      },

      {
        label: 'Final design and reflection',
        title: 'Designing around the user.',
        paragraphs: [
          'The design of Indwell emphasizes simplicity, personalization, and flexibility. Rather than treating memorization as an isolated activity, the application considers how practice can fit into a user’s existing routine.',
          'The project demonstrates how user-centered design principles can guide both interface decisions and the development of application functionality.',
          'Continued evaluation and user feedback will help identify opportunities to improve the experience as the application develops.',
        ],
      },
    ],
  },

  {
    slug: 'community-economy',
    title: 'Community Economy',
    category: 'Java plugin development',
    description:
      'A lightweight Minecraft server plugin that introduces a community-driven economy through collaborative projects, custom currency, and interactive inventory menus.',
    tags: ['Java', 'Plugin development', 'Event-driven programming'],
    sample: false,

    cover: {
      src: 'images/CommunityEconomyCover.png',
      alt: 'Community economy preview',
    },

    context:
      'CommunityEconomy is a Minecraft Paper server plugin designed for cooperative survival communities. It rewards players for contributing to shared projects rather than relying on traditional economy systems.',

    tools: [
      'Java',
      'Paper API',
      'Gradle',
      'Adventure API',
      'YAML',
      'Persistent Data Container',
      'Git',
    ],

    contributions: {
      label: 'Independent developer',
      text:
        'Designed and implemented the plugin architecture, custom currency system, command handling, inventory interfaces, event listeners, and persistent project management.',
    },

    sections: [
      {
        label: 'Project overview',
        title: 'An economy built around collaboration.',
        paragraphs: [
          'Traditional Minecraft economy systems often reward individual resource collection or repetitive money-making activities. CommunityEconomy takes a different approach by connecting economic rewards to meaningful contributions within a shared world.',
          'Players earn a custom currency called Talents by completing community projects. These projects encourage players to collaborate on infrastructure, farms, buildings, and other improvements that benefit the server.',
        ],
      },

      {
        label: 'Technical architecture',
        title: 'Focused classes with clear responsibilities.',
        paragraphs: [
          'The plugin is written in Java using the Paper API and follows a modular, object-oriented architecture. Responsibilities are separated across focused classes to simplify maintenance and future development.',
        ],
        points: [
          {
            title: 'CommunityEconomy',
            text:
              'Handles plugin initialization, lifecycle management, and command registration.',
          },
          {
            title: 'Commands',
            text:
              'Processes command execution, validates arguments, and provides tab completion.',
          },
          {
            title: 'Listeners',
            text:
              'Handles inventory interactions and other relevant server events.',
          },
          {
            title: 'Project',
            text:
              'Represents community project information and completion state.',
          },
          {
            title: 'ProjectManager',
            text:
              'Manages project operations and persistent YAML storage.',
          },
          {
            title: 'ProjectMenu',
            text:
              'Constructs interactive inventory menus and handles project navigation.',
          },
          {
            title: 'TalentManager',
            text:
              'Manages custom currency creation, identification, and distribution.',
          },
        ],
      },

      {
        label: 'Custom currency',
        title: 'Creating a recognizable in-game currency.',
        paragraphs: [
          'Talents are physical in-game items that players can exchange directly. A custom resource pack provides a unique item model and texture, allowing the currency to maintain its own visual identity.',
          'Rather than relying on an item’s display name, the plugin uses Minecraft’s Persistent Data Container to identify authentic Talents.',
        ],
        points: [
          {
            title: 'Persistent identification',
            text:
              'Custom metadata distinguishes Talents from ordinary gold nuggets and renamed items.',
          },
          {
            title: 'Currency distribution',
            text:
              'Authorized server operators can distribute Talents through commands.',
          },
          {
            title: 'Inventory overflow',
            text:
              'Excess currency is dropped at the player’s location when their inventory cannot hold the full reward.',
          },
        ],
      },

      {
        label: 'Community project system',
        title: 'Managing the complete project lifecycle.',
        paragraphs: [
          'Server operators can create community projects with custom identifiers, names, rewards, and display items. Players can browse these projects, collaborate to complete them, and record their locations within the world.',
          'The project lifecycle separates completion from reward distribution. A completed project receives its reward when its location is recorded, and the plugin tracks whether that reward has already been issued.',
        ],
        points: [
          {
            title: 'Project creation',
            text:
              'Operators define project information through validated commands.',
          },
          {
            title: 'Project completion',
            text:
              'Players confirm completed projects through the inventory interface.',
          },
          {
            title: 'Location recording',
            text:
              'Completed projects store their world and XYZ coordinates for future reference.',
          },
          {
            title: 'Reward management',
            text:
              'Reward status prevents the same project from issuing its currency reward multiple times.',
          },
        ],
      },

      {
        label: 'Interface and interaction design',
        title: 'Working within a familiar environment.',
        paragraphs: [
          'CommunityEconomy uses Minecraft’s existing inventory interface to provide interactive menus. This approach allows players to interact with the plugin through familiar controls without requiring an external application.',
          'Available and completed projects are separated into dedicated menus, with project information and rewards displayed through recognizable item representations.',
        ],
        points: [
          {
            title: 'Recognition rather than recall',
            text:
              'Visual project representations reduce the need to memorize project identifiers and commands.',
          },
          {
            title: 'Consistency and standards',
            text:
              'Inventory-based navigation follows familiar Minecraft interaction patterns.',
          },
          {
            title: 'Error prevention',
            text:
              'Completion confirmation and reward tracking reduce accidental actions and repeated reward claims.',
          },
          {
            title: 'Visibility of system status',
            text:
              'Separate available and completed project menus communicate project progress.',
          },
          {
            title: 'Flexibility and efficiency',
            text:
              'Command tab completion and paginated menus support efficient interaction as the number of projects grows.',
          },
        ],

        // Add screenshots of the main, tasks, and completed menus.
      },

      {
        label: 'Persistent data',
        title: 'Preserving progress across server restarts.',
        paragraphs: [
          'Community project information is stored in a YAML configuration file. Project names, rewards, completion status, recorded locations, and reward distribution status remain available between server sessions.',
          'The plugin automatically loads project data during initialization and saves changes when project information is updated.',
          'YAML provides a lightweight persistence solution appropriate for the intended scale of small cooperative Minecraft servers without introducing an external database dependency.',
        ],
      },

      {
        label: 'Technical challenges',
        title: 'Integrating with an event-driven environment.',
        points: [
          {
            title: 'Event-driven programming',
            text:
              'Responding to inventory interactions and server events while maintaining consistent project state.',
          },
          {
            title: 'State management',
            text:
              'Coordinating project completion, location recording, and reward distribution.',
          },
          {
            title: 'Data persistence',
            text:
              'Preserving project information and reward status across server restarts.',
          },
          {
            title: 'Command validation',
            text:
              'Handling invalid arguments, permission requirements, project identifiers, and player selection.',
          },
          {
            title: 'Custom item identification',
            text:
              'Distinguishing custom currency from ordinary Minecraft items using persistent metadata.',
          },
        ],
      },

      {
        label: 'Final product and reflection',
        title: 'A lightweight solution for cooperative servers.',
        paragraphs: [
          'CommunityEconomy combines custom currency, persistent project management, interactive menus, and command-based administration into a single plugin.',
          'The project strengthened my experience with Java, object-oriented design, event-driven programming, third-party API integration, and persistent application state.',
          'The plugin is intentionally designed around the needs of smaller cooperative communities, prioritizing simplicity and maintainability over complex economy infrastructure.',
        ],
      },
    ],
  },
]