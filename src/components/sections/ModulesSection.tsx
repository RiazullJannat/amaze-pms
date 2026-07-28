"use client";

import { Section } from "@/src/components/layout/Section";
import { GradientHeading } from "@/src/components/ui/GradientHeading";
import { FadeIn } from "@/src/components/motion/FadeIn";
import { SpotlightCard } from "@/src/components/motion/SpotlightCard";
import { motion } from "framer-motion";

export function ModulesSection() {
  return (
    <Section id="modules" className="relative z-10">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="text-center mb-16 md:mb-24 relative z-10">
        <FadeIn>
          <GradientHeading as="h2" className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
            Everything Built Into One Hub
          </GradientHeading>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Experience the power of an interconnected property management ecosystem.
          </p>
        </FadeIn>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 px-4 md:px-0">
        {/* Card 1: Revenue Analytics (2 columns wide) */}
        <FadeIn delay={0.1} className="md:col-span-2">
          <SpotlightCard className="h-full md:h-[400px] flex flex-col md:flex-row p-8 group">
            <div className="flex-1 flex flex-col justify-center mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-white mb-3">Revenue Analytics</h3>
              <p className="text-slate-400 leading-relaxed mb-6 font-medium">
                Predictive algorithms and real-time area charts give you a bird's-eye view of your property's financial health and upcoming trends.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">+$24,500</span>
                <span className="text-sm font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">+18% this month</span>
              </div>
            </div>
            <div className="flex-1 relative bg-[#030712]/80 rounded-xl border border-white/5 overflow-hidden flex items-end shadow-inner">
              {/* CSS/SVG Area Chart Animation */}
              <svg viewBox="0 0 400 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M0 200 L0 150 Q50 120 100 140 T200 100 T300 80 T400 40 L400 200 Z"
                  fill="url(#chartGradient)"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
                <motion.path
                  d="M0 150 Q50 120 100 140 T200 100 T300 80 T400 40"
                  fill="none"
                  stroke="#34d399"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Card 2: Housekeeping (1 column, tall) */}
        <FadeIn delay={0.2} className="md:col-span-1 md:row-span-2">
          <SpotlightCard className="h-full p-8 flex flex-col group">
            <h3 className="text-2xl font-bold text-white mb-3">Live Housekeeping</h3>
            <p className="text-slate-400 leading-relaxed mb-8 font-medium">
              Automated task assignments and real-time room status updates straight to your staff's mobile devices.
            </p>
            
            <div className="flex-1 relative bg-[#030712]/80 rounded-xl border border-white/5 p-4 flex flex-col gap-3 shadow-inner">
              {[
                { room: "101", status: "Clean", color: "bg-emerald-500", time: "Just now" },
                { room: "102", status: "Cleaning...", color: "bg-amber-500", time: "In Progress" },
                { room: "103", status: "Dirty", color: "bg-rose-500", time: "Pending" },
                { room: "104", status: "Clean", color: "bg-emerald-500", time: "10m ago" },
                { room: "105", status: "Dirty", color: "bg-rose-500", time: "Pending" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-3 w-3">
                      {item.status === "Cleaning..." && <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-500"></span>}
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${item.color}`}></span>
                    </div>
                    <span className="font-semibold text-white/90 text-sm">Room {item.room}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Card 3: Front Desk Grid (1 column) */}
        <FadeIn delay={0.3} className="md:col-span-1">
          <SpotlightCard className="h-[400px] p-8 flex flex-col group">
            <h3 className="text-2xl font-bold text-white mb-3">Visual Front Desk</h3>
            <p className="text-slate-400 mb-6 text-sm font-medium">
              Drag-and-drop reservations directly on the visual tape chart.
            </p>
            <div className="flex-1 bg-[#030712]/80 rounded-xl border border-white/5 p-4 grid grid-cols-4 grid-rows-5 gap-2 relative overflow-visible shadow-inner">
              {/* Mini interactive Room Status Grid */}
              {Array.from({ length: 20 }).map((_, i) => {
                const isOccupied = [2, 3, 5, 6, 8, 12, 14, 15].includes(i);
                const isCleaning = [4, 9, 17].includes(i);
                let bgColor = "bg-slate-800/40"; // Available
                if (isOccupied) bgColor = "bg-indigo-500/80 shadow-[0_0_10px_rgba(99,102,241,0.3)]";
                if (isCleaning) bgColor = "bg-amber-500/80 shadow-[0_0_10px_rgba(245,158,11,0.3)]";
                
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.15, zIndex: 50 }}
                    className={`rounded-md cursor-pointer transition-colors relative group/cell ${bgColor}`}
                  >
                    <div className="absolute opacity-0 group-hover/cell:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-black/90 text-xs font-semibold text-white rounded whitespace-nowrap z-50 pointer-events-none transition-opacity shadow-xl backdrop-blur-md border border-white/10">
                      {isOccupied ? "Occupied - Smith" : isCleaning ? "Housekeeping" : "Available"}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </SpotlightCard>
        </FadeIn>

        {/* Card 4: Channel Sync (2 columns) */}
        <FadeIn delay={0.4} className="md:col-span-2">
          <SpotlightCard className="h-full md:h-[400px] flex flex-col md:flex-row p-8 group">
            <div className="flex-1 relative bg-[#030712]/80 rounded-xl border border-white/5 overflow-hidden flex items-center justify-center mb-8 md:mb-0 md:mr-8 shadow-inner min-h-[250px]">
              {/* Animated sync indicators between central hub and OTAs */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="50%" y1="50%" x2="50%" y2="75%" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" />
                </svg>

                {/* Fixed Central Hub */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-indigo-600 shadow-[0_0_30px_rgba(79,70,229,0.6)] z-20 flex items-center justify-center text-white font-black text-sm tracking-wider">
                  PMS
                </div>

                {/* OTAs */}
                <div className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-[#003580] z-10 flex items-center justify-center text-[10px] text-white font-bold shadow-lg border border-white/10">
                  B.com
                </div>
                <div className="absolute top-[25%] left-[75%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-[#FF5A5F] z-10 flex items-center justify-center text-[10px] text-white font-bold shadow-lg border border-white/10">
                  Airbnb
                </div>
                <div className="absolute top-[75%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-[#000048] z-10 flex items-center justify-center text-[10px] text-white font-bold shadow-lg border border-white/10">
                  Expedia
                </div>

                {/* Animated Sync Dots */}
                <motion.div animate={{ top: ["25%", "50%", "25%"], left: ["25%", "50%", "25%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute w-2 h-2 rounded-full bg-blue-400 z-10 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                <motion.div animate={{ top: ["50%", "25%", "50%"], left: ["50%", "75%", "50%"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }} className="absolute w-2 h-2 rounded-full bg-rose-400 z-10 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(251,113,133,0.8)]" />
                <motion.div animate={{ top: ["75%", "50%", "75%"], left: ["50%", "50%", "50%"] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear", delay: 1 }} className="absolute w-2 h-2 rounded-full bg-yellow-400 z-10 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
              </div>
            </div>
            
            <div className="flex-1 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-white mb-3">Instant Channel Sync</h3>
              <p className="text-slate-400 leading-relaxed mb-6 font-medium">
                Push rates, fetch bookings, and update availability across 100+ OTAs in real-time. Zero double bookings guaranteed.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold tracking-wide">
                  Two-Way API
                </div>
                <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold tracking-wide">
                  Instant Updates
                </div>
              </div>
            </div>
          </SpotlightCard>
        </FadeIn>
      </div>
    </Section>
  );
}
