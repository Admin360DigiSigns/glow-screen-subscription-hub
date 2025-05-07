
import { Check, Monitor, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const digitalPlans = [
  {
    name: "Standard",
    price: "79.99",
    description: "Small businesses",
    features: [
      "1M x 1M Digital Display",
      "HD Resolution",
      "Basic Content Management",
      "8 Hours Daily Operation",
      "Monthly Content Updates"
    ],
    color: "digi-red",
    isPopular: false
  },
  {
    name: "Premium",
    price: "129.99",
    description: "Growing businesses",
    features: [
      "1.5M x 1.5M Digital Display",
      "4K Ultra HD Resolution",
      "Advanced Content Management",
      "12 Hours Daily Operation",
      "Weekly Content Updates"
    ],
    color: "digi-green",
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "199.99",
    description: "Maximum impact",
    features: [
      "Custom Size Display",
      "8K Resolution",
      "AI-Powered Content",
      "24/7 Operation",
      "Unlimited Updates"
    ],
    color: "digi-blue",
    isPopular: false
  }
];

const ledPlans = [
  {
    name: "Indoor Basic",
    price: "499.99",
    description: "Small indoor venues",
    features: [
      "2m x 1m LED Wall",
      "P3.9 Pixel Pitch",
      "1000 nits Brightness",
      "Content Management",
      "Installation Included"
    ],
    color: "digi-red",
    isPopular: false
  },
  {
    name: "Pro Display",
    price: "999.99",
    description: "Mid-size venues",
    features: [
      "4m x 2m LED Wall",
      "P2.9 Pixel Pitch",
      "1500 nits Brightness",
      "Advanced Management",
      "Custom Installation"
    ],
    color: "digi-green",
    isPopular: true
  },
  {
    name: "Outdoor Ultra",
    price: "1499.99",
    description: "Outdoor displays",
    features: [
      "Customizable Size",
      "P4.8 Outdoor Pitch",
      "5000+ nits Brightness",
      "Weatherproof Design",
      "Premium Support"
    ],
    color: "digi-blue",
    isPopular: false
  }
];

const PricingOverview = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white">
            Simplified <span className="text-rgb-animated">Pricing</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Choose the perfect subscription plan with all hardware, installation, and maintenance included
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="digital" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-900/60 border border-white/10">
                <TabsTrigger value="digital" className="data-[state=active]:bg-digi-red/20 data-[state=active]:text-white">
                  <Monitor className="h-4 w-4 mr-2" />
                  Digital Screens
                </TabsTrigger>
                <TabsTrigger value="led" className="data-[state=active]:bg-digi-blue/20 data-[state=active]:text-white">
                  <Video className="h-4 w-4 mr-2" />
                  LED Video Walls
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="digital" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {digitalPlans.map((plan, index) => (
                  <Card 
                    key={index}
                    className={`overflow-hidden relative ${
                      plan.isPopular ? 'border-digi-green ring-1 ring-digi-green/30' : 'border-gray-800'
                    } bg-black/60 backdrop-blur-sm`}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-digi-green">Most Popular</Badge>
                      </div>
                    )}
                    
                    <CardContent className="p-6 pt-8">
                      <h3 className={`text-xl font-bold mb-1 text-${plan.color}`}>{plan.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{plan.description}</p>
                      
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400 ml-1 text-sm">/month</span>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className={`h-4 w-4 mr-2 text-${plan.color}`} />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full ${
                          plan.isPopular 
                            ? 'bg-rgb-animated' 
                            : `bg-${plan.color}/80 hover:bg-${plan.color}`
                        }`}>
                        Subscribe Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="led" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {ledPlans.map((plan, index) => (
                  <Card 
                    key={index}
                    className={`overflow-hidden relative ${
                      plan.isPopular ? 'border-digi-green ring-1 ring-digi-green/30' : 'border-gray-800'
                    } bg-black/60 backdrop-blur-sm`}
                  >
                    {plan.isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-digi-green">Most Popular</Badge>
                      </div>
                    )}
                    
                    <CardContent className="p-6 pt-8">
                      <h3 className={`text-xl font-bold mb-1 text-${plan.color}`}>{plan.name}</h3>
                      <p className="text-gray-400 text-sm mb-3">{plan.description}</p>
                      
                      <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400 ml-1 text-sm">/month</span>
                      </div>
                      
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className={`h-4 w-4 mr-2 text-${plan.color}`} />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full ${
                          plan.isPopular 
                            ? 'bg-rgb-animated' 
                            : `bg-${plan.color}/80 hover:bg-${plan.color}`
                        }`}>
                        Subscribe Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-8 text-sm text-gray-500">
            No long-term contracts. Cancel anytime. Free installation and maintenance included.
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingOverview;
