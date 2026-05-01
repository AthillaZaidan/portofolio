import { ImageResponse } from "next/og";

export const alt = "Athilla Zaidan — AI Engineer & Fullstack Developer";
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #000000 0%, #0a0a2e 50%, #000000 100%)",
          color: "#ffffff",
          fontFamily: "Inter, system-ui, sans-serif",
          padding: 60,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 50% 50%, rgba(0,153,255,0.15) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0099ff, #0066cc)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          AZ
        </div>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            marginBottom: 16,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Athilla Zaidan
        </h1>
        <p
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: "#0099ff",
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          AI Engineer & Fullstack Developer
        </p>
        <p
          style={{
            fontSize: 20,
            fontWeight: 400,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
          }}
        >
          athilla.tech
        </p>
      </div>
    ),
    { ...size }
  );
}
