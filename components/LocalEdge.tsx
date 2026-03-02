"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n/context";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Smartphone,
  Globe,
  MonitorCheck,
  Server,
  CheckCircle2,
  Lock,
  Wifi,
  MapPin,
  Search,
} from "lucide-react";

const CYCLE_MS = 8000;

const cinematicEase = [0.16, 1, 0.3, 1];

const staggerGroup = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const floatUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: cinematicEase,
    },
  },
};

function SpeedScene() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50/50 via-[#F5F5F0] to-indigo-50/30 px-4 overflow-hidden">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -right-[10%] -top-[10%] h-[50vw] w-[50vw] rounded-full bg-blue-200/30 blur-[100px]"
      />
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[10%] -left-[10%] h-[60vw] w-[60vw] rounded-full bg-indigo-200/20 blur-[120px]"
      />

      <motion.div
        variants={staggerGroup}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full max-w-[40rem] flex-col items-center gap-10"
      >
        <motion.div variants={floatUp} className="relative flex items-center justify-center">
          <div className="relative h-44 w-44 sm:h-56 sm:w-56 rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center ring-1 ring-black/[0.03]">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90 scale-[0.85]">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#F1F5F9" strokeWidth="4" strokeLinecap="round" />
              <motion.circle
                initial={{ strokeDasharray: "0 283" }}
                animate={{ strokeDasharray: "280 283" }}
                transition={{ duration: 2.5, ease: cinematicEase, delay: 0.2 }}
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#speed-grad)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="speed-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex flex-col items-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1, ease: cinematicEase }}
                className="font-heading text-5xl font-bold tracking-tight text-dark sm:text-6xl"
              >
                99
              </motion.span>
              <span className="text-[0.65rem] uppercase tracking-widest text-slate font-semibold mt-1">
                Score
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div variants={floatUp} className="w-full">
          <div className="overflow-hidden rounded-[1.5rem] border border-black/[0.04] bg-white/70 backdrop-blur-xl shadow-[0_20px_40px_rgb(0,0,0,0.04)]">
            <div className="flex items-center gap-3 border-b flex-wrap sm:flex-nowrap border-black/[0.04] bg-white/40 px-4 py-3">
              <div className="flex gap-1.5 hidden sm:flex">
                <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
              </div>
              <div className="flex h-8 flex-1 items-center justify-center gap-2 rounded-lg bg-white/60 px-3 shadow-sm border border-black/[0.03] text-xs text-slate-500 max-w-xs transition-colors mx-auto sm:mx-0 sm:ml-2">
                <Lock className="h-3.5 w-3.5 text-emerald-500" />
                <span className="truncate selection:bg-none font-medium">your-business.com.ph</span>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: cinematicEase }}
                  className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-50 border border-blue-100 flex-shrink-0 shadow-inner"
                />
                <div className="flex flex-1 flex-col gap-3.5">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: cinematicEase }}
                    className="h-3 w-3/4 origin-left rounded-full bg-slate-200"
                  />
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: cinematicEase }}
                    className="h-2 w-1/2 origin-left rounded-full bg-slate-100"
                  />
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[0.8, 0.9, 1.0].map((delay, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay, ease: cinematicEase }}
                    className="h-28 rounded-2xl border border-black/[0.03] bg-slate-50/50"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function MobileScene() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-50/60 via-[#F5F5F0] to-teal-50/40 px-4 py-8 overflow-hidden">
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[5%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-emerald-200/30 blur-[100px]"
      />

      <motion.div
        variants={staggerGroup}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full flex-col items-center"
      >
        <motion.div variants={floatUp} className="relative z-20 h-[30rem] w-[14rem] sm:h-[32rem] sm:w-[15rem] overflow-hidden rounded-[2.5rem] border-[6px] border-white bg-white shadow-[0_20px_40px_rgb(0,0,0,0.06)] ring-1 ring-black/[0.05]">
          <div className="absolute left-1/2 top-0 z-40 h-5 w-24 -translate-x-1/2 rounded-b-3xl bg-slate-100/90 backdrop-blur-md shadow-sm" />

          <div className="relative h-full w-full bg-[#F8F9FA] flex flex-col">
            <div className="relative z-30 flex items-center justify-between px-6 pt-3 pb-1">
              <span className="text-[0.65rem] font-semibold text-slate-500">9:41</span>
              <div className="flex gap-1.5 items-center">
                <Wifi className="h-3 w-3 text-slate-500" />
                <div className="h-2 w-4 rounded-[2px] bg-slate-500" />
              </div>
            </div>

            <div className="px-5 py-5 flex-1 flex flex-col">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: cinematicEase }}
                className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-50 mb-5 border border-emerald-100/50 flex items-center justify-center shadow-inner"
              >
                <div className="h-12 w-12 rounded-full bg-white/80 shadow-sm flex items-center justify-center backdrop-blur-md">
                   <div className="ml-1 h-0 w-0 border-y-[7px] border-l-[12px] border-y-transparent border-l-emerald-500" />
                </div>
              </motion.div>

              <div className="space-y-3 mb-6">
                <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ delay: 0.5, duration: 0.8, ease: cinematicEase }} className="h-3.5 rounded-full bg-slate-200" />
                <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ delay: 0.6, duration: 0.8, ease: cinematicEase }} className="h-2.5 rounded-full bg-slate-100" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: cinematicEase }}
                className="w-full py-3.5 rounded-xl bg-emerald-500 flex justify-center items-center shadow-lg shadow-emerald-500/20"
              >
                <div className="h-1.5 w-14 rounded-full bg-white/90" />
              </motion.div>

              <div className="mt-6 grid grid-cols-2 gap-3 flex-1 content-end">
                {[0.9, 1.0].map((delay, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.6 }} className="w-full h-16 rounded-xl bg-white border border-black/[0.03] shadow-sm" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div variants={floatUp} className="absolute top-[35%] left-0 sm:left-[8%] -translate-y-1/2 hidden md:flex flex-col gap-3 z-30">
           <div className="bg-white/80 backdrop-blur-xl px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgb(0,0,0,0.05)] border border-black/[0.03] flex items-center gap-3.5">
              <div className="bg-emerald-50 p-2.5 rounded-xl text-emerald-500 ring-1 ring-emerald-100"><Smartphone className="w-5 h-5"/></div>
              <div>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-emerald-600 mb-0.5">Responsive</div>
                <div className="text-sm font-semibold text-dark">Mobile-First</div>
              </div>
           </div>
        </motion.div>
        <motion.div variants={floatUp} className="absolute top-[65%] right-0 sm:right-[8%] -translate-y-1/2 hidden md:flex flex-col gap-3 z-30">
           <div className="bg-white/80 backdrop-blur-xl px-5 py-3.5 rounded-2xl shadow-[0_10px_30px_rgb(0,0,0,0.05)] border border-black/[0.03] flex items-center gap-3.5">
              <div className="bg-blue-50 p-2.5 rounded-xl text-blue-500 ring-1 ring-blue-100"><Zap className="w-5 h-5"/></div>
              <div>
                <div className="text-[0.6rem] font-bold uppercase tracking-widest text-blue-600 mb-0.5">Lightning</div>
                <div className="text-sm font-semibold text-dark">Fast Loads</div>
              </div>
           </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function PresenceScene() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-50/50 via-[#F5F5F0] to-orange-50/30 px-4 py-8 overflow-hidden">
       <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/4 top-1/4 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-200/30 blur-[100px]"
      />

      <motion.div
        variants={staggerGroup}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-[48rem]"
      >
        <motion.div variants={floatUp} className="bg-white/70 backdrop-blur-2xl rounded-[2rem] border border-white shadow-[0_20px_40px_rgb(0,0,0,0.04)] p-6 sm:p-10 ring-1 ring-black/[0.02]">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: cinematicEase }}
            className="flex items-center bg-white rounded-full px-6 py-4 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 mx-auto mb-10 max-w-xl"
          >
            <Search className="h-5 w-5 text-amber-500 mr-4" />
            <span className="text-dark font-medium text-[0.95rem] flex">
              {"best local business near me".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.03 + 0.4 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, delay: 1 }}
              className="ml-[2px] h-5 w-[2px] bg-amber-400"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: cinematicEase }}
                className="rounded-2xl border border-amber-200 bg-amber-50/50 p-5 shadow-sm relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber-400" />
                <div className="flex justify-between items-start mb-3 pl-1">
                  <div className="h-3 w-1/3 rounded-full bg-amber-200" />
                  <span className="text-[0.6rem] font-bold uppercase text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md tracking-wider">Top Result</span>
                </div>
                <div className="pl-1">
                  <div className="h-4 w-3/4 rounded-full bg-amber-600/80 mb-3" />
                  <div className="h-2 w-full rounded-full bg-amber-200 mb-2" />
                  <div className="h-2 w-5/6 rounded-full bg-amber-200" />
                </div>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, y: 15 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1.4, ease: cinematicEase }}
                 className="rounded-2xl border border-slate-100 bg-slate-50/80 p-5 opacity-70"
              >
                  <div className="h-3 w-1/4 rounded-full bg-slate-200 mb-3" />
                  <div className="h-3.5 w-2/3 rounded-full bg-slate-300 mb-3" />
                  <div className="h-2 w-full rounded-full bg-slate-200" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.3, ease: cinematicEase }}
              className="hidden md:flex relative min-h-[200px] rounded-2xl overflow-hidden bg-[#F1F3F0] border border-black/[0.04] items-center justify-center p-4"
            >
               {/* Map Pattern Abstraction */}
               <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E2E8F0" strokeWidth="1"/>
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#grid)" />
               </svg>
               <div className="absolute top-1/2 left-0 right-0 h-4 bg-white/60 -rotate-12 blur-[1px]" />
               <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-white/60 rotate-12 blur-[1px]" />

               <motion.div
                  initial={{ scale: 0, y: -20 }}
                  animate={{ scale: 1, y: 0 }}
                  transition={{ type: "spring", bounce: 0.6, delay: 1.8, duration: 1 }}
                  className="relative z-10 text-amber-500 drop-shadow-xl"
               >
                 <MapPin className="h-12 w-12 fill-amber-100" strokeWidth={1.5} />
               </motion.div>
               
               <motion.div
                  animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 2.2 }}
                  className="absolute h-8 w-8 rounded-full bg-amber-400/80 z-0"
               />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function MonitorScene() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-50/60 via-[#F5F5F0] to-indigo-50/40 px-4 py-8 overflow-hidden">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -right-[15%] h-[50vw] w-[50vw] rounded-full bg-purple-200/30 blur-[120px]"
      />

      <motion.div
        variants={staggerGroup}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-[48rem] grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr] gap-6 sm:gap-8"
      >
        <motion.div variants={floatUp} className="flex flex-col items-center justify-center sm:justify-end h-full min-h-[16rem]">
          <div className="w-[10rem] bg-white rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-black/[0.04] p-4 flex flex-col gap-4 relative z-10 box-content">
            {[1, 2, 3, 4].map((rack, i) => (
              <div key={rack} className="h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center px-3.5 justify-between">
                <div className="flex gap-2">
                   <motion.div
                     animate={{ opacity: [1, 0.4, 1] }}
                     transition={{ duration: (i%2)*0.5 + 1, repeat: Infinity }}
                     className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                   />
                   <motion.div
                     animate={{ opacity: [1, 0.4, 1] }}
                     transition={{ duration: (i%3)*0.4 + 0.8, repeat: Infinity }}
                     className="h-2 w-2 rounded-full bg-indigo-500"
                   />
                </div>
                <div className="h-1 w-5 rounded-full bg-slate-200" />
              </div>
            ))}
            <div className="flex justify-between items-center px-1 pt-1 border-t border-slate-100">
               <Server className="h-4 w-4 text-slate-400" />
               <span className="text-[0.6rem] font-bold text-slate-400 tracking-wider">NODE-ALPHA</span>
            </div>
          </div>
          <div className="h-6 w-32 bg-indigo-900/5 blur-xl -mt-3 rounded-full" />
        </motion.div>

        <div className="flex flex-col justify-center gap-5 sm:gap-6">
           <div className="grid grid-cols-2 gap-4 sm:gap-6">
             <motion.div variants={floatUp} className="bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-5 sm:p-6 border border-black/[0.03] shadow-sm">
                <div className="w-12 h-12 rounded-[1rem] bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                   <Globe className="h-6 w-6" />
                </div>
                <p className="text-[0.65rem] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Uptime</p>
                <div className="flex items-baseline gap-1">
                   <span className="text-3xl sm:text-4xl font-heading font-bold text-dark">99.9</span>
                   <span className="text-sm font-bold text-indigo-500">%</span>
                </div>
             </motion.div>
             <motion.div variants={floatUp} className="bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-5 sm:p-6 border border-black/[0.03] shadow-sm">
                <div className="w-12 h-12 rounded-[1rem] bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                   <MonitorCheck className="h-6 w-6" />
                </div>
                <p className="text-[0.65rem] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Status</p>
                <div className="flex items-center gap-2 mt-1">
                   <span className="text-xl sm:text-2xl font-heading font-bold text-dark">Secure</span>
                   <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                </div>
             </motion.div>
           </div>
           <motion.div variants={floatUp} className="bg-white/80 backdrop-blur-xl rounded-[1.5rem] p-5 sm:p-6 border border-black/[0.03] shadow-sm h-36 relative overflow-hidden flex flex-col justify-between">
              <div className="flex justify-between items-center relative z-10">
                 <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-600">Network Traffic</span>
                 </div>
                 <span className="text-[0.6rem] uppercase tracking-widest font-bold text-purple-600 bg-purple-100/50 px-2.5 py-1 rounded-md">Live</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-24 opacity-80">
                 <svg viewBox="0 0 400 100" className="h-full w-full" preserveAspectRatio="none">
                    <motion.path
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
                      d="M0,80 Q40,30 80,60 T160,40 T240,70 T320,30 T400,50"
                      fill="none"
                      stroke="url(#purple-line)"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="purple-line" x1="0" y1="0" x2="1" y2="0">
                         <stop offset="0%" stopColor="#A855F7" stopOpacity="0.2" />
                         <stop offset="50%" stopColor="#8B5CF6" />
                         <stop offset="100%" stopColor="#6366F1" />
                      </linearGradient>
                    </defs>
                 </svg>
              </div>
           </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

const scenes = [SpeedScene, MobileScene, PresenceScene, MonitorScene];

export default function LocalEdge() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % scenes.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  const Scene = scenes[active];

  return (
    <section
      id="local-edge"
      className="bg-grain relative overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="relative mx-auto w-full max-w-[90rem] px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center">
          <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.7, ease: cinematicEase }}
           className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/[0.04] bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate shadow-sm"
          >
             <Zap className="h-3.5 w-3.5 text-blue-500" /> Technology
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: cinematicEase }}
            className="font-heading text-4xl font-semibold leading-tight tracking-tight text-dark sm:text-[3.5rem]"
          >
            {t.localEdge.title} <span className="text-slate">{t.localEdge.titleMuted}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: cinematicEase }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate"
          >
            {t.localEdge.subtitle}
          </motion.p>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.3, ease: cinematicEase }}
           className="mt-16 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-black/[0.04] bg-paper shadow-[0_20px_60px_rgb(0,0,0,0.03)] ring-1 ring-black/[0.02]"
        >
          <div className="relative h-[650px] lg:h-[600px] w-full overflow-hidden bg-[#F5F5F0] isolation-isolate">
            <AnimatePresence initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, filter: "blur(8px)", scale: 0.95 }}
                animate={{ opacity: 1, filter: "blur(0px)", scale: 1, zIndex: 10 }}
                exit={{ opacity: 0, filter: "blur(8px)", scale: 1.05, zIndex: 0, position: "absolute" }}
                transition={{ duration: 1.2, ease: cinematicEase }}
                className="absolute inset-0 h-full w-full will-change-transform"
                style={{ transformOrigin: "center center" }}
              >
                <Scene />
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_80px_rgba(0,0,0,0.03)]" />
          </div>

          <div className="relative z-30 border-t border-black/[0.04] bg-white px-2 sm:px-12 py-2 flex justify-between w-full">
              {t.localEdge.features.map((f, i) => {
                const isActive = i === active;
                const icons = [Zap, Smartphone, MapPin, Server];
                const colors = ["text-blue-500", "text-emerald-500", "text-amber-500", "text-purple-500"];
                const bgs = ["bg-blue-500", "bg-emerald-500", "bg-amber-500", "bg-purple-500"];
                const Icon = icons[i % icons.length];
                const activeColor = colors[i % colors.length];
                const activeBg = bgs[i % bgs.length];

                return (
                  <button
                    key={f.title}
                    onClick={() => setActive(i)}
                    className={`group relative flex flex-1 flex-col items-center py-4 focus:outline-none transition-transform active:scale-95 ${isActive ? "" : "hover:bg-slate-50/50"}`}
                  >
                    <div className={`relative mb-3 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-[1rem] transition-all duration-700 ease-out ${isActive ? 'bg-white shadow-[0_8px_20px_rgb(0,0,0,0.06)] border border-slate-100 scale-110' : 'bg-transparent'}`}>
                      <Icon className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors duration-700 ${isActive ? activeColor : 'text-slate-400 group-hover:text-slate-600'}`} />
                      {isActive && (
                        <motion.div
                          layoutId="activeFeatureRing"
                          className="absolute inset-0 rounded-[1rem] border-2 border-transparent"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
                        />
                      )}
                    </div>

                    <h3 className={`font-heading text-center text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest transition-colors duration-700 ${isActive ? 'text-dark' : 'text-slate-400 group-hover:text-slate-600'}`}>
                      {f.title}
                    </h3>
                    
                    <div className="absolute bottom-0 left-1/2 h-[3px] w-full max-w-[50%] -translate-x-1/2 overflow-hidden rounded-t-full bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {!isActive && (
                         <div className="h-full w-full bg-slate-200" />
                      )}
                    </div>
                    {isActive && (
                        <div className="absolute bottom-0 left-1/2 h-[3px] w-full max-w-[50%] -translate-x-1/2 overflow-hidden rounded-t-full bg-slate-100">
                          <motion.div
                            key={active}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
                            className={`h-full ${activeBg}`}
                          />
                        </div>
                    )}
                  </button>
                );
              })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
