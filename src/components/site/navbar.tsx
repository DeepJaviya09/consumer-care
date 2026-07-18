import { useEffect, useState } from "react";
import { Menu, Wrench, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { BookNowButton } from "./cta-buttons";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#brands", label: "Brands" },
  { href: "#areas", label: "Service Areas" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-[var(--shadow-soft)]">
            <Wrench className="h-4.5 w-4.5" strokeWidth={2.5} />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[15px] font-extrabold tracking-tight text-foreground">
              Consumer Care
            </span>
            <span className="hidden truncate text-[11px] font-medium text-muted-foreground sm:block">
              Ahmedabad · Repair Experts
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <BookNowButton size="sm" className="hidden md:inline-flex">
            Book Now
          </BookNowButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl xl:hidden">
          <nav
            className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 flex items-center justify-between gap-2">
              <ThemeToggle />
              <BookNowButton size="sm">Book Now</BookNowButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
