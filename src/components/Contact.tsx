export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <div className="border border-rule bg-hl-plum px-6 py-10 sm:px-10 sm:py-12">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-plum">Get in touch</p>
        <div className="mt-4 grid gap-7 md:grid-cols-[1fr_auto] md:items-end md:gap-12">
          <div>
            <h2 className="font-display text-4xl leading-tight tracking-[-0.02em] text-ink sm:text-5xl">Let&apos;s build something good.</h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed">Open to software engineering, full-stack development and technical leadership opportunities in Zagreb, Belgrade or remotely.</p>
            <a href="https://www.linkedin.com/in/brankalakicevic" target="_blank" rel="noopener noreferrer" className="text-link mt-5 inline-block text-base">Message me on LinkedIn <span aria-hidden="true">↗</span></a>
          </div>
          <a href="/Branka-Lakicevic-CV.pdf" target="_blank" rel="noopener noreferrer" className="button-primary justify-self-start">View my CV <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
