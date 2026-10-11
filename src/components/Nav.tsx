import Link from "next/link";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#how", label: "Approach" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 px-5 py-2 sm:py-3">
        <Link href="/#top" className="py-2 font-mono text-sm font-semibold tracking-tight text-plum">branka.lakicevic</Link>
        <nav aria-label="Main navigation" className="flex flex-wrap gap-x-5 font-mono text-[11px] uppercase tracking-[0.08em] text-muted sm:gap-x-6 sm:text-xs">
          {links.map((link) => <Link key={link.href} href={link.href} className="py-3 transition-colors hover:text-plum">{link.label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
