import { TESTIMONIALS } from '../mock';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const row1 = [...TESTIMONIALS, ...TESTIMONIALS];
  const row2 = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()];

  return (
    <section className="py-20 md:py-28 bg-slate-50/60 relative overflow-hidden">
      {/* Background Ambient Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-electric rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <Star className="w-3.5 h-3.5 fill-brand" />
            Client Reviews
          </span>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mt-4">
            Trusted by Businesses <span className="text-gradient-blue">Worldwide</span>
          </h2>
          <p className="font-sans text-base text-muted max-w-2xl mt-4 leading-relaxed">
            Real feedback from startup founders, business owners, and ecommerce brands across India & 30+ countries.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm">
            <div className="bg-white border border-slate-200 shadow-xs rounded-full px-4 py-1.5">
              <span className="font-extrabold text-brand">4.9 / 5.0</span>
              <span className="text-muted ml-1.5 font-medium">Google Rating</span>
            </div>
            <div className="bg-white border border-slate-200 shadow-xs rounded-full px-4 py-1.5">
              <span className="font-extrabold text-brand">500+</span>
              <span className="text-muted ml-1.5 font-medium">Websites Launched</span>
            </div>
            <div className="bg-white border border-slate-200 shadow-xs rounded-full px-4 py-1.5">
              <span className="font-extrabold text-brand">30+</span>
              <span className="text-muted ml-1.5 font-medium">Countries Served</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Row 1 (Moving Left) */}
      <div className="marquee-container overflow-hidden w-full mb-6 py-2 select-none">
        <div className="marquee-track flex gap-6 w-max animate-marqueeLeft hover:[animation-play-state:paused]">
          {row1.map((t, idx) => (
            <TestimonialCard key={`row1-${idx}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Moving Right) */}
      <div className="marquee-container overflow-hidden w-full py-2 select-none">
        <div className="marquee-track flex gap-6 w-max animate-marqueeRight hover:[animation-play-state:paused]">
          {row2.map((t, idx) => (
            <TestimonialCard key={`row2-${idx}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t }) {
  return (
    <div className="w-[320px] sm:w-[380px] p-6 rounded-3xl glass-panel border border-white/80 shadow-xs hover:shadow-card-blue transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(t.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <Quote className="w-6 h-6 text-brand/20" />
        </div>
        <p className="font-sans text-xs sm:text-sm text-ink-soft leading-relaxed">
          “{t.text}”
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-black/5 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand text-white font-bold text-xs flex items-center justify-center shadow-md flex-none">
          {t.initials}
        </div>
        <div>
          <div className="font-outfit font-bold text-sm text-ink">{t.name}</div>
          <div className="font-sans text-[11px] text-muted">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

