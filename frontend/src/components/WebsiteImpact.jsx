import * as L from 'lucide-react';
import { motion } from 'framer-motion';
import { WEBSITE_IMPACT } from '../mock';
import { Link } from 'react-router-dom';

export default function WebsiteImpact() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-aura-sky rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <L.Scale className="w-3.5 h-3.5" />
            The Real Impact
          </span>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mt-4 max-w-3xl">
            Website hai toh <span className="text-gradient-blue">Business hai</span>
          </h2>
          <p className="font-sans text-base text-muted max-w-2xl mt-4 leading-relaxed">
            See exactly what you gain with a professional website — and what you lose every single day without one.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-8 items-stretch">
          {/* With Website */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-6 sm:p-8 glass-panel border border-blue-100 shadow-card-blue flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <L.Check className="w-3.5 h-3.5 stroke-[3px]" /> With a Website
              </div>
              <h3 className="mt-4 font-outfit text-2xl sm:text-3xl font-extrabold text-ink">You <span className="text-brand">Win</span> Every Day</h3>
              <p className="mt-1 text-sm text-muted">Compounding growth, professional brand, direct revenue.</p>

              <ul className="mt-6 space-y-4">
                {WEBSITE_IMPACT.withWebsite.map((item) => {
                  const Icon = L[item.icon] || L.Check;
                  return (
                    <li key={item.title} className="flex items-start gap-3.5 group">
                      <span className="flex-none w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-colors shadow-xs">
                        <Icon className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="font-bold text-ink-soft text-sm">{item.title}</div>
                        <div className="text-xs text-muted leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>

          {/* VS Divider */}
          <div className="hidden lg:flex flex-col items-center justify-center px-2">
            <div className="h-16 w-px bg-slate-200" />
            <div className="my-3 w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-xs font-extrabold shadow-lg">
              VS
            </div>
            <div className="h-16 w-px bg-slate-200" />
          </div>

          <div className="flex lg:hidden items-center gap-3 my-2">
            <div className="flex-1 h-px bg-slate-200" />
            <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center text-xs font-extrabold shadow-md">VS</div>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          {/* Without Website */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl p-6 sm:p-8 bg-rose-50/30 border border-rose-100 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-rose-100/60 border border-rose-200 text-rose-600 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider">
                <L.X className="w-3.5 h-3.5 stroke-[3px]" /> Without a Website
              </div>
              <h3 className="mt-4 font-outfit text-2xl sm:text-3xl font-extrabold text-ink">You <span className="text-rose-500">Lose</span> Every Day</h3>
              <p className="mt-1 text-sm text-muted">Invisible to online buyers, paying commissions forever.</p>

              <ul className="mt-6 space-y-4">
                {WEBSITE_IMPACT.withoutWebsite.map((item) => {
                  const Icon = L[item.icon] || L.X;
                  return (
                    <li key={item.title} className="flex items-start gap-3.5 group">
                      <span className="flex-none w-9 h-9 rounded-xl bg-rose-100/80 border border-rose-200 flex items-center justify-center text-rose-600 group-hover:bg-rose-500 group-hover:text-white transition-colors shadow-xs">
                        <Icon className="w-4 h-4" />
                      </span>
                      <div>
                        <div className="font-bold text-ink-soft text-sm">{item.title}</div>
                        <div className="text-xs text-muted leading-relaxed mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted text-sm max-w-xl mx-auto">
            Every day without a website is a day your competitors win.{' '}
            <strong className="text-ink font-semibold">Start at ₹5,999 — launch in 48 hours.</strong>
          </p>
          <div className="mt-6 flex items-center justify-center">
            <Link
              to="/pricing"
              className="btn-primary-blue px-7 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-lg"
            >
              <span>See Website Pricing</span>
              <L.ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

