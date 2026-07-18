import { CONTACT } from "@/lib/contact";
import { MessageCircle, Phone } from "lucide-react";
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

export function CallButton({ size, full, className, children }: Props & { children?: ReactNode }) {
  return (
    <a
      href={CONTACT.tel}
      aria-label={`Call Consumer Care at ${CONTACT.phoneDisplay}`}
      className={cn(
        baseClasses(size, full),
        "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-glow)]",
        className,
      )}
    >
      <Phone className="h-4 w-4" aria-hidden />
      {children ?? "Call Now"}
    </a>
  );
}

export function WhatsAppButton({
  size,
  full,
  className,
  message,
  children,
}: Props & { children?: ReactNode }) {
  const href = message ? CONTACT.whatsappText(message) : CONTACT.whatsapp;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Message Consumer Care on WhatsApp"
      className={cn(
        baseClasses(size, full),
        "bg-whatsapp text-whatsapp-foreground shadow-[0_10px_30px_-12px_color-mix(in_oklab,var(--whatsapp)_45%,transparent)] hover:shadow-[0_0_40px_-8px_color-mix(in_oklab,var(--whatsapp)_55%,transparent)]",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4" aria-hidden />
      {children ?? "WhatsApp"}
    </a>
  );
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
