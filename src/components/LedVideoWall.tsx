
import { Check, X, Monitor, Tv, Layers, Image } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pros = [
  {
    title: "High Brightness",
    description: "Perfect visibility even in direct sunlight or brightly lit environments",
    icon: <Check className="h-5 w-5 text-digi-green" />
  },
  {
    title: "Seamless Design",
    description: "Create displays of any size and shape without visible bezels",
    icon: <Check className="h-5 w-5 text-digi-green" />
  },
  {
    title: "Durability",
    description: "Built to last with weather-resistant materials for indoor and outdoor use",
    icon: <Check className="h-5 w-5 text-digi-green" />
  },
  {
    title: "Customizable",
    description: "Modular design allows for creative installations in various configurations",
    icon: <Check className="h-5 w-5 text-digi-green" />
  }
];

const cons = [
  {
    title: "Initial Investment",
    description: "Higher upfront cost compared to traditional digital signage solutions",
    icon: <X className="h-5 w-5 text-digi-red" />
  },
  {
    title: "Technical Expertise",
    description: "May require specialized knowledge for installation and maintenance",
    icon: <X className="h-5 w-5 text-digi-red" />
  },
  {
    title: "Power Consumption",
    description: "LED walls consume more electricity than some alternative display technologies",
    icon: <X className="h-5 w-5 text-digi-red" />
  }
];

const useCases = [
  {
    title: "Sports Bars & Restaurants",
    description: "Create immersive viewing experiences for patrons watching live sports events",
    icon: <Tv className="h-12 w-12 text-digi-blue p-2" />,
    image: "/lovable-uploads/acc3f8ce-621f-4e3a-b317-7c7a38113100.png"
  },
  {
    title: "Retail Environments",
    description: "Capture customer attention with dynamic product showcases and promotions",
    icon: <Monitor className="h-12 w-12 text-digi-green p-2" />,
    image: "/lovable-uploads/c7f3d72e-a26d-40a2-98ec-8b935b01e5cd.png"
  },
  {
    title: "Corporate Lobbies",
    description: "Make a powerful first impression with branded content and information displays",
    icon: <Layers className="h-12 w-12 text-digi-red p-2" />,
    image: "/lovable-uploads/bf5639d8-512a-46eb-8264-74a6434db7ec.png"
  }
];

const LedVideoWall = () => {
  return (
    <section id="led-video-wall" className="py-20 bg-black relative overflow-hidden">
      {/* RGB background effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-digi-blue opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-digi-red opacity-20 blur-3xl animate-pulse" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-digi-green opacity-20 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-digi-blue/20 rounded-full blur-xl animate-float" style={{animationDuration: "9s"}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-digi-red/20 rounded-full blur-xl animate-float" style={{animationDuration: "11s", animationDelay: "1s"}}></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-digi-green/20 rounded-full blur-xl animate-float" style={{animationDuration: "13s", animationDelay: "2s"}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-white">
            <Image className="h-4 w-4 text-digi-green mr-1" /> Next Generation Display Technology
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white text-glow animate-fade-in" style={{animationDelay: "0.2s"}}>
            LED Video <span className="text-rgb-animated">Wall Solutions</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.3s"}}>
            Transform your space with stunning high-definition LED video walls that deliver unparalleled visual impact
          </p>
        </div>

        {/* Main content image */}
        <div className="mb-16 relative animate-fade-in" style={{animationDelay: "0.4s"}}>
          <div className="absolute inset-0.5 bg-gradient-rgb rounded-xl opacity-75 blur-sm"></div>
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src="/lovable-uploads/acc3f8ce-621f-4e3a-b317-7c7a38113100.png" 
              alt="LED Video Wall in a sports bar" 
              className="w-full h-auto object-cover rounded-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Captivate Your Audience</h3>
                <p className="text-gray-200 max-w-xl">
                  Our LED video walls deliver stunning visuals that command attention and create memorable experiences
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pros and Cons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Pros Section */}
          <div className="animate-fade-in" style={{animationDelay: "0.5s"}}>
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
              <span className="text-digi-green mr-2">Advantages</span> of LED Video Walls
            </h3>
            <div className="space-y-4">
              {pros.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-digi-green/50 transition-all duration-300"
                >
                  <div className="mr-4 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Cons Section */}
          <div className="animate-fade-in" style={{animationDelay: "0.6s"}}>
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
              <span className="text-digi-red mr-2">Considerations</span> to Keep in Mind
            </h3>
            <div className="space-y-4">
              {cons.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-digi-red/50 transition-all duration-300"
                >
                  <div className="mr-4 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Use Cases */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-white animate-fade-in" style={{animationDelay: "0.7s"}}>
            Popular <span className="text-rgb-animated">Use Cases</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="animate-fade-in" 
                style={{animationDelay: `${0.8 + index * 0.1}s`}}
              >
                <Card className="h-full bg-black/60 backdrop-blur-sm border-white/5 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-digi-red/5 via-digi-green/5 to-digi-blue/5 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  <CardHeader className="p-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      {useCase.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white text-center">{useCase.title}</h4>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <p className="text-gray-300 text-center mb-4">{useCase.description}</p>
                    <div className="aspect-video overflow-hidden rounded-lg relative">
                      <div className="absolute inset-0.5 bg-gradient-rgb rounded-lg opacity-50 blur-sm"></div>
                      <img 
                        src={useCase.image} 
                        alt={useCase.title}
                        className="w-full h-full object-cover rounded-lg relative"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-fade-in" style={{animationDelay: "1.1s"}}>
            <Button className="bg-rgb-animated font-bold">
              Request a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LedVideoWall;
