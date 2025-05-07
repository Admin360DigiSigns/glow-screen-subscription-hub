import { Monitor, Zap, Smartphone, Check, Video, RefreshCw, Shield, Images } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const advantages = [
  {
    icon: <Monitor className="h-12 w-12 text-digi-red p-2" />,
    title: "Ultra HD Resolution",
    description: "Crystal-clear 4K displays with vibrant colors and perfect contrast ratios that make content stand out from across the room.",
    details: "Our digital screens feature HDR10+ support, 10-bit color depth, and anti-glare technology for perfect visibility in any lighting environment."
  },
  {
    icon: <Zap className="h-12 w-12 text-digi-green p-2" />,
    title: "Energy Efficiency",
    description: "Advanced display technology that minimizes power consumption while delivering maximum brightness and performance.",
    details: "Smart power management reduces energy usage by up to 40% compared to conventional displays, with automatic brightness adjustment and sleep modes."
  },
  {
    icon: <Smartphone className="h-12 w-12 text-digi-blue p-2" />,
    title: "Remote Content Management",
    description: "Update your content from anywhere using our intuitive mobile app or web dashboard with real-time synchronization.",
    details: "Schedule content weeks in advance, create playlists, and push emergency updates instantly across multiple screens with our cloud-based CMS."
  },
  {
    icon: <Video className="h-12 w-12 text-digi-red p-2" />,
    title: "Dynamic Content Display",
    description: "Showcase a variety of content formats including videos, animations, social media feeds, and interactive elements.",
    details: "Support for all major media formats with automatic transcoding, live streaming capabilities, and dynamic template-based content creation."
  },
  {
    icon: <RefreshCw className="h-12 w-12 text-digi-green p-2" />,
    title: "Customizable Templates",
    description: "Choose from hundreds of professionally designed templates or create your own with our drag-and-drop editor.",
    details: "Industry-specific templates for restaurants, retail, healthcare, and corporate environments with easy customization options."
  },
  {
    icon: <Shield className="h-12 w-12 text-digi-blue p-2" />,
    title: "Enterprise-Grade Security",
    description: "End-to-end encryption for content delivery with secure user authentication and access controls.",
    details: "SOC 2 compliant infrastructure with regular security audits, remote device monitoring, and instant alerts for unauthorized access attempts."
  }
];

const DigitalScreenAdvantages = () => {
  return (
    <section id="digital-advantages" className="py-20 bg-black relative overflow-hidden">
      {/* RGB background effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-digi-red opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-digi-blue opacity-20 blur-3xl animate-pulse" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-digi-green opacity-20 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-digi-red/20 rounded-full blur-xl animate-float" style={{animationDuration: "9s"}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-digi-green/20 rounded-full blur-xl animate-float" style={{animationDuration: "11s", animationDelay: "1s"}}></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-digi-blue/20 rounded-full blur-xl animate-float" style={{animationDuration: "13s", animationDelay: "2s"}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-white">
            <Monitor className="h-4 w-4 text-digi-green mr-1" /> Premium Digital Displays
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white text-glow animate-fade-in" style={{animationDelay: "0.2s"}}>
            Digital Screen <span className="text-rgb-animated">Advantages</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.3s"}}>
            Our cutting-edge digital displays combine stunning visuals with smart technology to maximize your business impact
          </p>
        </div>

        {/* Feature showcase image */}
        <div className="mb-16 relative animate-fade-in" style={{animationDelay: "0.4s"}}>
          <div className="absolute inset-0.5 bg-gradient-rgb rounded-xl opacity-75 blur-sm"></div>
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/d0bf0d7e-dc73-4ecb-86be-ad2c4768b83b.png" 
              alt="360 DIGI-SIGNS Premium Digital Display" 
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Brilliance on Display</h3>
                <p className="text-gray-200 max-w-xl">
                  Ultra-bright HD displays with AI-powered content optimization to attract customers and boost engagement
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Advantages cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="bg-black/60 backdrop-blur-sm border-white/5 overflow-hidden group hover:border-digi-green/50 transition-all duration-300 animate-fade-in" 
              style={{animationDelay: `${0.5 + index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-full p-2 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-all duration-300">
                  {advantage.icon}
                </div>
                
                <h4 className="text-xl font-bold text-white text-center mb-3">{advantage.title}</h4>
                <p className="text-gray-300 text-center mb-4">{advantage.description}</p>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-start">
                    <Check className="h-5 w-5 text-digi-green mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-400 text-sm">{advantage.details}</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-rgb opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center animate-fade-in" style={{animationDelay: "1.1s"}}>
          <Button className="bg-rgb-animated font-bold">
            Explore Digital Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DigitalScreenAdvantages;
