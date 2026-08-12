import { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../mock';
import { Link } from 'react-router-dom';
import PerspectiveGrid from './PerspectiveGrid';

export default function FAQ({ limit = null }) {
  const [open, setOpen] = useState(0);
  const displayFaqs = limit ? FAQS.slice(0, limit) : FAQS;

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 relative overflow-hidden bg-white text-ink flex flex-col justify-center items-center">
      {/* 3D Perspective Grid Background */}
      <PerspectiveGrid gridSize={28} fadeRadius={75} />

      {/* Background Soft Ambient Spotlights */}
      <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-auroraDrift" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </span>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight leading-[1.15] mb-4">
            Answers to <span className="text-gradient-blue">Everything You Need to Know</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Transparent insights about our web design process, pricing, timeline, domain hosting, and after-sales support.
          </p>
        </div>

        {/* Accordion Cards Stack with Spinning Glowing Border */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {displayFaqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="relative group rounded-2xl">
                {/* Animated Glowing Conic Border on Active FAQ */}
                {isOpen && (
                  <div className="absolute -inset-[3px] rounded-[1.45rem] p-[3px] pointer-events-none z-0 overflow-hidden drop-shadow-[0_0_12px_rgba(0,132,255,0.4)]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%] bg-[conic-gradient(from_0deg,transparent_0%,rgba(96,165,250,0.6)_70%,rgba(0,132,255,1)_100%)] animate-spinGlow" />
                  </div>
                )}

                {/* Inner Glassmorphism Card */}
                <div
                  className={`relative z-10 rounded-2xl transition-all duration-300 border ${
                    isOpen
                      ? 'bg-white border-brand/50 shadow-card-blue'
                      : 'bg-white/80 border-black/5 hover:border-brand/40 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="w-full text-left flex items-center justify-between gap-4 p-5 sm:p-6 focus:outline-none"
                  >
                    <span className="font-outfit font-bold text-base sm:text-lg text-ink pr-4">
                      {f.q}
                    </span>
                    <span
                      className={`flex-none w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isOpen ? 'bg-brand text-white shadow-md rotate-180' : 'bg-slate-100 text-muted'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="font-sans text-sm sm:text-base text-muted leading-relaxed px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {limit && limit < FAQS.length && (
          <div className="mt-12 text-center">
            <Link
              to="/faq"
              className="btn-primary-blue px-8 py-4 rounded-2xl font-bold text-sm sm:text-base inline-flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
            >
              <span>See All 10 FAQs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
