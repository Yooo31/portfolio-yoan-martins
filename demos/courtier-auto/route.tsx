"use client"

import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react"
import { useRef } from "react"
import { CarFront } from "lucide-react"

const steps = [
  {
    title: "Votre fiche",
    text: "Budget, type de véhicule, carburant, boîte, critères indispensables : vous décrivez la voiture recherchée, en ligne ou par téléphone.",
  },
  {
    title: "L’échange",
    text: "Un appel pour préciser l’usage du véhicule, ce qui est négociable et ce qui ne l’est pas. Le cadre de la recherche est posé.",
  },
  {
    title: "La recherche",
    text: "Les annonces sont passées au crible à votre place. Vous ne recevez que les véhicules qui correspondent à la fiche.",
  },
  {
    title: "La sélection",
    text: "Les véhicules retenus vous sont présentés, avec leurs points forts et leurs limites. Vous comparez et décidez sans pression.",
  },
  {
    title: "La remise des clés",
    text: "Démarches, rendez-vous et récupération du véhicule : on s’occupe de tout, vous n’avez plus qu’à prendre le volant.",
  },
]

const N = steps.length
const SAMPLES = 160

/** Route sinueuse décrite par x = f(t), t allant de 0 (haut) à 1 (bas) : tracé et repère partagent la même fonction. */
function makeRoad(center: number, amp: number) {
  const x = (t: number) => center + amp * Math.sin(Math.PI * N * t)
  let d = ""
  for (let k = 0; k <= SAMPLES; k++) {
    const t = k / SAMPLES
    d += `${k ? "L" : "M"}${x(t).toFixed(2)} ${(t * 100).toFixed(2)}`
  }
  return { x, d }
}

const ROADS = {
  desktop: makeRoad(50, 4.5),
  mobile: makeRoad(8, 3),
}

function Road({
  progress,
  variant,
  className,
}: {
  progress: MotionValue<number>
  variant: keyof typeof ROADS
  className: string
}) {
  const { x, d } = ROADS[variant]
  const clipPath = useTransform(progress, v => `inset(0 0 ${((1 - v) * 100).toFixed(2)}% 0)`)
  const left = useTransform(progress, v => `${x(v).toFixed(2)}%`)
  const top = useTransform(progress, v => `${(v * 100).toFixed(2)}%`)

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 size-full overflow-visible"
      >
        <path d={d} className="ca-road-bed" />
        <path d={d} className="ca-road-dash" />
      </svg>
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ clipPath }}
        className="absolute inset-0 size-full"
      >
        <path d={d} className="ca-road-line" />
      </motion.svg>
      <motion.div
        style={{ left, top }}
        className="absolute size-10 -translate-x-1/2 -translate-y-1/2 md:size-12"
      >
        <span className="ca-ping absolute inset-0 rounded-full bg-[var(--ca-brass)]" />
        <span className="relative flex size-full items-center justify-center rounded-full border-2 border-[var(--ca-night)] bg-[var(--ca-brass)] text-[var(--ca-night)] shadow-lg">
          <CarFront className="size-5 md:size-6" />
        </span>
      </motion.div>
    </div>
  )
}

function Step({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[number]
  index: number
  progress: MotionValue<number>
}) {
  const at = (index + 0.5) / N
  const punched = useTransform(progress, [at - 0.09, at - 0.02], [0, 1])
  const lift = useTransform(progress, [at - 0.14, at - 0.02], [0.96, 1])
  const left = index % 2 === 0
  const num = String(index + 1).padStart(2, "0")

  return (
    <li className="flex items-center py-4 pl-16 md:grid md:grid-cols-2 md:py-6 md:pl-0">
      <motion.article
        style={{ scale: lift }}
        className={`ca-shadow w-full md:w-[82%] ${left ? "md:justify-self-start" : "md:col-start-2 md:justify-self-end"}`}
      >
        <div className="ca-ticket flex">
          <div className="ca-ticket-stub flex shrink-0 flex-col items-center justify-center gap-2 py-6">
            <span className="ca-label text-[0.6rem] text-[var(--ca-night)]/50">Étape</span>
            <span className="relative flex size-11 items-center justify-center rounded-full border-2 border-[var(--ca-night)] sm:size-14">
              <motion.span
                style={{ opacity: punched }}
                className="absolute inset-0 rounded-full bg-[var(--ca-brass)]"
              />
              <span className="font-ca-display relative text-lg font-extrabold sm:text-xl">
                {num}
              </span>
            </span>
          </div>
          <div className="px-5 py-6 sm:px-7 sm:py-8">
            <h3 className="font-ca-display text-xl font-extrabold tracking-tight sm:text-2xl">
              {step.title}
            </h3>
            <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--ca-night)]/75">
              {step.text}
            </p>
          </div>
        </div>
      </motion.article>
      <span
        aria-hidden
        className={`font-ca-display hidden text-[9rem] leading-none font-black text-[var(--ca-mist)]/10 md:row-start-1 md:block ${
          left
            ? "md:col-start-2 md:justify-self-end md:pr-6"
            : "md:col-start-1 md:justify-self-start md:pl-6"
        }`}
      >
        {num}
      </span>
    </li>
  )
}

/** Étapes de l'accompagnement : une route se trace au scroll, un repère la suit, les tickets se poinçonnent. */
export function RouteSteps() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 62%", "end 62%"] })
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 28 })

  return (
    <div ref={ref} className="relative">
      <Road progress={progress} variant="mobile" className="md:hidden" />
      <Road progress={progress} variant="desktop" className="hidden md:block" />
      <ol className="relative grid auto-rows-fr">
        {steps.map((s, i) => (
          <Step key={s.title} step={s} index={i} progress={progress} />
        ))}
      </ol>
    </div>
  )
}
