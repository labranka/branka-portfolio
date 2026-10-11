import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle eyebrow="About" title="A little about me" />
      <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-start">
        <div className="space-y-4 text-[17px] leading-relaxed text-body">
          <p>
            I got hooked on programming as a student of Information Systems and Technologies at the Faculty of
            Organizational Sciences in Belgrade. I was building Shopify stores as a freelancer while still studying,
            joined <a href="https://coiagency.com" target="_blank" rel="noopener noreferrer" className="font-medium text-ink underline decoration-plum/60 underline-offset-4 hover:decoration-plum">COI Agency</a> in 2022 and became development lead in 2023.
          </p>
          <p>
            Today I lead a team of up to nine developers: I interview and onboard people, run technical demos with
            clients, take part in management discussions, and still write code every day. I care about performance,
            reliability and about making AI tooling a dependable part of how a team ships.
          </p>
          <p>Based in Zagreb, Croatia. Serbian citizen with a valid Croatian work permit. Open to Zagreb, Belgrade or remote.</p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portrait.jpg" alt="Branka Lakićević" className="w-full border border-rule object-cover" />
      </div>
    </section>
  );
}
