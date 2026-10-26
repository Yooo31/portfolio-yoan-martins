import type { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    // Rien n'est bloqué : Google doit pouvoir lire le noindex des pages (une URL bloquée ici peut quand
    // même être indexée, sans son contenu). Pas de sitemap : aucune page n'est à indexer.
    rules: [{ userAgent: "*", allow: "/" }],
  }
}
