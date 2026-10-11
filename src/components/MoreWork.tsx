import { caseStudies } from "@/content/case-studies";
import { moreWork } from "@/content/more";
import { projects } from "@/content/projects";
import { ProjectCredit } from "./ProjectCredit";
import { SectionTitle } from "./SectionTitle";

const otherProjects = projects.filter((project) => !project.hidden && !caseStudies.some((study) => study.slug === project.slug));

export function MoreWork() {
  return (
    <section id="more" className="section-shell">
      <SectionTitle eyebrow="The archive" title="More work, over the years." />
      <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
        More storefronts, apps and tools built at <a href="https://coiagency.com" target="_blank" rel="noopener noreferrer" className="text-link">COI Agency</a> with the team. Expand a project for my role and the technical details.
      </p>
      <div className="mt-8 border-t border-rule">
        {otherProjects.map((project) => (
          <details key={project.slug} className="archive-project group border-b border-rule">
            <summary className="flex cursor-pointer items-center gap-4 py-5">
              <span className="min-w-0 flex-1">
                <span className="block break-words font-display text-xl text-ink sm:text-2xl">{project.title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-muted">{project.kind}</span>
              </span>
              <span className="hidden shrink-0 font-mono text-[11px] text-muted sm:block">{project.year}</span>
              <span aria-hidden="true" className="archive-marker grid size-8 shrink-0 place-items-center border border-rule font-mono text-lg text-plum" />
            </summary>
            <div className="max-w-3xl pb-6">
              <p className="font-mono text-xs text-plum">{project.role} · {project.year}</p>
              <p className="mt-3 text-[15px] leading-relaxed">{project.summary}</p>
              <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-muted">
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-link mt-4 inline-block py-1 text-sm" aria-label={"Visit " + project.title + " (opens in a new tab)"}>Visit site <span aria-hidden="true">↗</span></a>}
              <div className="mt-3"><ProjectCredit credit={project.credit} /></div>
            </div>
          </details>
        ))}
      </div>
      <details className="group mt-8 border border-rule bg-card">
        <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-5">
          <span className="min-w-0 font-display text-xl text-ink">Another {moreWork.length} storefronts <span className="mt-1 block font-sans text-sm text-muted">Contributions ranging from individual features to most of the theme.</span></span>
          <span aria-hidden="true" className="archive-marker grid size-8 shrink-0 place-items-center font-mono text-lg text-plum" />
        </summary>
        <ul className="grid grid-cols-1 gap-x-8 px-5 pb-5 sm:grid-cols-2 lg:grid-cols-3">
          {moreWork.map((project) => (
            <li key={project.slug} className="min-w-0 border-t border-rule">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center gap-3 py-3 text-sm hover:text-plum">
                <span className="min-w-0 flex-1 break-words underline decoration-rule underline-offset-4">{project.title}</span>
                <span className="shrink-0 font-mono text-[10px] text-muted">{project.year}</span>
                <span aria-hidden="true" className="shrink-0">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
