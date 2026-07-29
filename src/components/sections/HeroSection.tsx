"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeIn } from "@/src/components/motion/FadeIn";
import { Play, ArrowUpRight, Bell, Search, LayoutDashboard, TrendingUp, Users, BedDouble, RefreshCcw, MoreHorizontal } from "lucide-react";
import { useDemoModal } from "@/src/context/DemoModalContext";

/* ── Tiny inline dashboard data ── */
const RECENT_BOOKINGS = [
  { guest: "James Whitmore",    room: "301",  source: "Direct",      nights: 3,  status: "checked-in",  amount: "$540" },
  { guest: "Priya Nair",        room: "114",  source: "Booking.com", nights: 2,  status: "arriving",    amount: "$360" },
  { guest: "Carlos Mendez",     room: "208",  source: "Airbnb",      nights: 5,  status: "checked-in",  amount: "$875" },
  { guest: "Sophie Müller",     room: "412",  source: "Direct",      nights: 1,  status: "departing",   amount: "$195" },
];

const STATUS_CONFIG: Record<string, { label: string; color: string }> = {
  "checked-in": { label: "Checked In",  color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  "arriving":   { label: "Arriving",    color: "text-indigo-400  bg-indigo-500/10  border-indigo-500/20"  },
  "departing":  { label: "Departing",   color: "text-amber-400   bg-amber-500/10   border-amber-500/20"   },
};

const OCCUPANCY_BARS = [72, 85, 91, 78, 95, 88, 98]; // Mon–Sun
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

export function HeroSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { openModal } = useDemoModal();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 250, damping: 35 });
  const mouseYSpring = useSpring(y, { stiffness: 250, damping: 35 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden ambient-grid">
      {/* Radial ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.10) 40%, transparent 70%)",
        }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[700px] md:w-[900px] h-[50vh] sm:h-[500px] md:h-[600px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/20 via-purple-600/15 to-cyan-500/20 blur-[100px] sm:blur-[120px]" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 bg-gradient-to-t from-[#0a0f1d] to-transparent pointer-events-none z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex flex-col items-center text-center">
        {/* Top Pill Badge */}
        <FadeIn delay={0.05}>
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-500/25 px-3 sm:px-4 py-1.5 mb-6 sm:mb-8 cursor-pointer hover:bg-indigo-500/20 transition-colors group pulse-glow">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-indigo-300 tracking-wide">
              NEW: Automated Channel Manager 2.0 Live
            </span>
            <ArrowUpRight size={12} className="text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0" />
          </div>
        </FadeIn>

        {/* Main Headline */}
        <FadeIn delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-slate-50 leading-[1.05] mb-5 sm:mb-6 max-w-5xl">
            The All-In-One{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Property &amp; Hotel
            </span>{" "}
            Management Platform
          </h1>
        </FadeIn>

        {/* Subtitle */}
        <FadeIn delay={0.18}>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl sm:max-w-2xl mb-8 sm:mb-10 leading-relaxed font-medium px-2">
            Streamline check-ins, sync 20+ OTA channels in real time, and boost direct bookings by up to 35%—no technical complexity needed.
          </p>
        </FadeIn>

        {/* CTAs */}
        <FadeIn delay={0.25}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-14 sm:mb-20 w-full px-4 sm:px-0">
            <button
              onClick={openModal}
              className="w-full sm:w-auto inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-[0_0_30px_rgba(99,102,241,0.45)] hover:shadow-[0_0_45px_rgba(99,102,241,0.65)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
            >
              Book a Free Demo
            </button>
            <button
              onClick={openModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-slate-50 hover:bg-white/5 transition-all duration-200"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Play size={11} fill="currentColor" className="ml-0.5" />
              </div>
              Watch 2-Min Demo
            </button>
          </div>
        </FadeIn>

        {/* ── Custom PMS Dashboard Mockup ── */}
        <FadeIn delay={0.35} className="relative w-full max-w-5xl">

          {/* Floating Badge 1 – Occupancy */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 sm:-right-4 md:-right-10 top-4 sm:top-8 z-30 hidden sm:block"
          >
            <div className="flex flex-col gap-1 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0f1a2e]/95 border border-emerald-500/30 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">Occupancy Rate</span>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">98% <span className="text-emerald-300 text-base sm:text-lg">↗</span></span>
            </div>
          </motion.div>

          {/* Floating Badge 2 – Revenue */}
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-2 sm:-left-4 md:-left-12 bottom-8 sm:bottom-12 z-30 hidden sm:block"
          >
            <div className="flex flex-col gap-1 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#0f1a2e]/95 border border-indigo-500/30 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse flex-shrink-0" />
                <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">Monthly Revenue</span>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 tracking-tight">$34,850</span>
            </div>
          </motion.div>

          {/* Mac-style dark browser window with 3D tilt */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="rounded-xl sm:rounded-2xl border border-slate-700/60 bg-slate-900/40 p-1 sm:p-1.5 md:p-3 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            <div className="rounded-lg sm:rounded-xl overflow-hidden border border-slate-800/80 bg-[#080d1a] flex flex-col">
              {/* Window chrome – Mac-style traffic lights */}
              <div className="h-8 sm:h-10 bg-[#111827]/80 border-b border-slate-800/60 flex items-center px-3 sm:px-4 gap-2 sm:gap-3 flex-shrink-0">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 hidden sm:flex justify-center pr-12">
                  <div className="flex items-center gap-2 bg-slate-800/50 rounded-md px-3 py-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-xs text-slate-400 font-medium">app.amazepms.com/dashboard</span>
                  </div>
                </div>
              </div>

              {/* ── Dashboard UI ── */}
              <div className="bg-[#080d1a] flex" style={{ minHeight: "420px" }}>

                {/* Sidebar */}
                <div className="w-12 sm:w-14 md:w-48 bg-[#0a0f1d] border-r border-slate-800/60 flex flex-col pt-4 flex-shrink-0">
                  {/* Nav items */}
                  {[
                    { icon: LayoutDashboard, label: "Dashboard", active: true },
                    { icon: BedDouble,       label: "Reservations", active: false },
                    { icon: Users,           label: "Guests",        active: false },
                    { icon: TrendingUp,      label: "Revenue",       active: false },
                    { icon: RefreshCcw,      label: "Channels",      active: false },
                  ].map(({ icon: Icon, label, active }) => (
                    <div
                      key={label}
                      className={`flex items-center gap-3 px-2 sm:px-3 md:px-4 py-2.5 mx-1 md:mx-2 rounded-lg mb-0.5 cursor-default transition-colors ${
                        active
                          ? "bg-indigo-600/20 text-indigo-300"
                          : "text-slate-600 hover:text-slate-400"
                      }`}
                    >
                      <Icon size={15} className="flex-shrink-0" />
                      <span className="text-xs font-semibold hidden md:block">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Main content */}
                <div className="flex-1 p-3 sm:p-4 md:p-5 overflow-hidden min-w-0">
                  {/* Top bar */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Good morning, Alex</div>
                      <div className="text-sm sm:text-base font-bold text-slate-200">Dashboard Overview</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="hidden sm:flex items-center gap-2 bg-slate-800/60 border border-slate-700/50 rounded-lg px-3 py-1.5">
                        <Search size={11} className="text-slate-500" />
                        <span className="text-[11px] text-slate-500">Search...</span>
                      </div>
                      <div className="relative w-7 h-7 rounded-lg bg-slate-800/60 border border-slate-700/50 flex items-center justify-center cursor-default">
                        <Bell size={13} className="text-slate-400" />
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-[#080d1a] flex items-center justify-center text-[7px] font-black text-white">3</span>
                      </div>
                    </div>
                  </div>

                  {/* KPI row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {[
                      { label: "Occupancy",    value: "98%",    delta: "+4%",     color: "text-emerald-400" },
                      { label: "Revenue",      value: "$34.8K", delta: "+18%",    color: "text-indigo-400"  },
                      { label: "Arrivals",     value: "12",     delta: "Today",   color: "text-cyan-400"    },
                      { label: "Departures",   value: "7",      delta: "Today",   color: "text-amber-400"   },
                    ].map(({ label, value, delta, color }) => (
                      <div key={label} className="bg-slate-900/60 border border-slate-800/60 rounded-lg p-2.5">
                        <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mb-1">{label}</div>
                        <div className={`text-base sm:text-lg font-black ${color}`}>{value}</div>
                        <div className="text-[10px] text-slate-600 font-medium">{delta}</div>
                      </div>
                    ))}
                  </div>

                  {/* Lower row: occupancy chart + bookings table */}
                  <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 h-auto sm:h-[190px]">
                    {/* Occupancy bar chart */}
                    <div className="sm:col-span-2 bg-slate-900/40 border border-slate-800/60 rounded-lg p-3 flex flex-col">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Weekly Occupancy</div>
                      <div className="flex items-end justify-between gap-1 flex-1">
                        {OCCUPANCY_BARS.map((h, i) => (
                          <div key={i} className="flex flex-col items-center gap-1 flex-1">
                            <motion.div
                              initial={{ scaleY: 0 }}
                              whileInView={{ scaleY: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.6, delay: i * 0.07, ease: "easeOut" }}
                              style={{ height: `${h}%`, transformOrigin: "bottom" }}
                              className={`w-full rounded-sm ${i === 6 ? "bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" : "bg-slate-700"}`}
                            />
                            <span className="text-[8px] text-slate-600 font-medium">{DAYS[i]}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recent bookings table */}
                    <div className="sm:col-span-3 bg-slate-900/40 border border-slate-800/60 rounded-lg p-3 flex flex-col overflow-hidden">
                      <div className="flex items-center justify-between mb-2.5">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Recent Bookings</div>
                        <MoreHorizontal size={12} className="text-slate-600" />
                      </div>
                      <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
                        {RECENT_BOOKINGS.map((b, i) => {
                          const s = STATUS_CONFIG[b.status];
                          return (
                            <div key={i} className="flex items-center gap-2 py-1 border-b border-slate-800/50 last:border-0">
                              <div className="w-5 h-5 rounded-full bg-indigo-600/30 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                                <span className="text-[7px] font-black text-indigo-300">{b.guest[0]}</span>
                              </div>
                              <div className="flex-1 min-w-0 hidden sm:block">
                                <div className="text-[10px] font-semibold text-slate-200 truncate">{b.guest}</div>
                                <div className="text-[9px] text-slate-600">{b.source} · Rm {b.room}</div>
                              </div>
                              <span className={`hidden sm:inline-flex items-center px-1.5 py-0.5 rounded-full text-[8px] font-bold border ${s.color}`}>
                                {s.label}
                              </span>
                              <div className="text-[10px] font-bold text-slate-300 ml-auto">{b.amount}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile stats – shown only on mobile */}
          <div className="flex gap-3 mt-4 sm:hidden">
            <div className="flex-1 flex flex-col gap-1 p-3 rounded-xl bg-[#0f1a2e]/90 border border-emerald-500/30">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Occupancy</span>
              </div>
              <span className="text-2xl font-extrabold text-emerald-400">98% ↗</span>
            </div>
            <div className="flex-1 flex flex-col gap-1 p-3 rounded-xl bg-[#0f1a2e]/90 border border-indigo-500/30">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Revenue</span>
              </div>
              <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">$34,850</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
