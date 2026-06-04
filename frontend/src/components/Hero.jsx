import { ArrowRight, Sparkles, Star, Zap, ShieldCheck, CheckCircle2, Crown, Phone, Mail, Search } from 'lucide-react';
import { waLink } from '../lib/utils';
import { STATS, BRAND } from '../mock';
import useCounter from '../hooks/useCounter';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-dark-mesh">
      <div className="hero-glow" />
      <div className="orb drift-1" style={{ top: '8%', left: '-5%', width: 380, height: 380, background: '#7C3AED' }} />
      <div className="orb drift-2" style={{ bottom: '5%', right: '-8%', width: 460, height: 460, background: '#A855F7' }} />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      <div className="stars">
        {[...Array(24)].map((_, i) => (
          <span key={i} className="star animate-twinkle"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }} />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-10 pb-16 md:pt-16 md:pb-24">
        {/* Mobile-only logo + tagline block (hidden on desktop because navbar shows it) */}
        <div className="md:hidden flex items-center gap-3 mb-6">
          <div className="relative flex-none">
            <div className="absolute inset-0 bg-[#A855F7]/40 blur-xl rounded-full" />
            <img src={BRAND.logo} alt="iDesign4U logo" className="relative w-12 h-12 object-contain rounded-lg" />
          </div>
          <div className="leading-tight">
            <div className="font-extrabold text-base tracking-tight text-white">I DESIGN 4 U</div>
            <div className="text-[10px] text-[#C084FC] uppercase tracking-[0.18em] font-bold">Premium Web Designs</div>
          </div>
        </div>

        <div className="grid grid-cols-5 md:grid-cols-1 lg:grid-cols-12 gap-4 md:gap-10 items-center">
          {/* Left */}
          <div className="col-span-2 md:col-span-1 lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 md:gap-2 bg-[#1E1135]/80 backdrop-blur border border-[#A855F7]/30 rounded-full px-2.5 md:px-3.5 py-1 md:py-1.5 text-[10px] md:text-xs font-semibold text-[#E9D5FF] mb-4 md:mb-6 shadow-[0_8px_24px_rgba(168,85,247,0.25)]">
              <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#C084FC]" />
              <span className="hidden sm:inline">Premium Web Design Studio • 5★ Rated • 500+ Sites Delivered</span>
              <span className="sm:hidden">5★ Studio • 500+ Sites</span>
            </div>

            <h1 className="text-[1.5rem] sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-extrabold leading-[1.05] tracking-tight glow-text-soft">
              Launch Your<br />
              <span className="glow-text">Business Website</span><br />
              in <span className="glow-text">48 Hours</span>
            </h1>
          </div>

          {/* Right — Animated laptop. On mobile compressed to 3/5 width on right */}
          <div className="col-span-3 md:col-span-1 lg:col-span-5 relative">
            <div className="relative max-w-[240px] md:max-w-[520px] ml-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7C3AED]/30 via-transparent to-[#C084FC]/20 blur-2xl" />
              <div className="laptop animate-float">
                <div className="laptop-screen">
                  <div className="laptop-bar">
                    <span style={{ background: '#FF5F57' }} />
                    <span style={{ background: '#FFBD2E' }} />
                    <span style={{ background: '#28C940' }} />
                    <div className="url">🔒 idesign4u.in</div>
                  </div>
                  <div className="laptop-viewport">
                    <div className="laptop-content">
                      <LaptopHero />
                      <LaptopServices />
                      <LaptopPricing />
                      <LaptopContact />
                    </div>
                  </div>
                </div>
                <div className="laptop-base" />
              </div>

              {/* Floating cards — hidden on mobile (cramped at small laptop size) */}
              <div className="hidden md:flex absolute -top-2 -left-3 glass rounded-2xl shadow-xl px-3 py-2 items-center gap-2 animate-float" style={{ animationDelay: '0.4s' }}>
                <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                </div>
                <div className="leading-tight">
                  <div className="font-extrabold text-sm text-white">4.9 / 5</div>
                  <div className="text-[10px] text-[#C4B5FD]">500+ Clients</div>
                </div>
              </div>

              <div className="hidden md:flex absolute -bottom-2 -right-3 glass rounded-2xl shadow-xl px-3 py-2 items-center gap-2 animate-float" style={{ animationDelay: '0.8s' }}>
                <div className="w-8 h-8 rounded-full bg-[#A855F7]/25 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#C084FC]" />
                </div>
                <div className="leading-tight">
                  <div className="font-extrabold text-sm text-white">48 hrs</div>
                  <div className="text-[10px] text-[#C4B5FD]">Avg. Delivery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only: description + CTAs + trust strip (rendered after both grid items so they appear below the row) */}
          <div className="col-span-5 md:hidden">
            <p className="mt-2 text-sm text-[#C4B5FD] leading-relaxed">
              High-converting, SEO-ready websites starting at just <span className="font-bold text-white">₹5,999</span>. Free domain, hosting, SSL & logo.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a href="#pricing" className="inline-flex items-center gap-1.5 btn-gradient text-white font-bold rounded-full px-5 py-3 text-sm transition-all">
                View Pricing <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href={waLink('Hi, I want a free demo of your web design service.')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 bg-white/5 backdrop-blur border border-[#A855F7]/35 text-white font-bold rounded-full px-5 py-3 text-sm">
                Get Free Demo
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              {[
                { icon: CheckCircle2, t: '48 Hour Delivery' },
                { icon: ShieldCheck, t: 'Free SSL & Hosting' },
                { icon: Zap, t: 'SEO-Ready Code' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[#DDD6FE]">
                  <f.icon className="w-3.5 h-3.5 text-[#C084FC]" />
                  <span className="font-medium">{f.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop / tablet only continuation of left column content */}
          <div className="hidden md:block lg:col-span-7 lg:col-start-1 lg:-mt-4">
            <p className="mt-6 text-base md:text-lg text-[#C4B5FD] max-w-xl leading-relaxed">
              High-converting, SEO-ready websites starting at just <span className="font-bold text-white">₹5,999</span>.
              Free domain, hosting, SSL & logo — with a 24/7 support team that actually picks up the phone.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 btn-gradient text-white font-bold rounded-full px-7 py-4 transition-all hover:translate-y-[-2px] animate-pulse-glow">
                View Pricing <ArrowRight className="w-4 h-4" />
              </a>
              <a href={waLink('Hi, I want a free demo of your web design service.')} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-[#A855F7]/35 text-white font-bold rounded-full px-7 py-4 hover:bg-[#A855F7]/15 hover:border-[#A855F7]/60 transition-all">
                Get Free Demo
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              {[
                { icon: CheckCircle2, t: '48 Hour Delivery' },
                { icon: ShieldCheck, t: 'Free SSL & Hosting' },
                { icon: Zap, t: 'SEO-Ready Code' },
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-[#DDD6FE]">
                  <f.icon className="w-4 h-4 text-[#C084FC]" />
                  <span className="font-medium">{f.t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip with counter animation */}
        <div className="mt-8 md:mt-14 grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-4 max-w-4xl">
          {STATS.map((s) => <StatCard key={s.label} stat={s} />)}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }) {
  const [ref, formatted] = useCounter(stat.value, {
    duration: 2000,
    decimals: stat.decimals || 0,
    suffix: stat.suffix || '',
  });
  return (
    <div ref={ref} className="glass rounded-xl md:rounded-2xl px-2 py-2 md:px-5 md:py-4 hover:border-[#A855F7]/50 transition-colors">
      <div className="text-base md:text-3xl font-extrabold text-white tabular-nums leading-tight">{formatted}</div>
      <div className="text-[9px] md:text-sm text-[#C4B5FD] mt-0.5 leading-tight">{stat.label}</div>
    </div>
  );
}

/* ===== Laptop content (real mini-versions of website sections) ===== */

function LaptopHero() {
  return (
    <div className="min-h-[280px] flex flex-col gap-2 px-1">
      <div className="inline-flex items-center gap-1 self-start bg-[#A855F7]/15 border border-[#A855F7]/30 rounded-full px-2 py-0.5 text-[8px] font-bold text-[#C084FC]">
        <Sparkles className="w-2 h-2" /> 5★ PREMIUM STUDIO
      </div>
      <div className="text-[14px] font-extrabold leading-tight text-white mt-1">
        Launch Your <span className="text-[#C084FC]">Business Website</span> in 48 Hours
      </div>
      <p className="text-[8px] text-[#C4B5FD] leading-snug">Premium SEO-ready websites starting ₹5,999 • Free domain, hosting & SSL.</p>
      <div className="flex gap-1.5 mt-1">
        <div className="btn-gradient text-[8px] font-bold text-white rounded-full px-2 py-1">View Pricing →</div>
        <div className="text-[8px] font-bold text-white border border-[#A855F7]/40 rounded-full px-2 py-1">Get Demo</div>
      </div>
      <div className="mt-2 grid grid-cols-3 gap-1">
        {[{n:'500+',l:'Sites'},{n:'4.9★',l:'Rating'},{n:'48hr',l:'Delivery'}].map(s => (
          <div key={s.l} className="bg-[#1E1135]/60 border border-[#A855F7]/20 rounded p-1">
            <div className="text-[10px] font-black text-white">{s.n}</div>
            <div className="text-[6px] text-[#C4B5FD]">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1">
        <div className="bg-[#7C3AED]/15 border border-[#A855F7]/25 rounded-lg p-1.5">
          <Crown className="w-3 h-3 text-[#C084FC]" />
          <div className="text-[8px] font-bold text-white mt-0.5">Free SSL</div>
        </div>
        <div className="bg-[#7C3AED]/15 border border-[#A855F7]/25 rounded-lg p-1.5">
          <Zap className="w-3 h-3 text-[#C084FC]" />
          <div className="text-[8px] font-bold text-white mt-0.5">Fast Delivery</div>
        </div>
      </div>
    </div>
  );
}

function LaptopServices() {
  const services = [
    { t: 'Web Dev', i: '💻' },
    { t: 'Ecommerce', i: '🛒' },
    { t: 'UI/UX', i: '🎨' },
    { t: 'SEO', i: '🔍' },
    { t: 'Logo', i: '✨' },
    { t: 'Ads', i: '📢' },
  ];
  return (
    <div className="min-h-[280px] flex flex-col gap-1.5 px-1">
      <div className="text-[8px] font-bold uppercase tracking-wider text-[#C084FC] text-center">What We Offer</div>
      <div className="text-[13px] font-extrabold text-white text-center leading-tight">Our <span className="text-[#C084FC]">Services</span></div>
      <div className="text-[7px] text-[#C4B5FD] text-center">End-to-end digital solutions to scale your business.</div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {services.map(s => (
          <div key={s.t} className="bg-[#1E1135]/60 border border-[#A855F7]/20 rounded-lg p-2 text-center">
            <div className="text-base leading-none">{s.i}</div>
            <div className="text-[8px] font-bold text-white mt-1">{s.t}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {[{t:'Award Winning',d:'500+ projects'},{t:'Global Clients',d:'30+ countries'}].map(s => (
          <div key={s.t} className="bg-[#1E1135]/60 border border-[#A855F7]/20 rounded-lg p-2">
            <div className="text-[9px] font-extrabold text-white">🏆 {s.t}</div>
            <div className="text-[7px] text-[#C4B5FD] mt-0.5">{s.d}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LaptopPricing() {
  const plans = [
    { name: 'Starter', price: '5,999', pop: false, f: ['5 Pages', 'Free SSL', '48hr'] },
    { name: 'Business', price: '7,999', pop: true,  f: ['7-10 Pages', 'Free Logo', 'CMS'] },
    { name: 'E-Com', price: '11,999', pop: false, f: ['Unlimited', 'Payments', 'Dashboard'] },
  ];
  return (
    <div className="min-h-[280px] flex flex-col gap-1.5 px-1">
      <div className="text-[8px] font-bold uppercase tracking-wider text-[#C084FC] text-center">Transparent Pricing</div>
      <div className="text-[13px] font-extrabold text-white text-center leading-tight">Pick Your <span className="text-[#C084FC]">Plan</span></div>
      <div className="mt-2 grid grid-cols-3 gap-1.5">
        {plans.map(p => (
          <div
            key={p.name}
            className={`rounded-lg p-1.5 ${p.pop ? 'border-[#C084FC] shadow-[0_4px_12px_rgba(168,85,247,0.5)]' : 'border-[#A855F7]/25'}`}
            style={{ border: '1px solid', background: p.pop ? 'linear-gradient(160deg,#2D1B5C,#1E1135)' : 'rgba(30,17,53,0.6)' }}
          >
            {p.pop && <div className="text-[6px] font-bold text-[#C084FC] uppercase">★ Popular</div>}
            <div className="text-[8px] font-bold text-white mt-0.5">{p.name}</div>
            <div className="text-[11px] font-black text-white mt-0.5">₹{p.price}</div>
            <div className="mt-1 space-y-0.5">
              {p.f.map(ff => (
                <div key={ff} className="flex items-center gap-0.5 text-[6px] text-[#DDD6FE]">
                  <CheckCircle2 className="w-1.5 h-1.5 text-[#C084FC]" /> {ff}
                </div>
              ))}
            </div>
            <div className={`mt-1.5 text-[6px] font-bold text-center rounded-full py-0.5 ${p.pop ? 'btn-gradient text-white' : 'bg-white/10 text-white'}`}>Get →</div>
          </div>
        ))}
      </div>
      <div className="mt-1.5 bg-[#1E1135]/60 border border-[#A855F7]/20 rounded p-2 text-center">
        <div className="text-[7px] text-[#C4B5FD]">All plans include</div>
        <div className="text-[8px] font-bold text-white">Free Domain • Hosting • SSL • Logo</div>
      </div>
    </div>
  );
}

function LaptopContact() {
  return (
    <div className="min-h-[280px] flex flex-col gap-1.5 px-1">
      <div className="text-[8px] font-bold uppercase tracking-wider text-[#C084FC] text-center">Get In Touch</div>
      <div className="text-[13px] font-extrabold text-white text-center leading-tight">Let’s <span className="text-[#C084FC]">Build</span> Together</div>
      <div className="text-[7px] text-[#C4B5FD] text-center">Free consultation • Reply in 1 hour</div>
      <div className="mt-2 bg-[#1E1135]/60 border border-[#A855F7]/20 rounded-lg p-2 space-y-1.5">
        <div className="bg-[#0A0118]/60 rounded text-[7px] text-[#C4B5FD] px-1.5 py-1">Your Name</div>
        <div className="bg-[#0A0118]/60 rounded text-[7px] text-[#C4B5FD] px-1.5 py-1">Phone Number</div>
        <div className="bg-[#0A0118]/60 rounded text-[7px] text-[#C4B5FD] px-1.5 py-1">Service Required ▾</div>
        <div className="bg-[#0A0118]/60 rounded text-[7px] text-[#C4B5FD] px-1.5 py-2">Your Message...</div>
        <div className="btn-gradient text-[8px] font-bold text-white rounded-full text-center py-1.5">Submit Enquiry →</div>
      </div>
      <div className="mt-1 grid grid-cols-3 gap-1">
        <div className="bg-[#1E1135]/60 border border-[#A855F7]/20 rounded p-1 text-center">
          <Phone className="w-2.5 h-2.5 text-[#C084FC] mx-auto" />
          <div className="text-[6px] text-white mt-0.5">Call</div>
        </div>
        <div className="bg-[#25D366]/20 border border-[#25D366]/40 rounded p-1 text-center">
          <Search className="w-2.5 h-2.5 text-[#25D366] mx-auto" />
          <div className="text-[6px] text-white mt-0.5">WhatsApp</div>
        </div>
        <div className="bg-[#1E1135]/60 border border-[#A855F7]/20 rounded p-1 text-center">
          <Mail className="w-2.5 h-2.5 text-[#C084FC] mx-auto" />
          <div className="text-[6px] text-white mt-0.5">Email</div>
        </div>
      </div>
    </div>
  );
}
