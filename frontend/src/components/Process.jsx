import { PROCESS_STEPS } from '../mock';
import * as L from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="section-pad bg-[#0A0118] relative">
      <div className="orb drift-2" style={{ top: '10%', left: '50%', width: 400, height: 400, background: '#7C3AED', opacity: 0.12, transform: 'translateX(-50%)' }} />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <L.Workflow className="w-3.5 h-3.5" />
            Our Process
          </span>
          <h2 className="section-title mt-4 max-w-3xl glow-text-soft">
            From First Call to <span className="glow-text">Final Launch</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            A streamlined workflow designed to deliver a premium website experience with clarity, speed, and complete transparency.
          </p>
        </div>

        <div className="relative">
          {/* Connecting dashed line */}
          <div className="hidden lg:block absolute top-14 left-[10%] right-[10%]">
            <div className="border-t-2 border-dashed border-[#A855F7]/40" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {PROCESS_STEPS.map((s, i) => {
              const Icon = L[s.icon] || L.Circle;
              const isLast = i === PROCESS_STEPS.length - 1;
              return (
                <div key={s.no} className={`tile-fill group relative flex flex-col items-center text-center bg-card-dark rounded-2xl p-6 cursor-pointer ${isLast ? 'col-span-2 lg:col-span-1' : ''}`}>
                  <div className="relative">
                    <div className="tile-icon w-16 h-16 rounded-2xl flex items-center justify-center transition-all" style={{ background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)', color: '#fff' }}>
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="tile-num mt-4 text-3xl font-black text-[#C084FC] transition-colors">{s.no}</div>
                  <h3 className="tile-title mt-1 text-lg font-extrabold text-white transition-colors">{s.title}</h3>
                  <p className="tile-desc mt-2 text-sm text-[#C4B5FD] leading-relaxed transition-colors">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
