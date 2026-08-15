import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { confirmation, quoteFormOptions } from "@/lib/site-config";

const fieldClass = "h-12 rounded-md";

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      {children}
    </div>
  );
}

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(name: string) {
    setSelectedServices((prev) =>
      prev.includes(name) ? prev.filter((s) => s !== name) : [...prev, name],
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: forbind til backend/e-mail. Indtil da vises kvitteringen lokalt.
    setSent(true);
    window.setTimeout(
      () =>
        document
          .getElementById("tilbud")
          ?.scrollIntoView({ behavior: "smooth", block: "start" }),
      50,
    );
  }

  if (sent) {
    return (
      <div className="border-border bg-card rounded-xl border p-8 text-center md:p-14">
        <span className="bg-primary text-primary-foreground mx-auto flex h-12 w-12 items-center justify-center rounded-full">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-2xl md:text-3xl">{confirmation.title}</h3>
        <p className="text-muted-foreground mx-auto mt-3 max-w-md text-balance">
          {confirmation.text}
        </p>
        <Button
          variant="outline"
          className="mt-8"
          onClick={() => {
            setSent(false);
            setSelectedServices([]);
          }}
        >
          Send en ny forespørgsel
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-border bg-card rounded-xl border p-6 md:p-10"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="navn" label="Navn">
          <Input
            id="navn"
            name="navn"
            required
            autoComplete="name"
            className={fieldClass}
          />
        </Field>
        <Field id="telefon" label="Telefon">
          <Input
            id="telefon"
            name="telefon"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            className={fieldClass}
          />
        </Field>
        <Field id="email" label="E-mail">
          <Input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </Field>
        <Field id="adresse" label="Adresse">
          <Input
            id="adresse"
            name="adresse"
            autoComplete="street-address"
            className={fieldClass}
          />
        </Field>
        <Field id="postnummer" label="Postnummer">
          <Input
            id="postnummer"
            name="postnummer"
            inputMode="numeric"
            autoComplete="postal-code"
            className={fieldClass}
          />
        </Field>
        <Field id="by" label="By">
          <Input
            id="by"
            name="by"
            autoComplete="address-level2"
            className={fieldClass}
          />
        </Field>
        <Field id="boligtype" label="Boligtype">
          <select
            id="boligtype"
            name="boligtype"
            defaultValue=""
            className="border-input bg-background focus-visible:ring-ring h-12 w-full rounded-md border px-3 text-base focus-visible:ring-2 focus-visible:outline-none md:text-sm"
          >
            <option value="" disabled>
              Vælg boligtype
            </option>
            {quoteFormOptions.propertyTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field id="stoerrelse" label="Boligens størrelse (m²)">
          <Input
            id="stoerrelse"
            name="stoerrelse"
            inputMode="numeric"
            placeholder="fx 95"
            className={fieldClass}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field id="frekvens" label="Ønsket rengøringsfrekvens">
            <select
              id="frekvens"
              name="frekvens"
              defaultValue=""
              className="border-input bg-background focus-visible:ring-ring h-12 w-full rounded-md border px-3 text-base focus-visible:ring-2 focus-visible:outline-none md:text-sm"
            >
              <option value="" disabled>
                Vælg frekvens
              </option>
              {quoteFormOptions.frequencies.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </Field>
        </div>
      </div>

      <fieldset className="mt-8">
        <legend className="mb-4 text-sm font-medium">Ønskede ydelser</legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {quoteFormOptions.serviceOptions.map((service) => (
            <label
              key={service}
              className="border-border hover:bg-muted/60 flex min-h-12 cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-sm transition-colors"
            >
              <Checkbox
                checked={selectedServices.includes(service)}
                onCheckedChange={() => toggleService(service)}
                aria-label={service}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-8">
        <Field id="besked" label="Besked">
          <Textarea
            id="besked"
            name="besked"
            rows={5}
            placeholder="Fortæl kort om opgaven."
            className="rounded-md"
          />
        </Field>
      </div>

      <Button type="submit" size="lg" className="mt-8 h-13 w-full sm:w-auto">
        Få mit tilbud
      </Button>
      <p className="text-muted-foreground mt-4 text-xs">
        Forespørgslen er uforpligtende. Vi bruger kun dine oplysninger til at
        besvare henvendelsen.
      </p>
    </form>
  );
}
