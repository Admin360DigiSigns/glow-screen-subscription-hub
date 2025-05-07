
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Showcase from "@/components/Showcase";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import LedVideoWall from "@/components/LedVideoWall";
import DigitalScreenAdvantages from "@/components/DigitalScreenAdvantages";
import ContactSection from "@/components/ContactSection";
import SubscriptionPlans from "@/components/SubscriptionPlans";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <DigitalScreenAdvantages />
      <LedVideoWall />
      <Showcase />
      <ClientLogos />
      <Testimonials />
      <SubscriptionPlans />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
