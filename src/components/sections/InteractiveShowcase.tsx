"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/src/components/motion/FadeIn";
import { Check, LayoutDashboard, RefreshCcw, CalendarCheck, CreditCard } from "lucide-react";
import { cn } from "@/src/lib/utils";

const TABS = [
  {
    id: "front-desk",
    label: "Smart Front Desk",
    icon: LayoutDashboard,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000",
    imageAlt: "Hotel front desk with modern check-in system",
    headline: "Check-In, Calendar & Guest Profiles — All in One View",
    benefits: [
      "Visual drag-and-drop tape chart calendar",
      "Single-click check-in & check-out workflows",
      "Guest profile history with stay preferences",
      "Real-time housekeeping assignment integration",
    ],
  },
  {
    id: "channel-sync",
    label: "2-Way OTA Sync",
    icon: RefreshCcw,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    imageAlt: "Analytics dashboard showing OTA channel distribution and booking data",
    headline: "Sync Rates & Inventory to 20+ OTAs Instantly",
    benefits: [
      "Two-way real-time sync with Booking.com, Airbnb & more",
      "Zero double-booking guarantee with smart lock",
      "Dynamic rate management per channel",
      "Centralized inbox for all OTA messages",
    ],
  },
  {
    id: "booking-engine",
    label: "Direct Booking",
    icon: CalendarCheck,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000",
    imageAlt: "Luxury hotel pool view for direct booking experience",
    headline: "Commission-Free Bookings. Your Brand. Your Revenue.",
    benefits: [
      "Branded booking page — embedded in your website",
      "Stripe & PayPal payment gateway integration",
      "Promo codes, early-bird, and loyalty pricing",
      "Mobile-optimized booking flow",
    ],
  },
  {
    id: "pos",
    label: "POS & Billing",
    icon: CreditCard,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000",
    imageAlt: "Point of sale system for hotel restaurants and retail",
    headline: "Full-Service POS for F&B, Spa, and Retail Outlets",
    benefits: [
      "Folio-based billing linked directly to guest room",
      "Supports restaurant, spa, and gift shop items",
      "Split billing & group checkout support",
      "End-of-day financial settlement reports",
    ],
  },
];

export function InteractiveShowcase() {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const tab = TABS[activeIdx];

  return (
    <section id="showcase" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/10 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-cyan-500/10 border border-cyan-500/25 px-4 py-1.5 text-xs font-bold text-cyan-300 uppercase tracking-widest mb-5 sm:mb-6">
              Interactive Feature Tour
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-50 tracking-tight mb-4 sm:mb-5">
              Every Tool Your Property Needs
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto font-medium px-2">
              Click through the modules to see exactly how AmazePMS transforms your daily operations.
            </p>
          </FadeIn>
        </div>

        {/* Tab Buttons — scrollable on mobile */}
        <FadeIn delay={0.1}>
          <div className="flex gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center no-scrollbar">
            {TABS.map((t, i) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveIdx(i)}
                  className={cn(
                    "flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border whitespace-nowrap flex-shrink-0",
                    activeIdx === i
                      ? "bg-indigo-600 border-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                      : "bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-slate-200 hover:border-slate-600 hover:bg-slate-800/60"
                  )}
                >
                  <Icon size={14} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </FadeIn>

        {/* Content Panel — image on top on mobile, side-by-side on lg */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Benefits */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id + "-text"}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-50 tracking-tight mb-5 sm:mb-6">
                {tab.headline}
              </h3>
              <ul className="space-y-3 sm:space-y-4 mb-7 sm:mb-8">
                {tab.benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center">
                      <Check size={11} className="text-indigo-400" />
                    </div>
                    <span className="text-sm sm:text-base text-slate-300 font-medium leading-snug">{b}</span>
                  </motion.li>
                ))}
              </ul>
              <button className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:scale-[1.02] transition-all duration-200">
                Explore {tab.label}
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Right: Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id + "-img"}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700/60 shadow-[0_20px_60px_rgba(0,0,0,0.4)] sm:shadow-[0_30px_80px_rgba(0,0,0,0.5)] group w-full"
            >
              <img
                src={tab.image}
                alt={tab.imageAlt}
                className="w-full aspect-[4/3] sm:aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d]/80 via-[#0a0f1d]/20 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 px-3 py-1.5 text-xs font-semibold text-slate-300 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {tab.label}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
