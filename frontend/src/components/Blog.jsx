import { useState, useMemo } from 'react';
import { Search, Calendar, Clock, ArrowRight, BookOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../mock';
import { Link } from 'react-router-dom';

export default function Blog({ limit = null }) {
  const [activeCat, setActiveCat] = useState('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [openPost, setOpenPost] = useState(null);

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter(p =>
      (activeCat === 'All' || p.category === activeCat) &&
      (query.trim() === '' || p.title.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase()))
    );
  }, [activeCat, query]);

  const displayPosts = limit ? filtered.slice(0, limit) : filtered;
  const PAGE_SIZE = 6;
  const totalPages = Math.max(1, Math.ceil(displayPosts.length / PAGE_SIZE));
  const pageStart = (page - 1) * PAGE_SIZE;
  const visiblePosts = limit ? displayPosts : displayPosts.slice(pageStart, pageStart + PAGE_SIZE);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Spotlight */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-aura-sky rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 relative">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-brand rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            Knowledge Base (30 Articles)
          </span>
          <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tight mt-4">
            Insights, Guides & <span className="text-gradient-blue">SEO Tips</span>
          </h2>
          <p className="font-sans text-base text-muted max-w-2xl mt-4 leading-relaxed">
            Proven strategies to help your business get found on Google, convert visitors into customers, and scale online.
          </p>
        </div>

        {!limit && (
          <>
            {/* Search Input */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-3 focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20 transition-all shadow-xs">
                <Search className="w-4 h-4 text-brand" />
                <input
                  type="text"
                  placeholder="Search articles (e.g. SEO, Pricing, Speed)..."
                  value={query}
                  onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                  className="flex-1 bg-transparent outline-none text-sm text-ink placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {BLOG_CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => { setActiveCat(c); setPage(1); }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    activeCat === c
                      ? 'bg-brand text-white shadow-xs'
                      : 'bg-slate-100 text-muted hover:text-ink hover:bg-slate-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              onClick={() => setOpenPost(p)}
              className="group glass-panel rounded-3xl overflow-hidden border border-white/80 shadow-xs hover:shadow-card-blue transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-brand shadow-xs">
                    {p.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-muted mb-2">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-brand" /> {p.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-brand" /> {p.readTime}</span>
                  </div>
                  <h3 className="font-outfit font-extrabold text-lg text-ink group-hover:text-brand transition-colors line-clamp-2">
                    {p.title}
                  </h3>
                  <p className="font-sans text-xs text-muted leading-relaxed mt-2 line-clamp-2">
                    {p.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center justify-between text-xs font-bold text-brand">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination (Full Page View) */}
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

        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="btn-primary-blue px-7 py-3.5 rounded-2xl font-bold text-sm inline-flex items-center gap-2 shadow-lg"
            >
              <span>Explore All 30 Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {openPost && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md"
            onClick={() => setOpenPost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setOpenPost(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/5 text-ink flex items-center justify-center hover:bg-black/10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="aspect-[16/8] rounded-2xl overflow-hidden mb-6">
                <img src={openPost.image} alt={openPost.title} className="w-full h-full object-cover" />
              </div>

              <div className="flex items-center gap-3 text-xs text-muted mb-3">
                <span className="bg-blue-50 border border-blue-100 text-brand px-3 py-1 rounded-full font-bold">
                  {openPost.category}
                </span>
                <span>{openPost.date}</span>
                <span>•</span>
                <span>{openPost.readTime}</span>
              </div>

              <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl text-ink leading-snug">
                {openPost.title}
              </h3>

              <p className="font-sans text-sm text-muted leading-relaxed mt-4">
                {openPost.desc}
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-ink-soft leading-relaxed">
                <strong className="font-bold text-ink">Key Takeaway for Business Owners:</strong> Websites optimized with proper heading structure, fast loading times, and clear WhatsApp CTAs generate up to 300% more leads. Reach out to iDesign4U to implement these best practices on your site.
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
                <Link
                  to="/contact"
                  onClick={() => setOpenPost(null)}
                  className="btn-primary-blue px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 shadow-md"
                >
                  <span>Discuss Your Website Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

