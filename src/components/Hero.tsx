export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-10 pt-20 text-center md:pt-28">
      <h1 className="fade-up mx-auto max-w-4xl font-display text-[clamp(2.2rem,6vw,4.4rem)] leading-[1.12] text-ink">
        Hi, I&apos;m Branka, a <span className="hl mark-sage" style={{ animationDelay: "0.3s" }}>senior frontend engineer</span> who
        builds storefronts, <span className="hl mark-sky" style={{ animationDelay: "0.6s" }}>web apps</span> and{" "}
        <span className="hl mark-sun" style={{ animationDelay: "0.9s" }}>AI tooling</span>.
      </h1>

      <svg viewBox="0 0 520 28" className="mx-auto mt-2 h-7 w-[min(520px,80%)] text-plum" fill="none" aria-hidden="true">
        <path
          className="draw"
          d="M8 18 C 120 6, 260 26, 400 12 S 500 10, 512 16"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <p className="fade-up delay-1 mx-auto mt-6 max-w-2xl text-lg text-body">
        Development lead at COI Agency, a Shopify Plus agency in Zagreb, where a team of up to nine of us ships
        20+ custom stores and apps a year. On the side I build my own products with Next.js, React, TypeScript
        and the OpenAI API.
      </p>

      <div className="fade-up delay-2 mt-8 flex flex-wrap justify-center gap-3 font-mono text-[13px]">
        <a href="#work" className="bg-plum px-5 py-2.5 text-paper transition hover:bg-plum-deep">
          See the work
        </a>
        <a href="mailto:brankarbc96@gmail.com" className="border border-rule px-5 py-2.5 text-ink transition hover:border-plum">
          Email me
        </a>
        <a href="https://github.com/labranka" className="border border-rule px-5 py-2.5 text-ink transition hover:border-plum">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/brankalakicevic" className="border border-rule px-5 py-2.5 text-ink transition hover:border-plum">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
