"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/lib/i18n/context";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Activity,
  ArrowRight,
  MapPin,
  Search,
  Star,
  Zap,
} from "lucide-react";

const CYCLE_MS = 8500;

// High-end cinematic easing
const aeEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Interactive 3D Wrapper that limits rotation but keeps the high-end feel
function InteractiveGlass({
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
  const rotateX = useTransform(springY, [-1, 1], ["4deg", "-4deg"]);
  const rotateY = useTransform(springX, [-1, 1], ["-4deg", "4deg"]);

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

/*  Scene 1: Speed (Automotive/High-End App Feel)  */
function SpeedScene() {
  return (
    <InteractiveGlass>
      <div className="absolute inset-0 bg-[#020202]">
        {/* Dynamic speed lines wrapping entirely */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 opacity-20 pointer-events-none"
        >
          {[...Array(10)].map((_, i) => {
            const rand1 = Math.abs(Math.sin(i * 1.1) * 100) % 1;
            const rand2 = Math.abs(Math.sin(i * 2.2) * 100) % 1;
            const rand3 = Math.abs(Math.sin(i * 3.3) * 100) % 1;

            return (
              <motion.div
                key={i}
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 2 + rand1 * 2,
                  repeat: Infinity,
                  delay: rand2,
                  ease: "linear",
                }}
                className="absolute h-px bg-gradient-to-r from-transparent via-white to-transparent"
                style={{
                  top: `${rand3 * 100}%`,
                  width: `${30 + rand1 * 40}%`,
                  opacity: 0.1 + rand2 * 0.3,
                }}
              />
            );
          })}
        </motion.div>

        <div className="relative flex w-full h-full items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, filter: "blur(20px)", opacity: 0 }}
            animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1.5, ease: aeEase }}
            className="w-[90%] max-w-3xl aspect-[16/9] bg-gradient-to-br from-[#111] to-[#050505] rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] overflow-hidden relative shadow-inner"
          >
            {/* Glossy Reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none opacity-50 mix-blend-overlay" />

            <div className="flex h-full p-10 gap-10 items-center justify-between z-10 relative">
              <div className="flex flex-col gap-6 w-1/2">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1, ease: aeEase }}
                  className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md"
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 1, ease: aeEase }}
                    className="h-2 bg-white/20 rounded-full mb-3 overflow-hidden"
                  >
                    <motion.div
                      className="h-full bg-white w-full"
                      initial={{ x: "-100%" }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.8, duration: 1.5, ease: aeEase }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.5 }}
                    transition={{ delay: 1 }}
                    className="h-2 w-2/3 bg-white/20 rounded-full"
                  />
                </div>
              </div>

              {/* Large Abstract Score Metric */}
              <motion.div
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ duration: 2, ease: aeEase, delay: 0.3 }}
                className="w-64 h-64 relative flex items-center justify-center"
              >
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full drop-shadow-2xl"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                    strokeDasharray="2 4"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="289"
                    initial={{ strokeDashoffset: 289 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 2.5, ease: aeEase, delay: 0.5 }}
                    className="origin-center -rotate-90"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="text-7xl font-light tracking-tighter text-white"
                  >
                    99
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-[9px] uppercase tracking-[0.3em] text-white/40 font-mono"
                  >
                    Index
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </InteractiveGlass>
  );
}

/*  Scene 2: Mobile (High-End OS Reveal)  */
function MobileScene() {
  return (
    <InteractiveGlass>
      <div className="absolute inset-0 bg-[#020202] flex items-center justify-center overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial={{ y: 100, rotateX: 20, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, rotateX: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: aeEase }}
          className="relative w-[300px] h-[600px] bg-black rounded-[40px] border-[1px] border-white/20 p-2 shadow-[0_20px_80px_rgba(255,255,255,0.05)]"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Screen */}
          <div className="w-full h-full rounded-[32px] bg-[#0A0A0A] overflow-hidden relative">
            {/* Camera Cutout */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-50 flex items-center justify-start px-2">
              <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>

            <div className="pt-16 px-6 w-full h-full relative z-10">
              {/* OS UI Elements building up */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex justify-between items-center mb-8"
              >
                <div className="w-10 h-10 rounded-full bg-white/10" />
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full" />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="space-y-4 mb-8"
              >
                <div className="h-10 w-3/4 bg-white/5 rounded-lg" />
                <div className="h-4 w-1/2 bg-white/5 rounded-full" />
              </motion.div>

              {/* Masonry Image Mockups Grid */}
              <div className="grid grid-cols-2 gap-3 h-full">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 1.2, ease: aeEase }}
                  className="col-span-2 h-40 bg-gradient-to-br from-white/10 to-transparent rounded-2xl p-4 flex flex-col justify-end"
                >
                  <div className="w-1/3 h-3 bg-white/20 rounded mr-auto mb-2" />
                  <div className="w-1/2 h-2 bg-white/10 rounded mr-auto" />
                </motion.div>

                <motion.div
                  initial={{ y: "150%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 1.2, ease: aeEase }}
                  className="h-32 bg-white/5 rounded-2xl rounded-tr-none"
                />
                <motion.div
                  initial={{ y: "180%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4, duration: 1.2, ease: aeEase }}
                  className="h-48 bg-white/5 rounded-2xl rounded-tl-none -mt-16"
                />
              </div>
            </div>

            {/* Reflection passing over screen */}
            <motion.div
              initial={{ x: "-100%", y: "-100%", opacity: 0 }}
              animate={{ x: "200%", y: "200%", opacity: [0, 0.1, 0] }}
              transition={{ duration: 2.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute inset-0 bg-gradient-to-br from-white to-transparent mix-blend-overlay w-[200%] h-[200%] pointer-events-none z-40 transform rotate-45"
            />
          </div>
        </motion.div>
      </div>
    </InteractiveGlass>
  );
}

/*  Scene 3: Geography/Presence (Abstract High-End Map)  */
function GeographyScene() {
  return (
    <InteractiveGlass>
      <div className="absolute inset-0 bg-[#020202] flex items-center justify-center overflow-hidden">
        {/* Abstract Topographic Rings */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] scale-150 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.1 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute border border-white rounded-[40%_60%_70%_30%/40%_50%_60%_50%]"
              style={{
                width: `${(i + 1) * 20}vw`,
                height: `${(i + 1) * 20}vw`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-4xl h-full flex flex-col items-center justify-center gap-12">
          {/* Floating Finder UI */}
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: aeEase, delay: 0.3 }}
            className="w-80 h-16 bg-white/[0.02] border border-white/10 rounded-full backdrop-blur-2xl flex items-center px-6 gap-4 shadow-2xl relative overflow-hidden"
          >
            <Search className="w-5 h-5 text-white/50" />
            <div className="flex-1 relative h-full flex items-center">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ delay: 1, duration: 1.5, ease: aeEase }}
                className="absolute right-0 h-full bg-[#070707] z-10" // covers the text then slides right to reveal
              />
              <span className="font-mono text-sm tracking-wider text-white">
                find loc_
              </span>
              {/* Blinking Cursor */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="w-1.5 h-4 bg-white ml-1 z-20"
              />
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.2, type: "spring" }}
              className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>

          {/* Abstract Map Presentation */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, rotateX: 20 }}
            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
            transition={{ duration: 1.8, ease: aeEase, delay: 0.6 }}
            className="w-[90%] max-w-2xl h-[300px] bg-white/[0.01] border border-white/5 rounded-[40px] relative overflow-hidden backdrop-blur-sm flex items-center justify-center"
          >
            {/* Radar pulse */}
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
              className="absolute w-32 h-32 rounded-full border border-white/20 origin-center"
            />

            <motion.div
              initial={{ y: -50, scale: 0 }}
              animate={{ y: 0, scale: 1 }}
              transition={{
                delay: 2.5,
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-12 h-12 bg-white rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] border border-white">
                <MapPin className="w-5 h-5 text-black -rotate-45" />
              </div>
              <div className="w-1 h-8 bg-gradient-to-b from-white to-transparent mt-2" />
            </motion.div>

            {/* Data Cards popping up */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 2.8, duration: 1, ease: aeEase }}
              className="absolute right-10 top-1/2 -translate-y-1/2 bg-black/50 border border-white/10 backdrop-blur-md p-4 rounded-2xl w-48"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} fill="white" className="w-3 h-3 text-white" />
                  ))}
                </div>
                <span className="text-[10px] text-white/50 font-mono">5.0</span>
              </div>
              <div className="h-1.5 w-full bg-white/20 rounded mb-1.5" />
              <div className="h-1.5 w-2/3 bg-white/10 rounded" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </InteractiveGlass>
  );
}

/*  Scene 4: Systems/Monitor (Cinematic Abstract HUD)  */
function HardwareScene() {
  return (
    <InteractiveGlass>
      <div className="absolute inset-0 bg-[#020202] flex items-center justify-center">
        {/* Subtle background gridding */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="w-full max-w-5xl h-full flex flex-col md:flex-row items-center justify-center gap-8 p-12 relative z-10">
          {/* Main Cinematic Data Panel */}
          <motion.div
            initial={{ filter: "blur(20px)", opacity: 0, x: -40 }}
            animate={{ filter: "blur(0px)", opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: aeEase }}
            className="flex-1 w-full bg-black/80 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-2xl h-[400px] flex flex-col shadow-2xl relative"
          >
            <div className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-white/[0.01]">
              <div className="font-mono text-[10px] text-white/40 tracking-widest">
                SYS.MONITOR.v2
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="p-8 flex-1 flex flex-col relative isolate">
              {/* Real-time wave drawing */}
              <svg
                className="absolute inset-x-0 bottom-4 w-full h-40 opacity-50"
                preserveAspectRatio="none"
                viewBox="0 0 1000 100"
              >
                <defs>
                  <linearGradient id="white-grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, ease: "easeOut" }}
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  d="M 0 50 Q 100 20, 200 60 T 400 30 T 600 70 T 800 40 T 1000 50"
                />
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 2 }}
                  fill="url(#white-grad)"
                  d="M 0 50 Q 100 20, 200 60 T 400 30 T 600 70 T 800 40 T 1000 50 L 1000 100 L 0 100 Z"
                />
              </svg>

              <div className="mt-auto">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-white/40 font-mono text-xs mb-2"
                >
                  OUTPUT
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="text-5xl font-light tracking-tighter text-white"
                >
                  Optimal
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stacked UI Elements */}
          <div className="w-[280px] shrink-0 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20, rotateX: -20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.5, duration: 1.5, ease: aeEase }}
              className="bg-white/5 border border-white/10 rounded-[24px] p-6 backdrop-blur-md"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-6">
                <Activity className="w-5 h-5 text-black" />
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ delay: 1.5, duration: 2, ease: aeEase }}
                  className="h-full bg-white"
                />
              </div>
              <div className="text-[10px] text-white/50 font-mono text-right">
                85% LOAD
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: 0.7, duration: 1.5, ease: aeEase }}
              className="bg-zinc-900 border border-white/5 rounded-[24px] p-6"
            >
              <div className="flex items-center gap-3 mb-4 opacity-50">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-xs font-mono">Syncing</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-full bg-white/10 rounded" />
                <div className="h-2 w-4/5 bg-white/10 rounded" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </InteractiveGlass>
  );
}

const scenes = [SpeedScene, MobileScene, GeographyScene, HardwareScene];

export default function LocalEdge() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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
      className="relative overflow-hidden bg-[#020202] py-24 sm:py-32"
    >
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_0%,#020202_80%)] z-10" />

      <div className="relative mx-auto w-full max-w-[100rem] px-4 sm:px-6 md:px-12 lg:px-24 z-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: aeEase }}
            className="font-heading text-4xl font-normal leading-tight tracking-tight text-white md:text-[5rem]"
          >
            {t.localEdge.title}{" "}
            <span className="text-white/30">{t.localEdge.titleMuted}</span>
          </motion.h2>
        </div>

        <div
          className="relative mt-16 sm:mt-24 w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Main Cinematic Viewport Container */}
          <div className="relative isolate flex h-[500px] sm:h-[650px] w-full items-center justify-center overflow-hidden rounded-[40px] bg-[#050505] border border-white/5 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 1.2, ease: aeEase }}
                className="absolute inset-0 flex items-center justify-center will-change-transform"
              >
                {(() => {
                  const Scene = scenes[active];
                  return <Scene />;
                })()}
              </motion.div>
            </AnimatePresence>

            {/* Inner frame shadow to give it physical depth */}
            <div className="absolute inset-0 rounded-[40px] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none z-30" />
          </div>

          {/* Minimalist Apple-style Track Navigation */}
          <div className="mt-8 flex justify-center w-full relative z-30">
            <div className="flex gap-2 p-1.5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative">
              {t.localEdge.features.map((f, i) => {
                const isActive = i === active;
                // Abstract minimal text instead of heavy icons
                return (
                  <button
                    key={f.title}
                    onClick={() => setActive(i)}
                    className="relative px-6 py-2.5 rounded-full transition-all duration-500 focus:outline-none flex items-center justify-center"
                  >
                    <span
                      className={`text-xs sm:text-sm font-medium tracking-wide relative z-10 transition-colors duration-500 ${
                        isActive
                          ? "text-black"
                          : "text-white/40 hover:text-white/80"
                      }`}
                    >
                      {f.title}
                    </span>

                    {isActive && (
                      <motion.div
                        layoutId="activePill"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
