
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const showcaseImages = [
  {
    src: "/lovable-uploads/daa97f75-40ac-4c27-b4e7-a1b534654e56.png",
    alt: "Janta Tea Stall with LED display",
    title: "Digital Signage for Small Businesses"
  },
  {
    src: "/lovable-uploads/1aa5a6ea-b596-4e57-9966-84b9521adcdf.png",
    alt: "Hakka logo illuminated display",
    title: "LED Backlit Storefront Signage"
  },
  {
    src: "/lovable-uploads/1d361410-4cb4-497e-8a27-4e713fe0921e.png",
    alt: "Hakka Nation restaurant digital display",
    title: "Restaurant Digital Menu Boards"
  },
  {
    src: "/lovable-uploads/12ed8fa7-9cc9-4ada-aefa-6c1ffd2ccce2.png",
    alt: "Large smartphone display on building",
    title: "Building Facade Video Wall"
  },
  {
    src: "/lovable-uploads/fa06d4ee-9cf9-4072-b6f9-94917a3178bd.png",
    alt: "Chai Hai digital menu display",
    title: "Interactive Beverage Menus"
  },
  {
    src: "/lovable-uploads/d03bb943-ff57-4e6d-b06f-33a4261175a6.png",
    alt: "2 for 20 sandwich combos digital sign",
    title: "Dynamic Promotional Displays"
  },
  {
    src: "/lovable-uploads/50a56687-0542-4401-9453-856bc48c8ea7.png",
    alt: "Pro Passport Photo digital sign",
    title: "Retail Service Advertising"
  },
  {
    src: "/lovable-uploads/e0cebf14-cb64-4d2a-b651-ff8878e38a9d.png",
    alt: "Tawa Kitchen digital menu display",
    title: "Food Item Promotion Screen"
  },
  {
    src: "/lovable-uploads/9c92c5a4-6436-431e-9ddb-dc17df729e3d.png",
    alt: "Choice Indian Restaurant with digital displays",
    title: "Multi-Screen Restaurant Marketing"
  },
  {
    src: "/lovable-uploads/1f84ea85-a2d9-4fc4-951b-712caa2d2394.png",
    alt: "Choice Restaurant signage at night",
    title: "Night-Time Digital Advertising"
  },
  {
    src: "/lovable-uploads/bb518ef3-58be-4bf0-8058-a0c54bfe78e9.png",
    alt: "Korean Shop coming soon display",
    title: "Coming Soon Announcements"
  },
  {
    src: "/lovable-uploads/d57eb9f2-1fba-479e-90f5-d681548d7c73.png",
    alt: "Hakka Nation illuminated storefront",
    title: "Full Storefront Digital Integration"
  },
  {
    src: "/lovable-uploads/b17c695d-c844-4445-9606-355a80aee342.png",
    alt: "Xpress Pizza House digital menu displays",
    title: "Multi-Offer Digital Signage"
  }
];

const Showcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload images for smoother experience
  useEffect(() => {
    const preloadImages = () => {
      const promises = showcaseImages.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(promises)
        .then(() => setIsLoading(false))
        .catch(() => setIsLoading(false));
    };

    preloadImages();
  }, []);

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
            Digital Displays <span className="text-rgb-animated">In Action</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how our LED and digital screens are transforming businesses across various industries with vibrant, attention-grabbing displays.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Main featured image */}
          <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-xl border border-gray-800">
            <AspectRatio ratio={16/9} className="bg-black">
              <div className="absolute inset-0 flex items-center justify-center">
                {isLoading ? (
                  <div className="animate-pulse bg-gray-800 w-full h-full"></div>
                ) : (
                  <img 
                    src={showcaseImages[currentIndex].src} 
                    alt={showcaseImages[currentIndex].alt}
                    className="w-full h-full object-contain" 
                  />
                )}
              </div>
              
              {/* Image caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white text-xl font-bold">
                  {showcaseImages[currentIndex].title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {showcaseImages[currentIndex].alt}
                </p>
              </div>
              
              {/* Navigation buttons */}
              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 text-white transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </AspectRatio>
          </div>
          
          {/* Thumbnails grid */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-white mb-4">Browse Our Digital Signage Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {showcaseImages.map((image, index) => (
                <Card 
                  key={index} 
                  className={`cursor-pointer transition-all transform hover:scale-105 ${
                    currentIndex === index 
                      ? 'ring-2 ring-digi-green border-digi-green' 
                      : 'border-gray-800 bg-gray-900'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <CardContent className="p-1">
                    <AspectRatio ratio={1/1}>
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-full object-cover rounded" 
                      />
                    </AspectRatio>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
