import { motion } from 'framer-motion';
import { Globe2, Star, Clock, Rocket } from 'lucide-react';

export default function TrustStats() {
  const stats = [
    { value: '500+', label: 'Websites Launched', sub: 'Across 30+ countries', icon: Rocket, color: 'text-brand', bg: 'bg-blue-50' },
    { value: '4.9★', label: 'Google Rating', sub: 'From 150+ verified reviews', icon: Star, color: 'text-amber-500', bg: 'bg-amber-50' },
    { value: '48 Hours', label: 'Avg. Turnaround', sub: 'Fastest delivery in India', icon: Clock, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { value: '30+', label: 'Countries Served', sub: 'UK, USA, UAE & more', icon: Globe2, color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  return (
    <section className="py-12 bg-slate-50/50 border-y border-black/5">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-5 rounded-2xl glass-card border border-white flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center ${s.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted bg-black/5 px-2 py-0.5 rounded-md">Verified</span>
                </div>

                <div>
                  <div className="font-outfit font-extrabold text-2xl sm:text-3xl text-ink tracking-tight">{s.value}</div>
                  <div className="font-sans font-semibold text-xs sm:text-sm text-ink-soft mt-0.5">{s.label}</div>
                  <div className="font-sans text-[11px] text-muted mt-0.5">{s.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
