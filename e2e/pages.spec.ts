import { readdirSync } from "node:fs"
import { expect, scrollThrough, test } from "./fixtures"

// Toute nouvelle démo ajoutée dans app/demos/ est couverte automatiquement.
const demos = readdirSync("app/demos", { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => `/demos/${entry.name}/`)

for (const route of ["/", ...demos]) {
  test.describe(`page ${route}`, () => {
    test("s'affiche sans erreur ni débordement", async ({ page, problems }) => {
      const response = await page.goto(route, { waitUntil: "networkidle" })
      expect(response?.status()).toBe(200)
      await expect(page).toHaveTitle(/\S/)
      await expect(page.locator("h1").first()).toBeVisible()

      await scrollThrough(page)
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth
      )
      expect(overflow, "débordement horizontal (px)").toBeLessThanOrEqual(0)
      expect(problems).toEqual([])
    })

    test("n'a aucun lien interne cassé", async ({ page, request }) => {
      await page.goto(route)
      const hrefs = await page
        .locator("a[href]")
        .evaluateAll(links => [...new Set(links.map(link => link.getAttribute("href") ?? ""))])

      for (const href of hrefs) {
        if (href.startsWith("#") && href.length > 1) {
          await expect(page.locator(`[id="${href.slice(1)}"]`), `ancre ${href}`).toHaveCount(1)
        } else if (href.startsWith("/")) {
          const target = await request.get(href)
          expect(target.status(), `lien ${href}`).toBe(200)
        }
      }
    })
  })
}

test("une adresse inconnue renvoie la page 404", async ({ page }) => {
  const response = await page.goto("/cette-page-n-existe-pas/")
  expect(response?.status()).toBe(404)
})
