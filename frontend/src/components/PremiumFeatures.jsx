import { Megaphone, TrendingUp, ShieldCheck, Lock, Gift } from 'lucide-react';
import { PREMIUM_FEATURES } from '../mock';

const ICON_MAP = { Megaphone, TrendingUp, ShieldCheck, Lock };

export default function PremiumFeatures() {
  return (
    <section className="section-pad relative bg-[#0A0118]">
      <div className="orb drift-1" style={{ top: '10%', right: '10%', width: 300, height: 300, background: '#581C87', opacity: 0.4 }} />
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <Gift className="w-3.5 h-3.5" />
            Bonus Inclusions
          </span>
          <h2 className="section-title mt-4 max-w-3xl glow-text-soft">
            Built-In Premium Features at <span className="glow-text">No Extra Cost</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            Every website plan comes with these powerful add-ons — free, forever. No hidden charges, no upgrades required.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {PREMIUM_FEATURES.map((f) => {
            const Icon = ICON_MAP[f.icon] || Gift;
            return (
              <div
                key={f.title}
                className="card-lift relative bg-card-dark rounded-3xl p-5 md:p-6 overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#A855F7]/15 blur-3xl group-hover:bg-[#A855F7]/30 transition-all" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl btn-gradient text-white shadow-[0_10px_22px_rgba(168,85,247,0.4)] group-hover:rotate-6 transition-transform">
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="mt-4 text-xs font-extrabold text-[#C084FC] tracking-wide">{f.tag}</div>
                  <h3 className="mt-1 text-base md:text-lg font-bold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-[#C4B5FD]">{f.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
