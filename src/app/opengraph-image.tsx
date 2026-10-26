import { ImageResponse } from "next/og";

export const alt = "Athilla Zaidan, software and AI engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#f5f5f5",
          fontFamily: "system-ui, sans-serif",
          padding: "0 120px",
        }}
      >
        <div style={{ fontSize: 88, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1 }}>Athilla Zaidan</div>
        <div style={{ marginTop: 28, fontSize: 34, color: "#8c8c8c" }}>
          Software and AI engineer. Institut Teknologi Bandung.
        </div>
        <div style={{ marginTop: 56, fontSize: 26, color: "#f5f5f5" }}>athilla.tech</div>
      </div>
    ),
    { ...size },
  );
}
