const screens = [
  {
    src: "/app/gestion.jpg",
    alt: "Écran Gestion des opérations de l'application Epargnizi",
    label: "Gestion des opérations",
  },
  {
    src: "/app/accueil.jpg",
    alt: "Écran Accueil de l'application Epargnizi",
    label: "Accueil",
  },
  {
    src: "/app/projet.jpg",
    alt: "Écran Mon projet de l'application Epargnizi",
    label: "Mon projet",
  },
]

export function AppShowcase() {
  return (
    <section id="apercu" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">L&apos;application</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Pensée jusque dans le moindre détail
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Une expérience fluide et élégante pour piloter votre budget, suivre vos opérations et donner vie à vos
            projets.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {screens.map((screen) => (
            <div key={screen.label} className="flex flex-col items-center">
              <div className="w-full max-w-[260px] rounded-[2.2rem] bg-gradient-to-b from-white to-neutral-200 p-[6px] shadow-xl shadow-primary/10 ring-1 ring-black/5">
                <div className="overflow-hidden rounded-[1.8rem] bg-white ring-1 ring-black/5">
                  <img
                    src={screen.src || "/placeholder.svg"}
                    alt={screen.alt}
                    className="block h-auto w-full select-none"
                    draggable={false}
                  />
                </div>
              </div>
              <span className="mt-4 text-sm font-medium text-muted-foreground">{screen.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
