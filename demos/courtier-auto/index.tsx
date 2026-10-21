import Image from "next/image"
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google"
import { ArrowUpRight, Check, Mail, MapPin, Phone, Search, X } from "lucide-react"
import { DemoBanner, PhotoCredit } from "@/demos/kit/demo-banner"
import { DemoForm } from "@/demos/kit/demo-form"
import { Marquee } from "@/components/motion/marquee"
import { MobileNav } from "@/components/motion/mobile-nav"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { telHref } from "@/demos/kit/business"
import { business } from "./business"
import { Hero } from "./hero"
import { IMAGES } from "./images"
import { RouteSteps } from "./route"
import "./theme.css"

const display = Red_Hat_Display({ subsets: ["latin"], variable: "--ca-display" })
const body = Red_Hat_Text({ subsets: ["latin"], variable: "--ca-body" })

const links = [
  { href: "#pourquoi", label: "Pourquoi un courtier" },
  { href: "#etapes", label: "Les étapes" },
  { href: "#recherches", label: "Recherches" },
  { href: "#fiche", label: "Ma fiche" },
]

const seul = [
  "Des soirées à faire défiler les annonces",
  "Des appels et des messages sans réponse",
  "Des déplacements pour des voitures qui ne correspondent pas",
  "Le doute au moment de signer",
]

const accompagne = [
  "Une seule fiche à remplir, une fois",
  "Un interlocuteur unique, du début à la fin",
  "Uniquement des véhicules qui respectent vos critères",
  "Une décision prise à tête reposée",
]

const recherches = [
  {
    title: "Citadine",
    text: "Pour la ville et les trajets du quotidien.",
    image: IMAGES.citadine,
    alt: "Citadine sombre vue de face",
  },
  {
    title: "Compacte",
    text: "Polyvalente, à l’aise en ville comme sur la route.",
    image: IMAGES.compacte,
    alt: "Compacte verte stationnée",
  },
  {
    title: "Familiale",
    text: "De la place pour les enfants, le coffre et les départs en vacances.",
    image: IMAGES.familiale,
    alt: "Ludospace gris sur un chemin",
  },
]

const pratique = [
  { label: "Honoraires", value: "Forfait fixe", note: "Annoncé avant de commencer" },
  { label: "Véhicules", value: "Neuf et occasion", note: "Toutes marques" },
  { label: "Secteur", value: business.city, note: "Livraison possible à domicile" },
  { label: "Horaires", value: "Lun–sam · 9h–19h", note: "Joignable par téléphone ou e-mail" },
]

function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`font-ca-display flex items-center gap-2.5 text-[1.05rem] font-extrabold tracking-tight ${className}`}
    >
      <span className="flex size-9 items-center justify-center rounded-full border-2 border-[var(--ca-brass)] text-[var(--ca-brass)]">
        <Search className="size-4" strokeWidth={3} />
      </span>
      <span>
        Cap <span className="text-[var(--ca-brass)]">Volant</span>
      </span>
    </a>
  )
}

export function CourtierAutoSite() {
  return (
    <div className={`ca-site demo-site ${display.variable} ${body.variable} min-h-screen`}>
      <DemoBanner name={business.name} className="bg-[#07111c] text-[var(--ca-mist)]" />

      <header className="sticky top-0 z-50 border-b border-[var(--ca-mist)]/15 bg-[var(--ca-night)]/88 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            {links.slice(0, 3).map(l => (
              <a key={l.href} href={l.href} className="ca-link pb-1 text-[var(--ca-mist)]">
                {l.label}
              </a>
            ))}
            <a
              href="#fiche"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-[var(--ca-brass)] px-4 font-semibold text-[var(--ca-night)] transition hover:bg-[var(--ca-ivory)]"
            >
              Ma fiche de recherche
            </a>
          </nav>
          <MobileNav
            links={links}
            title={business.name}
            className="ca-site demo-site font-ca-display border-[var(--ca-mist)]/15 bg-[var(--ca-deep)] text-[var(--ca-ivory)]"
          >
            {business.phone && (
              <a
                href={telHref(business.phone)}
                className="inline-flex items-center gap-2 text-base text-[var(--ca-brass)]"
              >
                <Phone className="size-4" /> {business.phone}
              </a>
            )}
          </MobileNav>
        </div>
      </header>

      <main id="main-content">
        <Hero business={business} />

        <Marquee
          duration={38}
          className="border-y border-[var(--ca-mist)]/15 bg-[var(--ca-deep)] py-4 text-[var(--ca-mist)]"
          itemClassName="ca-label text-[0.78rem]"
          separator={<span className="inline-block size-1.5 rotate-45 bg-[var(--ca-brass)]" />}
          items={[
            "Budget",
            "Type de véhicule",
            "Carburant",
            "Boîte de vitesses",
            "Kilométrage",
            "Nombre de places",
            "Options",
            "Couleur",
          ]}
        />

        {/* Pourquoi un courtier */}
        <section
          id="pourquoi"
          className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32"
        >
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <p className="ca-label mb-5 text-[var(--ca-brass)]">Pourquoi un courtier</p>
              <h2 className="font-ca-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
                Chercher une voiture prend du temps.{" "}
                <span className="text-[var(--ca-mist)]">Pas forcément le vôtre.</span>
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--ca-mist)]">
                Le courtier automobile cherche pour le compte de l’acheteur : vous fixez le cadre,
                il trie, compare et revient vers vous avec ce qui mérite votre attention.
              </p>
              <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={IMAGES.cles}
                  alt="Une clé de voiture passe d’une main à l’autre"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[var(--ca-night)]/25 mix-blend-multiply" />
              </div>
            </Reveal>

            <Stagger className="grid gap-5 sm:grid-cols-2">
              <StaggerItem className="rounded-lg border border-[var(--ca-mist)]/20 p-7">
                <p className="ca-label text-[var(--ca-mist)]">En cherchant seul</p>
                <ul className="mt-6 grid gap-4">
                  {seul.map(s => (
                    <li key={s} className="flex gap-3 text-[var(--ca-mist)]">
                      <X className="mt-1 size-4 shrink-0 opacity-70" />
                      <span className="line-through decoration-[var(--ca-mist)]/40">{s}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
              <StaggerItem className="rounded-lg bg-[var(--ca-deep)] p-7 ring-1 ring-[var(--ca-brass)]/50">
                <p className="ca-label text-[var(--ca-brass)]">Avec un courtier</p>
                <ul className="mt-6 grid gap-4">
                  {accompagne.map(s => (
                    <li key={s} className="flex gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-[4px] bg-[var(--ca-brass)] text-[var(--ca-night)]">
                        <Check className="size-3.5" strokeWidth={3.5} />
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Étapes */}
        <section
          id="etapes"
          className="ca-map scroll-mt-20 border-y border-[var(--ca-mist)]/15 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="mx-auto mb-14 max-w-2xl md:mb-20 md:text-center">
              <p className="ca-label mb-5 text-[var(--ca-brass)]">L’accompagnement</p>
              <h2 className="font-ca-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
                De la première fiche à la remise des clés.
              </h2>
              <p className="mt-5 text-lg text-[var(--ca-mist)]">
                Cinq étapes, un seul trajet. Vous savez toujours où en est votre recherche.
              </p>
            </Reveal>
            <RouteSteps />
          </div>
        </section>

        {/* Recherches types */}
        <section
          id="recherches"
          className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 sm:px-8 lg:py-32"
        >
          <Reveal className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="ca-label mb-5 text-[var(--ca-brass)]">Exemples de recherches</p>
              <h2 className="font-ca-display max-w-2xl text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
                À chaque usage, sa voiture.
              </h2>
            </div>
            <p className="max-w-md text-[var(--ca-mist)]">
              Trois profils pour donner une idée. Votre fiche peut décrire tout autre chose : c’est
              elle qui guide la recherche.
            </p>
          </Reveal>

          <Stagger className="grid gap-6 md:grid-cols-3">
            {recherches.map((r, i) => (
              <StaggerItem
                key={r.title}
                className="group overflow-hidden rounded-lg bg-[var(--ca-deep)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={r.image}
                    alt={r.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ca-deep)] via-transparent to-transparent" />
                  <span className="ca-label absolute top-4 left-4 rounded bg-[var(--ca-night)]/85 px-2.5 py-1.5 text-[0.62rem] text-[var(--ca-brass)]">
                    Exemple {i + 1}
                  </span>
                </div>
                <div className="flex items-end justify-between gap-4 p-6 pt-2">
                  <div>
                    <h3 className="font-ca-display text-2xl font-extrabold tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[var(--ca-mist)]">{r.text}</p>
                  </div>
                  <a
                    href="#fiche"
                    aria-label={`Lancer une recherche de ${r.title.toLowerCase()}`}
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[var(--ca-brass)]/60 text-[var(--ca-brass)] transition hover:bg-[var(--ca-brass)] hover:text-[var(--ca-night)]"
                  >
                    <ArrowUpRight className="size-5" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Infos pratiques */}
          <Stagger className="mt-16 grid gap-px overflow-hidden rounded-lg bg-[var(--ca-mist)]/20 sm:grid-cols-2 lg:grid-cols-4">
            {pratique.map(p => (
              <StaggerItem key={p.label} className="bg-[var(--ca-night)] p-6">
                <p className="ca-label text-[var(--ca-brass)]">{p.label}</p>
                <p className="font-ca-display mt-3 text-xl font-bold">{p.value}</p>
                <p className="mt-1 text-sm text-[var(--ca-mist)]">{p.note}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Bandeau route */}
        <section className="relative h-[46vh] min-h-72 overflow-hidden">
          <Image
            src={IMAGES.route}
            alt="Voiture arrêtée au bord d’une route d’automne"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--ca-night)] via-[var(--ca-night)]/70 to-[var(--ca-night)]/10" />
          <Reveal className="relative mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8">
            <p className="font-ca-display max-w-xl text-3xl leading-tight font-extrabold tracking-tight sm:text-5xl">
              Il ne vous reste qu’à{" "}
              <span className="text-[var(--ca-brass)]">prendre la route.</span>
            </p>
          </Reveal>
        </section>

        {/* Fiche de recherche */}
        <section id="fiche" className="scroll-mt-20 bg-[var(--ca-deep)] py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="ca-label mb-5 text-[var(--ca-brass)]">Votre fiche de recherche</p>
              <h2 className="font-ca-display text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
                Décrivez la voiture qu’il vous faut.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[var(--ca-mist)]">
                Plus la fiche est précise, plus la recherche va droit au but. Rien n’est figé : tout
                se rediscute au téléphone.
              </p>
              <ul className="mt-10 grid gap-4">
                {business.phone && (
                  <li>
                    <a
                      href={telHref(business.phone)}
                      className="flex items-center gap-3 hover:text-[var(--ca-brass)]"
                    >
                      <Phone className="size-4 text-[var(--ca-brass)]" /> {business.phone}
                    </a>
                  </li>
                )}
                {business.email && (
                  <li>
                    <a
                      href={`mailto:${business.email}`}
                      className="flex items-center gap-3 break-all hover:text-[var(--ca-brass)]"
                    >
                      <Mail className="size-4 shrink-0 text-[var(--ca-brass)]" /> {business.email}
                    </a>
                  </li>
                )}
                <li className="flex items-center gap-3">
                  <MapPin className="size-4 text-[var(--ca-brass)]" /> {business.city}
                </li>
              </ul>
            </Reveal>

            <Reveal
              delay={0.1}
              className="rounded-lg border border-[var(--ca-mist)]/20 bg-[var(--ca-night)]"
            >
              <div className="flex items-center justify-between gap-4 border-b-2 border-dashed border-[var(--ca-mist)]/25 px-6 py-5 sm:px-10">
                <p className="font-ca-display text-lg font-extrabold tracking-tight">
                  Fiche de recherche
                </p>
                <div aria-hidden className="ca-barcode h-6 w-24 text-[var(--ca-brass)]/80" />
              </div>
              <div className="p-6 sm:p-10">
                <DemoForm
                  submitLabel="Envoyer ma fiche de recherche"
                  buttonClassName="font-semibold"
                  fieldClassName="h-11 border-[var(--ca-mist)]/30 bg-[var(--ca-deep)]/60"
                  fields={[
                    {
                      type: "select",
                      name: "budget",
                      label: "Budget",
                      half: true,
                      options: [
                        "Moins de 10 000 €",
                        "10 000 à 15 000 €",
                        "15 000 à 25 000 €",
                        "25 000 à 40 000 €",
                        "Plus de 40 000 €",
                        "À définir ensemble",
                      ],
                    },
                    {
                      type: "select",
                      name: "type",
                      label: "Type de véhicule",
                      half: true,
                      options: [
                        "Citadine",
                        "Compacte",
                        "Berline",
                        "Break",
                        "SUV",
                        "Monospace / familiale",
                        "Utilitaire",
                        "Je ne sais pas encore",
                      ],
                    },
                    {
                      type: "select",
                      name: "carburant",
                      label: "Carburant",
                      half: true,
                      options: ["Essence", "Diesel", "Hybride", "Électrique", "Indifférent"],
                    },
                    {
                      type: "select",
                      name: "boite",
                      label: "Boîte de vitesses",
                      half: true,
                      options: ["Manuelle", "Automatique", "Indifférent"],
                    },
                    {
                      type: "textarea",
                      name: "criteres",
                      label: "Vos critères",
                      placeholder:
                        "Modèle envisagé, kilométrage maximum, nombre de places, options indispensables, délai souhaité…",
                    },
                    { type: "text", name: "nom", label: "Nom", required: true, half: true },
                    { type: "tel", name: "tel", label: "Téléphone", required: true, half: true },
                    { type: "email", name: "email", label: "E-mail", half: true },
                    { type: "text", name: "commune", label: "Commune", half: true },
                  ]}
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--ca-mist)]/15 px-5 pt-16 pb-28 sm:px-8 md:pb-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-[var(--ca-mist)]">
              Courtier automobile · {business.city}
            </p>
          </div>
          <div className="grid content-start gap-2 text-sm">
            <p className="ca-label mb-2 text-[var(--ca-brass)]">Nous joindre</p>
            {business.phone && (
              <a href={telHref(business.phone)} className="hover:text-[var(--ca-brass)]">
                {business.phone}
              </a>
            )}
            {business.email && (
              <a
                href={`mailto:${business.email}`}
                className="break-all hover:text-[var(--ca-brass)]"
              >
                {business.email}
              </a>
            )}
          </div>
          <div className="grid content-start gap-2 text-sm text-[var(--ca-mist)]">
            <p className="ca-label mb-2 text-[var(--ca-brass)]">Liens</p>
            {links.slice(0, 3).map(l => (
              <a key={l.href} href={l.href} className="hover:text-[var(--ca-ivory)]">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-2 border-t border-[var(--ca-mist)]/15 pt-6 text-sm text-[var(--ca-mist)] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}
          </p>
          <PhotoCredit />
        </div>
      </footer>

      {/* Barre d'action fixe sur mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-[var(--ca-mist)]/20 md:hidden">
        {business.phone && (
          <a
            href={telHref(business.phone)}
            className="flex h-14 items-center justify-center gap-2 bg-[var(--ca-deep)] font-semibold"
          >
            <Phone className="size-4 text-[var(--ca-brass)]" /> Appeler
          </a>
        )}
        <a
          href="#fiche"
          className="flex h-14 items-center justify-center bg-[var(--ca-brass)] font-semibold text-[var(--ca-night)]"
        >
          Ma fiche de recherche
        </a>
      </div>
    </div>
  )
}
