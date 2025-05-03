
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-black min-h-screen pt-20 overflow-hidden">
      {/* Background RGB gradient effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-digi-red rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-digi-green rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-digi-blue rounded-full opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-white font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="block">NEXGEN</span>
              <span className="block">DIGITAL SCREENS</span>
              <span className="block text-sm font-normal mt-2">POWERED BY</span>
              <div className="flex items-center justify-center lg:justify-start mt-2">
                <span className="text-digi-red font-bold">3</span>
                <span className="text-digi-green font-bold">6</span>
                <span className="text-digi-blue font-bold">0</span>
                <span className="text-white font-bold ml-1">DIGI-SIGNS</span>
              </div>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8">
              Your ultimate partner in digital branding - captivating displays that illuminate your business with AI-powered brilliance.
            </p>
            
            <h2 className="text-rgb-animated text-2xl md:text-3xl font-display font-bold mb-8">
              ILLUMINATE YOUR BUSINESS
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-rgb-animated">
                Start Your Subscription
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Showcase
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-full absolute -top-4 -left-4 bg-digi-red rounded-lg blur-lg opacity-30"></div>
            <div className="w-full h-full absolute -bottom-4 -right-4 bg-digi-blue rounded-lg blur-lg opacity-30"></div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl animate-float">
              <img 
                src="/lovable-uploads/d0bf0d7e-dc73-4ecb-86be-ad2c4768b83b.png" 
                alt="360 Digi Signs Digital Display" 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
