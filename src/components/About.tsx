import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle eyebrow="About" title="A little about me" />
      <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-start">
        <div className="space-y-4 text-[17px] leading-relaxed text-body">
          <p>
            Four years at COI Agency, from frontend developer to development lead. I interview and onboard
            developers, run technical demos with clients and take part in management discussions, and I still
            write code every day.
          </p>
          <p>
            I care about performance, reliability and about making AI tooling a dependable part of how a team
            ships. Based in Zagreb, Croatia; Serbian citizen with a valid Croatian work permit; open to Zagreb,
            Belgrade or remote.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/portrait.jpg" alt="Branka Lakićević" className="w-full border border-rule object-cover" />
      </div>
    </section>
  );
}
