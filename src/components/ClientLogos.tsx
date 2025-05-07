
import { useEffect, useState, useRef } from "react";

// Client logos
const clientLogos = [
  {
    src: "/lovable-uploads/925e791a-556d-44a7-834a-34bfcc46a969.png",
    alt: "Bollywood Taste"
  },
  {
    src: "/lovable-uploads/9b138512-1f8d-4fc0-b8e5-a4a33505ae4c.png",
    alt: "Hakka Nation"
  },
  {
    src: "/lovable-uploads/10610d91-f1b2-4cf9-9461-00ece1806bfb.png",
    alt: "Tawa Kitchen"
  },
  {
    src: "/lovable-uploads/15f62eb7-a161-4113-a2b4-6f1662f96468.png",
    alt: "Bombay Paan Wala"
  },
  {
    src: "/lovable-uploads/aacd8391-887e-42d8-9f5a-b847702c26c1.png",
    alt: "Fionn MacCool's"
  },
  {
    src: "/lovable-uploads/f2d2fd80-d327-4a08-85c7-4d6e3d31d05c.png",
    alt: "Fresh Burger"
  },
  {
    src: "/lovable-uploads/7a056745-fcf2-4b6b-a23b-63697ce59802.png",
    alt: "The Chocolate Room"
  },
  {
    src: "/lovable-uploads/4e7925ba-bb49-4bca-92ec-2df0781495af.png",
    alt: "Korean Shop"
  },
  {
    src: "/lovable-uploads/eaed8d1a-7175-4582-bea0-a95eb8b82342.png",
    alt: "Rajun Chicken & Seafood"
  },
  {
    src: "/lovable-uploads/e8d01211-83c5-416d-babf-42e30b2b1eec.png",
    alt: "Helly & Chilly"
  },
  {
    src: "/lovable-uploads/54b66ef5-a968-49cd-b143-5a0645f9c532.png",
    alt: "13 Spices"
  },
  {
    src: "/lovable-uploads/1c8e209d-ee77-4415-8a67-ee6682c113e3.png",
    alt: "Janta Tea Stall"
  },
  {
    src: "/lovable-uploads/311b29b3-c960-47bd-a735-c2a07131302f.png",
    alt: "Symposium Cafe"
  },
  {
    src: "/lovable-uploads/1aab47e4-2e45-45df-be00-ed0fa694df7b.png",
    alt: "Choice"
  },
  {
    src: "/lovable-uploads/ba1f709c-8ede-4db7-8b98-d087b9b2a38b.png",
    alt: "Biryani Villa"
  },
  {
    src: "/lovable-uploads/33f8ce3d-d01d-4d01-9a42-5f451efa4f6d.png",
    alt: "Dhaba Junction"
  },
  {
    src: "/lovable-uploads/9ca1b7c4-9652-4b9b-bd3b-1e004eae2796.png",
    alt: "PaP"
  },
  {
    src: "/lovable-uploads/ff42df18-3c7b-4849-9724-aa27856dc2c8.png",
    alt: "The Curry Bistro"
  },
  {
    src: "/lovable-uploads/72ef0e41-e248-4a8f-a632-f2c93e06b515.png",
    alt: "Nawab's"
  },
  {
    src: "/lovable-uploads/ad91a56e-3ac8-4d8c-8314-b2974f15301d.png",
    alt: "Butter Chicken Roti"
  }
];

const ClientLogos = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 bg-black border-t border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white">Trusted by Leading Businesses</h3>
          <p className="text-gray-400 mt-2">Our digital displays power these amazing brands</p>
        </div>

        <div className="relative overflow-hidden">
          {/* Gradient fade effect on the edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent"></div>
          
          {/* Using CSS-only marquee effect which is more reliable */}
          <div className="marquee-container overflow-hidden">
            <div className="marquee-content flex space-x-12">
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex-none">
                  <div className="p-4 h-32 w-40 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-110 transition-all"
                    />
                  </div>
                </div>
              ))}
              
              {/* Duplicate logos for seamless looping */}
              {clientLogos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex-none">
                  <div className="p-4 h-32 w-40 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-110 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
        .marquee-container {
          width: 100%;
          overflow: hidden;
        }
        
        .marquee-content {
          display: flex;
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Pause animation on hover */
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        `}
      </style>
    </section>
  );
};

export default ClientLogos;
