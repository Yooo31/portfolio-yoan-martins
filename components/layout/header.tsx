"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/shared/theme-provider"
import { MobileNav } from "@/components/motion/mobile-nav"
import { useActiveSection } from "@/components/motion/use-active-section"
import { Button } from "@/components/ui/button"
import { navLinks } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const active = useActiveSection([...navLinks.map(link => link.href.slice(1)), "contact"])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200/60 glass transition-colors duration-300 dark:border-zinc-800/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Yoan Martins - Accueil">
          <Image
            src="/logo-96.webp"
            alt="Logo Yoan Martins"
            width={36}
            height={36}
            className="rounded-full"
            loading="eager"
          />
          <span className="hidden text-sm font-semibold tracking-tight sm:inline">
            Yoan Martins
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border border-zinc-200/70 bg-white/50 p-1 text-sm font-medium dark:border-zinc-800/70 dark:bg-zinc-900/40 md:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map(link => {
            const isActive = active === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "rounded-full px-4 py-1.5 transition-colors",
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                )}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
            aria-label={theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre"}
          >
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>

          <Button asChild size="sm" className="group hidden rounded-full px-4 sm:inline-flex">
            <a href="#contact">
              Me contacter
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>

          <MobileNav
            title="Navigation"
            links={[...navLinks, { href: "#contact", label: "Contact" }]}
            triggerClassName="text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
            className="border-zinc-200 bg-white text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
          />
        </div>
      </div>
    </header>
  )
}
