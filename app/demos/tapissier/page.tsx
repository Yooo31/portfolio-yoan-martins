import type { Metadata } from "next"
import { TapissierSite } from "@/demos/tapissier"

export const metadata: Metadata = {
  title: "Concept de site vitrine — tapissier d’ameublement",
  description:
    "Concept de site vitrine pour un tapissier d’ameublement (entreprise fictive) : nuancier interactif, galerie avant/après et demande de devis avec photo.",
  openGraph: {
    title: "Concept de site vitrine — tapissier d’ameublement",
    description: "Nuancier interactif, galerie avant/après et demande de devis avec photo.",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Page() {
  return <TapissierSite />
}
