"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "@/src/components/motion/FadeIn";

function useCounter(to: number, duration = 2000, start = false) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [to, duration, start]);
  return count;
}

const METRICS = [
  { value: 4200, suffix: "+",  label: "Properties Onboarded",      description: "Hotels, villas & guesthouses worldwide" },
  { value: 99.9, suffix: "%",  label: "System Uptime",             description: "Enterprise-grade infrastructure"         },
  { value: 35,   suffix: "%",  label: "Direct Booking Increase",   description: "Average across all properties"           },
  { value: 20,   suffix: "+",  label: "Integrated OTA Channels",   description: "Booking.com, Airbnb, Expedia & more"     },
];

function MetricCard({ value, suffix, label, description, index }: {
  value: number; suffix: string; label: string; description: string; index: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // Special case: 99.9 — keep one decimal place
  const displayValue = suffix === "%" && value === 99.9 ? (isInView ? "99.9" : "0") : null;
  const count = useCounter(Number.isInteger(value) ? value : Math.floor(value), 1800, isInView);

  // For 4200 show "4,200"
  const formatted = value === 4200
    ? count.toLocaleString()
    : (displayValue ?? count);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center group relative p-8 rounded-2xl border border-slate-800/50 bg-slate-900/30 hover:border-slate-700 hover:bg-slate-900/60 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
      <div className="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mb-3">
        {formatted}{suffix}
      </div>
      <div className="text-base font-bold text-slate-200 mb-1">{label}</div>
      <div className="text-sm text-slate-500">{description}</div>
    </motion.div>
  );
}

export function MetricsSection() {
  return (
    <section className="py-24 md:py-32 border-y border-slate-800/40 relative overflow-hidden">
      <div className="absolute inset-0 ambient-grid opacity-50" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-14">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-50 tracking-tight mb-4">
              Proven Results at Scale
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto font-medium">Numbers that matter to your bottom line.</p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {METRICS.map((m, i) => (
            <MetricCard key={i} {...m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
