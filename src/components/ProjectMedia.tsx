import Image from "next/image";
import type { Project } from "@/content/projects";
import { Cover } from "./Cover";

export function ProjectMedia({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <div className="aspect-[16/10] overflow-hidden border border-rule bg-hl-plum">
      {project.image ? (
        <Image src={project.image} alt={`${project.title} website`} width={1600} height={1000}
          sizes={large ? "(max-width: 1152px) calc(100vw - 40px), 1112px" : "(max-width: 767px) calc(100vw - 40px), (max-width: 1152px) calc((100vw - 72px) / 2), 540px"}
          className="h-full w-full object-cover object-top" />
      ) : project.art ? <Cover art={project.art} /> : (
        <div className="grid h-full place-items-center font-display text-4xl text-plum">{project.title}</div>
      )}
    </div>
  );
}
