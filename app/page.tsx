import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Vision } from "@/components/vision"
import { AppShowcase } from "@/components/app-showcase"
import { BetaForm } from "@/components/beta-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-dvh bg-app">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Vision />
        <AppShowcase />
        <BetaForm />
      </main>
      <SiteFooter />
    </div>
  )
}
