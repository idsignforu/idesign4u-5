import Hero from '../components/Hero';
import TrustStats from '../components/TrustStats';
import WebsiteImpact from '../components/WebsiteImpact';
import Services from '../components/Services';
import FeaturesAnalytics from '../components/FeaturesAnalytics';
import Pricing from '../components/Pricing';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrustStats />
      <WebsiteImpact />
      <Services limit={6} />
      <FeaturesAnalytics />
      <Pricing />
      <Portfolio limit={6} />
      <Testimonials />
      <WhyChooseUs />
      <Process />
      <Technologies />
      <FAQ limit={5} />
      <Contact />
    </main>
  );
}

