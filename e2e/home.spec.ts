import { existsSync } from "node:fs"
import { getFeaturedProjects, projects } from "../data/projects"
import { expect, test } from "./fixtures"

test.describe("accueil", () => {
  test("est indexable et affiche toutes les réalisations mises en avant", async ({ page }) => {
    await page.goto("/")
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /^index/)
    await expect(page.locator("#work article")).toHaveCount(getFeaturedProjects().length)
    for (const project of getFeaturedProjects()) {
      await expect(page.locator("#work").getByRole("heading", { name: project.name })).toBeVisible()
    }
  })

  test("bascule entre thème clair et sombre", async ({ page }) => {
    await page.emulateMedia({ colorScheme: "light" })
    await page.goto("/")
    const html = page.locator("html")
    await expect(html).not.toHaveClass(/dark/)
    await page.getByRole("button", { name: "Activer le mode sombre" }).click()
    await expect(html).toHaveClass(/dark/)
    await page.getByRole("button", { name: "Activer le mode clair" }).click()
    await expect(html).not.toHaveClass(/dark/)
  })
})

test.describe("données des projets", () => {
  test("identifiants uniques", () => {
    const ids = projects.map(project => project.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  for (const project of projects) {
    test(`${project.id} : image et lien interne existent`, () => {
      expect(existsSync(`public${project.image}`), `image ${project.image}`).toBe(true)
      if (project.url?.startsWith("/")) {
        expect(existsSync(`app${project.url}page.tsx`), `page ${project.url}`).toBe(true)
      }
    })
  }
})
