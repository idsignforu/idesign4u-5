import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import { Sparkles, MapPin, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { waLink } from '../lib/utils';

const LANDING_DATA = {
  '/website-design-hyderabad': {
    badge: 'Hyderabad’s #1 Web Design Agency',
    title: 'Professional Website Design Services in Hyderabad',
    subtitle: 'High-converting, mobile-responsive websites for Hyderabad startups, IT companies, clinic practices, and local service providers. 48-Hour Delivery Guarantee.',
    locationTag: 'Hitech City • Gachibowli • Banjara Hills • Jubilee Hills • Madhapur',
    features: [
      'Local Hyderabad Support & On-Demand Consultations',
      'Free Domain (.com / .in) + Cloud Hosting Included',
      'Instant WhatsApp Integration & Lead Generation Form',
      'Google Maps & Local SEO Setup Included Free',
    ],
  },
  '/affordable-website-design-india': {
    badge: 'Best Value Web Agency India',
    title: 'Affordable Website Design Packages in India',
    subtitle: 'Get a modern, mobile-friendly business website starting at just ₹5,999 with zero hidden charges. Pay in 2-3 easy installments.',
    locationTag: 'Serving Delhi NCR • Mumbai • Bengaluru • Hyderabad • Chennai • Pune • Kolkata',
    features: [
      'Lowest Price in India for Premium Web Design (₹5,999)',
      'Easy Installment Payment Options (Split in 2-3 Parts)',
      'Free Logo Design + Domain + SSL Certificate Included',
      '48-Hour Turnaround Promise for All Business Sites',
    ],
  },
  '/ecommerce-website-development': {
    badge: 'High-Converting Online Stores',
    title: 'E-Commerce Website Development India',
    subtitle: 'Launch your online store with Razorpay / Cashfree payment gateway, UPI integration, WhatsApp checkout, inventory management, and zero commission.',
    locationTag: 'WooCommerce • Shopify • Custom React Stores',
    features: [
      'Razorpay, Cashfree & UPI Payment Gateway Integration',
      'WhatsApp Order Alerts & Direct Order Chat',
      'Unlimited Product Management via Admin Panel',
      'Mobile-App Like Smooth Touch Checkout Experience',
    ],
  },
};

export default function SEOLandingPage() {
  const location = useLocation();
  const pageData = LANDING_DATA[location.pathname] || LANDING_DATA['/website-design-hyderabad'];

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Dynamic SEO Hero Header Banner */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/70 to-white relative overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 text-center">
          <span className="inline-flex items-center gap-2 bg-white border border-blue-200 text-brand rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {pageData.badge}
          </span>
          <h1 className="font-outfit font-extrabold text-3xl sm:text-5xl lg:text-6xl text-ink tracking-tight max-w-4xl mx-auto leading-tight">
            {pageData.title.split(' ')[0]} <span className="text-gradient-blue">{pageData.title.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="font-sans text-base sm:text-lg text-muted max-w-3xl mx-auto mt-5 leading-relaxed">
            {pageData.subtitle}
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 bg-white/80 border border-slate-200 px-4 py-1.5 rounded-full">
            <MapPin className="w-3.5 h-3.5 text-brand" />
            <span>{pageData.locationTag}</span>
          </div>

          {/* Key Value Props Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left max-w-5xl mx-auto">
            {pageData.features.map((f, i) => (
              <div key={i} className="glass-panel p-4 rounded-2xl border border-white shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand flex-none mt-0.5" />
                <span className="font-sans text-xs font-semibold text-ink-soft leading-snug">{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink(`Hi, I am interested in ${pageData.title}. Please share details.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-primary-blue px-8 py-4 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-2"
            >
              <span>Get Free Quote on WhatsApp</span>
            </a>
            <a
              href="#pricing"
              className="bg-black/5 hover:bg-black/10 text-ink px-8 py-4 rounded-2xl font-bold text-sm"
            >
              View Packages (₹5,999)
            </a>
          </div>
        </div>
      </section>

      <Services limit={6} />
      <Pricing />
      <Portfolio limit={6} />
      <FAQ limit={5} />
      <Contact />
    </main>
  );
}
