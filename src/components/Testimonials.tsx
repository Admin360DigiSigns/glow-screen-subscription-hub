
import { Star, BadgeCheck, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    name: "Hakka Nation",
    role: "Restaurant",
    content: "The digital screens from 360 DigiSigns have completely transformed our restaurant. Our specials and promotions get noticed instantly, and sales have increased significantly since installation.",
    logo: "/lovable-uploads/47882787-f5cf-418b-999e-1065f6b76035.png"
  },
  {
    name: "Symposium Cafe",
    role: "Restaurant & Bar",
    content: "We've been using 360 DigiSigns for over a year now, and the impact on our business has been tremendous. The screens are incredibly bright, reliable, and easy to update.",
    logo: "/lovable-uploads/47882787-f5cf-418b-999e-1065f6b76035.png"
  },
  {
    name: "Cajun Chicken",
    role: "Fast Food Restaurant",
    content: "The customer service at 360 DigiSigns is exceptional. They helped us set everything up, trained our staff, and are always available when we need assistance with content updates.",
    logo: "/lovable-uploads/47882787-f5cf-418b-999e-1065f6b76035.png"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-20 bg-black">
      {/* RGB background effects similar to Hero section */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-digi-red opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-digi-green opacity-20 blur-3xl animate-pulse" style={{animationDelay: "0.5s"}}></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-digi-blue opacity-20 blur-3xl animate-pulse" style={{animationDelay: "1s"}}></div>
      
      {/* Animated particles similar to Hero */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-digi-red/20 rounded-full blur-xl animate-float" style={{animationDuration: "9s"}}></div>
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-digi-green/20 rounded-full blur-xl animate-float" style={{animationDuration: "11s", animationDelay: "1s"}}></div>
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-digi-blue/20 rounded-full blur-xl animate-float" style={{animationDuration: "13s", animationDelay: "2s"}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 text-white">
            <Star className="h-4 w-4 text-yellow-400 mr-1" /> Trusted By Leading Businesses
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-white text-glow animate-fade-in" style={{animationDelay: "0.2s"}}>
            Client <span className="text-rgb-animated">Success Stories</span>
          </h2>
          
          <p className="text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: "0.3s"}}>
            See what our clients are saying about our digital signage solutions and how they're transforming their business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in" 
              style={{animationDelay: `${0.4 + index * 0.2}s`}}
            >
              {/* Animated border glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-rgb rounded-xl opacity-50 group-hover:opacity-100 animate-pulse-rgb blur-sm transition duration-300"></div>
              
              <Card className="h-full bg-black/60 backdrop-blur-sm border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-digi-red/5 via-digi-green/5 to-digi-blue/5 opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <div className="flex flex-shrink-0 h-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-pulse-slow" style={{animationDelay: `${i * 0.2}s`}} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-2">
                  <blockquote className="text-gray-200 mb-6 relative">
                    <span className="text-5xl absolute -top-2 -left-1 text-digi-red opacity-20">"</span>
                    <span className="relative z-10">{testimonial.content}</span>
                    <span className="text-5xl absolute -bottom-8 -right-1 text-digi-blue opacity-20">"</span>
                  </blockquote>
                </CardContent>
                
                <CardFooter className="pt-2 mt-auto flex items-center">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 mr-4 border border-white/10 animate-border-glow">
                    {testimonial.logo ? (
                      <img 
                        src={testimonial.logo} 
                        alt={`${testimonial.name} logo`}
                        className="h-10 w-auto object-contain"
                      />
                    ) : (
                      <div className="h-10 w-10 bg-gray-800 rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-white">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-white flex items-center">
                      {testimonial.name}
                      <BadgeCheck className="h-4 w-4 text-digi-green ml-1" />
                    </h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Creative global presence section replacing "Trusted by businesses across the country" */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-digi-blue/10 rounded-3xl"></div>
          
          <div className="relative z-10 p-8 md:p-12 overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="space-y-6">
                <Badge className="px-3 py-1 bg-digi-blue/20 text-digi-blue border-digi-blue/30">
                  Global Impact
                </Badge>
                
                <h3 className="text-2xl md:text-3xl font-bold">
                  Illuminating Businesses <span className="text-rgb-animated">Across The Globe</span>
                </h3>
                
                <p className="text-gray-300">
                  From bustling city centers to suburban shopping districts, our digital signage solutions are helping businesses stand out and capture attention in over 120 cities worldwide.
                </p>
                
                {/* Animated stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in" style={{animationDelay: "0.6s"}}>
                    <div className="text-2xl md:text-3xl font-bold text-digi-red">1200+</div>
                    <div className="text-xs md:text-sm text-gray-400">Installations</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in" style={{animationDelay: "0.8s"}}>
                    <div className="text-2xl md:text-3xl font-bold text-digi-green">98%</div>
                    <div className="text-xs md:text-sm text-gray-400">Satisfaction</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in" style={{animationDelay: "1s"}}>
                    <div className="text-2xl md:text-3xl font-bold text-digi-blue">24/7</div>
                    <div className="text-xs md:text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>
              
              {/* Animated world map/globe visualization */}
              <div className="relative h-64 md:h-80 animate-fade-in" style={{animationDelay: "0.5s"}}>
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Glowing dots representing global locations */}
                  <div className="relative w-full h-full">
                    {/* World map silhouette */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full bg-white/5 mask-world-map rounded-xl"></div>
                    </div>
                    
                    {/* Location dots - animated appearing */}
                    <div className="absolute top-[20%] left-[25%] w-3 h-3 bg-digi-red rounded-full animate-ping-slow" style={{animationDelay: "1s"}}></div>
                    <div className="absolute top-[30%] left-[80%] w-2 h-2 bg-digi-green rounded-full animate-ping-slow" style={{animationDelay: "2s"}}></div>
                    <div className="absolute top-[70%] left-[60%] w-2 h-2 bg-digi-blue rounded-full animate-ping-slow" style={{animationDelay: "0.5s"}}></div>
                    <div className="absolute top-[40%] left-[45%] w-3 h-3 bg-digi-red rounded-full animate-ping-slow" style={{animationDelay: "1.5s"}}></div>
                    <div className="absolute top-[60%] left-[30%] w-2 h-2 bg-digi-green rounded-full animate-ping-slow" style={{animationDelay: "2.2s"}}></div>
                    <div className="absolute top-[25%] left-[10%] w-2 h-2 bg-digi-blue rounded-full animate-ping-slow" style={{animationDelay: "0.8s"}}></div>
                    <div className="absolute top-[65%] left-[75%] w-2 h-2 bg-digi-red rounded-full animate-ping-slow" style={{animationDelay: "1.8s"}}></div>
                    
                    {/* Connecting lines animation */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-rgb opacity-20 blur-lg animate-pulse-slow"></div>
                    </div>
                    
                    {/* Central hub */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-rgb rounded-full opacity-70 animate-pulse-rgb blur-md"></div>
                        <div className="relative bg-white p-3 rounded-full z-10">
                          <img 
                            src="/lovable-uploads/f1f53656-270a-4992-94d3-a3116d6bc129.png" 
                            alt="360 DigiSigns Logo" 
                            className="h-12 w-12 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
