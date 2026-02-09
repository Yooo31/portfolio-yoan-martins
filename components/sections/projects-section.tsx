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
  Github,
  Globe,
  Gamepad2,
  Utensils,
  Building2,
  Briefcase,
  CalendarDays,
  User,
} from "lucide-react"
import Link from "next/link"

// --- Configuration des icônes et couleurs ---

const iconMap: Record<string, React.ReactNode> = {
  home: <Home className="w-6 h-6" />,
  building: <Building2 className="w-6 h-6" />,
  cart: <ShoppingCart className="w-6 h-6" />,
  smartphone: <Smartphone className="w-6 h-6" />,
  palette: <Palette className="w-6 h-6" />,
  chart: <TrendingUp className="w-4 h-4" />,
  laptop: <Laptop className="w-6 h-6" />,
  tasks: <ListTodo className="w-6 h-6" />,
  gamepad: <Gamepad2 className="w-6 h-6" />,
  utensils: <Utensils className="w-6 h-6" />,
  briefcase: <Briefcase className="w-6 h-6" />,
  calendar: <CalendarDays className="w-6 h-6" />,
  user: <User className="w-6 h-6" />,
}

const colorMap: Record<string, string> = {
  red: "text-red-500",
  indigo: "text-indigo-500",
  emerald: "text-emerald-600 dark:text-emerald-400",
  blue: "text-blue-600 dark:text-blue-400",
}

// --- Composant utilitaire pour les liens (Github / Live) ---

function ProjectLinks({ project, className }: { project: Project; className?: string }) {
  if (!project.github && !project.url) return null

  return (
    <div className={cn("flex gap-2", className)}>
      {project.github && (
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md rounded-full text-zinc-800 dark:text-zinc-200 hover:scale-110 transition-all shadow-sm"
        >
          <Github className="w-4 h-4" />
        </Link>
      )}
      {project.url && (
        <Link
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-zinc-800 dark:text-zinc-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 shadow-sm"
          title="Voir le projet en ligne"
        >
          <Globe className="w-4 h-4" />
        </Link>
      )}
    </div>
  )
}

// --- Cartes Bento ---

// Helper pour l'image de fond (DRY - Don't Repeat Yourself)
const BackgroundImage = ({ image }: { image?: string }) => {
  if (!image) return null
  return (
    <div
      className="absolute inset-0 z-0 scale-100 group-hover:scale-110 transition-all duration-700 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    />
  )
}

function ProjectCardLarge({ project, className }: { project: Project; className?: string }) {
  const textColor =
    project.fontColor === "dark"
      ? "!text-zinc-900 dark:!text-zinc-900 dark:group-hover:!text-white"
      : "!text-white group-hover:!text-zinc-900 dark:group-hover:!text-white"

  return (
    <article
      className={cn(
        "bento-card relative group col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800",
        className
      )}
    >
      <BackgroundImage image={project.image} />

      {/* Overlay visible uniquement au survol */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/95 via-zinc-100/80 to-zinc-100/60 dark:from-zinc-900/95 dark:via-zinc-900/80 dark:to-zinc-900/60 opacity-0 group-hover:opacity-100 z-10" />

      <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
        <div className="flex justify-between items-start">
          <div
            className={cn(
              "w-12 h-12 bg-white dark:bg-black/50 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-sm",
              project.color ? colorMap[project.color] : "text-zinc-600"
            )}
          >
            {project.icon && iconMap[project.icon]}
          </div>

          <span
            className={cn(
              "px-3 py-1 bg-white/50 dark:bg-black/30 backdrop-blur-md rounded-full text-xs font-medium border border-white/20 dark:border-white/10",
              textColor
            )}
          >
            {project.year}
          </span>
        </div>

        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end mb-2">
            <h3 className={cn("text-2xl font-semibold", textColor)}>{project.name}</h3>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <ProjectLinks project={project} />
            </div>
          </div>

          <p
            className={cn(
              "text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all",
              textColor
            )}
          >
            {project.longDescription || project.description}
          </p>

          <div className="flex flex-wrap gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
            {project.technologies.map(tech => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-white/70 dark:bg-zinc-800/80 hover:bg-white dark:hover:bg-zinc-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectCardSmall({ project, className }: { project: Project; className?: string }) {
  const textColor =
    project.fontColor === "dark"
      ? "!text-zinc-900 dark:!text-zinc-900 dark:group-hover:!text-white"
      : "!text-white group-hover:!text-zinc-900 dark:group-hover:!text-white"

  return (
    <article
      className={cn(
        "bento-card relative group col-span-1 overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800",
        className
      )}
    >
      {/* Image Background */}
      <BackgroundImage image={project.image} />

      {/* Overlay visible uniquement au survol */}
      <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 bg-zinc-50/80 dark:bg-zinc-900/80" />

      <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ProjectLinks project={project} />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
        <h3 className={cn("font-medium mb-1 truncate pr-8 drop-shadow-sm", textColor)}>
          {project.name}
        </h3>
        <p className={cn("text-xs mb-3 line-clamp-2", textColor)}>{project.description}</p>
        <div className="flex flex-wrap gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {project.technologies.slice(0, 2).map(tech => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] rounded border backdrop-blur-md shadow-sm bg-white/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}

function ProjectCardMedium({ project, className }: { project: Project; className?: string }) {
  const isFeatured = project.category === "professional"
  const textColor =
    project.fontColor === "dark"
      ? "!text-zinc-900 dark:!text-zinc-900 dark:group-hover:!text-white"
      : "!text-white group-hover:!text-zinc-900 dark:group-hover:!text-white"

  return (
    <article
      className={cn(
        "bento-card relative group col-span-1 sm:col-span-2 overflow-hidden rounded-3xl border",
        isFeatured
          ? "border-indigo-100 dark:border-zinc-800"
          : "border-zinc-200 dark:border-zinc-800",
        className
      )}
    >
      {/* Image Background */}
      <BackgroundImage image={project.image} />

      {/* Overlay visible uniquement au survol */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-white/20 dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-zinc-900/20 z-10 opacity-0 group-hover:opacity-100" />

      <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
        <div className="flex justify-between items-start">
          <div
            className={cn(
              "p-2 rounded-lg bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md shadow-sm",
              colorMap[project.color || "blue"]
            )}
          >
            {project.icon && iconMap[project.icon]}
          </div>
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "text-[10px] font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity bg-white/50 dark:bg-black/50 px-2 py-1 rounded-full backdrop-blur-md",
                textColor
              )}
            >
              {project.year}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ProjectLinks project={project} />
            </div>
          </div>
        </div>

        <div>
          <h3 className={cn("font-medium text-lg mb-1 drop-shadow-sm", textColor)}>
            {project.name}
          </h3>
          <p className={cn("text-sm mb-4 max-w-sm font-medium", textColor)}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
            {project.technologies.map(tech => (
              <span
                key={tech}
                className="px-2 py-1 text-[10px] bg-white/90 dark:bg-zinc-800/90 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-600 dark:text-zinc-300 shadow-sm backdrop-blur-sm"
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

function ProjectCardWithIcon({ project, className }: { project: Project; className?: string }) {
  const iconBgColor =
    project.color === "emerald"
      ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400"
      : "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"
  const textColor =
    project.fontColor === "dark"
      ? "!text-zinc-900 dark:!text-zinc-900 dark:group-hover:!text-white"
      : "!text-white group-hover:!text-zinc-900 dark:group-hover:!text-white"

  return (
    <article
      className={cn(
        "bento-card relative group col-span-1 overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800",
        className
      )}
    >
      {/* Image Background */}
      <BackgroundImage image={project.image} />

      {/* Overlay visible uniquement au survol */}
      <div className="absolute inset-0 bg-white/80 dark:bg-zinc-900/80 z-10 opacity-0 group-hover:opacity-100" />

      <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ProjectLinks project={project} />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-between z-20">
        <div
          className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 duration-300 backdrop-blur-sm shadow-sm",
            iconBgColor
          )}
        >
          {project.icon && iconMap[project.icon]}
        </div>
        <div>
          <h3 className={cn("font-medium mb-1 drop-shadow-sm", textColor)}>{project.name}</h3>
          <p className={cn("text-[10px] mb-2 font-medium", textColor)}>
            {project.year} • {project.category}
          </p>
          <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            {project.technologies.slice(0, 1).map(tech => (
              <span
                key={tech}
                className="px-2 py-0.5 text-[10px] bg-white/80 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 rounded text-zinc-600 dark:text-zinc-400 backdrop-blur-sm"
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

  const renderProject = (project: Project, index: number) => {
    const isSecondToLast = index === featuredProjects.length - 2
    const isLast = index === featuredProjects.length - 1

    const orderClass = isSecondToLast
      ? "sm:order-[6] lg:order-none"
      : isLast
        ? "sm:order-[5] lg:order-none"
        : ""

    if (project.size === "large") {
      return <ProjectCardLarge key={project.id} project={project} className={orderClass} />
    }

    if (project.size === "medium") {
      return <ProjectCardMedium key={project.id} project={project} className={orderClass} />
    }

    if (project.icon === "utensils" || project.icon === "user") {
      return <ProjectCardWithIcon key={project.id} project={project} className={orderClass} />
    }
    return <ProjectCardSmall key={project.id} project={project} className={orderClass} />
  }

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 mb-32">
      <div className="flex items-end justify-between mb-12">
        <div className="space-y-1">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Réalisations & Side-projects
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm">
            Une sélection de mes travaux récents, du web au mobile.
          </p>
        </div>

        <span className="hidden md:inline-flex items-center gap-2 text-xs font-medium text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800">
          <CalendarDays className="w-3 h-3" />
          {new Date().getFullYear()} Edition
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[280px] gap-4">
        {featuredProjects.map(renderProject)}
      </div>
    </section>
  )
}
