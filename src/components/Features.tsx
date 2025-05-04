
import { Monitor, Zap, Smartphone, Check, RefreshCw, Shield, Images, Info, Star } from "lucide-react";

const features = [
  {
    icon: <Monitor className="h-8 w-8 text-digi-red" />,
    title: "Ultra-Bright HD Displays",
    description: "Next-gen transparency with crystal clear resolution, perfect for any lighting condition and viewable from long distances.",
    details: "Our screens feature 1,500+ nits brightness, 4K resolution with HDR support, and anti-glare coating for perfect visibility in direct sunlight."
  },
  {
    icon: <Zap className="h-8 w-8 text-digi-green" />,
    title: "Energy Efficient",
    description: "Our screens use advanced technology to minimize power consumption while maximizing brightness and performance.",
    details: "Up to 40% less power consumption than standard LED displays, with automatic brightness adjustment based on ambient light."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-digi-blue" />,
    title: "Smart Control via App",
    description: "Control your displays remotely through our intuitive app. Update content in real-time from anywhere.",
    details: "Cloud-based content management system accessible from any device with scheduling, playlist creation, and multi-screen synchronization."
  },
  {
    icon: <Star className="h-8 w-8 text-digi-red" />,
    title: "AI-Powered Content",
    description: "AI algorithms optimize your content for maximum impact, analyzing engagement metrics to improve performance.",
    details: "Machine learning analyzes viewer demographics, engagement time, and interaction patterns to suggest optimal content placement and timing."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-digi-green" />,
    title: "Dynamic Content Playback",
    description: "Seamlessly display videos, images, animations, and social media content from Instagram and Facebook.",
    details: "Supports all major file formats including MP4, WebM, GIF, JPG, PNG, SVG with automatic formatting and live social media feeds."
  },
  {
    icon: <Shield className="h-8 w-8 text-digi-blue" />,
    title: "Free Maintenance & Support",
    description: "We handle all repairs, replacements and maintenance to ensure your displays always look perfect.",
    details: "24/7 technical support, next-business-day on-site service, and complimentary annual hardware inspection included in all subscriptions."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            State-of-the-Art <span className="text-rgb-animated">Digital Signage</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our digital screens combine cutting-edge technology with stunning visual impact to help your business stand out. 
            With 360 DigiSigns subscription plans, you get premium displays with zero upfront costs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700 hover:border-digi-green transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              
              {/* Additional detailed information */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-digi-green mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-400 text-sm">{feature.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-800 bg-opacity-50 p-6 rounded-lg max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center text-white">Why Choose 360 DigiSigns?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <Check className="h-5 w-5 text-digi-green mr-2 mt-1" />
              <p className="text-gray-300">Subscription includes hardware, software, installation & maintenance</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-digi-green mr-2 mt-1" />
              <p className="text-gray-300">No upfront costs or hidden fees</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-digi-green mr-2 mt-1" />
              <p className="text-gray-300">Professional installation within 7 business days</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-digi-green mr-2 mt-1" />
              <p className="text-gray-300">Increase foot traffic by up to 35%</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-digi-green mr-2 mt-1" />
              <p className="text-gray-300">Custom content design services available</p>
            </div>
            <div className="flex items-start">
              <Check className="h-5 w-5 text-digi-green mr-2 mt-1" />
              <p className="text-gray-300">Monthly analytics reports on display performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
