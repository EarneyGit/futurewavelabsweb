'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-3 bg-background/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-primary-gradient">Earney</span> Portfolio
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#work" className="hover:text-primary transition-colors">
              Our Work
            </Link>
            <Link href="#reels" className="hover:text-primary transition-colors">
              Reels
            </Link>
            <Link href="#testimonials" className="hover:text-primary transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link 
              href="#contact" 
              className="px-5 py-2 rounded-full bg-primary-gradient text-white bg-primary-gradient-hover transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-background shadow-lg absolute top-full left-0 right-0 p-4"
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="#services" 
              className="hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="#work" 
              className="hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Our Work
            </Link>
            <Link 
              href="#reels" 
              className="hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Reels
            </Link>
            <Link 
              href="#testimonials" 
              className="hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link 
              href="#contact" 
              className="px-5 py-2 rounded-full bg-primary-gradient text-white bg-primary-gradient-hover transition-all duration-300 text-center"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 