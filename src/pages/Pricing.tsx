
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { digitalPlans, ledPlans } from "@/data/planData";
import PricingHeader from "@/components/pricing/PricingHeader";
import PricingTabs from "@/components/pricing/PricingTabs";
import PlanGrid from "@/components/pricing/PlanGrid";
import PricingFooter from "@/components/pricing/PricingFooter";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"digital" | "led">("digital");

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-digi-red/20 blur-3xl"></div>
          <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-digi-blue/20 blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-digi-green/20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <PricingHeader />
          
          <PricingTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {activeTab === "digital" ? (
            <PlanGrid plans={digitalPlans} type="digital" />
          ) : (
            <PlanGrid plans={ledPlans} type="led" />
          )}
          
          <PricingFooter />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
