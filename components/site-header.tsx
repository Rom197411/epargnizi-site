import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-3 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            E
          </span>
          <span className="hidden text-lg font-semibold tracking-tight sm:inline">Epargnizi</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
  href="https://script.google.com/macros/s/AKfycbylXVYFvArcXK-NkqhOQkroMV6y9QSs8PCwJ-SareHUyXghkUWm5gjDIgZ2XTvGDWjL/exec?utm_source=chatgpt.com"
  target="_blank"
  rel="noopener noreferrer"
  className="whitespace-nowrap text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:text-sm"
>
  Se connecter
</Link>
          <Button render={<Link href="/#beta" />} nativeButton={false} size="sm" className="rounded-full whitespace-nowrap px-2 text-xs sm:px-3 sm:text-sm">
            Créer mon compte
          </Button>
        </div>
      </div>
    </header>
  )
}
