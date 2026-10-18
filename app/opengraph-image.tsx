import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Geovane2dd — Open-Source and Systems Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#040409",
          color: "#ffffff",
        }}
      >
        <div style={{ fontSize: 28, color: "#a78bfa", letterSpacing: 6 }}>GEOVANEDD.ME</div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>Geovane2dd</div>
        <div style={{ fontSize: 40, color: "#a1a1b5", marginTop: 24 }}>
          Open-source tools, self-hosted apps and systems programming.
        </div>
      </div>
    ),
    size,
  );
}
