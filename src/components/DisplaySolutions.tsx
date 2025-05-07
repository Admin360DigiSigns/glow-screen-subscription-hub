
import { Monitor, Video, Zap, Smartphone, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

const advantages = [
  {
    icon: <Monitor className="h-10 w-10 text-digi-red p-1" />,
    title: "Ultra HD Resolution",
    description: "Crystal-clear displays with vibrant colors and perfect contrast ratios.",
    category: "both"
  },
  {
    icon: <Zap className="h-10 w-10 text-digi-green p-1" />,
    title: "Energy Efficiency",
    description: "Advanced display technology minimizes power consumption.",
    category: "both"
  },
  {
    icon: <Smartphone className="h-10 w-10 text-digi-blue p-1" />,
    title: "Remote Management",
    description: "Update content from anywhere using our intuitive app.",
    category: "both"
  },
  {
    icon: <Video className="h-10 w-10 text-digi-red p-1" />,
    title: "Indoor Brilliance",
    description: "Perfect for retail stores, restaurants and office environments.",
    category: "digital"
  },
  {
    icon: <Video className="h-10 w-10 text-digi-green p-1" />,
    title: "Outdoor Impact",
    description: "Weather-resistant LED walls with ultra-bright displays.",
    category: "led"
  },
  {
    icon: <Video className="h-10 w-10 text-digi-blue p-1" />,
    title: "Seamless Integration",
    description: "Multi-panel displays that create stunning video walls.",
    category: "led"
  }
];

const DisplaySolutions = () => {
  return (
    <section id="solutions" className="py-20 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-digi-red opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/2 -right-24 w-96 h-96 bg-digi-blue opacity-20 blur-3xl animate-pulse" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-digi-green opacity-20 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-white">
            <Monitor className="h-4 w-4 text-digi-green mr-1" /> Premium Display Solutions
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white text-glow">
            Digital & LED <span className="text-rgb-animated">Display Solutions</span>
          </h2>
          
          <p className="text-gray-300 max-w-3xl mx-auto">
            Choose between stunning digital screens or immersive LED video walls to create the perfect visual experience for your business
          </p>
        </div>

        {/* Solutions Carousel */}
        <div className="mb-16">
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/lovable-uploads/d0bf0d7e-dc73-4ecb-86be-ad2c4768b83b.png" 
                    alt="360 DIGI-SIGNS Premium Digital Display" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
                    <div className="p-6 md:p-8">
                      <Badge className="mb-2 bg-digi-red/90">Digital Screens</Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Premium Digital Displays</h3>
                      <p className="text-gray-200 max-w-xl">
                        Ultra-bright HD displays perfect for menus, promotions and information displays
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/lovable-uploads/acc3f8ce-621f-4e3a-b317-7c7a38113100.png" 
                    alt="360 DIGI-SIGNS LED Video Wall" 
                    className="w-full h-auto object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
                    <div className="p-6 md:p-8">
                      <Badge className="mb-2 bg-digi-blue/90">LED Video Walls</Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Immersive LED Video Walls</h3>
                      <p className="text-gray-200 max-w-xl">
                        Customizable video walls that create stunning visual experiences for any space
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 bg-black/50 border-white/10 hover:bg-black/80 text-white" />
            <CarouselNext className="absolute right-4 bg-black/50 border-white/10 hover:bg-black/80 text-white" />
          </Carousel>
        </div>
        
        {/* Advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="bg-black/60 backdrop-blur-sm border-white/5 overflow-hidden group hover:border-digi-green/50 transition-all duration-300" 
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-full p-2 w-12 h-12 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300 flex-shrink-0">
                    {advantage.icon}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{advantage.title}</h4>
                    <p className="text-gray-300 text-sm">{advantage.description}</p>
                    
                    <div className="mt-3 flex items-center">
                      {advantage.category === "both" ? (
                        <Badge variant="outline" className="text-xs bg-white/5">Digital & LED</Badge>
                      ) : advantage.category === "digital" ? (
                        <Badge variant="outline" className="text-xs bg-digi-red/10 text-digi-red border-digi-red/20">Digital Screens</Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs bg-digi-blue/10 text-digi-blue border-digi-blue/20">LED Walls</Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <Button className="bg-rgb-animated font-bold">
            Explore All Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DisplaySolutions;
