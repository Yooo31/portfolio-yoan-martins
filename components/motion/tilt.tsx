"use client"

import { useRef } from "react"
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion"
import { cn } from "@/lib/utils"

type TiltProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Inclinaison maximale en degrés */
  max?: number
}

/**
 * Incline légèrement le bloc vers la souris (effet 3D) et place un halo sous le curseur
 * (variables --spot-x / --spot-y, voir .spotlight). Inactif au tactile et en mouvement réduit.
 */
export function Tilt({ max = 6, className, style, children, ...props }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotionSafe()

  const reset = () => {
    ref.current?.style.setProperty("--rx", "0deg")
    ref.current?.style.setProperty("--ry", "0deg")
  }

  return (
    <div
      ref={ref}
      className={cn(
        "spotlight transition-transform duration-300 ease-out will-change-transform",
        className
      )}
      style={{
        transform: "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        ...style,
      }}
      onPointerMove={event => {
        if (event.pointerType !== "mouse") return
        const element = event.currentTarget
        const rect = element.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width
        const y = (event.clientY - rect.top) / rect.height
        element.style.setProperty("--spot-x", `${event.clientX - rect.left}px`)
        element.style.setProperty("--spot-y", `${event.clientY - rect.top}px`)
        if (reduce) return
        element.style.setProperty("--rx", `${(0.5 - y) * max}deg`)
        element.style.setProperty("--ry", `${(x - 0.5) * max}deg`)
      }}
      onPointerLeave={reset}
      {...props}
    >
      {children}
    </div>
  )
}
