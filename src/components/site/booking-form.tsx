import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { BookNowButton } from "./cta-buttons";
import { CONTACT } from "@/lib/contact";

const appliances = ["Washing Machine", "Air Conditioner"];
const brands = ["LG","Samsung","Whirlpool","IFB","Bosch","Haier","Panasonic","Godrej","Siemens","Voltas","Blue Star","Daikin","Hitachi","Carrier","Lloyd","Onida","Other"];
const times = ["As soon as possible","Today – Morning","Today – Afternoon","Today – Evening","Tomorrow – Morning","Tomorrow – Afternoon","Tomorrow – Evening"];

const fieldClasses =
  "w-full rounded-xl border border-input bg-background/60 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground shadow-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-ring/40";

export function BookingForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.location.href = CONTACT.tel;
    setSent(true);
  }

  return (
    <section id="book" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-10 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-soft px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <CalendarCheck className="h-3.5 w-3.5" /> Book Service
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Book your repair in 60 seconds
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Share a few details and our team will confirm your slot soon.
              Tap Book Now to open your phone dialer and speak with us directly.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              {[
                "Free doorstep visit across Ahmedabad",
                "Fixed quote before we start the repair",
                "Genuine parts with brand warranty",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-whatsapp" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
              <BookNowButton size="md">Book Now</BookNowButton>
            </div>
          </div>

          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="grid gap-1.5 sm:col-span-1">
              <span className="text-xs font-semibold text-foreground">Full name</span>
              <input required name="name" placeholder="Your name" className={fieldClasses} />
            </label>
            <label className="grid gap-1.5 sm:col-span-1">
              <span className="text-xs font-semibold text-foreground">Mobile number</span>
              <input
                required
                name="mobile"
                type="tel"
                inputMode="numeric"
                pattern="[0-9+ ]{7,15}"
                placeholder="+91 ..."
                className={fieldClasses}
              />
            </label>
            <label className="grid gap-1.5">
              <span className="text-xs font-semibold text-foreground">Appliance</span>
              <select required name="appliance" defaultValue="" className={fieldClasses}>
                <option value="" disabled>Select appliance</option>
                {appliances.map((a) => <option key={a}>{a}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5">
              <span className="text-xs font-semibold text-foreground">Brand</span>
              <select required name="brand" defaultValue="" className={fieldClasses}>
                <option value="" disabled>Select brand</option>
                {brands.map((b) => <option key={b}>{b}</option>)}
              </select>
            </label>
            <label className="grid gap-1.5 sm:col-span-2">
              <span className="text-xs font-semibold text-foreground">Service required</span>
              <input required name="service" placeholder="e.g. AC gas refill, Front load repair" className={fieldClasses} />
            </label>
            <label className="grid gap-1.5 sm:col-span-2">
              <span className="text-xs font-semibold text-foreground">Problem description</span>
              <textarea
                required
                name="problem"
                rows={3}
                placeholder="Briefly describe the issue…"
                className={`${fieldClasses} resize-none`}
              />
            </label>
            <label className="grid gap-1.5 sm:col-span-2">
              <span className="text-xs font-semibold text-foreground">Address</span>
              <input required name="address" placeholder="Area, landmark, Ahmedabad" className={fieldClasses} />
            </label>
            <label className="grid gap-1.5 sm:col-span-2">
              <span className="text-xs font-semibold text-foreground">Preferred time</span>
              <select required name="time" defaultValue="" className={fieldClasses}>
                <option value="" disabled>Select preferred time</option>
                {times.map((t) => <option key={t}>{t}</option>)}
              </select>
            </label>

            <div className="mt-2 flex flex-col gap-2.5 sm:col-span-2 sm:flex-row">
              <button
                type="submit"
                className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-primary px-6 text-sm font-bold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] active:scale-[0.98]"
              >
                Book Now
              </button>
            </div>

            {sent && (
              <p className="sm:col-span-2 text-center text-sm font-semibold text-primary">
                Opening your phone dialer…
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
