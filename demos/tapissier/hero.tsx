"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useReducedMotionSafe } from "@/demos/kit/use-reduced-motion"
import { useState } from "react"
import { ArrowRight, Phone } from "lucide-react"
import { telHref, type Business } from "@/demos/kit/business"
import { IMAGES } from "./images"

/** Nuancier : chaque échantillon correspond à un motif CSS défini dans theme.css. */
const swatches = [
  { id: "toile", label: "Toile à rayures", className: "tp-pattern-ticking" },
  { id: "damas", label: "Damassé", className: "tp-pattern-damask" },
  { id: "damier", label: "Petit damier", className: "tp-pattern-check" },
  { id: "velours", label: "Velours canard", className: "tp-pattern-velvet" },
]

export function Hero({ business }: { business: Business }) {
  const reduce = useReducedMotionSafe()
  const [{ active, prev }, setState] = useState({ active: 1, prev: 1 })
  // active et prev sont toujours des index valides de swatches
  const activeSwatch = swatches[active]!
  const previousSwatch = swatches[prev]!
  const choose = (i: number) => setState(s => (s.active === i ? s : { active: i, prev: s.active }))

  return (
    <section id="top" className="relative overflow-hidden pb-20 lg:pb-28">
      <div className="tp-scallop h-6 w-full bg-[var(--tp-terracotta)]" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-16 px-4 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.32em" }}
            transition={{ duration: 1 }}
            className="tp-label mb-6"
          >
            Tapissier d’ameublement · {business.city}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-tp-display text-[clamp(2.4rem,5vw,4.4rem)] leading-[1.02] text-[var(--tp-ink)]"
          >
            Vos fauteuils ont une histoire.
            <span className="mt-2 block text-[var(--tp-canard)] italic">
              Offrons-leur une nouvelle étoffe.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-[var(--tp-ink)]/75"
          >
            Réfection de sièges, garnissage traditionnel ou moderne et conseil dans le choix des
            tissus : l’atelier redonne forme, confort et caractère aux assises qui vous sont chères.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#devis"
              className="group inline-flex h-14 items-center justify-center gap-3 bg-[var(--tp-terracotta)] px-8 font-medium tracking-wide text-[var(--tp-cream)] transition hover:bg-[var(--tp-canard)]"
            >
              Envoyer la photo de mon siège
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
            {business.phone && (
              <a
                href={telHref(business.phone)}
                className="inline-flex h-14 items-center justify-center gap-3 border border-[var(--tp-ink)]/25 px-8 font-medium transition hover:border-[var(--tp-canard)] hover:text-[var(--tp-canard)]"
              >
                <Phone className="size-4" /> {business.phone}
              </a>
            )}
          </motion.div>
        </div>

        {/* Visuel : arche drapée du tissu choisi + nuancier interactif */}
        <div className="relative mx-auto mb-10 w-full max-w-[330px] sm:max-w-[420px] lg:mb-0 lg:max-w-[460px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] border-[10px] border-[var(--tp-cream)] shadow-[0_40px_80px_-40px_rgb(34_48_47/0.6)] ring-1 ring-[var(--tp-ink)]/10"
          >
            <div className={`absolute inset-0 ${previousSwatch.className}`} />
            <motion.div
              key={activeSwatch.id}
              initial={
                active === prev
                  ? false
                  : reduce
                    ? { opacity: 0 }
                    : { clipPath: "circle(0% at 15% 95%)" }
              }
              animate={reduce ? { opacity: 1 } : { clipPath: "circle(150% at 15% 95%)" }}
              transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
              className={`absolute inset-0 ${activeSwatch.className}`}
            />
            <div className="absolute inset-[9%_9%_0] overflow-hidden rounded-t-[999px] shadow-2xl">
              <Image
                src={IMAGES.hero}
                alt="Fauteuil ancien en bois sculpté, garni de tissu"
                fill
                preload
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover object-[50%_60%]"
              />
            </div>
          </motion.div>

          <div
            className="absolute -bottom-10 -left-2 sm:-left-10"
            role="group"
            aria-label="Choisir un tissu d’exemple"
          >
            <div className="relative h-28 w-56">
              {swatches.map((s, i) => (
                <motion.button
                  key={s.id}
                  type="button"
                  aria-label={s.label}
                  aria-pressed={active === i}
                  onClick={() => choose(i)}
                  initial={{ rotate: 0, x: 0 }}
                  animate={{ rotate: -18 + i * 12, x: i * 34, y: active === i ? -14 : 0 }}
                  whileHover={reduce ? undefined : { y: -18 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                    delay: reduce ? 0 : 0.6 + i * 0.08,
                  }}
                  style={{ originX: 0.5, originY: 1 }}
                  className={`tp-swatch absolute bottom-0 left-0 h-24 w-16 cursor-pointer ${s.className}`}
                />
              ))}
            </div>
            <p className="mt-2 pl-1 text-xs text-[var(--tp-ink)]/60 italic">
              Touchez un échantillon pour draper l’arche
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
