// Photos d'illustration Unsplash (vérifiées visuellement).
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`

export const IMAGES = {
  // Cartes suspendues du hero
  hangShirts: u("1489987707025-afc232f7ea0f"),
  hangDenim: u("1666861585341-5bd1e7b1ed71"),
  hangKnits: u("1641642231157-0849081598a2"),
  hangPrints: u("1614990354198-b06764dcb13c"),
  // Polaroids « nouveautés »
  new1: u("1540221652346-e5dd6b50f3e7"),
  new2: u("1643015862949-5c8d15a4242e"),
  new3: u("1551488831-00ddcb6c6bd3"),
  new4: u("1614676471928-2ed0ad1061a4"),
  new5: u("1453486030486-0a5ffcd82cd9"),
  new6: u("1517677208171-0bc6725a3e60"),
  new7: u("1558769132-cb1aea458c5e"),
  // Bandeau boutique
  shop: u("1445205170230-053b83016050"),
}
