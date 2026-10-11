import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProjectCredit } from "@/components/ProjectCredit";
import { ProjectMedia } from "@/components/ProjectMedia";
import { featuredProjects, getCaseStudy } from "@/content/case-studies";

export function getProjectMetadata(slug: string): Metadata {
  const entry = getCaseStudy(slug);
  if (!entry) notFound();
  const title = entry.project.title;
  const description = entry.story.summary;
  return {
    title, description,
    alternates: { canonical: "/work/" + slug },
    openGraph: { title, description, url: "/work/" + slug, type: "article", images: ["/opengraph-image"] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}

export function CaseStudyPage({ slug }: { slug: string }) {
  const entry = getCaseStudy(slug);
  if (!entry) notFound();
  const { project, story } = entry;
  const nextIndex = (featuredProjects.findIndex((item) => item.project.slug === slug) + 1) % featuredProjects.length;
  const next = featuredProjects[nextIndex];

  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <article className="mx-auto max-w-6xl px-5 pb-8 pt-10 sm:pt-16">
          <Link href="/#work" className="text-link text-sm"><span aria-hidden="true">←</span> Selected work</Link>
          <header className="max-w-4xl pb-9 pt-10 sm:pt-14">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-plum">{story.label}</p>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-[-0.025em] text-ink">{project.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed">{story.summary}</p>
            <dl className="mt-7 flex flex-wrap gap-x-12 gap-y-5 border-t border-rule pt-5 text-sm">
              <div><dt className="mb-1 font-mono text-[11px] uppercase tracking-wider text-muted">My role</dt><dd>{project.role}</dd></div>
              <div><dt className="mb-1 font-mono text-[11px] uppercase tracking-wider text-muted">Timeline</dt><dd>{project.year}</dd></div>
            </dl>
            {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-link mt-6 inline-block py-1 text-sm">{slug === "printworks-platform" ? "Try the photo editor" : "Visit the live site"} <span aria-hidden="true">↗</span></a>}
          </header>
          <ProjectMedia project={project} large />
          {project.art && !project.image && <p className="mt-3 font-mono text-xs text-muted">A simplified view of the platform workflow.</p>}
          <div className="mt-4"><ProjectCredit credit={project.credit} /></div>
          <div className="mt-12 grid gap-10 md:grid-cols-[200px_1fr] md:gap-16">
            <aside>
              <h2 className="font-mono text-xs uppercase tracking-[0.12em] text-plum">Built with</h2>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted md:flex-col">{project.stack.map((item) => <li key={item}>{item}</li>)}</ul>
            </aside>
            <div className="max-w-2xl">
              <section>
                <h2 className="font-display text-3xl text-ink">The context</h2>
                <p className="mt-4 text-base leading-relaxed">{story.context}</p>
              </section>
              <section className="mt-10">
                <h2 className="font-display text-3xl text-ink">What I built</h2>
                <div className="mt-5 space-y-7">
                  {story.implementation.map((item, index) => (
                    <div key={item.title} className="border-t border-rule pt-5">
                      <p className="font-mono text-[11px] text-plum">0{index + 1}</p>
                      <h3 className="mt-2 font-display text-2xl text-ink">{item.title}</h3>
                      <p className="mt-3 text-base leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>
              <section className="mt-10 border-l-2 border-plum pl-5">
                <h2 className="font-display text-3xl text-ink">What it delivers</h2>
                <p className="mt-4 text-base leading-relaxed">{story.delivered}</p>
              </section>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-rule pt-6">
            <Link href="/#work" className="text-link text-sm">All selected work</Link>
            <Link href={"/work/" + next.project.slug + "#top"} className="text-link text-sm">Next: {next.project.slug === "printworks-platform" ? "PRINTWORKS" : next.project.title} <span aria-hidden="true">→</span></Link>
          </div>
        </article>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
