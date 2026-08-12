import { useState, useEffect } from 'react';
import { ExternalLink, ArrowRight, Lock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO } from '../mock';

const usePageSize = () => {
  const get = () => (typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches ? 4 : 10);
  const [size, setSize] = useState(get);
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = () => setSize(get());
    mql.addEventListener?.('change', onChange);
    return () => mql.removeEventListener?.('change', onChange);
  }, []);
  return size;
};

export default function Portfolio() {
  const [page, setPage] = useState(1);
  const PAGE_SIZE = usePageSize();
  const totalPages = Math.max(1, Math.ceil(PORTFOLIO.length / PAGE_SIZE));
  // Clamp current page when PAGE_SIZE changes (e.g., resize)
  useEffect(() => { if (page > totalPages) setPage(1); }, [totalPages, page]);
  const pageStart = (page - 1) * PAGE_SIZE;
  const visible = PORTFOLIO.slice(pageStart, pageStart + PAGE_SIZE);

  const goPage = (n) => {
    setPage(n);
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="portfolio" className="section-pad bg-[#0A0118] relative">
      <div className="orb drift-2" style={{ top: '5%', left: '50%', width: 500, height: 500, background: '#7C3AED', opacity: 0.12, transform: 'translateX(-50%)' }} />
      <div className="absolute inset-0 bg-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Our Work
          </span>
          <h2 className="section-title mt-4 max-w-3xl glow-text-soft">
            Selected <span className="glow-text">Work</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            Each project is crafted with obsessive attention to detail — performance optimized, pixel perfect, and built to convert.
          </p>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl">
            {[
              { v: '7+', l: 'Live Projects' },
              { v: '100%', l: 'Client Satisfaction' },
              { v: '5★', l: 'Avg. Rating' },
              { v: '30d', l: 'Avg. Delivery' },
            ].map((s) => (
              <div key={s.l} className="bg-[#1E1135]/70 border border-[#A855F7]/25 rounded-2xl px-3 py-2.5">
                <div className="text-lg md:text-xl font-extrabold glow-text">{s.v}</div>
                <div className="text-[10px] md:text-xs text-[#C4B5FD]">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
          {visible.map((p) => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="group relative card-lift bg-card-dark rounded-3xl overflow-hidden block"
            >
              {/* Device monitor mockup — shows site like a real desktop monitor with stand */}
              <div className="relative px-3 pt-4 md:px-4 md:pt-5 pb-2">
                <div className="device-monitor relative">
                  <div className="device-bar">
                    <span className="dot" style={{ background: '#FF5F57' }} />
                    <span className="dot" style={{ background: '#FFBD2E' }} />
                    <span className="dot" style={{ background: '#28C940' }} />
                    <div className="url-pill">
                      <Lock className="w-2.5 h-2.5" /> {p.domain}
                    </div>
                  </div>
                  <div className="device-screen relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 text-3xl font-black text-white/20">
                      {p.no}
                    </div>
                  </div>
                </div>
                <div className="device-stand" />
                <div className="device-base" />
              </div>
              {/* Content */}
              <div className="px-3 md:px-5 pt-2 pb-3 md:pb-5">
                <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#C084FC]">{p.category}</div>
                <h3 className="mt-2 text-sm md:text-base font-extrabold text-white group-hover:text-[#E9D5FF] transition-colors leading-tight">{p.title}</h3>
                <p className="hidden mt-2 text-xs text-[#C4B5FD] leading-relaxed line-clamp-3">{p.desc}</p>
                <div className="mt-3 hidden md:flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] font-bold bg-[#A855F7]/15 border border-[#A855F7]/30 text-[#C084FC] rounded-full px-2 py-0.5">{t}</span>
                  ))}
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#C084FC] group-hover:text-[#E9D5FF] transition-colors">
                  View <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => goPage(Math.max(1, page - 1))}
              disabled={page === 1}
              data-testid="portfolio-prev"
              className="w-10 h-10 rounded-full bg-[#1E1135] border border-[#A855F7]/25 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#A855F7]/15 transition-all"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const isActive = n === page;
              return (
                <button
                  key={n}
                  onClick={() => goPage(n)}
                  data-testid={`portfolio-page-${n}`}
                  className={`min-w-10 h-10 px-3 rounded-full text-sm font-bold transition-all ${
                    isActive
                      ? 'btn-gradient text-white shadow-[0_8px_20px_rgba(168,85,247,0.4)]'
                      : 'bg-[#1E1135] border border-[#A855F7]/25 text-[#C4B5FD] hover:text-white hover:border-[#A855F7]/50'
                  }`}
                >
                  {n}
                </button>
              );
            })}
            <button
              onClick={() => goPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              data-testid="portfolio-next"
              className="w-10 h-10 rounded-full bg-[#1E1135] border border-[#A855F7]/25 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#A855F7]/15 transition-all"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="mt-14 text-center">
          <p className="text-sm text-[#C4B5FD] uppercase tracking-[0.2em] font-bold mb-3">Ready to join our portfolio?</p>
          <h3 className="text-2xl md:text-4xl font-extrabold glow-text-soft">
            Let’s build something <span className="glow-text">extraordinary</span>
          </h3>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-2 btn-gradient text-white font-bold rounded-full px-7 py-4"
          >
            Start Your Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
