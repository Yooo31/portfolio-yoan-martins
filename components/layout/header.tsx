"use client"

import Link from "next/link"
import Image from "next/image"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/shared/theme-provider"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "Parcours" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="fixed top-0 w-full z-50 glass border-b border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold tracking-tighter text-lg flex items-center gap-2"
          aria-label="Yoan Martins - Accueil"
        >
          <Image
            src="/icon.svg"
            alt="Logo Yoan Martins"
            width={40}
            height={40}
            className="rounded-full"
            priority
          />
        </Link>

        <nav
          className="hidden md:flex gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400"
          aria-label="Navigation principale"
        >
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          className={cn(
            "p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900",
            "text-zinc-600 dark:text-zinc-400 transition-colors"
          )}
          aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  )
}
