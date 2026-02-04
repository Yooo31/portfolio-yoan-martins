export interface TechStack {
  category: string
  icon: string
  technologies: string[]
}

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    icon: "monitor",
    technologies: ["Next.js / React", "Astro.js", "TypeScript", "Tailwind CSS", "ShadCn"],
  },
  {
    category: "Backend & Data",
    icon: "server",
    technologies: ["Node.js", "Ruby", "PHP", "PostgreSQL", "Prisma"],
  },
  {
    category: "Outils",
    icon: "settings",
    technologies: ["Docker", "Git/GitHub", "Figma", "Vercel", "Supabase"],
  },
]
