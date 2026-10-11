import { projects } from "./projects";

type CaseStudy = {
  slug: string;
  label: string;
  summary: string;
  stack: string[];
  context: string;
  implementation: { title: string; text: string }[];
  delivered: string;
};

// Add measured outcomes only when they can be verified.
export const caseStudies: CaseStudy[] = [
  {
    slug: "wall-of-art",
    label: "Custom Shopify storefront",
    summary: "A storefront that connects posters, matching frames and availability in one shopping flow.",
    stack: ["Shopify", "Liquid", "JavaScript", "Web Components"],
    context: "Wall of Art sells posters and frames. The storefront needed to connect the two, check availability and keep related items together in the cart, while following the supplied design.",
    implementation: [
      { title: "Matching products", text: "Built poster and frame matching with availability checks, so the selection flow accounts for the products that can actually be purchased together." },
      { title: "A connected cart", text: "Implemented grouped cart items with the Shopify Ajax Cart API, keeping the relationship between a poster and its frame visible in the shopping flow." },
      { title: "Picking up where you left off", text: "Added saved favourites and recently viewed products. Built most of the storefront as lead developer, working with the COI Agency team and supplied designs." },
    ],
    delivered: "A custom storefront with connected product selection, grouped cart items and features that help shoppers return to products they have already discovered.",
  },
  {
    slug: "printworks-platform",
    label: "Photo-printing platform",
    summary: "From an in-browser photo editor to queued image processing and a handoff to the print lab.",
    stack: ["Node.js", "BullMQ", "Sharp", "Fabric.js"],
    context: "The PRINTWORKS photo-printing flow connects what a customer creates in the browser with the files and order information needed by the print lab.",
    implementation: [
      { title: "Upload and edit", text: "Built the browser-based photo upload and editing flow with Uppy and Fabric.js, including HEIC conversion and cropping for the required print formats." },
      { title: "Process the order", text: "Handled order webhooks with signature checks. BullMQ and Redis workers process background jobs with retries, while Sharp prepares images for the required print ratios." },
      { title: "Prepare production files", text: "Automated the handoff to the print lab through Google Drive and daily production CSVs, connecting storefront orders to the production workflow." },
    ],
    delivered: "A connected flow from photo upload and editing through order processing to production files for the print lab. Built as lead developer at COI Agency with the team.",
  },
  {
    slug: "ivon",
    label: "Storefront, apps & integrations",
    summary: "A B2C/B2B storefront backed by custom backorder logic, ERP data and an admin extension.",
    stack: ["TypeScript", "React Router", "PostgreSQL", "Shopify"],
    context: "IVON combines a custom Shopify storefront with backorder and business-customer flows. The work extends from the customer-facing theme to apps and invoice data in the merchant admin.",
    implementation: [
      { title: "Build the storefront", text: "Built the theme from scratch with backorder dates, B2C/B2B flows and Shopify Customer Accounts." },
      { title: "Keep systems in sync", text: "Built a backorder app with idempotent webhooks, a database outbox and reconciliation. A Preact admin extension brings ERP invoice data into the Shopify admin." },
      { title: "Make releases repeatable", text: "Used an isolated QA environment and Docker/Coolify releases, supported by more than 200 automated tests across the project." },
    ],
    delivered: "A storefront and supporting apps that connect customer orders, backorder information and ERP invoice data, with a dedicated QA and release setup.",
  },
  {
    slug: "lunara",
    label: "Independent product",
    summary: "An AI web app designed, built and run solo, with streaming chat, payments and personalised content.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI API"],
    context: "Lunara is my own web app for astrology, tarot and personal reflection. I own the product from its interface and application code to payments and deployment.",
    implementation: [
      { title: "Build the product", text: "Designed and built the application in Next.js, React and TypeScript, with personalised AI content and a streaming chat with memory on the OpenAI API." },
      { title: "Connect purchases to access", text: "Integrated subscriptions and one-off purchases through Gumroad webhooks, including guest checkout with tokenised email delivery." },
      { title: "Support accounts and languages", text: "Used Supabase with row-level security for application data and built the localisation structure for nine locales. English and Serbian are the polished locales." },
    ],
    delivered: "A live, independently built product with personalised content, streaming chat, accounts and paid access, deployed on Vercel.",
  },
];

export function getCaseStudy(slug: string) {
  const story = caseStudies.find((item) => item.slug === slug);
  const project = projects.find((item) => item.slug === slug && !item.hidden);
  return story && project ? { story, project } : undefined;
}

export const featuredProjects = caseStudies.flatMap(({ slug }) => {
  const entry = getCaseStudy(slug);
  return entry ? [entry] : [];
});
