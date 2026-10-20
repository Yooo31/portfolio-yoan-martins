"use client"

import { useEffect, useState } from "react"

/** Identifiant de la section actuellement au centre de l'écran (pour surligner le lien du menu). */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null)
  const key = ids.join(",")

  useEffect(() => {
    const sections = key
      .split(",")
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        // Aucune section au centre (haut de page) : aucun lien actif
        setActive(sections.find(section => visible.has(section.id))?.id ?? null)
      },
      // Bande horizontale au milieu de l'écran : une seule section à la fois
      { rootMargin: "-45% 0px -50% 0px" }
    )
    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [key])

  return active
}
