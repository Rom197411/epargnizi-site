import type { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface PageShellProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <div className="flex min-h-dvh flex-col bg-app">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-[900px] px-6 py-16 md:py-24">
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          {description ? (
            <p className="mt-4 text-pretty text-lg text-muted-foreground">{description}</p>
          ) : null}
          <div className="mt-10">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
