"use client"

import { motion, useScroll, useSpring } from "motion/react"
import { useReducedMotionSafe } from "@/demos/kit/use-reduced-motion"
import { useRef } from "react"

const steps = [
  {
    title: "La photo",
    text: "Vous envoyez une photo du siège (face, profil, dessous si possible) et vos envies.",
  },
  {
    title: "Le conseil",
    text: "On échange sur le confort souhaité, le style et le tissu, puis un devis vous est adressé.",
  },
  {
    title: "L’atelier",
    text: "Dégarnissage, reprise de la structure, garnissage puis pose du nouveau tissu.",
  },
  {
    title: "Le retour",
    text: "Votre siège retrouve sa place : retrait à l’atelier ou livraison, selon la pièce.",
  },
]

/** Étapes reliées par un fil de couture qui se coud au défilement. */
export function Steps() {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotionSafe()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 })

  return (
    <div ref={ref} className="relative">
      {/* Fil horizontal (desktop) */}
      <svg
        aria-hidden
        className="absolute top-7 left-0 hidden h-6 w-full md:block"
        viewBox="0 0 1000 24"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 12 C 125 0, 250 24, 375 12 S 625 0, 750 12 S 875 24, 1000 12"
          stroke="var(--tp-ink)"
          strokeOpacity="0.12"
          strokeWidth="2"
        />
        <motion.path
          d="M0 12 C 125 0, 250 24, 375 12 S 625 0, 750 12 S 875 24, 1000 12"
          stroke="var(--tp-terracotta)"
          strokeWidth="2.5"
          strokeDasharray="10 8"
          style={{ pathLength: reduce ? 1 : progress }}
        />
      </svg>
      {/* Fil vertical (mobile) */}
      <svg
        aria-hidden
        className="absolute top-0 left-7 h-full w-4 md:hidden"
        viewBox="0 0 16 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M8 0 L8 1000" stroke="var(--tp-ink)" strokeOpacity="0.12" strokeWidth="2" />
        <motion.path
          d="M8 0 L8 1000"
          stroke="var(--tp-terracotta)"
          strokeWidth="2.5"
          style={{ pathLength: reduce ? 1 : progress }}
        />
      </svg>

      <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
        {steps.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="flex gap-6 md:flex-col md:gap-0"
          >
            <span className="font-tp-display relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[var(--tp-terracotta)] bg-[var(--tp-cream)] text-xl text-[var(--tp-terracotta)] italic">
              {i + 1}
            </span>
            <div className="md:mt-8">
              <h3 className="font-tp-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-[var(--tp-ink)]/70">{s.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
