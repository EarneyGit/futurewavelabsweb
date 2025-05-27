'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define project categories
const categories = ['All', 'Websites', 'Apps', 'Software'];

// Sample projects data - replace with actual projects later
const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    category: 'Websites',
    description: 'A modern e-commerce platform with seamless checkout and inventory management.',
    // Replace with actual image path
    image: '/placeholder-image.jpg',
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    category: 'Apps',
    description: 'Mobile application that helps users track workouts and nutrition goals.',
    // Replace with actual image path
    image: '/placeholder-image.jpg',
  },

  {
    id: 4,
    title: 'CRM Software',
    category: 'Software',
    description: 'Custom CRM solution tailored for a financial services company.',
    // Replace with actual image path
    image: '/placeholder-image.jpg',
  },
  {
    id: 5,
    title: 'Restaurant Website',
    category: 'Websites',
    description: 'Responsive website with online reservation system and menu management.',
    // Replace with actual image path
    image: '/placeholder-image.jpg',
  },

];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="pt-8 pb-8 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Explore our portfolio of successful projects across various industries and platforms.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary-gradient text-white'
                  : 'bg-muted hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group"
            >
              <div className="relative h-60 w-full overflow-hidden">
                {/* Placeholder div until actual images are provided */}
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <span className="text-foreground/50">{project.category} Image</span>
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                  <button className="px-4 py-2 bg-white text-primary rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-3 mb-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 