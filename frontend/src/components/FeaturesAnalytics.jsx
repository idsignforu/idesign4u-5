import React from 'react';
import { Mail, BarChart3, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturesAnalytics() {
  const featureCards = [
    {
      title: 'Seamless Systems Integration',
      desc: 'Connect your business website directly to WhatsApp, CRM platforms, and payment gateways with zero friction.',
      icon: Mail,
      bg: 'bg-emerald-50',
      border: 'border-emerald-100',
      text: 'text-emerald-600',
    },
    {
      title: 'Real-Time Performance Metrics',
      desc: 'Track visitor traffic, conversion rates, and user engagement metrics effortlessly with built-in analytics.',
      icon: BarChart3,
      bg: 'bg-amber-50',
      border: 'border-amber-100',
      text: 'text-amber-600',
    },
    {
      title: '48-Hour Turnaround Promise',
      desc: 'Launch your website in 48 hours without compromising on design quality, mobile responsiveness, or speed.',
      icon: Clock,
      bg: 'bg-blue-50',
      border: 'border-blue-100',
      text: 'text-brand',
    },
    {
      title: 'Ironclad Security & Free SSL',
      desc: 'Every website comes with free SSL encryption, firewall security, and protection against web threats.',
      icon: ShieldCheck,
      bg: 'bg-rose-50',
      border: 'border-rose-100',
      text: 'text-rose-600',
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 bg-white text-ink relative overflow-hidden font-sans flex items-center justify-center">
      {/* Background Radial Spotlights */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Heading, Copy & 3D Isometric Illustration */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-ink leading-tight font-outfit">
            Advanced Web Analytics & <span className="text-gradient-blue">Live Insights</span>
          </h2>
          <p className="text-muted text-base md:text-lg mb-12 max-w-md leading-relaxed font-sans">
            Track your website visitors, lead generation channels, and sales conversions with high-precision digital tools built into your platform.
          </p>

          {/* 3D Isometric Illustration Scene (Pure CSS Transforms) */}
          <div className="relative w-full max-w-[400px] h-[360px] mx-auto sm:mx-0 flex items-center justify-center select-none" style={{ perspective: '1200px' }}>
            <div
              className="relative w-[240px] h-[340px] transition-transform duration-700 hover:rotate-x-[55deg] hover:rotate-z-[40deg]"
              style={{
                transform: 'rotateX(58deg) rotateZ(42deg)',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Phone Base Screen */}
              <div className="w-full h-full bg-[#13152A]/95 rounded-[2.2rem] border-2 border-cyan-500/40 p-4 shadow-[0_0_50px_rgba(6,182,212,0.3)] relative">
                {/* Backing Glow */}
                <div className="absolute inset-0 bg-cyan-500/20 rounded-[2.2rem] blur-xl -z-10" />

                {/* Dashboard Inner Canvas */}
                <div className="w-full h-full bg-[#0B0A1A] rounded-[1.4rem] p-4 flex flex-col justify-between overflow-hidden">
                  
                  {/* Pie Chart Rotated */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full border-4 border-cyan-400 border-t-amber-400 border-r-emerald-400 border-b-rose-400 animate-spin flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                      <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-cyan-400 font-mono font-bold">LIVE METRICS</span>
                      <div className="text-xs font-bold text-white">99.8% Uptime</div>
                    </div>
                  </div>

                  {/* Mini Cards */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-2 border border-white/10">
                      <div className="text-[9px] text-slate-400">Visitors</div>
                      <div className="text-xs font-extrabold text-emerald-400">+12.4k</div>
                    </div>
                    <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-2 border border-white/10">
                      <div className="text-[9px] text-slate-400">Leads</div>
                      <div className="text-xs font-extrabold text-cyan-400">+840</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[9px] text-slate-400 mb-1">
                        <span>Conversion Rate</span>
                        <span className="text-cyan-400 font-bold">75%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-cyan-400 rounded-full w-[75%] shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[9px] text-slate-400 mb-1">
                        <span>Speed Score</span>
                        <span className="text-amber-400 font-bold">98/100</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full w-[98%] shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating 3D Bobbing Elements */}
              <div
                className="absolute top-4 right-[-30px] w-10 h-10 bg-amber-400/80 rounded-lg border border-amber-300 shadow-[0_0_20px_rgba(250,204,21,0.6)] backdrop-blur-md animate-bounce"
                style={{ transform: 'translateZ(40px)', animationDuration: '3s' }}
              />
              <div
                className="absolute bottom-10 left-[-30px] w-12 h-12 bg-emerald-400/80 rounded-xl border border-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.6)] backdrop-blur-md animate-pulse"
                style={{ transform: 'translateZ(60px)' }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Vertical Stack of 4 Light Glass Feature Cards */}
        <div className="space-y-4">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ x: -12 }}
                className="group glass-panel bg-white/80 backdrop-blur-xl border border-black/5 rounded-[1.25rem] p-5 flex items-start sm:items-center gap-5 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-card-blue hover:border-brand"
              >
                {/* Theme-colored Icon Box */}
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center flex-none ${card.bg} ${card.border} ${card.text} group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="text-ink font-bold text-lg mb-1 group-hover:text-brand transition-colors font-outfit">
                    {card.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed font-sans">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}

          <div className="pt-4">
            <a
              href="#contact"
              className="btn-primary-blue inline-flex items-center gap-2 font-bold py-3.5 px-8 rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>Explore Platform Features</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
