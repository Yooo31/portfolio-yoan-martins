import { readFileSync, statSync } from "node:fs"
import { projects } from "../data/projects"
import { techStack } from "../data/stack"
import { SITE_URL } from "../lib/site"
import { techIconSvg } from "../components/ui/tech-icon"
import { expect, scrollThrough, test } from "./fixtures"

test.describe("SEO", () => {
  test("canonical, Open Graph et Twitter pointent vers le domaine du portfolio", async ({
    page,
  }) => {
    await page.goto("/")
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `${SITE_URL}/`)
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", `${SITE_URL}/`)
    const ogImage = page.locator('meta[property="og:image"]')
    await expect(ogImage).toHaveAttribute("content", new RegExp(`^${SITE_URL}/opengraph-image`))
    await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
      "content",
      String(await ogImage.getAttribute("content"))
    )
  })

  test("l'image Open Graph fait 1200×630, comme déclaré", async ({ page }) => {
    await page.goto("/")
    const url = await page.locator('meta[property="og:image"]').getAttribute("content")
    const size = await page.evaluate(
      async src => {
        const image = new Image()
        image.src = src
        await image.decode()
        return { width: image.naturalWidth, height: image.naturalHeight }
      },
      String(url).replace(SITE_URL, "")
    )
    expect(size).toEqual({ width: 1200, height: 630 })
    await expect(page.locator('meta[property="og:image:width"]')).toHaveAttribute("content", "1200")
    await expect(page.locator('meta[property="og:image:height"]')).toHaveAttribute("content", "630")
  })

  test("l'image Open Graph (sans extension) est servie en image/png par Vercel", () => {
    const config = JSON.parse(readFileSync("vercel.json", "utf8")) as {
      headers: { source: string; headers: { key: string; value: string }[] }[]
    }
    const rule = config.headers.find(rule => rule.source === "/opengraph-image")
    expect(rule?.headers).toContainEqual({ key: "Content-Type", value: "image/png" })
  })

  test("données structurées Person et WebSite valides", async ({ page }) => {
    await page.goto("/")
    const raw = await page.locator('script[type="application/ld+json"]').textContent()
    const data = JSON.parse(raw ?? "{}") as { "@graph": Record<string, unknown>[] }
    const person = data["@graph"].find(node => node["@type"] === "Person")
    const website = data["@graph"].find(node => node["@type"] === "WebSite")
    expect(person).toMatchObject({ name: "Yoan Martins", url: `${SITE_URL}/` })
    expect(website).toMatchObject({ url: `${SITE_URL}/`, inLanguage: "fr-FR" })
    const image = String(person?.image).replace(SITE_URL, "")
    expect((await page.request.get(image)).ok(), `image ${image}`).toBe(true)
  })

  test("robots.txt ne bloque rien et annonce le sitemap", async ({ request }) => {
    const robots = await (await request.get("/robots.txt")).text()
    expect(robots).not.toMatch(/^Disallow:\s*\S/m)
    expect(robots).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`)
  })

  test("le sitemap liste l'accueil sur le bon domaine", async ({ request }) => {
    const sitemap = await (await request.get("/sitemap.xml")).text()
    expect(sitemap).toContain(`<loc>${SITE_URL}/</loc>`)
  })

  test("les démos restent hors index et sans canonical vers l'accueil", async ({ page }) => {
    await page.goto("/demos/tapissier/")
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/)
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(0)
  })
})

test.describe("performance", () => {
  test("les icônes de la stack sont en SVG dans la page, sans appel à l'API Iconify", async ({
    page,
  }) => {
    const external: string[] = []
    page.on("request", request => {
      if (!request.url().startsWith("http://localhost")) external.push(request.url())
    })
    await page.goto("/")
    const icons = techStack.flatMap(stack => stack.technologies)
    await expect(page.locator("#stack svg[data-icon]")).toHaveCount(icons.length)
    await scrollThrough(page)
    await page.waitForLoadState("networkidle")
    expect(external.filter(url => url.includes("iconify"))).toEqual([])
  })

  test("toutes les icônes de la stack existent dans les collections installées", () => {
    for (const { icon } of techStack.flatMap(stack => stack.technologies)) {
      expect(() => techIconSvg(icon), icon).not.toThrow()
    }
  })

  test("la photo du hero est chargée en priorité", async ({ page }) => {
    await page.goto("/")
    const photo = page.getByAltText("Yoan Martins - Développeur Full Stack")
    await expect(photo).toHaveAttribute("fetchpriority", "high")
    await expect(photo).not.toHaveAttribute("loading", "lazy")
  })

  // Les cartes font au plus ~600 px de large : au-delà de ce poids, l'image n'a pas été optimisée.
  for (const project of projects) {
    test(`${project.id} : image en WebP de moins de 100 Ko`, () => {
      expect(project.image).toMatch(/\.webp$/)
      expect(statSync(`public${project.image}`).size).toBeLessThan(100 * 1024)
    })
  }

  test("les en-têtes de sécurité et de cache sont déclarés pour Vercel", () => {
    // Vercel ignore public/_headers : seul vercel.json est pris en compte.
    const config = JSON.parse(readFileSync("vercel.json", "utf8")) as {
      headers: { source: string; headers: { key: string; value: string }[] }[]
    }
    const keys = config.headers.flatMap(rule => rule.headers.map(header => header.key))
    for (const key of [
      "X-Frame-Options",
      "X-Content-Type-Options",
      "Referrer-Policy",
      "Cache-Control",
    ]) {
      expect(keys, key).toContain(key)
    }
  })
})
