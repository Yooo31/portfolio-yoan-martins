import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    href: "https://github.com/Yooo31",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://linkedin.com/in/yoan-martins",
    label: "LinkedIn",
    icon: Linkedin,
  },
  {
    href: "mailto:contact@yoanmartins.fr",
    label: "Email",
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 text-center text-xs text-zinc-400 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center gap-8 mb-6">
          {socialLinks.map(link => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-2 text-sm"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
        </div>
        <p>© {currentYear} Yoan Martins. Conçu et codé avec passion.</p>
      </div>
    </footer>
  )
}
