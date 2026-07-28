import { FadeIn } from "@/src/components/motion/FadeIn";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Since switching to AmazePMS, we've eliminated double bookings entirely. The 2-way channel sync with Booking.com and Airbnb is instantaneous. Our team saves 12 hours every single week on admin alone.",
    name: "Sarah Jenkins",
    role: "General Manager",
    company: "The Grand Boutique Hotel",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300",
    stat: "12 hrs/week saved",
  },
  {
    quote: "We tried 3 different PMS systems before AmazePMS. Nothing comes close to the depth of features at this price point. The direct booking engine alone recovered the monthly fee in the first 3 days.",
    name: "Michael Chang",
    role: "Owner & Managing Director",
    company: "Coastal Retreat Resorts",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300",
    stat: "40% revenue uplift",
  },
  {
    quote: "The onboarding was seamless and the support team migrated all our historical data in under 48 hours. The housekeeping module alone transformed how our floor supervisors communicate.",
    name: "Elena Rodriguez",
    role: "Operations Director",
    company: "Sunvista Luxury Villas",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300",
    stat: "3-day onboarding",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-purple-600/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-purple-500/10 border border-purple-500/25 px-4 py-1.5 text-xs font-bold text-purple-300 uppercase tracking-widest mb-5 sm:mb-6">
              Wall of Love
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-50 tracking-tight mb-4 sm:mb-5">
              Hoteliers Love AmazePMS
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto font-medium px-2">
              Real results from real property managers — not cherry-picked marketing fluff.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="group relative h-full flex flex-col rounded-2xl border border-slate-800/60 bg-[#0d1424]/60 p-6 sm:p-8 hover:border-slate-700 hover:bg-[#0d1424]/90 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-2xl" />

                <div className="flex gap-1 mb-4 sm:mb-5 relative z-10">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <blockquote className="text-slate-300 leading-relaxed mb-5 sm:mb-6 flex-1 relative z-10 text-sm sm:text-[15px]">
                  "{t.quote}"
                </blockquote>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-400 mb-5 sm:mb-6 self-start relative z-10">
                  ↗ {t.stat}
                </div>

                <div className="flex items-center gap-3 relative z-10 border-t border-slate-800/60 pt-4 sm:pt-5">
                  <img
                    src={t.avatar}
                    alt={`${t.name}, ${t.role} at ${t.company}`}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-slate-700 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-bold text-slate-200 truncate">{t.name}</div>
                    <div className="text-xs text-slate-500 truncate">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
