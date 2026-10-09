import { cn } from "@/lib/utils"

type MarqueeProps = {
  items: React.ReactNode[]
  /** Durée d'un tour complet, en secondes */
  duration?: number
  className?: string
  itemClassName?: string
  separator?: React.ReactNode
}

/** Bandeau défilant en boucle (CSS pur). */
export function Marquee({
  items,
  duration = 30,
  className,
  itemClassName,
  separator = "•",
}: MarqueeProps) {
  const row = items.flatMap((item, i) => [
    <span key={`i${i}`} className={itemClassName}>
      {item}
    </span>,
    <span key={`s${i}`} aria-hidden className="opacity-60">
      {separator}
    </span>,
  ])

  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <div
        className="animate-marquee flex w-max items-center gap-8"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        <div className="flex items-center gap-8">{row}</div>
        <div className="flex items-center gap-8" aria-hidden>
          {row}
        </div>
      </div>
    </div>
  )
}
