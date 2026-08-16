import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";
import { company } from "@/lib/site-config";

const title = "Cookiepolitik | AHLSTEN & CO.";
const description =
  "Læs om brugen af cookies på ahlstenogco.dk, og hvordan du kan administrere dem i din browser.";

export const Route = createFileRoute("/cookiepolitik")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cookiepolitik" },
    ],
    links: [{ rel: "canonical", href: "/cookiepolitik" }],
  }),
  component: () => (
    <LegalPage
      title="Cookiepolitik"
      intro={`Denne politik beskriver, hvordan cookies anvendes på ${company.domain}.`}
      sections={[
        {
          heading: "Hvad er cookies?",
          body: "En cookie er en lille tekstfil, der gemmes i din browser, og som gør det muligt at genkende din enhed ved efterfølgende besøg.",
        },
        {
          heading: "Hvilke cookies bruger vi?",
          body: "Hjemmesiden anvender som udgangspunkt kun nødvendige cookies, der sikrer, at siden fungerer korrekt. Anvendes statistik- eller markedsføringscookies på et senere tidspunkt, opdateres denne politik.",
        },
        {
          heading: "Sådan undgår eller sletter du cookies",
          body: "Du kan altid slette eller blokere cookies via indstillingerne i din browser. Bemærk, at dele af hjemmesiden kan fungere anderledes, hvis cookies blokeres.",
        },
        {
          heading: "Spørgsmål",
          body: `Har du spørgsmål til brugen af cookies, er du velkommen til at kontakte os på ${company.email}.`,
        },
      ]}
    />
  ),
});
