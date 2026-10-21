"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion } from "motion/react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion"
import { IMAGES } from "./images"

// Inclinaisons et décalages fixes (pas d'aléatoire au rendu).
const items = [
  {
    src: IMAGES.new1,
    alt: "Portant de vêtements de toutes les couleurs",
    tilt: -4,
    shift: "mt-2",
    tape: "bg-[var(--dv-cherry)]/80",
  },
  {
    src: IMAGES.new2,
    alt: "Pulls en grosse maille écrue et verte",
    tilt: 3,
    shift: "mt-10",
    tape: "bg-[var(--dv-denim)]/75",
  },
  {
    src: IMAGES.new3,
    alt: "Vestes et chapeau sur un portant noir",
    tilt: -2,
    shift: "mt-0",
    tape: "bg-[var(--dv-butter)]",
  },
  {
    src: IMAGES.new4,
    alt: "Tenue d’automne posée à plat : pulls, jupe et bottines",
    tilt: 5,
    shift: "mt-8",
    tape: "bg-[var(--dv-cherry)]/80",
  },
  {
    src: IMAGES.new5,
    alt: "Chemises et vestes suspendues",
    tilt: -3,
    shift: "mt-4",
    tape: "bg-[var(--dv-denim)]/75",
  },
  {
    src: IMAGES.new6,
    alt: "Pile de pulls tenue dans les bras",
    tilt: 2,
    shift: "mt-12",
    tape: "bg-[var(--dv-butter)]",
  },
  {
    src: IMAGES.new7,
    alt: "Gilets et pulls clairs sur un portant",
    tilt: -5,
    shift: "mt-3",
    tape: "bg-[var(--dv-cherry)]/80",
  },
]

export function Polaroids() {
  const strip = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotionSafe()

  const slide = (dir: 1 | -1) => {
    const el = strip.current
    if (!el) return
    el.scrollBy({
      left: dir * Math.max(280, el.clientWidth * 0.7),
      behavior: reduce ? "auto" : "smooth",
    })
  }

  return (
    <div>
      <div
        ref={strip}
        tabIndex={0}
        role="region"
        aria-label="Nouveautés : faites défiler les photos"
        className="dv-strip flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pt-6 pb-12 outline-none focus-visible:ring-4 focus-visible:ring-[var(--dv-butter)]/60 sm:gap-10 sm:px-[max(2rem,calc((100vw-80rem)/2+2rem))]"
      >
        {items.map((p, i) => (
          <motion.figure
            key={p.src}
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: p.tilt }}
            whileHover={{ rotate: 0, scale: 1.04 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={
              reduce
                ? { duration: 0 }
                : { type: "spring", stiffness: 120, damping: 14, delay: (i % 4) * 0.08 }
            }
            className={`relative w-60 shrink-0 snap-center bg-white p-3 pb-4 shadow-[0_14px_30px_rgb(0_0_0/0.35)] sm:w-72 ${p.shift}`}
          >
            <span
              aria-hidden
              className={`absolute -top-3 left-1/2 h-7 w-24 -translate-x-1/2 -rotate-3 ${p.tape}`}
            />
            <div className="relative aspect-square overflow-hidden bg-[var(--dv-butter)]">
              <Image src={p.src} alt={p.alt} fill sizes="288px" className="object-cover" />
            </div>
            <figcaption className="pt-4 text-center text-[var(--dv-ink)]">
              <span className="font-dv-display block text-2xl leading-none">Nouveauté {i + 1}</span>
              <span className="mt-1.5 block text-xs font-bold tracking-wide text-[var(--dv-ink)]/60 uppercase">
                Arrivée de la semaine
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <p className="text-sm font-semibold text-[var(--dv-cream)]/75">
          Faites glisser pour voir la suite.
        </p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => slide(-1)}
            aria-label="Photos précédentes"
            className="flex size-12 items-center justify-center rounded-full border-[3px] border-[var(--dv-cream)] text-[var(--dv-cream)] transition hover:bg-[var(--dv-cream)] hover:text-[var(--dv-denim)]"
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => slide(1)}
            aria-label="Photos suivantes"
            className="flex size-12 items-center justify-center rounded-full border-[3px] border-[var(--dv-cream)] bg-[var(--dv-butter)] text-[var(--dv-ink)] transition hover:bg-[var(--dv-cream)]"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
