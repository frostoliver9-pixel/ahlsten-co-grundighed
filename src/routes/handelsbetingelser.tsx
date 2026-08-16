import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site-config";

const title = "Handelsbetingelser | AHLSTEN & CO.";
const description =
  "Generelle betingelser for aftaler om rengøring og service hos AHLSTEN & CO.";

export const Route = createFileRoute("/handelsbetingelser")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/handelsbetingelser" },
    ],
    links: [{ rel: "canonical", href: "/handelsbetingelser" }],
  }),
  component: () => (
    <LegalPage
      title="Handelsbetingelser"
      intro={`Nedenstående betingelser gælder for aftaler indgået med ${company.name}, medmindre andet er aftalt skriftligt.`}
      sections={[
        {
          heading: "Aftaleindgåelse",
          body: "En aftale er indgået, når begge parter har accepteret omfang, tidspunkt og pris. Tilbud er uforpligtende, indtil de accepteres.",
        },
        {
          heading: "Priser",
          body: "Priser oplyses i danske kroner. Den endelige pris afhænger blandt andet af opgavens omfang, boligens eller lokalets størrelse samt frekvens.",
        },
        {
          heading: "Afbud og ændringer",
          body: "Ønsker du at ændre eller aflyse en aftalt opgave, bedes du kontakte os i god tid. Vilkår for afbud aftales i forbindelse med aftalen.",
        },
        {
          heading: "Reklamation",
          body: "Er du ikke tilfreds med det udførte arbejde, bedes du kontakte os hurtigst muligt, så vi kan følge op på opgaven.",
        },
        {
          heading: "Kontakt",
          body: `Spørgsmål til betingelserne kan rettes til ${company.email}. CVR: ${company.cvr}.`,
        },
      ]}
    />
  ),
});
