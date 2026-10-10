import type { Metadata } from "next"
import { FoodTruckSite } from "@/demos/food-truck"

export const metadata: Metadata = {
  title: "Concept de site vitrine — food truck & traiteur",
  description:
    "Concept de site vitrine pour un food truck traiteur (entreprise fictive) : photos déplaçables, cartes de formules en 3D et demande de privatisation.",
  openGraph: {
    title: "Concept de site vitrine — food truck & traiteur",
    description: "Photos déplaçables, cartes de formules en 3D et demande de privatisation.",
    locale: "fr_FR",
    type: "website",
  },
}

export default function Page() {
  return <FoodTruckSite />
}
