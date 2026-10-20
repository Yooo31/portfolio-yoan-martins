import Image from "next/image"
import { ArrowUp, Mail } from "lucide-react"
import { Github, Linkedin } from "@/components/ui/brand-icons"
import { navLinks } from "@/lib/navigation"
import { CONTACT_EMAIL } from "@/components/sections/contact-section"

const socialLinks = [
  { href: "https://github.com/Yooo31", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/yoan-martins", label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${CONTACT_EMAIL}`, label: "Email", icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-900 dark:bg-zinc-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs space-y-3">
          <div className="flex items-center gap-3">
            <Image src="/logo-96.webp" alt="" width={32} height={32} className="rounded-full" />
            <span className="font-semibold tracking-tight text-zinc-900 dark:text-white">
              Yoan Martins
            </span>
          </div>
          <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            Développeur Full Stack. Sites vitrines, applications web et optimisation de
            performances.
          </p>
        </div>

        <nav aria-label="Plan du site" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          {[...navLinks, { href: "#contact", label: "Contact" }].map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all hover:-translate-y-0.5 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-white dark:hover:text-white"
              aria-label={link.label}
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {new Date().getFullYear()} Yoan Martins. Conçu et codé avec passion.</p>
          <a
            href="#main-content"
            className="inline-flex items-center gap-1 transition-colors hover:text-zinc-900 dark:hover:text-white"
          >
            Haut de page
            <ArrowUp className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
