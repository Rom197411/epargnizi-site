import { PageShell } from "@/components/page-shell"

export const metadata = {
  title: "Politique de confidentialité – Epargnizi",
  description: "Politique de confidentialité d'Epargnizi.",
}

export default function PolitiqueConfidentialitePage() {
  return (
    <PageShell
      title="Politique de confidentialité"
      description="Dernière mise à jour : à compléter lors de la mise en ligne officielle."
    >
      <div className="space-y-12 leading-relaxed text-muted-foreground">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">1. Notre engagement</h2>
          <p>
            Chez Epargnizi, la protection de vos données personnelles est une priorité.
          </p>
          <p>
            Nous considérons que les informations que vous nous confiez constituent un élément essentiel de la relation
            de confiance que nous construisons avec nos utilisateurs.
          </p>
          <p>
            La présente politique de confidentialité a pour objectif de vous expliquer, de manière simple et
            transparente :
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>quelles données nous collectons ;</li>
            <li>pourquoi nous les collectons ;</li>
            <li>comment elles sont protégées ;</li>
            <li>combien de temps elles sont conservées ;</li>
            <li>quels sont vos droits.</li>
          </ul>
          <p>
            Nous nous engageons à traiter vos données conformément au Règlement Général sur la Protection des Données
            (RGPD) et à la réglementation française applicable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">2. Responsable du traitement</h2>
          <p>Le traitement des données est assuré par :</p>
          <p className="font-medium text-foreground">Epargnizi</p>
          <p>Le projet est actuellement en phase de développement.</p>
          <p>
            Les informations légales complètes du responsable de traitement (raison sociale, siège social, numéro
            SIREN, etc.) seront publiées lors de l&apos;immatriculation de la société avant l&apos;ouverture commerciale
            du service.
          </p>
          <p>Pour toute question relative à vos données personnelles :</p>
          <p>
            <a href="mailto:contact@epargnizi.fr" className="font-medium text-primary hover:underline">
              contact@epargnizi.fr
            </a>
          </p>
          <p>(Adresse en cours de création.)</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">3. Les données que nous collectons</h2>
          <p>
            Selon votre utilisation du service, nous pouvons être amenés à collecter les informations suivantes.
          </p>

          <h3 className="text-lg font-semibold text-foreground">Informations d&apos;identification</h3>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>adresse e-mail ;</li>
            <li>prénom ;</li>
            <li>nom (si renseigné).</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground">Informations relatives à votre compte</h3>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>mot de passe (stocké sous forme chiffrée et jamais en clair) ;</li>
            <li>date de création du compte ;</li>
            <li>historique de connexion ;</li>
            <li>préférences de l&apos;application.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground">Données budgétaires</h3>
          <p>Lorsque vous utilisez Epargnizi, vous pouvez enregistrer notamment :</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>vos revenus ;</li>
            <li>vos dépenses ;</li>
            <li>vos catégories de dépenses ;</li>
            <li>vos objectifs d&apos;épargne ;</li>
            <li>vos budgets mensuels ;</li>
            <li>vos analyses financières générées par l&apos;application.</li>
          </ul>
          <p>
            Ces informations sont exclusivement utilisées afin de vous fournir les fonctionnalités proposées par
            Epargnizi.
          </p>

          <h3 className="text-lg font-semibold text-foreground">Données techniques</h3>
          <p>Lors de votre navigation, certaines informations techniques peuvent être collectées, notamment :</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>type de navigateur ;</li>
            <li>type d&apos;appareil ;</li>
            <li>système d&apos;exploitation ;</li>
            <li>journaux techniques nécessaires au fonctionnement du service.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">
            4. Pourquoi utilisons-nous vos données ?
          </h2>
          <p>Vos données sont utilisées uniquement pour :</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>créer votre compte ;</li>
            <li>vous permettre d&apos;utiliser Epargnizi ;</li>
            <li>enregistrer vos données budgétaires ;</li>
            <li>personnaliser votre expérience ;</li>
            <li>assurer la sécurité du service ;</li>
            <li>répondre à vos demandes d&apos;assistance ;</li>
            <li>améliorer l&apos;application ;</li>
            <li>respecter nos obligations légales.</li>
          </ul>
          <p className="font-medium text-foreground">Nous ne vendons jamais vos données personnelles.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">5. Base légale du traitement</h2>
          <p>Selon les cas, le traitement repose sur :</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>votre consentement ;</li>
            <li>l&apos;exécution du contrat lorsque vous utilisez le service ;</li>
            <li>nos obligations légales ;</li>
            <li>notre intérêt légitime pour améliorer la sécurité et la qualité du service.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">6. Destinataires des données</h2>
          <p>
            Vos données personnelles sont accessibles uniquement aux personnes habilitées au sein d&apos;Epargnizi, dans
            la stricte limite nécessaire au fonctionnement du service.
          </p>
          <p>
            Afin d&apos;assurer le bon fonctionnement du site et de l&apos;application, Epargnizi s&apos;appuie
            actuellement sur les prestataires techniques suivants :
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>
              <span className="font-medium text-foreground">Vercel</span> : hébergement du site internet, déploiement
              de l&apos;application et diffusion des mises à jour.
            </li>
            <li>
              <span className="font-medium text-foreground">OVHcloud</span> : gestion du nom de domaine epargnizi.fr
              ainsi que des services de messagerie électronique associés.
            </li>
            <li>
              <span className="font-medium text-foreground">Google Workspace</span>, au travers des services suivants :
              <ul className="mt-2 list-[circle] space-y-2 pl-6 marker:text-primary">
                <li>
                  <span className="font-medium text-foreground">Google Apps Script</span> : traitement sécurisé des
                  données, exécution de la logique métier de l&apos;application, gestion de l&apos;authentification des
                  utilisateurs, automatisation de certaines fonctionnalités et communication entre les différents
                  services utilisés par Epargnizi.
                </li>
                <li>
                  <span className="font-medium text-foreground">Google Sheets</span> : conservation sécurisée des
                  données nécessaires au fonctionnement de l&apos;application, notamment les comptes utilisateurs, les
                  informations de la liste d&apos;attente, les données budgétaires, les objectifs d&apos;épargne ainsi
                  que les autres informations fonctionnelles enregistrées par les utilisateurs durant la phase de
                  développement.
                </li>
              </ul>
            </li>
          </ul>
          <p>
            Ces prestataires interviennent uniquement dans le cadre des services qu&apos;ils fournissent à Epargnizi et
            uniquement dans la mesure nécessaire au fonctionnement de l&apos;application.
          </p>
          <p>
            Chaque prestataire est utilisé exclusivement pour les services qu&apos;il fournit. Aucun prestataire
            n&apos;est autorisé à utiliser les données personnelles des utilisateurs d&apos;Epargnizi pour son propre
            compte, à des fins de prospection commerciale, de publicité ou de profilage.
          </p>
          <p>
            Epargnizi met tout en œuvre afin de limiter l&apos;accès aux données au strict nécessaire et de garantir
            leur confidentialité, leur intégrité et leur sécurité.
          </p>
          <p>
            Les données personnelles de nos utilisateurs ne sont jamais vendues, louées, cédées ou communiquées à des
            tiers à des fins commerciales.
          </p>
          <p>
            À mesure de l&apos;évolution d&apos;Epargnizi, l&apos;infrastructure technique pourra évoluer afin
            d&apos;améliorer les performances, la sécurité et la qualité du service. Toute évolution ayant un impact
            significatif sur le traitement des données personnelles fera l&apos;objet d&apos;une mise à jour de la
            présente politique de confidentialité.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">7. Durée de conservation</h2>
          <p>
            Les données sont conservées uniquement pendant la durée nécessaire aux finalités décrites dans cette
            politique.
          </p>
          <p>À titre indicatif :</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>
              <span className="font-medium text-foreground">liste d&apos;attente</span> : jusqu&apos;à votre
              désinscription ou l&apos;ouverture officielle du service ;
            </li>
            <li>
              <span className="font-medium text-foreground">compte utilisateur</span> : pendant toute la durée
              d&apos;utilisation du compte ;
            </li>
            <li>
              <span className="font-medium text-foreground">données supprimées</span> : selon les délais nécessaires au
              respect des obligations légales ou à la gestion des sauvegardes.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">8. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles destinées à protéger vos données contre :
          </p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>la perte ;</li>
            <li>l&apos;altération ;</li>
            <li>l&apos;accès non autorisé ;</li>
            <li>la divulgation.</li>
          </ul>
          <p>
            Aucune méthode de transmission ou de stockage n&apos;offrant une sécurité absolue, nous améliorons
            continuellement nos dispositifs de protection.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">9. Vos droits</h2>
          <p>Conformément au RGPD, vous disposez notamment des droits suivants :</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>droit d&apos;accès ;</li>
            <li>droit de rectification ;</li>
            <li>droit à l&apos;effacement ;</li>
            <li>droit à la limitation du traitement ;</li>
            <li>droit d&apos;opposition ;</li>
            <li>droit à la portabilité de vos données ;</li>
            <li>droit de retirer votre consentement lorsque celui-ci constitue la base du traitement.</li>
          </ul>
          <p>Vous pouvez exercer ces droits en nous contactant à :</p>
          <p>
            <a href="mailto:contact@epargnizi.fr" className="font-medium text-primary hover:underline">
              contact@epargnizi.fr
            </a>
          </p>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez également introduire une réclamation
            auprès de la CNIL.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">10. Transferts de données</h2>
          <p>
            Certains de nos prestataires techniques peuvent traiter des données en dehors de votre pays de résidence.
          </p>
          <p>
            Lorsque cela est nécessaire, nous veillons à ce que ces transferts soient réalisés dans le respect de la
            réglementation applicable et avec des garanties appropriées.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">11. Évolution de cette politique</h2>
          <p>La présente politique pourra être mise à jour afin de tenir compte :</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>des évolutions du service ;</li>
            <li>des évolutions réglementaires ;</li>
            <li>des évolutions techniques.</li>
          </ul>
          <p>La date de dernière mise à jour figurera toujours en haut du document.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">12. Nous contacter</h2>
          <p>
            Pour toute question relative à cette politique de confidentialité ou au traitement de vos données
            personnelles, vous pouvez nous contacter à :
          </p>
          <p>
            <a href="mailto:contact@epargnizi.fr" className="font-medium text-primary hover:underline">
              contact@epargnizi.fr
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">13. Vos données vous appartiennent</h2>
          <p>
            Chez Epargnizi, nous sommes convaincus que vos données personnelles vous appartiennent.
          </p>
          <p>
            Les informations que vous enregistrez dans l&apos;application — qu&apos;il s&apos;agisse de votre budget, de
            vos revenus, de vos dépenses, de vos objectifs d&apos;épargne ou de toute autre donnée personnelle —
            restent votre propriété.
          </p>
          <p>
            Epargnizi ne vend jamais vos données à des tiers et ne les exploite pas à des fins publicitaires.
          </p>
          <p>
            Nous nous engageons à utiliser vos informations uniquement pour fournir, sécuriser et améliorer les services
            proposés par l&apos;application, dans le respect de la réglementation applicable et des choix que vous
            effectuez.
          </p>
          <p>
            Vous pouvez, conformément à vos droits, demander l&apos;accès à vos données, leur rectification, leur
            suppression ou leur export lorsque ces fonctionnalités sont disponibles ou en nous contactant à
            l&apos;adresse indiquée dans la présente politique.
          </p>
          <p>
            La confiance est au cœur du projet Epargnizi. La protection de vos données personnelles constitue un
            engagement durable, au même titre que notre volonté de vous aider à mieux gérer votre budget et à
            concrétiser vos projets.
          </p>
        </section>
      </div>
    </PageShell>
  )
}
