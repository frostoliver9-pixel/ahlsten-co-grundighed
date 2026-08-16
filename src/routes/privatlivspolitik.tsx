import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site-config";

const title = "Privatlivspolitik | AHLSTEN & CO.";
const description =
  "Sådan behandler AHLSTEN & CO. personoplysninger i forbindelse med tilbud, aftaler og henvendelser.";

export const Route = createFileRoute("/privatlivspolitik")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privatlivspolitik" },
    ],
    links: [{ rel: "canonical", href: "/privatlivspolitik" }],
  }),
  component: () => (
    <LegalPage
      title="Privatlivspolitik"
      intro={`${company.name} behandler personoplysninger i forbindelse med forespørgsler, tilbud og aftaler. Nedenfor beskrives, hvilke oplysninger vi indsamler, og hvordan de anvendes.`}
      sections={[
        {
          heading: "Hvilke oplysninger indsamler vi?",
          body: "Når du udfylder tilbudsformularen, indsamler vi de oplysninger, du selv angiver – typisk navn, telefonnummer, e-mail, adresse samt oplysninger om opgaven.",
        },
        {
          heading: "Hvad bruges oplysningerne til?",
          body: "Oplysningerne bruges udelukkende til at besvare din henvendelse, udarbejde et tilbud og administrere en eventuel aftale.",
        },
        {
          heading: "Videregivelse",
          body: "Vi videregiver ikke dine oplysninger til tredjepart til markedsføringsformål.",
        },
        {
          heading: "Opbevaring",
          body: "Oplysningerne opbevares, så længe det er nødvendigt for at behandle henvendelsen eller opfylde en aftale, samt så længe lovgivningen kræver det.",
        },
        {
          heading: "Dine rettigheder",
          body: `Du kan til enhver tid bede om indsigt i, rettelse af eller sletning af dine oplysninger. Kontakt os på ${company.email}.`,
        },
      ]}
    />
  ),
});
