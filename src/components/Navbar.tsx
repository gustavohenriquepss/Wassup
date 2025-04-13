
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-gray-800" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">
                <span className="text-gradient font-bold">Wassup'</span>
              </span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <a href="#statuspage" className="text-gray-300 hover:text-white transition-colors">Status Page</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">
              Start for Free
            </Button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Features</a>
            <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Pricing</a>
            <a href="#statuspage" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">Status Page</a>
            <a href="#faq" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white">FAQ</a>
            <div className="flex flex-col space-y-2 mt-4 px-3 py-2">
              <Button variant="outline" className="w-full" size="sm">
                Log in
              </Button>
              <Button className="w-full" size="sm">
                Start for Free
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
