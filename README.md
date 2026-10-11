# branka-portfolio

Personal portfolio of Branka Lakićević. Next.js 16 (App Router), React 19 and Tailwind CSS 4.

- `npm run dev` then open http://localhost:3000
- Featured work: `src/content/case-studies.ts` controls the four homepage cards, their order and case study content. Each case study has a small static route in `src/app/work/<slug>/page.tsx`, sharing `src/components/CaseStudyPage.tsx`. Add a route when adding a featured project. Only include verifiable project details and outcomes.
- Project data: `src/content/projects.ts` (`hidden: true` hides a project). Other projects appear in the expandable archive; additional storefronts are in `src/content/more.ts`.
- Profile copy: `src/components/Hero.tsx`, `src/components/HowIWork.tsx`, `src/components/About.tsx` and `src/components/Contact.tsx`.
- Images: `public/work/<slug>.jpg` (1600x1000, 16:10); portrait in `public/portrait.jpg`; CV in `public/Branka-Lakicevic-CV.pdf`. Project images use Next.js image optimisation.
- Site URL, title and email: `src/content/site.ts`. Open Graph artwork: `src/app/opengraph-image.tsx`. The sitemap follows the visible featured projects.
- Validation: `npm run lint`, `npx tsc --noEmit`, `npm run build`. Check small screens, dark mode and keyboard navigation when changing the layout.
- Deploy: push to GitHub and import in Vercel (zero config)
