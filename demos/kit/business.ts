/** Entreprise fictive affichée par une démo : aucune coordonnée réelle. */
export type Business = {
  name: string
  /** Zone affichée, volontairement vague (ex. « Occitanie ») */
  city: string
  phone?: string
  email?: string
}

/** "06 39 98 00 00" -> "tel:+33639980000" */
export function telHref(phone: string): string {
  return `tel:+33${phone.replace(/\s/g, "").slice(1)}`
}
