import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full bg-white z-50 transition-all duration-200 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-primary font-bold text-xl">
              Launch<span className="text-primary/90">AI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors duration-200">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors duration-200">
              Pricing
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors duration-200">
              Contact
            </a>
            <a href="#" className="text-primary hover:text-primary/90 font-medium">
              Login
            </a>
            <a href="#" className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
              Sign Up
            </a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-500 hover:text-primary focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#pricing" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary/90"
            >
              Login
            </a>
            <a 
              href="#" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-primary text-white hover:bg-primary/90"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
