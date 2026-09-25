import Link from "next/link"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Fonctionnalités", href: "#fonctionnalites" },
  { label: "Notre vision", href: "#vision" },
  { label: "Aperçu", href: "#apercu" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            E
          </span>
          <span className="text-lg font-semibold tracking-tight">Epargnizi</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#beta"
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Se connecter
          </a>
          <Button render={<a href="#beta" />} nativeButton={false} size="sm" className="rounded-full">
            Rejoindre la bêta
          </Button>
        </div>
      </div>
    </header>
  )
}
