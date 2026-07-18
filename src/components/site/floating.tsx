import { CalendarCheck, MessageCircle, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function FloatingButtons() {
  return (
    <div className="pointer-events-none fixed bottom-24 right-4 z-40 hidden flex-col items-end gap-3 sm:flex sm:bottom-6 sm:right-6">
      <a
        href={CONTACT.tel}
        aria-label="Call Consumer Care"
        className="pointer-events-auto group grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-110"
      >
        <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-primary/40" />
        <Phone className="relative h-6 w-6" />
      </a>
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp Consumer Care"
        className="pointer-events-auto group relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[0_0_40px_-8px_color-mix(in_oklab,var(--whatsapp)_55%,transparent)] transition-transform hover:scale-110"
      >
        <span className="absolute inline-flex h-14 w-14 animate-ping rounded-full bg-whatsapp/40" />
        <MessageCircle className="relative h-6 w-6" />
      </a>
    </div>
  );
}

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl sm:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-3 divide-x divide-border">
        <a
          href={CONTACT.tel}
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-bold text-foreground"
        >
          <Phone className="h-5 w-5 text-primary" />
          Call
        </a>
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-bold text-foreground"
        >
          <MessageCircle className="h-5 w-5 text-whatsapp" />
          WhatsApp
        </a>
        <a
          href="#book"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-bold text-foreground"
        >
          <CalendarCheck className="h-5 w-5 text-primary" />
          Book
        </a>
      </div>
    </div>
  );
}
