'use client';

import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 group hover:scale-110 transition-all duration-300 z-50 animate-fade-in"
        >
          {/* Circular Button with Glow Effect */}
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300 scale-110"></div>
            
            {/* Main circular container */}
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-0.5 shadow-2xl">
              {/* Inner circle */}
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                
                {/* Stylish Arrow Up Icon */}
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative z-10 text-white group-hover:text-primary transition-colors duration-300"
                >
                  {/* Double chevron arrow */}
                  <path 
                    d="M7 14L12 9L17 14" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M7 18L12 13L17 18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    opacity="0.6"
                  />
                </svg>
                
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Pulse ring on hover */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 