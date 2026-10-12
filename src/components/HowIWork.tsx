import { SectionTitle } from "./SectionTitle";

const principles = [
  { title: "Build the complete application", text: "Interfaces, APIs, databases and background jobs. I connect the pieces into working products, from photo-processing pipelines and ERP integrations to payments, accounts and deployment.", tone: "mark-sky" },
  { title: "Advanced AI-assisted engineering", text: "Over the past year, I have built advanced workflows with Claude Code, Codex and Cursor, from planning and implementation to code review. I use coding agents, shared rules and automated PR reviews, checking the output against the source and verifying changes with tests.", tone: "mark-sage" },
  { title: "Lead the work, stay hands-on", text: "I follow developments in AI tooling, evaluate new tools and techniques, and introduce useful practices across the team. I lead and onboard developers, maintain shared standards and stay hands-on with architecture, implementation and delivery.", tone: "mark-sun" },
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
