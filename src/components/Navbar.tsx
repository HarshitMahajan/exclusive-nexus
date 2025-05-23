
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHumanPage = location.pathname === '/human';

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHumanPage 
          ? scrolled ? 'bg-black/70 backdrop-blur-lg py-3' : 'bg-transparent py-5' 
          : scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-display font-bold text-gradient">Cofounds</Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('jobs')}
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            Jobs
          </button>
          <button 
            onClick={() => scrollToSection('reviews')}
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('stories')}
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            Stories
          </button>
          <Link 
            to="/human" 
            className={`text-sm font-medium transition-colors ${
              isHumanPage ? 'text-purple-400' : 'hover:text-purple-600'
            }`}
          >
            Human
          </Link>
        </div>
        
        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 border-0">
          <MessageSquare className="h-4 w-4 mr-2" />
          Join Community
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
