
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
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
    isPopular: true
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

const SubscriptionPlans = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Flexible <span className="text-rgb-animated">Subscription Plans</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan to illuminate your business with our cutting-edge digital screens. No upfront costs, just a simple monthly subscription.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl shadow-lg ${
                plan.isPopular 
                  ? 'mt-6 ring-2 ring-digi-green ring-offset-4 ring-offset-black' 
                  : 'border-2 border-transparent'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-6 inset-x-0 z-10">
                  <div className="flex justify-center">
                    <motion.div 
                      className="px-8 py-2 rounded-full bg-gradient-to-r from-digi-green/90 to-digi-blue/90 border-2 border-white text-white font-bold shadow-[0_0_15px_rgba(106,176,76,0.8)] animate-pulse-slow"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white text-lg tracking-wider">MOST POPULAR</span>
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      </div>
                    </motion.div>
                  </div>
                </div>
              )}
              <div className={`p-8 bg-gradient-to-br ${
                plan.color === "digi-red" ? "from-digi-red/10 to-black/95" :
                plan.color === "digi-green" ? "from-digi-green/10 to-black/95" :
                "from-digi-blue/10 to-black/95"
              } rounded-2xl border border-white/10`}>
                <h3 className={`text-2xl font-bold mb-2 text-${plan.color}`}>{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-end mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
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
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.isPopular 
                      ? 'bg-gradient-rgb bg-300% animate-flow-rgb text-white shadow-lg' 
                      : `bg-${plan.color} hover:bg-${plan.color}/90`
                  }`}>
                  Subscribe Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-500">
          No long-term contracts. Cancel anytime. Free installation and maintenance included.
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
