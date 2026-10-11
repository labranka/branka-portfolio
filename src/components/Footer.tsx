export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-12 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-rule pt-6 font-mono text-[12px] text-muted">
        <span>© 2026 Branka Lakićević · built with Next.js, Tailwind and Framer Motion</span>
        <span className="flex gap-4">
          <a href="mailto:brankarbc96@gmail.com" className="hover:text-ink">brankarbc96@gmail.com</a>
          <a href="https://github.com/labranka" target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
          <a href="https://www.linkedin.com/in/brankalakicevic" target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
        </span>
      </div>
    </footer>
  );
}
