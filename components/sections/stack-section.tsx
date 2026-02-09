"use client"

import { Monitor, Server, Settings } from "lucide-react"
import { techStack } from "@/data/stack"
import { Icon } from "@iconify/react"

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
            <div className="flex items-center gap-3 mb-6 text-zinc-900 dark:text-white">
              {iconMap[stack.icon]}
              <h3 className="font-medium">{stack.category}</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {stack.technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className={`flex items-center gap-3 p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800/40 border border-zinc-200 dark:border-zinc-700/50 hover:bg-zinc-200 dark:hover:bg-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all cursor-default ${
                    index === stack.technologies.length - 1 && stack.technologies.length % 2 !== 0
                      ? "col-span-2 justify-center"
                      : ""
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-900/50">
                    <Icon icon={tech.icon} className="w-5 h-5" />
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300 font-medium text-sm">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
