import Image from "next/image"
import { Jost, Playfair_Display } from "next/font/google"
import { CalendarHeart, Mail, MapPin, Phone } from "lucide-react"
import { DemoBanner, PhotoCredit } from "@/demos/kit/demo-banner"
import { DemoForm } from "@/demos/kit/demo-form"
import { Marquee } from "@/demos/kit/marquee"
import { MobileNav } from "@/demos/kit/mobile-nav"
import { Reveal, Stagger, StaggerItem } from "@/demos/kit/reveal"
import { telHref } from "@/demos/kit/business"
import { business } from "./business"
import { Gallery } from "./gallery"
import { Hero } from "./hero"
import { IMAGES } from "./images"
import { Steps } from "./steps"
import "./theme.css"

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--tp-display",
  style: ["normal", "italic"],
})
const body = Jost({ subsets: ["latin"], variable: "--tp-body" })

const links = [
  { href: "#avant-apres", label: "Avant / Après" },
  { href: "#savoir-faire", label: "Savoir-faire" },
  { href: "#etapes", label: "Étapes" },
  { href: "#devis", label: "Devis" },
  { href: "#rendez-vous", label: "Rendez-vous" },
]

const skills = [
  {
    title: "Réfection",
    text: "Dégarnissage complet, contrôle et consolidation de la structure, remplacement des sangles et des ressorts fatigués.",
    image: IMAGES.refection,
    pattern: "tp-pattern-ticking",
  },
  {
    title: "Garnissage",
    text: "Garnissage traditionnel (crin, toile, ressorts) ou moderne (mousse) selon le siège, l’usage et le confort recherché.",
    image: IMAGES.garnissage,
    pattern: "tp-pattern-damask",
  },
  {
    title: "Choix des tissus",
    text: "Velours, lin, tissus d’ameublement résistants : aide au choix des matières, des couleurs et des finitions (galon, clous, passepoil).",
    image: IMAGES.tissus,
    pattern: "tp-pattern-check",
  },
]

export function TapissierSite() {
  return (
    <div className={`tp-site demo-site ${display.variable} ${body.variable} min-h-screen`}>
      <DemoBanner name={business.name} className="bg-[var(--tp-ink)]" />

      <header className="sticky top-0 z-50 border-b border-[var(--tp-ink)]/10 bg-[var(--tp-cream)]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <a href="#top" className="flex items-baseline gap-2 leading-none">
            <span className="font-tp-display text-2xl text-[var(--tp-canard)] italic">
              L’Atelier
            </span>
            <span className="font-tp-display text-2xl">Capiton</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-[var(--tp-ink)]/70 transition hover:text-[var(--tp-terracotta)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <MobileNav
            links={links}
            title={business.name}
            className="tp-site demo-site font-tp-display border-[var(--tp-ink)]/10 bg-[var(--tp-cream)] text-[var(--tp-ink)]"
          />
        </div>
      </header>

      <main>
        <Hero business={business} />

        <Marquee
          duration={40}
          className="bg-[var(--tp-canard)] py-5 text-[var(--tp-cream)]"
          itemClassName="font-tp-display text-2xl italic"
          separator={<span className="text-[var(--tp-terracotta)]">❦</span>}
          items={[
            "Fauteuils",
            "Bergères",
            "Chaises",
            "Banquettes",
            "Têtes de lit",
            "Coussins",
            "Réfection",
            "Garnissage",
          ]}
        />

        {/* Avant / après */}
        <section
          id="avant-apres"
          className="tp-velvet-bg scroll-mt-20 py-24 text-[var(--tp-cream)] lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <Reveal className="mb-12 max-w-2xl">
              <p className="tp-label mb-4 !text-[var(--tp-blush)]">Avant / Après</p>
              <h2 className="font-tp-display text-4xl sm:text-6xl">
                Même fauteuil, <span className="italic">autre allure.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <Gallery />
            </Reveal>
          </div>
        </section>

        {/* Savoir-faire */}
        <section id="savoir-faire" className="scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <Reveal className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="tp-label mb-4">Savoir-faire</p>
                <h2 className="font-tp-display text-4xl sm:text-6xl">
                  Du bâti{" "}
                  <span className="text-[var(--tp-terracotta)] italic">au dernier galon.</span>
                </h2>
              </div>
              <p className="max-w-md text-[var(--tp-ink)]/70 lg:justify-self-end">
                Chaque siège est démonté, examiné puis reconstruit couche après couche. Le résultat
                : une assise saine, confortable et habillée à votre goût.
              </p>
            </Reveal>

            <Stagger className="grid gap-8 md:grid-cols-3">
              {skills.map((s, i) => (
                <StaggerItem
                  key={s.title}
                  className="group bg-[var(--tp-paper)] shadow-[0_20px_50px_-30px_rgb(34_48_47/0.5)]"
                >
                  <div className={`h-3 ${s.pattern}`} />
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="font-tp-display text-sm text-[var(--tp-terracotta)] italic">
                      0{i + 1}
                    </p>
                    <h3 className="font-tp-display mt-1 text-3xl">{s.title}</h3>
                    <p className="mt-3 text-[var(--tp-ink)]/70">{s.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Étapes */}
        <section
          id="etapes"
          className="tp-toile scroll-mt-20 border-y border-[var(--tp-ink)]/10 py-24 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <Reveal className="mb-16 text-center">
              <p className="tp-label mb-4">Comment ça se passe</p>
              <h2 className="font-tp-display text-4xl sm:text-6xl">
                Quatre étapes,{" "}
                <span className="text-[var(--tp-canard)] italic">un point à la fois.</span>
              </h2>
            </Reveal>
            <Steps />
          </div>
        </section>

        {/* Devis */}
        <section id="devis" className="scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="tp-label mb-4">Demande de devis</p>
              <h2 className="font-tp-display text-4xl sm:text-5xl">
                Montrez-nous{" "}
                <span className="text-[var(--tp-terracotta)] italic">votre siège.</span>
              </h2>
              <p className="mt-6 text-[var(--tp-ink)]/70">
                Une ou deux photos suffisent pour une première estimation : vue de face, de profil
                et, si possible, le dessous de l’assise. Tarifs sur devis, selon le siège et le
                tissu choisi.
              </p>
              <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden lg:block">
                <Image
                  src={IMAGES.fabrics}
                  alt="Échantillons de tissus d’ameublement"
                  fill
                  sizes="35vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="tp-card relative p-6 sm:p-10">
              <DemoForm
                submitLabel="Envoyer ma demande"
                buttonClassName="rounded-none tracking-wide"
                fieldClassName="rounded-none h-11 data-[size=default]:h-11 bg-[var(--tp-cream)] border-[var(--tp-ink)]/20"
                fields={[
                  {
                    type: "photos",
                    name: "photos",
                    label: "Photos du siège",
                    hint: "Ajoutez 1 à 3 photos (face, profil, dessous)",
                  },
                  {
                    type: "select",
                    name: "siege",
                    label: "Type de siège",
                    half: true,
                    options: [
                      "Fauteuil",
                      "Bergère / cabriolet",
                      "Chaise(s)",
                      "Canapé / banquette",
                      "Tête de lit",
                      "Autre",
                    ],
                  },
                  {
                    type: "number",
                    name: "quantite",
                    label: "Nombre de pièces",
                    half: true,
                    placeholder: "1",
                  },
                  {
                    type: "select",
                    name: "travaux",
                    label: "Travaux souhaités",
                    half: true,
                    options: [
                      "Réfection complète",
                      "Changement de tissu seul",
                      "Réparation ponctuelle",
                      "Je ne sais pas encore",
                    ],
                  },
                  {
                    type: "select",
                    name: "tissu",
                    label: "Tissu",
                    half: true,
                    options: [
                      "J’ai déjà mon tissu",
                      "Je souhaite être conseillé·e",
                      "À voir ensemble",
                    ],
                  },
                  { type: "text", name: "nom", label: "Nom", required: true, half: true },
                  { type: "tel", name: "tel", label: "Téléphone", required: true, half: true },
                  { type: "email", name: "email", label: "Email" },
                  {
                    type: "textarea",
                    name: "message",
                    label: "Vos envies",
                    placeholder: "Couleurs, ambiance, usage du siège, délai…",
                  },
                ]}
              />
            </Reveal>
          </div>
        </section>

        {/* Rendez-vous */}
        <section id="rendez-vous" className="scroll-mt-20 px-4 pb-24 sm:px-8 lg:pb-32">
          <Reveal className="tp-velvet-bg relative mx-auto max-w-7xl overflow-hidden px-6 py-14 text-[var(--tp-cream)] sm:px-14">
            <div
              className="tp-pattern-damask absolute inset-y-0 right-0 hidden w-1/3 opacity-25 md:block"
              aria-hidden
            />
            <div className="relative grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <CalendarHeart className="size-8 text-[var(--tp-blush)]" />
                <h2 className="font-tp-display mt-4 text-4xl sm:text-5xl">
                  Prendre rendez-vous <span className="italic">à l’atelier</span>
                </h2>
                <p className="mt-4 max-w-md text-[var(--tp-cream)]/75">
                  Pour déposer un siège, voir des échantillons ou parler de votre projet : appelez
                  ou écrivez, un créneau vous sera proposé. L’atelier reçoit sur rendez-vous.
                </p>
              </div>
              <div className="grid gap-3">
                {business.phone && (
                  <a
                    href={telHref(business.phone)}
                    className="flex items-center gap-4 bg-[var(--tp-cream)] px-6 py-5 text-[var(--tp-ink)] transition hover:bg-[var(--tp-blush)]"
                  >
                    <Phone className="size-5 text-[var(--tp-terracotta)]" />
                    <span className="font-tp-display text-2xl">{business.phone}</span>
                  </a>
                )}
                {business.email && (
                  <a
                    href={`mailto:${business.email}`}
                    className="flex items-center gap-4 border border-[var(--tp-cream)]/40 px-6 py-5 transition hover:border-[var(--tp-cream)]"
                  >
                    <Mail className="size-5 shrink-0 text-[var(--tp-blush)]" />
                    <span className="break-all">{business.email}</span>
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[var(--tp-ink)]/10 bg-[var(--tp-paper)] px-4 pt-14 pb-28 sm:px-8 md:pb-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-tp-display text-3xl">
              <span className="text-[var(--tp-canard)] italic">L’Atelier</span> Capiton
            </p>
            <p className="mt-2 flex items-center gap-2 text-sm text-[var(--tp-ink)]/60">
              <MapPin className="size-4" /> Tapissier d’ameublement · {business.city}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-[var(--tp-ink)]/60 md:items-end">
            <p>
              © {new Date().getFullYear()} {business.name}
            </p>
            <PhotoCredit />
          </div>
        </div>
      </footer>

      {/* CTA mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden">
        {business.phone && (
          <a
            href={telHref(business.phone)}
            className="flex h-14 items-center justify-center gap-2 bg-[var(--tp-canard)] font-medium text-[var(--tp-cream)]"
          >
            <Phone className="size-4" /> Appeler
          </a>
        )}
        <a
          href="#devis"
          className="flex h-14 items-center justify-center bg-[var(--tp-terracotta)] font-medium text-[var(--tp-cream)]"
        >
          Devis photo
        </a>
      </div>
    </div>
  )
}
