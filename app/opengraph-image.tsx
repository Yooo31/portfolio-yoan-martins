import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

// Image de partage (LinkedIn, X, Slack…) générée au build au format recommandé 1200×630.
export const alt = "Yoan Martins - Développeur Full Stack & Architecte UI"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const dynamic = "force-static"

const BACKGROUND = "#0e0f20"
const GRADIENT = "linear-gradient(90deg, #3dd5f3, #b14ef2)"
const TECHNOLOGIES = ["React", "Next.js", "TypeScript", "Node.js"]

const font = (weight: number) =>
  readFile(
    join(process.cwd(), `node_modules/@fontsource/inter/files/inter-latin-${weight}-normal.woff`)
  )

export default async function OpengraphImage() {
  const [logo, regular, semiBold] = await Promise.all([
    readFile(join(process.cwd(), "app/_og/logo.png"), "base64"),
    font(400),
    font(600),
  ])

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 88px",
        background: BACKGROUND,
        backgroundImage:
          "radial-gradient(circle at 85% 15%, rgba(177, 78, 242, 0.22), transparent 45%), radial-gradient(circle at 10% 95%, rgba(61, 213, 243, 0.16), transparent 45%)",
        color: "white",
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 64 }}>
        <img src={`data:image/png;base64,${logo}`} width={250} height={170} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 80, fontWeight: 600, letterSpacing: -2, lineHeight: 1 }}>
            Yoan Martins
          </div>
          <div style={{ fontSize: 38, color: "#c4c6d6", lineHeight: 1.2 }}>
            Développeur Full Stack & Architecte UI
          </div>
          <div style={{ width: 120, height: 6, borderRadius: 3, backgroundImage: GRADIENT }} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 14 }}>
          {TECHNOLOGIES.map(tech => (
            <div
              key={tech}
              style={{
                fontSize: 26,
                padding: "10px 22px",
                borderRadius: 999,
                border: "1px solid rgba(255, 255, 255, 0.18)",
                background: "rgba(255, 255, 255, 0.06)",
                color: "#e4e5ee",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 28, color: "#8b8ea6" }}>portfolio.yoanmartins.fr</div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Inter", data: regular, weight: 400, style: "normal" },
        { name: "Inter", data: semiBold, weight: 600, style: "normal" },
      ],
    }
  )
}
