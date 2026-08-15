import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { nav, hero } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-500",
        scrolled
          ? "border-border bg-background/90 backdrop-blur-md"
          : "border-transparent bg-background",
      )}
    >
      <div className="container-page flex h-18 items-center justify-between gap-4 py-4">
        <Link
          to="/"
          aria-label="AHLSTEN & CO. – til forsiden"
          className="shrink-0"
        >
          <Logo />
        </Link>

        <nav aria-label="Hovedmenu" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-foreground" }}
                  inactiveProps={{ className: "text-muted-foreground" }}
                  className="hover:text-foreground text-sm font-medium transition-colors duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/kontakt" hash="tilbud">
              {hero.primaryCta}
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Luk menu" : "Åbn menu"}
            aria-expanded={open}
            className="text-foreground hover:bg-muted -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="bg-background border-border fixed inset-x-0 top-18 bottom-0 z-40 border-t lg:hidden">
          <nav aria-label="Mobilmenu" className="container-page py-6">
            <ul className="flex flex-col">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="border-border/70 block border-b py-4 text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-8 w-full">
              <Link to="/kontakt" hash="tilbud" onClick={() => setOpen(false)}>
                {hero.primaryCta}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
