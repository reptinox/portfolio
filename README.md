# Developer UX portfolio

A static React and TypeScript portfolio for a software developer who practices user-centered design. It includes a homepage and two editable sample case studies. Vite builds the site and its fonts, images, and scripts into `dist/`.

## Run locally

Use Node.js 22 LTS (22.13 or later) or Node.js 24 LTS. In the project folder, run these commands and open the local URL printed by Vite.

```sh
npm ci
npm run dev
```

To check your changes and preview the production build, run the following commands. The preview server serves the contents of `dist/`.

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Personal details, skills, and résumé

Edit [src/content/profile.ts](src/content/profile.ts) to set your display name, role, two-line headline, introduction, hero image, and About paragraphs. The `skills` array groups related abilities. Each `experience` record has a title, context, and description. Coursework and individual projects can illustrate experience alongside employment. Set `sampleProfile: false` once the profile, skills, and experience describe you.

Add your own values to the profile's `links` object. Supply an email address for `email`. For a downloadable résumé, put the PDF in `public/` and set the file path relative to that folder. Omitted and blank links stay hidden.

```ts
links: {
  github: 'https://github.com/YOUR-USERNAME',
  linkedin: 'https://www.linkedin.com/in/YOUR-HANDLE/',
  email: 'you@example.com',
  resume: 'resume.pdf',
},
```

The page title updates from profile and project data. Review the initial browser title, description, and theme color in [index.html](index.html) when personalizing site metadata.

## Projects and screenshots

Edit [src/content/projects.ts](src/content/projects.ts). Each record supplies a homepage preview and a complete case study. Reorder records to change their order on the homepage and in next-project navigation. To add a project, copy a record, give it a unique lowercase URL-friendly `slug`, and replace its content. Removing the record removes its preview and page. A published slug is part of a shareable URL such as `#/work/waypoint`.

| Field | What it controls |
| --- | --- |
| `title`, `category`, `description` | Project name, type of work, and brief for both the preview and case study |
| `tags`, `tools` | Areas of focus and tools or technologies used |
| `context`, `contributions` | Project background and your individual responsibilities |
| `sections` | Ordered case-study chapters with a label, heading, and optional paragraphs, decision points, or images |
| `cover` | Custom image for the homepage preview and case-study header |
| `links` | Optional `repository` and `demo` links |
| `sample` | Visible example marker. Remove it or set it to `false` when the entry describes your own work. |

Remove whole sections or add a chapter for a method your project actually used. The section layout adapts to prose, decision lists, and captioned galleries. The full field definitions are in [src/types/portfolio.ts](src/types/portfolio.ts).

Place screenshots in `public/images/`. Use paths such as `images/course-search.webp` in a project record. Files with different names work when the matching paths are updated. Use alt text to describe what the image conveys and a caption to explain the design decision. Add multiple entries to a section's `images` array for a gallery.

```ts
// Example fields within one project record.
cover: {
  src: 'images/course-overview.webp',
  alt: 'Search and arrival screens side by side',
},
sections: [{
  label: 'Prototype',
  title: 'Choosing the arrival entrance',
  images: [
    {
      src: 'images/course-search.webp',
      alt: 'A room search with the campus library selected',
      caption: 'The result keeps the room code beside the building name.',
    },
    {
      src: 'images/course-arrival.webp',
      alt: 'A campus library route card naming the east entrance',
      caption: 'The arrival card repeats the entrance named in the search result.',
    },
  ],
}],
```

The bundled AI-generated hero artwork is [public/images/studio-computer.webp](public/images/studio-computer.webp). Replace it or point `profile.heroImage` to another image. The sample projects have vector covers in [ProjectArtwork.tsx](src/components/ProjectArtwork.tsx) and original wireframe diagrams in [public/images](public/images). A project's `cover` field overrides its built-in artwork. Add your own screenshots to show the work you performed.

<details>
<summary>Original hero illustration prompt</summary>

The built-in image generator produced the illustration with this prompt. The site serves a WebP copy locally.

> Use case: stylized-concept. Create one landscape 3:2 standalone editorial collage illustration for a software developer's design portfolio. Art direction: sophisticated analogue Swiss design magazine cover cutout, black ink halftone, photocopier texture, one vivid electric cobalt blue ink. On a pure clean white empty background an iconic retro 1980s compact Macintosh-style personal computer (no brand logo), detailed grayscale photographic cutout with deep black shadows and tiny halftone dots, seen at a slightly elevated 3/4 angle, its front screen faces LEFT toward viewer, side visible on RIGHT. Detached vintage keyboard in perspective in front and to the left, coiled wire and mouse to right. The dark CRT screen displays a large white pixelated happy smiley face made from crisp square pixels. Behind the physical computer a single flat vivid saturated cobalt circle offset slightly upper right, behind its left edge a small piece of fine pale blue graph grid fading irregularly at edges; outside the computer in upper left a single tiny black four-point sparkle, lower right one small cobalt outlined asterisk. Arrange as a striking isolated still life, computer hero large and legible, analogue physicality. Crop absolutely nothing, allow slim pure white margin at edges. No text, captions, branding or extra elements. Design asset, no webpage, no border, realistic high fidelity computer and keyboard details rather than drawing. Color inks strictly blue #304bff, black, white. Background perfectly white.

</details>

## Visual theme and code organization

Change colors, fonts, content width, and page gutters in [src/styles/tokens.css](src/styles/tokens.css). For a new bundled font, update its import in [src/main.tsx](src/main.tsx) and its family in the tokens. Check body text, links, and keyboard focus against their backgrounds when changing colors.

| Location | Purpose |
| --- | --- |
| `src/content/` and `src/types/` | Editable records and their TypeScript definitions |
| `src/pages/` | Homepage sections and reusable case-study layout |
| `src/components/` | Navigation, footer, project previews, and artwork |
| `src/styles/` | Theme tokens, base styles, and styles for individual views |
| `src/App.tsx` and `src/lib/urls.ts` | Hash routing, section navigation, and deployment-relative asset URLs |
| `public/` | Static images, favicon, résumé, and other downloadable files |
| `.github/workflows/deploy.yml` | Automated GitHub Pages build and deployment |

## Prepare the course submission

- **About and skills.** Explain who you are, the roles you are pursuing, and which experience supports your skills.
- **Selected work.** Include two to four projects, including your UX course project. Waypoint and Index are illustrative examples. Replace their scenarios, tools, visuals, and responsibilities with your own.
- **Process and evidence.** For each project, describe the problem, discovery methods, prototype decisions, heuristics, and final solution. Replace sample testing plans with the tasks you actually ran, what you observed, and what changed. If an activity is still planned, label it accordingly.
- **Creativity and usability.** Use artifacts that communicate your own decisions. Check navigation, case studies, focus visibility, image descriptions, contact links, and narrow-screen layouts after replacing the sample material.

## Deploy to GitHub Pages

1. Create a public GitHub repository for free Pages hosting. Use `main` as the deployment branch and include the source, `package-lock.json`, and [deployment workflow](.github/workflows/deploy.yml).
2. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **GitHub Actions** as the source. [GitHub Pages publishing-source guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
3. Push your changes to `main`. The workflow builds and publishes the generated `dist/` directory. Check its progress in the repository's **Actions** tab.
4. Open the deployed URL shown in **Settings → Pages**. On a project site it usually looks like `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`. Open a case study, refresh it, and check the artwork and any résumé download. Submit the verified homepage URL on Canvas.

Vite uses a relative base (`./`), and case-study paths follow the URL's `#`. The same production files can serve from a repository subpath or a domain root. Subsequent pushes to `main` update the published site.
