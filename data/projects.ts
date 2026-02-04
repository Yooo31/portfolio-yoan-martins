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
}

export const projects: Project[] = [
  {
    id: "entreprise-png",
    name: "Site Vitrine Entreprise PNG",
    description: "Création d'un site vitrine pour une entreprise de services de BTP.",
    longDescription:
      "Site web moderne et responsive développé pour promouvoir les services de la société Entreprise PNG. Site statique optimisé pour le SEO et les performances.",
    image: "/images/projects/kipsoft.png",
    logo: "/images/projects/kipsoft-logo.png",
    url: "https://entreprise-png.fr",
    github: "https://github.com/Yooo31/entreprise-png",
    technologies: ["Astro.js", "Tailwind CSS", "ShadCn"],
    category: "professional",
    featured: true,
    size: "large",
    icon: "home",
    color: "blue",
    year: "2026",
    status: "completed",
  },
  {
    id: "puissance-4",
    name: "Puissance 4",
    description: "Jeu de société en ligne de Puissance 4 avec mode multijoueur.",
    longDescription:
      "Jeu de société en ligne de Puissance 4 développé avec une architecture client-serveur. Le jeu propose un mode multijoueur en websocket",
    image: "/images/projects/kpulse.png",
    logo: "/images/projects/kpulse-logo.png",
    technologies: ["NextJS", "NodeJS", "Socket.io", "Tailwind"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "cart",
    year: "2025",
    status: "completed",
  },
  {
    id: "keep-your-room",
    name: "Keep Your Room",
    description: "Application fin de mastère pour la gestion de réservation de salles.",
    longDescription:
      "Application de gestion de réservation de salles développée dans le cadre de mon projet de fin d'études. L'application permet aux utilisateurs de réserver des salles, de gérer les disponibilités et d'administrer les réservations via un back-office.",
    image: "/images/projects/geosquare.png",
    logo: "/images/projects/geosquare-logo.png",
    technologies: ["NextJS", "Docker", "PostgreSQL", "Tailwind", "ShadCn"],
    category: "school",
    featured: true,
    size: "small",
    icon: "smartphone",
    color: "blue",
    year: "2026",
    status: "in-progress",
  },
  {
    id: "vitrine-yoan-martins",
    name: "Site Vitrine Yoan Martins",
    description: "Mon site vitrine professionnel",
    longDescription:
      "Site web vitrine personnel développé pour présenter mes compétences, projets et services en tant que développeur web.",
    image: "/images/projects/klipp.png",
    logo: "/images/projects/klipp-logo.png",
    technologies: ["NextJS", "TypeScript", "Tailwind", "ShadCn"],
    category: "professional",
    featured: true,
    size: "medium",
    icon: "palette",
    color: "indigo",
    year: "2024",
    status: "completed",
  },
  {
    id: "casa-catherina",
    name: "Casa Catherina",
    description: "Une application web de prise de commande pour un restaurant.",
    longDescription:
      "Application de prise de commande pour le restaurant Casa Catherina, avec interface client et back-office pour la gestion des commandes.",
    image: "/images/projects/yournews.png",
    logo: "/images/projects/yournews-logo.png",
    technologies: ["D3.js", "React", "Node.js"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "chart",
    color: "emerald",
    year: "2023",
    status: "archived",
  },
  {
    id: "vulpina",
    name: "Vulpina",
    description: "Site moderne de présentation du jeu Vulpina.",
    longDescription:
      "Site web vitrine pour le jeu vidéo indépendant Vulpina, avec animations et intégration de médias.",
    image: "/images/projects/todo.png",
    logo: "/images/projects/todo-logo.png",
    url: "https://vulpina.vercel.app",
    github: "https://github.com/Vulpina/Website",
    technologies: ["NextJS", "Tailwind", "gsap"],
    category: "school",
    featured: true,
    size: "medium",
    icon: "laptop",
    color: "indigo",
    year: "2026",
    status: "in-progress",
  },
  {
    id: "portfolio",
    name: "Portfolio Personnel",
    description: "Ce portfolio !",
    longDescription:
      "Portfolio personnel développé avec NextJS, Tailwind CSS et optimisé pour les performances.",
    image: "/images/projects/losbourriquots.png",
    logo: "/images/projects/losbourriquots-logo.png",
    url: "https://portfolio.yoanmartins.fr",
    github: "https://github.com/Yooo31/portfolio-yoan-martins",
    technologies: ["NextJS", "Tailwind", "TypeScript"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "user",
    year: "2024",
    status: "in-progress",
  },
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter(p => p.category === category)
