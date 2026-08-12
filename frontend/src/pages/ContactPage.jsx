import Contact from '../components/Contact';
import FAQ from '../components/FAQ';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-black/5 py-16 text-center px-6">
        <span className="bg-blue-50 text-brand border border-blue-100 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">
          Direct Founder Communication
        </span>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-ink mt-4">
          Contact Our <span className="text-gradient-blue">Design Team</span>
        </h1>
        <p className="font-sans text-base text-muted max-w-2xl mx-auto mt-3">
          We answer calls & WhatsApp messages within 15 minutes during business hours (+91 92814 10305).
        </p>
      </div>

      <Contact />
      <FAQ limit={5} />
    </main>
  );
}
