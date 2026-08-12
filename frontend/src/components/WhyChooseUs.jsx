import * as L from 'lucide-react';
import { motion } from 'framer-motion';
import { WHY_US } from '../mock';
import PerspectiveGrid from './PerspectiveGrid';

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* 3D Perspective Grid Background */}
      <PerspectiveGrid gridSize={28} fadeRadius={75} />

      {/* Background Ambient Spot */}
      <div className="absolute top-1/2 left-10 w-[450px] h-[450px] bg-aura-sky rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <L.Heart className="w-3.5 h-3.5" />
            Why Choose iDesign4U
          </span>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mt-4 max-w-3xl">
            We don’t just build websites — we build <span className="text-gradient-blue">digital assets</span> that grow with you
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_US.map((w, idx) => {
            const Icon = L[w.icon] || L.Sparkles;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -5 }}
                className="group glass-panel rounded-3xl p-6 border border-white/80 shadow-xs hover:shadow-card-blue transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand border border-blue-100 flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors mb-4 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-bold text-lg text-ink group-hover:text-brand transition-colors mb-1.5">
                  {w.title}
                </h3>
                <p className="font-sans text-xs text-muted leading-relaxed">
                  {w.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

