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
  credit?: string;
  hidden?: boolean;
};

// Edit this file to add, reorder or hide projects. Images live in public/work/<slug>.png (1600x1000).
export const projects: Project[] = [
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
    image: "/work/lunara.png",
  },
  {
    slug: "printworks",
    title: "PRINTWORKS",
    kind: "Shopify theme and photo-printing platform",
    role: "Lead developer, theme and apps",
    year: "2024",
    summary:
      "Complete Shopify theme built from scratch to supplied designs, then a photo-printing platform: in-browser photo editor, order webhooks, BullMQ/Redis background processing, Sharp image pipeline and automated print-lab handoff.",
    stack: ["Shopify", "Liquid", "Web Components", "Fabric.js", "Node.js", "BullMQ", "Redis", "Sharp"],
    url: "https://printworksmarket.com",
    credit: "Built at COI Agency with the team; design supplied by the client.",
  },
  {
    slug: "cdlp",
    title: "CDLP",
    kind: "Shopify Plus storefront",
    role: "Lead developer",
    year: "2023",
    summary:
      "Custom theme to supplied designs: subscription purchases, dynamic collection filtering with the Section Rendering API, keyboard-accessible filters with browser history support.",
    stack: ["Shopify Plus", "Liquid", "JavaScript", "Web Components", "Section Rendering API"],
    url: "https://cdlp.com",
    credit: "Built at COI Agency with the team.",
  },
  {
    slug: "wall-of-art",
    title: "Wall of Art",
    kind: "Shopify storefront",
    role: "Lead developer",
    year: "2024",
    summary:
      "Poster and frame matching with availability checks and grouped cart items, saved favourites and recently viewed products.",
    stack: ["Shopify", "Liquid", "JavaScript", "Web Components", "Ajax Cart API"],
    url: "https://wallofart.se",
    credit: "Built at COI Agency with the team.",
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
    credit: "Built at COI Agency with the team.",
  },
  {
    slug: "vibe-search",
    title: "VIBE Search",
    kind: "AI product search app for Shopify",
    role: "Owned the full frontend; accountable for quality and delivery",
    year: "2025",
    summary:
      "Merchant admin for search settings, merchandising rules, analytics and A/B tests, plus the storefront search widget as a Theme App Extension. Delegated tasks and integrated the backend developer's API.",
    stack: ["React", "TypeScript", "Remix", "Shopify Polaris", "App Bridge", "Theme App Extension", "Vitest", "Playwright"],
    credit: "Built at COI Agency with the team. In development.",
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
    credit: "Internal tooling at COI Agency.",
  },
];
