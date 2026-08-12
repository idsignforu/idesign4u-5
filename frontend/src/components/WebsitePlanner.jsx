import { useState } from 'react';
import * as L from 'lucide-react';
import { BUSINESS_TYPES, PRIMARY_GOALS, PAGE_OPTIONS, TIMELINES, PRICING } from '../mock';
import { formatINR, waLink } from '../lib/utils';

export default function WebsitePlanner() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ business: '', customBusiness: '', goal: '', whatsapp: true, seo: true, pages: '', timeline: '' });
  const totalSteps = 4;

  // Progress = number of completed steps (not current step). Starts at 0%.
  const completedSteps = [
    data.business || data.customBusiness.trim().length > 1,
    data.goal !== '',
    data.pages !== '',
    data.timeline !== '',
  ].filter(Boolean).length;
  const progress = (completedSteps / totalSteps) * 100;

  const update = (k, v) => setData(d => ({ ...d, [k]: v }));

  const recommend = () => {
    if (data.business === 'ecom' || data.goal === 'sell' || data.pages === 'large') return PRICING[2];
    if (data.pages === 'medium' || data.goal === 'bookings' || data.goal === 'brand') return PRICING[1];
    return PRICING[0];
  };

  const reset = () => {
    setStep(1);
    setData({ business: '', customBusiness: '', goal: '', whatsapp: true, seo: true, pages: '', timeline: '' });
  };

  const canContinue = () => {
    if (step === 1) return data.business || data.customBusiness.trim().length > 1;
    if (step === 2) return data.goal !== '';
    if (step === 3) return data.pages !== '';
    if (step === 4) return data.timeline !== '';
    return true;
  };

  const businessLabel = () => {
    if (data.customBusiness && !data.business) return data.customBusiness;
    const t = BUSINESS_TYPES.find(b => b.id === data.business);
    return t ? t.label : data.customBusiness || '—';
  };

  return (
    <section id="planner" className="section-pad bg-dark-radial relative">
      <div className="orb drift-2" style={{ top: '0%', right: '0%', width: 400, height: 400, background: '#A855F7', opacity: 0.15 }} />
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <L.Compass className="w-3.5 h-3.5" />
            Website Planner
          </span>
          <h2 className="section-title mt-4 max-w-3xl glow-text-soft">
            Find the Right Website Plan for <span className="glow-text">Your Business</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            Answer a few quick questions and get the best-fit plan instantly.
          </p>
        </div>

        <div className="bg-card-dark rounded-3xl shadow-[0_30px_80px_-20px_rgba(168,85,247,0.4)] border border-[#A855F7]/30 overflow-hidden">
          {step <= totalSteps && (
            <div className="px-6 md:px-10 pt-8">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-white">Step {step} of {totalSteps}</span>
                <span className="font-bold text-[#C084FC]">{Math.round(progress)}%</span>
              </div>
              <div className="mt-2 h-2 bg-[#0A0118] rounded-full overflow-hidden border border-[#A855F7]/20">
                <div className="h-full btn-gradient transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>
          )}

          <div className="p-6 md:p-10">
            {step === 1 && (
              <div className="animate-fade-up">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">What type of business do you run?</h3>
                <p className="mt-2 text-[#C4B5FD] text-sm">Choose a category below, or type your own business type.</p>
                <div className="mt-6">
                  <label className="text-xs font-bold tracking-wider text-[#C4B5FD] uppercase">Business Name / Type</label>
                  <div className="mt-2 flex items-center gap-2 bg-[#0A0118]/60 border border-[#A855F7]/25 rounded-2xl px-4 py-3.5 focus-within:border-[#A855F7]/70 transition-all">
                    <L.Search className="w-4 h-4 text-[#C4B5FD]" />
                    <input type="text" placeholder="e.g. Salon, Doctor, Online Store..." value={data.customBusiness}
                      onChange={(e) => { update('customBusiness', e.target.value); update('business', ''); }}
                      className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-[#C4B5FD]/50" />
                  </div>
                  {(data.business || data.customBusiness) && (
                    <div className="mt-3 inline-flex items-center gap-2 bg-[#A855F7]/15 border border-[#A855F7]/40 text-[#E9D5FF] rounded-full px-3 py-1.5 text-xs font-bold">
                      <L.Check className="w-3.5 h-3.5" /> Selected: {businessLabel()}
                    </div>
                  )}
                </div>
                <div className="mt-6 grid grid-cols-3 md:grid-cols-4 gap-3">
                  {BUSINESS_TYPES.map((b) => {
                    const Icon = L[b.icon] || L.Briefcase;
                    const active = data.business === b.id;
                    return (
                      <button key={b.id}
                        onClick={() => { update('business', b.id); update('customBusiness', ''); }}
                        className={`text-left p-4 rounded-2xl border transition-all ${
                          active ? 'border-[#A855F7] bg-[#A855F7]/15 shadow-[0_10px_30px_rgba(168,85,247,0.3)]' : 'border-[#A855F7]/20 bg-[#0A0118]/40 hover:border-[#A855F7]/50'
                        }`}>
                        <Icon className={`w-5 h-5 mb-2 ${active ? 'text-[#C084FC]' : 'text-[#C4B5FD]'}`} />
                        <div className="font-bold text-sm text-white">{b.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-up">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">What are your website goals?</h3>
                <p className="mt-2 text-[#C4B5FD] text-sm">Your answers help us tailor the right plan for your business.</p>
                <div className="mt-6">
                  <div className="text-xs font-bold tracking-wider text-[#C4B5FD] uppercase mb-3">Primary Goal</div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {PRIMARY_GOALS.map((g) => {
                      const Icon = L[g.icon] || L.Target;
                      const active = data.goal === g.id;
                      return (
                        <button key={g.id} onClick={() => update('goal', g.id)}
                          className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left ${
                            active ? 'border-[#A855F7] bg-[#A855F7]/15' : 'border-[#A855F7]/20 bg-[#0A0118]/40 hover:border-[#A855F7]/50'
                          }`}>
                          <Icon className={`w-5 h-5 ${active ? 'text-[#C084FC]' : 'text-[#C4B5FD]'}`} />
                          <span className="font-bold text-sm text-white">{g.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <ToggleRow label="WhatsApp Integration?" value={data.whatsapp} onChange={(v) => update('whatsapp', v)} />
                  <ToggleRow label="Google SEO / Ranking?" value={data.seo} onChange={(v) => update('seo', v)} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-up">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">How many pages do you need?</h3>
                <p className="mt-2 text-[#C4B5FD] text-sm">This helps us recommend the right plan size for your website.</p>
                <div className="mt-6 grid sm:grid-cols-3 gap-3">
                  {PAGE_OPTIONS.map((p) => {
                    const active = data.pages === p.id;
                    return (
                      <button key={p.id} onClick={() => update('pages', p.id)}
                        className={`p-5 rounded-2xl border text-left transition-all ${
                          active ? 'border-[#A855F7] bg-[#A855F7]/15' : 'border-[#A855F7]/20 bg-[#0A0118]/40 hover:border-[#A855F7]/50'
                        }`}>
                        <div className="font-extrabold text-lg text-white">{p.label}</div>
                        <div className="text-xs text-[#C4B5FD] mt-1">{p.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="animate-fade-up">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">Budget & timeline</h3>
                <p className="mt-2 text-[#C4B5FD] text-sm">This helps us recommend the right package for your growth stage.</p>
                <div className="mt-6">
                  <div className="text-xs font-bold tracking-wider text-[#C4B5FD] uppercase mb-3">Timeline</div>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {TIMELINES.map((t) => {
                      const Icon = L[t.icon] || L.Clock;
                      const active = data.timeline === t.id;
                      return (
                        <button key={t.id} onClick={() => update('timeline', t.id)}
                          className={`flex items-center gap-3 p-4 rounded-2xl border transition-all text-left ${
                            active ? 'border-[#A855F7] bg-[#A855F7]/15' : 'border-[#A855F7]/20 bg-[#0A0118]/40 hover:border-[#A855F7]/50'
                          }`}>
                          <Icon className={`w-5 h-5 ${active ? 'text-[#C084FC]' : 'text-[#C4B5FD]'}`} />
                          <span className="font-bold text-sm text-white">{t.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {step === 5 && <ResultCard data={data} businessLabel={businessLabel()} plan={recommend()} onReset={reset} />}

            {step <= totalSteps && (
              <div className="mt-8 flex items-center justify-between">
                <button onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1}
                  className="text-sm font-bold text-[#C4B5FD] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1">
                  <L.ArrowLeft className="w-4 h-4" /> Back
                </button>
                <button onClick={() => setStep(step + 1)} disabled={!canContinue()}
                  className="inline-flex items-center gap-2 btn-gradient disabled:bg-none disabled:bg-[#1E1135] disabled:text-[#C4B5FD]/40 disabled:cursor-not-allowed text-white font-bold rounded-full px-6 py-3 text-sm transition-all">
                  {step === totalSteps ? 'Show My Plan' : 'Continue'} <L.ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToggleRow({ label, value, onChange }) {
  return (
    <div className="border border-[#A855F7]/20 bg-[#0A0118]/40 rounded-2xl p-4 flex items-center justify-between">
      <span className="font-bold text-sm text-white">{label}</span>
      <div className="flex gap-2">
        <button onClick={() => onChange(true)} className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${value ? 'btn-gradient text-white' : 'bg-[#1E1135] text-[#C4B5FD] border border-[#A855F7]/20'}`}>Yes</button>
        <button onClick={() => onChange(false)} className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${!value ? 'bg-white text-[#0A0118]' : 'bg-[#1E1135] text-[#C4B5FD] border border-[#A855F7]/20'}`}>No</button>
      </div>
    </div>
  );
}

function ResultCard({ data, businessLabel, plan, onReset }) {
  const goalLabel = PRIMARY_GOALS.find(g => g.id === data.goal)?.label || '—';
  const pageLabel = PAGE_OPTIONS.find(p => p.id === data.pages)?.label || '—';
  const timeLabel = TIMELINES.find(t => t.id === data.timeline)?.label || '—';

  const msg = `Hi, my recommended plan is *${plan.name}* (${formatINR(plan.price)}).

Business: ${businessLabel}
Goal: ${goalLabel}
Pages: ${pageLabel}
Timeline: ${timeLabel}

Please share more details.`;

  return (
    <div className="animate-fade-up">
      <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#C084FC] uppercase">
        <L.Sparkles className="w-3.5 h-3.5" /> Recommended Plan
      </div>
      <h3 className="mt-2 text-3xl font-extrabold text-white">{plan.name}</h3>
      <p className="mt-1 text-[#C4B5FD]">{plan.tagline}</p>
      <div className="mt-5 flex items-baseline gap-3">
        <span className="text-5xl font-black glow-text">{formatINR(plan.price)}</span>
        <span className="text-sm line-through text-[#C4B5FD]/50">{formatINR(plan.strike)}</span>
      </div>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Business Type', value: businessLabel },
          { label: 'Primary Goal', value: goalLabel },
          { label: 'Pages', value: pageLabel },
          { label: 'Timeline', value: timeLabel },
        ].map((s) => (
          <div key={s.label} className="bg-[#0A0118]/60 rounded-xl p-3 border border-[#A855F7]/25">
            <div className="text-[10px] uppercase tracking-wider text-[#C4B5FD] font-bold">{s.label}</div>
            <div className="font-bold text-sm text-white mt-0.5">{s.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <div className="text-xs font-bold uppercase tracking-wider text-[#C4B5FD] mb-3">What’s included</div>
        <ul className="grid sm:grid-cols-2 gap-2">
          {plan.features.slice(0, 8).map(f => (
            <li key={f} className="flex items-start gap-2 text-sm text-[#DDD6FE]">
              <L.CheckCircle2 className="w-4 h-4 text-[#C084FC] flex-none mt-0.5" /> {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href={waLink(msg)} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 btn-gradient text-white font-bold rounded-full px-6 py-3 text-sm">
          <L.MessageCircle className="w-4 h-4" /> Connect on WhatsApp
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 bg-white text-[#0A0118] font-bold rounded-full px-6 py-3 text-sm hover:bg-[#E9D5FF]">
          <L.Phone className="w-4 h-4" /> Speak with Us
        </a>
        <button onClick={onReset} className="inline-flex items-center gap-2 text-sm font-bold text-[#C4B5FD] hover:text-white px-4 py-3">
          <L.RotateCcw className="w-4 h-4" /> Start Over
        </button>
      </div>
    </div>
  );
}
