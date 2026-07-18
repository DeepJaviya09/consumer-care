import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Shah",
    area: "Satellite",
    rating: 5,
    text: "Booked on WhatsApp at 10 AM and my LG front load was fixed by 1 PM. Fair price, super polite technician. Highly recommend Consumer Care!",
    initials: "PS",
  },
  {
    name: "Rahul Mehta",
    area: "Bopal",
    rating: 5,
    text: "Our split AC wasn't cooling. They did gas refill + deep cleaning the same day. Cooling is like new. Honest pricing, no upsell.",
    initials: "RM",
  },
  {
    name: "Aisha Khan",
    area: "Prahlad Nagar",
    rating: 5,
    text: "Best appliance service in Ahmedabad. Fixed a PCB issue in my IFB washer that two others gave up on. 3-month warranty was a bonus.",
    initials: "AK",
  },
  {
    name: "Jignesh Patel",
    area: "Thaltej",
    rating: 5,
    text: "Called at 8:30 PM, technician arrived by 9 AM next morning. Transparent charges shared upfront on WhatsApp. Very professional.",
    initials: "JP",
  },
  {
    name: "Neha Desai",
    area: "Navrangpura",
    rating: 5,
    text: "AMC plan for our office ACs. Zero downtime this summer. Their response is genuinely 30 minutes. Worth every rupee.",
    initials: "ND",
  },
];

export function Reviews() {
  const [i, setI] = useState(0);
  const total = reviews.length;
  const go = (n: number) => setI((i + n + total) % total);
  const r = reviews[i];

  return (
    <section id="reviews" className="scroll-mt-16 bg-primary-soft/40 py-16 dark:bg-transparent sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            Reviews
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Loved by 2,500+ Ahmedabad customers
          </h2>
        </div>

        <div className="relative mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] sm:p-10"
            >
              <Quote
                className="absolute -right-4 -top-4 h-24 w-24 text-primary/10"
                aria-hidden
              />
              <div className="flex gap-1 text-primary">
                {Array.from({ length: r.rating }).map((_, n) => (
                  <Star key={n} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-lg leading-relaxed text-foreground sm:text-xl">
                "{r.text}"
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-base font-bold text-primary-foreground">
                  {r.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{r.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {r.area}, Ahmedabad
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((_, n) => (
                <button
                  key={n}
                  aria-label={`Show review ${n + 1}`}
                  onClick={() => setI(n)}
                  className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Previous review"
                onClick={() => go(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                aria-label="Next review"
                onClick={() => go(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
