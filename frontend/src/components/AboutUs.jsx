import * as L from 'lucide-react';
import { motion } from 'framer-motion';
import { ABOUT_STATS, ABOUT_PROMISES } from '../mock';
import { waLink } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Ambient Backdrop Spotlights */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-aura-sky rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
              <L.Info className="w-3.5 h-3.5" />
              About iDesign4U
            </span>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mt-4">
              Premium Web Studio with a <span className="text-gradient-blue">Customer-First Heart</span>
            </h2>
            <p className="font-sans text-base text-muted leading-relaxed mt-5">
              We’re <strong className="text-ink font-semibold">iDesign4U</strong> — a boutique web design studio based in Hyderabad, serving ambitious brands across <strong className="text-ink font-semibold">30+ countries</strong>. From solo entrepreneurs to scaling startups, we’ve helped 500+ businesses launch high-converting websites without burning their budget.
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mt-4">
              We believe great websites shouldn’t cost ₹1 lakh+. That’s why our plans start at just <strong className="text-ink font-semibold">₹5,999</strong> — with free domain, hosting, SSL, and logo included. <span className="text-brand font-semibold">No hidden charges, no surprise renewals.</span>
            </p>
            <p className="font-sans text-base text-muted leading-relaxed mt-4">
              Budget tight? <strong className="text-ink font-semibold">We offer installment payments</strong> — split your fee into 2 or 3 parts. We’ve helped 100+ clients launch smoothly this way.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={waLink('Hi, I want to discuss installment payment options for a website.')}
                target="_blank"
                rel="noreferrer"
                className="btn-primary-blue px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-lg"
              >
                <L.MessageCircle className="w-4 h-4" />
                <span>Ask About Instalments</span>
              </a>
              <Link
                to="/pricing"
                className="bg-black/5 hover:bg-black/10 text-ink border border-black/5 px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2"
              >
                <L.Tag className="w-4 h-4 text-brand" />
                <span>See Pricing</span>
              </Link>
            </div>
          </motion.div>

          {/* Right Stats & Promise Grid Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ABOUT_STATS.map((s) => (
                <div key={s.label} className="glass-panel p-4 rounded-2xl border border-white/80 text-center shadow-xs">
                  <div className="font-outfit font-extrabold text-2xl sm:text-3xl text-brand">{s.value}{s.suffix}</div>
                  <div className="font-sans text-xs text-muted font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Promise Cards */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_PROMISES.map((p) => {
                const Icon = L[p.icon] || L.Check;
                return (
                  <div key={p.title} className="glass-panel p-6 rounded-2xl border border-white/80 shadow-xs hover:shadow-card-blue transition-all">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-outfit font-extrabold text-lg text-ink">{p.title}</h3>
                    <p className="font-sans text-xs text-muted leading-relaxed mt-1.5">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

