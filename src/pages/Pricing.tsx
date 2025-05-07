import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Check, Receipt, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import SubscriptionForm from "@/components/SubscriptionForm";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<"digital" | "led">("digital");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"standard" | "premium" | "enterprise">("standard");

  const handleSubscribe = (planType: "standard" | "premium" | "enterprise") => {
    console.log("Subscribing to plan:", planType);
    setSelectedPlan(planType);
    setDialogOpen(true);
  };

  const digitalPlans = [
    {
      name: "Standard",
      price: "79.99",
      description: "Perfect for small businesses",
      features: [
        "1M x 1M Digital Display",
        "HD Resolution",
        "Basic Content Management",
        "8 Hours Daily Operation",
        "Monthly Content Updates",
        "Standard Support"
      ],
      color: "digi-red",
      isPopular: false
    },
    {
      name: "Premium",
      price: "129.99",
      description: "Ideal for growing businesses",
      features: [
        "1.5M x 1.5M Digital Display",
        "4K Ultra HD Resolution",
        "Advanced Content Management",
        "12 Hours Daily Operation",
        "Weekly Content Updates",
        "Priority Support",
        "Analytics Dashboard"
      ],
      color: "digi-green",
      isPopular: false
    },
    {
      name: "Enterprise",
      price: "199.99",
      description: "For maximum business impact",
      features: [
        "Custom Size Digital Display",
        "8K Resolution",
        "AI-Powered Content Optimization",
        "24/7 Operation",
        "Unlimited Content Updates",
        "Premium Support & Consultation",
        "Advanced Analytics",
        "Multi-Screen Management"
      ],
      color: "digi-blue",
      isPopular: false
    }
  ];

  const ledPlans = [
    {
      name: "Indoor Basic",
      price: "499.99",
      description: "Perfect for small indoor venues",
      features: [
        "2m x 1m LED Video Wall",
        "P3.9 Pixel Pitch",
        "1000 nits Brightness",
        "Content Management System",
        "Installation & Setup",
        "Standard Maintenance Package",
        "24/7 Technical Support"
      ],
      color: "digi-red",
      isPopular: false
    },
    {
      name: "Pro Display",
      price: "999.99",
      description: "Ideal for mid-size venues & events",
      features: [
        "4m x 2m LED Video Wall",
        "P2.9 Pixel Pitch",
        "1500 nits Brightness",
        "Advanced Content Management",
        "Custom Installation",
        "Premium Maintenance Package",
        "24/7 Priority Support",
        "Content Creation Services"
      ],
      color: "digi-green",
      isPopular: false
    },
    {
      name: "Outdoor Ultra",
      price: "1499.99",
      description: "For high-impact outdoor displays",
      features: [
        "Customizable Size (Up to 10m x 5m)",
        "P4.8 Outdoor Pixel Pitch",
        "5000+ nits Brightness",
        "Weatherproof Design (IP65 Rating)",
        "Ultra-High Contrast Ratio",
        "Advanced Remote Management",
        "Dedicated Account Manager",
        "Annual Hardware Inspection",
        "Content Strategy Consultation"
      ],
      color: "digi-blue",
      isPopular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100
      }
    }
  };

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
          <div className="text-center mb-16">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold font-display mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Solutions that <span className="text-rgb-animated">Fit Your Budget</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Find the perfect plan for your business, whether you need digital displays or immersive LED video walls. No upfront costs, just simple monthly subscriptions.
            </motion.p>
          </div>
          
          {/* Tab Selection - Enhanced visibility */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/80 p-2 rounded-xl backdrop-blur-sm border border-white/20 shadow-lg">
              <button
                onClick={() => setActiveTab("digital")}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "digital" 
                    ? "bg-gradient-rgb bg-300% animate-flow-rgb text-white shadow-md" 
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                Digital Screens
              </button>
              <button
                onClick={() => setActiveTab("led")}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  activeTab === "led" 
                    ? "bg-gradient-rgb bg-300% animate-flow-rgb text-white shadow-md" 
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                LED Video Walls
              </button>
            </div>
          </div>
          
          {/* Pricing Cards with Enhanced Visibility */}
          {activeTab === "digital" ? (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="digital"
            >
              {digitalPlans.map((plan, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="relative rounded-2xl overflow-hidden"
                >                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    plan.color === "digi-red" ? "from-digi-red/30 to-black/90" :
                    plan.color === "digi-green" ? "from-digi-green/30 to-black/90" :
                    "from-digi-blue/30 to-black/90"
                  } opacity-80`}></div>
                  
                  <div className={`relative z-[1] p-8 border border-white/20 rounded-2xl backdrop-blur-sm h-full flex flex-col`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-2xl font-bold ${
                        plan.color === "digi-red" ? "text-red-400" :
                        plan.color === "digi-green" ? "text-green-400" :
                        "text-blue-400"
                      }`}>{plan.name}</h3>
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm shadow-sm">Digital Screen</Badge>
                    </div>
                    
                    <p className="text-gray-200 mb-6">{plan.description}</p>
                    
                    <div className="flex items-end mb-8">
                      <DollarSign className={`h-6 w-6 mr-1 ${
                        plan.color === "digi-red" ? "text-red-400" :
                        plan.color === "digi-green" ? "text-green-400" :
                        "text-blue-400"
                      }`} />
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">/month</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className={`h-5 w-5 mr-3 flex items-center justify-center rounded-full ${
                            plan.color === "digi-red" ? "bg-red-500/20" :
                            plan.color === "digi-green" ? "bg-green-500/20" :
                            "bg-blue-500/20"
                          }`}>
                            <Check className={`h-3 w-3 ${
                              plan.color === "digi-red" ? "text-red-400" :
                              plan.color === "digi-green" ? "text-green-400" :
                              "text-blue-400"
                            }`} />
                          </div>
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full shadow-lg ${
                        plan.color === "digi-red" ? 'bg-red-600 hover:bg-red-700 text-white' :
                        plan.color === "digi-green" ? 'bg-green-600 hover:bg-green-700 text-white' :
                        'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                      onClick={() => handleSubscribe(index === 0 ? 'standard' : index === 1 ? 'premium' : 'enterprise')}
                    >
                      <Receipt className="mr-2 h-4 w-4" /> Subscribe Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              key="led"
            >
              {ledPlans.map((plan, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="relative rounded-2xl overflow-hidden"
                >                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    plan.color === "digi-red" ? "from-digi-red/30 to-black/90" :
                    plan.color === "digi-green" ? "from-digi-green/30 to-black/90" :
                    "from-digi-blue/30 to-black/90"
                  } opacity-80`}></div>
                  
                  <div className={`relative z-[1] p-8 border border-white/20 rounded-2xl backdrop-blur-sm h-full flex flex-col`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className={`text-2xl font-bold ${
                        plan.color === "digi-red" ? "text-red-400" :
                        plan.color === "digi-green" ? "text-green-400" :
                        "text-blue-400"
                      }`}>{plan.name}</h3>
                      <Badge className="bg-white/20 text-white border-0 backdrop-blur-sm shadow-sm">LED Wall</Badge>
                    </div>
                    
                    <p className="text-gray-200 mb-6">{plan.description}</p>
                    
                    <div className="flex items-end mb-8">
                      <DollarSign className={`h-6 w-6 mr-1 ${
                        plan.color === "digi-red" ? "text-red-400" :
                        plan.color === "digi-green" ? "text-green-400" :
                        "text-blue-400"
                      }`} />
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">/month</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className={`h-5 w-5 mr-3 flex items-center justify-center rounded-full ${
                            plan.color === "digi-red" ? "bg-red-500/20" :
                            plan.color === "digi-green" ? "bg-green-500/20" :
                            "bg-blue-500/20"
                          }`}>
                            <Check className={`h-3 w-3 ${
                              plan.color === "digi-red" ? "text-red-400" :
                              plan.color === "digi-green" ? "text-green-400" :
                              "text-blue-400"
                            }`} />
                          </div>
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full shadow-lg ${
                        plan.color === "digi-red" ? 'bg-red-600 hover:bg-red-700 text-white' :
                        plan.color === "digi-green" ? 'bg-green-600 hover:bg-green-700 text-white' :
                        'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                      onClick={() => handleSubscribe(index === 0 ? 'standard' : index === 1 ? 'premium' : 'enterprise')}
                    >
                      <Receipt className="mr-2 h-4 w-4" /> Subscribe Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          <div className="text-center mt-12 text-gray-300 max-w-2xl mx-auto bg-black/50 p-6 rounded-xl backdrop-blur-sm border border-white/10">
            <p className="mb-4 text-sm">No long-term contracts. Cancel anytime. Free installation and maintenance included.</p>
            <p className="text-xs">* Prices are subject to change based on specific requirements, location, and installation complexity. Contact sales for a custom quote.</p>
          </div>
        </div>
      </section>
      
      <SubscriptionForm 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
        initialPlan={selectedPlan}
      />
      
      <Footer />
    </div>
  );
};

export default Pricing;
