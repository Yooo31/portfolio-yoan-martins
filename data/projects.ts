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
  category: "professional" | "side-project" | "open-source"
  featured: boolean
  size: "small" | "medium" | "large"
  color?: string
  icon?: string
  year: string
  status?: "completed" | "in-progress" | "archived"
}

export const projects: Project[] = [
  {
    id: "safti-dashboard",
    name: "Safti Internal Dashboard",
    description: "Refonte UX/UI complète du back-office.",
    longDescription:
      "Refonte UX/UI complète du back-office. Architecture modulaire pour 5000+ utilisateurs quotidiens.",
    image: "/images/projects/kipsoft.png",
    logo: "/images/projects/kipsoft-logo.png",
    technologies: ["React", "Redux", "Symfony API"],
    category: "professional",
    featured: true,
    size: "large",
    icon: "home",
    color: "red",
    year: "2024",
    status: "in-progress",
  },
  {
    id: "shop-api",
    name: "Shop API",
    description: "Microservices architecture",
    longDescription:
      "Architecture microservices complète pour une plateforme e-commerce haute disponibilité.",
    image: "/images/projects/kpulse.png",
    logo: "/images/projects/kpulse-logo.png",
    technologies: ["NestJS", "Redis", "PostgreSQL"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "cart",
    year: "2024",
    status: "completed",
  },
  {
    id: "eco-tracker",
    name: "EcoTracker App",
    description: "Suivi carbone personnel",
    longDescription:
      "Application mobile de suivi de l'empreinte carbone personnelle avec recommandations IA.",
    image: "/images/projects/geosquare.png",
    logo: "/images/projects/geosquare-logo.png",
    technologies: ["React Native", "Node.js", "MongoDB"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "smartphone",
    year: "2023",
    status: "completed",
  },
  {
    id: "flux-ui",
    name: "Flux UI Kit",
    description: "Bibliothèque de composants documentée.",
    longDescription:
      "Design system complet avec plus de 50 composants React documentés dans Storybook.",
    image: "/images/projects/klipp.png",
    logo: "/images/projects/klipp-logo.png",
    technologies: ["Storybook", "Tailwind", "TypeScript"],
    category: "open-source",
    featured: true,
    size: "medium",
    icon: "palette",
    color: "indigo",
    year: "2024",
    status: "in-progress",
  },
  {
    id: "finance-dash",
    name: "Finance Dashboard",
    description: "Tableau de bord financier interactif",
    longDescription:
      "Dashboard de visualisation de données financières avec graphiques interactifs D3.js.",
    image: "/images/projects/yournews.png",
    logo: "/images/projects/yournews-logo.png",
    technologies: ["D3.js", "React", "Node.js"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "chart",
    color: "emerald",
    year: "2023",
    status: "completed",
  },
  {
    id: "saas-landing",
    name: "SaaS Landing",
    description: "Landing page moderne et animée",
    longDescription:
      "Template de landing page SaaS avec animations fluides et optimisé pour la conversion.",
    image: "/images/projects/todo.png",
    logo: "/images/projects/todo-logo.png",
    technologies: ["Next.js", "Framer Motion", "Tailwind"],
    category: "side-project",
    featured: true,
    size: "small",
    icon: "laptop",
    color: "blue",
    year: "2024",
    status: "completed",
  },
  {
    id: "taskflow-pro",
    name: "TaskFlow Pro",
    description: "Gestionnaire de tâches collaboratif",
    longDescription: "Gestionnaire de tâches collaboratif temps réel avec WebSockets.",
    image: "/images/projects/rcsp.png",
    logo: "/images/projects/rcsp-logo.png",
    technologies: ["Socket.io", "Vue.js", "Firebase"],
    category: "side-project",
    featured: true,
    size: "medium",
    icon: "tasks",
    year: "2023",
    status: "completed",
  },
  {
    id: "portfolio",
    name: "Portfolio Personnel",
    description: "Ce portfolio !",
    longDescription:
      "Portfolio personnel développé avec Next.js, Tailwind CSS et optimisé pour les performances.",
    image: "/images/projects/losbourriquots.png",
    logo: "/images/projects/losbourriquots-logo.png",
    url: "https://portfolio.yoanmartins.fr",
    github: "https://github.com/Yooo31/portfolio-yoan-martins",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
    category: "side-project",
    featured: false,
    size: "small",
    icon: "user",
    year: "2024",
    status: "in-progress",
  },
]

export const getFeaturedProjects = () => projects.filter(p => p.featured)
export const getProjectsByCategory = (category: Project["category"]) =>
  projects.filter(p => p.category === category)
