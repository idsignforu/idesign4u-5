import { useState } from 'react';
import { ExternalLink, ArrowRight, Lock, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../mock';
import { Link } from 'react-router-dom';
import PerspectiveGrid from './PerspectiveGrid';

export default function Portfolio({ limit = null }) {
  const [filter, setFilter] = useState('All');
  const [page, setPage] = useState(1);

  const categories = ['All', 'Business', 'E-Commerce', 'Landing Page', 'Healthcare', 'Real Estate'];

  const filtered = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter(p => p.category === filter);
  const displayItems = limit ? filtered.slice(0, limit) : filtered;

  const PAGE_SIZE = 6;
  const totalPages = Math.max(1, Math.ceil(displayItems.length / PAGE_SIZE));
  const pageStart = (page - 1) * PAGE_SIZE;
  const visible = limit ? displayItems : displayItems.slice(pageStart, pageStart + PAGE_SIZE);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* 3D Perspective Grid Background */}
      <PerspectiveGrid gridSize={28} fadeRadius={75} />

      {/* Ambient Spotlight */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-aura-sky rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Our Portfolio
          </span>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mt-4">
            Recent Client <span className="text-gradient-blue">Websites</span>
          </h2>
          <p className="font-sans text-base text-muted max-w-2xl mt-4 leading-relaxed">
            Real websites delivered to real businesses in 48 hours — performance optimized, mobile responsive, and built to convert.
          </p>

          {/* Category Filters */}
          {!limit && (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => { setFilter(c); setPage(1); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    filter === c
                      ? 'bg-brand text-white shadow-xs'
                      : 'bg-black/5 text-muted hover:text-ink hover:bg-black/10'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((p, idx) => (
            <motion.a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass-panel rounded-3xl overflow-hidden border border-white/80 shadow-xs hover:shadow-card-blue transition-all flex flex-col justify-between"
            >
              {/* Browser Window Frame */}
              <div className="p-3 bg-slate-50 border-b border-black/5">
                <div className="h-6 bg-white rounded-lg px-2.5 flex items-center justify-between border border-black/5 text-[11px] text-muted">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[10px] text-muted">
                    <Lock className="w-2.5 h-2.5 text-emerald-500" /> {p.domain}
                  </div>
                  <div className="w-2" />
                </div>
                <div className="mt-3 aspect-[16/10] rounded-xl overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-xs font-bold text-ink flex items-center gap-1.5 shadow-md">
                      <span>Visit Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5 text-brand" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {p.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">{p.no}</span>
                </div>
                <h3 className="font-outfit font-extrabold text-xl text-ink group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-muted leading-relaxed mt-1.5 line-clamp-2">
                  {p.desc}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] font-semibold bg-slate-100 text-ink-soft rounded-md px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Pagination Control (Full Page Mode) */}
        {!limit && totalPages > 1 && (
          <div className="mt-12 flex items-center justify-center gap-2">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="w-9 h-9 rounded-full bg-slate-100 text-ink flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-9 h-9 rounded-full text-xs font-bold transition-all ${
                  page === i + 1
                    ? 'bg-brand text-white shadow-md'
                    : 'bg-slate-100 text-muted hover:text-ink'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="w-9 h-9 rounded-full bg-slate-100 text-ink flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-brand hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {limit && limit < PORTFOLIO.length && (
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="btn-primary-blue px-7 py-3.5 rounded-2xl font-bold text-sm inline-flex items-center gap-2 shadow-lg"
            >
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

