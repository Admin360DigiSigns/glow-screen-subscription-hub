
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
      animation: "float",
      image: "/lovable-uploads/1aa5a6ea-b596-4e57-9966-84b9521adcdf.png"
    },
    {
      id: "videowall",
      name: "Video Wall Solutions",
      description: "Create stunning visual experiences with our seamless video wall technology",
      icon: <Tv className="h-10 w-10" />,
      features: ["Bezel-less design", "Synchronized content", "Modular configuration", "Remote management"],
      animation: "pulse-slow",
      image: "/lovable-uploads/35655ba6-4ae2-46e3-9441-c19bae51b5c6.png"
    },
    {
      id: "outdoor",
      name: "Outdoor LED Screens",
      description: "Weather-resistant displays designed to capture attention in any outdoor environment",
      icon: <Video className="h-10 w-10" />,
      features: ["IP65 weather protection", "High brightness (7000+ nits)", "Temperature resistant", "Vandal-proof options"],
      animation: "glow-pulse",
      image: "/lovable-uploads/245b0299-aa91-43ad-952e-48b64b19972a.png"
    },
    {
      id: "touchkiosk",
      name: "Touchscreen Kiosks",
      description: "Interactive solutions for wayfinding, self-service, and information display",
      icon: <ZapIcon className="h-10 w-10" />,
      features: ["Multi-touch capability", "Anti-microbial coating", "Custom branding options", "ADA compliant"],
      animation: "border-glow",
      image: "/lovable-uploads/311b29b3-c960-47bd-a735-c2a07131302f.png"
    },
    {
      id: "drivethrough",
      name: "Drive-Through Kiosks",
      description: "Streamline drive-through operations with our weatherproof display solutions",
      icon: <Image className="h-10 w-10" />,
      features: ["Anti-glare screen", "Integrated speaker system", "Order confirmation display", "Payment integration"],
      animation: "pulse-slow",
      image: "/lovable-uploads/e0cebf14-cb64-4d2a-b651-ff8878e38a9d.png"
    },
    {
      id: "billboard",
      name: "Digital Billboards",
      description: "High-impact outdoor advertising displays with remote content management",
      icon: <Tag className="h-10 w-10" />,
      features: ["Massive visibility", "Scheduled content rotation", "Real-time updates", "Traffic analysis integration"],
      animation: "border-glow",
      image: "/lovable-uploads/d57eb9f2-1fba-479e-90f5-d681548d7c73.png"
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
      {/* Dark space background with subtle blue nebula effect instead of stars */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-blue-950/30 to-black z-0"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZGVmcz4KICAgICAgICA8ZmlsdGVyIGlkPSJmaWx0ZXIiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgICAgICAgICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIuNzUiIG51bU9jdGF2ZXM9IjQiIHN0aXRjaFRpbGVzPSJzdGl0Y2giIHNlZWQ9IjMiIHJlc3VsdD0idHVyYnVsZW5jZSIgLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIgaW49InR1cmJ1bGVuY2UiIHJlc3VsdD0ibm9pc2VBbHBoYSI+PC9mZUNvbG9yTWF0cml4PgogICAgICAgICAgICA8ZmVDb21wb25lbnRUcmFuc2ZlciBpbj0ibm9pc2VBbHBoYSIgcmVzdWx0PSJub2lzZUFscGhhVHJhbnNmZXIiPgogICAgICAgICAgICAgICAgPGZlRnVuY0EgdHlwZT0idGFibGUiIHRhYmxlVmFsdWVzPSIwIDEiPjwvZmVGdW5jQT4KICAgICAgICAgICAgPC9mZUNvbXBvbmVudFRyYW5zZmVyPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMCIgaW49Im5vaXNlQWxwaGEiIHJlc3VsdD0ibm9pc2VCbHVyIj48L2ZlR2F1c3NpYW5CbHVyPgogICAgICAgICAgICA8ZmVCbGVuZCBtb2RlPSJzb2Z0LWxpZ2h0IiBpbj0ibm9pc2VCbHVyIiBpbjI9IlNvdXJjZUdyYXBoaWMiIHJlc3VsdD0ibm9pc2VCbGVuZCI+PC9mZUJsZW5kPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IiMwNDA4MjAiIGZpbHRlcj0idXJsKCNmaWx0ZXIpIiBvcGFjaXR5PSIwLjIiPjwvcmVjdD4KPC9zdmc+')]
        bg-repeat opacity-30 z-0"></div>

      <Navbar />

      {/* Header section */}
      <section className="relative pt-28 pb-12 px-4">
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">Digital Signage</span> Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
            Transform your space with our state-of-the-art digital display technology
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-300 mx-auto rounded-full"></div>
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
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white" 
                    : "bg-gray-800 hover:bg-gray-700 text-white"
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
                <Card className="bg-gray-900 border border-gray-800 overflow-hidden h-[450px] flex flex-col shadow-lg shadow-blue-900/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20 opacity-20"></div>
                  
                  <CardHeader className="relative">
                    <div className="h-48 w-full mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <CardTitle className="text-2xl text-center text-digi-green font-semibold drop-shadow-[0_0_2px_rgba(106,176,76,0.5)]">{category.name}</CardTitle>
                    <CardDescription className="text-gray-300 text-center">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative flex-grow">
                    <ul className="space-y-2">
                      {category.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-2"></span>
                          <span className="text-white">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="relative flex justify-center mt-auto pb-6">
                    <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                      Learn More
                    </Button>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">
            Discover Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">Premium</span> Display Technology
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="relative overflow-hidden rounded-xl p-8 border border-gray-800 bg-gray-900/80 backdrop-blur-sm h-[600px] flex flex-col shadow-lg shadow-blue-900/20">
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
              
              <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/1aab47e4-2e45-45df-be00-ed0fa694df7b.png" 
                  alt="Indoor Digital Display"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-digi-green drop-shadow-[0_0_2px_rgba(106,176,76,0.5)]">Indoor Digital Displays</h3>
              <p className="text-white mb-6">
                Our indoor digital screens provide crystal clear visuals and vibrant colors, perfect for retail environments, corporate settings, and entertainment venues. Available in various sizes and configurations to meet your specific needs.
              </p>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-digi-green rounded-full mr-2"></span>
                  <span className="text-white">Ultra-slim bezels for seamless integration</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span className="text-white">4K resolution for stunning clarity</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  <span className="text-white">Remote content management system</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white mt-auto">
                Explore Indoor Solutions
              </Button>
            </div>
            
            <div className="relative overflow-hidden rounded-xl p-8 border border-gray-800 bg-gray-900/80 backdrop-blur-sm h-[600px] flex flex-col shadow-lg shadow-blue-900/20">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-600 opacity-20 rounded-full blur-3xl"></div>
              
              <div className="h-48 w-full mb-6 overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/ba1f709c-8ede-4db7-8b98-d087b9b2a38b.png" 
                  alt="Outdoor LED Technology"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-digi-green drop-shadow-[0_0_2px_rgba(106,176,76,0.5)]">Outdoor LED Technology</h3>
              <p className="text-white mb-6">
                Built to withstand harsh weather conditions, our outdoor LED screens deliver exceptional brightness and visibility even in direct sunlight. Ideal for storefronts, event venues, and high-traffic areas where visibility is crucial.
              </p>
              <ul className="space-y-2 mb-6 flex-grow">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                  <span className="text-white">Weather-resistant construction (IP65 rated)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-digi-green rounded-full mr-2"></span>
                  <span className="text-white">High brightness levels (7000+ nits)</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  <span className="text-white">Temperature resistant (-20°C to 50°C)</span>
                </li>
              </ul>
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white mt-auto">
                Discover Outdoor Options
              </Button>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-digi-green drop-shadow-[0_0_2px_rgba(106,176,76,0.5)]">Custom Solutions Available</h3>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Don't see exactly what you need? Our team specializes in creating custom digital signage solutions tailored to your specific requirements and space constraints.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white text-lg px-8 py-6">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;

