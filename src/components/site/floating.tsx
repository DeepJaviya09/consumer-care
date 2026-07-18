import { CalendarCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function FloatingButtons() {
  return (
    <div className="pointer-events-none fixed bottom-24 right-4 z-40 hidden sm:flex sm:bottom-6 sm:right-6">
      <a
        href={CONTACT.tel}
        aria-label="Book service with Consumer Care"
        className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-105"
      >
        <CalendarCheck className="h-4.5 w-4.5" />
        Book Now
      </a>
    </div>
  );
}

export function MobileBottomBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl sm:hidden">
      <a
        href={CONTACT.tel}
        className="mx-auto flex max-w-lg items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)]"
      >
        <CalendarCheck className="h-5 w-5" />
        Book Now
      </a>
    </div>
  );
}
