export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
            E
          </span>
          <span className="font-semibold tracking-tight">Epargnizi</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href="#fonctionnalites" className="transition-colors hover:text-foreground">
            Fonctionnalités
          </a>
          <a href="#vision" className="transition-colors hover:text-foreground">
            Notre vision
          </a>
          <a href="#beta" className="transition-colors hover:text-foreground">
            Bêta
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Confidentialité
          </a>
        </nav>

        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Epargnizi</p>
      </div>
    </footer>
  )
}
