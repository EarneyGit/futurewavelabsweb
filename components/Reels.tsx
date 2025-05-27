'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPlay, FiChevronDown } from 'react-icons/fi';

// Sample reels data - replace with actual reels later
const initialReels = [
  {
    id: 1,
    title: 'Product Showcase',
    description: 'A dynamic showcase of our latest product features and innovations.',
    duration: '0:45',
    views: '125K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 2,
    title: 'Brand Story',
    description: 'The journey and vision behind our brand, told through compelling visuals.',
    duration: '1:20',
    views: '89K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 3,
    title: 'Success Story',
    description: 'Real results and impact achieved through our solutions.',
    duration: '0:55',
    views: '156K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 4,
    title: 'Behind the Scenes',
    description: 'A glimpse into our creative process and team collaboration.',
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
    title: 'Startup Launch',
    description: 'Dynamic launch event coverage for emerging tech startup.',
    duration: '1:25',
    views: '234K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 11,
    title: 'Travel Vlog',
    description: 'Inspiring travel content for lifestyle brand collaboration.',
    duration: '2:05',
    views: '456K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 12,
    title: 'Cooking Tutorial',
    description: 'Step-by-step cooking guide for restaurant chain.',
    duration: '1:35',
    views: '178K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 13,
    title: 'Fashion Showcase',
    description: 'Trendy fashion collection reveal for clothing brand.',
    duration: '0:50',
    views: '321K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 14,
    title: 'Tech Review',
    description: 'In-depth gadget review for electronics company.',
    duration: '2:30',
    views: '567K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 15,
    title: 'Fitness Challenge',
    description: '30-day fitness transformation challenge series.',
    duration: '1:15',
    views: '289K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 16,
    title: 'Music Video',
    description: 'Creative music video production for independent artist.',
    duration: '3:20',
    views: '890K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 17,
    title: 'Home Renovation',
    description: 'Before and after home makeover showcase.',
    duration: '1:55',
    views: '134K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 18,
    title: 'Art Process',
    description: 'Time-lapse of digital art creation process.',
    duration: '1:10',
    views: '245K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 19,
    title: 'Gaming Highlights',
    description: 'Epic gaming moments compilation for streaming platform.',
    duration: '2:45',
    views: '678K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 20,
    title: 'Green Living',
    description: 'Sustainable lifestyle tips for eco-friendly brand.',
    duration: '1:40',
    views: '167K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 21,
    title: 'Pet Training',
    description: 'Dog training techniques for pet care company.',
    duration: '1:20',
    views: '298K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 22,
    title: 'DIY Crafts',
    description: 'Creative crafting ideas for hobby store chain.',
    duration: '2:10',
    views: '356K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 23,
    title: 'Urban Photography',
    description: 'Street photography tips and techniques showcase.',
    duration: '1:30',
    views: '189K',
    thumbnail: '/placeholder-reel.jpg',
  },
  {
    id: 24,
    title: 'Health & Wellness',
    description: 'Mental health awareness campaign for wellness center.',
    duration: '2:00',
    views: '423K',
    thumbnail: '/placeholder-reel.jpg',
  },
];

const Reels = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const allReels = [...initialReels, ...additionalReels];
  const displayedReels = allReels.slice(0, visibleCount);
  const hasMoreReels = visibleCount < allReels.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 5, allReels.length));
  };

  const handleShowLess = () => {
    setVisibleCount(5);
  };

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
    <section id="reels" className="py-20 bg-background">
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

        {/* Buttons */}
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
          {hasMoreReels && (
            <button
              onClick={handleLoadMore}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-gradient text-white rounded-full bg-primary-gradient-hover transition-all duration-300"
            >
              View More Reels
              <FiChevronDown />
            </button>
          )}
          
          {visibleCount > 5 && (
            <button
              onClick={handleShowLess}
              className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Show Less
              <FiChevronDown className="rotate-180" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reels; 