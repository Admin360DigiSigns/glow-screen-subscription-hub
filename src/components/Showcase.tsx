
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const showcaseImages = [
  {
    src: "/lovable-uploads/35655ba6-4ae2-46e3-9441-c19bae51b5c6.png",
    alt: "Digital display showing restaurant menu",
    title: "Restaurant Menu Display"
  },
  {
    src: "/lovable-uploads/bf5639d8-512a-46eb-8264-74a6434db7ec.png",
    alt: "Digital display showing food items",
    title: "Food Promotion Screen"
  },
  {
    src: "/lovable-uploads/245b0299-aa91-43ad-952e-48b64b19972a.png",
    alt: "Colorful RGB digital display",
    title: "RGB Wave Technology"
  },
  {
    src: "/lovable-uploads/c7f3d72e-a26d-40a2-98ec-8b935b01e5cd.png",
    alt: "360 Digi-Signs promotional flyer",
    title: "Dynamic Business Displays"
  }
];

const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === showcaseImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? showcaseImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="showcase" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            Our Digital Displays <span className="text-rgb-animated">In Action</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how our screens are transforming businesses across various industries with vibrant, attention-grabbing displays.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Large image showcase */}
          <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={showcaseImages[currentIndex].src} 
                alt={showcaseImages[currentIndex].alt}
                className="w-full h-full object-contain" 
              />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-xl font-bold">
                {showcaseImages[currentIndex].title}
              </h3>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-all"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-all"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>
          
          {/* Thumbnails */}
          <div className="grid grid-cols-4 gap-3 mt-4">
            {showcaseImages.map((image, index) => (
              <div 
                key={index} 
                className={`cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                  currentIndex === index ? 'border-digi-green' : 'border-transparent'
                }`}
                onClick={() => setCurrentIndex(index)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-20 object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
