import { useState } from 'react';
import { Check, Crown, Sparkles, ArrowRight, X, MessageCircle } from 'lucide-react';
import * as L from 'lucide-react';
import { PRICING, CUSTOM_QUOTE_FEATURES } from '../mock';
import { formatINR, waLink } from '../lib/utils';

export default function Pricing() {
  const [billing, setBilling] = useState('onetime');
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section id="pricing" className="section-pad bg-dark-radial relative overflow-hidden">
      <div className="orb drift-1" style={{ top: '-10%', right: '-5%', width: 500, height: 500, background: '#7C3AED', opacity: 0.18 }} />
      <div className="orb drift-2" style={{ bottom: '-15%', left: '-10%', width: 500, height: 500, background: '#A855F7', opacity: 0.15 }} />
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing
          </span>
          <h2 className="section-title mt-4 max-w-3xl glow-text-soft">
            Business Website Design Pricing{' '}
            <span className="glow-text">(No Hidden Charges)</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            India’s most affordable premium web design plans. Choose what fits your business — every plan packed with bonus features.
          </p>

          <div className="mt-7 inline-flex bg-[#1E1135] rounded-full p-1 border border-[#A855F7]/25">
            <button
              onClick={() => setBilling('onetime')}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                billing === 'onetime' ? 'btn-gradient text-white' : 'text-[#C4B5FD]'
              }`}
            >
              One-Time Plans
            </button>
            <button
              onClick={() => { setBilling('custom'); setQuoteOpen(true); }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                billing === 'custom' ? 'btn-gradient text-white' : 'text-[#C4B5FD]'
              }`}
            >
              Custom Quote
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-5">
          {PRICING.map((p) => {
            const popular = p.badge === 'Most Popular';
            return (
              <div
                key={p.id}
                className={`relative rounded-3xl p-7 md:p-8 transition-all flex flex-col group ${
                  popular
                    ? 'shadow-[0_30px_60px_-15px_rgba(168,85,247,0.55)] lg:scale-[1.04] z-10'
                    : 'bg-card-dark hover:border-[#A855F7]/45 card-lift'
                }`}
                style={popular ? {
                  background: 'linear-gradient(160deg, #2D1B5C 0%, #1E1135 50%, #0A0118 100%)',
                  border: '1px solid rgba(192, 132, 252, 0.5)',
                } : {}}
              >
                {popular && <div className="absolute -top-px left-12 right-12 h-px bg-gradient-to-r from-transparent via-[#C084FC] to-transparent" />}
                {p.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase flex items-center gap-1 ${
                    popular ? 'btn-gradient text-white' : 'bg-[#A855F7]/20 text-[#C084FC] border border-[#A855F7]/40'
                  }`}>
                    <Crown className="w-3 h-3" /> {p.badge}
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-extrabold text-white">{p.name}</h3>
                  <p className="text-sm mt-1 text-[#C4B5FD]">{p.tagline}</p>
                </div>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-sm line-through text-white/40">{formatINR(p.strike)}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded btn-gradient text-white">
                    ₹{p.strike - p.price} OFF
                  </span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className={`text-4xl md:text-5xl font-black ${popular ? 'glow-text' : 'text-white'}`}>{formatINR(p.price)}</span>
                  <span className="text-xs text-[#C4B5FD]">one-time</span>
                </div>
                <p className="text-[11px] mt-1 text-white/40">Domain & hosting renewal applies yearly</p>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="flex-none mt-0.5 w-5 h-5 rounded-full bg-[#A855F7]/20 border border-[#A855F7]/40 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#C084FC]" strokeWidth={3} />
                      </span>
                      <span className="text-[#DDD6FE]">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hi, I am interested in the ${p.name} plan (${formatINR(p.price)}). Please share more details.`)}
                  target="_blank" rel="noreferrer"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-bold text-sm transition-all hover:scale-[1.02] ${
                    popular ? 'btn-gradient text-white' : 'bg-white/5 border border-[#A855F7]/40 text-white hover:bg-[#A855F7]/15'
                  }`}
                >
                  {p.cta} <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-center mt-3 text-white/40">Free demo on WhatsApp • No advance fee</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#C4B5FD]">Need something custom or have specific requirements?</p>
          <button
            onClick={() => setQuoteOpen(true)}
            className="mt-4 inline-flex items-center gap-2 bg-white/5 border border-[#A855F7]/40 text-white font-bold rounded-full px-6 py-3 text-sm hover:bg-[#A855F7]/15 transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#C084FC]" /> Get a Custom Quote
          </button>
        </div>
      </div>

      {quoteOpen && <CustomQuoteModal onClose={() => setQuoteOpen(false)} />}
    </section>
  );
}

function CustomQuoteModal({ onClose }) {
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');

  const pick = (id, v) => setAnswers(a => ({ ...a, [id]: v }));

  const submit = () => {
    let msg = `Hi, I want a CUSTOM QUOTE for my website.\n\n`;
    if (name) msg += `Name: ${name}\n`;
    if (phone) msg += `Phone: ${phone}\n\n`;
    msg += `*Requirements:*\n`;
    CUSTOM_QUOTE_FEATURES.forEach(f => {
      if (answers[f.id]) msg += `• ${f.label}: ${answers[f.id]}\n`;
    });
    if (notes) msg += `\nAdditional Notes:\n${notes}\n`;
    msg += `\nPlease share a custom quote. Thanks!`;
    window.open(waLink(msg), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up" style={{ background: 'rgba(10, 1, 24, 0.85)', backdropFilter: 'blur(8px)' }}>
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[#A855F7]/40 shadow-[0_30px_80px_rgba(168,85,247,0.4)]" style={{ background: 'linear-gradient(160deg, #1E1135 0%, #0A0118 100%)' }}>
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 px-6 py-4 border-b border-[#A855F7]/20" style={{ background: 'linear-gradient(180deg, #1E1135 0%, rgba(30,17,53,0.95) 100%)', backdropFilter: 'blur(10px)' }}>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#C084FC] font-extrabold">Custom Quote</div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white">Tell us about your project</h3>
          </div>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-[#0A0118] border border-[#A855F7]/30 text-white flex items-center justify-center hover:bg-[#A855F7]/15">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="grid sm:grid-cols-2 gap-3">
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="bg-[#0A0118]/60 border border-[#A855F7]/25 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-[#C4B5FD]/50 outline-none focus:border-[#A855F7]/70 focus:ring-2 focus:ring-[#A855F7]/30" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" className="bg-[#0A0118]/60 border border-[#A855F7]/25 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-[#C4B5FD]/50 outline-none focus:border-[#A855F7]/70 focus:ring-2 focus:ring-[#A855F7]/30" />
          </div>

          {CUSTOM_QUOTE_FEATURES.map((f) => {
            const Icon = L[f.icon] || L.Circle;
            return (
              <div key={f.id}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-[#C084FC]" />
                  <label className="text-sm font-bold text-white">{f.label}</label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {f.options.map((opt) => {
                    const active = answers[f.id] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => pick(f.id, opt)}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all border ${
                          active
                            ? 'btn-gradient text-white border-transparent'
                            : 'bg-[#0A0118]/60 border-[#A855F7]/25 text-[#C4B5FD] hover:border-[#A855F7]/50 hover:text-white'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div>
            <label className="text-sm font-bold text-white">Anything else we should know?</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} placeholder="Specific features, integrations, design preferences, references..." className="mt-2 w-full bg-[#0A0118]/60 border border-[#A855F7]/25 rounded-2xl px-4 py-3 text-sm text-white placeholder:text-[#C4B5FD]/50 outline-none focus:border-[#A855F7]/70 focus:ring-2 focus:ring-[#A855F7]/30 resize-none" />
          </div>
        </div>

        <div className="sticky bottom-0 px-6 py-4 border-t border-[#A855F7]/20 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ background: 'linear-gradient(0deg, #1E1135 0%, rgba(30,17,53,0.95) 100%)' }}>
          <p className="text-[11px] text-[#C4B5FD]/70">We’ll send your requirements to WhatsApp for a personalized quote.</p>
          <button onClick={submit} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-gradient text-white font-bold rounded-full px-6 py-3 text-sm">
            <MessageCircle className="w-4 h-4" /> Send to WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
