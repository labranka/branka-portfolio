import Link from "next/link";
import type { featuredProjects } from "@/content/case-studies";
import { ProjectCredit } from "./ProjectCredit";
import { ProjectMedia } from "./ProjectMedia";

export function ProjectCard({ project, story }: (typeof featuredProjects)[number]) {
  const href = "/work/" + project.slug + "#top";
  return (
    <article className="min-w-0">
      <Link href={href} className="project-image-link block" aria-label={"Read about " + project.title}>
        <ProjectMedia project={project} />
      </Link>
      <div className="pt-5 sm:pt-6">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
          <span>{story.label}</span><span>{project.year}</span>
        </div>
        <h3 className="font-display text-3xl leading-tight text-ink">
          <Link href={href} className="transition-colors hover:text-plum">{project.slug === "printworks-platform" ? "PRINTWORKS" : project.title}</Link>
        </h3>
        <p className="mt-3 max-w-lg text-base leading-relaxed text-body">{story.summary}</p>
        <p className="mt-3 text-sm text-plum">{project.role}</p>
        <ul aria-label="Key technologies" className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted">
          {story.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href={href} className="text-link font-medium" aria-label={project.title + " project details"}>Project details <span aria-hidden="true">→</span></Link>
          {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={"Visit " + project.title + " (opens in a new tab)"}>{project.slug === "printworks-platform" ? "Try the editor" : "Visit site"} <span aria-hidden="true">↗</span></a>}
        </div>
        <div className="mt-4"><ProjectCredit credit={project.credit} /></div>
      </div>
    </article>
  );
}
