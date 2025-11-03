import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InfoBanner from '@/components/InfoBanner';
import Features from '@/components/Features';
import About from '@/components/About';
import Programs from '@/components/Programs';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <InfoBanner />
      <Features />
      <About />
      <Programs />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
