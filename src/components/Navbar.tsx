
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";
import { ProductNavMenu } from "./ProductNavMenu";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center logo-shine">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex">
                <span className="text-digi-red font-bold text-4xl animate-pulse">3</span>
                <span className="text-digi-green font-bold text-4xl animate-pulse" style={{animationDelay: "0.2s"}}>6</span>
                <span className="text-digi-blue font-bold text-4xl animate-pulse" style={{animationDelay: "0.4s"}}>0</span>
              </div>
              <div className="block">
                <span className="font-display font-bold text-2xl text-gray-800">DIGI-SIGNS</span>
                <span className="block text-xs text-gray-500">ILLUMINATE YOUR BUSINESS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <span className="text-gray-800 hover:text-digi-blue transition-colors font-display font-bold"><Link to="/">Home</Link></span>
              <span className="text-gray-800 hover:text-digi-blue transition-colors font-display font-bold"><Link to="/products">Products</Link></span>
              <span className="text-gray-800 hover:text-digi-blue transition-colors font-display font-bold"><Link to="/pricing">Pricing</Link></span>
              <span className="text-gray-800 hover:text-digi-blue transition-colors font-display font-bold"><a href="/#showcase">About Us</a></span>
            </div>
          </div>

          {/* Get Started Button */}
          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-digi-blue hover:bg-digi-blue/90 text-white font-bold">Get Started</Button>
              </DialogTrigger>
              <DialogContent className="bg-white border-gray-200 text-gray-800 max-w-xl">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700"
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
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-display font-bold text-gray-800 hover:bg-gray-100">Home</Link>
          <Link to="/products" className="block px-3 py-2 rounded-md text-base font-display font-bold text-gray-800 hover:bg-gray-100">Products</Link>
          <Link to="/pricing" className="block px-3 py-2 rounded-md text-base font-display font-bold text-gray-800 hover:bg-gray-100">Pricing</Link>
          <a href="/#showcase" className="block px-3 py-2 rounded-md text-base font-display font-bold text-gray-800 hover:bg-gray-100">About Us</a>
          <div className="px-3 py-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-digi-blue hover:bg-digi-blue/90 text-white">Get Started</Button>
              </DialogTrigger>
              <DialogContent className="bg-white border-gray-200 text-gray-800 max-w-xl">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
