import type { Metadata } from "next"
import { CourtierAutoSite } from "@/demos/courtier-auto"

export const metadata: Metadata = {
  title: "Concept de site vitrine — courtier automobile",
  description:
    "Concept de site vitrine pour un courtier automobile (entreprise fictive) : fiche de recherche qui se coche à l’arrivée, route tracée au scroll et tickets poinçonnés étape par étape.",
  openGraph: {
    title: "Concept de site vitrine — courtier automobile",
    description:
      "Fiche de recherche animée, route tracée au scroll et tickets poinçonnés étape par étape.",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Page() {
  return <CourtierAutoSite />
}
