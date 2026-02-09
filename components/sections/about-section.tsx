import { experiences } from "@/data/experiences"
import { cn } from "@/lib/utils"

export function AboutSection() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 mb-32">
      <h2 className="text-sm font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-12">
        Mon Parcours
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-6">
          <h3 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white">
            Construire avec rigueur.
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Le code est pour moi une structure logique avant d&apos;être une suite de caractères.
            Mon approche du développement est façonnée par ma volonté de créer des systèmes qui
            durent et qui scalent.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Mon parcours académique et professionnel m&apos;a permis d&apos;explorer l&apos;ensemble
            de la chaîne de valeur d&apos;un produit numérique, de la conception architecturale à
            l&apos;intégration finale. Je ne cherche pas seulement à faire fonctionner les choses,
            mais à comprendre comment elles peuvent fonctionner mieux.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Aujourd&apos;hui, je combine cette vision technique avec une sensibilité particulière
            pour les interfaces utilisateur fluides et réactives.
          </p>
        </div>

        <div
          className="relative border-l border-zinc-200 dark:border-zinc-800 pl-8 space-y-10"
          role="list"
          aria-label="Parcours professionnel et académique"
        >
          {experiences.map(exp => (
            <div key={exp.id} className="relative group" role="listitem">
              <div
                className={cn(
                  "absolute -left-9 top-1 w-4 h-4 rounded-full border-2 border-white dark:border-zinc-950 z-10",
                  exp.isCurrent
                    ? "bg-zinc-900 dark:bg-white shadow-sm"
                    : "bg-zinc-300 dark:bg-zinc-700"
                )}
                aria-hidden="true"
              />
              <div>
                <div className="flex justify-between items-baseline mb-1 flex-wrap gap-2">
                  <h4 className="font-medium text-zinc-900 dark:text-white text-lg">
                    {exp.company}
                  </h4>
                  {exp.isCurrent ? (
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                      En cours
                    </span>
                  ) : (
                    <span className="text-xs font-mono text-zinc-400">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-500 font-medium mb-2">{exp.role}</p>
                {exp.description && (
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
