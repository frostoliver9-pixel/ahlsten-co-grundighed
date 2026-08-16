import { createFileRoute } from "@tanstack/react-router";
import {
  Hero,
  TrustBar,
  ServicesSection,
  PricingSection,
  AboutSection,
  WhyUsSection,
  FutureSection,
  TestimonialsSection,
  FaqSection,
  ContactCta,
} from "@/components/sections";
import { faq } from "@/lib/site-config";

const title = "Rengøringsfirma i København og Nordsjælland | AHLSTEN & CO.";
const description =
  "AHLSTEN & CO. leverer grundig og pålidelig rengøring til private og erhverv. Fast rengøring, hovedrengøring og flytterengøring – få et uforpligtende tilbud.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection compact />
      <PricingSection />
      <AboutSection />
      <WhyUsSection />
      <FutureSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactCta />
    </>
  );
}
