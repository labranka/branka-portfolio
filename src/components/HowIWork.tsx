import { SectionTitle } from "./SectionTitle";

const pillars = [
  {
    title: "Storefronts",
    text: "Custom Shopify themes from scratch to supplied designs. Vanilla JavaScript and Web Components where a framework would be overhead, performance budgets, accessibility, Lighthouse in CI.",
    tone: "bg-hl-sky",
  },
  {
    title: "Apps and integrations",
    text: "The code behind the store: backorder and B2B flows, admin extensions, webhooks, queues, ERP and email integrations. Idempotent by default, with tests that run in CI.",
    tone: "bg-hl-sage",
  },
  {
    title: "AI-assisted engineering",
    text: "Coding standards for agents, an automated AI code review on every pull request, Claude Code and Codex for implementation and review. A dependable part of the workflow, not a novelty.",
    tone: "bg-hl-sun",
  },
];

export function HowIWork() {
  return (
    <section id="how" className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle eyebrow="How I work" title="Three things I know about" />
      <div className="grid gap-5 md:grid-cols-3">
        {pillars.map((p) => (
          <div key={p.title} className="rounded-2xl border border-rule bg-card p-6">
            <span className={`hl ${p.tone} font-display text-2xl`}>{p.title}</span>
            <p className="mt-4 text-[15px] leading-relaxed text-body">{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
