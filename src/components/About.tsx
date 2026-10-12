import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-start md:gap-16">
        <div>
          <SectionTitle eyebrow="A little about me" title="From idea to working product." />
          <div className="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-body sm:text-[17px]">
            <p>I build web applications, e-commerce platforms and integrations across the stack. At <a href="https://coiagency.com" target="_blank" rel="noopener noreferrer" className="text-link">COI Agency</a>, I lead a team of up to nine developers while staying hands-on with the code, architecture and delivery.</p>
            <p>I started building Shopify stores as a freelancer while studying Information Systems and Technologies at the Faculty of Organizational Sciences in Belgrade. I joined COI in 2022 and became development lead in 2023.</p>
            <p>Over the past year, advanced AI-assisted development has become a core part of my work. I have introduced AI coding workflows, shared standards and automated code review across the team, and continue to evaluate new tools and approaches.</p>
            <p>Alongside agency work, I design, build and run my own products, from the interface and backend to payments and deployment. Leading a team also means interviewing and onboarding developers, sharing knowledge and working through technical decisions with clients.</p>
            <p className="font-mono text-xs text-plum">Based in Zagreb. Open to Zagreb, Belgrade or remote.</p>
          </div>
        </div>
        <Image src="/portrait.jpg" alt="Branka Lakićević" width={933} height={1317} sizes="(max-width: 767px) 240px, 280px" className="aspect-[4/5] w-60 max-w-full border border-rule object-cover object-[center_35%] md:w-full" />
      </div>
    </section>
  );
}
