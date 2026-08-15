import { cn } from "@/lib/utils";

/** Ordmærke for AHLSTEN & CO. */
export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <span
      className={cn(
        "font-display inline-flex items-baseline gap-[0.45rem] leading-none",
        inverted ? "text-primary-foreground" : "text-primary",
        className,
      )}
    >
      <span className="text-[0.95rem] font-semibold tracking-[0.22em] sm:text-base">
        AHLSTEN
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "text-[0.7rem] tracking-normal",
          inverted ? "opacity-70" : "text-muted-foreground",
        )}
      >
        &amp;
      </span>
      <span className="text-[0.95rem] font-semibold tracking-[0.22em] sm:text-base">
        CO.
      </span>
    </span>
  );
}
