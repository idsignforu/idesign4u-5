import * as L from 'lucide-react';
import { WEBSITE_IMPACT } from '../mock';

export default function WebsiteImpact() {
  return (
    <section className="section-pad bg-[#0A0118] relative overflow-hidden">
      <div className="orb drift-1" style={{ top: '15%', left: '50%', width: 500, height: 500, background: '#7C3AED', opacity: 0.12, transform: 'translateX(-50%)' }} />
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <L.Scale className="w-3.5 h-3.5" />
            The Real Difference
          </span>
          <h2 className="section-title mt-4 max-w-3xl glow-text-soft">
            Website hai toh{' '}
            <span className="glow-text">Business hai</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            See exactly what you gain with a professional website — and what you lose every single day without one.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 items-stretch">
          {/* With Website */}
          <div className="relative rounded-3xl p-5 md:p-8 overflow-hidden border border-[#A855F7]/40" style={{ background: 'linear-gradient(160deg, rgba(124, 58, 237, 0.18) 0%, rgba(30, 17, 53, 0.6) 100%)' }}>
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#A855F7]/20 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-[#A855F7]/20 border border-[#A855F7]/45 text-[#E9D5FF] rounded-full px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider">
                <L.Check className="w-3.5 h-3.5" /> With a Website
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-white">You <span className="glow-text">Win</span> Every Day</h3>
              <p className="mt-1 text-sm text-[#C4B5FD]">Compounding growth, professional brand, real revenue.</p>

              <ul className="mt-6 space-y-3.5">
                {WEBSITE_IMPACT.withWebsite.map((item) => {
                  const Icon = L[item.icon] || L.Check;
                  return (
                    <li key={item.title} className="flex items-start gap-3 group">
                      <span className="flex-none w-9 h-9 rounded-xl bg-[#A855F7]/20 border border-[#A855F7]/40 flex items-center justify-center group-hover:bg-[#A855F7]/30 transition-colors">
                        <Icon className="w-4 h-4 text-[#C084FC]" />
                      </span>
                      <div>
                        <div className="font-bold text-white text-sm">{item.title}</div>
                        <div className="text-xs text-[#C4B5FD] leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* VS divider */}
          <div className="hidden lg:flex flex-col items-center justify-center px-2">
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#A855F7]/40 to-transparent" />
            <div className="my-2 w-14 h-14 rounded-full flex items-center justify-center text-xs font-black tracking-wider text-white shadow-[0_0_30px_rgba(168,85,247,0.5)]" style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}>
              VS
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-transparent via-[#A855F7]/40 to-transparent" />
          </div>
          <div className="flex lg:hidden items-center gap-3 my-2">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent" />
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-black tracking-wider text-white" style={{ background: 'linear-gradient(135deg, #7C3AED, #A855F7)' }}>VS</div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#A855F7]/40 to-transparent" />
          </div>

          {/* Without Website */}
          <div className="relative rounded-3xl p-5 md:p-8 overflow-hidden border border-red-500/25" style={{ background: 'linear-gradient(160deg, rgba(127, 29, 29, 0.18) 0%, rgba(30, 17, 53, 0.6) 100%)' }}>
            <div className="absolute -top-12 -left-12 w-44 h-44 rounded-full bg-red-500/15 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/40 text-red-200 rounded-full px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider">
                <L.X className="w-3.5 h-3.5" /> Without a Website
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-white">You <span className="text-red-300">Lose</span> Every Day</h3>
              <p className="mt-1 text-sm text-red-200/80">Invisible, untrustworthy, dependent on platforms.</p>

              <ul className="mt-6 space-y-3.5">
                {WEBSITE_IMPACT.withoutWebsite.map((item) => {
                  const Icon = L[item.icon] || L.X;
                  return (
                    <li key={item.title} className="flex items-start gap-3 group">
                      <span className="flex-none w-9 h-9 rounded-xl bg-red-500/15 border border-red-500/30 flex items-center justify-center group-hover:bg-red-500/25 transition-colors">
                        <Icon className="w-4 h-4 text-red-300" />
                      </span>
                      <div>
                        <div className="font-bold text-white text-sm">{item.title}</div>
                        <div className="text-xs text-red-200/70 leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#C4B5FD] text-sm max-w-2xl mx-auto">
            The math is simple. Every day without a website is a day your competitors win.{' '}
            <span className="text-white font-semibold">Start at ₹5,999 — launch in 48 hours.</span>
          </p>
          <a
            href="#pricing"
            className="mt-5 inline-flex items-center gap-2 btn-gradient text-white font-bold rounded-full px-7 py-4"
          >
            Flip the Switch — See Pricing <L.ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
