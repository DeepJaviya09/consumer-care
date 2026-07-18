import { motion } from "framer-motion";

const brands = [
  "LG", "Samsung", "Whirlpool", "IFB", "Bosch", "Haier",
  "Panasonic", "Godrej", "Siemens", "Voltas", "Blue Star", "Daikin",
  "Hitachi", "Carrier", "Lloyd", "Onida",
];

export function Brands() {
  return (
    <section id="brands" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            Brands we repair
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Expert service for every major brand
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            We service washing machines and ACs from all leading Indian and
            international manufacturers.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {brands.map((b, i) => (
            <motion.div
              key={b}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: (i % 8) * 0.03 }}
              className="group grid aspect-[4/3] place-items-center rounded-2xl border border-border bg-card text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="text-base font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-lg">
                {b}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
