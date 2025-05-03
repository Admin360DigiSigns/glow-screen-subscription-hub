
import { Monitor, Zap, Smartphone, Check, RefreshCw, Shield } from "lucide-react";

const features = [
  {
    icon: <Monitor className="h-8 w-8 text-digi-red" />,
    title: "Ultra-Bright HD Displays",
    description: "Next-gen transparency with crystal clear resolution, perfect for any lighting condition and viewable from long distances."
  },
  {
    icon: <Zap className="h-8 w-8 text-digi-green" />,
    title: "Energy Efficient",
    description: "Our screens use advanced technology to minimize power consumption while maximizing brightness and performance."
  },
  {
    icon: <Smartphone className="h-8 w-8 text-digi-blue" />,
    title: "Smart Control via App",
    description: "Control your displays remotely through our intuitive app. Update content in real-time from anywhere."
  },
  {
    icon: <Check className="h-8 w-8 text-digi-red" />,
    title: "AI-Powered Content",
    description: "AI algorithms optimize your content for maximum impact, analyzing engagement metrics to improve performance."
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-digi-green" />,
    title: "Dynamic Content Playback",
    description: "Seamlessly display videos, images, animations, and social media content from Instagram and Facebook."
  },
  {
    icon: <Shield className="h-8 w-8 text-digi-blue" />,
    title: "Free Maintenance & Support",
    description: "We handle all repairs, replacements and maintenance to ensure your displays always look perfect."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            State-of-the-Art <span className="text-rgb-animated">Digital Signage</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our digital screens combine cutting-edge technology with stunning visual impact to help your business stand out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
