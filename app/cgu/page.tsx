import { PageShell } from "@/components/page-shell"

export const metadata = {
  title: "Conditions Générales d'Utilisation – Epargnizi",
  description: "Conditions Générales d'Utilisation (CGU) d'Epargnizi.",
}

export default function CguPage() {
  return (
    <PageShell title="Conditions Générales d'Utilisation">
      <p className="text-sm font-medium text-primary">Version bêta</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Dernière mise à jour : À compléter lors de la mise en ligne officielle.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 1 – Objet</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les présentes Conditions Générales d&apos;Utilisation (CGU) définissent les règles applicables à
          l&apos;utilisation du site internet et de l&apos;application Epargnizi.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          En utilisant Epargnizi, l&apos;utilisateur reconnaît avoir pris connaissance des présentes CGU et accepter de
          s&apos;y conformer.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 2 – Présentation d&apos;Epargnizi
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Epargnizi est une application de gestion budgétaire ayant pour objectif d&apos;aider les utilisateurs à :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
          <li>suivre leurs revenus ;</li>
          <li>enregistrer leurs dépenses ;</li>
          <li>gérer leur budget ;</li>
          <li>construire leur épargne ;</li>
          <li>préparer leurs projets financiers.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          L&apos;application fournit des outils d&apos;organisation et d&apos;analyse budgétaire.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Elle ne constitue pas un établissement bancaire, un organisme de crédit, un conseiller financier ou un
          prestataire de services d&apos;investissement.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 3 – Accès au service</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">L&apos;accès au site est libre.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Certaines fonctionnalités de l&apos;application nécessitent la création d&apos;un compte utilisateur.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Epargnizi se réserve le droit de limiter temporairement ou définitivement l&apos;accès à certaines
          fonctionnalités durant la phase de développement.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 4 – Création d&apos;un compte
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Pour accéder aux fonctionnalités réservées aux membres, l&apos;utilisateur doit créer un compte.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Lors de son inscription, il s&apos;engage à fournir des informations exactes, complètes et à jour.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">Chaque compte est strictement personnel.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          L&apos;utilisateur est responsable de la confidentialité de ses identifiants de connexion et de toutes les
          actions réalisées depuis son compte.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          En cas d&apos;utilisation frauduleuse ou de suspicion d&apos;accès non autorisé, l&apos;utilisateur s&apos;engage
          à informer Epargnizi dans les meilleurs délais.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 5 – Utilisation du service
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">L&apos;utilisateur s&apos;engage notamment à :</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
          <li>utiliser l&apos;application conformément à sa destination ;</li>
          <li>ne pas tenter d&apos;accéder aux comptes d&apos;autres utilisateurs ;</li>
          <li>ne pas perturber le fonctionnement du service ;</li>
          <li>ne pas contourner les mesures de sécurité mises en place ;</li>
          <li>respecter les lois et réglementations applicables.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 6 – Données saisies</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          L&apos;utilisateur demeure responsable des informations qu&apos;il saisit dans l&apos;application.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Il s&apos;engage notamment à ne pas enregistrer de contenus illicites, frauduleux, diffamatoires ou portant
          atteinte aux droits de tiers.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 7 – Disponibilité</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Epargnizi met tout en œuvre pour assurer une disponibilité optimale du service.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Toutefois, des interruptions peuvent intervenir notamment pour :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
          <li>des opérations de maintenance ;</li>
          <li>des mises à jour ;</li>
          <li>des améliorations techniques ;</li>
          <li>des incidents indépendants de notre volonté.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 8 – Version bêta</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Le service est actuellement proposé en version bêta.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">Certaines fonctionnalités peuvent être :</p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
          <li>incomplètes ;</li>
          <li>modifiées ;</li>
          <li>suspendues ;</li>
          <li>supprimées ;</li>
          <li>remplacées.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les utilisateurs comprennent que cette phase a pour objectif d&apos;améliorer progressivement
          l&apos;application.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 9 – Propriété intellectuelle
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          L&apos;ensemble des contenus composant Epargnizi est protégé par les lois relatives à la propriété
          intellectuelle.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Toute reproduction, copie, adaptation ou diffusion sans autorisation écrite est interdite.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 10 – Suspension ou suppression d&apos;un compte
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Epargnizi peut suspendre ou supprimer un compte notamment en cas :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
          <li>d&apos;utilisation frauduleuse ;</li>
          <li>de tentative de piratage ;</li>
          <li>de violation des présentes CGU ;</li>
          <li>d&apos;utilisation portant atteinte au bon fonctionnement du service.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Dans la mesure du possible, l&apos;utilisateur sera informé préalablement, sauf en cas d&apos;urgence ou de
          nécessité de protéger le service, les autres utilisateurs ou de respecter une obligation légale.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 11 – Limitation de responsabilité
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Epargnizi est un outil d&apos;aide à la gestion budgétaire.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les analyses, recommandations ou simulations proposées par l&apos;application sont fournies à titre informatif.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          L&apos;utilisateur demeure seul responsable de ses décisions financières.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Epargnizi ne garantit ni la réalisation d&apos;économies, ni l&apos;atteinte d&apos;un objectif d&apos;épargne,
          ni l&apos;amélioration de la situation financière de l&apos;utilisateur.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 12 – Évolution des CGU</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les présentes CGU peuvent être modifiées afin de tenir compte :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
          <li>des évolutions du service ;</li>
          <li>des évolutions réglementaires ;</li>
          <li>des évolutions techniques.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-muted-foreground">La version applicable est celle publiée sur le site.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          En cas de modification substantielle, les utilisateurs en seront informés par un moyen approprié.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 13 – Droit applicable</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">Les présentes CGU sont régies par le droit français.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Tout litige relatif à leur interprétation ou à leur exécution relève des juridictions françaises compétentes,
          sous réserve des règles impératives applicables.
        </p>
      </section>
    </PageShell>
  )
}
