import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Sparkles, CreditCard, Folder, Info, PhoneCall, Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND } from '../mock';
import { waLink, cn } from '../lib/utils';

// Helper component for navigation links
const NavLink = ({ to, icon: Icon, label, isActive }) => (
  <Link 
    to={to} 
    className={cn(
      "group flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-all px-3 py-1.5 rounded-full whitespace-nowrap",
      isActive
        ? "text-brand font-bold bg-white/10 shadow-xs"
        : "text-white/80 hover:text-white hover:bg-white/5"
    )}
  >
    <Icon className="w-4 h-4 opacity-80 group-hover:opacity-100" />
    <span>{label}</span>
  </Link>
);

export function NotchNavbar({ className }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const items = {
    left: [
      { label: "Home", to: "/", icon: Home },
      { label: "Services", to: "/services", icon: Sparkles },
      { label: "Pricing", to: "/pricing", icon: CreditCard }
    ],
    right: [
      { label: "Portfolio", to: "/portfolio", icon: Folder },
      { label: "About", to: "/about", icon: Info },
      { label: "Contact", to: "/contact", icon: PhoneCall }
    ]
  };

  return (
    <>
      <header className={cn("fixed top-0 inset-x-0 z-50 h-16 flex px-0 select-none text-white", className)}>
        
        {/* Left Side Bar - Flexible width (height: 40px) */}
        <div className="flex-1 h-10 bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 z-20 relative min-w-0">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-white" />
            <line x1="0" y1="36.5" x2="100%" y2="36.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-white" />
          </svg>
        </div>

        {/* Responsive Notch Container - 3 Slices (height: 64px) */}
        <div className="flex h-16 relative z-10 shrink-0 -ml-px">
          
          {/* Left Slice (Corner Notch Curve) */}
          <div className="w-[50px] h-full relative shrink-0">
            {/* Glass Background cutout */}
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl" style={{ clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')" }} />
            {/* Corner Outlines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path d="M0 39.5 C25 39.5 25 63.5 50 63.5" fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-white" />
              <path d="M0 36.5 C25 36.5 25 60.5 50 60.5" fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-white" />
            </svg>
          </div>

          {/* Center Slice (Main Content Notch Area) */}
          <div className="flex-1 h-full relative min-w-0 -ml-px">
             {/* Background & Lines Layer */}
             <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/40">
                 <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                   <line x1="0" y1="63.5" x2="100%" y2="63.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-white" />
                   <line x1="0" y1="60.5" x2="100%" y2="60.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-white" />
                 </svg>
             </div>

             {/* Content Layer */}
             <div className="relative w-full h-full flex items-end justify-between pb-2 px-4 md:px-8 gap-6">
               
               {/* Desktop Left Nav */}
               <nav className="hidden md:flex gap-6 mb-1 shrink-0 items-center">
                {items.left.map(item => (
                  <NavLink key={item.label} {...item} isActive={location.pathname === item.to} />
                ))}
              </nav>

              {/* Mobile Menu Trigger (Left) */}
              <button 
                className="md:hidden mb-1 p-1 text-white/90 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Logo (Center Notch Focus) */}
              <div className="flex justify-center shrink-0 mx-2 md:mx-4 mb-1">
                <Link to="/" className="flex items-center gap-2 group">
                  <img src={BRAND.logo} alt="iDesign4U Logo" className="w-7 h-7 rounded-lg object-contain transition-transform group-hover:scale-105" />
                  <span className="font-fustat text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center">
                    i<span className="text-brand">Design</span>4<span className="text-brand">U</span>
                  </span>
                </Link>
              </div>

              {/* Desktop Right Nav */}
              <nav className="hidden md:flex gap-6 items-center shrink-0 mb-1">
                {items.right.map(item => (
                  <NavLink key={item.label} {...item} isActive={location.pathname === item.to} />
                ))}
                
                <div className="flex gap-4 pl-4 border-l border-white/15 shrink-0 items-center">
                  <a
                    href={waLink('Hi, I want to discuss a website project for my business.')}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 text-xs font-bold text-white bg-brand rounded-2xl hover:bg-blue-600 transition-all shadow-md shadow-brand/30 whitespace-nowrap flex items-center gap-1 group"
                  >
                    <span>Get Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </nav>

              {/* Mobile Right Action */}
              <div className="md:hidden flex items-center gap-2 mb-1">
                <a
                  href={waLink('Hi, I want to discuss a website project.')}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 text-xs font-bold text-white bg-brand rounded-full shadow-xs"
                >
                  Quote
                </a>
              </div>

             </div>
          </div>

          {/* Right Slice (Corner Notch Curve) */}
          <div className="w-[50px] h-full relative shrink-0 -ml-px">
            {/* Glass Background cutout */}
            <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl" style={{ clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')" }} />
            {/* Corner Outlines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path d="M0 63.5 C25 63.5 25 39.5 50 39.5" fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-white" />
              <path d="M0 60.5 C25 60.5 25 36.5 50 36.5" fill="none" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-white" />
            </svg>
          </div>

        </div>

        {/* Right Side Bar - Flexible width (height: 40px) */}
        <div className="flex-1 h-10 bg-slate-950/90 backdrop-blur-2xl border-b border-white/10 z-20 relative min-w-0 -ml-px">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-white" />
            <line x1="0" y1="36.5" x2="100%" y2="36.5" stroke="currentColor" strokeOpacity={0.08} strokeWidth={0.5} className="text-white" />
          </svg>
        </div>

      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 p-5 md:hidden shadow-2xl text-white"
          >
             <nav className="flex flex-col gap-2">
               {[...items.left, ...items.right].map(item => {
                 const Icon = item.icon;
                 const isActive = location.pathname === item.to;
                 return (
                   <Link 
                     key={item.label} 
                     to={item.to}
                     className={cn(
                       "flex items-center gap-3 p-3 rounded-xl transition-colors font-medium text-sm",
                       isActive ? "bg-brand/20 text-brand font-bold" : "text-white/80 hover:bg-white/5"
                     )}
                     onClick={() => setIsMobileMenuOpen(false)}
                   >
                     <Icon className="w-5 h-5 opacity-80" />
                     <span>{item.label}</span>
                   </Link>
                 );
               })}
               <div className="h-px bg-white/10 my-2" />
               <a
                 href={waLink('Hi, I want to discuss a website project.')}
                 target="_blank"
                 rel="noreferrer"
                 className="flex items-center justify-center gap-2 p-3 rounded-xl bg-brand text-white font-bold text-sm shadow-md"
               >
                 <span>Get Instant Quote</span>
                 <ArrowUpRight className="w-4 h-4" />
               </a>
             </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NotchNavbar;
