import { useEffect, useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import { waLink } from '../lib/utils';

export default function PromoBar() {
  const [closed, setClosed] = useState(false);
  const [t, setT] = useState({ h: 23, m: 59, s: 59 });

  useEffect(() => {
    const i = setInterval(() => {
      setT(prev => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);

  if (closed) return null;
  const pad = n => String(n).padStart(2, '0');

  return (
    <div className="relative z-[60] text-white" style={{ background: 'linear-gradient(90deg, #0A0118 0%, #2D1B5C 50%, #0A0118 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 text-xs sm:text-sm relative">
        <Sparkles className="w-4 h-4 text-[#C084FC] hidden sm:block animate-pulse" />
        <span className="font-medium">
          Launch Offer:{' '}
          <span className="glow-text font-extrabold">₹3000 OFF</span> on all One-Time Plans
        </span>
        <span className="hidden md:inline opacity-40">|</span>
        <span className="hidden md:inline-flex items-center gap-1.5">
          Ends in
          <span className="font-mono bg-white/10 border border-white/15 rounded px-2 py-0.5 tabular-nums text-[#E9D5FF]">
            {pad(t.h)}:{pad(t.m)}:{pad(t.s)}
          </span>
        </span>
        <a
          href={waLink('Hi, I want to claim the ₹3000 OFF launch offer.')}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-block ml-2 btn-gradient text-white font-semibold rounded-full px-3 py-1 text-xs transition-all"
        >
          Claim Now →
        </a>
        <button onClick={() => setClosed(true)} aria-label="Close" className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
