export interface Project {
  id: string
  name: string
  description: string
  longDescription?: string
  image: string
  url?: string
  github?: string
  technologies: string[]
  category: "professional" | "school" | "side-project" | "open-source"
  featured: boolean
  year: string
  status?: "completed" | "in-progress" | "archived"
  /**
   * Forme de la tuile dans la mosaïque : "feature" (2×2), "tall" (1×2, image verticale),
   * "wide" (2×1, capture d'écran), "square" (1×1, par défaut)
   */
  tile?: "feature" | "tall" | "wide" | "square"
  /** "contain" pour un logo à afficher en entier (par défaut : l'image remplit le cadre) */
  imageFit?: "cover" | "contain"
  /** Couleur de fond derrière une image en "contain" */
  imageBg?: string
}

export const projects: Project[] = [
  {
    id: "entreprise-png",
    name: "Entreprise PNG",
    description: "Site vitrine pour une entreprise de BTP.",
    longDescription:
      "Site web moderne et responsive pour promouvoir les services de la société Entreprise PNG. Optimisé SEO et performances.",
    image: "/images/projects/logo-entreprise-png.webp",
    url: "https://entreprise-png.fr",
    github: "https://github.com/Yooo31/entreprise-png",
    technologies: ["Astro.js", "Tailwind", "ShadCn"],
    category: "professional",
    featured: true,
    year: "2026",
    status: "completed",
    imageFit: "contain",
    imageBg: "#ffffff",
    tile: "feature",
  },
  {
    id: "puissance-4",
    name: "Puissance 4 Online",
    description: "Jeu de société multijoueur en temps réel.",
    longDescription: "Jeu de Puissance 4 avec architecture client-serveur et peer to peer.",
    image: "/images/projects/puissance-4.webp",
    technologies: ["NextJS", "NodeJS", "Socket.io"],
    category: "side-project",
    github: "https://github.com/Yooo31/four-connection-p2p",
    featured: true,
    year: "2025",
    status: "completed",
    tile: "tall",
  },
  {
    id: "keep-your-room",
    name: "Keep Your Room",
    description: "SaaS de gestion de réservation de salles.",
    longDescription:
      "Application complète permettant aux utilisateurs de réserver des salles, gérer les disponibilités et administrer les plannings.",
    image: "/images/projects/keep-your-room.webp",
    technologies: ["NextJS", "Docker", "PostgreSQL"],
    category: "school",
    featured: true,
    year: "2026",
    status: "in-progress",
  },
  {
    id: "vitrine-yoan-martins",
    name: "Yoan Martins",
    description: "Mon site vitrine professionnel freelance.",
    longDescription:
      "Site vitrine personnel présentant mes compétences, projets et services de développeur.",
    image: "/og-image.webp",
    technologies: ["NextJS", "TypeScript", "Tailwind"],
    category: "professional",
    featured: true,
    github: "https://github.com/Yooo31/vitrine-yoan-martins",
    url: "https://yoanmartins.fr",
    year: "2026",
    status: "completed",
    imageFit: "contain",
    imageBg: "#0e0f20",
  },
  {
    id: "demo-tapissier",
    name: "L’Atelier Capiton",
    description: "Concept de site vitrine pour un tapissier d’ameublement.",
    longDescription:
      "Concept de site vitrine pour une entreprise fictive : nuancier interactif, galerie avant/après et demande de devis avec photo.",
    image: "/images/projects/demo-tapissier.webp",
    url: "/demos/tapissier/",
    technologies: ["NextJS", "Tailwind", "Motion"],
    category: "side-project",
    featured: true,
    year: "2026",
    status: "completed",
    tile: "wide",
  },
  {
    id: "demo-food-truck",
    name: "Cantine Vagabonde",
    description: "Concept de site vitrine pour un food truck traiteur.",
    longDescription:
      "Concept de site vitrine pour une entreprise fictive : photos déplaçables, cartes de formules en 3D et demande de privatisation.",
    image: "/images/projects/demo-food-truck.webp",
    url: "/demos/food-truck/",
    technologies: ["NextJS", "Tailwind", "Motion"],
    category: "side-project",
    featured: true,
    year: "2026",
    status: "completed",
    tile: "wide",
  },
  {
    id: "casa-catherina",
    name: "Casa Catherina",
    description: "Prise de commande digitale pour restaurant.",
    longDescription:
      "Application tablette pour la prise de commande en salle et back-office cuisine.",
    image: "/images/projects/domaine-miraclette.webp",
    technologies: ["React", "Node.js", "D3.js"],
    category: "side-project",
    featured: true,
    github: "https://github.com/Yooo31/AzioneCatherina",
    year: "2024",
    status: "archived",
  },
  {
    id: "vulpina",
    name: "Vulpina",
    description: "Landing page immersive pour jeu indé.",
    longDescription:
      "Site vitrine pour le jeu vidéo Vulpina, avec animations GSAP et intégration multimédia.",
    image: "/images/projects/vulpina.webp",
    url: "https://vulpina.vercel.app",
    github: "https://github.com/Vulpina/Website",
    technologies: ["NextJS", "GSAP", "Tailwind"],
    category: "school",
    featured: true,
    year: "2026",
    status: "in-progress",
    imageFit: "contain",
    imageBg: "#ffffff",
    tile: "wide",
  },
  {
    id: "portfolio",
    name: "Portfolio V2",
    description: "Ce site web, open-source.",
    longDescription: "Mon portfolio personnel, axé sur la performance, le SEO et les animations.",
    image: "/images/projects/portfolio.webp",
    url: "https://portfolio.yoanmartins.fr",
    github: "https://github.com/Yooo31/portfolio-yoan-martins",
    technologies: ["NextJS", "React Server Components"],
    category: "side-project",
    featured: true,
    year: "2024",
    status: "in-progress",
    imageFit: "contain",
    imageBg: "#0e0f20",
  },
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)
