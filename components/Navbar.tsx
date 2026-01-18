'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

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

  const navItems = [
    { href: "#about-section", label: "About Us" },
    { href: "#expertise", label: "Expertise" },
    { href: "#reels", label: "Reels" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-50 px-4 md:px-6 pt-4 md:pt-6"
    >
      {/* Floating Container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`mx-auto max-w-7xl transition-all duration-500 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-2xl shadow-2xl border border-white/10' 
            : 'bg-black/40 backdrop-blur-xl border border-white/5'
        } rounded-full px-6 md:px-8 py-3 md:py-4`}
      >
        {/* Floating glow effect */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-xl transition-opacity duration-500 ${scrolled ? 'opacity-60' : 'opacity-30'}`} />
        
        <div className="relative flex justify-between items-center">
          {/* Logo with enhanced styling */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link href="/" className="relative group">
              <div className="relative flex items-center">
                <Image
                  src="/fwl-logo-white.png"
                  alt="FWL Logo"
                  width={160}
                  height={60}
                  className="h-12 md:h-14 w-auto"
                  priority
                />
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  className="relative px-4 py-2 text-white/80 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10 font-medium">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full group-hover:left-0 transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
            
            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="#contact" 
                className="relative ml-4 px-6 py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500" />
                <span className="relative z-10">Let's Talk</span>
              </Link>
            </motion.div>
          </div>
          
          {/* Enhanced Mobile Menu Button */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative p-2 text-2xl text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 hover:opacity-100 transition duration-300" />
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </motion.div>
          </motion.button>
        </div>
      </motion.div>
      
      {/* Enhanced Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl rounded-3xl mx-4 mt-4 overflow-hidden"
          >
            <div className="px-6 py-6">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href}
                      className="relative block px-4 py-3 text-white/80 hover:text-white transition-all duration-300 group rounded-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300" />
                      <span className="relative z-10 font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="pt-4"
                >
                  <Link 
                    href="#contact" 
                    className="relative block px-6 py-3 rounded-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold text-center overflow-hidden group"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10">Let's Talk</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 