import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pt-24">
      {/* Header Banner */}
      <div className="bg-slate-50 border-b border-black/5 py-16 text-center px-6">
        <span className="bg-blue-50 text-brand border border-blue-100 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full inline-block">
          Web Design & SEO Knowledge Base
        </span>
        <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl text-ink mt-4">
          Latest <span className="text-gradient-blue">Articles & Guides</span>
        </h1>
        <p className="font-sans text-base text-muted max-w-2xl mx-auto mt-3">
          Practical advice on website optimization, Google ranking, e-commerce growth, and conversion design.
        </p>
      </div>

      <Blog />
      <Contact />
    </main>
  );
}
