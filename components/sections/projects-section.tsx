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
          className="p-2 bg-white/80 dark:bg-black/50 backdrop-blur-md rounded-full text-zinc-800 dark:text-zinc-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 shadow-sm"
          title="Voir le code sur GitHub"
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
// --- Cartes Bento ---

// Helper pour l'image de fond (DRY - Don't Repeat Yourself)
const BackgroundImage = ({ image }: { image?: string }) => {
  if (!image) return null
  return (
    <div
      className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 scale-100 group-hover:scale-110 transition-all duration-700 bg-cover bg-center bg-no-repeat grayscale-[20%] group-hover:grayscale-0"
      style={{ backgroundImage: `url(${image})` }}
    />
  )
}

function ProjectCardLarge({ project }: { project: Project }) {
  return (
    <article className="bento-card relative group col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      {/* Background Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 z-0" />

      {/* Image Background */}
      <BackgroundImage image={project.image} />

      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-100/90 via-zinc-100/40 to-transparent dark:from-zinc-900/90 dark:via-zinc-900/40 dark:to-transparent z-10" />

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

          <span className="px-3 py-1 bg-white/50 dark:bg-black/30 backdrop-blur-md rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300 border border-white/20 dark:border-white/10">
            {project.year}
          </span>
        </div>

        <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end mb-2">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">{project.name}</h3>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
              <ProjectLinks project={project} />
            </div>
          </div>

          <p className="text-zinc-600 dark:text-zinc-300 text-sm mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
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

function ProjectCardSmall({ project }: { project: Project }) {
  const isDark = project.icon === "calendar" || project.icon === "gamepad"

  return (
    <article
      className={cn(
        "bento-card relative group col-span-1 overflow-hidden rounded-3xl border",
        isDark
          ? "bg-zinc-900 dark:bg-black border-zinc-800 dark:border-zinc-800"
          : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
      )}
    >
      {/* Image Background */}
      <BackgroundImage image={project.image} />

      {/* Overlay spécifique pour Small Cards */}
      <div
        className={cn(
          "absolute inset-0 z-10 transition-colors duration-300",
          isDark
            ? "bg-black/60 group-hover:bg-black/70"
            : "bg-white/60 dark:bg-black/60 group-hover:bg-white/40 dark:group-hover:bg-black/50"
        )}
      />

      <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
        <ProjectLinks project={project} />
      </div>

      {project.icon && !isDark && (
        <div
          className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-10 dark:opacity-20 transition-opacity duration-500 z-10 pointer-events-none"
          aria-hidden="true"
        >
          <div className="text-zinc-300 dark:text-zinc-700 scale-150">{iconMap[project.icon]}</div>
        </div>
      )}

      {isDark && project.icon && (
        <div
          className="absolute top-0 right-0 p-6 text-zinc-700 dark:text-zinc-800 z-20"
          aria-hidden="true"
        >
          {iconMap[project.icon]}
        </div>
      )}

      <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
        <h3
          className={cn(
            "font-medium mb-1 truncate pr-8 drop-shadow-sm",
            isDark ? "text-white" : "text-zinc-900 dark:text-white"
          )}
        >
          {project.name}
        </h3>
        <p
          className={cn(
            "text-xs mb-3 line-clamp-2",
            isDark ? "text-zinc-400" : "text-zinc-600 dark:text-zinc-300" // Un peu plus foncé pour contraste sur image
          )}
        >
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {project.technologies.slice(0, 2).map(tech => (
            <span
              key={tech}
              className={cn(
                "px-2 py-0.5 text-[10px] rounded border backdrop-blur-md shadow-sm",
                isDark
                  ? "bg-zinc-800/80 text-zinc-300 border-zinc-700"
                  : "bg-white/80 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700"
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
  const isFeatured = project.category === "professional"

  return (
    <article
      className={cn(
        "bento-card relative group col-span-1 sm:col-span-2 overflow-hidden rounded-3xl border",
        isFeatured
          ? "bg-indigo-50 dark:bg-zinc-900/50 border-indigo-100 dark:border-zinc-800"
          : "bg-zinc-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800"
      )}
    >
      {/* Image Background */}
      <BackgroundImage image={project.image} />

      {/* Overlay dégradé léger */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/50 to-white/20 dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-zinc-900/20 z-10" />

      <div className="absolute top-4 right-4 z-30 flex items-center gap-3">
        <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity bg-white/50 dark:bg-black/50 px-2 py-1 rounded-full backdrop-blur-md">
          {project.year}
        </span>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ProjectLinks project={project} />
        </div>
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-20">
        <div
          className={cn(
            "mb-2 p-2 rounded-lg bg-white/80 dark:bg-zinc-800/80 backdrop-blur-md shadow-sm",
            colorMap[project.color || "blue"]
          )}
        >
          {project.icon && iconMap[project.icon]}
        </div>
        <h3 className="font-medium text-zinc-900 dark:text-white text-lg mb-1 drop-shadow-sm">
          {project.name}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 max-w-sm font-medium">
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
    </article>
  )
}

function ProjectCardWithIcon({ project }: { project: Project }) {
  const iconBgColor =
    project.color === "emerald"
      ? "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400"
      : "bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400"

  return (
    <article className="bento-card relative group col-span-1 overflow-hidden rounded-3xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      {/* Image Background */}
      <BackgroundImage image={project.image} />

      {/* Strong Overlay because text is centered/prominent here */}
      <div className="absolute inset-0 bg-white/80 dark:bg-zinc-900/80 group-hover:bg-white/70 dark:group-hover:bg-zinc-900/70 transition-colors z-10" />

      <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-75">
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
          <h3 className="font-medium text-zinc-900 dark:text-white mb-1 drop-shadow-sm">
            {project.name}
          </h3>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
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

  const renderProject = (project: Project) => {
    if (project.size === "large") {
      return <ProjectCardLarge key={project.id} project={project} />
    }
    if (project.size === "medium") {
      return <ProjectCardMedium key={project.id} project={project} />
    }
    // Condition spéciale pour utiliser le style minimaliste "Icon" pour certains petits projets
    if (project.icon === "utensils" || project.icon === "user") {
      return <ProjectCardWithIcon key={project.id} project={project} />
    }
    return <ProjectCardSmall key={project.id} project={project} />
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
