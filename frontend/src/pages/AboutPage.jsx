import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-black/5 py-16 text-center px-6">
        <span className="bg-blue-50 text-brand border border-blue-100 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">
          Our Agency Story
        </span>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-ink mt-4">
          Crafting Digital Identities <span className="text-gradient-blue">That Convert</span>
        </h1>
        <p className="font-sans text-base text-muted max-w-2xl mx-auto mt-3">
          Learn how iDesign4U grew into Hyderabad’s most trusted web design agency serving 500+ global clients.
        </p>
      </div>

      <AboutUs />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <Contact />
    </main>
  );
}
