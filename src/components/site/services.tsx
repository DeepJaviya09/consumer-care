import { motion } from "framer-motion";
import {
  WashingMachine,
  Wind,
  Wrench,
  Droplets,
  Cpu,
  Snowflake,
  Zap,
  Fan,
  Thermometer,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  Cog,
  Gauge,
  PlugZap,
  Hammer,
  type LucideIcon,
} from "lucide-react";
import { BookNowButton } from "./cta-buttons";

type Service = { name: string; desc: string; icon: LucideIcon };

const washing: Service[] = [
  { name: "Front Load Repair", desc: "Bearings, door seal, drum & display issues.", icon: WashingMachine },
  { name: "Top Load Repair", desc: "Spin, agitator, timer and lid switch fixes.", icon: WashingMachine },
  { name: "Fully Automatic Repair", desc: "Program, sensor & controller diagnostics.", icon: Cog },
  { name: "Semi Automatic Repair", desc: "Motor, timer, wash tub & spinner service.", icon: Wrench },
  { name: "Drum & Motor Repair", desc: "Balancing, noise, vibration and motor rewind.", icon: Fan },
  { name: "PCB Repair", desc: "Board-level diagnostics and component swap.", icon: Cpu },
  { name: "Water Leakage", desc: "Inlet, drain hose, gasket & pump leaks.", icon: Droplets },
  { name: "Installation & Uninstall", desc: "Safe fit, level and demo — hassle-free.", icon: Hammer },
  { name: "Annual Maintenance", desc: "Scheduled service to prevent breakdowns.", icon: CalendarCheck },
];

const ac: Service[] = [
  { name: "Split AC Repair", desc: "Indoor/outdoor unit fault diagnosis & fix.", icon: Wind },
  { name: "Window AC Repair", desc: "Cooling, noise, drainage & control repair.", icon: Wind },
  { name: "AC Installation", desc: "Copper piping, drainage & clean mounting.", icon: PlugZap },
  { name: "AC Uninstallation", desc: "Safe removal, gas recovery & packing.", icon: Wrench },
  { name: "Gas Refilling (R32/R410)", desc: "Leak test, vacuum & precise gas top-up.", icon: Gauge },
  { name: "Cooling Issues", desc: "Low cooling, ice-formation & airflow fix.", icon: Snowflake },
  { name: "Water Leakage Repair", desc: "Drain pipe, tray and blockage service.", icon: Droplets },
  { name: "Compressor Repair", desc: "Compressor testing, capacitor & swap.", icon: Zap },
  { name: "PCB Repair", desc: "Inverter board & remote sensor repair.", icon: Cpu },
  { name: "Deep Cleaning", desc: "Chemical wash for max cooling & hygiene.", icon: Sparkles },
  { name: "Annual Maintenance", desc: "2 or 4 visit AMC plans available.", icon: ShieldCheck },
  { name: "Thermostat & Sensor", desc: "Precise cooling with sensor calibration.", icon: Thermometer },
];

function Card({ s, i }: { s: Service; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
      className="group relative flex flex-col rounded-3xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <s.icon className="h-5.5 w-5.5" strokeWidth={2.2} />
        </span>
        <h3 className="min-w-0 text-base font-bold leading-tight text-foreground">
          {s.name}
        </h3>
      </div>
      <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
        {s.desc}
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <BookNowButton size="sm" full>
          Book Now
        </BookNowButton>
      </div>
    </motion.article>
  );
}

function Group({
  id,
  title,
  subtitle,
  items,
}: {
  id: string;
  title: string;
  subtitle: string;
  items: Service[];
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            {subtitle}
          </div>
          <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <Card key={s.name} s={s} i={i} />
        ))}
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            What we fix
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            End-to-end appliance repair & maintenance
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Certified technicians · Genuine parts · Transparent charges. Tap
            any service to book instantly.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          <Group
            id="washing-machine"
            subtitle="Washing Machine"
            title="Washing Machine Services"
            items={washing}
          />
          <Group id="ac" subtitle="Air Conditioner" title="AC Services" items={ac} />
        </div>
      </div>
    </section>
  );
}
