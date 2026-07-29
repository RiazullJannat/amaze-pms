"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/src/components/motion/FadeIn";
import { ChevronDown } from "lucide-react";
import { cn } from "@/src/lib/utils";

const FAQS = [
  {
    q: "How long does OTA integration take to set up?",
    a: "Most major OTA connections (Booking.com, Airbnb, Expedia) are live within 15–30 minutes using our one-click channel wizard. Our onboarding team handles initial mapping and rate setup for you at no extra cost.",
  },
  {
    q: "Can you migrate data from my current PMS?",
    a: "Yes. Our dedicated migration team supports imports from all major PMS platforms including Opera, Cloudbeds, Mews, and Hostaway. Historical bookings, guest profiles, and room configurations are all transferred within 48–72 hours.",
  },
  {
    q: "Is pricing transparent? Are there any hidden fees?",
    a: "Absolutely transparent. You pay a single flat monthly fee with no per-booking commissions, no OTA surcharges, and no surprise add-ons. The price you see is the price you pay.",
  },
  {
    q: "Does AmazePMS work for multi-property portfolios?",
    a: "Our Enterprise plan is designed exactly for this. You get a single unified dashboard to manage all properties, shared channel management, consolidated reporting, and a dedicated account manager.",
  },
  {
    q: "What support is available after onboarding?",
    a: "All plans include our 24/7 chat and email support. Professional and Enterprise plans include priority phone support with guaranteed response times and a dedicated customer success manager.",
  },
];

export function FAQSection() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-50 tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-400 text-lg font-medium">
              Everything you need to know before making the switch.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={i} delay={i * 0.06}>
                <div
                  className={cn(
                    "rounded-2xl border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "border-indigo-500/40 bg-[#0f172a]/90 shadow-[0_0_30px_rgba(99,102,241,0.1)]"
                      : "border-slate-800/60 bg-slate-900/40 hover:border-slate-700"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  >
                    <span className="font-semibold text-slate-100 text-base leading-snug">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 text-slate-500"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-7 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/60 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
