import { useState } from 'react';
import { TECHNOLOGIES } from '../mock';
import { Layers } from 'lucide-react';

export default function Technologies() {
  const [paused, setPaused] = useState(false);
  const half = Math.ceil(TECHNOLOGIES.length / 2);
  const row1 = [...TECHNOLOGIES.slice(0, half), ...TECHNOLOGIES.slice(0, half)];
  const row2 = [...TECHNOLOGIES.slice(half), ...TECHNOLOGIES.slice(half)];

  return (
    <section className="section-pad bg-[#0A0118] overflow-hidden relative">
      <div className="orb drift-1" style={{ top: '30%', right: '0%', width: 350, height: 350, background: '#581C87', opacity: 0.3 }} />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <Layers className="w-3.5 h-3.5" />
            Our Stack
          </span>
          <h2 className="section-title mt-4 glow-text-soft">
            Technologies <span className="glow-text">We Use</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            We build modern, fast, and scalable websites using trusted tools, frameworks, and platforms.
          </p>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0118] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0118] to-transparent z-10" />

        <div className="flex gap-5 animate-marquee w-max" style={{ animationPlayState: paused ? 'paused' : 'running' }}>
          {row1.map((t, i) => <TechCard key={`r1-${i}`} tech={t} />)}
        </div>
        <div
          className="mt-5 flex gap-5 animate-marquee-slow w-max"
          style={{ animationDirection: 'reverse', animationPlayState: paused ? 'paused' : 'running' }}
        >
          {row2.map((t, i) => <TechCard key={`r2-${i}`} tech={t} />)}
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
    <div className="tech-tile">
      <div className={`tech-logo-box ${stage === 2 ? 'fallback' : ''}`}>
        <img src={src} alt={tech.name} loading="lazy" onError={onError} />
        <span className="letter">{tech.letter}</span>
      </div>
      <div className="text-sm font-bold text-white">{tech.name}</div>
    </div>
  );
}
