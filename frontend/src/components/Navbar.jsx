import { useEffect, useRef, useState } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import * as L from 'lucide-react';
import { NAV_LINKS, BRAND } from '../mock';
import { waLink } from '../lib/utils';

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showNavArrow, setShowNavArrow] = useState(false);
  const navScrollRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = NAV_LINKS.map(n => document.getElementById(n.id)).filter(Boolean);
      const y = window.scrollY + 180;
      let current = 'home';
      for (const sec of sections) {
        if (sec.offsetTop <= y) current = sec.id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Detect if nav can scroll horizontally (mobile only) to show ">" hint
  useEffect(() => {
    const el = navScrollRef.current;
    if (!el) return;
    const update = () => {
      const canScrollRight = el.scrollWidth - el.clientWidth - el.scrollLeft > 4;
      setShowNavArrow(canScrollRight);
    };
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`flex items-center justify-between gap-2 rounded-full pl-2 pr-2 py-2 transition-all border ${
            scrolled
              ? 'shadow-[0_10px_40px_rgba(124,58,237,0.4)]'
              : 'shadow-[0_8px_30px_rgba(124,58,237,0.25)]'
          }`}
          style={{
            background: scrolled
              ? 'linear-gradient(135deg, rgba(10, 1, 24, 0.95) 0%, rgba(30, 17, 53, 0.95) 100%)'
              : 'linear-gradient(135deg, rgba(10, 1, 24, 0.85) 0%, rgba(30, 17, 53, 0.85) 100%)',
            borderColor: 'rgba(168, 85, 247, 0.35)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Logo */}
          <button onClick={() => go('home')} className="flex items-center gap-2 group flex-none pl-1">
            <div className="relative">
              <div className="absolute inset-0 bg-[#A855F7]/40 blur-xl rounded-full group-hover:bg-[#A855F7]/70 transition-all" />
              <img src={BRAND.logo} alt="iDesign4U logo" className="relative w-9 h-9 lg:w-10 lg:h-10 object-contain rounded-lg group-hover:rotate-6 transition-transform" />
            </div>
            <div className="hidden sm:block text-left leading-tight">
              <div className="font-extrabold text-[14px] tracking-tight text-white">I DESIGN 4 U</div>
              <div className="text-[9px] text-[#C4B5FD] uppercase tracking-[0.18em] font-bold -mt-0.5">Premium Web Designs</div>
            </div>
          </button>

          {/* Pill nav — visible on all screens. Scrolls horizontally on mobile. */}
          <div className="relative flex-1 min-w-0">
            <nav
              ref={navScrollRef}
              data-testid="primary-nav"
              className="nav-scroll flex items-center gap-0.5 bg-[#0A0118]/80 rounded-full p-1 border border-[#A855F7]/20 overflow-x-auto"
            >
              {NAV_LINKS.map((l) => {
                const Icon = L[l.icon] || L.Circle;
                const isActive = active === l.id;
                return (
                  <button
                    key={l.id}
                    onClick={() => go(l.id)}
                    data-testid={`nav-link-${l.id}`}
                    className={`flex-none px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-full text-[11px] lg:text-[13px] font-bold transition-all flex items-center gap-1 lg:gap-1.5 whitespace-nowrap ${
                      isActive
                        ? 'text-white shadow-[0_4px_18px_rgba(168,85,247,0.55)]'
                        : 'text-[#C4B5FD] hover:text-white hover:bg-[#A855F7]/10'
                    }`}
                    style={isActive ? { background: 'linear-gradient(135deg, #7C3AED 0%, #A855F7 100%)' } : {}}
                  >
                    <Icon className="w-3 h-3 lg:w-3.5 lg:h-3.5" />
                    {l.label}
                  </button>
                );
              })}
            </nav>
            {/* Scroll hint arrow (mobile only when more items exist) */}
            {showNavArrow && (
              <button
                aria-label="Scroll nav"
                onClick={() => {
                  const el = navScrollRef.current;
                  if (el) el.scrollBy({ left: 120, behavior: 'smooth' });
                }}
                className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-l from-[#1E1135] via-[#1E1135] to-transparent pl-2 flex items-center justify-end text-[#C084FC] pointer-events-auto"
              >
                <ChevronRight className="w-4 h-4 animate-pulse" />
              </button>
            )}
          </div>

          {/* CTA */}
          <a
            href={waLink('Hi, I am interested in your web design services.')}
            target="_blank"
            rel="noreferrer"
            data-testid="navbar-start-project"
            className="hidden sm:inline-flex flex-none items-center gap-1.5 btn-gradient text-white font-bold text-sm rounded-full px-4 py-2.5 transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            Start Project
          </a>
        </div>
      </div>
    </header>
  );
}
