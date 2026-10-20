"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { ArrowUpRight, Code2, Hammer } from "lucide-react"
import { getFeaturedProjects, type Project } from "@/data/projects"
import { Github } from "@/components/ui/brand-icons"
import { Reveal } from "@/components/motion/reveal"
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

function ProjectCard({ project }: { project: Project }) {
  const link = primaryLink(project)
  const showGithub = project.github && link?.href !== project.github

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white transition-[translate,box-shadow,border-color] duration-300 dark:border-zinc-800 dark:bg-zinc-900/40",
        link &&
          "hover:-translate-y-1 hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-900/10 focus-within:ring-2 focus-within:ring-violet-500 dark:hover:border-zinc-700 dark:hover:shadow-black/50",
        project.size === "large" && "md:col-span-2"
      )}
    >
      <div
        className={cn("relative overflow-hidden bg-zinc-100 dark:bg-zinc-800", "h-52 sm:h-60")}
        style={project.imageBg ? { background: project.imageBg } : undefined}
      >
        <Image
          src={project.image}
          alt=""
          fill
          sizes={
            project.size === "large"
              ? "(max-width: 768px) 100vw, 760px"
              : "(max-width: 768px) 100vw, 380px"
          }
          className={cn(
            "transition-transform duration-700 ease-out group-hover:scale-105",
            project.imageFit === "contain" ? "object-contain p-8" : "object-cover object-top"
          )}
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm backdrop-blur dark:bg-zinc-950/80 dark:text-zinc-300">
            {categoryLabels[project.category]}
          </span>
          {project.status === "in-progress" && (
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-100/95 px-2.5 py-1 text-xs font-medium text-amber-900 shadow-sm backdrop-blur dark:bg-amber-950/90 dark:text-amber-200">
              <Hammer className="h-3 w-3" aria-hidden="true" />
              En cours
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
            {link ? (
              <a
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                // Le lien couvre toute la carte (pseudo-élément) : elle est cliquable partout.
                className="outline-none after:absolute after:inset-0 after:content-['']"
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <span className="shrink-0 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            {project.year}
          </span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.longDescription ?? project.description}
        </p>

        <ul className="mb-6 flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map(tech => (
            <li
              key={tech}
              className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-xs text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between gap-4">
          {link ? (
            <span
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white"
              aria-hidden="true"
            >
              {link.label === "Voir le code" ? <Code2 className="h-4 w-4" /> : null}
              {link.label}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          ) : (
            <span className="text-sm text-zinc-500 dark:text-zinc-400">Bientôt en ligne</span>
          )}

          {showGithub && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              // Au-dessus du lien principal qui couvre la carte
              className="relative z-10 inline-flex items-center gap-1.5 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-white dark:hover:text-white"
              aria-label={`Code source de ${project.name} sur GitHub`}
            >
              <Github className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
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
        <motion.div layout className="grid gap-6 md:grid-cols-2 md:grid-flow-dense lg:grid-cols-3">
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
