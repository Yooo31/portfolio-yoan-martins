export interface Project {
  id: string
  name: string
  description: string
  longDescription?: string
  image: string
  logo?: string
  url?: string
  github?: string
  technologies: string[]
  category: "professional" | "school" | "side-project" | "open-source"
  featured: boolean
  size: "small" | "medium" | "large"
  color?: string
  icon?: string
  year: string
  status?: "completed" | "in-progress" | "archived"
  fontColor?: "dark" | "light"
}

export const projects: Project[] = [
  {
    id: "entreprise-png",
    name: "Entreprise PNG",
    description: "Site vitrine pour une entreprise de BTP.",
    longDescription:
      "Site web moderne et responsive pour promouvoir les services de la société Entreprise PNG. Optimisé SEO et performances.",
    image: "/images/projects/logo-entreprise-png.png",
    logo: "/images/projects/logo-entreprise-png.png",
    url: "https://entreprise-png.fr",
    github: "https://github.com/Yooo31/entreprise-png",
    technologies: ["Astro.js", "Tailwind", "ShadCn"],
    category: "professional",
    featured: true,
    size: "large",
    icon: "building",
    color: "blue",
    year: "2026",
    status: "completed",
    fontColor: "dark",
  },
  {
    id: "puissance-4",
    name: "Puissance 4 Online",
    description: "Jeu de société multijoueur en temps réel.",
    longDescription: "Jeu de Puissance 4 avec architecture client-serveur et peer to peer.",
    image: "/images/projects/puissance-4.png",
    logo: "/images/projects/puissance-4.png",
    technologies: ["NextJS", "NodeJS", "Socket.io"],
    category: "side-project",
    github: "https://github.com/Yooo31/four-connection-p2p",
    featured: true,
    size: "small",
    icon: "gamepad",
    color: "indigo",
    year: "2025",
    status: "completed",
    fontColor: "light",
  },
  {
    id: "keep-your-room",
    name: "Keep Your Room",
    description: "SaaS de gestion de réservation de salles.",
    longDescription:
      "Application complète permettant aux utilisateurs de réserver des salles, gérer les disponibilités et administrer les plannings.",
    image: "/images/projects/keep-your-room.png",
    logo: "/images/projects/keep-your-room.png",
    technologies: ["NextJS", "Docker", "PostgreSQL"],
    category: "school",
    featured: true,
    size: "small",
    icon: "calendar",
    color: "blue",
    year: "2026",
    status: "in-progress",
    fontColor: "dark",
  },
  {
    id: "vitrine-yoan-martins",
    name: "Yoan Martins",
    description: "Mon site vitrine professionnel freelance.",
    longDescription:
      "Site vitrine personnel présentant mes compétences, projets et services de développeur.",
    image: "/og-image.png",
    logo: "/og-image.png",
    technologies: ["NextJS", "TypeScript", "Tailwind"],
    category: "professional",
    featured: true,
    size: "medium",
    github: "https://github.com/Yooo31/vitrine-yoan-martins",
    url: "https://yoanmartins.fr",
    icon: "briefcase",
    color: "indigo",
    year: "2026",
    status: "completed",
    fontColor: "light",
  },
  {
    id: "casa-catherina",
    name: "Casa Catherina",
    description: "Prise de commande digitale pour restaurant.",
    longDescription:
      "Application tablette pour la prise de commande en salle et back-office cuisine.",
    image: "/images/projects/domaine-miraclette.jpg",
    logo: "/images/projects/domaine-miraclette.jpg",
    technologies: ["React", "Node.js", "D3.js"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "utensils",
    color: "emerald",
    github: "https://github.com/Yooo31/AzioneCatherina",
    year: "2024",
    status: "archived",
    fontColor: "light",
  },
  {
    id: "vulpina",
    name: "Vulpina",
    description: "Landing page immersive pour jeu indé.",
    longDescription:
      "Site vitrine pour le jeu vidéo Vulpina, avec animations GSAP et intégration multimédia.",
    image: "/images/projects/vulpina.png",
    logo: "/images/projects/vulpina.png",
    url: "https://vulpina.vercel.app",
    github: "https://github.com/Vulpina/Website",
    technologies: ["NextJS", "GSAP", "Tailwind"],
    category: "school",
    featured: true,
    size: "medium",
    icon: "laptop",
    color: "indigo",
    year: "2026",
    status: "in-progress",
    fontColor: "dark",
  },
  {
    id: "portfolio",
    name: "Portfolio V2",
    description: "Ce site web, open-source.",
    longDescription: "Mon portfolio personnel actuel, axé sur la performance et le design bento.",
    image: "/icon-512.png",
    logo: "/icon-512.png",
    url: "https://portfolio.yoanmartins.fr",
    github: "https://github.com/Yooo31/portfolio-yoan-martins",
    technologies: ["NextJS", "React Server Components"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "user",
    year: "2024",
    status: "in-progress",
    fontColor: "light",
  },
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)
