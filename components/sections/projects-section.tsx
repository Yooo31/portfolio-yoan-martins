import { getFeaturedProjects, type Project } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import {
  Home,
  ShoppingCart,
  Smartphone,
  Palette,
  TrendingUp,
  Laptop,
  ListTodo,
  ArrowUpRight,
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="w-6 h-6" />,
  cart: <ShoppingCart className="w-10 h-10" />,
  smartphone: <Smartphone className="w-10 h-10" />,
  palette: <Palette className="w-6 h-6" />,
  chart: <TrendingUp className="w-4 h-4" />,
  laptop: <Laptop className="w-4 h-4" />,
  tasks: <ListTodo className="w-6 h-6" />,
}

const colorMap: Record<string, string> = {
  red: "text-red-500",
  indigo: "text-indigo-500",
  emerald: "text-emerald-600 dark:text-emerald-400",
  blue: "text-blue-600 dark:text-blue-400",
}

function ProjectCardLarge({ project }: { project: Project }) {
  return (
    <article className="bento-card relative group col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <div
        className="absolute inset-0 bg-linear-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 transition-transform duration-700 group-hover:scale-105"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-black/20 dark:group-hover:bg-black/50 transition-colors duration-500"
        aria-hidden="true"
      />

      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div
            className={cn(
              "w-12 h-12 bg-white dark:bg-black/50 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-sm",
              project.color ? colorMap[project.color] : "text-zinc-600"
            )}
          >
            {project.icon && iconMap[project.icon]}
          </div>
          <ArrowUpRight
            className="text-zinc-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/50 dark:bg-black/50 rounded-full p-2 backdrop-blur-md w-8 h-8"
            aria-hidden="true"
          />
        </div>

        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-2">
            {project.name}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
            {project.longDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
            {project.technologies.map(tech => (
              <Badge key={tech} variant="glass">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectCardSmall({ project }: { project: Project }) {
  const isDark = project.icon === "smartphone"

  return (
    <article
      className={cn(
        "bento-card relative group col-span-1 overflow-hidden rounded-3xl border",
        isDark
          ? "bg-zinc-900 dark:bg-black border-zinc-800 dark:border-zinc-800"
          : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
      )}
    >
      {project.icon && !isDark && (
        <div
          className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-10 dark:opacity-20 transition-opacity duration-500"
          aria-hidden="true"
        >
          <div className="text-zinc-300 dark:text-zinc-700">{iconMap[project.icon]}</div>
        </div>
      )}

      {isDark && project.icon && (
        <div
          className="absolute top-0 right-0 p-6 text-zinc-700 dark:text-zinc-800"
          aria-hidden="true"
        >
          {iconMap[project.icon]}
        </div>
      )}

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3
          className={cn(
            "font-medium mb-1",
            isDark ? "text-white" : "text-zinc-900 dark:text-white"
          )}
        >
          {project.name}
        </h3>
        <p
          className={cn(
            "text-xs mb-3",
            isDark ? "text-zinc-400" : "text-zinc-500 dark:text-zinc-400"
          )}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {project.technologies.slice(0, 2).map(tech => (
            <span
              key={tech}
              className={cn(
                "px-2 py-0.5 text-[10px] rounded",
                isDark
                  ? "bg-zinc-800 text-zinc-300 border border-zinc-700"
                  : "bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
              )}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProjectCardMedium({ project }: { project: Project }) {
  const isDesignSystem = project.icon === "palette"
  const isTask = project.icon === "tasks"

  if (isTask) {
    return (
      <article className="bento-card relative group col-span-1 sm:col-span-2 overflow-hidden rounded-3xl bg-zinc-900 dark:bg-zinc-800 text-white border border-zinc-800 dark:border-zinc-700">
        <div
          className="absolute right-0 top-0 h-full w-1/2 bg-linear-to-l from-zinc-800 to-transparent opacity-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 p-8 flex flex-col justify-center items-start z-10">
          <h3 className="text-xl font-medium mb-2">{project.name}</h3>
          <p className="text-zinc-400 text-sm mb-4 max-w-xs">
            {project.longDescription || project.description}
          </p>
          <div className="flex flex-wrap gap-2 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-black/30 rounded border border-white/10 text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    )
  }

  return (
    <article
      className={cn(
        "bento-card relative group col-span-1 sm:col-span-2 overflow-hidden rounded-3xl border",
        isDesignSystem
          ? "bg-indigo-50 dark:bg-zinc-900/50 border-indigo-100 dark:border-zinc-800"
          : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
      )}
    >
      {isDesignSystem && (
        <div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-50 dark:opacity-20 group-hover:scale-105 transition-transform duration-500"
          aria-hidden="true"
        >
          <div className="w-16 h-16 rounded-lg bg-indigo-200/50 dark:bg-indigo-500/20" />
          <div className="w-16 h-16 rounded-full bg-indigo-200/50 dark:bg-indigo-500/20" />
          <div className="w-16 h-8 rounded-full bg-indigo-200/50 dark:bg-indigo-500/20" />
        </div>
      )}

      <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
        <h3 className="font-medium text-zinc-900 dark:text-white text-lg mb-1">{project.name}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.technologies.slice(0, 2).map(tech => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-600 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProjectCardWithIcon({ project }: { project: Project }) {
  const iconBgColor =
    project.color === "emerald"
      ? "bg-emerald-100 dark:bg-emerald-900/30"
      : "bg-blue-100 dark:bg-blue-900/30"

  return (
    <article className="bento-card relative group col-span-1 overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      {project.color === "emerald" && (
        <div
          className="absolute inset-0 bg-radial-[at_top_right] from-zinc-200/50 via-transparent to-transparent dark:from-zinc-800/50"
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div
          className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center",
            iconBgColor,
            project.color ? colorMap[project.color] : "text-zinc-600"
          )}
        >
          {project.icon && iconMap[project.icon]}
        </div>
        <div>
          <h3 className="font-medium text-zinc-900 dark:text-white mb-1">{project.name}</h3>
          <div className="flex flex-wrap gap-1.5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.technologies.slice(0, 1).map(tech => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-500 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const featuredProjects = getFeaturedProjects()

  const renderProject = (project: Project) => {
    if (project.size === "large") {
      return <ProjectCardLarge key={project.id} project={project} />
    }
    if (project.size === "medium") {
      return <ProjectCardMedium key={project.id} project={project} />
    }
    if (project.icon === "chart" || project.icon === "laptop") {
      return <ProjectCardWithIcon key={project.id} project={project} />
    }
    return <ProjectCardSmall key={project.id} project={project} />
  }

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 mb-32">
      <div className="flex items-end justify-between mb-12">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Réalisations & Side-projects
        </h2>
        <span className="hidden md:inline-block text-xs font-medium text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800">
          {featuredProjects.length} Projets sélectionnés
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-4">
        {featuredProjects.map(renderProject)}
      </div>
    </section>
  )
}
