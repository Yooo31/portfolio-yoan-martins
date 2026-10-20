import { icons as logos } from "@iconify-json/logos"
import { icons as simpleIcons } from "@iconify-json/simple-icons"
import { getIconData, iconToSVG, replaceIDs } from "@iconify/utils"

// Icônes rendues en SVG au build (composant serveur) : aucune requête vers l'API Iconify ni JavaScript côté client.
const collections: Record<string, Parameters<typeof getIconData>[0]> = {
  logos,
  "simple-icons": simpleIcons,
}

/** Retourne le SVG d'une icône « collection:nom », ou lève une erreur au build si elle n'existe pas. */
export function techIconSvg(name: string) {
  const [prefix = "", iconName = ""] = name.split(":")
  const collection = collections[prefix]
  const data = collection && getIconData(collection, iconName)
  if (!data) throw new Error(`Icône inconnue : ${name}`)
  const { attributes, body } = iconToSVG(data, { height: "auto" })
  return { viewBox: attributes.viewBox, body: replaceIDs(body) }
}

export function TechIcon({ icon, className }: { icon: string; className?: string }) {
  const { viewBox, body } = techIconSvg(icon)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      className={className}
      aria-hidden="true"
      focusable="false"
      data-icon={icon}
      dangerouslySetInnerHTML={{ __html: body }}
    />
  )
}
