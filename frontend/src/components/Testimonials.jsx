import { TESTIMONIALS } from '../mock';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="section-pad bg-dark-radial relative overflow-hidden">
      <div className="orb drift-1" style={{ top: '20%', left: '0%', width: 450, height: 450, background: '#7C3AED', opacity: 0.12 }} />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#1E1135] border border-[#A855F7]/30 text-[#C084FC] rounded-full px-4 py-1.5 text-xs font-bold tracking-wider uppercase">
            <Star className="w-3.5 h-3.5" />
            Testimonials
          </span>
          <h2 className="section-title mt-4 max-w-3xl glow-text-soft">
            Trusted by Businesses <span className="glow-text">Worldwide</span>
          </h2>
          <p className="mt-4 text-[#C4B5FD] max-w-2xl">
            Real feedback from real clients across India and 30+ countries.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            {[
              { n: '4.9/5', l: 'Google Reviews' },
              { n: '500+', l: 'Projects Delivered' },
              { n: '30+', l: 'Countries Served' },
              { n: 'Top Rated', l: 'Web Studio' },
            ].map((s) => (
              <div key={s.l} className="bg-[#1E1135]/80 backdrop-blur border border-[#A855F7]/30 rounded-full px-4 py-1.5">
                <span className="font-extrabold text-[#C084FC]">{s.n}</span>
                <span className="text-[#C4B5FD] ml-1.5 text-xs">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="card-lift relative bg-card-dark rounded-2xl p-6 group">
              <Quote className="absolute top-5 right-5 w-8 h-8 text-[#A855F7]/30 group-hover:text-[#A855F7]/60 transition-colors" />
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400" />)}
              </div>
              <p className="text-sm text-[#DDD6FE] leading-relaxed">“{t.text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full btn-gradient text-white flex items-center justify-center font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-[#C4B5FD]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
