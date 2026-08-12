import { PROCESS_STEPS } from '../mock';
import * as L from 'lucide-react';
import { motion } from 'framer-motion';

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Ambient Spotlight */}
      <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-aura-electric rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <L.Workflow className="w-3.5 h-3.5" />
            Simple 5-Step Process
          </span>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mt-4 max-w-3xl">
            From First Contact to <span className="text-gradient-blue">Live Website</span>
          </h2>
          <p className="font-sans text-base text-muted max-w-2xl mt-4 leading-relaxed">
            A transparent workflow designed to launch your business website quickly without friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((s, idx) => {
            const Icon = L[s.icon] || L.Circle;
            return (
              <motion.div
                key={s.no}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-panel p-6 rounded-3xl border border-white/80 shadow-xs flex flex-col items-start text-left relative group hover:shadow-card-blue transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand text-white flex items-center justify-center font-bold shadow-md mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-mono text-xs font-extrabold text-brand uppercase tracking-wider">Step {s.no}</span>
                <h3 className="font-outfit font-bold text-xl text-ink mt-1 mb-2">{s.title}</h3>
                <p className="font-sans text-xs text-muted leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

