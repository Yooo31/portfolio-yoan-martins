import Link from "next/link"
import { ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="max-w-4xl mx-auto px-6 mb-32 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-8 text-center md:text-left animate-fade-in">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
          <span>En poste</span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-zinc-900 dark:text-white">
          Développeur Full Stack &{" "}
          <span className="text-zinc-400 dark:text-zinc-600">Architecte UI.</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto md:mx-0 font-normal leading-relaxed">
          Je conçois des architectures web robustes et des interfaces soignées. Une approche
          technique rigoureuse au service de l&apos;expérience utilisateur.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <Button asChild size="lg" className="group">
            <Link href="#work">
              Voir mes réalisations
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Avatar */}
      <div
        className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 animate-fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-900 rounded-full blur-2xl opacity-50 dark:opacity-30"
          aria-hidden="true"
        />
        <div className="relative w-full h-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden border border-zinc-100 dark:border-zinc-700 flex items-center justify-center group cursor-default">
          <User
            className="text-zinc-400 dark:text-zinc-600 w-1/2 h-1/2 opacity-50"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
