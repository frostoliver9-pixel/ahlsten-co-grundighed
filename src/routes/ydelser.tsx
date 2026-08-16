import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Home,
  Building2,
  Sparkles,
  Boxes,
  PanelsTopLeft,
  CalendarClock,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ContactCta, FaqSection } from "@/components/sections";
import { services, type ServiceIcon } from "@/lib/site-config";

const title = "Ydelser – privat rengøring og erhvervsrengøring | AHLSTEN & CO.";
const description =
  "Se vores rengøringsydelser: privat rengøring, erhvervsrengøring, hovedrengøring, flytterengøring, vinduespudsning og faste aftaler.";

export const Route = createFileRoute("/ydelser")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ydelser" },
    ],
    links: [{ rel: "canonical", href: "/ydelser" }],
  }),
  component: YdelserPage,
});

const iconMap: Record<ServiceIcon, typeof Home> = {
  home: Home,
  building: Building2,
  sparkles: Sparkles,
  boxes: Boxes,
  window: PanelsTopLeft,
  calendar: CalendarClock,
};

function YdelserPage() {
  return (
    <>
      <section className="border-border border-b">
        <div className="container-page py-16 md:py-24">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Ydelser</p>
            <h1 className="mt-5 text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Rengøring, der passer til dig
            </h1>
            <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
              Vi tilbyder fleksible rengøringsløsninger til både private hjem og
              virksomheder. Uanset opgavens størrelse er målet det samme: et
              rent og indbydende resultat.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="container-page py-16 md:py-24">
        <div className="divide-border divide-y">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal
                as="article"
                key={service.slug}
                delay={40}
                className="grid gap-8 py-12 md:grid-cols-12 md:py-16"
              >
                <div className="md:col-span-4" id={service.slug}>
                  <Icon
                    className="text-primary h-6 w-6"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <h2 className="mt-5 text-2xl md:text-3xl">{service.title}</h2>
                  <p className="text-muted-foreground mt-1 text-xs">
                    0{i + 1}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base leading-relaxed md:text-lg">
                    {service.description}
                  </p>
                  <ul className="text-muted-foreground mt-6 space-y-3 text-sm">
                    {service.details.map((d) => (
                      <li key={d} className="flex gap-3">
                        <Check
                          className="text-primary mt-0.5 h-4 w-4 shrink-0"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link to="/kontakt" hash="tilbud">
                        Få et tilbud
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/priser">Se priser</Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <FaqSection />
      <ContactCta />
    </>
  );
}
