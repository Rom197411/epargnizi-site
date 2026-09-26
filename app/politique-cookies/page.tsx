import { PageShell } from "@/components/page-shell"

export const metadata = {
  title: "Politique relative aux cookies – Epargnizi",
  description: "Politique relative aux cookies d'Epargnizi.",
}

export default function PolitiqueCookiesPage() {
  return (
    <PageShell title="Politique relative aux cookies">
      <p className="text-sm text-muted-foreground">
        Dernière mise à jour : À compléter lors de la mise en ligne officielle.
      </p>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">1. Qu&apos;est-ce qu&apos;un cookie ?</h2>
        <p>
          Un cookie est un petit fichier texte déposé sur votre appareil (ordinateur, smartphone ou tablette) lors de la
          consultation d&apos;un site internet.
        </p>
        <p>
          Les cookies permettent notamment de mémoriser certaines informations afin d&apos;améliorer le fonctionnement et
          l&apos;expérience utilisateur.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">2. Les cookies utilisés par Epargnizi</h2>
        <p>
          À ce jour, Epargnizi n&apos;utilise pas de cookies publicitaires, de cookies de profilage ou de cookies destinés
          à mesurer votre navigation à des fins marketing.
        </p>
        <p>
          Le site utilise uniquement les technologies strictement nécessaires à son fonctionnement et à la fourniture des
          services demandés par l&apos;utilisateur.
        </p>
        <p>
          Selon les fonctionnalités utilisées, certains cookies ou mécanismes techniques peuvent être nécessaires notamment
          pour :
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>assurer le bon fonctionnement du site ;</li>
          <li>maintenir une session utilisateur après connexion ;</li>
          <li>garantir la sécurité des échanges ;</li>
          <li>protéger les formulaires contre certains usages abusifs ;</li>
          <li>mémoriser certaines préférences essentielles au fonctionnement de l&apos;application.</li>
        </ul>
        <p>Ces technologies sont exclusivement utilisées afin de fournir le service attendu par l&apos;utilisateur.</p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">3. Mesure d&apos;audience</h2>
        <p>
          À la date de publication de la présente politique, Epargnizi n&apos;utilise aucun outil de mesure d&apos;audience
          nécessitant le recueil préalable du consentement de l&apos;utilisateur.
        </p>
        <p>
          Si un tel outil venait à être intégré à l&apos;avenir, la présente politique serait mise à jour et, lorsque la
          réglementation l&apos;exige, votre consentement serait recueilli avant le dépôt des cookies concernés.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          4. Cookies déposés par des services tiers
        </h2>
        <p>
          Le recours à certains prestataires techniques (hébergement, diffusion du site, sécurité ou autres services
          nécessaires au fonctionnement de l&apos;application) peut conduire à l&apos;utilisation de technologies strictement
          nécessaires à l&apos;exécution de leurs services.
        </p>
        <p>
          Epargnizi sélectionne ces prestataires avec soin et veille à limiter leur intervention au strict nécessaire.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">5. Gestion des cookies</h2>
        <p>Vous pouvez configurer votre navigateur afin de refuser ou de supprimer les cookies.</p>
        <p>
          Toutefois, le refus des cookies strictement nécessaires au fonctionnement du site peut empêcher l&apos;accès à
          certaines fonctionnalités ou altérer votre expérience d&apos;utilisation.
        </p>
      </section>

      <section className="mt-10 space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">6. Évolution de la présente politique</h2>
        <p>
          Cette politique pourra être mise à jour afin de tenir compte des évolutions techniques, réglementaires ou
          fonctionnelles du site.
        </p>
        <p>La date de dernière mise à jour figurera toujours en tête du document.</p>
      </section>
    </PageShell>
  )
}
