
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import LedVideoWall from "@/components/LedVideoWall";
import DigitalScreenAdvantages from "@/components/DigitalScreenAdvantages";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <DigitalScreenAdvantages />
      <LedVideoWall />
      <Showcase />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;

