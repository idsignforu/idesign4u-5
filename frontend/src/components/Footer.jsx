import { Phone, Mail, Instagram, MapPin, ArrowUp, MessageCircle } from 'lucide-react';
import { BRAND, NAV_LINKS, SERVICES } from '../mock';
import { waLink } from '../lib/utils';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0A0118] border-t border-[#A855F7]/15 text-white relative overflow-hidden">
      <div className="orb drift-1" style={{ top: '0%', right: '0%', width: 500, height: 500, background: '#7C3AED', opacity: 0.12 }} />
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 relative">
        <div className="grid grid-cols-3 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Brand */}
          <div className="col-span-3 lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-[#A855F7]/40 blur-xl rounded-full" />
                <img src={BRAND.logo} alt="iDesign4U" className="relative w-12 h-12 object-contain" />
              </div>
              <div>
                <div className="font-extrabold text-lg text-white">I DESIGN 4 U</div>
                <div className="text-[10px] text-[#C084FC] uppercase tracking-[0.18em] font-bold">Premium Web Designs</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-[#C4B5FD] leading-relaxed max-w-sm">
              {BRAND.subtagline}. We craft high-converting websites for ambitious brands across India and beyond.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialBtn href={`tel:${BRAND.phoneRaw}`} icon={Phone} />
              <SocialBtn href={`mailto:${BRAND.email}`} icon={Mail} />
              <SocialBtn href={waLink('Hi, I want to enquire.')} icon={MessageCircle} />
              <SocialBtn href="https://instagram.com/i_design4.u" icon={Instagram} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="text-sm font-extrabold mb-4 text-white">Navigate</div>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 lg:grid-cols-2">
              {NAV_LINKS.map(n => (
                <li key={n.id}>
                  <a href={`#${n.id}`} className="text-sm text-[#C4B5FD] hover:text-[#C084FC] transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="text-sm font-extrabold mb-4 text-white">Services</div>
            <ul className="space-y-2.5">
              {SERVICES.slice(0, 6).map(s => (
                <li key={s.title} className="text-sm text-[#C4B5FD] hover:text-[#C084FC] transition-colors cursor-pointer">
                  {s.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="text-sm font-extrabold mb-4 text-white">Reach Us</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-[#C4B5FD]">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C084FC] flex-none" />
                {BRAND.location}
              </li>
              <li className="flex items-start gap-2 text-[#C4B5FD]">
                <Phone className="w-4 h-4 mt-0.5 text-[#C084FC] flex-none" />
                <a href={`tel:${BRAND.phoneRaw}`} className="hover:text-white">{BRAND.phone}</a>
              </li>
              <li className="flex items-start gap-2 text-[#C4B5FD]">
                <Mail className="w-4 h-4 mt-0.5 text-[#C084FC] flex-none" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white break-all">{BRAND.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#A855F7]/15 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#C4B5FD]/70">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. — Hyderabad, India.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#C4B5FD]/70">
            <span className="hover:text-[#C084FC] cursor-pointer">Privacy</span>
            <span className="hover:text-[#C084FC] cursor-pointer">Terms</span>
            <span className="hover:text-[#C084FC] cursor-pointer">Refund Policy</span>
            <button onClick={scrollTop} className="w-9 h-9 rounded-full btn-gradient text-white flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ icon: Icon, href }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="w-10 h-10 rounded-full bg-[#1E1135] border border-[#A855F7]/30 hover:btn-gradient hover:border-transparent flex items-center justify-center transition-all text-[#C084FC] hover:text-white"
    >
      <Icon className="w-4 h-4" />
    </a>
  );
}
