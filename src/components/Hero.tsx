import { email } from "@/content/site";

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-12 pt-14 text-center sm:pb-16 sm:pt-20 lg:pt-24">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-plum">Hi, I&apos;m Branka Lakićević</p>
      <h1 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.6rem,5.7vw,4.6rem)] leading-[1.1] tracking-[-0.025em] text-ink">
        Senior frontend engineer.<br />
        <span className="hl mark-sage">Development lead.</span>
      </h1>
      <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-body sm:text-lg">
        I build storefronts, custom apps and my own products.
        Currently leading development at{" "}
        <a href="https://coiagency.com" target="_blank" rel="noopener noreferrer" className="text-link">COI Agency</a>, a Shopify Plus agency in Zagreb.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <a href="#work" className="button-primary">Explore my work <span aria-hidden="true">↓</span></a>
        <a href={"mailto:" + email} className="button-secondary">Get in touch <span aria-hidden="true">↗</span></a>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-1 font-mono text-xs text-muted">
        <a href="https://github.com/labranka" target="_blank" rel="noopener noreferrer" className="text-link py-2">GitHub <span aria-hidden="true">↗</span></a>
        <a href="https://www.linkedin.com/in/brankalakicevic" target="_blank" rel="noopener noreferrer" className="text-link py-2">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href="/Branka-Lakicevic-CV.pdf" target="_blank" rel="noopener noreferrer" className="text-link py-2">View CV <span aria-hidden="true">↗</span></a>
      </div>
      <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-1 border-y border-rule sm:mt-14 sm:grid-cols-3">
        {[
          ["Since 2023", "Development lead at COI"],
          ["Up to 9", "Developers on the team"],
          ["20+ a year", "Stores & apps shipped by our team"],
        ].map(([value, label]) => (
          <div key={label} className="hero-fact flex items-center justify-between gap-4 px-3 py-4 text-left sm:flex-col sm:gap-1 sm:py-5 sm:text-center">
            <dt className="order-2 text-xs leading-relaxed text-muted">{label}</dt>
            <dd className="order-1 shrink-0 font-display text-2xl text-ink sm:text-3xl">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
