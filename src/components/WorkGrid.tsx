import { projects } from "@/content/projects";
import { ProjectCard } from "./ProjectCard";
import { SectionTitle } from "./SectionTitle";

export function WorkGrid() {
  const visible = projects.filter((p) => !p.hidden);
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle eyebrow="Work" title="Things I have built" />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
