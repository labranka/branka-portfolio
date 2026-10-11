import Image from "next/image";
import { SectionTitle } from "./SectionTitle";

export function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-start md:gap-16">
        <div>
          <SectionTitle eyebrow="A little about me" title="A developer who also leads." />
          <div className="mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-body sm:text-[17px]">
            <p>I lead a team of up to nine developers at <a href="https://coiagency.com" target="_blank" rel="noopener noreferrer" className="text-link">COI Agency</a> and still write code every day. My work includes interviewing and onboarding developers, technical demos with clients and management discussions.</p>
            <p>I started building Shopify stores as a freelancer while studying Information Systems and Technologies at the Faculty of Organizational Sciences in Belgrade. I joined COI in 2022 and became development lead in 2023.</p>
            <p>Outside agency work, I build and run my own products. That gives me room to work on everything from the first interface to payments, accounts and deployment.</p>
            <p className="font-mono text-xs text-plum">Based in Zagreb. Open to Zagreb, Belgrade or remote.</p>
          </div>
        </div>
        <Image src="/portrait.jpg" alt="Branka Lakićević" width={933} height={1317} sizes="(max-width: 767px) 240px, 280px" className="aspect-[4/5] w-60 max-w-full border border-rule object-cover object-[center_35%] md:w-full" />
      </div>
    </section>
  );
}
