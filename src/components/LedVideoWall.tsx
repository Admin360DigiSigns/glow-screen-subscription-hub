
import { Check, X, Monitor, Tv, Layers, Image, Video, Maximize, ScreenShare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pros = [
  {
    title: "Superior Brightness",
    description: "Unmatched brightness levels up to 5,000 nits, ensuring perfect visibility even in direct sunlight or brightly lit environments",
    icon: <Check className="h-5 w-5 text-digi-green" />,
    animation: "animate-fade-in",
    delay: "0.1s"
  },
  {
    title: "Seamless Modular Design",
    description: "Create displays of any size and shape without visible bezels, offering complete creative freedom for your installation",
    icon: <Check className="h-5 w-5 text-digi-green" />,
    animation: "animate-fade-in",
    delay: "0.2s"
  },
  {
    title: "Weather Resistance",
    description: "IP65-rated components built to withstand harsh weather conditions, extreme temperatures, and high humidity environments",
    icon: <Check className="h-5 w-5 text-digi-green" />,
    animation: "animate-fade-in",
    delay: "0.3s"
  },
  {
    title: "Flexible Configurations",
    description: "Modular design allows for curved, angled, or even 3D installations to fit any space or architectural requirements",
    icon: <Check className="h-5 w-5 text-digi-green" />,
    animation: "animate-fade-in",
    delay: "0.4s"
  },
  {
    title: "Wide Viewing Angles",
    description: "Maintains perfect image quality at up to 160° viewing angles, ensuring every viewer sees vivid, undistorted content",
    icon: <Check className="h-5 w-5 text-digi-green" />,
    animation: "animate-fade-in",
    delay: "0.5s"
  },
  {
    title: "Long Operational Lifespan",
    description: "100,000+ hour LED lifespan with redundant power systems ensuring reliable 24/7 operation for years",
    icon: <Check className="h-5 w-5 text-digi-green" />,
    animation: "animate-fade-in",
    delay: "0.6s"
  }
];

const cons = [
  {
    title: "Higher Initial Investment",
    description: "Premium components and installation expertise result in higher upfront costs compared to traditional digital signage solutions",
    icon: <X className="h-5 w-5 text-digi-red" />,
    animation: "animate-fade-in",
    delay: "0.7s"
  },
  {
    title: "Professional Installation Required",
    description: "Complex mounting systems and precise calibration necessitate specialized installation teams and equipment",
    icon: <X className="h-5 w-5 text-digi-red" />,
    animation: "animate-fade-in",
    delay: "0.8s"
  },
  {
    title: "Power Consumption",
    description: "Higher brightness levels require more power, though our latest models use up to 30% less energy than previous generations",
    icon: <X className="h-5 w-5 text-digi-red" />,
    animation: "animate-fade-in",
    delay: "0.9s"
  },
  {
    title: "Regular Maintenance",
    description: "Professional calibration and maintenance recommended quarterly to ensure optimal performance and longevity",
    icon: <X className="h-5 w-5 text-digi-red" />,
    animation: "animate-fade-in",
    delay: "1.0s"
  }
];

const useCases = [
  {
    title: "Sports Venues & Entertainment",
    description: "Create immersive stadium experiences with massive scoreboards and interactive fan engagement displays that elevate the game day atmosphere",
    icon: <Tv className="h-12 w-12 text-digi-blue p-2" />,
    image: "/lovable-uploads/acc3f8ce-621f-4e3a-b317-7c7a38113100.png",
    animation: "animate-fade-in",
    delay: "1.1s"
  },
  {
    title: "Retail & Brand Experiences",
    description: "Transform storefronts and retail environments with captivating product showcases that stop shoppers in their tracks and drive engagement",
    icon: <Monitor className="h-12 w-12 text-digi-green p-2" />,
    // Using only one image for retail
    image: "/lovable-uploads/094e86c9-ef5b-4edd-b8da-5379d9dcf8b2.png",
    animation: "animate-fade-in",
    delay: "1.2s"
  },
  {
    title: "Corporate Environments",
    description: "Make powerful first impressions in lobbies and briefing rooms with branded content walls that showcase your company's vision and achievements",
    icon: <Layers className="h-12 w-12 text-digi-red p-2" />,
    image: "/lovable-uploads/c6b55d29-2d24-48b7-95e8-054ad34cf13a.png", // Updated image
    animation: "animate-fade-in",
    delay: "1.3s"
  },
  {
    title: "Museums & Exhibitions",
    description: "Create interactive, educational displays that bring exhibits to life with dynamic visuals and touchscreen interactivity for memorable experiences",
    icon: <ScreenShare className="h-12 w-12 text-digi-blue p-2" />,
    image: "/lovable-uploads/47882787-f5cf-418b-999e-1065f6b76035.png",
    animation: "animate-fade-in",
    delay: "1.4s"
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
            <Maximize className="h-4 w-4 text-digi-green mr-1" /> Premium Display Technology
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white text-glow animate-fade-in" style={{animationDelay: "0.2s"}}>
            LED Video <span className="text-rgb-animated">Wall Solutions</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.3s"}}>
            Transform any environment with our spectacular high-definition LED video walls that deliver unprecedented visual impact and flexibility
          </p>
        </div>

        {/* Main content image with enhanced animation */}
        <div className="mb-16 relative animate-fade-in" style={{animationDelay: "0.4s"}}>
          <div className="absolute inset-0.5 bg-gradient-rgb rounded-xl opacity-75 blur-sm animate-pulse-slow"></div>
          <div className="relative overflow-hidden rounded-xl group">
            <img 
              src="/lovable-uploads/acc3f8ce-621f-4e3a-b317-7c7a38113100.png" 
              alt="LED Video Wall in a sports bar" 
              className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Spectacular Visual Experiences</h3>
                <p className="text-gray-200 max-w-xl">
                  Our LED video walls deliver breathtaking visuals that command attention and create unforgettable moments for your audience
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Pros and Cons with enhanced animations */}
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
                  className={`flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-digi-green/50 transition-all duration-300 ${item.animation}`}
                  style={{animationDelay: item.delay}}
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
                  className={`flex items-start p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-digi-red/50 transition-all duration-300 ${item.animation}`}
                  style={{animationDelay: item.delay}}
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
        
        {/* Use Cases with enhanced animations */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-white animate-fade-in" style={{animationDelay: "0.7s"}}>
            Popular <span className="text-rgb-animated">Applications</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className={`${useCase.animation}`}
                style={{animationDelay: useCase.delay}}
              >
                <Card className="h-full bg-black/60 backdrop-blur-sm border-white/5 relative overflow-hidden group hover:border-digi-blue/30 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-digi-red/5 via-digi-green/5 to-digi-blue/5 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  
                  <CardHeader className="p-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10 w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 group-hover:border-digi-blue/30 transition-all duration-300">
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
                        className="w-full h-full object-cover rounded-lg relative transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center animate-fade-in" style={{animationDelay: "1.6s"}}>
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
