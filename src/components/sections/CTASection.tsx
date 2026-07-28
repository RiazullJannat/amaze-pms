"use client";

import { FadeIn } from "@/src/components/motion/FadeIn";
import { useDemoModal } from "@/src/context/DemoModalContext";

export function CTASection() {
  const { openModal } = useDemoModal();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden border border-indigo-500/25 bg-gradient-to-br from-[#0f1a2e] via-[#111827] to-[#0a0f1d] p-12 md:p-20 text-center">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-indigo-200 uppercase tracking-widest">No Credit Card Required</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold text-slate-50 tracking-tight mb-6 max-w-3xl mx-auto">
                Ready to Scale Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                  Property Revenue?
                </span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-10 font-medium">
                Join hundreds of property managers saving 15+ hours every week with AmazePMS.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex h-auto sm:h-14 py-4 sm:py-0 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 sm:px-10 text-sm sm:text-base font-bold text-white shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_50px_rgba(99,102,241,0.6)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  <span>Book a Free Demo <span className="hidden sm:inline">— Talk to an Expert</span></span>
                </button>
                <button
                  onClick={openModal}
                  className="w-full sm:w-auto inline-flex h-auto sm:h-14 py-4 sm:py-0 items-center justify-center rounded-xl border border-slate-600 text-slate-300 hover:text-slate-50 hover:border-slate-500 hover:bg-white/5 px-6 sm:px-10 text-sm sm:text-base font-semibold transition-all duration-200"
                >
                  Start 14-Day Free Trial
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
