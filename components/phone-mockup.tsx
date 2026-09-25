import { ArrowUpRight, Plus, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"

const categories = [
  { label: "Logement", value: "620 €", pct: 42, tone: "bg-primary" },
  { label: "Courses", value: "310 €", pct: 24, tone: "bg-sky-400" },
  { label: "Loisirs", value: "180 €", pct: 14, tone: "bg-indigo-400" },
  { label: "Transport", value: "120 €", pct: 9, tone: "bg-cyan-400" },
]

export function PhoneMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto w-[300px] rounded-[2.75rem] border border-white/60 bg-neutral-900 p-2.5 shadow-2xl shadow-primary/20 ring-1 ring-black/5",
        className,
      )}
      aria-hidden="true"
    >
      {/* Screen */}
      <div className="relative overflow-hidden rounded-[2.2rem] bg-white">
        {/* Notch */}
        <div className="absolute left-1/2 top-2 z-20 h-6 w-28 -translate-x-1/2 rounded-full bg-neutral-900" />

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-4 pb-2 text-[10px] font-medium text-neutral-500">
          <span>9:41</span>
          <span className="tracking-tight">Epargnizi</span>
        </div>

        {/* Balance card */}
        <div className="px-4">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-indigo-600 p-5 text-white shadow-lg shadow-primary/30">
            <div className="flex items-center gap-2 text-[11px] text-white/80">
              <Wallet className="h-3.5 w-3.5" />
              Solde disponible
            </div>
            <div className="mt-2 text-3xl font-semibold tracking-tight">2 480,50 €</div>
            <div className="mt-3 flex items-center gap-1.5 text-[11px] text-white/90">
              <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2 py-0.5">
                <ArrowUpRight className="h-3 w-3" />
                +12,4%
              </span>
              <span className="text-white/70">ce mois-ci</span>
            </div>
          </div>
        </div>

        {/* Savings goal */}
        <div className="px-4 pt-4">
          <div className="rounded-2xl border border-neutral-100 bg-neutral-50/60 p-4">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-medium text-neutral-700">Objectif · Voyage</span>
              <span className="text-neutral-400">1 600 / 2 000 €</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-neutral-200">
              <div className="h-full w-[80%] rounded-full bg-gradient-to-r from-primary to-indigo-500" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 pt-4 pb-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-neutral-700">Répartition</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Plus className="h-3.5 w-3.5" />
            </span>
          </div>
          <div className="space-y-2.5">
            {categories.map((c) => (
              <div key={c.label}>
                <div className="mb-1 flex items-center justify-between text-[10px]">
                  <span className="text-neutral-600">{c.label}</span>
                  <span className="font-medium text-neutral-800">{c.value}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
                  <div className={cn("h-full rounded-full", c.tone)} style={{ width: `${c.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom nav */}
        <div className="border-t border-neutral-100 px-8 py-3">
          <div className="flex items-center justify-between text-neutral-300">
            <div className="h-1.5 w-6 rounded-full bg-primary" />
            <div className="h-1.5 w-6 rounded-full bg-neutral-200" />
            <div className="h-1.5 w-6 rounded-full bg-neutral-200" />
            <div className="h-1.5 w-6 rounded-full bg-neutral-200" />
          </div>
        </div>
      </div>
    </div>
  )
}
