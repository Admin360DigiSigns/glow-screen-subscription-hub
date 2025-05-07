
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Tv, Video, Image, Tag, ZapIcon } from "lucide-react";
import { motion } from "framer-motion";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const productCategories = [
    {
      id: "indoor",
      name: "Indoor Digital Screens",
      description: "High-resolution displays perfect for retail, corporate, and entertainment environments",
      icon: <Monitor className="h-10 w-10" />,
      features: ["Ultra-bright LED panels", "Slim profile design", "Multiple size options", "4K resolution support"],
      animation: "float"
    },
    {
      id: "videowall",
      name: "Video Wall Solutions",
      description: "Create stunning visual experiences with our seamless video wall technology",
      icon: <Tv className="h-10 w-10" />,
      features: ["Bezel-less design", "Synchronized content", "Modular configuration", "Remote management"],
      animation: "pulse-rgb"
    },
    {
      id: "outdoor",
      name: "Outdoor LED Screens",
      description: "Weather-resistant displays designed to capture attention in any outdoor environment",
      icon: <Video className="h-10 w-10" />,
      features: ["IP65 weather protection", "High brightness (7000+ nits)", "Temperature resistant", "Vandal-proof options"],
      animation: "glow-pulse"
    },
    {
      id: "touchkiosk",
      name: "Touchscreen Kiosks",
      description: "Interactive solutions for wayfinding, self-service, and information display",
      icon: <ZapIcon className="h-10 w-10" />,
      features: ["Multi-touch capability", "Anti-microbial coating", "Custom branding options", "ADA compliant"],
      animation: "border-glow"
    },
    {
      id: "drivethrough",
      name: "Drive-Through Kiosks",
      description: "Streamline drive-through operations with our weatherproof display solutions",
      icon: <Image className="h-10 w-10" />,
      features: ["Anti-glare screen", "Integrated speaker system", "Order confirmation display", "Payment integration"],
      animation: "pulse-slow"
    },
    {
      id: "billboard",
      name: "Digital Billboards",
      description: "High-impact outdoor advertising displays with remote content management",
      icon: <Tag className="h-10 w-10" />,
      features: ["Massive visibility", "Scheduled content rotation", "Real-time updates", "Traffic analysis integration"],
      animation: "flow-rgb"
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Stars background */}
      <div className="stars fixed top-0 left-0 w-full h-full"></div>
      <div className="twinkling fixed top-0 left-0 w-full h-full"></div>

      <Navbar />

      {/* Header section */}
      <section className="relative pt-28 pb-12 px-4">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-glow-pulse">
            <span className="text-rgb-animated">Digital Signage</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-300">
            Transform your space with our state-of-the-art digital display technology
          </p>
          <div className="w-24 h-1 bg-gradient-rgb mx-auto rounded-full animate-flow-rgb"></div>
        </div>
      </section>

      {/* Category navigation */}
      <section className="py-8 relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {productCategories.map((category) => (
              <Button 
                key={category.id}
                onClick={() => setActiveCategory(category.id === activeCategory ? null : category.id)}
                className={`${
                  category.id === activeCategory 
                    ? "bg-rgb-animated" 
                    : "bg-gray-800 hover:bg-gray-700"
                } transition-all duration-300`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <motion.div 
                key={category.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={fadeInUpVariants}
                className={`${activeCategory === null || activeCategory === category.id ? "block" : "hidden"}`}
              >
                <Card className="bg-black border border-gray-800 overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-rgb opacity-10 animate-${category.animation}`}></div>
                  
                  <CardHeader className="relative">
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full bg-gradient-rgb animate-pulse-rgb">
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-center">{category.name}</CardTitle>
                    <CardDescription className="text-gray-400 text-center">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <ul className="space-y-2">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-rgb rounded-full mr-2 animate-pulse-rgb"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="relative flex justify-center">
                    <Button className="bg-gradient-rgb animate-flow-rgb">Learn More</Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Discover Our <span className="text-rgb-animated">Premium</span> Display Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-xl p-8 border border-gray-800 bg-black/40 backdrop-blur-sm">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-digi-red opacity-30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-digi-blue opacity-30 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-4">Indoor Digital Displays</h3>
              <p className="text-gray-300 mb-6">
                Our indoor digital screens provide crystal clear visuals and vibrant colors, perfect for retail environments, corporate settings, and entertainment venues. Available in various sizes and configurations to meet your specific needs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-digi-green rounded-full mr-2"></span>
                  <span>Ultra-slim bezels for seamless integration</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-digi-red rounded-full mr-2"></span>
                  <span>4K resolution for stunning clarity</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-digi-blue rounded-full mr-2"></span>
                  <span>Remote content management system</span>
                </li>
              </ul>
              <Button className="bg-rgb-animated">Explore Indoor Solutions</Button>
            </div>
            
            <div className="relative overflow-hidden rounded-xl p-8 border border-gray-800 bg-black/40 backdrop-blur-sm">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-digi-green opacity-30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-digi-red opacity-30 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-4">Outdoor LED Technology</h3>
              <p className="text-gray-300 mb-6">
                Built to withstand harsh weather conditions, our outdoor LED screens deliver exceptional brightness and visibility even in direct sunlight. Ideal for storefronts, event venues, and high-traffic areas where visibility is crucial.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-digi-blue rounded-full mr-2"></span>
                  <span>Weather-resistant construction (IP65 rated)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-digi-green rounded-full mr-2"></span>
                  <span>High brightness levels (7000+ nits)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-digi-red rounded-full mr-2"></span>
                  <span>Temperature resistant (-20°C to 50°C)</span>
                </li>
              </ul>
              <Button className="bg-rgb-animated">Discover Outdoor Options</Button>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Custom Solutions Available</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see exactly what you need? Our team specializes in creating custom digital signage solutions tailored to your specific requirements and space constraints.
            </p>
            <Button className="bg-rgb-animated text-lg px-8 py-6">Request Custom Quote</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
