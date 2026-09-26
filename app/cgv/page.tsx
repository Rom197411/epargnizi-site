import { PageShell } from "@/components/page-shell"

export const metadata = {
  title: "Conditions Générales de Vente – Epargnizi",
  description: "Conditions Générales de Vente (CGV) d'Epargnizi.",
}

export default function CgvPage() {
  return (
    <PageShell title="Conditions Générales de Vente">
      <p className="text-sm font-medium text-primary">Version pré-lancement</p>
      <p className="mt-1 text-sm text-muted-foreground">
        Dernière mise à jour : à compléter lors de la mise en ligne officielle.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 1 – Objet</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les présentes Conditions Générales de Vente (CGV) définissent les conditions dans lesquelles Epargnizi propose
          des abonnements donnant accès à certaines fonctionnalités de son application de gestion budgétaire.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Toute souscription à un abonnement implique l&apos;acceptation sans réserve des présentes CGV.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 2 – Présentation du service
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Epargnizi est une application destinée à accompagner les particuliers dans la gestion de leur budget, le suivi
          de leurs dépenses, la constitution d&apos;une épargne et la préparation de leurs projets financiers.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Le service est accessible en ligne depuis un navigateur internet et, à terme, pourra être proposé sur
          d&apos;autres plateformes.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 3 – Éditeur</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Le service est actuellement en phase de développement.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les informations légales complètes de la société exploitante (forme juridique, siège social, SIREN, RCS,
          capital social, etc.) seront publiées lors de son immatriculation avant l&apos;ouverture commerciale du
          service.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 4 – Création d&apos;un compte
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          La souscription à un abonnement nécessite la création préalable d&apos;un compte utilisateur.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          L&apos;utilisateur s&apos;engage à fournir des informations exactes et à maintenir celles-ci à jour pendant
          toute la durée de son abonnement.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 5 – Offres et abonnements
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">Epargnizi proposera plusieurs formules d&apos;abonnement.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          À titre indicatif, les offres actuellement envisagées sont :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
          <li>Abonnement mensuel : 1,99 € TTC par mois.</li>
          <li>Abonnement annuel : 19,99 € TTC par an.</li>
        </ul>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Ces tarifs sont susceptibles d&apos;évoluer avant le lancement officiel.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les prix applicables seront ceux affichés au moment de la souscription.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 6 – Paiement</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les paiements seront effectués par l&apos;intermédiaire d&apos;un prestataire de paiement sécurisé.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Le nom du prestataire sera communiqué lors de l&apos;ouverture commerciale du service.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Epargnizi ne conserve jamais les coordonnées bancaires complètes de ses utilisateurs.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 7 – Renouvellement</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Sauf indication contraire lors de la souscription, les abonnements sont renouvelés automatiquement à leur
          échéance pour une période identique.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          L&apos;utilisateur pourra mettre fin au renouvellement automatique conformément aux modalités décrites dans
          son espace personnel.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 8 – Résiliation</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          L&apos;utilisateur peut résilier son abonnement à tout moment.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          La résiliation prend effet à l&apos;issue de la période d&apos;abonnement déjà réglée.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Aucun remboursement partiel ne sera effectué, sauf disposition légale contraire ou engagement commercial
          spécifique.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 9 – Droit de rétractation
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Conformément à la réglementation applicable, le consommateur dispose en principe d&apos;un délai de quatorze
          (14) jours pour exercer son droit de rétractation.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Toutefois, si l&apos;utilisateur demande expressément l&apos;exécution immédiate du service et reconnaît que
          cette exécution entraîne la perte de son droit de rétractation dans les conditions prévues par la loi, ce
          droit pourra ne plus être applicable une fois le service pleinement exécuté.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 10 – Disponibilité du service
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Epargnizi met tout en œuvre pour assurer la disponibilité de l&apos;application.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Des interruptions temporaires peuvent toutefois intervenir pour des opérations de maintenance, des mises à
          jour ou en cas d&apos;incident technique.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 11 – Responsabilité</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Epargnizi est un outil d&apos;aide à la gestion budgétaire.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les informations, analyses, recommandations et simulations fournies par l&apos;application ont une finalité
          informative et pédagogique.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Elles ne constituent ni un conseil financier, ni un conseil fiscal, ni un conseil juridique.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          L&apos;utilisateur demeure seul responsable des décisions qu&apos;il prend sur la base des informations
          fournies par le service.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Article 12 – Modification des tarifs
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">Epargnizi se réserve le droit de modifier ses tarifs.</p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Toute modification n&apos;affectera pas les abonnements déjà souscrits jusqu&apos;à leur prochaine échéance de
          renouvellement.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les utilisateurs concernés seront informés dans un délai raisonnable avant l&apos;entrée en vigueur des
          nouveaux tarifs.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 13 – Service client</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Pour toute question relative à un abonnement ou à une commande, les utilisateurs peuvent contacter le service
          client à l&apos;adresse suivante :
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          <a href="mailto:contact@epargnizi.fr" className="font-medium text-primary hover:underline">
            contact@epargnizi.fr
          </a>
          <br />
          <span className="text-sm">(Adresse en cours de création.)</span>
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">Article 14 – Droit applicable</h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Les présentes Conditions Générales de Vente sont régies par le droit français.
        </p>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Tout litige relatif à leur interprétation ou à leur exécution sera soumis aux juridictions compétentes, sous
          réserve des dispositions légales applicables aux consommateurs.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
          Quelques ajustements lorsque l&apos;entreprise sera créée
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Quand la SASU sera immatriculée, il faudra compléter ou ajuster :
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground">
          <li>Les informations légales de la société (SIREN, RCS, siège social, capital social).</li>
          <li>Le prestataire de paiement (par exemple Stripe si c&apos;est ton choix).</li>
          <li>Le régime de TVA (TVA applicable ou franchise en base).</li>
          <li>Les modalités exactes de résiliation.</li>
          <li>La politique de remboursement.</li>
          <li>Les éventuelles offres d&apos;essai gratuit ou promotions.</li>
        </ul>
      </section>
    </PageShell>
  )
}
