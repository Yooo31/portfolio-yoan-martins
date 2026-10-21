"use client"

import { motion } from "motion/react"
import { ArrowDown, Phone } from "lucide-react"
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion"
import { telHref, type Business } from "@/demos/kit/business"

/** Critères d'une fiche fictive : ils se cochent un à un à l'arrivée sur la page. */
const criteria = [
  { label: "Budget", value: "Plafond fixé par vous" },
  { label: "Véhicule", value: "Compacte 5 portes" },
  { label: "Carburant", value: "Hybride" },
  { label: "Boîte", value: "Automatique" },
  { label: "Kilométrage", value: "Moins de 60 000 km" },
  { label: "Indispensable", value: "Caméra de recul" },
]

const EASE = [0.22, 1, 0.36, 1] as const
const START = 1.1
const STEP = 0.42

export function Hero({ business }: { business: Business }) {
  const reduce = useReducedMotionSafe()
  const t = (delay: number, duration = 0.7) =>
    reduce ? { duration: 0 } : { duration, delay, ease: EASE }
  const stampDelay = START + criteria.length * STEP + 0.15

  return (
    <section id="top" className="ca-map relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pt-14 pb-20 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10 lg:pt-24 lg:pb-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.05, 0.6)}
            className="ca-label mb-7 inline-flex items-center gap-3 text-[var(--ca-brass)]"
          >
            <span className="h-px w-10 bg-[var(--ca-brass)]" />
            Courtier automobile · {business.city}
          </motion.p>

          <h1 className="font-ca-display text-[clamp(2.5rem,6.4vw,5.2rem)] leading-[1.02] font-extrabold tracking-[-0.025em]">
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={t(0.15, 0.9)}
              className="block"
            >
              Vous décrivez la voiture.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={t(0.32, 0.9)}
              className="relative mt-1 inline-block text-[var(--ca-brass)]"
            >
              Quelqu’un la cherche.
              <svg
                aria-hidden
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute -bottom-3 left-0 h-3 w-full overflow-visible"
              >
                <motion.path
                  d="M2 9 C 60 2, 120 12, 180 6 S 270 4, 298 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.7 }}
                  transition={t(0.95, 0.9)}
                />
              </svg>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.55)}
            className="mt-10 max-w-xl text-lg leading-relaxed text-[var(--ca-mist)]"
          >
            Budget, usage, critères indispensables : remplissez votre fiche de recherche en quelques
            minutes. {business.name} s’occupe de trouver le véhicule qui y correspond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={t(0.7)}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#fiche"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-md bg-[var(--ca-brass)] px-7 font-semibold text-[var(--ca-night)] transition hover:bg-[var(--ca-ivory)]"
            >
              Remplir ma fiche de recherche
              <ArrowDown className="size-4 transition group-hover:translate-y-0.5" />
            </a>
            {business.phone && (
              <a
                href={telHref(business.phone)}
                className="inline-flex h-14 items-center justify-center gap-3 rounded-md border border-[var(--ca-mist)]/35 px-7 font-semibold transition hover:border-[var(--ca-brass)] hover:text-[var(--ca-brass)]"
              >
                <Phone className="size-4" />
                {business.phone}
              </a>
            )}
          </motion.div>
        </div>

        {/* Fiche de recherche façon bon de commande */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: 0 }}
          animate={{ opacity: 1, y: 0, rotate: 1.6 }}
          transition={t(0.45, 1)}
          className="ca-shadow relative mx-auto w-full max-w-md lg:mr-0"
        >
          <div className="ca-fiche px-6 pt-9 pb-10 sm:px-8">
            <div className="flex items-start justify-between gap-4 border-b-2 border-[var(--ca-night)] pb-4">
              <div>
                <p className="ca-label text-[var(--ca-night)]/55">Exemple de fiche</p>
                <p className="font-ca-display mt-1 text-2xl font-extrabold tracking-tight">
                  Fiche de recherche
                </p>
              </div>
              <p className="font-ca-display rounded border border-[var(--ca-night)]/30 px-2 py-1 text-xs font-bold tracking-widest text-[var(--ca-night)]/70">
                N° 000
              </p>
            </div>

            <ul className="mt-2">
              {criteria.map((c, i) => {
                const delay = START + i * STEP
                return (
                  <li
                    key={c.label}
                    className="flex items-center gap-4 border-b border-dashed border-[var(--ca-night)]/25 py-3.5"
                  >
                    <span className="relative flex size-6 shrink-0 items-center justify-center rounded-[4px] border-2 border-[var(--ca-night)]">
                      <motion.span
                        aria-hidden
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={t(delay, 0.25)}
                        className="absolute inset-0 bg-[var(--ca-brass)]"
                      />
                      <svg aria-hidden viewBox="0 0 24 24" className="relative size-4">
                        <motion.path
                          d="M4 12.5 L10 18 L20 6"
                          fill="none"
                          stroke="var(--ca-night)"
                          strokeWidth="3.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          transition={t(delay, 0.35)}
                        />
                      </svg>
                    </span>
                    <span className="ca-label w-24 shrink-0 text-[0.62rem] sm:w-28 sm:text-[0.7rem] text-[var(--ca-night)]/55">
                      {c.label}
                    </span>
                    <motion.span
                      initial={{ opacity: 0.28 }}
                      animate={{ opacity: 1 }}
                      transition={t(delay, 0.4)}
                      className="ml-auto text-right text-[0.95rem] leading-tight font-semibold"
                    >
                      {c.value}
                    </motion.span>
                  </li>
                )
              })}
            </ul>

            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <div aria-hidden className="ca-barcode h-9 w-32 text-[var(--ca-night)]/75" />
                <p className="mt-2 text-[0.7rem] text-[var(--ca-night)]/55">
                  Validée en 3 minutes.
                </p>
              </div>
              <motion.p
                initial={{ opacity: 0, scale: 1.5, rotate: -9 }}
                animate={{ opacity: 1, scale: 1, rotate: -9 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { delay: stampDelay, type: "spring", stiffness: 320, damping: 18 }
                }
                className="font-ca-display rounded-md border-[3px] border-[#a8312b] px-3 py-1.5 text-center text-sm leading-tight font-extrabold tracking-[0.14em] text-[#a8312b] uppercase"
              >
                Fiche
                <br />
                validée
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
