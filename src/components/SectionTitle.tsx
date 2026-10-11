export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-plum">{eyebrow}</p>
      <h2 className="mt-1 font-display text-3xl text-ink md:text-4xl">{title}</h2>
    </div>
  );
}
