import { Monitor, Server, Settings } from "lucide-react"
import { techStack } from "@/data/stack"
import { Badge } from "@/components/ui/badge"

const iconMap: Record<string, React.ReactNode> = {
  monitor: <Monitor className="w-5 h-5" />,
  server: <Server className="w-5 h-5" />,
  settings: <Settings className="w-5 h-5" />,
}

export function StackSection() {
  return (
    <section id="stack" className="max-w-6xl mx-auto px-6 mb-32">
      <h2 className="text-sm font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-8 text-center">
        Stack Technique
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techStack.map(stack => (
          <div
            key={stack.category}
            className="flex flex-col p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800"
          >
            <div className="flex items-center gap-3 mb-4 text-zinc-900 dark:text-white">
              {iconMap[stack.icon]}
              <h3 className="font-medium">{stack.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.technologies.map(tech => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
