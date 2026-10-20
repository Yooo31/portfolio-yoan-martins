"use client"

import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

type MobileNavProps = {
  links: { href: string; label: string }[]
  title: string
  /** Classes du panneau (couleurs du site) : il est rendu hors de l'arbre, lui passer la classe racine */
  className?: string
  triggerClassName?: string
  children?: React.ReactNode
}

/** Menu burger mobile ; se ferme au clic sur un lien, sur le fond ou avec Échap. */
export function MobileNav({ links, title, className, triggerClassName, children }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        aria-label="Ouvrir le menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex size-10 items-center justify-center rounded-md md:hidden",
          triggerClassName
        )}
      >
        <Menu className="size-6" />
      </button>
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[70] md:hidden">
            <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
            <div
              role="dialog"
              aria-modal="true"
              aria-label={title}
              className={cn(
                "absolute inset-y-0 right-0 w-3/4 max-w-sm overflow-y-auto border-l p-8 shadow-2xl",
                className
              )}
            >
              <button
                type="button"
                aria-label="Fermer le menu"
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 inline-flex size-10 items-center justify-center"
              >
                <X className="size-5" />
              </button>
              <p className="mb-6 text-lg">{title}</p>
              <nav className="flex flex-col gap-5 text-xl">
                {links.map(l => (
                  <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
              </nav>
              {children && <div className="mt-8">{children}</div>}
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
