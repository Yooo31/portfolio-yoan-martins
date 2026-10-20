import { Briefcase, GraduationCap } from "lucide-react"
import { experiences } from "@/data/experiences"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const values = [
  {
    title: "Rigueur",
    text: "Un code structuré, testé et documenté, qui reste maintenable dans la durée.",
  },
  {
    title: "Performance",
    text: "Des pages rapides et bien référencées, mesurées à chaque mise en ligne.",
  },
  {
    title: "Proximité",
    text: "Un échange direct et transparent, du cadrage à la mise en production.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <Reveal direction="right" className="space-y-6">
          <SectionHeading
            eyebrow="Parcours"
            title="Construire avec rigueur."
            align="left"
            className="mb-8"
          />
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            Le code est pour moi une structure logique avant d&apos;être une suite de caractères.
            Mon approche est façonnée par une volonté simple : créer des systèmes qui durent et qui
            évoluent avec vos besoins.
          </p>
          <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
            Mon parcours en alternance m&apos;a permis d&apos;explorer toute la chaîne de valeur
            d&apos;un produit numérique, de la conception de l&apos;architecture à
            l&apos;intégration finale. Aujourd&apos;hui, je combine cette vision technique avec une
            vraie sensibilité pour les interfaces fluides et agréables.
          </p>

          <dl className="grid gap-4 pt-4 sm:grid-cols-3 md:grid-cols-1">
            {values.map(value => (
              <div
                key={value.title}
                className="rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                <dt className="text-gradient font-semibold">{value.title}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {value.text}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="relative">
          {/* Ligne verticale de la frise */}
          <div
            className="absolute top-2 bottom-2 left-5 w-px bg-linear-to-b from-brand-cyan via-brand-violet to-transparent"
            aria-hidden="true"
          />
          <ol className="relative space-y-6" aria-label="Parcours professionnel et académique">
            {experiences.map((exp, index) => {
              const Icon = exp.type === "work" ? Briefcase : GraduationCap
              return (
                <li key={exp.id} className="relative pl-14">
                  <Reveal delay={index * 0.08}>
                    <div
                      className={cn(
                        "absolute top-4 left-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white dark:border-zinc-950",
                        exp.isCurrent
                          ? "bg-brand-gradient text-white"
                          : "bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                      )}
                      aria-hidden="true"
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-zinc-900/5 dark:border-zinc-800 dark:bg-zinc-900/40">
                      <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                          {exp.company}
                        </h3>
                        {exp.isCurrent ? (
                          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                            Depuis {exp.startDate}
                          </span>
                        ) : (
                          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                            {exp.startDate} – {exp.endDate}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        {exp.role}
                      </p>
                      {exp.description && (
                        <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {exp.description}
                        </p>
                      )}
                    </div>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
