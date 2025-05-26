'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPlay, FiChevronDown } from 'react-icons/fi';

// Sample reels data - replace with actual reels later
const initialReels = [
  {
    id: 1,
    title: 'Brand Campaign Launch',
    description: 'High-energy promotional video for a tech startup launch.',
    duration: '0:45',
    views: '125K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 2,
    title: 'Product Demo Showcase',
    description: 'Engaging product demonstration highlighting key features.',
    duration: '1:20',
    views: '89K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 3,
    title: 'Behind the Scenes',
    description: 'Creative process showcase for a fashion brand.',
    duration: '0:55',
    views: '156K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 4,
    title: 'Event Highlights',
    description: 'Dynamic coverage of a corporate event and conference.',
    duration: '1:10',
    views: '203K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 5,
    title: 'Social Media Campaign',
    description: 'Viral-worthy content for social media engagement.',
    duration: '0:30',
    views: '312K',
    thumbnail: '/placeholder-reel.jpg',
  },
];

const additionalReels = [
  {
    id: 6,
    title: 'Customer Testimonial',
    description: 'Authentic customer stories and experiences.',
    duration: '1:05',
    views: '78K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 7,
    title: 'Tutorial Series',
    description: 'Educational content for software onboarding.',
    duration: '2:15',
    views: '145K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 8,
    title: 'Company Culture',
    description: 'Team spotlight and workplace culture showcase.',
    duration: '1:30',
    views: '92K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 9,
    title: 'Product Unboxing',
    description: 'Exciting unboxing experience for new product launch.',
    duration: '0:40',
    views: '267K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 10,
    title: 'Brand Story',
    description: 'Emotional storytelling about company mission and values.',
    duration: '1:45',
    views: '189K',
    thumbnail: '/placeholder-reel.jpg',
  },
];

const Reels = () => {
  const [showAll, setShowAll] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const displayedReels = showAll ? [...initialReels, ...additionalReels] : initialReels;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="reels" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Reels</h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Discover our collection of high-quality video content that captures attention and drives engagement across all platforms.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {displayedReels.map((reel) => (
            <motion.div
              key={reel.id}
              variants={itemVariants}
              className="bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                {/* Placeholder for reel thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-foreground/50 text-sm">Reel {reel.id}</span>
                </div>
                
                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                    <FiPlay className="text-2xl ml-1" style={{ color: '#9333ea' }} />
                  </div>
                </div>
                
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {reel.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-gradient text-white rounded-full bg-primary-gradient-hover transition-all duration-300"
          >
            {showAll ? 'Show Less' : 'View All Reels'}
            <FiChevronDown className={`transition-transform ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reels; 