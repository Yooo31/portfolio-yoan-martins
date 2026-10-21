import type { Metadata } from "next"
import { DepotVenteSite } from "@/demos/depot-vente"

export const metadata: Metadata = {
  title: "Concept de site vitrine — dépôt-vente de vêtements",
  description:
    "Concept de site vitrine pour un dépôt-vente de vêtements (entreprise fictive) : portant animé, étiquettes à retourner, nouveautés en polaroids et demande de dépôt avec photos.",
  openGraph: {
    title: "Concept de site vitrine — dépôt-vente de vêtements",
    description:
      "Portant animé, étiquettes à retourner, nouveautés en polaroids et demande de dépôt avec photos.",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Page() {
  return <DepotVenteSite />
}
