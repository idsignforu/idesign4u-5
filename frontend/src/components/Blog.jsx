import { useState, useMemo, useEffect } from 'react';
import { Search, Calendar, Clock, ArrowRight, BookOpen, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../mock';

const useBlogPageSize = () => {
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

export default function Blog() {
  const [activeCat, setActiveCat] = useState('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [openPost, setOpenPost] = useState(null);
  const PAGE_SIZE = useBlogPageSize();

  const filtered = useMemo(() => {
    return BLOG_POSTS.filter(p =>
      (activeCat === 'All' || p.category === activeCat) &&
      (query.trim() === '' || p.title.toLowerCase().includes(query.toLowerCase()) || p.desc.toLowerCase().includes(query.toLowerCase()))
    );
  }, [activeCat, query]);

  // Reset to page 1 when filter, search or page-size changes
  useEffect(() => { setPage(1); }, [activeCat, query, PAGE_SIZE]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageStart = (page - 1) * PAGE_SIZE;
  const visiblePosts = filtered.slice(pageStart, pageStart + PAGE_SIZE);

  const goPage = (n) => {
    setPage(n);
    const el = document.getElementById('blog');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="blog" className="section-pad bg-dark-radial relative">
      <div className="orb drift-1" style={{ top: '10%', right: '0%', width: 400, height: 400, background: '#A855F7', opacity: 0.15 }} />
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <BookOpen className="w-3.5 h-3.5" />
            Blog • 30+ Articles
          </span>
          <h2 className="section-title mt-4 glow-text-soft">
            Our <span className="glow-text">Blog</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            Tips, guides, and insights to help you build a successful online presence and rank #1 on Google.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-2 bg-[#1E1135]/80 backdrop-blur border border-[#A855F7]/30 rounded-full px-5 py-3.5 focus-within:border-[#A855F7]/70 focus-within:ring-2 focus-within:ring-[#A855F7]/25 transition-all">
            <Search className="w-4 h-4 text-[#C084FC]" />
            <input
              type="text"
              placeholder="Search articles..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-[#C4B5FD]/60"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {BLOG_CATEGORIES.map((c) => {
            const isActive = activeCat === c;
            return (
              <button
                key={c}
                onClick={() => setActiveCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  isActive
                    ? 'btn-gradient text-white shadow-[0_8px_20px_rgba(168,85,247,0.4)]'
                    : 'bg-[#1E1135] border border-[#A855F7]/25 text-[#C4B5FD] hover:border-[#A855F7]/50 hover:text-white'
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="mt-6 text-center text-sm text-[#C4B5FD]">
          Showing <span className="font-bold text-white">{filtered.length === 0 ? 0 : pageStart + 1}–{Math.min(pageStart + PAGE_SIZE, filtered.length)}</span> of <span className="font-bold text-white">{filtered.length}</span> article{filtered.length !== 1 && 's'}
        </div>

        {/* Posts grid */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {visiblePosts.length === 0 ? (
            <div className="col-span-full text-center text-[#C4B5FD] py-12">
              No articles found. Try a different search or category.
            </div>
          ) : visiblePosts.map((p) => (
            <article
              key={p.id}
              onClick={() => setOpenPost(p)}
              data-testid={`blog-card-${p.id}`}
              className="group card-lift bg-card-dark rounded-2xl overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-transparent to-transparent" />
              </div>
              <div className="p-3 md:p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="bg-[#A855F7]/15 border border-[#A855F7]/30 text-[#C084FC] rounded-full px-2 py-0.5 font-bold truncate">
                    {p.category}
                  </span>
                  <span className="hidden md:flex items-center gap-1 text-[#C4B5FD]">
                    <Clock className="w-3 h-3" /> {p.readTime}
                  </span>
                </div>
                <h3 className="mt-2 text-sm md:text-[15px] font-extrabold text-white group-hover:text-[#E9D5FF] transition-colors leading-snug line-clamp-3">
                  {p.title}
                </h3>
                {/* Description only on desktop, capped to 2 lines */}
                <p className="hidden md:block mt-2 text-xs text-[#C4B5FD] leading-relaxed line-clamp-2 flex-1">{p.desc}</p>
                <div className="mt-3 hidden md:flex items-center justify-between pt-3 border-t border-[#A855F7]/15">
                  <span className="flex items-center gap-1 text-[10px] text-[#C4B5FD]">
                    <Calendar className="w-3 h-3" /> {p.date}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#C084FC] group-hover:text-[#E9D5FF] transition-colors">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-2">
            <button
              onClick={() => goPage(Math.max(1, page - 1))}
              disabled={page === 1}
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
              className="w-10 h-10 rounded-full bg-[#1E1135] border border-[#A855F7]/25 text-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#A855F7]/15 transition-all"
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Post detail modal */}
      {openPost && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-up"
          style={{ background: 'rgba(10, 1, 24, 0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setOpenPost(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border border-[#A855F7]/40 shadow-[0_30px_80px_rgba(168,85,247,0.4)]"
            style={{ background: 'linear-gradient(160deg, #1E1135 0%, #0A0118 100%)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenPost(null)}
              data-testid="blog-modal-close"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#0A0118]/80 border border-[#A855F7]/30 text-white flex items-center justify-center hover:bg-[#A855F7]/15"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[16/8] overflow-hidden">
              <img src={openPost.image} alt={openPost.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0118] via-[#0A0118]/40 to-transparent" />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 text-xs">
                <span className="bg-[#A855F7]/15 border border-[#A855F7]/30 text-[#C084FC] rounded-full px-3 py-1 font-bold">
                  {openPost.category}
                </span>
                <span className="flex items-center gap-1 text-[#C4B5FD]">
                  <Clock className="w-3 h-3" /> {openPost.readTime}
                </span>
                <span className="flex items-center gap-1 text-[#C4B5FD]">
                  <Calendar className="w-3 h-3" /> {openPost.date}
                </span>
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl font-extrabold text-white leading-tight">
                {openPost.title}
              </h3>
              <p className="mt-4 text-[#C4B5FD] leading-relaxed">
                {openPost.desc}
              </p>
              <p className="mt-4 text-sm text-[#C4B5FD]/80 leading-relaxed">
                We publish in-depth articles covering web design, SEO, online growth, and digital marketing — packed with actionable advice from our work on 500+ projects. Want this exact guide delivered to you, plus a free website audit?
              </p>
              <a
                href="#contact"
                onClick={() => setOpenPost(null)}
                className="mt-6 inline-flex items-center gap-2 btn-gradient text-white font-bold rounded-full px-6 py-3 text-sm"
              >
                Talk to us about this <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
