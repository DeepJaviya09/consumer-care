import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Wrench,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import { CONTACT } from "@/lib/contact";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#brands", label: "Brands" },
  { href: "#areas", label: "Service Areas" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export function ContactAndFooter() {
  return (
    <>
      <section id="contact" className="scroll-mt-16 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-bold uppercase tracking-widest text-primary">
              Contact
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              We're a call away — every day
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Book your repair instantly by phone, or drop by during business
              hours.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8">
              <ul className="grid gap-5 sm:grid-cols-2">
                <ContactItem icon={Phone} label="Call us" value={CONTACT.phoneDisplay} href={CONTACT.tel} />
                <ContactItem icon={MapPin} label="Service area" value={CONTACT.location} />
                <ContactItem icon={Clock} label="Business hours" value={CONTACT.hours} />
                <ContactItem icon={Mail} label="Email" value={CONTACT.email} href={`mailto:${CONTACT.email}`} />
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CONTACT.tel}
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5"
                >
                  <Phone className="h-4 w-4" /> Book Now
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="Consumer Care — Ahmedabad location"
                src="https://www.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[360px] w-full border-0 [color-scheme:normal] dark:[filter:invert(0.9)_hue-rotate(180deg)]"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/40 pt-14 pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
                  <Wrench className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="text-lg font-extrabold tracking-tight text-foreground">
                  Consumer Care
                </span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                Ahmedabad's most trusted washing machine & AC repair service.
                Same-day doorstep help, genuine spare parts, and a promise of
                honest, warranty-backed work.
              </p>
              <div className="mt-5 flex gap-2.5">
                {[
                  { href: "#", label: "Facebook", Icon: Facebook },
                  { href: "#", label: "Instagram", Icon: Instagram },
                  { href: "#", label: "YouTube", Icon: Youtube },
                ].map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4.5 w-4.5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-2 text-sm">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-muted-foreground transition-colors hover:text-primary">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
                Contact
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href={CONTACT.tel} className="hover:text-primary">
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={CONTACT.tel} className="hover:text-primary">
                    Book Now
                  </a>
                </li>
                <li>{CONTACT.location}</li>
                <li>{CONTACT.hours}</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
            <p>© {new Date().getFullYear()} Consumer Care. All rights reserved.</p>
            <p>Washing Machine & AC Repair · Ahmedabad, Gujarat</p>
          </div>
        </div>
      </footer>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  accent,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-3">
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${accent ? "bg-whatsapp/15 text-whatsapp" : "bg-primary-soft text-primary"}`}
      >
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 truncate text-sm font-bold text-foreground">
          {value}
        </div>
      </div>
    </div>
  );
  return (
    <li>
      {href ? (
        <a href={href} className="block rounded-xl -m-2 p-2 transition-colors hover:bg-accent">
          {inner}
        </a>
      ) : (
        inner
      )}
    </li>
  );
}
