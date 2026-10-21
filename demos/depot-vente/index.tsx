import Image from "next/image"
import { Abril_Fatface, Nunito } from "next/font/google"
import { Mail, MapPin, Phone } from "lucide-react"
import { DemoBanner, PhotoCredit } from "@/demos/kit/demo-banner"
import { DemoForm } from "@/demos/kit/demo-form"
import { Marquee } from "@/components/motion/marquee"
import { MobileNav } from "@/components/motion/mobile-nav"
import { Reveal } from "@/components/motion/reveal"
import { telHref } from "@/demos/kit/business"
import { business } from "./business"
import { Hero } from "./hero"
import { IMAGES } from "./images"
import { Polaroids } from "./polaroids"
import { DepositTags } from "./tags"
import "./theme.css"

const display = Abril_Fatface({ weight: "400", subsets: ["latin"], variable: "--dv-display" })
const body = Nunito({ subsets: ["latin"], variable: "--dv-body" })

const fonts = `${display.variable} ${body.variable}`

const links = [
  { href: "#guide", label: "Déposer" },
  { href: "#nouveautes", label: "Nouveautés" },
  { href: "#pratique", label: "Infos pratiques" },
  { href: "#deposer", label: "Je dépose" },
]

const receipt = [
  { label: "Articles acceptés", value: "Vêtements & accessoires" },
  { label: "Part reversée", value: "50 %" },
  { label: "Jours de dépôt", value: "Mardi & jeudi" },
  { label: "Horaires d’ouverture", value: "Mar–sam · 10h–19h" },
  { label: "Durée du dépôt", value: "8 semaines" },
]

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-dv-display leading-none ${className}`}>
      Le <span className="text-[var(--dv-cherry)]">Cintre</span>
    </span>
  )
}

export function DepotVenteSite() {
  return (
    <div className={`dv-site demo-site ${fonts} min-h-screen overflow-x-clip`}>
      <DemoBanner name={business.name} className="bg-[var(--dv-ink)] text-[var(--dv-cream)]/80" />

      <header className="sticky top-0 z-50 border-b-[3px] border-[var(--dv-ink)] bg-[var(--dv-cream)]/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <a href="#top" aria-label={`${business.name}, haut de page`}>
            <Logo className="text-3xl" />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-extrabold md:flex lg:gap-8">
            {links.slice(0, 3).map(l => (
              <a key={l.href} href={l.href} className="transition hover:text-[var(--dv-cherry)]">
                {l.label}
              </a>
            ))}
            <a
              href="#deposer"
              className="rounded-full border-[3px] border-[var(--dv-ink)] bg-[var(--dv-cherry)] px-5 py-2 text-[var(--dv-cream)] transition hover:bg-[var(--dv-denim)]"
            >
              Je souhaite déposer
            </a>
          </nav>
          <MobileNav
            links={links}
            title={business.name}
            className={`dv-site demo-site ${fonts} bg-[var(--dv-cream)] font-extrabold`}
          />
        </div>
      </header>

      <main id="main-content">
        <Hero business={business} />

        <Marquee
          className="border-y-[3px] border-[var(--dv-ink)] bg-[var(--dv-cherry)] py-3.5 text-[var(--dv-cream)]"
          itemClassName="font-dv-display text-2xl"
          separator="✂"
          duration={36}
          items={[
            "Seconde main",
            "Dépôt-vente",
            "Bonnes affaires",
            "Mode circulaire",
            "Nouveautés en boutique",
            "Une deuxième vie pour vos vêtements",
          ]}
        />

        {/* Guide de dépôt */}
        <section id="guide" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <Reveal className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="text-xs font-extrabold tracking-[0.25em] text-[var(--dv-cherry)] uppercase">
                  Le guide du dépôt
                </p>
                <h2 className="font-dv-display mt-4 text-[clamp(2.3rem,6vw,4.25rem)] leading-none">
                  Déposer ses vêtements,{" "}
                  <span className="text-[var(--dv-denim)]">en quatre étiquettes.</span>
                </h2>
              </div>
              <p className="max-w-md text-lg font-semibold text-[var(--dv-ink)]/70 lg:justify-self-end">
                Chaque étiquette se retourne : touchez-la pour lire le détail de l’étape. Pas de
                rendez-vous à rallonge, pas de mauvaise surprise.
              </p>
            </Reveal>

            <DepositTags />

            <Reveal className="mt-14 flex flex-col items-center gap-4 text-center">
              <p className="rounded-full border-2 border-dashed border-[var(--dv-ink)]/40 px-5 py-2 text-sm font-extrabold">
                Dépôt gratuit · 50 % reversés
              </p>
              <a
                href="#deposer"
                className="dv-pop dv-pop-hover inline-flex h-14 items-center justify-center rounded-full border-[3px] border-[var(--dv-ink)] bg-[var(--dv-butter)] px-8 font-extrabold"
              >
                Je prépare mon dépôt
              </a>
            </Reveal>
          </div>
        </section>

        {/* Nouveautés */}
        <section
          id="nouveautes"
          className="scroll-mt-20 overflow-hidden bg-[var(--dv-denim)] py-20 text-[var(--dv-cream)] lg:py-28"
        >
          <Reveal className="mx-auto mb-8 grid max-w-7xl gap-6 px-4 sm:px-8 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-xs font-extrabold tracking-[0.25em] text-[var(--dv-butter)] uppercase">
                Tout juste arrivé
              </p>
              <h2 className="font-dv-display mt-4 text-[clamp(2.3rem,6vw,4.25rem)] leading-none">
                Les nouveautés, <span className="text-[var(--dv-butter)]">épinglées au mur.</span>
              </h2>
            </div>
            <p className="max-w-md text-lg font-semibold text-[var(--dv-cream)]/80 lg:justify-self-end">
              Une photo par arrivage, ajoutée en quelques secondes depuis un téléphone : passez
              vite, les belles pièces ne restent pas longtemps.
            </p>
          </Reveal>
          <Polaroids />
        </section>

        {/* Infos pratiques */}
        <section
          id="pratique"
          className="dv-dots scroll-mt-20 bg-[var(--dv-butter)] py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <Reveal className="relative">
              <div className="dv-pop relative aspect-[4/3] overflow-hidden rounded-3xl border-[3px] border-[var(--dv-ink)]">
                <Image
                  src={IMAGES.shop}
                  alt="Portants de vêtements dans une boutique"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="font-dv-display absolute -bottom-5 left-4 -rotate-3 rounded-xl border-[3px] border-[var(--dv-ink)] bg-[var(--dv-cherry)] px-5 py-2 text-2xl text-[var(--dv-cream)] sm:left-8 sm:text-3xl">
                Chiner, c’est chic.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mx-auto w-full max-w-md">
              <div className="drop-shadow-[5px_6px_0_rgb(34_28_26/0.9)]">
                <div className="dv-receipt bg-[var(--dv-cream)] px-7 py-10 sm:px-9">
                  <p className="text-center text-xs font-extrabold tracking-[0.25em] text-[var(--dv-cherry)] uppercase">
                    Ticket · infos pratiques
                  </p>
                  <h2 className="mt-2 text-center">
                    <Logo className="text-4xl" />
                  </h2>
                  <p className="mt-2 text-center text-sm font-bold text-[var(--dv-ink)]/65">
                    Dépôt-vente de vêtements · {business.city}
                  </p>
                  <dl className="mt-7 border-y-2 border-dashed border-[var(--dv-ink)]/30 py-2">
                    {receipt.map(r => (
                      <div key={r.label} className="flex items-baseline gap-2 py-2 text-[0.95rem]">
                        <dt className="font-bold">{r.label}</dt>
                        <span
                          aria-hidden
                          className="min-w-4 flex-1 border-b-2 border-dotted border-[var(--dv-ink)]/30"
                        />
                        <dd className="font-extrabold text-[var(--dv-cherry)]">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="mt-6 grid gap-3 text-[0.95rem] font-extrabold">
                    {business.phone && (
                      <li>
                        <a
                          href={telHref(business.phone)}
                          className="flex items-center gap-3 hover:text-[var(--dv-cherry)]"
                        >
                          <Phone className="size-4 text-[var(--dv-denim)]" /> {business.phone}
                        </a>
                      </li>
                    )}
                    {business.email && (
                      <li>
                        <a
                          href={`mailto:${business.email}`}
                          className="flex items-center gap-3 hover:text-[var(--dv-cherry)]"
                        >
                          <Mail className="size-4 text-[var(--dv-denim)]" /> {business.email}
                        </a>
                      </li>
                    )}
                  </ul>
                  <p className="mt-7 text-center text-xs font-bold tracking-widest text-[var(--dv-ink)]/50 uppercase">
                    Merci et à bientôt
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Formulaire de dépôt */}
        <section id="deposer" className="scroll-mt-20 py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <p className="text-xs font-extrabold tracking-[0.25em] text-[var(--dv-cherry)] uppercase">
                Je souhaite déposer
              </p>
              <h2 className="font-dv-display mt-4 text-[clamp(2.3rem,6vw,4.25rem)] leading-none">
                Montrez-nous <span className="text-[var(--dv-cherry)]">vos pièces.</span>
              </h2>
              <p className="mt-6 text-lg font-semibold text-[var(--dv-ink)]/70">
                Quelques photos et deux ou trois précisions suffisent pour préparer votre venue.{" "}
                {business.name} vous rappelle ensuite par téléphone ou par e-mail.
              </p>
              <ul className="mt-8 grid gap-3 font-extrabold">
                {business.phone && (
                  <li>
                    <a
                      href={telHref(business.phone)}
                      className="inline-flex items-center gap-3 hover:text-[var(--dv-cherry)]"
                    >
                      <Phone className="size-4 text-[var(--dv-cherry)]" /> {business.phone}
                    </a>
                  </li>
                )}
                {business.email && (
                  <li>
                    <a
                      href={`mailto:${business.email}`}
                      className="inline-flex items-center gap-3 hover:text-[var(--dv-cherry)]"
                    >
                      <Mail className="size-4 text-[var(--dv-cherry)]" /> {business.email}
                    </a>
                  </li>
                )}
                <li className="inline-flex items-center gap-3">
                  <MapPin className="size-4 text-[var(--dv-cherry)]" /> {business.city}
                </li>
              </ul>
            </Reveal>

            <Reveal
              delay={0.1}
              className="dv-pop rounded-3xl border-[3px] border-[var(--dv-ink)] bg-[var(--dv-butter)] p-6 sm:p-10"
            >
              <DemoForm
                submitLabel="Envoyer ma demande de dépôt"
                buttonClassName="rounded-full border-[3px] border-[var(--dv-ink)] font-extrabold"
                fieldClassName="min-h-11 rounded-xl border-2 border-[var(--dv-ink)]/25 bg-[var(--dv-cream)]"
                className="[&_label]:font-extrabold"
                fields={[
                  {
                    type: "select",
                    name: "articles",
                    label: "Type d’articles",
                    half: true,
                    options: [
                      "Vêtements femme",
                      "Vêtements homme",
                      "Vêtements enfant",
                      "Chaussures et accessoires",
                      "Un peu de tout",
                      "Je ne sais pas encore",
                    ],
                  },
                  {
                    type: "number",
                    name: "pieces",
                    label: "Nombre approximatif de pièces",
                    placeholder: "Ex. 12",
                    half: true,
                  },
                  {
                    type: "photos",
                    name: "photos",
                    label: "Photos des articles",
                    hint: "Ajoutez quelques photos de vos articles (vue d’ensemble + étiquettes)",
                  },
                  { type: "text", name: "nom", label: "Nom", required: true, half: true },
                  { type: "tel", name: "tel", label: "Téléphone", required: true, half: true },
                  { type: "email", name: "email", label: "E-mail" },
                  {
                    type: "textarea",
                    name: "message",
                    label: "Précisions",
                    placeholder: "Saison, tailles, état des articles, disponibilités pour passer…",
                  },
                ]}
              />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t-[3px] border-[var(--dv-ink)] bg-[var(--dv-ink)] px-4 pt-16 pb-28 text-[var(--dv-cream)] sm:px-8 md:pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr] md:items-end">
          <div>
            <p className="font-dv-display text-[clamp(3.2rem,11vw,7.5rem)] leading-none">
              Le <span className="text-[var(--dv-butter)]">Cintre</span>
            </p>
            <p className="mt-4 font-bold text-[var(--dv-cream)]/70">
              Dépôt-vente de vêtements · {business.city}
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm font-bold text-[var(--dv-cream)]/80 md:items-end md:text-right">
            {business.phone && (
              <a
                href={telHref(business.phone)}
                className="inline-flex items-center gap-2 hover:text-[var(--dv-butter)]"
              >
                <Phone className="size-4" /> {business.phone}
              </a>
            )}
            {business.email && (
              <a
                href={`mailto:${business.email}`}
                className="inline-flex items-center gap-2 hover:text-[var(--dv-butter)]"
              >
                <Mail className="size-4" /> {business.email}
              </a>
            )}
            <p className="mt-2 font-semibold text-[var(--dv-cream)]/60">
              © {new Date().getFullYear()} {business.name}
            </p>
            <PhotoCredit className="max-w-sm font-semibold" />
          </div>
        </div>
      </footer>

      {/* Barre d'action fixe sur mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t-[3px] border-[var(--dv-ink)] md:hidden">
        {business.phone && (
          <a
            href={telHref(business.phone)}
            className="flex h-14 items-center justify-center gap-2 bg-[var(--dv-cream)] font-extrabold"
          >
            <Phone className="size-4" /> Appeler
          </a>
        )}
        <a
          href="#deposer"
          className="flex h-14 items-center justify-center bg-[var(--dv-cherry)] font-extrabold text-[var(--dv-cream)]"
        >
          Je dépose
        </a>
      </div>
    </div>
  )
}
