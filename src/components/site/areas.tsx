import { MapPin } from "lucide-react";

const areas = [
  "Satellite","Bopal","South Bopal","Gota","Chandkheda","Motera","Navrangpura","Naranpura","Memnagar","Sabarmati","Ranip","New Ranip","Paldi","Vasna","Bodakdev","Thaltej","Science City","SG Highway","Prahlad Nagar","Ellisbridge","Shahibaug","Maninagar","Vastral","Nikol","Naroda","Odhav","Vatva","CTM",
];

export function Areas() {
  return (
    <section id="areas" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-primary">
            Service areas
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Doorstep service across Ahmedabad
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Free doorstep visit anywhere in Ahmedabad and nearby localities.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {areas.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary-soft hover:text-primary"
            >
              <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden />
              {a}
            </span>
          ))}
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-2 text-sm font-semibold text-primary">
            & nearby locations
          </span>
        </div>
      </div>
    </section>
  );
}
