import { test as base, expect, type Locator, type Page } from "@playwright/test"

const PIXEL = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
  "base64"
)

/**
 * Chaque test :
 * - n'appelle aucun service externe (photos Unsplash, API d'icônes) : réponses factices, donc résultat stable ;
 * - collecte les erreurs JavaScript et console (dont les erreurs d'hydratation) dans `problems`.
 */
export const test = base.extend<{ problems: string[] }>({
  problems: [
    async ({ page, baseURL }, use) => {
      const problems: string[] = []
      page.on("pageerror", error => problems.push(`pageerror: ${error.message}`))
      page.on("console", message => {
        if (message.type() === "error") problems.push(`console: ${message.text()}`)
      })
      await page.route(
        url => !url.href.startsWith(baseURL ?? ""),
        route =>
          route.request().resourceType() === "image"
            ? route.fulfill({ contentType: "image/png", body: PIXEL })
            : route.fulfill({ contentType: "application/json", body: "{}" })
      )
      await use(problems)
    },
    { auto: true },
  ],
})

export { expect }

/** Fait défiler toute la page pour déclencher les apparitions au scroll, puis revient en haut. */
export async function scrollThrough(page: Page) {
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = "auto"
    for (let y = 0; y < document.body.scrollHeight; y += 300) {
      window.scrollTo(0, y)
      await new Promise(resolve => setTimeout(resolve, 50))
    }
    window.scrollTo(0, 0)
  })
}

/**
 * Amène un élément au centre de l'écran sans défilement animé : le défilement fluide du site
 * (scroll-behavior: smooth) déplace l'élément pendant que Playwright attend qu'il soit stable.
 */
export async function scrollToCenter(locator: Locator) {
  await locator.evaluate(element =>
    element.scrollIntoView({ block: "center", behavior: "instant" })
  )
}

/**
 * Ouvre une page et attend la fin du chargement (React hydraté) : avant, les clics ne sont pas
 * encore gérés et Next.js peut remettre le défilement en haut de page.
 */
export async function gotoReady(page: Page, url: string) {
  await page.goto(url, { waitUntil: "networkidle" })
}
