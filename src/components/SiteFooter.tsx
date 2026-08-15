import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { company, nav } from "@/lib/site-config";

const legal = [
  { label: "Privatlivspolitik", to: "/privatlivspolitik" },
  { label: "Cookiepolitik", to: "/cookiepolitik" },
  { label: "Handelsbetingelser", to: "/handelsbetingelser" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo inverted />
            <p className="mt-4 max-w-xs text-sm opacity-70">
              {company.tagline}
            </p>
          </div>

          <nav aria-label="Footermenu" className="md:col-span-3">
            <h2 className="text-xs font-semibold tracking-[0.16em] uppercase opacity-60">
              Menu
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="opacity-80 transition-opacity duration-300 hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Juridisk" className="md:col-span-2">
            <h2 className="text-xs font-semibold tracking-[0.16em] uppercase opacity-60">
              Information
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {legal.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="opacity-80 transition-opacity duration-300 hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h2 className="text-xs font-semibold tracking-[0.16em] uppercase opacity-60">
              Kontakt
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                {company.phoneHref ? (
                  <a href={`tel:${company.phoneHref}`} className="opacity-80 hover:opacity-100">
                    {company.phone}
                  </a>
                ) : (
                  <span className="opacity-80">{company.phone}</span>
                )}
              </li>
              <li>
                {company.emailHref ? (
                  <a href={`mailto:${company.emailHref}`} className="opacity-80 hover:opacity-100">
                    {company.email}
                  </a>
                ) : (
                  <span className="opacity-80">{company.email}</span>
                )}
              </li>
              <li className="opacity-80">{company.area}</li>
              <li className="flex gap-4 pt-2">
                <a
                  href={company.social.instagram}
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  Instagram
                </a>
                <a
                  href={company.social.facebook}
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-current/15 pt-6 text-xs opacity-60 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. Alle rettigheder
            forbeholdes.
          </p>
          <p>{company.domain}</p>
        </div>
      </div>
    </footer>
  );
}
