import { FadeIn } from "@/src/components/motion/FadeIn";

const LOGOS = [
  { name: "Booking.com", color: "#003580" },
  { name: "Airbnb", color: "#FF5A5F" },
  { name: "Expedia", color: "#FFC72C" },
  { name: "Hotels.com", color: "#D4001A" },
  { name: "Agoda", color: "#E2002A" },
  { name: "Vrbo", color: "#1B65B9" },
];

function LogoItem({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5 px-8 py-3 rounded-xl border border-slate-800/60 bg-slate-900/40 mx-4 flex-shrink-0 whitespace-nowrap group hover:border-slate-700 transition-colors">
      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
      <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">{name}</span>
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="py-16 border-y border-slate-800/40 relative overflow-hidden" style={{ backgroundColor: "var(--page-bg)" }}>
      <FadeIn>
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-[0.15em] mb-8 px-4">
          Trusted by 500+ Luxury Hotels, Resorts & Property Managers Worldwide
        </p>
      </FadeIn>
      {/* Gradient masks on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0f1d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0f1d] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden">
        {/* Infinite marquee: two copies of the list side by side */}
        <div className="flex animate-marquee">
          {[...LOGOS, ...LOGOS].map((logo, i) => (
            <LogoItem key={i} name={logo.name} color={logo.color} />
          ))}
        </div>
      </div>
    </section>
  );
}
