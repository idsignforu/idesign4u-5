import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-black/5 py-16 text-center px-6">
        <span className="bg-blue-50 text-brand border border-blue-100 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">
          Transparent & Honest Pricing
        </span>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-ink mt-4">
          All-Inclusive <span className="text-gradient-blue">Website Packages</span>
        </h1>
        <p className="font-sans text-base text-muted max-w-2xl mx-auto mt-3">
          No hidden renewal fees, free domain + hosting + SSL + logo included in every plan.
        </p>
      </div>

      <Pricing />
      <FAQ limit={5} />
      <Contact />
    </main>
  );
}
