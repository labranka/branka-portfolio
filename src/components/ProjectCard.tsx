"use client";

import { motion } from "framer-motion";
import type { Project } from "@/content/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const initials = project.title
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.3) }}
      whileHover={{ y: -4 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-rule bg-card"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-rule bg-hl-plum">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="grid h-full w-full place-items-center font-display text-5xl text-plum/70">{initials}</div>
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
            <li key={s} className="rounded-md border border-rule px-2 py-0.5 font-mono text-[11px] text-muted">
              {s}
            </li>
          ))}
        </ul>
        {(project.url || project.repo) && (
          <p className="pt-2 font-mono text-[12px]">
            {project.url && (
              <a href={project.url} className="text-plum underline-offset-4 hover:underline">
                Live site
              </a>
            )}
            {project.url && project.repo && <span className="text-muted"> · </span>}
            {project.repo && (
              <a href={project.repo} className="text-plum underline-offset-4 hover:underline">
                Source
              </a>
            )}
          </p>
        )}
        {project.credit && <p className="text-[12px] text-muted">{project.credit}</p>}
      </div>
    </motion.article>
  );
}
