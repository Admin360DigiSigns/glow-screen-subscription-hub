
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center logo-shine">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex logo-glow">
                <span className="text-digi-red font-bold text-4xl animate-pulse">3</span>
                <span className="text-digi-green font-bold text-4xl animate-pulse" style={{animationDelay: "0.2s"}}>6</span>
                <span className="text-digi-blue font-bold text-4xl animate-pulse" style={{animationDelay: "0.4s"}}>0</span>
              </div>
              <div className="block">
                <span className="font-display font-bold text-2xl text-white">DIGI-SIGNS</span>
                <span className="block text-xs text-gray-300">ILLUMINATE YOUR BUSINESS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end md:flex-1">
            <div className="flex space-x-6 mr-4">
              <Link to="/" className="text-white hover:text-digi-green font-medium">Home</Link>
              <a href="/#features" className="text-white hover:text-digi-green font-medium">Features</a>
              <a href="/#digital-advantages" className="text-white hover:text-digi-green font-medium">Digital Screens</a>
              <Link to="/pricing" className="text-white hover:text-digi-green font-medium">Pricing</Link>
              <a href="/#showcase" className="text-white hover:text-digi-green font-medium">Gallery</a>
              <a href="/#led-video-wall" className="text-white hover:text-digi-green font-medium">LED Solutions</a>
              <a href="/#testimonials" className="text-white hover:text-digi-green font-medium">Clients</a>
              <a href="/#contact" className="text-white hover:text-digi-green font-medium">Contact</a>
            </div>
            <Button className="bg-rgb-animated font-bold">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white"
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black shadow-md">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900">Home</Link>
          <a href="/#features" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900">Features</a>
          <a href="/#digital-advantages" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900">Digital Screens</a>
          <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900">Pricing</Link>
          <a href="/#showcase" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900">Gallery</a>
          <a href="/#led-video-wall" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900">LED Solutions</a>
          <a href="/#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900">Clients</a>
          <a href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-900">Contact</a>
          <div className="px-3 py-2">
            <Button className="w-full bg-rgb-animated">Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
