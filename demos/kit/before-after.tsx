"use client"

import Image from "next/image"
import { useCallback, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type BeforeAfterProps = {
  before: string
  after: string
  alt: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
  /** Classe appliquée aux étiquettes Avant / Après */
  labelClassName?: string
  /** Classe de la poignée centrale */
  handleClassName?: string
  /** Filtre CSS appliqué à l'image « avant » (ex. pour simuler l'usure) */
  beforeFilter?: string
  sizes?: string
}

/** Comparateur avant/après glissable (souris, tactile et clavier). */
export function BeforeAfter({
  before,
  after,
  alt,
  beforeLabel = "Avant",
  afterLabel = "Après",
  className,
  labelClassName,
  handleClassName,
  beforeFilter,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: BeforeAfterProps) {
  const [pos, setPos] = useState(50)
  const ref = useRef<HTMLDivElement>(null)

  const move = useCallback((clientX: number) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, next)))
  }, [])

  return (
    <div
      ref={ref}
      className={cn("relative aspect-[4/3] touch-none select-none overflow-hidden", className)}
      onPointerDown={e => {
        e.currentTarget.setPointerCapture(e.pointerId)
        move(e.clientX)
      }}
      onPointerMove={e => {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) move(e.clientX)
      }}
    >
      <Image src={after} alt={`${alt} – après`} fill sizes={sizes} className="object-cover" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image
          src={before}
          alt={`${alt} – avant`}
          fill
          sizes={sizes}
          className="object-cover"
          style={beforeFilter ? { filter: beforeFilter } : undefined}
        />
      </div>

      <span
        className={cn(
          "absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white",
          labelClassName
        )}
      >
        {beforeLabel}
      </span>
      <span
        className={cn(
          "absolute top-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white",
          labelClassName
        )}
      >
        {afterLabel}
      </span>

      <div className="absolute inset-y-0 w-0.5 bg-white/90" style={{ left: `${pos}%` }}>
        <button
          type="button"
          role="slider"
          aria-label="Comparer avant et après"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={e => {
            if (e.key === "ArrowLeft") setPos(p => Math.max(0, p - 5))
            if (e.key === "ArrowRight") setPos(p => Math.min(100, p + 5))
          }}
          className={cn(
            "absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-black shadow-lg outline-none focus-visible:ring-4 focus-visible:ring-white/50",
            handleClassName
          )}
        >
          <span aria-hidden className="text-sm font-bold">
            ‹ ›
          </span>
        </button>
      </div>
    </div>
  )
}
