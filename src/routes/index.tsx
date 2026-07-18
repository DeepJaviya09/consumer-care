import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { WhyUs } from "@/components/site/why-us";
import { Brands } from "@/components/site/brands";
import { Areas } from "@/components/site/areas";
import { Reviews } from "@/components/site/reviews";
import { Faq } from "@/components/site/faq";
import { ContactAndFooter } from "@/components/site/contact-footer";
import { FloatingButtons, MobileBottomBar } from "@/components/site/floating";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { q: "Do you provide same-day service?", a: "Yes. For bookings before 6 PM our technician arrives the same day in most Ahmedabad areas, typically within 30–60 minutes." },
    { q: "Which brands do you repair?", a: "All major brands including LG, Samsung, Whirlpool, IFB, Bosch, Haier, Panasonic, Godrej, Siemens, Voltas, Blue Star, Daikin, Hitachi, Carrier, Lloyd, Onida." },
    { q: "Do you provide warranty on repairs?", a: "Yes. We stand behind our work and the parts we install." },
    { q: "Do you repair commercial appliances?", a: "Yes. We service offices, clinics, salons, restaurants and residential complexes with AMC plans." },
    { q: "How can I book a service?", a: "Call or WhatsApp +91 75750 50058 or use the booking form on this page." },
    { q: "How much does an inspection cost?", a: "Doorstep inspection is charged nominally and waived off if you proceed with the repair." },
  ].map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(faqJsonLd),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative flex min-h-dvh flex-col bg-background text-foreground">
      <Navbar />
      <main className="pb-24 sm:pb-0">
        <Hero />
        <Services />
        <WhyUs />
        <Brands />
        <Areas />
        <Reviews />
        <Faq />
        <ContactAndFooter />
      </main>
      <FloatingButtons />
      <MobileBottomBar />
    </div>
  );
}
