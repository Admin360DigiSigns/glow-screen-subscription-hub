
import { Button } from "@/components/ui/button";
import { Info, Star, Check, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen pt-20 overflow-hidden">
      {/* Enhanced background RGB gradient effects with more movement */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-digi-red opacity-40 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-digi-green opacity-40 blur-3xl animate-pulse" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-digi-blue opacity-40 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      
      {/* Additional animated elements */}
      <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-digi-red/30 rounded-full blur-xl animate-float" style={{animationDuration: "7s"}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-digi-green/30 rounded-full blur-xl animate-float" style={{animationDuration: "8s", animationDelay: "1s"}}></div>
      <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-digi-blue/30 rounded-full blur-xl animate-float" style={{animationDuration: "10s", animationDelay: "2s"}}></div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-4 flex items-center justify-center lg:justify-start">
              <div className="bg-white bg-opacity-10 rounded-full px-4 py-1 flex items-center space-x-2 backdrop-blur-sm border border-white/10 animate-pulse-slow">
                <Star className="h-4 w-4 text-yellow-400" />
                <span className="text-white text-sm font-medium">Premium Digital Displays</span>
              </div>
            </div>
            
            <h1 className="text-white font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-glow">
              <span className="block animate-fade-in" style={{animationDelay: "0.2s"}}>NEXGEN</span>
              <span className="block animate-fade-in" style={{animationDelay: "0.4s"}}>DIGITAL SCREENS</span>
              <span className="block text-sm font-normal mt-2 animate-fade-in" style={{animationDelay: "0.6s"}}>POWERED BY</span>
              <div className="flex items-center justify-center lg:justify-start mt-2 logo-shine animate-fade-in" style={{animationDelay: "0.8s"}}>
                <span className="text-digi-red font-bold text-5xl animate-pulse-rgb">3</span>
                <span className="text-digi-green font-bold text-5xl animate-pulse-rgb" style={{animationDelay: "0.3s"}}>6</span>
                <span className="text-digi-blue font-bold text-5xl animate-pulse-rgb" style={{animationDelay: "0.6s"}}>0</span>
                <span className="text-white font-bold ml-1 text-3xl">DIGI-SIGNS</span>
              </div>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 backdrop-blur-sm bg-black/10 p-4 rounded-lg animate-fade-in" style={{animationDelay: "1s"}}>
              Your ultimate partner in digital branding - captivating displays that illuminate your business with AI-powered brilliance.
            </p>
            
            <h2 className="text-rgb-animated text-2xl md:text-3xl font-display font-bold mb-8 animate-fade-in" style={{animationDelay: "1.2s"}}>
              <Sparkles className="h-6 w-6 inline-block mr-2 animate-pulse-slow" />
              ILLUMINATE YOUR BUSINESS
              <Sparkles className="h-6 w-6 inline-block ml-2 animate-pulse-slow" style={{animationDelay: "0.5s"}} />
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8 animate-fade-in" style={{animationDelay: "1.4s"}}>
              <Button size="lg" className="bg-rgb-animated group relative overflow-hidden">
                <span className="absolute inset-0 bg-white/20 transform -translate-x-full hover:translate-x-0 transition-transform duration-300 group-hover:translate-x-full"></span>
                <Zap className="mr-2 h-5 w-5" /> Start Your Subscription
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 group relative overflow-hidden">
                <span className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
                View Showcase
              </Button>
            </div>

            {/* Key benefits section with enhanced styling */}
            <div className="grid grid-cols-2 gap-4 text-left bg-white/5 p-4 rounded-lg backdrop-blur-sm border border-white/10 animate-fade-in hover:border-digi-green/50 transition-all duration-300" style={{animationDelay: "1.6s"}}>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-digi-green mr-2 mt-1 flex-shrink-0 animate-pulse-slow" />
                <div>
                  <p className="text-white text-sm font-medium">No Upfront Costs</p>
                  <p className="text-gray-400 text-xs">All hardware included</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-digi-green mr-2 mt-1 flex-shrink-0 animate-pulse-slow" style={{animationDelay: "0.2s"}} />
                <div>
                  <p className="text-white text-sm font-medium">Professional Installation</p>
                  <p className="text-gray-400 text-xs">Within 7 business days</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-digi-green mr-2 mt-1 flex-shrink-0 animate-pulse-slow" style={{animationDelay: "0.4s"}} />
                <div>
                  <p className="text-white text-sm font-medium">Free Support</p>
                  <p className="text-gray-400 text-xs">24/7 technical assistance</p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 text-digi-green mr-2 mt-1 flex-shrink-0 animate-pulse-slow" style={{animationDelay: "0.6s"}} />
                <div>
                  <p className="text-white text-sm font-medium">Easy Content Updates</p>
                  <p className="text-gray-400 text-xs">Via our mobile app</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Enhanced glowing effect for the image */}
            <div className="w-full h-full absolute -top-4 -left-4 bg-digi-red rounded-lg blur-lg opacity-30 animate-pulse"></div>
            <div className="w-full h-full absolute -bottom-4 -right-4 bg-digi-blue rounded-lg blur-lg opacity-30 animate-pulse" style={{animationDelay: "0.5s"}}></div>
            <div className="w-full h-full absolute top-0 right-0 bg-digi-green rounded-lg blur-lg opacity-20 animate-pulse" style={{animationDelay: "1s"}}></div>
            
            <div className="relative rounded-lg overflow-hidden shadow-2xl animate-float transform hover:scale-105 transition-transform duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-digi-red/20 via-digi-green/20 to-digi-blue/20 animate-flow-rgb"></div>
              
              {/* Animated border effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-digi-red via-digi-green to-digi-blue animate-flow-rgb"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-digi-blue via-digi-red to-digi-green animate-flow-rgb"></div>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-digi-red via-digi-green to-digi-blue animate-flow-rgb"></div>
              <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-digi-blue via-digi-red to-digi-green animate-flow-rgb"></div>
              
              <img 
                src="/lovable-uploads/d0bf0d7e-dc73-4ecb-86be-ad2c4768b83b.png" 
                alt="360 Digi Signs Digital Display" 
                className="w-full h-auto object-cover rounded-lg relative z-10"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-lg p-4 transform translate-y-0 hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center">
                  <Info className="h-5 w-5 text-digi-green mr-2 animate-pulse" />
                  <p className="text-white text-sm">Premium 4K digital display with AI content optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
