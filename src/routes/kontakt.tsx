import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { FaqSection } from "@/components/sections";
import { company } from "@/lib/site-config";

const title = "Kontakt og tilbud på rengøring | AHLSTEN & CO.";
const description =
  "Kontakt AHLSTEN & CO. og få et uforpligtende tilbud på rengøring til dit hjem eller din virksomhed. Udfyld formularen – vi vender tilbage hurtigst muligt.";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  return (
    <>
      <section className="border-border border-b">
        <div className="container-page py-16 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Kontakt</p>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Skal vi hjælpe dig?
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
              Fortæl os, hvad du har brug for – så finder vi en løsning.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal>
              <h2 className="text-2xl">Kontaktoplysninger</h2>
              <dl className="mt-8 space-y-7 text-sm">
                <div>
                  <dt className="eyebrow">Telefon</dt>
                  <dd className="mt-2">
                    {company.phoneHref ? (
                      <a
                        href={`tel:${company.phoneHref}`}
                        className="hover:underline"
                      >
                        {company.phone}
                      </a>
                    ) : (
                      company.phone
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">E-mail</dt>
                  <dd className="mt-2">
                    {company.emailHref ? (
                      <a
                        href={`mailto:${company.emailHref}`}
                        className="hover:underline"
                      >
                        {company.email}
                      </a>
                    ) : (
                      company.email
                    )}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Område</dt>
                  <dd className="mt-2">{company.area}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Åbningstider</dt>
                  <dd className="mt-2">{company.openingHours}</dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-8" id="tilbud">
            <Reveal delay={100}>
              <h2 className="text-2xl md:text-3xl">Få et tilbud</h2>
              <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
                Udfyld formularen med et par oplysninger om opgaven, så vender
                vi tilbage hurtigst muligt.
              </p>
              <div className="mt-8">
                <QuoteForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <FaqSection />
    </>
  );
}
