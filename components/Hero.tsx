'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-0 mt-8 md:-mt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight">
              Elevate Your Brand With <span className="text-primary-gradient">Digital Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              We create captivating digital experiences through strategic marketing, custom development, and premium content production.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="#services" 
                className="px-10 py-4 text-lg rounded-full bg-primary-gradient text-white font-medium bg-primary-gradient-hover transition-all duration-300 shadow-lg"
              >
                Explore Services
              </Link>
              <Link 
                href="#contact" 
                className="px-10 py-4 text-lg rounded-full border-2 border-border bg-background hover:bg-muted transition-colors shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-gradient mb-2">100+</p>
                <p className="text-lg text-foreground/70">Happy Clients</p>
              </div>
              <div className="hidden md:block h-16 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-gradient mb-2">150+</p>
                <p className="text-lg text-foreground/70">Projects Completed</p>
              </div>
              <div className="hidden md:block h-16 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-gradient mb-2">10+</p>
                <p className="text-lg text-foreground/70">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 