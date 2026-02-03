export interface TechStack {
  category: string
  icon: string
  technologies: string[]
}

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    icon: "monitor",
    technologies: ["React", "Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend & Data",
    icon: "server",
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    category: "Outils",
    icon: "settings",
    technologies: ["Docker", "Git/GitHub", "Figma", "Vercel"],
  },
]
