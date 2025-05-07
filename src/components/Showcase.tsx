
import { useRef } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
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
        
        <div className="relative">
          {/* Scroll buttons for horizontal navigation */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button 
              onClick={scrollLeft}
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 border-white/20 hover:bg-black/80"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
              <span className="sr-only">Scroll left</span>
            </Button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button 
              onClick={scrollRight}
              variant="outline"
              size="icon"
              className="rounded-full bg-black/50 border-white/20 hover:bg-black/80"
            >
              <ChevronRight className="h-6 w-6 text-white" />
              <span className="sr-only">Scroll right</span>
            </Button>
          </div>
          
          {/* Horizontal scrolling gallery */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-4 pb-6 no-scrollbar scroll-smooth snap-x"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {showcaseImages.map((image, index) => (
              <div 
                key={index}
                className="flex-none snap-center w-[300px] md:w-[400px] transition-transform hover:scale-[1.02] duration-200"
              >
                <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 h-full">
                  <div className="relative aspect-video">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-full object-cover" 
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg">{image.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
