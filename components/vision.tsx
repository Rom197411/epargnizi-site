export function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-white/80 px-6 py-16 text-center shadow-soft backdrop-blur md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Notre vision</p>
            <blockquote className="mt-6 text-balance text-3xl font-medium leading-[1.25] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              &laquo;&nbsp;Chez Epargnizi, nous croyons que chacun mérite de{" "}
              <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
                vivre ses projets
              </span>
              , pas seulement de les rêver.&nbsp;&raquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                E
              </span>
              <span className="text-sm font-medium text-muted-foreground">L&apos;équipe Epargnizi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
