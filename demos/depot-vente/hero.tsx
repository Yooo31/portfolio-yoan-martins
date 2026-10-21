"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowDown, Phone } from "lucide-react"
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion"
import { telHref, type Business } from "@/demos/kit/business"
import { IMAGES } from "./images"

// Balancement déterministe : amplitude, durée et décalage propres à chaque cintre.
const hangers = [
  {
    src: IMAGES.hangShirts,
    alt: "Chemises et tee-shirts colorés sur un portant",
    label: "Hauts",
    swing: "3.2deg",
    duration: "4.6s",
    delay: "-1.2s",
    drop: "mt-0",
    hide: "",
  },
  {
    src: IMAGES.hangDenim,
    alt: "Vestes en jean alignées sur des cintres",
    label: "Denim",
    swing: "-2.4deg",
    duration: "5.4s",
    delay: "-3s",
    drop: "mt-6 sm:mt-10",
    hide: "",
  },
  {
    src: IMAGES.hangKnits,
    alt: "Pile de pulls en maille",
    label: "Mailles",
    swing: "2.8deg",
    duration: "5s",
    delay: "-0.4s",
    drop: "mt-2 sm:mt-3",
    hide: "",
  },
  {
    src: IMAGES.hangPrints,
    alt: "Vêtements colorés serrés sur des cintres en bois",
    label: "Imprimés",
    swing: "-3.4deg",
    duration: "4.2s",
    delay: "-2.1s",
    drop: "mt-8",
    hide: "hidden md:block",
  },
]

function HangerShape() {
  return (
    <svg
      viewBox="0 0 200 84"
      aria-hidden
      className="relative z-10 block w-full overflow-visible"
      fill="none"
    >
      {/* crochet */}
      <path
        d="M100 40 V26 C100 18 114 18 114 9 C114 -2 92 -3 90 8"
        stroke="var(--dv-ink)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* épaules */}
      <path
        d="M100 40 L16 72 Q6 78 18 80 H182 Q194 78 184 72 Z"
        stroke="var(--dv-ink)"
        strokeWidth="5"
        strokeLinejoin="round"
        fill="var(--dv-butter)"
      />
    </svg>
  )
}

export function Hero({ business }: { business: Business }) {
  const reduce = useReducedMotionSafe()

  return (
    <section id="top" className="relative overflow-hidden bg-[var(--dv-butter)] pb-16 lg:pb-24">
      <div aria-hidden className="dv-dots absolute inset-0" />

      {/* Portant */}
      <div className="relative mx-auto max-w-6xl px-4 pt-10 sm:px-8 sm:pt-14">
        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 h-3 origin-left rounded-full bg-[var(--dv-ink)] sm:h-3.5"
        >
          <span className="absolute top-1/2 -left-1.5 size-5 -translate-y-1/2 rounded-full bg-[var(--dv-cherry)] ring-[3px] ring-[var(--dv-ink)]" />
          <span className="absolute top-1/2 -right-1.5 size-5 -translate-y-1/2 rounded-full bg-[var(--dv-cherry)] ring-[3px] ring-[var(--dv-ink)]" />
        </motion.div>

        <div className="-mt-[13px] flex items-start justify-around gap-3 px-3 sm:-mt-[15px] sm:gap-6 sm:px-10">
          {hangers.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.8, delay: 0.35 + i * 0.12, ease: [0.34, 1.4, 0.64, 1] }
              }
              className={`w-[29%] max-w-56 md:w-[21%] ${h.hide}`}
            >
              <div
                className="dv-hanger"
                style={
                  {
                    "--dv-swing": h.swing,
                    "--dv-swing-duration": h.duration,
                    "--dv-swing-delay": h.delay,
                  } as React.CSSProperties
                }
              >
                <div className="mx-auto w-[78%]">
                  <HangerShape />
                </div>
                <div className={`relative -mt-1 ${h.drop}`}>
                  {/* pinces */}
                  <span
                    aria-hidden
                    className="absolute -top-2 left-[22%] z-10 h-5 w-2.5 rounded-sm bg-[var(--dv-cherry)] ring-2 ring-[var(--dv-ink)] sm:w-3"
                  />
                  <span
                    aria-hidden
                    className="absolute -top-2 right-[22%] z-10 h-5 w-2.5 rounded-sm bg-[var(--dv-cherry)] ring-2 ring-[var(--dv-ink)] sm:w-3"
                  />
                  {h.drop !== "mt-0" && (
                    <span
                      aria-hidden
                      className="absolute bottom-full left-1/2 h-12 w-0.5 -translate-x-1/2 bg-[var(--dv-ink)]"
                    />
                  )}
                  <div className="dv-pop relative aspect-[3/4] overflow-hidden rounded-xl border-[3px] border-[var(--dv-ink)] bg-[var(--dv-cream)] sm:rounded-2xl">
                    <Image
                      src={h.src}
                      alt={h.alt}
                      fill
                      priority
                      sizes="(min-width: 768px) 224px, 30vw"
                      className="object-cover"
                    />
                    <span className="absolute bottom-2 left-2 rounded-full border-2 border-[var(--dv-ink)] bg-[var(--dv-cream)] px-2 py-0.5 text-[10px] font-extrabold tracking-wide uppercase sm:bottom-3 sm:left-3 sm:px-3 sm:text-xs">
                      {h.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Titre posé sous le portant */}
      <div className="relative mx-auto mt-12 max-w-4xl px-4 text-center sm:mt-16 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.7 }}
          className="inline-block -rotate-2 rounded-full border-2 border-[var(--dv-ink)] bg-[var(--dv-cherry)] px-4 py-1.5 text-[11px] font-extrabold tracking-[0.12em] sm:text-xs sm:tracking-[0.18em] text-[var(--dv-cream)] uppercase"
        >
          Dépôt-vente · {business.city}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={
            reduce ? { duration: 0 } : { duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }
          }
          className="font-dv-display mt-6 text-[clamp(2.6rem,8.5vw,6rem)] leading-[0.98] text-balance"
        >
          Vos vêtements méritent une <span className="text-[var(--dv-cherry)]">deuxième vie.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 1.05 }}
          className="mx-auto mt-6 max-w-2xl text-lg font-semibold text-[var(--dv-ink)]/75"
        >
          Chez {business.name}, on dépose les pièces que l’on ne porte plus et on repart avec une
          trouvaille. Voici comment faire, pas à pas, et un aperçu des dernières arrivées.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduce ? { duration: 0 } : { duration: 0.7, delay: 1.2 }}
          className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center"
        >
          <a
            href="#guide"
            className="dv-pop dv-pop-hover group inline-flex h-14 items-center justify-center gap-3 rounded-full border-[3px] border-[var(--dv-ink)] bg-[var(--dv-cherry)] px-8 text-base font-extrabold text-[var(--dv-cream)]"
          >
            Comment déposer
            <ArrowDown className="size-4 transition group-hover:translate-y-0.5" />
          </a>
          <a
            href="#nouveautes"
            className="dv-pop dv-pop-hover inline-flex h-14 items-center justify-center rounded-full border-[3px] border-[var(--dv-ink)] bg-[var(--dv-cream)] px-8 text-base font-extrabold"
          >
            Voir les nouveautés
          </a>
          {business.phone && (
            <a
              href={telHref(business.phone)}
              className="inline-flex h-14 items-center justify-center gap-2 px-2 text-base font-extrabold text-[var(--dv-denim)] underline decoration-2 underline-offset-4"
            >
              <Phone className="size-4" /> {business.phone}
            </a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
