export interface Technology {
  name: string
  icon: string
}

export interface TechStack {
  category: string
  icon: string
  technologies: Technology[]
}

export const techStack: TechStack[] = [
  {
    category: "Frontend",
    icon: "monitor",
    technologies: [
      { name: "NextJS", icon: "logos:nextjs-icon" },
      { name: "Astro.js", icon: "logos:astro-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "ShadCn", icon: "simple-icons:shadcnui" },
    ],
  },
  {
    category: "Backend & Data",
    icon: "server",
    technologies: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Ruby", icon: "logos:ruby" },
      { name: "PHP", icon: "logos:php" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Prisma", icon: "logos:prisma" },
    ],
  },
  {
    category: "Outils",
    icon: "settings",
    technologies: [
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Git/GitHub", icon: "logos:github-icon" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Vercel", icon: "logos:vercel-icon" },
      { name: "Supabase", icon: "logos:supabase-icon" },
    ],
  },
]
