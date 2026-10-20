import Image from "next/image"
import { Bricolage_Grotesque, Outfit } from "next/font/google"
import { Briefcase, Cake, Heart, Mail, MapPin, Phone, Truck, Users } from "lucide-react"
import { DemoBanner, PhotoCredit } from "@/demos/kit/demo-banner"
import { DemoForm } from "@/demos/kit/demo-form"
import { Marquee } from "@/components/motion/marquee"
import { MobileNav } from "@/components/motion/mobile-nav"
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal"
import { telHref } from "@/demos/kit/business"
import { business } from "./business"
import { Formulas } from "./formulas"
import { Hero } from "./hero"
import { IMAGES } from "./images"
import "./theme.css"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["wdth", "opsz"],
  variable: "--ft-display",
})
const body = Outfit({ subsets: ["latin"], variable: "--ft-body" })

const links = [
  { href: "#evenements", label: "Événements" },
  { href: "#formules", label: "Formules" },
  { href: "#comment", label: "Comment ça marche" },
  { href: "#privatiser", label: "Privatiser" },
]

const events = [
  {
    icon: Cake,
    title: "Anniversaires",
    text: "Petits et grands, un repas convivial servi sur place pendant que vous profitez de vos invités.",
    bg: "var(--ft-sun)",
    fg: "var(--ft-plum)",
    rotate: "-rotate-2",
  },
  {
    icon: Heart,
    title: "Mariages & baptêmes",
    text: "Vin d’honneur, repas du soir ou brunch du lendemain : une formule pensée avec vous, à votre rythme.",
    bg: "var(--ft-berry)",
    fg: "#ffffff",
    rotate: "rotate-1",
  },
  {
    icon: Briefcase,
    title: "Entreprises",
    text: "Repas d’équipe, séminaire, inauguration ou afterwork : le camion se gare devant vos locaux.",
    bg: "var(--ft-mint)",
    fg: "#ffffff",
    rotate: "-rotate-1",
  },
  {
    icon: Users,
    title: "Associations & fêtes de quartier",
    text: "Kermesse, fête de village, tournoi sportif : de quoi nourrir tout le monde sans monter de cuisine.",
    bg: "var(--ft-sky)",
    fg: "var(--ft-plum)",
    rotate: "rotate-2",
  },
]

const steps = [
  {
    title: "Vous nous racontez",
    text: "Date, lieu, nombre de convives et type d’événement via le formulaire ou par téléphone.",
  },
  {
    title: "On compose le menu",
    text: "Une proposition de formule adaptée à vos envies, à vos invités et à votre budget.",
  },
  {
    title: "Le camion arrive",
    text: "Installation sur place, cuisine et service : vous n’avez rien à gérer.",
  },
  {
    title: "Vous profitez",
    text: "Vos invités se régalent, on range, et il ne reste que les bons souvenirs.",
  },
]

const stepColors = ["var(--ft-tomato)", "var(--ft-sun)", "var(--ft-mint)", "var(--ft-berry)"]

export function FoodTruckSite() {
  return (
    <div
      className={`ft-site demo-site ${display.variable} ${body.variable} min-h-screen overflow-x-clip`}
    >
      <DemoBanner name={business.name} className="bg-[var(--ft-plum)] text-[var(--ft-cream)]/80" />

      <header className="sticky top-0 z-50 border-b-2 border-[var(--ft-plum)] bg-[var(--ft-cream)]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <a
            href="#top"
            className="font-ft-display flex items-center gap-2 text-2xl font-extrabold"
          >
            <span className="flex size-9 -rotate-6 items-center justify-center rounded-xl bg-[var(--ft-tomato)] text-white">
              <Truck className="size-5" />
            </span>
            {business.name}
          </a>
          <nav className="hidden items-center gap-7 text-[15px] font-semibold md:flex">
            {links.slice(0, 3).map(l => (
              <a key={l.href} href={l.href} className="transition hover:text-[var(--ft-tomato)]">
                {l.label}
              </a>
            ))}
            <a
              href="#privatiser"
              className="rounded-full bg-[var(--ft-plum)] px-5 py-2.5 text-[var(--ft-cream)] transition hover:bg-[var(--ft-tomato)]"
            >
              Privatiser le camion
            </a>
          </nav>
          <MobileNav
            links={links}
            title={business.name}
            className={`ft-site demo-site ${display.variable} ${body.variable} font-ft-display border-l-2 border-[var(--ft-plum)] bg-[var(--ft-cream)] font-bold`}
          />
        </div>
      </header>

      <main id="main-content">
        <Hero business={business} />

        <Marquee
          className="-mx-4 -rotate-2 border-y-2 border-[var(--ft-plum)] bg-[var(--ft-tomato)] py-4 text-white"
          itemClassName="font-ft-display text-3xl font-extrabold"
          separator={<span className="inline-block size-4 rounded-full bg-[var(--ft-sun)]" />}
          duration={26}
          items={[
            "Anniversaires",
            "Mariages",
            "Repas d’entreprise",
            "Fêtes de quartier",
            "Baptêmes",
            "Afterworks",
            "De 20 à 150 personnes",
          ]}
        />

        {/* Événements */}
        <section
          id="evenements"
          className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-28 pb-24 sm:px-8 lg:pt-36"
        >
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="font-ft-display text-lg font-bold text-[var(--ft-tomato)]">
              Le camion se déplace pour…
            </p>
            <h2 className="font-ft-display mt-3 text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] font-extrabold">
              Tous vos événements, petits ou très grands.
            </h2>
            <p className="mt-5 text-lg text-[var(--ft-plum)]/70">
              Privatisation de <strong className="text-[var(--ft-plum)]">20 à 150 personnes</strong>
              , chez vous, dans une salle ou en plein air, partout en {business.city}.
            </p>
          </Reveal>

          <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {events.map(e => (
              <StaggerItem key={e.title}>
                <div
                  className={`h-full rounded-[2rem] p-7 shadow-[0_8px_0_var(--ft-plum)] ring-2 ring-[var(--ft-plum)] transition duration-300 hover:-translate-y-2 hover:rotate-0 ${e.rotate}`}
                  style={{ background: e.bg, color: e.fg }}
                >
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-white text-[var(--ft-plum)]">
                    <e.icon className="size-7" />
                  </span>
                  <h3 className="font-ft-display mt-8 text-2xl leading-tight font-extrabold">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed opacity-90">{e.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        {/* Formules */}
        <section
          id="formules"
          className="scroll-mt-20 bg-[var(--ft-plum)] py-24 text-[var(--ft-cream)] lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <Reveal className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="font-ft-display text-lg font-bold text-[var(--ft-sun)]">
                  Exemples de formules
                </p>
                <h2 className="font-ft-display mt-3 max-w-2xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] font-extrabold">
                  Un menu qui vous ressemble.
                </h2>
              </div>
              <p className="max-w-md text-[var(--ft-cream)]/70">
                Trois idées pour vous inspirer : touchez une carte pour voir ce qu’elle peut
                contenir. Chaque menu est ensuite composé avec vous, tarifs sur devis.
              </p>
            </Reveal>
            <Formulas />
          </div>
        </section>

        {/* Comment ça marche */}
        <section
          id="comment"
          className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-8 lg:py-32"
        >
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal direction="right" className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] ring-2 ring-[var(--ft-plum)]">
                <Image
                  src={IMAGES.friends}
                  alt="Invités attablés autour d’un repas convivial"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -right-2 -bottom-6 max-w-[230px] rotate-3 rounded-3xl bg-[var(--ft-sun)] p-5 font-bold shadow-[0_6px_0_var(--ft-plum)] ring-2 ring-[var(--ft-plum)] sm:-right-6">
                <span className="font-ft-display block text-3xl font-extrabold">20 → 150</span>
                convives, en privatisation
              </div>
            </Reveal>
            <div>
              <Reveal>
                <p className="font-ft-display text-lg font-bold text-[var(--ft-mint)]">
                  Comment ça marche
                </p>
                <h2 className="font-ft-display mt-3 text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] font-extrabold">
                  Simple comme un coup de fil.
                </h2>
              </Reveal>
              <Stagger className="mt-12 grid gap-5 sm:grid-cols-2">
                {steps.map((s, i) => (
                  <StaggerItem
                    key={s.title}
                    className="rounded-[1.75rem] bg-white p-6 ring-2 ring-[var(--ft-plum)]/10"
                  >
                    <span
                      className="font-ft-display flex size-12 items-center justify-center rounded-full text-xl font-extrabold text-white"
                      style={{
                        background: stepColors[i],
                        color: i === 1 ? "var(--ft-plum)" : "#fff",
                      }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="font-ft-display mt-5 text-xl font-extrabold">{s.title}</h3>
                    <p className="mt-2 text-[15px] text-[var(--ft-plum)]/70">{s.text}</p>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </section>

        {/* Emplacements */}
        <section className="px-4 sm:px-8">
          <Reveal className="mx-auto flex max-w-7xl flex-col items-start gap-6 rounded-[2.5rem] bg-[var(--ft-mint)] p-8 text-white sm:p-12 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--ft-mint)]">
                <MapPin className="size-7" />
              </span>
              <div>
                <h2 className="font-ft-display text-3xl font-extrabold">Où trouver le camion ?</h2>
                <p className="mt-2 max-w-xl text-white/85">
                  Marchés, zones d’activité, soirées : le planning des emplacements de la semaine
                  s’affiche ici, mis à jour en quelques clics.
                </p>
              </div>
            </div>
            {business.phone && (
              <a
                href={telHref(business.phone)}
                className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 font-bold text-[var(--ft-plum)]"
              >
                <Phone className="size-4" /> Se renseigner
              </a>
            )}
          </Reveal>
        </section>

        {/* Privatisation */}
        <section id="privatiser" className="scroll-mt-20 py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <p className="font-ft-display text-lg font-bold text-[var(--ft-berry)]">
                Demande de privatisation
              </p>
              <h2 className="font-ft-display mt-3 text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] font-extrabold">
                Votre fête, notre camion.
              </h2>
              <p className="mt-6 text-lg text-[var(--ft-plum)]/70">
                Quelques infos sur votre événement et on revient vers vous avec une proposition de
                menu et un devis.
              </p>
              <ul className="mt-10 grid gap-3">
                {business.phone && (
                  <li>
                    <a
                      href={telHref(business.phone)}
                      className="flex items-center gap-4 rounded-2xl bg-white p-4 font-semibold ring-2 ring-[var(--ft-plum)]/10 transition hover:ring-[var(--ft-tomato)]"
                    >
                      <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--ft-tomato)] text-white">
                        <Phone className="size-5" />
                      </span>
                      {business.phone}
                    </a>
                  </li>
                )}
                {business.email && (
                  <li>
                    <a
                      href={`mailto:${business.email}`}
                      className="flex items-center gap-4 rounded-2xl bg-white p-4 font-semibold break-all ring-2 ring-[var(--ft-plum)]/10 transition hover:ring-[var(--ft-tomato)]"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--ft-sun)]">
                        <Mail className="size-5" />
                      </span>
                      {business.email}
                    </a>
                  </li>
                )}
              </ul>
              <div className="relative mt-10 hidden aspect-[16/10] overflow-hidden rounded-[2rem] lg:block">
                <Image
                  src={IMAGES.wedding}
                  alt="Tables dressées pour une réception"
                  fill
                  sizes="35vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal
              delay={0.1}
              className="rounded-[2.5rem] bg-white p-6 shadow-[0_10px_0_var(--ft-plum)] ring-2 ring-[var(--ft-plum)] sm:p-10"
            >
              <DemoForm
                submitLabel="Envoyer ma demande"
                buttonClassName="rounded-full font-bold"
                fieldClassName="h-12 rounded-xl bg-[var(--ft-cream)]"
                fields={[
                  { type: "text", name: "nom", label: "Nom", required: true, half: true },
                  { type: "tel", name: "tel", label: "Téléphone", required: true, half: true },
                  { type: "email", name: "email", label: "Email", half: true },
                  {
                    type: "select",
                    name: "evenement",
                    label: "Type d’événement",
                    half: true,
                    options: [
                      "Anniversaire",
                      "Mariage / baptême",
                      "Entreprise / séminaire",
                      "Association / fête de quartier",
                      "Autre",
                    ],
                  },
                  {
                    type: "date",
                    name: "date",
                    label: "Date de l’événement",
                    required: true,
                    half: true,
                  },
                  {
                    type: "number",
                    name: "convives",
                    label: "Nombre de convives (20 à 150)",
                    placeholder: "Ex. : 40",
                    half: true,
                  },
                  {
                    type: "text",
                    name: "lieu",
                    label: "Lieu de l’événement",
                    placeholder: "Commune, salle, jardin…",
                  },
                  {
                    type: "textarea",
                    name: "message",
                    label: "Vos envies",
                    placeholder: "Formule souhaitée, régimes particuliers, horaires du service…",
                  },
                ]}
              />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="ft-wave bg-[var(--ft-plum)] px-4 pt-24 pb-28 text-[var(--ft-cream)] sm:px-8 md:pb-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-ft-display text-5xl font-extrabold sm:text-6xl">
              Cantine <span className="text-[var(--ft-sun)]">Vagabonde</span>
            </p>
            <p className="mt-3 text-[var(--ft-cream)]/70">
              Food truck & traiteur · {business.city}
            </p>
          </div>
          <div className="grid gap-2 text-sm">
            <p className="font-bold text-[var(--ft-sun)]">Contact</p>
            {business.phone && (
              <a href={telHref(business.phone)} className="hover:text-[var(--ft-sun)]">
                {business.phone}
              </a>
            )}
            {business.email && (
              <a href={`mailto:${business.email}`} className="break-all hover:text-[var(--ft-sun)]">
                {business.email}
              </a>
            )}
            <p className="text-[var(--ft-cream)]/70">Emplacements : voir le planning</p>
          </div>
          <div className="grid content-start gap-2 text-sm text-[var(--ft-cream)]/70">
            <p className="font-bold text-[var(--ft-sun)]">Infos</p>
            <p>
              © {new Date().getFullYear()} {business.name}
            </p>
            <PhotoCredit />
          </div>
        </div>
      </footer>

      {/* Barre d'action mobile */}
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-full bg-[var(--ft-plum)] p-1.5 shadow-xl md:hidden">
        {business.phone && (
          <a
            href={telHref(business.phone)}
            className="flex h-12 items-center justify-center gap-2 rounded-full font-bold text-[var(--ft-cream)]"
          >
            <Phone className="size-4" /> Appeler
          </a>
        )}
        <a
          href="#privatiser"
          className="flex h-12 items-center justify-center rounded-full bg-[var(--ft-tomato)] font-bold text-white"
        >
          Privatiser
        </a>
      </div>
    </div>
  )
}
