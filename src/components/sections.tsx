import { Link } from "@tanstack/react-router";
import {
  Home,
  Building2,
  Sparkles,
  Boxes,
  PanelsTopLeft,
  CalendarClock,
  ArrowRight,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  services,
  trustBar,
  pricing,
  about,
  futureSection,
  whyUs,
  testimonialPlaceholders,
  faq,
  hero as heroContent,
  company,
  type ServiceIcon,
} from "@/lib/site-config";
import heroImage from "@/assets/hero-interior.jpg";
import officeImage from "@/assets/office-clean.jpg";
import detailImage from "@/assets/detail-still.jpg";

const iconMap: Record<ServiceIcon, typeof Home> = {
  home: Home,
  building: Building2,
  sparkles: Sparkles,
  boxes: Boxes,
  window: PanelsTopLeft,
  calendar: CalendarClock,
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {intro && (
        <p className="text-muted-foreground mt-5 text-base leading-relaxed md:text-lg">
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function Hero() {
  return (
    <section className="border-border border-b">
      <div className="container-page grid items-center gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">Rengøring & service i Danmark</p>
            <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-[3.75rem]">
              {heroContent.titleLine1}
              <br />
              <span className="text-muted-foreground">
                {heroContent.titleLine2}
              </span>
            </h1>
            <p className="text-muted-foreground mt-7 max-w-xl text-base leading-relaxed md:text-lg">
              {heroContent.subtitle}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-13">
                <Link to="/kontakt" hash="tilbud">
                  {heroContent.primaryCta}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13">
                <Link to="/ydelser">{heroContent.secondaryCta}</Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120} className="lg:col-span-6">
          <div className="bg-muted relative overflow-hidden rounded-xl">
            <img
              src={heroImage}
              width={1600}
              height={1200}
              fetchPriority="high"
              alt="Lyst og nyrengjort skandinavisk stue med dagslys og lyse materialer"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TrustBar() {
  return (
    <section aria-label="Vores kendetegn" className="border-border border-b">
      <div className="container-page">
        <ul className="divide-border grid grid-cols-2 divide-x divide-y md:grid-cols-4 md:divide-y-0">
          {trustBar.map((item, i) => (
            <Reveal
              as="li"
              key={item}
              delay={i * 80}
              className="px-2 py-7 text-center text-sm font-medium tracking-wide md:py-8"
            >
              {item}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  return (
    <section id="ydelser" className="container-page py-20 md:py-28">
      <SectionHeading
        eyebrow="Ydelser"
        title="Rengøring, der passer til dig"
        intro="Vi tilbyder fleksible rengøringsløsninger til både private hjem og virksomheder. Uanset opgavens størrelse er målet det samme: et rent og indbydende resultat."
      />

      <ul className="mt-14 grid gap-px md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <Reveal
              as="li"
              key={service.slug}
              delay={(i % 3) * 90}
              className="border-border bg-card hover:border-primary/30 group flex flex-col rounded-xl border p-7 transition-colors duration-500 md:p-8"
            >
              <Icon
                className="text-primary h-6 w-6"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl">{service.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {service.description}
              </p>
              {!compact && (
                <ul className="text-muted-foreground mt-5 space-y-2 text-sm">
                  {service.details.map((d) => (
                    <li key={d} className="flex gap-2.5">
                      <Check
                        className="text-primary mt-0.5 h-4 w-4 shrink-0"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Link
                to="/ydelser"
                hash={service.slug}
                className="text-primary mt-7 inline-flex items-center gap-2 text-sm font-medium"
              >
                Læs mere
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export function PricingSection() {
  return (
    <section id="priser" className="bg-secondary/60 border-border border-y">
      <div className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Priser"
          title={pricing.title}
          intro={pricing.subtitle}
          center
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricing.plans.map((plan, i) => (
            <Reveal
              as="li"
              key={plan.name}
              delay={i * 80}
              className={
                plan.highlighted
                  ? "bg-primary text-primary-foreground flex flex-col rounded-xl p-8"
                  : "border-border bg-card flex flex-col rounded-xl border p-8"
              }
            >
              <h3
                className={
                  plan.highlighted
                    ? "text-xs font-semibold tracking-[0.16em] uppercase opacity-70"
                    : "eyebrow"
                }
              >
                {plan.name}
              </h3>
              <p className="font-display mt-6 text-2xl tracking-tight">
                {plan.price}
              </p>
              {plan.unit && (
                <p
                  className={
                    plan.highlighted
                      ? "mt-1 text-xs opacity-70"
                      : "text-muted-foreground mt-1 text-xs"
                  }
                >
                  {plan.unit}
                </p>
              )}
              <p
                className={
                  plan.highlighted
                    ? "mt-5 text-sm leading-relaxed opacity-80"
                    : "text-muted-foreground mt-5 text-sm leading-relaxed"
                }
              >
                {plan.description}
              </p>
              <ul
                className={
                  plan.highlighted
                    ? "mt-6 space-y-2 text-sm opacity-90"
                    : "text-muted-foreground mt-6 space-y-2 text-sm"
                }
              >
                {plan.includes.map((inc) => (
                  <li key={inc} className="flex gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.highlighted ? "secondary" : "outline"}
                className="mt-8 w-full"
              >
                <Link to="/kontakt" hash="tilbud">
                  Få et tilbud
                </Link>
              </Button>
            </Reveal>
          ))}
        </ul>

        <Reveal className="text-muted-foreground mx-auto mt-10 max-w-2xl text-center text-sm">
          {pricing.disclaimer}
        </Reveal>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="om-os" className="container-page py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5">
          <div className="bg-muted overflow-hidden rounded-xl">
            <img
              src={detailImage}
              width={1200}
              height={1408}
              loading="lazy"
              alt="Ren skandinavisk køkkenbordplade med linnedklud og keramisk vase"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Om os" title={about.title} />
          <Reveal delay={100} className="mt-6 space-y-5">
            {about.paragraphs.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="text-muted-foreground leading-relaxed"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="bg-secondary/60 border-border border-y">
      <div className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Hvorfor vælge os" title="Service, du kan regne med" />
        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
              <div className="bg-primary/10 flex h-9 w-9 items-center justify-center rounded-full">
                <Check
                  className="text-primary h-4 w-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-5 text-lg">{item.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {item.text}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FutureSection() {
  return (
    <section className="container-page py-20 md:py-24">
      <Reveal className="border-border grid items-center gap-10 rounded-xl border p-8 md:grid-cols-12 md:p-12">
        <div className="md:col-span-7">
          <p className="eyebrow">Fremtiden</p>
          <h2 className="mt-4 text-2xl md:text-3xl">{futureSection.title}</h2>
          <p className="text-muted-foreground mt-4 max-w-xl leading-relaxed">
            {futureSection.text}
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="bg-muted overflow-hidden rounded-lg">
            <img
              src={officeImage}
              width={1408}
              height={1008}
              loading="lazy"
              alt="Minimalistisk dansk kontorreception med rene, blanke gulve"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="border-border border-t">
      <div className="container-page py-20 md:py-28">
        <SectionHeading eyebrow="Kundeanmeldelser" title="Ord fra vores kunder" center />
        {/* ⚠️ PLACEHOLDERS — udskift med rigtige anmeldelser i src/lib/site-config.ts */}
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonialPlaceholders.map((t, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 90}
              className="border-border border-dashed bg-card rounded-xl border p-8"
            >
              <p className="text-muted-foreground leading-relaxed italic">
                “{t.quote}”
              </p>
              <p className="mt-6 text-sm font-medium">— {t.author}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal className="text-muted-foreground mt-8 text-center text-xs">
          Anmeldelserne ovenfor er pladsholdere og udskiftes med rigtige
          kundeudtalelser.
        </Reveal>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary/60 border-border border-y">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="FAQ"
              title="Ofte stillede spørgsmål"
              intro="Kan du ikke finde svaret? Send os en forespørgsel, så vender vi tilbage."
            />
          </div>
          <Reveal className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faq.map((item, i) => (
                <AccordionItem key={item.q} value={`item-${i}`}>
                  <AccordionTrigger className="py-5 text-left text-base font-medium">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function ContactCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
          <Reveal className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl lg:text-5xl">
              Skal vi hjælpe dig?
            </h2>
            <p className="mt-5 max-w-lg text-base opacity-80 md:text-lg">
              Fortæl os, hvad du har brug for – så finder vi en løsning.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-9 h-13">
              <Link to="/kontakt" hash="tilbud">
                Få et tilbud
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-5">
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] uppercase opacity-60">
                  Telefon
                </dt>
                <dd className="mt-2">
                  {company.phoneHref ? (
                    <a href={`tel:${company.phoneHref}`} className="underline-offset-4 hover:underline">
                      {company.phone}
                    </a>
                  ) : (
                    company.phone
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] uppercase opacity-60">
                  E-mail
                </dt>
                <dd className="mt-2">
                  {company.emailHref ? (
                    <a href={`mailto:${company.emailHref}`} className="underline-offset-4 hover:underline">
                      {company.email}
                    </a>
                  ) : (
                    company.email
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] uppercase opacity-60">
                  Område
                </dt>
                <dd className="mt-2">{company.area}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.16em] uppercase opacity-60">
                  Åbningstider
                </dt>
                <dd className="mt-2">{company.openingHours}</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
