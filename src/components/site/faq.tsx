import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do you provide same-day service?",
    a: "Yes. For bookings placed before 6 PM, our technician arrives the same day in most Ahmedabad areas — typically within 30–60 minutes.",
  },
  {
    q: "Which brands do you repair?",
    a: "All major brands including LG, Samsung, Whirlpool, IFB, Bosch, Haier, Panasonic, Godrej, Siemens, Voltas, Blue Star, Daikin, Hitachi, Carrier, Lloyd, Onida and more.",
  },
  {
    q: "Do you provide warranty on repairs?",
    a: "Yes. We stand by our service and parts with a warranty on the work we complete.",
  },
  {
    q: "Do you repair commercial appliances?",
    a: "Absolutely. We service offices, clinics, salons, restaurants and residential complexes with dedicated AMC plans available.",
  },
  {
    q: "How can I book a service?",
    a: "Book in 60 seconds via Call or WhatsApp at +91 75750 50058, or use the booking form on this page. We confirm your slot immediately.",
  },
  {
    q: "How much does an inspection cost?",
    a: "Doorstep visit and inspection is charged nominally and waived off entirely if you go ahead with the repair. We share the final quote before any work begins.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            FAQ
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-foreground transition-colors hover:bg-accent/50 sm:px-6"
                >
                  {f.q}
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
