export interface Experience {
  id: string
  company: string
  role: string
  description?: string
  startDate: string
  endDate?: string
  isCurrent: boolean
  type: "work" | "education"
}

export const experiences: Experience[] = [
  {
    id: "safti",
    company: "Safti",
    role: "Alternant Développeur Full Stack",
    description:
      "Optimisation des outils internes et refonte de l'architecture frontend. Travail sur la performance et la scalabilité des applications métiers.",
    startDate: "2023",
    isCurrent: true,
    type: "work",
  },
  {
    id: "ynov",
    company: "Ynov Campus",
    role: "Master 2 Expert Informatique",
    startDate: "2023",
    endDate: "2025",
    isCurrent: false,
    type: "education",
  },
  {
    id: "kipsoft",
    company: "Kipsoft",
    role: "Alternant Développeur Web",
    description:
      "Développement de modules spécifiques et maintenance corrective sur des solutions logicielles existantes.",
    startDate: "2022",
    endDate: "2023",
    isCurrent: false,
    type: "work",
  },
  {
    id: "esgi",
    company: "ESGI",
    role: "Bachelor Ingénierie du Web",
    startDate: "2020",
    endDate: "2023",
    isCurrent: false,
    type: "education",
  },
]
