export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 pb-8 pt-3">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-rule pt-5 font-mono text-xs text-muted">
        <p>© 2026 Branka Lakićević</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="https://github.com/labranka" target="_blank" rel="noopener noreferrer" className="text-link py-2">GitHub <span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/brankalakicevic" target="_blank" rel="noopener noreferrer" className="text-link py-2">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="#top" className="text-link py-2">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </div>
    </footer>
  );
}
