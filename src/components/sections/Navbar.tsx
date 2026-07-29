"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useDemoModal } from "@/src/context/DemoModalContext";

const NAV_LINKS = [
  { label: "Modules", href: "#modules" },
  { label: "Features", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

/* Rotating social-proof messages in the announcement bar */
const TICKER_MESSAGES = [
  "🟢 47 hotels signed up this week",
  "⭐ Rated 4.9/5 across 1,200+ reviews",
  "🚀 14-day free trial — no card needed",
  "📈 Average 35% uplift in direct bookings",
];

function AnnouncementBar() {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % TICKER_MESSAGES.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full bg-indigo-600/15 border-b border-indigo-500/20 py-1.5 px-4 text-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={idx}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="text-[11px] sm:text-xs font-semibold text-indigo-200 tracking-wide"
        >
          {TICKER_MESSAGES[idx]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { openModal } = useDemoModal();

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile menu is open
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleDemoClick = () => {
    setMobileOpen(false);
    openModal();
  };

  return (
    <>
      {/* Announcement bar — hidden after scroll */}
      <AnimatePresence>
        {!isScrolled && (
          <motion.div
            initial={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
          >
            <AnnouncementBar />
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "top-0" : "top-[30px] sm:top-[30px]",
          isScrolled
            ? "backdrop-blur-md bg-[#0a0f1d]/90 border-b border-slate-800/60 shadow-[0_1px_30px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0" onClick={() => setMobileOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_25px_rgba(99,102,241,0.7)] transition-shadow">
              <Zap size={16} className="text-white" fill="white" />
            </div>
            <span className="text-lg font-bold text-slate-50 tracking-tight">
              Amaze<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">PMS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-50 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link href="#" className="text-sm font-medium text-slate-400 hover:text-slate-50 px-4 py-2 rounded-lg hover:bg-white/5 transition-all">
              Sign In
            </Link>
            <button
              onClick={handleDemoClick}
              className="inline-flex h-9 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_30px_rgba(99,102,241,0.55)] hover:opacity-90 transition-all duration-200"
            >
              Book a Free Demo
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-400 hover:text-slate-50 transition-colors p-2 -mr-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a0f1d]/98 backdrop-blur-xl md:hidden"
          >
            <motion.nav
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col h-full pt-20 px-4 pb-8"
            >
              <div className="flex flex-col gap-1 flex-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-4 text-xl font-semibold text-slate-200 hover:text-white rounded-xl hover:bg-white/5 transition-all border-b border-slate-800/50"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 mt-6">
                <Link href="#" onClick={() => setMobileOpen(false)} className="w-full text-center py-4 text-slate-300 border border-slate-700 rounded-xl font-semibold hover:bg-white/5 transition-all">
                  Sign In
                </Link>
                <button
                  onClick={handleDemoClick}
                  className="w-full text-center py-4 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 to-cyan-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  Book a Free Demo
                </button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
