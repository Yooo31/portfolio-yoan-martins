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
    name: "Entreprise PNG", // Raccourci pour le titre
    description: "Site vitrine pour une entreprise de BTP.",
    longDescription:
      "Site web moderne et responsive pour promouvoir les services de la société Entreprise PNG. Optimisé SEO et performances.",
    image: "/images/projects/kipsoft.png",
    logo: "/images/projects/kipsoft-logo.png",
    url: "https://entreprise-png.fr",
    github: "https://github.com/Yooo31/entreprise-png",
    technologies: ["Astro.js", "Tailwind", "ShadCn"],
    category: "professional",
    featured: true,
    size: "large",
    icon: "building", // Changé de home à building
    color: "blue",
    year: "2026",
    status: "completed",
  },
  {
    id: "puissance-4",
    name: "Puissance 4 Online",
    description: "Jeu de société multijoueur en temps réel.",
    longDescription:
      "Jeu de Puissance 4 avec architecture client-serveur et websockets pour des parties endiablées.",
    image: "/images/projects/kpulse.png",
    logo: "/images/projects/kpulse-logo.png",
    technologies: ["NextJS", "NodeJS", "Socket.io"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "gamepad", // Changé de cart à gamepad
    color: "indigo",
    year: "2025",
    status: "completed",
  },
  {
    id: "keep-your-room",
    name: "Keep Your Room",
    description: "SaaS de gestion de réservation de salles.",
    longDescription:
      "Application complète permettant aux utilisateurs de réserver des salles, gérer les disponibilités et administrer les plannings.",
    image: "/images/projects/geosquare.png",
    logo: "/images/projects/geosquare-logo.png",
    technologies: ["NextJS", "Docker", "PostgreSQL"],
    category: "school",
    featured: true,
    size: "small",
    icon: "calendar", // Changé de smartphone à calendar
    color: "blue",
    year: "2026",
    status: "in-progress",
  },
  {
    id: "vitrine-yoan-martins",
    name: "Yoan Martins",
    description: "Mon site vitrine professionnel freelance.",
    longDescription:
      "Site vitrine personnel présentant mes compétences, projets et services de développeur.",
    image: "/images/projects/klipp.png",
    logo: "/images/projects/klipp-logo.png",
    technologies: ["NextJS", "TypeScript", "Tailwind"],
    category: "professional",
    featured: true,
    size: "medium",
    icon: "briefcase", // Changé de palette à briefcase
    color: "indigo",
    year: "2024",
    status: "completed",
  },
  {
    id: "casa-catherina",
    name: "Casa Catherina",
    description: "Prise de commande digitale pour restaurant.",
    longDescription:
      "Application tablette pour la prise de commande en salle et back-office cuisine.",
    image: "/images/projects/yournews.png",
    logo: "/images/projects/yournews-logo.png",
    technologies: ["React", "Node.js", "D3.js"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "utensils", // Changé de chart à utensils
    color: "emerald",
    year: "2023",
    status: "archived",
  },
  {
    id: "vulpina",
    name: "Vulpina",
    description: "Landing page immersive pour jeu indé.",
    longDescription:
      "Site vitrine pour le jeu vidéo Vulpina, avec animations GSAP et intégration multimédia.",
    image: "/images/projects/todo.png",
    logo: "/images/projects/todo-logo.png",
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
  },
  {
    id: "portfolio",
    name: "Portfolio V2",
    description: "Ce site web, open-source.",
    longDescription: "Mon portfolio personnel actuel, axé sur la performance et le design bento.",
    image: "/images/projects/losbourriquots.png",
    logo: "/images/projects/losbourriquots-logo.png",
    url: "https://portfolio.yoanmartins.fr",
    github: "https://github.com/Yooo31/portfolio-yoan-martins",
    technologies: ["NextJS", "React Server Components"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "user",
    year: "2024",
    status: "in-progress",
  },
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)
