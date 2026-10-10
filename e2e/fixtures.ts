import { test as base, expect, type Page } from "@playwright/test"

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
