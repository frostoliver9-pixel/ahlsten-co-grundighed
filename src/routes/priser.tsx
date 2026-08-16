import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PricingSection, FaqSection, ContactCta } from "@/components/sections";

const title = "Priser på rengøring | AHLSTEN & CO.";
const description =
  "Gennemsigtige priser på fast rengøring, hovedrengøring, flytterengøring og erhvervsrengøring. Få et uforpligtende tilbud tilpasset din opgave.";

export const Route = createFileRoute("/priser")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/priser" },
    ],
    links: [{ rel: "canonical", href: "/priser" }],
  }),
  component: PriserPage,
});

function PriserPage() {
  return (
    <>
      <section className="border-border border-b">
        <div className="container-page py-16 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Priser</p>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              En enkel og fair pris
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
              Vi tror på gennemsigtige priser og løsninger, der giver mening for
              dig. Prisniveauerne nedenfor er vejledende, og vi giver altid et
              konkret tilbud på den enkelte opgave.
            </p>
          </Reveal>
        </div>
      </section>

      <PricingSection />
      <FaqSection />
      <ContactCta />
    </>
  );
}
