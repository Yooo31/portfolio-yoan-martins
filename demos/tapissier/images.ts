// Photos d'illustration Unsplash (vérifiées visuellement).
const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`

export const IMAGES = {
  hero: u("1601366533287-5ee4c763ae4e"),
  // Avant / après (même photo, « avant » simulé par filtre)
  bergere: u("1601366533287-5ee4c763ae4e"),
  vintage: u("1506332088442-9e0024864f5d"),
  club: u("1579656592043-a20e25a4aa4b"),
  wingback: u("1631700679578-621a258507bb"),
  velvet: u("1581325368274-24798f7da015"),
  // Savoir-faire
  refection: u("1769142218868-a7c6d52c197e"),
  garnissage: u("1702865071803-cb154cd45f48"),
  tissus: u("1770970831074-6e88b6cc260b"),
  fabrics: u("1705412877691-70f6913aaa1e"),
}
