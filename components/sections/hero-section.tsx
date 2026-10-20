import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TechIcon } from "@/components/ui/tech-icon"
import { Marquee } from "@/components/motion/marquee"
import { experiences } from "@/data/experiences"
import { getFeaturedProjects } from "@/data/projects"
import { techStack } from "@/data/stack"

// Chiffres calculés depuis les données du site : ils restent justes sans mise à jour manuelle.
const firstJob = Math.min(
  ...experiences.filter(exp => exp.type === "work").map(exp => Number(exp.startDate))
)
const stats = [
  { value: `${new Date().getFullYear() - firstJob} ans`, label: "d'expérience en entreprise" },
  { value: `${getFeaturedProjects().length}`, label: "réalisations en ligne ou en cours" },
  { value: "Bac+5", label: "Expert en informatique" },
]

const floatingTech = [
  { icon: "logos:nextjs-icon", label: "Next.js", className: "-left-6 top-10", delay: "0s" },
  {
    icon: "logos:typescript-icon",
    label: "TypeScript",
    className: "-right-4 top-1/3",
    delay: "1.5s",
  },
  { icon: "logos:nodejs-icon", label: "Node.js", className: "left-2 -bottom-2", delay: "3s" },
]

const allTech = techStack.flatMap(stack => stack.technologies)

/** Délai d'apparition en cascade (animation CSS : visible dès le premier rendu, sans attendre le JS). */
const appear = (step: number) => ({ animationDelay: `${step * 0.08}s` })

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40">
      {/* Fond : quadrillage + halos colorés animés */}
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden="true" />
      <div
        className="absolute -top-24 left-1/4 -z-10 h-80 w-80 rounded-full bg-brand-cyan/25 blur-3xl animate-blob dark:bg-brand-cyan/15"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-1/5 -z-10 h-96 w-96 rounded-full bg-brand-violet/20 blur-3xl animate-blob [animation-delay:-6s] dark:bg-brand-violet/15"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8 text-center md:text-left">
          <div
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300"
            style={appear(0)}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponible pour de nouveaux projets
          </div>

          <h1
            className="animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tighter text-balance text-zinc-900 sm:text-5xl lg:text-[3.5rem] dark:text-white"
            style={appear(1)}
          >
            Développeur Full Stack, je crée des sites et applications web{" "}
            <span className="text-gradient">rapides et soignés.</span>
          </h1>

          <p
            className="mx-auto max-w-xl animate-fade-up text-lg leading-relaxed text-zinc-600 md:mx-0 dark:text-zinc-400"
            style={appear(2)}
          >
            Du site vitrine qui transforme vos visiteurs en clients à l&apos;application métier sur
            mesure : je conçois, développe et mets en ligne des produits performants, accessibles et
            bien référencés.
          </p>

          <div
            className="flex animate-fade-up flex-col justify-center gap-3 sm:flex-row md:justify-start"
            style={appear(3)}
          >
            <Button asChild size="lg" className="group rounded-full">
              <a href="#contact">
                Discutons de votre projet
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#work">Voir mes réalisations</a>
            </Button>
          </div>

          <dl
            className="grid animate-fade-up grid-cols-3 gap-4 border-t border-zinc-200 pt-8 text-left dark:border-zinc-800"
            style={appear(4)}
          >
            {stats.map(stat => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-white">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs leading-snug text-zinc-500 sm:text-sm dark:text-zinc-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo dans un anneau dégradé qui tourne, avec des technos qui flottent autour */}
        <div
          className="relative mx-auto h-64 w-64 animate-fade-up sm:h-72 sm:w-72 md:h-80 md:w-80"
          style={appear(2)}
        >
          <div
            className="absolute -inset-1 rounded-full bg-[conic-gradient(from_0deg,var(--color-brand-cyan),var(--color-brand-violet),var(--color-brand-cyan))] opacity-80 blur-sm animate-spin-slow"
            aria-hidden="true"
          />
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white bg-zinc-200 dark:border-zinc-950 dark:bg-zinc-800">
            <Image
              src="/images/profile/yoan-martins.webp"
              alt="Yoan Martins - Développeur Full Stack"
              fill
              sizes="(max-width: 640px) 256px, 320px"
              className="object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {floatingTech.map(tech => (
            <div
              key={tech.label}
              className={`absolute ${tech.className} flex items-center gap-2 rounded-xl border border-zinc-200 bg-white/90 px-3 py-2 text-xs font-medium text-zinc-800 shadow-lg shadow-zinc-900/5 backdrop-blur animate-float dark:border-zinc-800 dark:bg-zinc-900/90 dark:text-zinc-200`}
              style={{ animationDelay: tech.delay }}
              aria-hidden="true"
            >
              <TechIcon icon={tech.icon} className="h-4 w-4" />
              {tech.label}
            </div>
          ))}
        </div>
      </div>

      {/* Bandeau des technologies */}
      <div className="mx-auto mt-20 max-w-6xl px-6">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          Les technologies que j&apos;utilise au quotidien
        </p>
        <Marquee
          duration={40}
          separator={null}
          className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          itemClassName="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
          items={allTech.map(tech => (
            <>
              <TechIcon icon={tech.icon} className="h-5 w-5" />
              {tech.name}
            </>
          ))}
        />
      </div>
    </section>
  )
}
