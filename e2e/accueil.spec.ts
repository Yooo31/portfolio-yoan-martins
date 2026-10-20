import { experiences } from "../data/experiences"
import { getFeaturedProjects } from "../data/projects"
import { primaryLink } from "../components/sections/projects-section"
import { expect, gotoReady, scrollThrough, scrollToCenter, test } from "./fixtures"

const projects = getFeaturedProjects()
const card = (page: import("@playwright/test").Page, name: string) =>
  page.locator("#work article").filter({ has: page.getByRole("heading", { name, exact: true }) })

test.describe("cartes des réalisations", () => {
  test("chaque carte avec un lien est cliquable sur toute sa surface", async ({ page }) => {
    const demo = projects.find(project => project.url?.startsWith("/demos/"))
    test.skip(!demo, "aucune démo mise en avant")
    await gotoReady(page, "/")
    const article = card(page, demo!.name)
    await scrollToCenter(article)
    // Clic au milieu de l'image, loin du titre : la carte entière mène à la démo.
    const box = await article.boundingBox()
    await article.click({ position: { x: box!.width / 2, y: 60 } })
    await expect(page).toHaveURL(new RegExp(`${demo!.url}$`))
  })

  test("le lien principal de chaque carte correspond aux données", async ({ page }) => {
    await gotoReady(page, "/")
    for (const project of projects) {
      const link = primaryLink(project)
      const title = card(page, project.name).getByRole("heading").getByRole("link")
      if (link) await expect(title, project.id).toHaveAttribute("href", link.href)
      else await expect(title, project.id).toHaveCount(0)
    }
  })

  test("le bouton Code reste cliquable au-dessus du lien de la carte", async ({ page }) => {
    const project = projects.find(p => p.github && p.url)
    test.skip(!project, "aucun projet avec site et code")
    await gotoReady(page, "/")
    const button = card(page, project!.name).getByRole("link", { name: /Code source/ })
    await scrollToCenter(button)
    await expect(button).toHaveAttribute("href", project!.github!)
    // L'élément sous le centre du bouton est bien le bouton (pas le lien étiré de la carte).
    const onTop = await button.evaluate(element => {
      const rect = element.getBoundingClientRect()
      const hit = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2)
      return element.contains(hit)
    })
    expect(onTop).toBe(true)
  })

  test("la mosaïque est complète sur grand écran (aucune colonne plus courte)", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "une seule colonne sur mobile")
    await page.setViewportSize({ width: 1440, height: 900 })
    await gotoReady(page, "/")
    const rects = await page
      .locator("#work article")
      .evaluateAll(articles => articles.map(article => article.getBoundingClientRect().toJSON()))
    const bottom = Math.max(...rects.map(rect => rect.bottom))
    const columns = [...new Set(rects.map(rect => Math.round(rect.left)))]
    // Pour chaque début de colonne, une tuile descend jusqu'au bas de la grille.
    for (const left of columns) {
      const reachesBottom = rects.some(
        rect => rect.left <= left + 1 && rect.right > left + 1 && Math.abs(rect.bottom - bottom) < 2
      )
      expect(reachesBottom, `colonne à x=${left}`).toBe(true)
    }
  })

  test("les filtres n'affichent que la catégorie choisie", async ({ page }) => {
    await gotoReady(page, "/")
    const filters = page.getByRole("group", { name: "Filtrer les réalisations" })
    const articles = page.locator("#work article")

    await filters.getByRole("button", { name: /^Side-projects/ }).click()
    await expect(articles).toHaveCount(projects.filter(p => p.category === "side-project").length)
    await expect(filters.getByRole("button", { name: /^Side-projects/ })).toHaveAttribute(
      "aria-pressed",
      "true"
    )

    await filters.getByRole("button", { name: /^Tous/ }).click()
    await expect(articles).toHaveCount(projects.length)
  })
})

test.describe("accueil", () => {
  test("les chiffres clés sont calculés depuis les données", async ({ page }) => {
    await gotoReady(page, "/")
    const firstJob = Math.min(
      ...experiences.filter(exp => exp.type === "work").map(exp => Number(exp.startDate))
    )
    const stats = page.locator("main dl").first()
    await expect(stats).toContainText(`${new Date().getFullYear() - firstJob} ans`)
    await expect(stats.getByText(`${projects.length}`, { exact: true })).toBeVisible()
  })

  test("toutes les sections sont visibles après défilement", async ({ page }) => {
    await gotoReady(page, "/")
    await scrollThrough(page)
    for (const id of ["services", "work", "stack", "about", "contact"]) {
      const heading = page.locator(`#${id} h2`).first()
      await scrollToCenter(heading)
      await expect(heading, id).toBeVisible()
      // Les apparitions au scroll doivent se terminer (opacité finale à 1).
      await expect
        .poll(() =>
          heading.evaluate(el => Number(getComputedStyle(el.closest("[style]") ?? el).opacity))
        )
        .toBe(1)
    }
  })

  test("le lien du menu correspondant à la section visible est mis en avant", async ({
    page,
    isMobile,
  }) => {
    test.skip(isMobile, "navigation complète affichée seulement sur grand écran")
    await gotoReady(page, "/")
    const nav = page.getByRole("navigation", { name: "Navigation principale" })
    await expect(nav.locator("[aria-current]")).toHaveCount(0)
    await scrollToCenter(page.locator("#work article").first())
    await expect(nav.getByRole("link", { name: "Réalisations" })).toHaveAttribute(
      "aria-current",
      "true"
    )
  })

  test("le menu mobile mène aux sections", async ({ page, isMobile }) => {
    test.skip(!isMobile, "menu burger affiché seulement sur mobile")
    await gotoReady(page, "/")
    await page.getByRole("button", { name: "Ouvrir le menu" }).click()
    const menu = page.getByRole("dialog", { name: "Navigation" })
    await menu.getByRole("link", { name: "Contact" }).click()
    await expect(menu).toBeHidden()
    await expect(page).toHaveURL(/#contact$/)
  })

  test("l'appel à l'action de contact propose l'email", async ({ page }) => {
    await gotoReady(page, "/")
    await expect(page.locator("#contact").getByRole("link", { name: /M.écrire/ })).toHaveAttribute(
      "href",
      "mailto:contact@yoanmartins.fr"
    )
  })
})
