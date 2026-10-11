import { ImageResponse } from "next/og";

export const alt = "Branka Lakićević, senior frontend engineer and development lead. Storefronts, apps and independent products.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#fbf8f6", color: "#1f1a1c", padding: "64px 72px" }}>
      <div style={{ display: "flex", fontSize: 22, color: "#64283b" }}>branka.lakicevic</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 82, letterSpacing: "-3px", lineHeight: 1.15 }}>Branka Lakićević</div>
        <div style={{ display: "flex", alignSelf: "flex-start", marginTop: 24, padding: "8px 16px", background: "#d9ecc9", fontSize: 36 }}>Senior frontend engineer.</div>
        <div style={{ display: "flex", marginTop: 14, fontSize: 36 }}>Hands-on development lead.</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #e3d7db", paddingTop: 24, fontSize: 20, color: "#64283b" }}>
        <div style={{ display: "flex" }}>Storefronts · Custom apps · Independent products</div>
        <div style={{ display: "flex" }}>Zagreb / Remote</div>
      </div>
    </div>,
    size,
  );
}
