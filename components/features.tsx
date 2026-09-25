import { LineChart, PiggyBank, Rocket } from "lucide-react"
import { Card } from "@/components/ui/card"

const features = [
  {
    icon: LineChart,
    title: "Comprendre son budget",
    description:
      "Visualisez vos revenus et dépenses en un coup d'œil. Epargnizi catégorise automatiquement vos transactions pour révéler où part votre argent.",
  },
  {
    icon: PiggyBank,
    title: "Construire son épargne",
    description:
      "Mettez de côté sans y penser. Définissez vos objectifs et laissez l'épargne automatique travailler pour vous, à votre rythme.",
  },
  {
    icon: Rocket,
    title: "Réaliser ses projets",
    description:
      "Voyage, logement, projet perso : suivez votre progression et célébrez chaque étape jusqu'à concrétiser ce qui compte vraiment.",
  },
]

export function Features() {
  return (
    <section id="fonctionnalites" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Comment ça marche</p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Trois étapes pour reprendre le contrôle
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Une méthode simple, pensée pour vous accompagner du premier euro à votre plus grand projet.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {features.map((feature, i) => (
          <Card
            key={feature.title}
            className="group relative overflow-hidden border-border/70 bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
          >
            <span className="text-sm font-semibold text-muted-foreground/50">0{i + 1}</span>
            <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <feature.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight">{feature.title}</h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
