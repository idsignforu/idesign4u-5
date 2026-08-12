import { useState } from 'react';
import { TECHNOLOGIES } from '../mock';
import { Layers } from 'lucide-react';

export default function Technologies() {
  const [paused, setPaused] = useState(false);
  const half = Math.ceil(TECHNOLOGIES.length / 2);
  const row1 = [...TECHNOLOGIES.slice(0, half), ...TECHNOLOGIES.slice(0, half)];
  const row2 = [...TECHNOLOGIES.slice(half), ...TECHNOLOGIES.slice(half)];

  return (
    <section className="py-16 bg-slate-50/70 border-t border-black/5 overflow-hidden relative">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 mb-8">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            Modern Tech Stack
          </span>
          <h2 className="font-outfit font-extrabold text-2xl sm:text-3xl text-ink tracking-tight mt-3">
            Technologies & Tools <span className="text-gradient-blue">We Master</span>
          </h2>
        </div>
      </div>

      <div
        className="relative marquee-container overflow-hidden w-full select-none"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex gap-4 animate-marqueeLeft w-max hover:[animation-play-state:paused] mb-4">
          {row1.map((t, i) => (
            <TechCard key={`r1-${i}`} tech={t} />
          ))}
        </div>
        <div className="flex gap-4 animate-marqueeRight w-max hover:[animation-play-state:paused]">
          {row2.map((t, i) => (
            <TechCard key={`r2-${i}`} tech={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech }) {
  const [src, setSrc] = useState(`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`);
  const [stage, setStage] = useState(0);

  const onError = () => {
    if (stage === 0 && tech.fallbackUrl) {
      setSrc(tech.fallbackUrl);
      setStage(1);
    } else {
      setStage(2);
    }
  };

  return (
    <div className="px-4 py-2.5 rounded-2xl glass-panel border border-white flex items-center gap-3 shadow-xs hover:border-brand/40 transition-colors">
      <div className="w-6 h-6 flex items-center justify-center font-bold text-xs text-brand">
        {stage !== 2 ? (
          <img src={src} alt={tech.name} className="w-5 h-5 object-contain" loading="lazy" onError={onError} />
        ) : (
          <span>{tech.letter}</span>
        )}
      </div>
      <span className="font-sans font-semibold text-xs text-ink-soft whitespace-nowrap">{tech.name}</span>
    </div>
  );
}

