import { CONTACT } from "@/lib/contact";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  full?: boolean;
};

const sizes = {
  sm: "h-9 px-3.5 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

function baseClasses(size: Props["size"] = "md", full?: boolean) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "active:scale-[0.98] hover:-translate-y-0.5",
    sizes[size],
    full && "w-full",
  );
}

export function BookNowButton({ size, full, className, children }: Props & { children?: ReactNode }) {
  return (
    <a
      href={CONTACT.tel}
      aria-label={`Book service with ${CONTACT.business} at ${CONTACT.phoneDisplay}`}
      className={cn(
        baseClasses(size, full),
        "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)]",
        className,
      )}
    >
      <Phone className="h-4 w-4" aria-hidden />
      {children ?? "Book Now"}
    </a>
  );
}

export function CallButton(props: Props & { children?: ReactNode }) {
  return <BookNowButton {...props} />;
}

export function OutlineButton({
  size,
  full,
  className,
  href,
  children,
}: Props & { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className={cn(
        baseClasses(size, full),
        "border border-border bg-card/60 text-foreground backdrop-blur hover:bg-accent",
        className,
      )}
    >
      {children}
    </a>
  );
}
