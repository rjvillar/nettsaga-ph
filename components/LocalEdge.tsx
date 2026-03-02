"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n/context";
import {
  motion,
  AnimatePresence,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  Search,
  Star,
  Globe,
  Activity,
  Lock,
  MapPin,
  ChevronRight,
} from "lucide-react";

const CYCLE_MS = 8500;
const aeEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const smoothSpring = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
} as const;

// Interactive 3D Wrapper for the floating mockups
function FloatPerspective({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 40 });
  const springY = useSpring(y, { stiffness: 400, damping: 40 });
  const rotateX = useTransform(springY, [-1, 1], ["6deg", "-6deg"]);
  const rotateY = useTransform(springX, [-1, 1], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px * 2 - 1);
    y.set(py * 2 - 1);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`relative [perspective:2000px] w-full h-full flex items-center justify-center ${className}`}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]"
      >
        {children}
      </motion.div>
    </div>
  );
}

// iPhone Wrapper for Mobile Scene
function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[660px] bg-black border-[12px] border-black rounded-[3rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.2)] shrink-0 overflow-hidden ring-1 ring-gray-900/10">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
        <div className="w-28 h-full bg-black rounded-b-[1.25rem] flex items-center justify-between px-2.5">
          <div className="w-2 h-2 rounded-full bg-black shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
          <div className="w-2 h-2 rounded-full bg-black shadow-[inset_0_0_2px_rgba(255,255,255,0.2)]" />
        </div>
      </div>
      {/* Screen */}
      <div className="w-full h-full bg-white relative overflow-hidden rounded-[2rem]">
        {children}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/20 rounded-full z-50" />
      </div>
      {/* Glare */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent mix-blend-overlay" />
    </div>
  );
}

// Web Browser Window Wrapper
function BrowserFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full max-w-[640px] aspect-[4/3] bg-white rounded-[1.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-gray-900/5 flex flex-col overflow-hidden">
      {/* Traffic Lights & URL Bar */}
      <div className="h-14 bg-[#F8F9FA] border-b border-gray-100 flex items-center px-4 gap-4 relative shrink-0">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E]/20 shadow-sm" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]/20 shadow-sm" />
          <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]/20 shadow-sm" />
        </div>
        <div className="flex-1 max-w-[50%] mx-auto bg-white border border-gray-200 rounded-lg h-8 flex items-center justify-center gap-2 shadow-sm relative overflow-hidden">
          <Lock className="w-3.5 h-3.5 text-gray-400" fill="currentColor" />
          <span className="text-[12px] font-medium text-gray-600">
            yourbusiness.com
          </span>
        </div>
      </div>
      <div className="flex-1 relative bg-white overflow-hidden">{children}</div>
    </div>
  );
}

/* Scene 1: Speed */
function SpeedScene() {
  return (
    <FloatPerspective>
      <div className="absolute inset-0 flex items-center justify-center p-8 opacity-40 mix-blend-multiply" />

      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(8px)" }}
        transition={{ duration: 0.6, ease: aeEase }}
        className="w-full flex justify-center z-10 px-4 sm:px-0"
      >
        <BrowserFrame>
          {/* Content Loading Instantly */}
          <div className="p-8 h-full flex flex-col relative w-full">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute top-0 left-0 w-full h-[2px] bg-blue-500 origin-left"
            />

            <div className="flex gap-8 h-full">
              <div className="flex-1 flex flex-col mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="w-3/4 h-10 bg-gray-900 rounded-xl mb-6"
                />
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                    className="h-3.5 bg-gray-200 rounded-full w-full mb-3"
                    style={{ width: `${100 - i * 15}%` }}
                  />
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 w-32 h-10 bg-blue-600 text-white rounded-lg shadow-md"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.4, duration: 0.6, ease: aeEase }}
                className="w-1/2 h-full bg-gray-50 rounded-2xl overflow-hidden relative shadow-inner border border-gray-100 hidden sm:block"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-stone-100 to-stone-200" />
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ delay: 0.6, duration: 1.5, ease: "linear" }}
                  className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12"
                />
              </motion.div>
            </div>

            {/* Performance Badge floating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1, ...smoothSpring }}
              className="absolute right-4 sm:right-6 bottom-4 sm:bottom-6 bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] rounded-2xl p-4 sm:p-5 flex items-center gap-4"
              style={{ transform: "translateZ(60px)" }}
            >
              <div className="w-14 h-14 relative flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                  <circle
                    cx="28"
                    cy="28"
                    r="24"
                    className="stroke-gray-100"
                    strokeWidth="5"
                    fill="none"
                  />
                  <motion.circle
                    cx="28"
                    cy="28"
                    r="24"
                    className="stroke-emerald-500"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{
                      strokeDasharray: "150",
                      strokeDashoffset: "150",
                    }}
                    animate={{ strokeDashoffset: "0" }}
                    transition={{ delay: 1.2, duration: 1.5, ease: aeEase }}
                  />
                </svg>
                <span className="absolute text-base font-bold text-gray-900 tracking-tight">
                  100
                </span>
              </div>
              <div>
                <div className="text-sm font-bold text-gray-900 leading-tight">
                  Performance
                </div>
                <div className="text-xs font-medium text-emerald-600 mt-0.5">
                  Loads instantly
                </div>
              </div>
            </motion.div>
          </div>
        </BrowserFrame>
      </motion.div>
    </FloatPerspective>
  );
}

/* Scene 2: Mobile */
function MobileScene() {
  return (
    <FloatPerspective>
      <motion.div
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(8px)" }}
        transition={{ duration: 0.6, ease: aeEase }}
        className="w-full flex justify-center my-auto"
      >
        <IPhoneFrame>
          {/* Detailed Mobile App View representing high-end design */}
          <div className="w-full h-full pt-14 flex flex-col bg-[#FAFAFA]">
            {/* Nav */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="px-6 flex justify-between items-center mb-6 pt-2"
            >
              <div>
                <div className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-1">
                  Overview
                </div>
                <div className="text-2xl font-bold tracking-tight text-black leading-none">
                  Your Business
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-200 to-stone-300 shadow-inner" />
            </motion.div>

            {/* Horiz Scroll Hero Cards */}
            <div className="flex gap-4 px-6 overflow-hidden mb-8">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, ...smoothSpring }}
                  className="w-[140px] h-[180px] shrink-0 bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] rounded-[1.5rem] border border-gray-100 p-2.5 flex flex-col justify-end relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-stone-100 to-stone-200" />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/70 backdrop-blur-md rounded-xl p-3 border border-white/50 shadow-sm">
                    <div className="h-2 w-3/4 bg-gray-800 rounded mb-1.5" />
                    <div className="h-1.5 w-1/2 bg-gray-400 rounded" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Slide up Detail View */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7, ease: aeEase }}
              className="flex-1 bg-white rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.06)] p-6 relative border-t border-gray-100"
            >
              <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8" />
              <div className="flex items-center justify-between mb-6">
                <div className="text-lg font-bold text-gray-900 tracking-tight">
                  Recent Activity
                </div>
                <div className="text-sm font-semibold text-blue-600">
                  See all
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-sm">
                      <Activity className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 w-3/4 bg-gray-800 rounded mb-2" />
                      <div className="h-2 w-1/2 bg-gray-300 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </IPhoneFrame>
      </motion.div>
    </FloatPerspective>
  );
}

/* Scene 3: Search/Presence */
function SearchScene() {
  return (
    <FloatPerspective>
      <div className="w-full max-w-xl relative z-10 flex flex-col items-center px-4 sm:px-0">
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: aeEase }}
          className="w-full"
        >
          {/* Mock Search Bar */}
          <div className="w-full bg-white backdrop-blur-xl border border-gray-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] rounded-full h-14 sm:h-16 flex items-center px-6 gap-4 mb-8">
            <Search className="w-5 h-5 text-gray-400" />
            <div className="flex-1 relative h-full flex items-center overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ delay: 0.8, duration: 1.6, ease: "linear" }}
                className="overflow-hidden whitespace-nowrap inline-flex items-center"
              >
                <span className="text-gray-800 text-[15px] sm:text-[17px] font-medium">
                  best local business near me
                </span>
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-[2px] h-6 bg-blue-500 ml-0.5 shrink-0"
                />
              </motion.div>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_4px_10px_rgba(37,99,235,0.3)]">
              <Search className="w-4 h-4" strokeWidth={3} />
            </div>
          </div>

          {/* Search Result Card mimicking premium maps listing */}
          <motion.div
            initial={{ y: 30, opacity: 0, rotateX: -10 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            transition={{ delay: 2, ...smoothSpring }}
            style={{ transformOrigin: "top" }}
            className="w-full bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden relative isolate"
          >
            {/* Beautiful abstract map background inside result */}
            <div className="h-32 sm:h-40 w-full bg-[#f8fafc] relative overflow-hidden flex items-center justify-center">
              {/* Topographic organic lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-[0.05]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="grid"
                  width="30"
                  height="30"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 30 0 L 0 0 0 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>

              <motion.div
                initial={{ scale: 0, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ delay: 2.4, ...smoothSpring }}
                className="z-10"
              >
                <div className="relative">
                  <MapPin
                    className="w-10 h-10 text-red-500 drop-shadow-xl"
                    fill="currentColor"
                    stroke="white"
                    strokeWidth={1.5}
                  />
                  <motion.div
                    initial={{ scale: 0, opacity: 1 }}
                    animate={{ scale: 2.5, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2, delay: 3 }}
                    className="absolute top-1 left-0 right-0 bottom-0 border-2 border-red-500 rounded-full"
                  />
                </div>
              </motion.div>
            </div>

            <div className="p-6 sm:p-8 relative bg-white">
              <div className="flex gap-2 items-center text-xs text-blue-600 font-bold uppercase tracking-widest mb-3">
                <Globe className="w-3.5 h-3.5" /> Official Website
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight tracking-tight">
                Your Premium Business
              </h3>
              <div className="flex items-center gap-2 mb-6">
                <span className="font-bold text-gray-900">5.0</span>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-1">
                  (120+ reviews)
                </span>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 h-10 bg-blue-50 text-blue-700 font-semibold text-sm rounded-xl flex items-center justify-center">
                  Get Directions
                </div>
                <div className="flex-1 h-10 bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm rounded-xl flex items-center justify-center">
                  Visit Site
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </FloatPerspective>
  );
}

/* Scene 4: Always Monitored (High End Dashboard) */
function MonitorScene() {
  return (
    <FloatPerspective>
      <div className="w-full max-w-[640px] aspect-[4/3] rounded-[2.5rem] p-6 sm:p-8 relative isolate px-4 sm:px-8">
        {/* Deep background mesh and aesthetic dark mode */}
        <div className="absolute inset-0 bg-[#0A0A0C] rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[80px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 w-full h-full flex flex-col gap-6"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-2 px-2">
            <div>
              <div className="text-white/50 font-mono text-[10px] tracking-widest uppercase mb-1">
                Systems Operations
              </div>
              <div className="text-white text-xl font-medium tracking-tight">
                Real-time Monitoring
              </div>
            </div>
            <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="text-emerald-400 text-xs font-semibold">
                Online
              </span>
            </div>
          </div>

          {/* Top stats block */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, ...smoothSpring }}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6"
            >
              <div className="text-white/60 text-sm font-medium mb-1">
                Global Uptime
              </div>
              <div className="text-4xl sm:text-5xl font-light text-white tracking-tighter">
                100<span className="text-2xl text-white/40">%</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, ...smoothSpring }}
              className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-5 sm:p-6"
            >
              <div className="text-white/60 text-sm font-medium mb-1">
                Threats Blocked
              </div>
              <div className="text-4xl sm:text-5xl font-light text-white tracking-tighter">
                0
              </div>
            </motion.div>
          </div>

          {/* Big Chart Area representing live data */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: aeEase }}
            className="flex-1 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 relative overflow-hidden"
          >
            {/* Live Chart Drawing */}
            <div className="absolute inset-x-0 bottom-0 h-full flex items-end opacity-80 pt-10">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <defs>
                  <linearGradient id="glow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(52,211,153,0.3)" />
                    <stop offset="100%" stopColor="rgba(52,211,153,0)" />
                  </linearGradient>
                </defs>

                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, ease: "easeOut", delay: 0.8 }}
                  d="M0,80 L10,75 L20,85 L30,40 L40,65 L50,30 L60,45 L70,20 L80,50 L90,15 L100,40"
                  fill="none"
                  stroke="rgba(52,211,153,1)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  d="M0,80 L10,75 L20,85 L30,40 L40,65 L50,30 L60,45 L70,20 L80,50 L90,15 L100,40 L100,100 L0,100 Z"
                  fill="url(#glow)"
                />
              </svg>
            </div>

            {/* Overlay grid */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-full border-t border-white/5 absolute"
                  style={{ top: `${i * 25}%` }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </FloatPerspective>
  );
}

const scenes = [SpeedScene, MobileScene, SearchScene, MonitorScene];

export default function LocalEdge() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-cycle the features
  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % scenes.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [isHovered]);

  return (
    <section
      id="local-edge"
      className="relative py-28 sm:py-36 bg-[#FAFAFA] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Global Heading */}
        <div className="mb-16 sm:mb-24 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl font-semibold leading-tight tracking-[-0.02em] bg-gradient-to-r from-dark to-dark/40 bg-clip-text text-transparent sm:text-[3.5rem]"
          >
            {t.localEdge.title}
            <br />
            {t.localEdge.titleMuted}
          </motion.h2>
        </div>

        {/* Master Navigation Tabs - luxury high-end layout */}
        <div className="flex overflow-x-auto sm:justify-center gap-8 sm:gap-16 border-b border-gray-200 mb-12 sm:mb-20 px-2 sm:px-0 scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {t.localEdge.features.map((f, i) => {
            const isActive = i === active;
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative pb-4 sm:pb-6 text-[16px] sm:text-[18px] whitespace-nowrap transition-colors duration-300 outline-none select-none tracking-tight cursor-pointer
                  ${isActive ? "text-gray-900 font-semibold" : "text-gray-400 font-medium hover:text-gray-600"}`}
              >
                {f.title}
                {isActive && (
                  <motion.div
                    layoutId="desktopTabAccent"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] sm:h-[3px] bg-gray-900 z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content & Showcase Container */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Dynamic Left Copy Based on Active Tab */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-start text-left order-2 lg:order-1 sm:px-0 pt-0 lg:pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(6px)" }}
                transition={{ duration: 0.4, ease: aeEase }}
              >
                <h3 className="font-heading text-3xl sm:text-[2.5rem] font-semibold tracking-[-0.02em] text-gray-900 leading-tight mb-4">
                  {t.localEdge.features[active].title}
                </h3>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
                  {t.localEdge.features[active].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side Showcase - Unified Stage */}
          <div className="col-span-1 lg:col-span-7 relative h-[550px] sm:h-[750px] flex items-center justify-center order-1 lg:order-2 rounded-2xl bg-gray-100 overflow-hidden isolate shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, filter: "blur(12px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(12px)" }}
                transition={{ duration: 0.5, ease: aeEase }}
                className="absolute inset-0 flex items-center justify-center w-full h-full"
              >
                {(() => {
                  const Scene = scenes[active];
                  return <Scene />;
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
