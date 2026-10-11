export type Art = "printing" | "search" | "starter" | "pipeline";

const tone = { ink: "var(--color-ink)", plum: "var(--color-plum)", muted: "var(--color-muted)", rule: "var(--color-rule)" };

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 320 200" className="h-full w-full" aria-hidden="true" fontFamily="var(--font-mono)">
      <rect width="320" height="200" fill="var(--color-hl-plum)" />
      {children}
    </svg>
  );
}

export function Cover({ art }: { art: Art }) {
  if (art === "printing") {
    return (
      <Frame>
        <g className="float">
          <rect x="28" y="48" width="72" height="56" fill="var(--color-card)" stroke={tone.rule} />
          <rect x="36" y="56" width="56" height="34" fill="var(--color-hl-sky)" />
          <rect x="44" y="92" width="40" height="4" fill={tone.rule} />
        </g>
        <path d="M108 76 H150" stroke={tone.plum} strokeWidth="2" className="dash" />
        <rect x="156" y="52" width="48" height="48" fill="var(--color-card)" stroke={tone.rule} />
        <text x="180" y="81" textAnchor="middle" fontSize="11" fill={tone.plum}>queue</text>
        <path d="M210 76 H250" stroke={tone.plum} strokeWidth="2" className="dash" />
        <rect x="256" y="40" width="40" height="72" fill="var(--color-card)" stroke={tone.rule} />
        <rect x="264" y="48" width="24" height="8" fill="var(--color-hl-sun)" />
        <rect x="264" y="62" width="24" height="8" fill="var(--color-hl-sage)" />
        <rect x="264" y="76" width="24" height="8" fill="var(--color-hl-sky)" />
        <text x="276" y="104" textAnchor="middle" fontSize="9" fill={tone.muted}>lab</text>
        <text x="28" y="150" fontSize="11" fill={tone.ink}>upload → crop → order → process → print</text>
        <text x="28" y="168" fontSize="9" fill={tone.muted}>webhooks · BullMQ · Sharp · CSV + Drive</text>
      </Frame>
    );
  }
  if (art === "search") {
    return (
      <Frame>
        <rect x="32" y="36" width="256" height="30" fill="var(--color-card)" stroke={tone.rule} />
        <text x="44" y="56" fontSize="12" fill={tone.ink}>linen shirt, oversized</text>
        <rect x="236" y="42" width="44" height="18" fill={tone.plum} />
        <text x="258" y="55" textAnchor="middle" fontSize="9" fill="var(--color-paper)">search</text>
        {[0, 1, 2, 3].map((i) => (
          <g key={i} className="float" style={{ animationDelay: `${i * 0.4}s` }}>
            <rect x={32 + i * 66} y="82" width="58" height="58" fill="var(--color-card)" stroke={tone.rule} />
            <rect x={40 + i * 66} y="90" width="42" height="30" fill={["var(--color-hl-sky)", "var(--color-hl-sage)", "var(--color-hl-sun)", "var(--color-hl-plum)"][i]} />
            <rect x={40 + i * 66} y="126" width="30" height="4" fill={tone.rule} />
          </g>
        ))}
        <text x="32" y="168" fontSize="9" fill={tone.muted}>admin · rules · analytics · A/B tests · storefront widget</text>
      </Frame>
    );
  }
  if (art === "starter") {
    return (
      <Frame>
        {[
          ["header", 36, 20],
          ["main-hero", 62, 40],
          ["product-grid", 108, 40],
          ["footer", 154, 20],
        ].map(([name, y, h]) => (
          <g key={name as string}>
            <rect x="32" y={y as number} width="160" height={h as number} fill="var(--color-card)" stroke={tone.rule} />
            <text x="40" y={(y as number) + 14} fontSize="9" fill={tone.plum}>{`<${name}-section>`}</text>
          </g>
        ))}
        <text x="208" y="48" fontSize="10" fill={tone.ink}>importmap</text>
        <text x="208" y="66" fontSize="9" fill={tone.muted}>@theme/drawer</text>
        <text x="208" y="80" fontSize="9" fill={tone.muted}>@theme/swiper-init</text>
        <text x="208" y="94" fontSize="9" fill={tone.muted}>@theme/cart-api</text>
        <text x="208" y="120" fontSize="10" fill={tone.ink}>no bundler</text>
        <text x="208" y="136" fontSize="9" fill={tone.muted}>ES modules + Custom Elements</text>
      </Frame>
    );
  }
  return (
    <Frame>
      {[
        ["PR", 24, "var(--color-card)"],
        ["static checks", 90, "var(--color-hl-sky)"],
        ["Claude review", 170, "var(--color-hl-sun)"],
        ["validate", 250, "var(--color-hl-sage)"],
      ].map(([label, x, fill], i) => (
        <g key={label as string}>
          <rect x={x as number} y="68" width={i === 0 ? 40 : 70} height="36" fill={fill as string} stroke={tone.rule} />
          <text x={(x as number) + (i === 0 ? 20 : 35)} y="90" textAnchor="middle" fontSize="9" fill={tone.ink}>{label as string}</text>
        </g>
      ))}
      <path d="M64 86 H90 M160 86 H170 M240 86 H250" stroke={tone.plum} strokeWidth="2" className="dash" />
      <path d="M285 104 C 285 140, 60 140, 44 104" stroke={tone.plum} strokeWidth="1.5" fill="none" className="dash" />
      <text x="160" y="150" textAnchor="middle" fontSize="9" fill={tone.muted}>findings checked against the source before posting</text>
      <text x="160" y="168" textAnchor="middle" fontSize="9" fill={tone.muted}>GitHub Actions · Anthropic API · Node.js</text>
    </Frame>
  );
}
