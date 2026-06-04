import * as L from 'lucide-react';
import { ABOUT_STATS, ABOUT_PROMISES, BRAND } from '../mock';
import useCounter from '../hooks/useCounter';
import { waLink } from '../lib/utils';

export default function AboutUs() {
  return (
    <section id="about" className="section-pad bg-dark-radial relative">
      <div className="orb drift-2" style={{ top: '10%', right: '0%', width: 450, height: 450, background: '#A855F7', opacity: 0.15 }} />
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left text */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
              <L.Info className="w-3.5 h-3.5" />
              About iDesign4U
            </span>
            <h2 className="section-title mt-4 glow-text-soft">
              Premium Web Studio with a{' '}
              <span className="glow-text">Customer-First Heart</span>
            </h2>
            <p className="mt-5 text-[#C4B5FD] leading-relaxed">
              We’re iDesign4U — a boutique web design studio based in Hyderabad, serving ambitious brands across{' '}
              <span className="text-white font-semibold">30+ countries</span>. From solo entrepreneurs to scaling startups,
              we’ve helped 500+ businesses launch high-converting websites without burning their budget.
            </p>
            <p className="mt-4 text-[#C4B5FD] leading-relaxed">
              We believe great websites shouldn’t cost ₹1 lakh+. That’s why our plans start at just <span className="text-white font-semibold">₹5,999</span>{' '}
              — with free domain, hosting, SSL, and logo. <span className="text-[#C084FC] font-semibold">No hidden charges, no surprise renewals.</span>
            </p>
            <p className="mt-4 text-[#C4B5FD] leading-relaxed">
              Budget too tight? <span className="text-white font-semibold">We do installment payments</span> — split your fee into 2 or 3 parts.
              We’ve helped 100+ clients this way. Just talk to us on WhatsApp.
            </p>
            <p className="mt-4 text-[#C4B5FD] leading-relaxed text-sm">
              <span className="text-[#E9D5FF] font-semibold">Why a small advance?</span> We’re not like generic agencies. A small upfront amount
              confirms you’re serious about your business — it protects our designers’ time, lets us keep prices low for genuine customers,
              and ensures every project gets our full attention.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={waLink('Hi, I want to discuss installment payment options for a website.')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 btn-gradient text-white font-bold rounded-full px-5 py-3 text-sm">
                <L.MessageCircle className="w-4 h-4" /> Ask About Instalments
              </a>
              <a href="#pricing" className="inline-flex items-center gap-2 bg-white/5 border border-[#A855F7]/40 text-white font-bold rounded-full px-5 py-3 text-sm hover:bg-[#A855F7]/15">
                <L.Tag className="w-4 h-4 text-[#C084FC]" /> See Pricing
              </a>
            </div>
          </div>

          {/* Right stats + promises */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ABOUT_STATS.map((s) => <AboutStat key={s.label} stat={s} />)}
            </div>

            <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 gap-4">
              {ABOUT_PROMISES.map((p) => {
                const Icon = L[p.icon] || L.Check;
                return (
                  <div key={p.title} className="card-lift bg-card-dark rounded-2xl p-5 group">
                    <div className="w-11 h-11 rounded-xl bg-[#A855F7]/15 border border-[#A855F7]/30 flex items-center justify-center text-[#C084FC] group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="mt-3 text-base font-extrabold text-white">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-[#C4B5FD] leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutStat({ stat }) {
  const [ref, formatted] = useCounter(stat.value, { duration: 1800, suffix: stat.suffix });
  return (
    <div ref={ref} className="bg-card-dark rounded-2xl p-4">
      <div className="text-2xl font-extrabold glow-text tabular-nums">{formatted}</div>
      <div className="text-xs text-[#C4B5FD] mt-0.5">{stat.label}</div>
    </div>
  );
}
