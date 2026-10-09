import Link from "next/link"
import { cn } from "@/lib/utils"

/** Bandeau rappelant qu'il s'agit d'un concept du portfolio, pas du site d'une vraie entreprise. */
export function DemoBanner({ name, className }: { name: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative z-[60] bg-neutral-950 px-4 py-2 text-center text-[11px] tracking-wide text-neutral-300",
        className
      )}
    >
      Concept de site vitrine · {name} est une entreprise fictive ·{" "}
      <Link href="/#work" className="underline underline-offset-2">
        retour au portfolio de Yoan Martins
      </Link>
    </div>
  )
}

/** Mention des photos d'illustration, à placer dans le footer. */
export function PhotoCredit({ className }: { className?: string }) {
  return (
    <p className={cn("text-xs opacity-60", className)}>
      Photos d’illustration (Unsplash). Coordonnées fictives, formulaire non relié.
    </p>
  )
}
