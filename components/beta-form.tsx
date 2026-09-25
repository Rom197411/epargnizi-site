"use client"

import { useState } from "react"
import { Check, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const BETA_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbypaL_bdykA5s6uALRwOQ0ENVwbQ7s9A4bBLQC2iCoSTKNsOiIXvlyCv0FsNena-FDr/exec"

type Status = "idle" | "loading" | "success" | "duplicate" | "invalid" | "error"

export function BetaForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [email, setEmail] = useState("")

  // Basic email format validation before hitting the network.
  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    // Ignore submits while a request is already in flight.
    if (status === "loading") return

    // Reject empty or malformed addresses without contacting the endpoint.
    const trimmed = email.trim()
    if (!isValidEmail(trimmed)) {
      setStatus("invalid")
      return
    }

    setStatus("loading")

    try {
      // Send the address to the Google Apps Script endpoint as JSON.
      const res = await fetch(BETA_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      })

      // Apps Script may return plain text or JSON; read it defensively.
      const raw = await res.text()
      let payload: Record<string, unknown> = {}
      try {
        payload = JSON.parse(raw)
      } catch {
        payload = {}
      }

      const signal = `${payload.result ?? ""} ${payload.status ?? ""} ${payload.message ?? ""} ${raw}`
        .toLowerCase()

      const isDuplicate =
        signal.includes("duplicate") ||
        signal.includes("already") ||
        signal.includes("exist") ||
        signal.includes("déjà")

      const isError =
        !res.ok || signal.includes("error") || signal.includes("erreur") || signal.includes("fail")

      if (isDuplicate) {
        setStatus("duplicate")
        setEmail("")
      } else if (isError) {
        setStatus("error")
      } else {
        // Success: clear the field and show the confirmation message.
        setStatus("success")
        setEmail("")
      }
    } catch {
      // Network failure or unreachable endpoint — surface a clear error.
      setStatus("error")
    }
  }

  const feedback =
    status === "success"
      ? { tone: "success" as const, text: "Merci ! Vous êtes inscrit à la liste d'attente." }
      : status === "duplicate"
        ? { tone: "success" as const, text: "Vous êtes déjà inscrit à la liste d'attente." }
        : status === "invalid"
          ? { tone: "error" as const, text: "Merci de saisir une adresse e-mail valide." }
          : status === "error"
            ? { tone: "error" as const, text: "Une erreur est survenue. Merci de réessayer." }
            : null

  return (
    <section id="beta" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-primary to-indigo-600 px-6 py-14 shadow-2xl shadow-primary/20 md:px-16 md:py-20">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-indigo-300/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Rejoignez la bêta d&apos;Epargnizi
          </h2>
          <p className="mt-4 text-pretty text-lg text-white/80">
            Soyez parmi les premiers à tester l&apos;application et à façonner l&apos;avenir de votre épargne.
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-md">
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex-1 text-left">
                <Label htmlFor="email" className="sr-only">
                  Adresse e-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vous@exemple.com"
                  className="h-12 border-white/30 bg-white/95 text-base text-neutral-900 placeholder:text-neutral-400 focus-visible:ring-white"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="h-12 rounded-lg bg-white px-6 text-base font-semibold text-primary hover:bg-white/90"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Inscription…
                  </>
                ) : (
                  "Rejoindre la bêta"
                )}
              </Button>
            </div>

            {feedback ? (
              <div
                role="status"
                aria-live="polite"
                className={`mt-4 flex items-center justify-center gap-3 rounded-2xl px-5 py-3 text-left text-sm font-medium backdrop-blur ${
                  feedback.tone === "success" ? "bg-white/15 text-white" : "bg-red-500/20 text-white"
                }`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                    feedback.tone === "success" ? "bg-white text-primary" : "bg-white text-red-600"
                  }`}
                >
                  {feedback.tone === "success" ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <AlertCircle className="h-4 w-4" />
                  )}
                </span>
                <span>{feedback.text}</span>
              </div>
            ) : (
              <p className="mt-3 text-xs text-white/70">
                Gratuit pendant la bêta. Aucune carte requise. Désinscription en un clic.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
