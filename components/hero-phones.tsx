import { cn } from "@/lib/utils"

type PhoneProps = {
  src: string
  alt: string
  className?: string
  style?: React.CSSProperties
  width: number
}

function Phone({ src, alt, className, style, width }: PhoneProps) {
  return (
    <div
      className={cn(
        "shrink-0 rounded-[2.4rem] bg-gradient-to-b from-white to-neutral-200 p-[6px] shadow-float ring-1 ring-black/5",
        className,
      )}
      style={{ width, ...style }}
    >
      <div className="overflow-hidden rounded-[2rem] bg-white ring-1 ring-black/5">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="block h-auto w-full select-none"
          draggable={false}
        />
      </div>
    </div>
  )
}

export function HeroPhones() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Left — Gestion des opérations */}
      <Phone
        src="/app/gestion.jpg"
        alt="Écran Gestion des opérations de l'application Epargnizi"
        width={210}
        className="hidden translate-y-10 -rotate-[9deg] md:block"
        style={{ marginRight: "-3.25rem", zIndex: 10 }}
      />

      {/* Center — Accueil (largest) */}
      <Phone
        src="/app/accueil.jpg"
        alt="Écran Accueil de l'application Epargnizi"
        width={252}
        className="relative"
        style={{ zIndex: 30 }}
      />

      {/* Right — Mon projet */}
      <Phone
        src="/app/projet.jpg"
        alt="Écran Mon projet de l'application Epargnizi"
        width={210}
        className="hidden translate-y-10 rotate-[9deg] md:block"
        style={{ marginLeft: "-3.25rem", zIndex: 10 }}
      />
    </div>
  )
}
