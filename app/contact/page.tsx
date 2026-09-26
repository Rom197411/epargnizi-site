import { PageShell } from "@/components/page-shell"

export const metadata = {
  title: "Contact – Epargnizi",
  description: "Contactez l'équipe Epargnizi. Une question, une suggestion ? Nous sommes à votre écoute.",
}

export default function ContactPage() {
  return (
    <PageShell title="Contact" description="Une question ? Une suggestion ? Nous sommes à votre écoute.">
      <div className="space-y-12">
        <section className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Chez Epargnizi, nous accordons une grande importance aux échanges avec nos utilisateurs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Que vous souhaitiez signaler un problème, poser une question, proposer une amélioration ou simplement
            partager votre avis, nous serons ravis de vous répondre.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Vos retours contribuent directement à l&apos;amélioration d&apos;Epargnizi et nous permettent de développer
            une application toujours plus simple, plus performante et plus adaptée à vos besoins.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Nous contacter</h2>
          <p className="text-muted-foreground leading-relaxed">
            Adresse e-mail :{" "}
            <a href="mailto:contact@epargnizi.fr" className="font-medium text-primary hover:underline">
              contact@epargnizi.fr
            </a>
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nous nous engageons à répondre à votre demande dans les meilleurs délais.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Pourquoi nous écrire ?</h2>
          <p className="text-muted-foreground leading-relaxed">Vous pouvez nous contacter notamment pour :</p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground leading-relaxed">
            <li>Obtenir de l&apos;aide concernant votre compte.</li>
            <li>Signaler un problème technique.</li>
            <li>Poser une question sur le fonctionnement de l&apos;application.</li>
            <li>Nous faire part d&apos;une suggestion d&apos;amélioration.</li>
            <li>Demander des informations sur les futures fonctionnalités.</li>
            <li>Exercer vos droits relatifs à vos données personnelles (RGPD).</li>
            <li>Toute autre demande concernant Epargnizi.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Assistance</h2>
          <p className="text-muted-foreground leading-relaxed">
            Avant de nous contacter, nous vous invitons à consulter notre{" "}
            <a href="/faq" className="font-medium text-primary hover:underline">
              FAQ
            </a>
            , qui répond aux questions les plus fréquemment posées.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Si vous ne trouvez pas la réponse recherchée, notre équipe se fera un plaisir de vous accompagner.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Protection de vos données</h2>
          <p className="text-muted-foreground leading-relaxed">
            Les informations que vous nous communiquez dans le cadre de nos échanges sont utilisées uniquement pour
            répondre à votre demande.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Elles sont traitées conformément à notre{" "}
            <a href="/politique-confidentialite" className="font-medium text-primary hover:underline">
              Politique de confidentialité
            </a>{" "}
            et ne sont jamais vendues, louées ou utilisées à des fins commerciales sans votre consentement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Notre engagement</h2>
          <p className="text-muted-foreground leading-relaxed">
            Nous avons créé Epargnizi avec une conviction simple : la confiance est au cœur d&apos;une bonne gestion
            financière.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            C&apos;est pourquoi chaque message reçu est traité avec attention, confidentialité et dans le respect de nos
            utilisateurs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Merci de contribuer, par vos retours, à faire évoluer Epargnizi.
          </p>
        </section>
      </div>
    </PageShell>
  )
}
