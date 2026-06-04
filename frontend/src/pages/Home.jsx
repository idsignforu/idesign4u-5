import Navbar from '../components/Navbar';
import PromoBar from '../components/PromoBar';
import Hero from '../components/Hero';
import PremiumFeatures from '../components/PremiumFeatures';
import Services from '../components/Services';
import WebsiteImpact from '../components/WebsiteImpact';
import Pricing from '../components/Pricing';
import Portfolio from '../components/Portfolio';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import Technologies from '../components/Technologies';
import Process from '../components/Process';
import SEORanking from '../components/SEORanking';
import WebsitePlanner from '../components/WebsitePlanner';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0118]">
      <PromoBar />
      <Navbar />
      <main className="overflow-x-clip">
        <Hero />
        <PremiumFeatures />
        <Services />
        <WebsiteImpact />
        <Pricing />
        <Portfolio />
        <AboutUs />
        <WhyChooseUs />
        <Technologies />
        <Process />
        <SEORanking />
        <WebsitePlanner />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
