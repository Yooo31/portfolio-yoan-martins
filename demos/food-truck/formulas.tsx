"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { useReducedMotionSafe } from "@/components/motion/use-reduced-motion"
import { useState } from "react"
import { RotateCw } from "lucide-react"
import { IMAGES } from "./images"

// Exemples de formules pour la démonstration.
const formulas = [
  {
    name: "Street food",
    tagline: "Comme au food truck, servi minute.",
    image: IMAGES.tacosPlate,
    color: "var(--ft-tomato)",
    items: [
      "Plat chaud préparé devant vos invités",
      "Garnitures et sauces au choix",
      "Accompagnement de saison",
      "Dessert gourmand",
    ],
  },
  {
    name: "Buffet partagé",
    tagline: "Des grands plats au centre de la table.",
    image: IMAGES.spread,
    color: "var(--ft-mint)",
    items: [
      "Assortiment de salades composées",
      "Plats chauds à partager",
      "Pains et condiments",
      "Plateau de desserts",
    ],
  },
  {
    name: "Cocktail & bouchées",
    tagline: "Pour l’apéro qui s’éternise.",
    image: IMAGES.buffet,
    color: "var(--ft-berry)",
    items: [
      "Bouchées salées froides et chaudes",
      "Verrines et mini-portions",
      "Planches à partager",
      "Douceurs sucrées",
    ],
  },
]

function FlipCard({ f, index }: { f: (typeof formulas)[number]; index: number }) {
  const [flipped, setFlipped] = useState(false)
  const reduce = useReducedMotionSafe()

  return (
    <motion.button
      type="button"
      onClick={() => setFlipped(v => !v)}
      aria-pressed={flipped}
      aria-label={`Formule ${f.name} : ${flipped ? "voir la photo" : "voir la composition"}`}
      initial={{ opacity: 0, y: 50, rotate: index % 2 ? 4 : -4 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 120, damping: 16, delay: index * 0.1 }}
      className="ft-flip group block h-[440px] w-full text-left outline-none focus-visible:ring-4 focus-visible:ring-[var(--ft-sun)]"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 14 }}
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Recto */}
        <div className="ft-face absolute inset-0 flex flex-col overflow-hidden rounded-[2rem] bg-white shadow-[0_8px_0_var(--ft-plum)] ring-2 ring-[var(--ft-plum)]">
          <div className="relative flex-1">
            <Image
              src={f.image}
              alt={`Exemple de formule ${f.name}`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-xs font-bold tracking-wide text-[var(--ft-plum)] uppercase">
              Exemple de formule
            </span>
          </div>
          <div className="flex items-end justify-between gap-4 p-6" style={{ background: f.color }}>
            <div className="text-white">
              <h3 className="font-ft-display text-3xl font-extrabold">{f.name}</h3>
              <p className="mt-1 text-sm text-white/90">{f.tagline}</p>
            </div>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-[var(--ft-plum)] transition group-hover:rotate-180">
              <RotateCw className="size-5" />
            </span>
          </div>
        </div>

        {/* Verso */}
        <div
          className="ft-face absolute inset-0 flex flex-col rounded-[2rem] p-7 text-white shadow-[0_8px_0_var(--ft-plum)] ring-2 ring-[var(--ft-plum)]"
          style={{ background: f.color, transform: "rotateY(180deg)" }}
        >
          <p className="text-xs font-bold tracking-widest text-white/80 uppercase">
            Exemple de composition
          </p>
          <h3 className="font-ft-display mt-2 text-3xl font-extrabold">{f.name}</h3>
          <ul className="mt-6 grid gap-3">
            {f.items.map(item => (
              <li
                key={item}
                className="flex gap-3 rounded-2xl bg-white/15 px-4 py-3 text-[15px] font-medium"
              >
                <span aria-hidden className="mt-1.5 size-2 shrink-0 rounded-full bg-white" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-auto pt-4 text-sm font-semibold text-white/90">
            Composition adaptable · Tarifs sur devis
          </p>
        </div>
      </motion.div>
    </motion.button>
  )
}

/** Cartes de formules qui pivotent au clic pour révéler la composition. */
export function Formulas() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {formulas.map((f, i) => (
        <FlipCard key={f.name} f={f} index={i} />
      ))}
    </div>
  )
}
