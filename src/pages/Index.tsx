
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DisplaySolutions from "@/components/DisplaySolutions";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PricingOverview from "@/components/PricingOverview";
import Showcase from "@/components/Showcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <DisplaySolutions />
      <Features />
      <Showcase />
      <PricingOverview />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
