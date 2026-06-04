import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../mock';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-pad bg-[#0A0118] relative">
      <div className="orb drift-2" style={{ bottom: '10%', right: '5%', width: 350, height: 350, background: '#581C87', opacity: 0.25 }} />
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="section-title mt-4 glow-text-soft">
            Frequently Asked <span className="glow-text">Questions</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            Everything you may want to know before starting your website project with us.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-[#A855F7]/60 shadow-[0_15px_40px_rgba(168,85,247,0.2)]' : 'border-[#A855F7]/15 hover:border-[#A855F7]/35'
                }`}
                style={isOpen
                  ? { background: 'linear-gradient(160deg, #1E1135 0%, #14082A 100%)' }
                  : { background: 'rgba(30, 17, 53, 0.55)', backdropFilter: 'blur(10px)' }
                }
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full text-left flex items-center justify-between gap-4 px-5 md:px-6 py-5"
                >
                  <span className="font-bold text-sm md:text-base text-white pr-4">{f.q}</span>
                  <span className={`flex-none w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? 'btn-gradient text-white rotate-180' : 'bg-[#1E1135] border border-[#A855F7]/35 text-[#C084FC]'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60' : 'max-h-0'}`}>
                  <p className="px-5 md:px-6 pb-5 text-sm text-[#C4B5FD] leading-relaxed">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
