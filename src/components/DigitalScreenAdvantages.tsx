
import { Monitor, Zap, Smartphone, Check, Video, RefreshCw, Shield, Images, Layers } from "lucide-react";
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
    icon: <Layers className="h-12 w-12 text-digi-blue p-2" />,
    title: "Transparent Display Technology",
    description: "Revolutionary transparent screens that blend seamlessly with your environment while displaying vivid content.",
    details: "Up to 80% transparency with adjustable opacity settings, perfect for retail storefronts, museum displays, and modern office environments."
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

        {/* Transparent Screen Highlight Box - Dark Background with Lighting Animation */}
        <div className="mb-16 relative animate-fade-in" style={{animationDelay: "0.4s"}}>
          {/* Dark background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-xl"></div>
          
          {/* Animated lighting effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-xl">
              {/* Moving light beam effect */}
              <div className="absolute top-0 left-0 w-1/3 h-[400%] bg-gradient-to-b from-transparent via-digi-blue/20 to-transparent rotate-45 animate-light-sweep"></div>
              <div className="absolute top-0 right-0 w-1/4 h-[400%] bg-gradient-to-b from-transparent via-digi-red/20 to-transparent -rotate-45 animate-light-sweep-reverse"></div>
              
              {/* Subtle pulsing glow spots */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-digi-green/10 rounded-full blur-2xl animate-pulse-slow"></div>
              <div className="absolute bottom-1/4 right-1/5 w-40 h-40 bg-digi-red/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: "1.5s"}}></div>
              <div className="absolute top-2/3 left-2/3 w-24 h-24 bg-digi-blue/10 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: "0.7s"}}></div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl p-8 bg-black/60 backdrop-blur-md border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6 text-glow">
                  <span className="text-digi-red">Transparent</span> <span className="text-digi-green">Digital</span> <span className="text-digi-blue">Screens</span>
                </h3>
                
                <p className="text-xl text-gray-100 mb-4 font-light leading-relaxed">
                  Experience the future with our revolutionary transparent digital displays that create a <span className="font-semibold text-digi-green">magical floating content effect</span>.
                </p>
                
                <p className="text-lg text-gray-200 mb-6">
                  Our transparent screens allow content to appear suspended in mid-air while maintaining visibility through the display, perfect for:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-digi-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Retail storefronts that showcase products while displaying dynamic content</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-digi-red mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Museum exhibits that overlay information without blocking artifacts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-digi-blue mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Corporate environments with glass partitions and meeting rooms</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-digi-green mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">Hospitality settings creating immersive experiences without obstructing views</span>
                  </li>
                </ul>
                
                <p className="text-gray-300 italic">
                  "Transparent displays create <span className="text-digi-green font-semibold">73%</span> more engagement than traditional screens in high-foot-traffic areas."
                </p>
              </div>
              
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-digi-red via-digi-green to-digi-blue rounded-xl opacity-50 animate-border-glow blur-sm"></div>
                <div className="relative bg-black/60 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                  <h4 className="text-xl font-semibold text-white mb-4">Transparent Display Features</h4>
                  <div className="flex flex-col space-y-6">
                    {/* Content intentionally left empty as per user request */}
                  </div>
                </div>
                
                {/* Floating light particles */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="particle-1 absolute w-1 h-1 rounded-full bg-digi-blue animate-float"></div>
                  <div className="particle-2 absolute w-2 h-2 rounded-full bg-digi-red animate-float" style={{animationDelay: "1s", animationDuration: "7s"}}></div>
                  <div className="particle-3 absolute w-1.5 h-1.5 rounded-full bg-digi-green animate-float" style={{animationDelay: "2s", animationDuration: "9s"}}></div>
                </div>
              </div>
            </div>
            
            {/* Additional animated elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-digi-red opacity-20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-digi-blue opacity-20 rounded-full blur-2xl animate-pulse" style={{animationDelay: "1.5s"}}></div>
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
