"use client"

import { motion, type HTMLMotionProps } from "motion/react"
import { useReducedMotionSafe } from "./use-reduced-motion"

type Direction = "up" | "down" | "left" | "right" | "none"

const offsets: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none: { x: 0, y: 0 },
}

type RevealProps = HTMLMotionProps<"div"> & {
  direction?: Direction
  delay?: number
  duration?: number
}

/** Apparition au scroll (fondu + glissement). Neutralisée si l'utilisateur réduit les animations. */
export function Reveal({
  direction = "up",
  delay = 0,
  duration = 0.7,
  children,
  ...props
}: RevealProps) {
  const reduce = useReducedMotionSafe()
  const { x, y } = offsets[direction]

  return (
    <motion.div
      // initial identique serveur/client (évite un écart d'hydratation) ; mouvement réduit = transition instantanée
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={reduce ? { duration: 0 } : { duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = HTMLMotionProps<"div"> & { stagger?: number }

/** Conteneur dont les enfants <StaggerItem> apparaissent l'un après l'autre. */
export function Stagger({ stagger = 0.1, children, ...props }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  const reduce = useReducedMotionSafe()
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: reduce ? { duration: 0 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
