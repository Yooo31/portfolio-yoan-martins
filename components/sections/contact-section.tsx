import { ArrowRight, FileText, Mail } from "lucide-react"
import { Linkedin } from "@/components/ui/brand-icons"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"

export const CONTACT_EMAIL = "contact@yoanmartins.fr"

// Appel à l'action de fin de page. Le formulaire de contact reviendra quand l'envoi sera branché (#129).
export function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-16 text-center sm:px-16 sm:py-20">
          <div className="absolute inset-0 -z-10 bg-grid opacity-60 invert" aria-hidden="true" />
          <div
            className="absolute -top-32 -left-20 -z-10 h-80 w-80 rounded-full bg-brand-cyan/30 blur-3xl animate-blob"
            aria-hidden="true"
          />
          <div
            className="absolute -right-20 -bottom-32 -z-10 h-80 w-80 rounded-full bg-brand-violet/30 blur-3xl animate-blob [animation-delay:-8s]"
            aria-hidden="true"
          />

          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand-cyan">
            Contact
          </p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Un projet en tête ? Parlons-en.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-300">
            Site vitrine, application métier ou refonte : décrivez-moi votre besoin, je reviens vers
            vous avec une première proposition.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-white text-zinc-900 hover:bg-zinc-100 hover:opacity-100 dark:bg-white dark:text-zinc-900"
            >
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail />
                M&apos;écrire
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-zinc-700 bg-transparent text-white hover:bg-white/10 hover:text-white dark:border-zinc-700 dark:bg-transparent"
            >
              <a
                href="https://linkedin.com/in/yoan-martins"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full text-zinc-300 hover:bg-white/10 hover:text-white dark:hover:bg-white/10"
            >
              <a href="/cv-martins-yoan-2024.pdf" download>
                <FileText />
                Télécharger mon CV
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-zinc-400">
            ou directement à{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>
      </Reveal>
    </section>
  )
}
