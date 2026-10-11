import type { Art } from "@/components/Cover";

export type Project = {
  slug: string;
  title: string;
  kind: string;
  role: string;
  year: string;
  summary: string;
  stack: string[];
  url?: string;
  repo?: string;
  image?: string;
  art?: Art;
  credit?: string;
  hidden?: boolean;
};

// Edit this file to add, reorder or hide projects (hidden: true). Images live in public/work/<slug>.jpg (1600x1000).
// Commit counts in comments are Branka's commits on the default branch per GitHub (checked 2026-10-11); a lower bound.
const coi = "Built at COI Agency with the team.";

export const projects: Project[] = [
  {
    // 1,534 commits (31% of the repo)
    slug: "wall-of-art",
    title: "Wall of Art",
    kind: "Shopify storefront",
    role: "Lead developer; built most of the storefront",
    year: "2024 to 2025",
    summary:
      "Poster and frame matching with availability checks and grouped cart items, saved favourites and recently viewed products, built to supplied designs.",
    stack: ["Shopify", "Liquid", "JavaScript", "Web Components", "Ajax Cart API"],
    url: "https://wallofart.se",
    image: "/work/wall-of-art.jpg",
    credit: coi,
  },
  {
    // 791 commits on the theme repo, plus the photo-printer service
    slug: "printworks",
    title: "PRINTWORKS",
    kind: "Shopify storefront",
    role: "Lead developer; theme built from scratch",
    year: "2024 to 2025",
    summary:
      "Complete Shopify theme built from scratch to supplied designs for a photo-printing brand: product configurators that feed the printing platform, performance-first vanilla JavaScript, Lighthouse CI.",
    stack: ["Shopify", "Liquid", "JavaScript", "Web Components", "Lighthouse CI"],
    url: "https://printworksmarket.com",
    image: "/work/printworks.jpg",
    credit: `${coi} Design supplied by the client.`,
  },
  {
    slug: "printworks-platform",
    title: "PRINTWORKS photo-printing platform",
    kind: "Apps and backend behind the store",
    role: "Lead developer",
    year: "2024 to 2025",
    summary:
      "In-browser photo upload and editing (Fabric.js, Uppy, HEIC conversion), order webhooks with signature checks, BullMQ/Redis workers with retries, Sharp image pipeline for print ratios, automated handoff to the print lab via Google Drive and daily production CSVs.",
    stack: ["Node.js", "Express", "BullMQ", "Redis", "Sharp", "Fabric.js", "Uppy", "Admin GraphQL", "Google Drive API"],
    art: "printing",
    credit: coi,
  },
  {
    // 606 commits
    slug: "aarke",
    title: "Aarke",
    kind: "Shopify Plus storefront",
    role: "Developer on the storefront team",
    year: "2023",
    summary: "Multi-market storefront for a premium Swedish kitchen brand, built to supplied designs. TODO: add one or two specifics.",
    stack: ["Shopify Plus", "Liquid", "JavaScript", "Web Components"],
    url: "https://aarke.com",
    image: "/work/aarke.jpg",
    credit: coi,
  },
  {
    // 668 commits
    slug: "cdlp",
    title: "CDLP",
    kind: "Shopify Plus storefront",
    role: "Lead developer",
    year: "2023 to 2024",
    summary:
      "Custom theme to supplied designs: subscription purchases, dynamic collection filtering with the Section Rendering API, keyboard-accessible filters with browser history support.",
    stack: ["Shopify Plus", "Liquid", "JavaScript", "Web Components", "Section Rendering API"],
    url: "https://cdlp.com",
    image: "/work/cdlp.jpg",
    credit: coi,
  },
  {
    // 676 commits (35% of the repo)
    slug: "bast",
    title: "Bast Sauna",
    kind: "Shopify storefront",
    role: "Lead developer",
    year: "2025 to 2026",
    summary: "Custom Shopify storefront built to supplied designs. TODO: add one or two specifics.",
    stack: ["Shopify", "Liquid", "JavaScript", "Web Components"],
    url: "https://bastsauna.com",
    image: "/work/bast.jpg",
    credit: coi,
  },
  {
    slug: "ivon",
    title: "IVON",
    kind: "Shopify storefront, backorder app and admin extension",
    role: "Built the theme from scratch; own the apps",
    year: "2024 to 2026",
    summary:
      "B2C/B2B storefront with backorder dates and Shopify Customer Accounts; backorder app with idempotent webhooks, a database outbox and reconciliation; a Preact admin extension for ERP invoice data; isolated QA environment and Docker/Coolify releases with 200+ automated tests.",
    stack: ["Liquid", "TypeScript", "React Router 7", "Preact", "Prisma", "PostgreSQL", "Docker", "Klaviyo"],
    url: "https://ivon.se",
    image: "/work/ivon.jpg",
    credit: coi,
  },
  {
    slug: "vibe-search",
    title: "VIBE Search",
    kind: "AI product search app for Shopify · in progress",
    role: "Owned the full frontend; accountable for quality and delivery",
    year: "2025 to present",
    summary:
      "Merchant admin for search settings, merchandising rules, analytics and A/B tests, plus the storefront search widget as a Theme App Extension. Delegated tasks and integrated the backend developer's API.",
    stack: ["React", "TypeScript", "Remix", "Shopify Polaris", "App Bridge", "Theme App Extension", "Vitest", "Playwright"],
    art: "search",
    credit: `${coi} In progress, not yet published.`,
  },
  {
    // project-set-up-template: 60 of 75 commits
    slug: "coi-theme-starter",
    title: "COI theme starter",
    kind: "Agency starter theme and architecture",
    role: "Authored most of the current template",
    year: "2026",
    summary:
      "The skeleton every new store starts from: Shopify Online Store 2.0, ES modules with an importmap, Custom Elements, per-section script loading, standardised drawer and slider patterns, no bundler. Paired with coding rules that the AI review pipeline enforces.",
    stack: ["Shopify", "Liquid", "ES modules", "Custom Elements", "ESLint", "Prettier"],
    art: "starter",
    credit: "Internal tooling at COI Agency.",
  },
  {
    slug: "ai-review-pipeline",
    title: "AI code review pipeline",
    kind: "Team tooling",
    role: "Introduced and maintain across the team",
    year: "2026",
    summary:
      "Every pull request gets static checks and a Claude-based review on GitHub Actions; findings are validated against the source before they are posted, so hallucinated comments never reach the PR. Shared coding standards for agents, plus Claude Code and Codex for implementation and review.",
    stack: ["GitHub Actions", "Anthropic API", "Node.js", "Cursor rules", "Claude Code", "Codex"],
    art: "pipeline",
    credit: "Internal tooling at COI Agency.",
  },
  {
    slug: "lunara",
    title: "Lunara",
    kind: "AI web app, built solo",
    role: "Designed, built and run end to end",
    year: "2026",
    summary:
      "Personalised AI content and a streaming chat with memory on the OpenAI API, subscriptions and one-off purchases via Gumroad webhooks, guest checkout with tokenised email delivery, Supabase with row-level security, i18n in 9 locales.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "OpenAI API", "Gumroad", "Vercel"],
    url: "https://lunaraguide.com/?lang=en",
    repo: "https://github.com/labranka/lunara",
    image: "/work/lunara.jpg",
  },
];
