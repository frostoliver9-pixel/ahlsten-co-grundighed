import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import {
  AboutSection,
  WhyUsSection,
  FutureSection,
  TestimonialsSection,
  ContactCta,
} from "@/components/sections";

const title = "Om AHLSTEN & CO. – rengøring og service med omtanke";
const description =
  "AHLSTEN & CO. leverer rengøring og service med fokus på grundighed, stabilitet og god kommunikation. Læs om vores tilgang og ambitioner.";

export const Route = createFileRoute("/om-os")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/om-os" },
    ],
    links: [{ rel: "canonical", href: "/om-os" }],
  }),
  component: OmOsPage,
});

function OmOsPage() {
  return (
    <>
      <section className="border-border border-b">
        <div className="container-page py-16 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Om os</p>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Ordentlig service fra start til slut
            </h1>
          </Reveal>
        </div>
      </section>

      <AboutSection />
      <WhyUsSection />
      <FutureSection />
      <TestimonialsSection />
      <ContactCta />
    </>
  );
}
