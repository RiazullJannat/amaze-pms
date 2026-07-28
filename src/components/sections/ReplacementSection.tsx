import { FadeIn } from "@/src/components/motion/FadeIn";
import { X, Check, ArrowRight } from "lucide-react";

const COMPARISONS = [
  {
    old: "Fragmented Channel Managers",
    new: "Integrated 2-Way OTA Sync",
    icon: "📡",
    detail: "Connect 20+ OTAs with instant, automated rate and availability push.",
  },
  {
    old: "Manual Spreadsheet Booking",
    new: "Visual Grid Reservation Calendar",
    icon: "📅",
    detail: "Drag-and-drop tape chart with live collision detection and guest timelines.",
  },
  {
    old: "Paper-based Housekeeping",
    new: "Real-Time Room Status Tracking",
    icon: "🏨",
    detail: "Mobile-first task assignments with live progress updates for every floor.",
  },
  {
    old: "High-Commission OTA Bookings",
    new: "Zero-Commission Direct Booking Engine",
    icon: "💰",
    detail: "Your branded booking page, embedded anywhere, with zero fees — ever.",
  },
];

export function ReplacementSection() {
  return (
    <section id="modules" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[600px] h-[300px] sm:h-[400px] bg-indigo-600/10 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 border border-indigo-500/25 px-4 py-1.5 text-xs font-bold text-indigo-300 uppercase tracking-widest mb-5 sm:mb-6">
              Replace Your Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-50 tracking-tight mb-4 sm:mb-5">
              One Platform. Zero Subscriptions.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto font-medium px-2">
              Stop juggling 4+ tools that don't talk to each other. AmazePMS consolidates your entire operation.
            </p>
          </FadeIn>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {COMPARISONS.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="group relative rounded-2xl border border-slate-800/60 bg-[#0d1424]/60 p-5 sm:p-7 hover:border-slate-700 hover:bg-[#0d1424]/90 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

                <div className="text-2xl sm:text-3xl mb-4 sm:mb-5">{item.icon}</div>

                {/* Old vs New – stacks on mobile, row on sm+ */}
                <div className="flex flex-col gap-2 sm:gap-0 sm:flex-row sm:items-center sm:gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-lg px-3 py-2 text-xs sm:text-sm text-rose-300">
                    <X size={12} className="shrink-0" />
                    <span className="font-medium">{item.old}</span>
                  </div>
                  <ArrowRight size={14} className="text-slate-600 shrink-0 hidden sm:block" />
                  <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2 text-xs sm:text-sm text-emerald-300">
                    <Check size={12} className="shrink-0" />
                    <span className="font-medium">{item.new}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
