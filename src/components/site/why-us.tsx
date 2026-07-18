import { motion } from "framer-motion";
import {
  Award,
  Clock,
  ShieldCheck,
  Wallet,
  Eye,
  Home,
  Zap,
  Smile,
  MapPin,
} from "lucide-react";

const features = [
  { icon: Award, title: "Experienced Technicians", desc: "Trained, certified engineers with 8+ years of field expertise." },
  { icon: Clock, title: "Same-Day Service", desc: "Book before 6 PM — most jobs are completed the very same day." },
  { icon: ShieldCheck, title: "Genuine Spare Parts", desc: "Only OEM-grade parts with brand-backed warranty." },
  { icon: Wallet, title: "Affordable Pricing", desc: "Fair, market-competitive rates for every repair." },
  { icon: Eye, title: "Transparent Charges", desc: "Fixed quote before we start. No hidden fees, ever." },
  { icon: Home, title: "Doorstep Service", desc: "We come to you — home or office, across Ahmedabad." },
  { icon: Zap, title: "Quick Response", desc: "Average response time under 30 minutes." },
  { icon: Smile, title: "Customer Satisfaction", desc: "4.9★ average across 2,500+ verified customers." },
  { icon: MapPin, title: "Trusted Local Business", desc: "Ahmedabad-owned & operated — deeply local, deeply reliable." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative scroll-mt-16 overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-primary/5 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            Why Consumer Care
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Fast, honest, and warranty-backed — every time
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Ten reasons families and businesses across Ahmedabad choose us for
            their washing machine and AC needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              className="group relative rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
