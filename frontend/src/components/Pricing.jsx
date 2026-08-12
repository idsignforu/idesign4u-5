import { useState } from 'react';
import { Check, Crown, Sparkles, ArrowRight, X, MessageCircle, Info, ShieldCheck } from 'lucide-react';
import * as L from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRICING, CUSTOM_QUOTE_FEATURES } from '../mock';
import { formatINR, waLink } from '../lib/utils';
import PerspectiveGrid from './PerspectiveGrid';

export default function Pricing() {
  const [payMode, setPayMode] = useState('full'); // 'full' | 'installments'
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 sm:px-12 lg:px-20 bg-white text-ink relative overflow-hidden font-sans">
      {/* 3D Perspective Grid Background */}
      <PerspectiveGrid gridSize={28} fadeRadius={75} />

      {/* Soft Ambient Mesh Glows */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-auroraDrift" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-auroraDrift" style={{ animationDelay: '-6s' }} />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            <Sparkles className="w-4 h-4" />
            TRANSPARENT PRICING • NO HIDDEN FEES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5 tracking-tight font-outfit text-ink">
            Plans That Scale Your <span className="text-gradient-blue">Business</span>
          </h2>
          <p className="text-muted text-base sm:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
            Domain, cloud hosting, SSL certificate & logo design included in every plan. Pay in full or split into 2-3 easy installments.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center gap-4 bg-slate-100/80 p-2 rounded-full border border-black/5">
            <span className={`text-sm sm:text-base font-semibold px-4 py-1.5 rounded-full transition-colors cursor-pointer ${payMode === 'full' ? 'bg-white text-ink shadow-xs' : 'text-muted'}`} onClick={() => setPayMode('full')}>
              Pay in Full (10% Discount)
            </span>
            
            <button
              role="switch"
              aria-checked={payMode === 'installments'}
              onClick={() => setPayMode(payMode === 'full' ? 'installments' : 'full')}
              className="w-16 h-9 rounded-full p-1 bg-slate-200 relative transition-all duration-300 focus:outline-none"
            >
              <div
                className={`w-7 h-7 rounded-full bg-brand shadow-md transition-transform duration-300 ease-out ${
                  payMode === 'installments' ? 'translate-x-7' : 'translate-x-0'
                }`}
              />
            </button>

            <span className={`text-sm sm:text-base font-semibold px-4 py-1.5 rounded-full transition-colors cursor-pointer ${payMode === 'installments' ? 'bg-white text-ink shadow-xs' : 'text-muted'}`} onClick={() => setPayMode('installments')}>
              Easy Installments (2-3 Parts)
            </span>
          </div>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING.map((p) => {
            const isFeatured = p.name === 'Business Website';

            return (
              <div
                key={p.id}
                className={`flex flex-col h-full relative transition-all duration-400 ${
                  isFeatured ? 'lg:-translate-y-4 z-20' : 'z-10'
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-4 inset-x-0 flex justify-center z-30 pointer-events-none">
                    <span className="bg-gradient-to-r from-brand to-blue-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full px-5 py-1.5 shadow-md flex items-center gap-1.5">
                      <Crown className="w-4 h-4" /> AI RECOMMENDED • MOST POPULAR
                    </span>
                  </div>
                )}

                <motion.div
                  whileHover={{ y: -8 }}
                  className={`rounded-3xl p-8 lg:p-10 flex flex-col justify-between h-full relative overflow-hidden backdrop-blur-2xl transition-all duration-400 border ${
                    isFeatured
                      ? 'bg-white border-brand shadow-card-blue ring-2 ring-brand/20'
                      : 'bg-white/80 border-black/5 hover:border-brand/40 shadow-xs'
                  }`}
                >
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-ink font-outfit">{p.name}</h3>
                    <p className="text-muted text-sm sm:text-base mt-2 font-medium h-12">{p.tagline}</p>

                    <div className="mt-6 flex items-center gap-3">
                      <span className="text-sm line-through text-muted">{formatINR(p.strike)}</span>
                      <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-50 text-emerald-600 border border-emerald-200">
                        Save ₹{p.strike - p.price}
                      </span>
                    </div>

                    <div className="mt-2 min-h-[60px] flex items-baseline gap-2">
                      <AnimatePresence mode="wait">
                        {payMode === 'full' ? (
                          <motion.div
                            key="full"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-baseline gap-2"
                          >
                            <span className="text-4xl lg:text-5xl font-extrabold tracking-tight text-ink font-outfit">
                              {formatINR(p.price)}
                            </span>
                            <span className="text-muted text-sm font-medium">one-time</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="inst"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-baseline gap-2"
                          >
                            <span className="text-3xl lg:text-4xl font-extrabold tracking-tight text-brand font-outfit">
                              {formatINR(Math.round(p.price / 3))}
                            </span>
                            <span className="text-muted text-sm font-medium">× 3 installments</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <ul className="mt-8 space-y-4 flex-grow">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-700">
                          <span className={`w-5 h-5 rounded-full flex items-center justify-center flex-none mt-0.5 ${
                            isFeatured ? 'bg-blue-100 text-brand' : 'bg-slate-100 text-slate-600'
                          }`}>
                            <Check className="w-3.5 h-3.5 stroke-[3px]" />
                          </span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 pt-6 border-t border-slate-100">
                    <a
                      href={waLink(`Hi, I am interested in the ${p.name} plan (${formatINR(p.price)}). Please share details.`)}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-4 rounded-2xl font-bold tracking-wide text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
                        isFeatured
                          ? 'btn-primary-blue shadow-lg hover:scale-[1.02]'
                          : 'bg-slate-100 hover:bg-slate-200 text-ink border border-slate-200'
                      }`}
                    >
                      <span>{p.cta}</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Commercial Scope & Product Upload Policy Note */}
        <div className="mt-12 bg-slate-50/90 border border-slate-200/80 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xs">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 text-brand border border-blue-100 flex items-center justify-center flex-none mt-0.5 shadow-xs">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                <strong className="text-ink font-semibold">Important Package Scope Note:</strong> Package pricing covers the website features and services specifically listed above. Bulk product catalogue upload, professional business email, transactional email/SMS services and other third-party provider or usage charges are billed separately where applicable. Domain & hosting renewal applies yearly.
              </p>
              <p>
                <strong className="text-ink font-semibold">Product Upload Policy (Pro E-Commerce):</strong> The e-commerce website includes a full admin panel that allows the client to add and manage products without a fixed product-count restriction. A limited number of products will be uploaded by iDesign4u for the initial website launch/setup. Bulk uploading of the client's complete product catalogue is a separate paid service based on catalogue size, data format and manual processing requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Custom Quote Estimator Banner */}
        <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="text-xs font-bold text-brand uppercase tracking-wider">Tailored Custom Websites</span>
            <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl text-ink mt-1">Need a Custom Web Application or Portal?</h3>
            <p className="text-sm sm:text-base text-muted mt-2 max-w-2xl">
              Calculate a personalized quote based on your required features, pages, integrations, and timeline.
            </p>
          </div>
          <button
            onClick={() => setQuoteOpen(true)}
            className="px-8 py-4 rounded-2xl font-bold text-sm sm:text-base btn-primary-blue shadow-lg hover:scale-105 transition-all flex-none flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Calculate Custom Quote</span>
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

  const pick = (id, v) => setAnswers((a) => ({ ...a, [id]: v }));

  const submit = () => {
    let msg = `Hi, I want a CUSTOM QUOTE for my website project.\n\n`;
    if (name) msg += `Name: ${name}\n`;
    if (phone) msg += `Phone: ${phone}\n\n`;
    msg += `*Requirements:*\n`;
    CUSTOM_QUOTE_FEATURES.forEach((f) => {
      if (answers[f.id]) msg += `• ${f.label}: ${answers[f.id]}\n`;
    });
    if (notes) msg += `\nAdditional Notes:\n${notes}\n`;
    msg += `\nPlease share a custom quote. Thanks!`;
    window.open(waLink(msg), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-ink"
      >
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand">Custom Estimator</span>
            <h3 className="font-outfit font-extrabold text-2xl text-ink">Design Your Project Quote</h3>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-slate-100 text-ink hover:bg-slate-200 flex items-center justify-center">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Your Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rahul Sharma"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-brand"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-700 mb-1 block">Phone / WhatsApp</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 92814 10305"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-brand"
              />
            </div>
          </div>

          {CUSTOM_QUOTE_FEATURES.map((f) => {
            const Icon = L[f.icon] || L.Circle;
            return (
              <div key={f.id} className="pt-2">
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-4 h-4 text-brand" />
                  <label className="text-xs font-bold text-ink">{f.label}</label>
                </div>
                <div className="flex flex-wrap gap-2">
                  {f.options.map((opt) => {
                    const active = answers[f.id] === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => pick(f.id, opt)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                          active
                            ? 'bg-brand text-white border-brand shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
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

          <div className="pt-2">
            <label className="text-xs font-bold text-ink block mb-1">Additional Project Details</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              placeholder="Tell us about your business, reference websites, or special requirements..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-brand resize-none"
            />
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">Directly connects to our WhatsApp team for an instant quote.</p>
          <button
            onClick={submit}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm btn-primary-blue flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Request WhatsApp Quote</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
