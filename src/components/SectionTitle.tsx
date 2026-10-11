export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-plum">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight tracking-[-0.02em] text-ink md:text-4xl">{title}</h2>
    </div>
  );
}
