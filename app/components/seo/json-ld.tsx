export function JsonLd() {
  const siteUrl = "https://portfolio.yoanmartins.fr"

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Yoan Martins",
    url: siteUrl,
    jobTitle: "Développeur Fullstack",
    description:
      "Développeur fullstack passionné avec une expertise en React, Next.js, TypeScript et Node.js.",
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "JavaScript",
      "TailwindCSS",
      "PostgreSQL",
      "MongoDB",
    ],
    sameAs: ["https://github.com/yomusic21", "https://linkedin.com/in/yoan-music"],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Yoan Martins | Portfolio",
    url: siteUrl,
    description:
      "Portfolio de Yoan Martins, développeur fullstack passionné. Découvrez mes projets, compétences et expériences.",
    author: {
      "@type": "Person",
      name: "Yoan Martins",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
