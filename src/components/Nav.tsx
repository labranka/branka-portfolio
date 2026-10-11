import Link from "next/link";

const links = [
  { href: "#work", label: "Work" },
  { href: "#how", label: "How I work" },
  { href: "#about", label: "About" },
  { href: "/Branka-Lakicevic-CV.pdf", label: "CV" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-plum">
          branka.lakicevic
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[12px] uppercase tracking-[0.12em] text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
