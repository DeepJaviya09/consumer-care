import { motion } from "framer-motion";
import { CheckCircle2, MapPin, ShieldCheck, Clock } from "lucide-react";
import { CallButton, OutlineButton, WhatsAppButton } from "./cta-buttons";
import heroImg from "@/assets/hero-technician.jpg";

const stats = [
  { k: "10K+", v: "Repairs done" },
  { k: "4.9★", v: "Avg. rating" },
  { k: "30 min", v: "Response time" },
  { k: "90-day", v: "Service warranty" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-10 pb-16 sm:pt-16 sm:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 -z-10 h-96 w-96 rounded-full bg-whatsapp/20 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-whatsapp/15 text-whatsapp">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </span>
            Same-day doorstep service across Ahmedabad
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Ahmedabad's Trusted{" "}
            <span className="text-gradient-brand">Washing Machine & AC</span>{" "}
            Repair Experts
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Fast, affordable, and reliable repair & maintenance for all major
            brands. Genuine spare parts, transparent charges, and a 90-day
            service warranty — right at your doorstep.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <OutlineButton
              href="#book"
              size="lg"
              className="!bg-primary !text-primary-foreground !border-transparent hover:!bg-primary/90"
            >
              Book Service
            </OutlineButton>
            <CallButton size="lg" className="!bg-foreground !text-background">
              Call Now
            </CallButton>
            <WhatsAppButton size="lg">WhatsApp Now</WhatsAppButton>
          </motion.div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> Genuine parts
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> 30-min response
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" /> All Ahmedabad
            </span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-primary/10 via-card to-whatsapp/10 p-2 shadow-[var(--shadow-soft)]">
            <img
              src={heroImg}
              alt="Consumer Care technician repairing a washing machine and AC"
              width={1280}
              height={1024}
              fetchPriority="high"
              className="h-auto w-full rounded-[1.6rem] object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -left-3 bottom-6 hidden rounded-2xl border border-border bg-card/90 p-3 shadow-lg backdrop-blur sm:flex sm:items-center sm:gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-whatsapp/15 text-whatsapp">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-bold text-foreground">Booked in 60 sec</div>
              <div className="text-xs text-muted-foreground">Call or WhatsApp us</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-4 sm:gap-4 sm:px-6 lg:px-8">
        {stats.map((s) => (
          <div
            key={s.v}
            className="rounded-2xl border border-border bg-card/60 p-4 text-center backdrop-blur"
          >
            <div className="text-2xl font-extrabold text-foreground sm:text-3xl">
              {s.k}
            </div>
            <div className="mt-1 text-xs font-medium text-muted-foreground">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
