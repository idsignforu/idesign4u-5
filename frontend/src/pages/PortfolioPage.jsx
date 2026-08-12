import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-black/5 py-16 text-center px-6">
        <span className="bg-blue-50 text-brand border border-blue-100 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">
          Live Client Websites
        </span>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-ink mt-4">
          Our Full <span className="text-gradient-blue">Portfolio</span> Showcase
        </h1>
        <p className="font-sans text-base text-muted max-w-2xl mx-auto mt-3">
          Explore real client websites delivered across India & 30+ countries. Filter by business type.
        </p>
      </div>

      <Portfolio />
      <Testimonials />
      <Contact />
    </main>
  );
}
