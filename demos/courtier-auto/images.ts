// Photos d'illustration Unsplash (vérifiées visuellement).
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`

export const IMAGES = {
  cles: u("1761014586544-53fe5e1f1e25"), // remise d'une clé de main à main, fond clair
  citadine: u("1666335009171-3ddc17937d6d"), // citadine sombre de face, plaque masquée
  compacte: u("1718964312552-c30c213bb1bc"), // compacte verte devant un immeuble
  familiale: u("1687039588464-09f1b52208c7"), // ludospace gris sur un chemin
  route: u("1605527072515-18d80e1433f5"), // citadine blanche sur une route d'automne
  habitacle: u("1647866711039-678ab690a98f"), // poste de conduite
}
