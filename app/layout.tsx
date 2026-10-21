import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import { ThemeProvider } from "@/components/shared/theme-provider"
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Les scripts de mesure sont servis par Vercel (/_vercel/*) : hors build Vercel (local, CI), ils
// répondraient en 404 et pollueraient la console. VERCEL n'est défini que pendant un build Vercel.
const isVercelBuild = process.env.VERCEL === "1"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Yoan Martins",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Développeur Full Stack",
    "React",
    "NextJS",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "UI/UX",
    "Frontend",
    "Backend",
    "Yoan Martins",
  ],
  authors: [{ name: "Yoan Martins", url: SITE_URL }],
  creator: "Yoan Martins",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Yoan Martins - Portfolio",
    title: SITE_TITLE,
    description:
      "Développeur Full Stack spécialisé dans la création d'architectures web robustes et d'interfaces utilisateur soignées.",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Développeur Full Stack spécialisé dans la création d'architectures web robustes et d'interfaces utilisateur soignées.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased selection:bg-zinc-200 selection:text-zinc-900 dark:selection:bg-zinc-800 dark:selection:text-white font-sans">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zinc-900 focus:text-white focus:rounded-lg"
          >
            Aller au contenu principal
          </a>
          {children}
        </ThemeProvider>
        {isVercelBuild && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  )
}
