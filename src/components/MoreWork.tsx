import { moreWork } from "@/content/more";
import { Reveal } from "./Reveal";
import { SectionTitle } from "./SectionTitle";

export function MoreWork() {
  return (
    <section id="more" className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle eyebrow="More" title="More stores I have worked on" />
      <p className="-mt-4 mb-8 max-w-2xl text-[15px] text-muted">
        All built at <a href="https://coiagency.com" target="_blank" rel="noopener noreferrer" className="text-plum underline-offset-4 hover:underline">COI Agency</a> with the team, to supplied designs. Storefront development on each; the share varies from a few features to most of the theme.
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {moreWork.map((p, i) => (
          <Reveal key={p.slug} delay={Math.min(i * 40, 280)}>
            <a href={p.url} target="_blank" rel="noopener noreferrer" data-cursor="Open" className="group block border border-rule bg-card transition-transform duration-200 hover:-translate-y-1">
              <div className="aspect-[16/10] overflow-hidden border-b border-rule bg-hl-plum">
                {p.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={p.image} alt={`${p.title} storefront`} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                ) : (
                  <div className="grid h-full w-full place-items-center font-display text-3xl text-plum/70">{p.title.slice(0, 2)}</div>
                )}
              </div>
              <div className="flex items-baseline justify-between gap-2 px-3 py-2.5">
                <span className="font-display text-lg text-ink">{p.title}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{p.year}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
