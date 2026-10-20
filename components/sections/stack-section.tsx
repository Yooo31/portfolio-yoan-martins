import { Monitor, Server, Settings } from "lucide-react"
import { techStack } from "@/data/stack"
import { TechIcon } from "@/components/ui/tech-icon"
import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { Spotlight } from "@/components/motion/spotlight"

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor className="h-5 w-5" aria-hidden="true" />,
  server: <Server className="h-5 w-5" aria-hidden="true" />,
  settings: <Settings className="h-5 w-5" aria-hidden="true" />,
}

export function StackSection() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Stack technique"
          title="Des outils modernes et éprouvés"
          description="Je choisis la technologie selon le besoin du projet, pas l'inverse."
        />
      </Reveal>

      <Stagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {techStack.map(stack => (
          <StaggerItem key={stack.category} className="h-full">
            <Spotlight className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/30">
              <div className="mb-6 flex items-center gap-3 text-zinc-900 dark:text-white">
                {iconMap[stack.icon]}
                <h3 className="font-semibold">{stack.category}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stack.technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`group flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md dark:border-zinc-700/50 dark:bg-zinc-800/40 dark:hover:border-zinc-600 ${
                      index === stack.technologies.length - 1 && stack.technologies.length % 2 !== 0
                        ? "col-span-2 justify-center"
                        : ""
                    }`}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-50 transition-transform duration-300 group-hover:scale-110 dark:bg-zinc-900/60">
                      <TechIcon icon={tech.icon} className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </Spotlight>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
