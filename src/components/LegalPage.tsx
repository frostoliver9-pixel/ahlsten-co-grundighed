import { Reveal } from "@/components/Reveal";

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
}) {
  return (
    <div className="container-page py-16 md:py-24">
      <Reveal className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl">{title}</h1>
        <p className="text-muted-foreground mt-6 leading-relaxed">{intro}</p>
        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="text-xl">{s.heading}</h2>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                {s.body}
              </p>
            </section>
          ))}
        </div>
        <p className="text-muted-foreground mt-14 text-xs">
          Indholdet på denne side er et udkast og skal tilpasses virksomhedens
          endelige oplysninger.
        </p>
      </Reveal>
    </div>
  );
}
