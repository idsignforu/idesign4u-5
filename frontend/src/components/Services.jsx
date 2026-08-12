import { useState } from 'react';
import * as L from 'lucide-react';
import { SERVICES } from '../mock';
import { waLink } from '../lib/utils';

export default function Services() {
  const [open, setOpen] = useState(null);
  return (
    <section id="services" className="section-pad bg-[#0A0118] relative">
      <div className="orb drift-2" style={{ top: '20%', left: '5%', width: 350, height: 350, background: '#7C3AED', opacity: 0.15 }} />
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <L.Layers className="w-3.5 h-3.5" />
            What We Offer
          </span>
          <h2 className="section-title mt-4 glow-text-soft">
            Our <span className="glow-text">Services</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            End-to-end digital solutions crafted to help your business grow faster, smarter, and stronger online.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((s) => {
            const Icon = L[s.icon] || L.Sparkles;
            return (
              <button
                key={s.title}
                type="button"
                onClick={() => setOpen(s)}
                data-testid={`service-card-${s.title}`}
                className="group card-lift tile-fill relative bg-card-dark rounded-3xl p-5 md:p-6 overflow-hidden text-left flex flex-col items-center text-center"
              >
                <div className="tile-icon w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-[#1E1135] border border-[#A855F7]/30 flex items-center justify-center transition-all duration-300 text-[#C084FC]">
                  <Icon className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <h3 className="tile-title mt-4 text-sm md:text-lg font-extrabold text-white transition-colors leading-tight">{s.title}</h3>
                <div className="mt-3 inline-flex items-center gap-1 text-[10px] md:text-xs font-bold text-[#C084FC] tile-title">
                  Tap to learn more <L.ArrowRight className="w-3 h-3" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Service detail modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up"
          style={{ background: 'rgba(10, 1, 24, 0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setOpen(null)}
        >
          <div
            className="relative w-full max-w-md rounded-3xl border border-[#A855F7]/40 shadow-[0_30px_80px_rgba(168,85,247,0.4)] p-6 md:p-8"
            style={{ background: 'linear-gradient(160deg, #1E1135 0%, #0A0118 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(null)}
              data-testid="service-modal-close"
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0A0118]/80 border border-[#A855F7]/30 text-white flex items-center justify-center hover:bg-[#A855F7]/15"
            >
              <L.X className="w-4 h-4" />
            </button>
            <div className="w-14 h-14 rounded-2xl bg-[#A855F7]/15 border border-[#A855F7]/40 flex items-center justify-center text-[#C084FC] mb-4">
              {(() => { const Icon = L[open.icon] || L.Sparkles; return <Icon className="w-7 h-7" />; })()}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#C084FC] font-extrabold">Service</div>
            <h3 className="mt-1 text-2xl font-extrabold text-white leading-tight">{open.title}</h3>
            <p className="mt-3 text-sm text-[#C4B5FD] leading-relaxed">{open.desc}</p>
            <a
              href={waLink(`Hi, I'm interested in your "${open.title}" service. Please share details.`)}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(null)}
              data-testid="service-modal-cta"
              className="mt-6 inline-flex items-center gap-2 btn-gradient text-white font-bold rounded-full px-5 py-3 text-sm"
            >
              <L.MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
