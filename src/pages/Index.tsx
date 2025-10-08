import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Dishes from '@/components/Dishes';
import Specials from '@/components/Specials';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Dishes />
      <Specials />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
