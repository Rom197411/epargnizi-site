import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroPhones } from "@/components/hero-phones"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Soft luminous background */}
      <div
        className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-primary/15 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-24 h-[440px] w-[440px] rounded-full bg-sky-300/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/3 top-1/2 h-[300px] w-[300px] rounded-full bg-indigo-300/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pb-24 pt-16 md:pt-24 lg:grid-cols-2 lg:gap-10 lg:pb-32">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-3 py-1 text-xs font-medium text-primary shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Votre argent, enfin sous contrôle
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[3.5rem]">
            Bienvenue sur Epargnizi.{" "}
            <span className="bg-gradient-to-r from-primary to-indigo-500 bg-clip-text text-transparent">
              Construisez l&apos;épargne
            </span>{" "}
            qui donne vie à vos projets.
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Epargnizi analyse automatiquement votre budget, vous aide à épargner intelligemment et transforme chacun de
            vos projets en objectif atteignable.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button
              render={<a href="#beta" />}
              nativeButton={false}
              size="lg"
              className="group h-12 rounded-full px-7 text-base shadow-soft"
            >
              Rejoindre la bêta
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              render={<a href="#fonctionnalites" />}
              nativeButton={false}
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-primary/20 bg-white/60 px-7 text-base backdrop-blur"
            >
              Découvrir
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground lg:justify-start">
            <div className="flex items-center gap-2">
              <span className="flex -space-x-2">
                {["bg-primary", "bg-indigo-400", "bg-sky-400"].map((c) => (
                  <span key={c} className={`h-6 w-6 rounded-full border-2 border-white ${c}`} />
                ))}
              </span>
              <span>+2 000 sur la liste d&apos;attente</span>
            </div>
          </div>
        </div>

        {/* Right: phones */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            className="pointer-events-none absolute inset-0 -z-10 mx-auto h-[520px] w-[520px] rounded-full bg-gradient-to-b from-primary/10 to-transparent blur-2xl"
            aria-hidden="true"
          />
          <HeroPhones />
        </div>
      </div>
    </section>
  )
}
