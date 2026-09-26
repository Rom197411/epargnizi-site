import { PageShell } from "@/components/page-shell"

export const metadata = {
  title: "Mentions légales – Epargnizi",
  description: "Mentions légales d'Epargnizi.",
}

export default function MentionsLegalesPage() {
  return (
    <PageShell
      title="Mentions légales"
      description="Dernière mise à jour : à compléter lors de la mise en ligne officielle."
    >
      <div className="space-y-12 leading-relaxed text-muted-foreground">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">1. Éditeur du site</h2>
          <p>
            Le site Epargnizi est actuellement un projet en phase de développement.
          </p>
          <p>
            Les informations légales de la société exploitante seront publiées lors de son immatriculation avant
            l&apos;ouverture commerciale du service.
          </p>
          <p>À compter de cette immatriculation, les informations suivantes seront précisées :</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>Dénomination sociale</li>
            <li>Forme juridique</li>
            <li>Siège social</li>
            <li>Capital social</li>
            <li>Numéro SIREN</li>
            <li>Immatriculation au Registre du Commerce et des Sociétés (RCS)</li>
            <li>Numéro de TVA intracommunautaire (le cas échéant)</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">2. Directeur de la publication</h2>
          <p>Le directeur de la publication est :</p>
          <p className="font-medium text-foreground">Romain Kerrouault</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">3. Contact</h2>
          <p>
            Pour toute question relative au site ou au projet Epargnizi, vous pouvez nous contacter à l&apos;adresse
            suivante :
          </p>
          <p>
            <a href="mailto:contact@epargnizi.fr" className="font-medium text-primary hover:underline">
              contact@epargnizi.fr
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">4. Hébergement</h2>
          <p>Le site est hébergé par :</p>
          <p className="text-foreground">
            Vercel Inc.
            <br />
            440 N Barranca Avenue #4133
            <br />
            Covina, CA 91723
            <br />
            États-Unis
          </p>
          <p>
            Site internet :{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              https://vercel.com
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">5. Nom de domaine</h2>
          <p>Le nom de domaine epargnizi.fr est enregistré auprès de :</p>
          <p className="text-foreground">
            OVHcloud
            <br />
            2 rue Kellermann
            <br />
            59100 Roubaix
            <br />
            France
          </p>
          <p>
            Site internet :{" "}
            <a
              href="https://www.ovhcloud.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              https://www.ovhcloud.com
            </a>
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">6. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments composant le site Epargnizi, notamment les textes, illustrations, logos,
            marques, icônes, graphismes, interfaces, photographies, vidéos, bases de données, logiciels ainsi que leur
            organisation, est protégé par les dispositions du Code de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, diffusion, modification, adaptation ou exploitation, totale ou
            partielle, de tout ou partie du site, sans autorisation écrite préalable d&apos;Epargnizi, est strictement
            interdite.
          </p>
          <p>
            Toute utilisation non autorisée pourra faire l&apos;objet de poursuites conformément à la réglementation en
            vigueur.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">7. Responsabilité</h2>
          <p>
            Epargnizi met tout en œuvre afin de fournir des informations exactes, claires et régulièrement mises à jour.
          </p>
          <p>
            Toutefois, malgré le soin apporté à leur rédaction, les informations présentes sur le site peuvent contenir
            des imprécisions ou évoluer au fil du développement du projet.
          </p>
          <p>Les informations proposées sur le site ont un caractère exclusivement informatif.</p>
          <p>Elles ne constituent en aucun cas :</p>
          <ul className="list-disc space-y-2 pl-6 marker:text-primary">
            <li>un conseil financier ;</li>
            <li>un conseil juridique ;</li>
            <li>un conseil fiscal ;</li>
            <li>une recommandation d&apos;investissement.</li>
          </ul>
          <p>
            L&apos;utilisateur demeure seul responsable des décisions qu&apos;il prend sur la base des informations
            fournies par le site ou l&apos;application.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">8. Liens hypertextes</h2>
          <p>Le site peut contenir des liens vers des sites internet tiers.</p>
          <p>Ces liens sont proposés uniquement à titre informatif.</p>
          <p>
            Epargnizi n&apos;exerce aucun contrôle sur leur contenu et ne saurait être tenu responsable des
            informations, produits, services ou pratiques proposés par ces sites.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">9. Disponibilité du site</h2>
          <p>Epargnizi s&apos;efforce d&apos;assurer une disponibilité continue de ses services.</p>
          <p>
            Toutefois, le site peut être temporairement indisponible, notamment en raison d&apos;opérations de
            maintenance, de mises à jour, d&apos;évolutions techniques ou de circonstances indépendantes de notre
            volonté.
          </p>
          <p>
            Epargnizi ne pourra être tenu responsable des conséquences liées à une interruption temporaire du service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">10. Évolution du projet</h2>
          <p>Le site et l&apos;application Epargnizi sont en constante évolution.</p>
          <p>
            Certaines fonctionnalités présentées peuvent être ajoutées, modifiées, suspendues ou supprimées afin
            d&apos;améliorer l&apos;expérience utilisateur ou de répondre à des contraintes techniques, réglementaires
            ou commerciales.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">11. Version bêta du service</h2>
          <p>Epargnizi est actuellement proposé en version bêta.</p>
          <p>
            Cette phase de développement a pour objectif de permettre à un nombre limité d&apos;utilisateurs de
            découvrir progressivement le service, de tester ses fonctionnalités et de contribuer à son amélioration par
            leurs retours d&apos;expérience.
          </p>
          <p>
            En conséquence, certaines fonctionnalités peuvent être incomplètes, évoluer au fil des mises à jour ou être
            temporairement indisponibles.
          </p>
          <p>
            Des modifications, corrections ou améliorations peuvent être apportées à tout moment, sans préavis, dans le
            but d&apos;améliorer la qualité, la sécurité, les performances ou la conformité du service.
          </p>
          <p>
            Les utilisateurs sont invités à signaler toute anomalie ou suggestion d&apos;amélioration via les moyens de
            contact mis à leur disposition.
          </p>
          <p>
            Epargnizi met tout en œuvre pour offrir un service fiable et sécurisé, mais ne peut garantir, durant cette
            phase de développement, une disponibilité permanente, l&apos;absence totale d&apos;erreurs ou la stabilité
            définitive de l&apos;ensemble des fonctionnalités.
          </p>
          <p>L&apos;utilisation de la version bêta implique l&apos;acceptation de ces conditions par l&apos;utilisateur.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">12. Droit applicable</h2>
          <p>Les présentes mentions légales sont régies par le droit français.</p>
          <p>
            Tout litige relatif à leur interprétation ou à leur exécution relèvera de la compétence des juridictions
            françaises, sous réserve des dispositions légales impératives applicables.
          </p>
        </section>

        <p className="border-t border-border pt-8 text-foreground">
          Epargnizi remercie l&apos;ensemble des utilisateurs qui participent à cette phase de développement. Chaque
          retour, suggestion ou signalement contribue à construire une application toujours plus simple, fiable et utile
          pour mieux gérer son budget et concrétiser ses projets.
        </p>
      </div>
    </PageShell>
  )
}
