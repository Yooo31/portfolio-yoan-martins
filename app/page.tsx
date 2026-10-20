import type { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { StackSection } from "@/components/sections/stack-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/site"

// Canonical ici et pas dans le layout : les démos hériteraient sinon de celui de l'accueil.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

// Données structurées (schema.org) : aident Google à relier le site à la personne.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Yoan Martins",
      url: `${SITE_URL}/`,
      image: `${SITE_URL}/images/profile/yoan-martins.webp`,
      jobTitle: "Développeur Full Stack",
      email: "mailto:contact@yoanmartins.fr",
      sameAs: ["https://github.com/Yooo31", "https://linkedin.com/in/yoan-martins"],
      knowsAbout: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "fr-FR",
      author: { "@id": `${SITE_URL}/#person` },
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main id="main-content" className="pt-32 pb-20">
        <HeroSection />
        <ProjectsSection />
        <StackSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
