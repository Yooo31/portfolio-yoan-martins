import { Check, Gauge, LayoutTemplate, Layers } from "lucide-react"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { Spotlight } from "@/components/motion/spotlight"
import { SectionHeading } from "@/components/ui/section-heading"

const services = [
  {
    icon: LayoutTemplate,
    title: "Sites vitrines & landing pages",
    description:
      "Un site rapide, bien référencé et pensé pour transformer vos visiteurs en clients.",
    points: [
      "Design sur mesure et responsive",
      "SEO technique et performances",
      "Mise en ligne et suivi",
    ],
  },
  {
    icon: Layers,
    title: "Applications web & SaaS",
    description: "Des outils métier robustes, de la base de données jusqu'à l'interface.",
    points: [
      "Architecture Next.js et Node.js",
      "Authentification, back-office, API",
      "Tests automatisés et déploiement continu",
    ],
  },
  {
    icon: Gauge,
    title: "Refonte & optimisation",
    description:
      "Votre site existe déjà ? Je le rends plus rapide, plus accessible et plus visible.",
    points: [
      "Audit Lighthouse et Core Web Vitals",
      "Accessibilité (RGAA / WCAG)",
      "Modernisation du code existant",
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="Ce que je peux faire pour vous"
          description="Un interlocuteur unique, du premier échange à la mise en production."
        />
      </Reveal>

      <Stagger className="grid gap-6 md:grid-cols-3">
        {services.map(service => (
          <StaggerItem key={service.title} className="h-full">
            <Spotlight className="group h-full rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:shadow-black/40">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mb-6 leading-relaxed text-zinc-600 dark:text-zinc-400">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.points.map(point => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </Spotlight>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
