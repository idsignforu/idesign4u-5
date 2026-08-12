import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Bot } from 'lucide-react';
import { BRAND } from '../mock';
import { Link } from 'react-router-dom';
import { waLink } from '../lib/utils';

export default function Footer() {
  const footerRef = useRef(null);
  const glowRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    const glow = glowRef.current;
    const text = textRef.current;

    if (!footer || !glow || !text) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      const rect = footer.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        glow.style.transform = `translate(calc(-50% + ${x * 40}px), ${y * 30}px)`;
        text.style.transform = `translate(${x * -15}px, calc(18% + ${y * -10}px))`;
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        glow.style.transform = 'translate(-50%, 0px)';
        text.style.transform = 'translate(0px, 18%)';
      });
    };

    footer.addEventListener('mousemove', handleMouseMove);
    footer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      footer.removeEventListener('mousemove', handleMouseMove);
      footer.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden z-0 bg-slate-50 text-slate-700 pt-24 pb-12 border-t border-black/10 font-outfit"
    >
      {/* Background Parallax Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none flex flex-col justify-end items-center">
        {/* Glow Orb */}
        <div
          ref={glowRef}
          className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[80%] max-w-[1200px] h-[500px] bg-blue-400/20 rounded-[100%] blur-[130px] opacity-60 transition-transform duration-300 ease-out"
        />
        {/* Huge Silhouette Text */}
        <div
          ref={textRef}
          className="relative w-full flex justify-center items-center translate-y-[18%] text-[17vw] font-black tracking-tighter leading-none text-slate-200/80 select-none transition-transform duration-300 ease-out"
        >
          <span className="flex items-center gap-[2vw]">
            <Bot className="w-[13vw] h-[13vw] text-slate-200" />
            iD4U
          </span>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 mb-20">
          
          {/* Left Column (Brand, Heading, CTA) */}
          <div>
            <div className="group flex items-center gap-3 mb-8 cursor-pointer w-fit">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand transition-transform duration-500 group-hover:rotate-180 shadow-xs">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-3xl font-bold text-ink tracking-tight font-fustat">
                {BRAND.name}
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold text-ink leading-[1.1] max-w-xl mb-10">
              The foundation for <br />
              <span className="text-gradient-blue">
                high-value
              </span>{' '}
              digital operations.
            </h2>

            <a
              href={waLink('Hi, I am ready to start building a new website for my business.')}
              target="_blank"
              rel="noreferrer"
              className="btn-primary-blue inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base font-bold tracking-wider rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 uppercase gap-2"
            >
              <span>START BUILDING</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column (Contact Info Cards) */}
          <div className="flex flex-col justify-center gap-8 lg:pl-16 mt-8 lg:mt-0">
            <ContactCard
              icon={Phone}
              label="Phone Call"
              value={BRAND.phone}
              href={`tel:${BRAND.phoneRaw}`}
            />
            <ContactCard
              icon={Mail}
              label="Email Address"
              value={BRAND.email}
              href={`mailto:${BRAND.email}`}
            />
            <ContactCard
              icon={MapPin}
              label="Location"
              value={BRAND.location}
              href="#contact"
            />
          </div>

        </div>

        {/* Bottom Section (Copyright & Navigation Links) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-black/10 text-sm sm:text-base">
          <div className="text-center md:text-left text-muted">
            <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
            <p className="text-xs text-muted mt-1">Boutique Web Design Studio • Hyderabad, India</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-600 font-medium text-sm">
            <Link to="/services" className="hover:text-brand transition-colors">Services</Link>
            <Link to="/pricing" className="hover:text-brand transition-colors">Pricing</Link>
            <Link to="/portfolio" className="hover:text-brand transition-colors">Portfolio</Link>
            <Link to="/about" className="hover:text-brand transition-colors">About Us</Link>
            <Link to="/faq" className="hover:text-brand transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

function ContactCard({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="group flex items-start gap-6 cursor-pointer bg-white p-5 rounded-2xl border border-black/5 shadow-xs hover:border-brand hover:shadow-card-blue transition-all"
    >
      <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center bg-blue-50 text-brand border border-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand group-hover:text-white">
        <Icon className="w-6 h-6" />
      </div>
      <div className="pt-1">
        <div className="text-xs font-bold uppercase tracking-wider text-muted group-hover:text-brand transition-colors mb-1">
          {label}
        </div>
        <div className="text-base sm:text-lg font-bold text-ink group-hover:text-brand transition-colors">
          {value}
        </div>
      </div>
    </a>
  );
}
