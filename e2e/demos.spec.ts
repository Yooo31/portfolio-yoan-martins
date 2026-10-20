import { readdirSync } from "node:fs"
import { expect, gotoReady, scrollThrough, test } from "./fixtures"

const demos = readdirSync("app/demos", { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => `/demos/${entry.name}/`)

for (const route of demos) {
  test.describe(`démo ${route}`, () => {
    test("est hors index et renvoie vers le portfolio", async ({ page }) => {
      await page.goto(route)
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/)
      await expect(page.getByText("est une entreprise fictive")).toBeVisible()
      await expect(page.getByRole("link", { name: /retour au portfolio/ })).toHaveAttribute(
        "href",
        "/#work"
      )
    })

    test("révèle toutes ses sections au défilement", async ({ page }) => {
      await page.goto(route)
      await scrollThrough(page)
      const headings = page.locator("main h2")
      expect(await headings.count()).toBeGreaterThan(2)
      // Une animation d'apparition bloquée laisserait un ancêtre à opacity: 0.
      await expect
        .poll(() =>
          headings.evaluateAll(
            nodes =>
              nodes.filter(node => {
                let opacity = 1
                for (let el: Element | null = node; el; el = el.parentElement) {
                  opacity *= Number(getComputedStyle(el).opacity)
                }
                return opacity < 0.99
              }).length
          )
        )
        .toBe(0)
    })

    test("le formulaire répond sans rien envoyer", async ({ page }) => {
      const sent: string[] = []
      // GET et HEAD (préchargement des liens par Next) ne transmettent aucune donnée.
      page.on("request", request => {
        if (!["GET", "HEAD"].includes(request.method())) sent.push(request.url())
      })
      await gotoReady(page, route)
      const form = page.locator("form")
      for (const input of await form.locator("input[required]").all()) {
        const type = await input.getAttribute("type")
        await input.fill(
          type === "date" ? "2030-06-15" : type === "tel" ? "0639980000" : "Test automatique"
        )
      }
      await form.locator('button[type="submit"]').click()
      await expect(form.getByRole("status")).toContainText("rien n’a été envoyé")
      expect(sent).toEqual([])
    })

    test("le menu mobile s'ouvre et se ferme", async ({ page, isMobile }) => {
      test.skip(!isMobile, "menu burger affiché seulement sur mobile")
      await gotoReady(page, route)
      await page.getByRole("button", { name: "Ouvrir le menu" }).click()
      const menu = page.getByRole("dialog")
      await expect(menu).toBeVisible()
      await menu.getByRole("link").first().click()
      await expect(menu).toBeHidden()
    })
  })
}
