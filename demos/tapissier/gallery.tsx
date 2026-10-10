"use client"

import Image from "next/image"
import { AnimatePresence, motion } from "motion/react"
import { useReducedMotionSafe } from "@/demos/kit/use-reduced-motion"
import { useState } from "react"
import { BeforeAfter } from "@/demos/kit/before-after"
import { IMAGES } from "./images"

// Simulation : l'« avant » est la même photo, ternie et délavée par un filtre CSS.
const WORN = "grayscale(0.7) sepia(0.45) brightness(0.78) contrast(0.85) saturate(0.6)"

const chairs = [
  { id: "bergere", name: "Bergère sculptée", work: "Réfection complète", image: IMAGES.bergere },
  {
    id: "vintage",
    name: "Fauteuil vintage",
    work: "Garnissage mousse & recouverture",
    image: IMAGES.vintage,
  },
  { id: "club", name: "Fauteuil à accoudoirs", work: "Recouverture velours", image: IMAGES.club },
  {
    id: "oreilles",
    name: "Fauteuil à oreilles",
    work: "Capitons & tissu neuf",
    image: IMAGES.wingback,
  },
  {
    id: "chaises",
    name: "Série de chaises",
    work: "Velours & clous décoratifs",
    image: IMAGES.velvet,
  },
]

export function Gallery() {
  const [current, setCurrent] = useState(0)
  const reduce = useReducedMotionSafe()
  // current est toujours un index valide de chairs
  const chair = chairs[current]!

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
      <div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={chair.id}
            initial={reduce ? { opacity: 0 } : { opacity: 0, rotateY: -8, x: -20 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, rotateY: 8, x: 20 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformPerspective: 1200 }}
          >
            <BeforeAfter
              before={chair.image}
              after={chair.image}
              alt={chair.name}
              beforeFilter={WORN}
              className="tp-stitched aspect-[4/5] sm:aspect-[4/3]"
              labelClassName="rounded-none bg-[var(--tp-cream)] px-3 font-tp-display text-sm italic text-[var(--tp-ink)]"
              handleClassName="bg-[var(--tp-terracotta)] text-[var(--tp-cream)]"
              sizes="(min-width: 1024px) 800px, 100vw"
            />
          </motion.div>
        </AnimatePresence>
        <p className="mt-4 text-xs text-[var(--tp-cream)]/60">
          Glissez la poignée pour comparer · visuels simulés pour la démonstration.
        </p>
      </div>

      <ul className="tp-noscrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0">
        {chairs.map((c, i) => (
          <li key={c.id} className="shrink-0">
            <button
              type="button"
              onClick={() => setCurrent(i)}
              aria-pressed={current === i}
              className={`group flex w-60 items-center gap-4 border p-2 text-left transition lg:w-full ${
                current === i
                  ? "border-[var(--tp-cream)] bg-[var(--tp-cream)] text-[var(--tp-ink)]"
                  : "border-[var(--tp-cream)]/20 hover:border-[var(--tp-cream)]/60"
              }`}
            >
              <span className="relative size-16 shrink-0 overflow-hidden rounded-t-full">
                <Image src={c.image} alt="" fill sizes="64px" className="object-cover" />
              </span>
              <span>
                <span className="font-tp-display block text-lg leading-tight">{c.name}</span>
                <span
                  className={`text-xs ${current === i ? "text-[var(--tp-terracotta)]" : "opacity-60"}`}
                >
                  {c.work}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
