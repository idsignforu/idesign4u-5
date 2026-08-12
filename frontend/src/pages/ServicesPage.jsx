import Services from '../components/Services';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-black/5 py-16 text-center px-6">
        <span className="bg-blue-50 text-brand border border-blue-100 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">
          Our Specializations
        </span>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-ink mt-4">
          End-to-End <span className="text-gradient-blue">Web Solutions</span>
        </h1>
        <p className="font-sans text-base text-muted max-w-2xl mx-auto mt-3">
          From high-converting landing pages to full e-commerce platforms and search engine optimization.
        </p>
      </div>

      <Services />
      <Process />
      <Pricing />
      <Contact />
    </main>
  );
}
