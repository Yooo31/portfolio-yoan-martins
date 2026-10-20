"use client"

import { cn } from "@/lib/utils"

type SpotlightProps = React.HTMLAttributes<HTMLDivElement>

/** Bloc avec un halo qui suit la souris (classe .spotlight dans globals.css). Sans effet au tactile. */
export function Spotlight({ className, children, onPointerMove, ...props }: SpotlightProps) {
  return (
    <div
      className={cn("spotlight", className)}
      onPointerMove={event => {
        const rect = event.currentTarget.getBoundingClientRect()
        event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`)
        event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`)
        onPointerMove?.(event)
      }}
      {...props}
    >
      {children}
    </div>
  )
}
