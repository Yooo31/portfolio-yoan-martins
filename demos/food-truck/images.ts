// Photos d'illustration Unsplash (vérifiées visuellement).
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`

export const IMAGES = {
  truck: u("1565123409695-7b5ef63a2efb"),
  tacos: u("1565299585323-38d6b0865b47"),
  buffet: u("1555244162-803834f70033"),
  bowl: u("1546069901-ba9599a7e63c"),
  shareTable: u("1530062845289-9109b2c9c868"),
  tacosPlate: u("1551504734-5ee1c4a1479b"),
  wedding: u("1519225421980-715cb0215aed"),
  weddingTable: u("1511795409834-ef04bbd61622"),
  friends: u("1528605248644-14dd04022da1"),
  spread: u("1547573854-74d2a71d0826"),
  salad: u("1512621776951-a57141f2eefd"),
}
