"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRight, Code2, Hammer } from "lucide-react"
import { getFeaturedProjects, type Project } from "@/data/projects"
import { Github } from "@/components/ui/brand-icons"
import { Reveal } from "@/components/motion/reveal"
import { Tilt } from "@/components/motion/tilt"
import { SectionHeading } from "@/components/ui/section-heading"
import { cn } from "@/lib/utils"

const categoryLabels: Record<Project["category"], string> = {
  professional: "Projet client",
  "side-project": "Side-project",
  school: "Projet d'école",
  "open-source": "Open source",
}

const filterLabels: Record<Project["category"], string> = {
  professional: "Clients",
  "side-project": "Side-projects",
  school: "École",
  "open-source": "Open source",
}

type Filter = "all" | Project["category"]

/** Lien principal de la carte : la démo, le site en ligne, ou à défaut le code. */
export function primaryLink(project: Project) {
  if (project.url?.startsWith("/"))
    return { href: project.url, label: "Voir la démo", external: false }
  if (project.url) return { href: project.url, label: "Voir le site", external: true }
  if (project.github) return { href: project.github, label: "Voir le code", external: true }
  return null
}

// Place de chaque forme de tuile dans la mosaïque (1 colonne sur mobile, 2 puis 4 au-delà)
const tileClasses: Record<NonNullable<Project["tile"]>, string> = {
  feature: "md:col-span-2 md:row-span-2",
  tall: "md:row-span-2",
  wide: "md:col-span-2",
  square: "",
}

function ProjectCard({ project }: { project: Project }) {
  const link = primaryLink(project)
  const showGithub = project.github && link?.href !== project.github
  const tile = project.tile ?? "square"
  const isBig = tile === "feature" || tile === "tall"

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={cn("min-h-72", tileClasses[tile])}
    >
      <Tilt
        className={cn(
          "group relative isolate h-full overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 shadow-sm dark:border-zinc-800",
          link &&
            "hover:shadow-2xl hover:shadow-violet-500/10 focus-within:ring-2 focus-within:ring-violet-500"
        )}
      >
        {/* Image plein cadre */}
        <div
          className="absolute inset-0 -z-10"
          style={project.imageBg ? { background: project.imageBg } : undefined}
        >
          <Image
            src={project.image}
            alt=""
            fill
            sizes={
              tile === "feature" || tile === "wide"
                ? "(max-width: 768px) 100vw, 50vw"
                : "(max-width: 768px) 100vw, 25vw"
            }
            className={cn(
              "transition-transform duration-700 ease-out group-hover:scale-105",
              project.imageFit === "contain"
                ? "object-contain p-10 pb-28"
                : tile === "wide"
                  ? "object-cover object-top"
                  : "object-cover"
            )}
          />
        </div>

        {/* Dégradé sombre : le texte reste lisible quelle que soit l'image */}
        <div
          className={cn(
            "absolute inset-0 -z-10 bg-linear-to-t to-transparent transition-colors duration-500",
            // Petites tuiles : le texte occupe plus de place, le dégradé monte plus haut
            isBig || tile === "wide"
              ? "from-zinc-950/95 via-zinc-950/55 group-hover:via-zinc-950/70"
              : "from-zinc-950 via-zinc-950/85 via-45% group-hover:via-zinc-950/90"
          )}
          aria-hidden="true"
        />

        <div className="flex h-full flex-col justify-between p-5 sm:p-6">
          <div className="flex items-start justify-between gap-2">
            <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-zinc-800 shadow-sm backdrop-blur">
              {categoryLabels[project.category]}
            </span>
            {project.status === "in-progress" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-100/95 px-2.5 py-1 text-xs font-medium text-amber-900 shadow-sm backdrop-blur">
                <Hammer className="h-3 w-3" aria-hidden="true" />
                En cours
              </span>
            )}
          </div>

          {/* Pas de transform ici : il limiterait la zone cliquable du lien étiré à ce bloc */}
          <div>
            <div className="mb-1 flex items-baseline justify-between gap-4">
              <h3
                className={cn(
                  "font-semibold tracking-tight text-white",
                  tile === "feature" ? "text-2xl sm:text-3xl" : "text-lg"
                )}
              >
                {link ? (
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    // Le lien couvre toute la tuile (pseudo-élément) : elle est cliquable partout.
                    className="outline-none after:absolute after:inset-0 after:content-['']"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <span className="shrink-0 font-mono text-xs text-zinc-300">{project.year}</span>
            </div>

            <p
              className={cn(
                "text-sm leading-relaxed text-zinc-200",
                isBig ? "max-w-md" : "line-clamp-2"
              )}
            >
              {isBig ? (project.longDescription ?? project.description) : project.description}
            </p>

            {/* Technologies : visibles d'emblée sur les grandes tuiles, au survol sur les autres */}
            <ul
              className={cn(
                "mt-3 flex flex-wrap gap-1.5",
                !isBig &&
                  "md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-16 md:group-hover:opacity-100"
              )}
              aria-label="Technologies"
            >
              {project.technologies.map(tech => (
                <li
                  key={tech}
                  className="rounded-md border border-white/15 bg-white/10 px-2 py-0.5 text-xs text-zinc-100 backdrop-blur"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex min-h-8 items-center justify-between gap-4">
              {link ? (
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white"
                  aria-hidden="true"
                >
                  {link.label === "Voir le code" ? <Code2 className="h-4 w-4" /> : null}
                  {link.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              ) : (
                <span className="text-sm text-zinc-300">Bientôt en ligne</span>
              )}

              {showGithub && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  // Au-dessus du lien principal qui couvre la tuile
                  className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur transition-colors hover:bg-white hover:text-zinc-900"
                  aria-label={`Code source de ${project.name} sur GitHub`}
                >
                  <Github className="h-3.5 w-3.5" />
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.article>
  )
}

export function ProjectsSection() {
  const projects = getFeaturedProjects()
  const categories = [...new Set(projects.map(project => project.category))]
  const [filter, setFilter] = useState<Filter>("all")
  const visible = filter === "all" ? projects : projects.filter(p => p.category === filter)

  const filters: { value: Filter; label: string; count: number }[] = [
    { value: "all", label: "Tous", count: projects.length },
    ...categories.map(category => ({
      value: category,
      label: filterLabels[category],
      count: projects.filter(p => p.category === category).length,
    })),
  ]

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Réalisations"
          title="Des projets concrets, en ligne"
          description="Sites clients, applications et concepts : une sélection de mes travaux récents."
        />
      </Reveal>

      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filtrer les réalisations"
      >
        {filters.map(item => {
          const isActive = filter === item.value
          return (
            <button
              key={item.value}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(item.value)}
              className={cn(
                "relative isolate rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "text-white dark:text-zinc-900"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-zinc-900 dark:bg-white"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              {item.label}
              <span className="ml-1.5 text-xs opacity-60">{item.count}</span>
            </button>
          )
        })}
      </div>

      <Reveal>
        <motion.div
          layout
          className="grid grid-flow-row-dense auto-rows-[18rem] gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Reveal>
    </section>
  )
}
