import { SectionTitle } from "./SectionTitle";

const principles = [
  { title: "Choose the right foundations", text: "Custom storefronts in Liquid and Web Components. Applications in React and Next.js. I choose the approach around the product, with performance and accessibility built into the work.", tone: "mark-sky" },
  { title: "Build beyond the interface", text: "I connect storefronts to the systems behind them: custom Shopify apps, ERP data, payments, search and email. Webhooks, queues and background jobs get the same attention as the frontend.", tone: "mark-sage" },
  { title: "Make quality a team habit", text: "I stay hands-on while leading developers, onboarding people and setting shared standards. Tests in CI and AI-assisted reviews support the work, with review findings checked against the source.", tone: "mark-sun" },
];

export function HowIWork() {
  return (
    <section id="how" className="section-shell">
      <SectionTitle eyebrow="My approach" title="Build thoughtfully. Ship together." />
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {principles.map((item, index) => (
          <div key={item.title} className="border-t border-rule pt-6">
            <span className={"hl " + item.tone + " font-mono text-xs"}>0{index + 1}</span>
            <h3 className="mt-5 font-display text-2xl leading-tight text-ink">{item.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-body">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
