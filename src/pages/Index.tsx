
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LedVideoWall from "@/components/LedVideoWall";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <SubscriptionPlans />
      <Showcase />
      <LedVideoWall />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
