import * as L from 'lucide-react';
import { WHY_US } from '../mock';

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-dark-radial relative">
      <div className="orb drift-1" style={{ bottom: '10%', right: '5%', width: 400, height: 400, background: '#A855F7', opacity: 0.15 }} />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <L.Heart className="w-3.5 h-3.5" />
            Why Choose Us
          </span>
          <h2 className="section-title mt-4 max-w-3xl glow-text-soft">
            We don’t just build websites —<br className="hidden md:block" /> we build <span className="glow-text">digital assets</span> that grow with you
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {WHY_US.map((w) => {
            const Icon = L[w.icon] || L.Sparkles;
            return (
              <div key={w.title} className="tile-fill group bg-card-dark rounded-2xl p-5 border border-[#A855F7]/15 cursor-pointer">
                <div className="tile-icon w-12 h-12 rounded-xl bg-[#1E1135] border border-[#A855F7]/30 flex items-center justify-center text-[#C084FC] transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="tile-title mt-4 text-base font-extrabold text-white transition-colors">{w.title}</h3>
                <p className="tile-desc mt-1.5 text-sm text-[#C4B5FD] leading-relaxed transition-colors">{w.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
