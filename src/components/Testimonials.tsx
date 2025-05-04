
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
        
        <div className="mt-16">
          <p className="text-white/70 mb-6 animate-fade-in" style={{animationDelay: "1s"}}>Trusted by businesses across the country</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 animate-fade-in hover:border-digi-red/50 transition-all duration-300" style={{animationDelay: "1.1s"}}>
              <img src="/lovable-uploads/f1f53656-270a-4992-94d3-a3116d6bc129.png" alt="360 DigiSigns Logo" className="h-12 object-contain" />
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 animate-fade-in hover:border-digi-green/50 transition-all duration-300" style={{animationDelay: "1.2s"}}>
              <img src="/lovable-uploads/47882787-f5cf-418b-999e-1065f6b76035.png" alt="Client Logo" className="h-12 object-contain" />
            </div>
            <div className="hidden sm:block bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 animate-fade-in hover:border-digi-blue/50 transition-all duration-300" style={{animationDelay: "1.3s"}}>
              <Shield className="h-12 w-12 text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
