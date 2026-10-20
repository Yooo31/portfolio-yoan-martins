import type { Metadata } from "next"
import { MotionSafe } from "@/components/motion/motion-safe"
import "./demos.css"

// Concepts de sites pour des entreprises fictives : hors index, pour ne pas apparaître comme de vrais commerces.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function DemosLayout({ children }: { children: React.ReactNode }) {
  return <MotionSafe>{children}</MotionSafe>
}
