"use client";

import * as React from "react";
import { FadeIn } from "@/src/components/motion/FadeIn";
import { Check, Zap } from "lucide-react";
import { cn } from "@/src/lib/utils";

const PLANS = [
  { name: "Starter", monthlyPrice: 49, yearlyPrice: 39, description: "Perfect for small guesthouses and independent properties.", features: ["Up to 20 rooms", "Core Front Desk & Calendar", "Basic Direct Booking Page", "Email & Chat Support", "1 User Account"], popular: false, cta: "Start Free Trial" },
  { name: "Professional", monthlyPrice: 99, yearlyPrice: 79, description: "The complete toolkit for scaling hotels and portfolios.", features: ["Up to 100 rooms", "2-Way Channel Manager (20+ OTAs)", "Full POS & Billing System", "Automated Housekeeping App", "5 User Accounts", "Priority Phone & Email Support", "Advanced Revenue Reports"], popular: true, cta: "Start Free Trial" },
  { name: "Enterprise", monthlyPrice: null, yearlyPrice: null, description: "Tailored for multi-property chains, hotel groups, and resorts.", features: ["Unlimited rooms & properties", "Custom API & PMS integrations", "White-label booking engine", "Dedicated Account Manager", "SLA Uptime Guarantee", "Custom onboarding & training"], popular: false, cta: "Contact Sales" },
];

export function PricingSection() {
  const [isAnnual, setIsAnnual] = React.useState(false);
  return (
    <section id="pricing" className="py-20 sm:py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90vw] sm:w-[700px] h-[300px] sm:h-[400px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <FadeIn>
            <span className="inline-flex items-center rounded-full bg-indigo-500/10 border border-indigo-500/25 px-4 py-1.5 text-xs font-bold text-indigo-300 uppercase tracking-widest mb-5">Pricing</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-50 tracking-tight mb-4">Simple, Transparent Pricing</h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto font-medium mb-7 px-2">No hidden fees. No OTA commissions. Cancel anytime.</p>
            <div className="inline-flex items-center gap-1 bg-slate-900/60 border border-slate-700/60 rounded-xl p-1">
              <button onClick={() => setIsAnnual(false)} className={cn("px-4 sm:px-5 py-2 rounded-lg text-sm font-semibold transition-all", !isAnnual ? "bg-slate-700 text-slate-50" : "text-slate-400")}>Monthly</button>
              <button onClick={() => setIsAnnual(true)} className={cn("flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-lg text-sm font-semibold transition-all", isAnnual ? "bg-slate-700 text-slate-50" : "text-slate-400")}>
                Annual <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">-20%</span>
              </button>
            </div>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch md:items-center">
          {PLANS.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 0.08}>
              <div className={cn("relative rounded-2xl border p-6 sm:p-8 flex flex-col overflow-hidden transition-all duration-300 h-full", plan.popular ? "border-indigo-500/50 bg-[#0f172a]/90 shadow-[0_0_60px_rgba(99,102,241,0.18)] md:scale-105 z-10" : "border-slate-800/50 bg-slate-900/40 hover:border-slate-700")}>
                {plan.popular && <>
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 via-violet-400 to-cyan-400" />
                  <div className="absolute top-4 right-4"><span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-2.5 py-1 text-[11px] font-bold text-white"><Zap size={9} fill="currentColor" /> Most Popular</span></div>
                </>}
                <div className="mb-5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-300 mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1.5 mb-3">
                    {plan.monthlyPrice !== null ? <><span className="text-4xl sm:text-5xl font-black text-slate-50">${isAnnual ? plan.yearlyPrice : plan.monthlyPrice}</span><span className="text-slate-400 text-sm">/ mo</span></> : <span className="text-3xl sm:text-4xl font-black text-slate-50">Custom</span>}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-7 flex-1">
                  {plan.features.map((f, j) => <li key={j} className="flex items-start gap-2.5"><Check size={15} className={cn("shrink-0 mt-0.5", plan.popular ? "text-indigo-400" : "text-slate-500")} /><span className="text-sm text-slate-300">{f}</span></li>)}
                </ul>
                <button className={cn("w-full py-3 sm:py-3.5 rounded-xl text-sm font-bold transition-all duration-200", plan.popular ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:opacity-90" : "border border-slate-700 text-slate-300 hover:bg-white/5")}>{plan.cta}</button>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}><p className="text-center text-sm text-slate-500 mt-7">All plans include a 14-day free trial. No credit card required.</p></FadeIn>
      </div>
    </section>
  );
}
