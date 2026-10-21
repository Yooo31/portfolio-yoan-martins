"use client"

import { useState } from "react"
import { RotateCw } from "lucide-react"
import { Stagger, StaggerItem } from "@/components/motion/reveal"

// Étapes d'un dépôt : recto = intitulé, verso = détail.
const steps = [
  {
    title: "Triez votre dressing",
    hint: "Ce que l’on met de côté",
    detail:
      "Mettez de côté les pièces que vous ne portez plus et qui peuvent encore faire plaisir à quelqu’un : propres, en bon état et de saison.",
    tilt: "-rotate-2",
    cord: "h-10",
  },
  {
    title: "Envoyez quelques photos",
    hint: "Avant de vous déplacer",
    detail:
      "Avec le formulaire plus bas : type d’articles, nombre approximatif de pièces et deux ou trois photos. Vous savez à quoi vous attendre avant de venir.",
    tilt: "rotate-1",
    cord: "h-16",
  },
  {
    title: "Apportez vos articles",
    hint: "Le passage en boutique",
    detail:
      "On vous propose un créneau pour passer en boutique, le mardi ou le jeudi. Le tri se fait avec vous, en quelques minutes.",
    tilt: "-rotate-1",
    cord: "h-8",
  },
  {
    title: "Vos pièces sont mises en vente",
    hint: "Et ensuite ?",
    detail:
      "Les articles retenus rejoignent les portants pour huit semaines. À chaque vente, la moitié du prix vous est reversée ; les invendus vous sont rendus.",
    tilt: "rotate-2",
    cord: "h-14",
  },
]

function Eyelet() {
  return (
    <span
      aria-hidden
      className="absolute top-4 left-1/2 size-5 -translate-x-1/2 rounded-full border-[3px] border-[var(--dv-ink)] bg-[var(--dv-cream)]"
    />
  )
}

export function DepositTags() {
  const [flipped, setFlipped] = useState<number | null>(null)

  return (
    <Stagger className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4" role="list">
      {steps.map((s, i) => {
        const open = flipped === i
        return (
          <StaggerItem key={s.title} role="listitem" className="flex flex-col items-center">
            {/* punaise + ficelle */}
            <span
              aria-hidden
              className="size-4 rounded-full border-[3px] border-[var(--dv-ink)] bg-[var(--dv-cherry)]"
            />
            <span
              aria-hidden
              className={`-mb-6 w-0.5 bg-[var(--dv-ink)] ${s.cord} relative z-10 box-content pb-6`}
            />

            <button
              type="button"
              aria-pressed={open}
              onClick={() => setFlipped(open ? null : i)}
              className={`group w-full max-w-72 cursor-pointer rounded-xl text-left outline-none focus-visible:ring-4 focus-visible:ring-[var(--dv-denim)]/50 ${s.tilt}`}
            >
              <span className="dv-tag dv-tag-shadow block">
                <span className="dv-tag-inner relative block h-[21rem]">
                  {/* Recto */}
                  <span
                    aria-hidden={open}
                    className="dv-tag-face absolute inset-0 flex flex-col bg-[var(--dv-butter)] px-6 pt-14 pb-6"
                  >
                    <Eyelet />
                    <span className="absolute inset-x-3 top-12 bottom-3 rounded-md border-2 border-dashed border-[var(--dv-cherry)]/45" />
                    <span className="font-dv-display relative text-7xl leading-none text-[var(--dv-cherry)]">
                      {i + 1}
                    </span>
                    <span className="relative mt-3 text-xs font-extrabold tracking-[0.18em] text-[var(--dv-denim)] uppercase">
                      {s.hint}
                    </span>
                    <span className="font-dv-display relative mt-2 text-[1.7rem] leading-[1.1]">
                      {s.title}
                    </span>
                    <span className="relative mt-auto inline-flex items-center gap-2 text-sm font-extrabold text-[var(--dv-cherry)]">
                      <RotateCw className="size-4 transition group-hover:rotate-90" /> Retourner
                      l’étiquette
                    </span>
                  </span>

                  {/* Verso */}
                  <span
                    aria-hidden={!open}
                    className="dv-tag-face dv-tag-back absolute inset-0 flex flex-col bg-[var(--dv-denim)] px-6 pt-14 pb-6 text-[var(--dv-cream)]"
                  >
                    <Eyelet />
                    <span className="absolute inset-x-3 top-12 bottom-3 rounded-md border-2 border-dashed border-[var(--dv-butter)]/45" />
                    <span className="relative text-xs font-extrabold tracking-[0.18em] text-[var(--dv-butter)] uppercase">
                      Étape {i + 1} · en détail
                    </span>
                    <span className="relative mt-3 text-[0.95rem] leading-relaxed font-semibold">
                      {s.detail}
                    </span>
                    <span className="relative mt-auto inline-flex items-center gap-2 text-sm font-extrabold text-[var(--dv-butter)]">
                      <RotateCw className="size-4" /> Revenir au recto
                    </span>
                  </span>
                </span>
              </span>
            </button>
          </StaggerItem>
        )
      })}
    </Stagger>
  )
}
