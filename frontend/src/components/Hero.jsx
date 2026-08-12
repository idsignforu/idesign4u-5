import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Zap, X, Star } from 'lucide-react';
import { waLink } from '../lib/utils';
import FlipText from './FlipText';
import PerspectiveGrid from './PerspectiveGrid';

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/pricing';
    }
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-white text-ink font-sans w-full">
      {/* 3D Perspective Grid Background */}
      <PerspectiveGrid gridSize={28} fadeRadius={75} />

      {/* Soft Ambient Mesh Spotlights */}
      <div className="absolute top-10 left-[12%] w-[500px] h-[500px] bg-[#60B1FF]/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-auroraDrift" />
      <div className="absolute top-32 right-[10%] w-[500px] h-[450px] bg-[#319AFF]/15 rounded-full blur-[130px] pointer-events-none -z-10 animate-auroraDrift" style={{ animationDelay: '-5s' }} />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center items-start text-left max-w-[760px]"
          >
            {/* Top Pill Badge */}
            <div className="px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 flex items-center gap-2 shadow-xs mb-6 backdrop-blur-md">
              <span className="text-xs sm:text-sm font-bold text-brand flex items-center gap-1.5">
                <span className="text-amber-500">✨</span> Premium Web Design Studio • Fast Delivery • Ongoing Support
              </span>
            </div>

            {/* Main Display Heading (STRICTLY 2 LINES ONLY WITH VENGEANCE UI FLIP TEXT EFFECT) */}
            <h1 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[58px] leading-[1.15] tracking-[-2.5px] text-ink mb-6 w-full">
              <span className="inline-flex items-center flex-wrap gap-x-3">
                <span>Launch Your</span>{' '}
                <FlipText className="text-brand font-black">
                  Business Website
                </FlipText>
              </span>
              <br />
              <span className="inline-block whitespace-nowrap">
                in 48 Hours
              </span>
            </h1>

            {/* Subtitle / Paragraph Text */}
            <p className="font-sans text-base sm:text-lg text-ink-soft leading-relaxed max-w-[560px] mb-8">
              Website Design Company in Hyderabad creating high-converting, SEO-friendly websites for businesses, startups and ecommerce brands. Starting at <strong className="text-ink font-bold">₹5,999</strong> with domain, hosting and SSL included.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-brand via-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-7 py-3.5 rounded-2xl flex items-center gap-3 text-sm font-bold shadow-lg shadow-brand/25 hover:shadow-brand/40 transition-all hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setDemoOpen(true)}
                className="flex items-center gap-2.5 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 text-ink text-sm font-bold py-3.5 px-6 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Play className="w-4 h-4 text-brand fill-brand" />
                <span>Get Free Demo</span>
              </button>
            </div>

            {/* Feature Highlights Bar */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-ink-soft pt-3 border-t border-black/5 w-full mb-10">
              <div className="flex items-center gap-1.5 text-slate-800">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>SSL & Hosting Included</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-brand" />
                <span>SEO-Friendly Structure</span>
              </div>
            </div>

            {/* Hero Stat Cards */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
              <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 shadow-2xs hover:bg-white hover:border-brand/30 transition-all">
                <div className="font-outfit font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">100+</div>
                <div className="font-sans text-xs sm:text-sm text-ink-soft mt-0.5 font-semibold">Websites Launched</div>
              </div>
              <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 shadow-2xs hover:bg-white hover:border-brand/30 transition-all">
                <div className="font-outfit font-extrabold text-2xl sm:text-3xl text-amber-500 tracking-tight flex items-center gap-1">
                  4.9<Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                </div>
                <div className="font-sans text-xs sm:text-sm text-ink-soft mt-0.5 font-semibold">Google Rating</div>
              </div>
              <div className="bg-slate-50/80 border border-slate-200/70 rounded-2xl p-4 shadow-2xs hover:bg-white hover:border-brand/30 transition-all">
                <div className="font-outfit font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">48hr</div>
                <div className="font-sans text-xs sm:text-sm text-ink-soft mt-0.5 font-semibold">Avg. Delivery</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column (5 Cols) — Robot Video positioned close to content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-start py-4 select-none"
          >
            {/* Soft Sky Aura Glow behind Robo */}
            <div className="absolute w-[420px] h-[420px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sky-400/20 rounded-full blur-[110px] -z-10 animate-pulse duration-[6000ms]" />

            {/* Robot Video Container */}
            <div className="relative w-full max-w-[480px] flex justify-center lg:justify-start items-center">
              <video
                src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_robo_video.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
                className="w-full max-w-[460px] h-auto object-cover block pointer-events-none"
                style={{
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.25) brightness(1.04)',
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Demo Video Modal */}
      <AnimatePresence>
        {demoOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setDemoOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20"
            >
              <button
                onClick={() => setDemoOpen(false)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/20 text-white hover:bg-white/40 flex items-center justify-center backdrop-blur-md cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full">
                <video
                  src="https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/hero_robo_video.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}


