import { useState, useRef } from 'react';
import { Sparkles, ArrowUpRight, ArrowRight, X, MessageCircle } from 'lucide-react';
import * as L from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../mock';
import { waLink } from '../lib/utils';
import { Link } from 'react-router-dom';
import PerspectiveGrid from './PerspectiveGrid';

export default function Services({ limit = null }) {
  const [activeService, setActiveService] = useState(null);
  const displayServices = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-ink relative overflow-hidden flex items-center justify-center">
      {/* 3D Perspective Grid Background */}
      <PerspectiveGrid gridSize={28} fadeRadius={75} />

      {/* Soft Ambient Mesh Spotlights */}
      <div className="absolute top-0 left-[-5%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-auroraDrift" />
      <div className="absolute bottom-0 right-[-5%] w-[600px] h-[600px] bg-sky-400/10 rounded-full blur-[130px] pointer-events-none -z-10 animate-auroraDrift" style={{ animationDelay: '-5s' }} />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {/* Grid Cell 1: Intro Section */}
          <div className="flex flex-col justify-center items-start lg:pr-6 mb-8 md:mb-0">
            <div className="inline-flex items-center gap-2 text-brand font-bold tracking-wider text-xs uppercase mb-3 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              OUR EXPERTISE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink leading-[1.15] mb-6 font-outfit">
              Pioneering <span className="text-gradient-blue">Digital Solutions</span> for Growing Brands
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed mb-8 font-sans">
              We design and build high-converting business websites, custom ecommerce stores, and high-performance digital platforms tailored for your business goals.
            </p>
            <Link
              to="/services"
              className="btn-primary-blue group rounded-full text-white font-medium pl-6 pr-2 py-2 inline-flex items-center gap-4 shadow-lg hover:scale-105"
            >
              <span className="text-sm font-bold">Explore All Services</span>
              <div className="w-8 h-8 rounded-full bg-white text-brand flex items-center justify-center transition-transform group-hover:rotate-45">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Grid Cells 2-6: Light Glass Service Cards with Hover Video */}
          {displayServices.map((s, idx) => (
            <LuminaServiceCard
              key={s.id}
              service={s}
              idx={idx}
              onOpenModal={() => setActiveService(s)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeService && (
          <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

function LuminaServiceCard({ service: s, idx, onOpenModal }) {
  const videoRef = useRef(null);
  const IconComponent = L[s.icon] || Sparkles;

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const colorMap = {
    blue: 'bg-blue-50 border-blue-100 text-brand',
    emerald: 'bg-emerald-50 border-emerald-100 text-emerald-600',
    purple: 'bg-purple-50 border-purple-100 text-purple-600',
    rose: 'bg-rose-50 border-rose-100 text-rose-600',
    amber: 'bg-amber-50 border-amber-100 text-amber-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative rounded-3xl p-8 transition-all duration-500 flex flex-col justify-between h-full overflow-hidden border border-black/5 bg-white/80 backdrop-blur-xl shadow-xs hover:border-brand hover:-translate-y-2 hover:shadow-card-blue z-10 cursor-pointer"
      onClick={onOpenModal}
    >
      {/* Background Hover Video */}
      <video
        ref={videoRef}
        src="https://strvid.nyc3.cdn.digitaloceanspaces.com/cloudinary/bg3_fqnvi9.mp4"
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 w-full h-full object-cover -z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
      />

      {/* Gradient Overlay on Hover */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-0 group-hover:opacity-90 transition-opacity duration-500 bg-gradient-to-br from-slate-900/90 via-blue-950/90 to-slate-900/90" />

      <div>
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-300 shadow-sm relative z-10 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40 group-hover:text-white ${colorMap[s.accentColor] || colorMap.blue}`}>
          <IconComponent className="w-8 h-8 stroke-[1.75] transition-transform group-hover:animate-bounce" />
        </div>

        <h3 className="text-2xl font-bold mb-3 text-ink group-hover:text-white transition-colors duration-300 font-outfit">
          {s.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted group-hover:text-white/95 transition-colors duration-300 mb-6 font-sans">
          {s.desc}
        </p>
      </div>

      <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand group-hover:text-white transition-colors duration-300 mt-auto pt-4 border-t border-black/5 group-hover:border-white/20">
        <span>Learn More & Features</span>
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
      </div>
    </motion.div>
  );
}

function ServiceModal({ service: s, onClose }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/40 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-ink"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/5 text-ink hover:bg-black/10 flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-50 text-brand border border-blue-100 rounded-full text-xs font-bold uppercase">
            {s.deliverables ? s.deliverables[0] : 'Web Solution'}
          </span>
        </div>

        <h3 className="font-outfit font-extrabold text-2xl sm:text-3xl text-ink">{s.title}</h3>
        <p className="font-sans text-sm text-muted mt-3 leading-relaxed">{s.desc}</p>

        {s.deliverables && (
          <div className="mt-6">
            <h4 className="font-outfit font-bold text-sm uppercase tracking-wider text-brand mb-3">Key Deliverables Included:</h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {s.deliverables.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-ink bg-slate-50 border border-slate-200 rounded-xl p-2.5">
                  <span className="w-2 h-2 rounded-full bg-brand" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">Ready to start? Get a free 15-min consultation on WhatsApp.</p>
          <a
            href={waLink(`Hi, I am interested in your ${s.title} service. Please share details.`)}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto btn-primary-blue px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Inquire on WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
