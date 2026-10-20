"use client"

import { MotionConfig } from "motion/react"

/**
 * Les états initiaux sont identiques serveur/client (pas d'hydratation divergente) ;
 * en « reduced motion », motion saute les transformations et ne garde que les fondus.
 */
export function MotionSafe({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
