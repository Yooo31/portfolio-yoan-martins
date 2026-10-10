import { readFileSync } from "node:fs"
import { expect, test } from "@playwright/test"

// La release ne tourne que le lundi sur main : sans ce test, une mise à jour incompatible d'un plugin
// semantic-release (fusionnée automatiquement) ne serait découverte qu'au moment de publier.
type Plugin = string | [string, Record<string, unknown>]
const config = JSON.parse(readFileSync(".releaserc.json", "utf8")) as { plugins: Plugin[] }

function options(name: string): Record<string, unknown> {
  const plugin = config.plugins.find(p => (typeof p === "string" ? p : p[0]) === name)
  expect(plugin, `plugin ${name} dans .releaserc.json`).toBeDefined()
  return typeof plugin === "string" || !plugin ? {} : plugin[1]
}

const commit = (message: string, index: number) => ({
  message,
  subject: message,
  body: "",
  hash: `${index}`.repeat(40),
  commit: { long: `${index}`.repeat(40), short: `${index}`.repeat(7) },
  committerDate: "2026-01-05",
})

const logger = { log: () => {}, error: () => {}, warn: () => {}, info: () => {}, success: () => {} }
const cwd = process.cwd()

test.describe("configuration de release", () => {
  const cases: [string, string | null][] = [
    ["feat(demos): nouvelle démo", "minor"],
    ["fix(header): lien cassé", "patch"],
    ["chore(deps): bump next from 16.2.6 to 16.4.0", "patch"],
    ["chore(deps-dev): bump prettier from 3.8.1 to 3.8.2", "patch"],
    ["ci: bump actions/checkout from 6 to 7", null],
    ["feat(api)!: changement cassant", "major"],
  ]

  for (const [message, expected] of cases) {
    test(`« ${message} » → ${expected ?? "pas de release"}`, async () => {
      const { analyzeCommits } = await import("@semantic-release/commit-analyzer")
      const type = await analyzeCommits(options("@semantic-release/commit-analyzer"), {
        cwd,
        logger,
        commits: [commit(message, 1)],
      })
      expect(type ?? null).toBe(expected)
    })
  }

  test("les notes de release se génèrent avec les plugins installés", async () => {
    const { generateNotes } = await import("@semantic-release/release-notes-generator")
    const notes = await generateNotes(options("@semantic-release/release-notes-generator"), {
      cwd,
      logger,
      commits: [
        commit("feat(demos): nouvelle démo", 1),
        commit("chore(deps): bump next from 16.2.6 to 16.4.0", 2),
      ],
      lastRelease: { gitTag: "v1.0.0", gitHead: "a".repeat(40), version: "1.0.0" },
      nextRelease: { gitTag: "v1.1.0", gitHead: "b".repeat(40), version: "1.1.0" },
      options: { repositoryUrl: "https://github.com/Yooo31/portfolio-yoan-martins" },
    })
    expect(notes).toContain("Features")
    expect(notes).toContain("nouvelle démo")
    expect(notes).toContain("Maintenance & dépendances")
  })
})
