
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-2">
              <div className="flex">
                <span className="text-digi-red font-bold text-4xl">3</span>
                <span className="text-digi-green font-bold text-4xl">6</span>
                <span className="text-digi-blue font-bold text-4xl">0</span>
              </div>
              <div className="hidden md:block">
                <span className="font-display font-bold text-2xl">DIGI-SIGNS</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end md:flex-1">
            <div className="flex space-x-6 mr-4">
              <a href="#" className="text-gray-800 hover:text-digi-blue font-medium">Home</a>
              <a href="#features" className="text-gray-800 hover:text-digi-blue font-medium">Features</a>
              <a href="#pricing" className="text-gray-800 hover:text-digi-blue font-medium">Pricing</a>
              <a href="#showcase" className="text-gray-800 hover:text-digi-blue font-medium">Gallery</a>
              <a href="#testimonials" className="text-gray-800 hover:text-digi-blue font-medium">Clients</a>
              <a href="#contact" className="text-gray-800 hover:text-digi-blue font-medium">Contact</a>
            </div>
            <Button className="bg-rgb-animated">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Home</a>
          <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Features</a>
          <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Pricing</a>
          <a href="#showcase" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Gallery</a>
          <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Clients</a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">Contact</a>
          <div className="px-3 py-2">
            <Button className="w-full bg-rgb-animated">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
