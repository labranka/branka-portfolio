import { featuredProjects } from "@/content/case-studies";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

export function WorkGrid() {
  return (
    <section id="work" className="section-shell">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        <SectionTitle eyebrow="Selected work" title="Web apps, systems & storefronts." />
        <a href="#more" className="text-link mb-1 text-sm">More work <span aria-hidden="true">↓</span></a>
      </div>
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-y-16">
        {featuredProjects.map((entry) => <ProjectCard key={entry.project.slug} {...entry} />)}
      </div>
    </section>
  );
}
