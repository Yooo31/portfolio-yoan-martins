"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useReducedMotionSafe } from "@/demos/kit/use-reduced-motion"
import { useRef, useSyncExternalStore } from "react"
import { PartyPopper, Phone } from "lucide-react"
import { telHref, type Business } from "@/demos/kit/business"
import { IMAGES } from "./images"

const stickers = [
  {
    src: IMAGES.tacos,
    alt: "Tacos garnis de légumes colorés",
    className: "left-[2%] top-[6%] w-[52%] -rotate-6",
    color: "var(--ft-sun)",
    delay: 0.35,
  },
  {
    src: IMAGES.truck,
    alt: "Food truck garé en ville",
    className: "right-[0%] top-[0%] w-[50%] rotate-[5deg]",
    color: "var(--ft-sky)",
    delay: 0.5,
  },
  {
    src: IMAGES.bowl,
    alt: "Bol de cuisine fraîche et colorée",
    className: "left-[8%] bottom-[2%] w-[46%] rotate-[4deg]",
    color: "var(--ft-mint)",
    delay: 0.65,
  },
  {
    src: IMAGES.shareTable,
    alt: "Grande tablée partagée entre amis",
    className: "right-[4%] bottom-[8%] w-[50%] -rotate-[7deg]",
    color: "var(--ft-berry)",
    delay: 0.8,
  },
]

const subscribe = (cb: () => void) => {
  const mq = window.matchMedia("(min-width: 768px)")
  mq.addEventListener("change", cb)
  return () => mq.removeEventListener("change", cb)
}

/** Vrai sur grand écran : on n'active le glisser-déposer qu'à la souris pour ne pas gêner le scroll tactile. */
function useDesktop() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia("(min-width: 768px)").matches,
    () => false
  )
}

const title = ["On", "cuisine,", "vous", "faites", "la fête."]

export function Hero({ business }: { business: Business }) {
  const reduce = useReducedMotionSafe()
  const desktop = useDesktop()
  const area = useRef<HTMLDivElement>(null)

  return (
    <section id="top" className="ft-dots relative overflow-hidden pt-10 pb-20 sm:pt-16 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ft-sun)] px-4 py-2 text-sm font-bold"
          >
            <PartyPopper className="size-4" /> Food truck & traiteur · {business.city}
          </motion.span>

          <h1 className="font-ft-display mt-7 text-[clamp(3rem,10vw,6.6rem)] leading-[0.9] font-extrabold">
            {title.map((w, i) => (
              <motion.span
                key={w}
                initial={{ opacity: 0, y: 60, rotate: i % 2 ? 6 : -6 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ type: "spring", stiffness: 180, damping: 15, delay: 0.1 + i * 0.09 }}
                className={`mr-[0.22em] inline-block ${i === 1 ? "text-[var(--ft-tomato)]" : ""} ${i === 4 ? "relative" : ""}`}
              >
                {i === 4 ? (
                  <>
                    <span className="relative z-10">{w}</span>
                    <motion.span
                      aria-hidden
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.6, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-x-0 bottom-[0.08em] -z-0 h-[0.32em] origin-left rounded-full bg-[var(--ft-mint)]/45"
                    />
                  </>
                ) : (
                  w
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-7 max-w-xl text-lg text-[var(--ft-plum)]/75"
          >
            Anniversaire, mariage, repas d’entreprise ou fête de quartier : {business.name} installe
            son camion chez vous et régale vos invités,{" "}
            <strong className="text-[var(--ft-plum)]">de 20 à 150 personnes</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#privatiser"
              className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--ft-tomato)] px-8 font-bold text-white shadow-[0_6px_0_var(--ft-plum)] transition hover:translate-y-0.5 hover:shadow-[0_3px_0_var(--ft-plum)]"
            >
              Privatiser le camion
            </a>
            {business.phone && (
              <a
                href={telHref(business.phone)}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-[var(--ft-plum)] px-8 font-bold transition hover:bg-[var(--ft-plum)] hover:text-[var(--ft-cream)]"
              >
                <Phone className="size-4" /> {business.phone}
              </a>
            )}
          </motion.div>
        </div>

        <div ref={area} className="relative aspect-square w-full max-w-[600px] justify-self-center">
          <motion.div
            aria-hidden
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 90, damping: 14, delay: 0.2 }}
            className="absolute inset-[12%] rounded-full bg-[var(--ft-sun)]"
          />
          {stickers.map((s, i) => (
            <motion.div
              key={s.src}
              drag={desktop && !reduce}
              dragConstraints={area}
              dragElastic={0.25}
              whileDrag={{ scale: 1.08, zIndex: 20, cursor: "grabbing" }}
              whileHover={desktop && !reduce ? { scale: 1.04, rotate: 0 } : undefined}
              initial={{ opacity: 0, scale: 0.4, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 13, delay: s.delay }}
              className={`absolute ${s.className} md:cursor-grab`}
              style={{ zIndex: i + 1 }}
            >
              <div className="rounded-[1.6rem] bg-white p-2 shadow-[0_18px_40px_-18px_rgb(43_24_56/0.55)] sm:p-2.5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem]">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 300px, 50vw"
                    draggable={false}
                    className="object-cover"
                    priority={i < 2}
                  />
                </div>
                <span
                  className="absolute -top-2 -right-2 size-6 rounded-full border-4 border-white"
                  style={{ background: s.color }}
                />
              </div>
            </motion.div>
          ))}
          <p className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full bg-[var(--ft-plum)] px-4 py-1.5 text-xs font-semibold whitespace-nowrap text-[var(--ft-cream)] md:block">
            Psst… les photos se déplacent
          </p>
        </div>
      </div>
    </section>
  )
}
