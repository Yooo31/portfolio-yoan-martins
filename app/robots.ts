import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    // Rien n'est bloqué : Google a besoin de /_next/ (CSS, JS) pour rendre la page, et doit pouvoir lire
    // le noindex des démos (une URL bloquée ici peut quand même être indexée, sans son contenu).
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
