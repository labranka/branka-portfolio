import type { Project } from "@/content/projects";
import { Cover } from "./Cover";
import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = project.url ?? project.repo;
  const media = project.image ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]" loading="lazy" />
  ) : project.art ? (
    <Cover art={project.art} />
  ) : (
    <div className="grid h-full w-full place-items-center font-display text-5xl text-plum/70">{project.title.slice(0, 2)}</div>
  );

  return (
    <Reveal delay={Math.min(index * 60, 300)}>
      <Tilt className="h-full">
        <article className="group flex h-full flex-col overflow-hidden border border-rule bg-card">
          <div className="relative aspect-[16/10] overflow-hidden border-b border-rule bg-hl-plum">
            {href ? (
              <a href={href} target="_blank" rel="noopener noreferrer" data-cursor="View" aria-label={`Open ${project.title}`} className="block h-full w-full">
                {media}
              </a>
            ) : (
              media
            )}
          </div>
          <div className="flex flex-1 flex-col gap-2 p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display text-2xl text-ink">{project.title}</h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted">{project.year}</span>
            </div>
            <p className="text-sm text-muted">{project.kind}</p>
            <p className="font-mono text-[12px] text-plum">{project.role}</p>
            <p className="text-[15px] leading-relaxed text-body">{project.summary}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-3">
              {project.stack.map((s) => (
                <li key={s} className="border border-rule px-2 py-0.5 font-mono text-[11px] text-muted">
                  {s}
                </li>
              ))}
            </ul>
            {(project.url || project.repo) && (
              <p className="pt-2 font-mono text-[12px]">
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-plum underline-offset-4 hover:underline">
                    Live site
                  </a>
                )}
                {project.url && project.repo && <span className="text-muted"> · </span>}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="text-plum underline-offset-4 hover:underline">
                    Source
                  </a>
                )}
              </p>
            )}
            {project.credit && (
              <p className="text-[12px] text-muted">
                {project.credit.split("COI Agency").map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <a href="https://coiagency.com" target="_blank" rel="noopener noreferrer" className="text-plum underline-offset-4 hover:underline">
                        COI Agency
                      </a>
                    )}
                  </span>
                ))}
              </p>
            )}
          </div>
        </article>
      </Tilt>
    </Reveal>
  );
}
