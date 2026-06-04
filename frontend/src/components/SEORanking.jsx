import * as L from 'lucide-react';
import { SEO_STEPS, SEO_PLACES } from '../mock';
import { waLink } from '../lib/utils';

export default function SEORanking() {
  return (
    <section className="section-pad bg-[#0A0118] relative overflow-hidden">
      <div className="orb drift-1" style={{ top: '5%', right: '0%', width: 500, height: 500, background: '#7C3AED', opacity: 0.12 }} />
      <div className="orb drift-2" style={{ bottom: '5%', left: '0%', width: 400, height: 400, background: '#A855F7', opacity: 0.12 }} />
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <L.TrendingUp className="w-3.5 h-3.5" />
            Rank #1 on Google
          </span>
          <h2 className="section-title mt-4 max-w-3xl glow-text-soft">
            How We Get You to <span className="glow-text">Google’s First Page</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            A pretty website is useless if nobody finds it. Every plan we ship is engineered for ranking —
            here’s the exact 10-point SEO playbook we apply to every project.
          </p>

          {/* Where you'll appear */}
          <div className="mt-7 w-full max-w-3xl">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#C084FC] font-extrabold mb-3">Where Your Business Will Appear</div>
            <div className="flex flex-wrap justify-center gap-2">
              {SEO_PLACES.map((p) => {
                const Icon = L[p.icon] || L.Globe;
                return (
                  <div key={p.label} className="flex items-center gap-1.5 bg-[#1E1135]/70 border border-[#A855F7]/25 text-[#E9D5FF] rounded-full px-3 py-1.5 text-xs font-bold">
                    <Icon className="w-3.5 h-3.5 text-[#C084FC]" /> {p.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {SEO_STEPS.map((s, i) => {
            const Icon = L[s.icon] || L.Sparkles;
            return (
              <div
                key={s.title}
                className="card-lift relative bg-card-dark rounded-2xl p-5 overflow-hidden group"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#A855F7]/10 blur-2xl group-hover:bg-[#A855F7]/25 transition-all" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl btn-gradient text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-black text-[#C084FC]/30 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-4 text-base font-extrabold text-white">{s.title}</h3>
                  <p className="mt-2 text-xs text-[#C4B5FD] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            { v: '3x', l: 'Avg. organic traffic growth in 6 months' },
            { v: 'Top 10', l: 'For 25–40 target keywords (Business plan)' },
            { v: '₹0', l: 'Recurring SEO fees — set up once, ranks forever' },
          ].map((m) => (
            <div key={m.l} className="bg-card-dark rounded-2xl p-5 text-center">
              <div className="text-3xl md:text-4xl font-black glow-text">{m.v}</div>
              <div className="text-xs text-[#C4B5FD] mt-1.5">{m.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink('Hi, I want to know how to rank my business on Google #1.')}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 btn-gradient text-white font-bold rounded-full px-7 py-4"
          >
            <L.Sparkles className="w-4 h-4" /> Audit My Google Ranking (Free)
          </a>
          <p className="mt-3 text-xs text-[#C4B5FD]/70">No commitment — we’ll send you a quick action plan on WhatsApp.</p>
        </div>
      </div>
    </section>
  );
}
