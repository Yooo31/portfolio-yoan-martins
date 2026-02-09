import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/shared/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://yoanmartins.fr"),
  title: {
    default: "Yoan Martins - Développeur Full Stack & Architecte UI",
    template: "%s | Yoan Martins",
  },
  description:
    "Développeur Full Stack spécialisé dans la création d'architectures web robustes et d'interfaces utilisateur soignées. React, NextJS, TypeScript, Node.js.",
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
  authors: [{ name: "Yoan Martins", url: "https://yoanmartins.fr" }],
  creator: "Yoan Martins",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://yoanmartins.fr",
    siteName: "Yoan Martins - Portfolio",
    title: "Yoan Martins - Développeur Full Stack & Architecte UI",
    description:
      "Développeur Full Stack spécialisé dans la création d'architectures web robustes et d'interfaces utilisateur soignées.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yoan Martins - Développeur Full Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoan Martins - Développeur Full Stack & Architecte UI",
    description:
      "Développeur Full Stack spécialisé dans la création d'architectures web robustes et d'interfaces utilisateur soignées.",
    images: ["/og-image.png"],
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
      </body>
    </html>
  )
}
