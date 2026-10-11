const items = ["Shopify Plus", "Liquid", "Web Components", "React", "TypeScript", "Next.js", "Remix", "Node.js", "PostgreSQL", "Prisma", "Supabase", "Redis", "BullMQ", "Playwright", "GitHub Actions", "Docker", "Claude Code", "Codex", "OpenAI API"];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-rule py-3" aria-hidden="true">
      <div className="marquee flex w-max gap-8 font-mono text-[12px] uppercase tracking-[0.14em] text-muted">
        {row.map((t, i) => (
          <span key={i} className="whitespace-nowrap">
            {t} <span className="text-plum">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
