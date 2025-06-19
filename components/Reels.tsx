'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiPlay, FiChevronDown } from 'react-icons/fi';
import Script from 'next/script';

// Actual Vimeo reels
const initialReels = [
  {
    id: 1,
    title: 'Jelabikadai Pasiparupu Laddu',
    description: 'Traditional sweet making process showcased beautifully.',
    duration: '0:45',
    views: '125K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614274?h=f5c753c1ce&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Jelabikadai_Pasiparupu_laddu_v1"></iframe></div>`,
  },
  {
    id: 2,
    title: 'Healthful Cashewnuts',
    description: 'Premium cashew nuts presentation for health-conscious consumers.',
    duration: '1:20',
    views: '89K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614236?h=d3c70da31b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="HEALTHFULL_CASHEWNUTS"></iframe></div>`,
  },
  {
    id: 3,
    title: 'Tositos Snack',
    description: 'Crispy and delicious snack food commercial.',
    duration: '0:55',
    views: '156K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614466?h=10df7296dd&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Tositos_01 v2"></iframe></div>`,
  },
  {
    id: 4,
    title: 'Grillbox Restaurant',
    description: 'Mouth-watering grilled food presentation.',
    duration: '1:10',
    views: '203K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614188?h=f8c613ea7e&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="GRILLBOX_CF"></iframe></div>`,
  },
  {
    id: 5,
    title: 'Bad Apple Creative',
    description: 'Artistic and creative visual storytelling.',
    duration: '0:30',
    views: '312K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094613983?h=220752a0c8&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Bad apple"></iframe></div>`,
  },
];

const additionalReels = [
  {
    id: 6,
    title: 'GrillBox Restaurant 2',
    description: 'Another delicious grilled food presentation.',
    duration: '1:05',
    views: '78K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614167?h=93a509446d&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="GrillBox 03-1"></iframe></div>`,
  },
  {
    id: 7,
    title: 'Dablr Shoes Collection',
    description: 'Stylish footwear showcase for modern consumers.',
    duration: '2:15',
    views: '145K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614107?h=2db2ee21c0&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="DABLR SHOES-2"></iframe></div>`,
  },
  {
    id: 8,
    title: 'Madhavi Sarees',
    description: 'Elegant traditional saree collection showcase.',
    duration: '1:30',
    views: '92K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614297?h=2900efbc0e&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="madhavi sarees reel 1"></iframe></div>`,
  },
  {
    id: 9,
    title: 'Meru Brand',
    description: 'Premium brand presentation with modern aesthetics.',
    duration: '0:40',
    views: '267K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614317?h=0bb4fe57af&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="MERU"></iframe></div>`,
  },
  {
    id: 10,
    title: 'Foot Magic',
    description: 'Foot care product demonstration and benefits.',
    duration: '1:25',
    views: '234K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614140?h=c9944c4d21&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="foot magic corrected file"></iframe></div>`,
  },
  {
    id: 11,
    title: 'Biryani Special',
    description: 'Aromatic biryani preparation and presentation.',
    duration: '2:05',
    views: '456K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614085?h=e532a3f48c&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="biriyani 1"></iframe></div>`,
  },
  {
    id: 12,
    title: 'Paripurna Collection',
    description: 'Complete product range showcase.',
    duration: '1:35',
    views: '178K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614389?h=c1df73057c&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Reels Paripurna 2"></iframe></div>`,
  },
  {
    id: 13,
    title: 'SMB Uttapam',
    description: 'Traditional South Indian uttapam preparation.',
    duration: '0:50',
    views: '321K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614430?h=758b919a29&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="smb utappam 01"></iframe></div>`,
  },
  {
    id: 14,
    title: 'Mind Masala',
    description: 'Spice blend product showcase with vibrant visuals.',
    duration: '2:30',
    views: '567K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614350?h=6e86971b1d&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="MIND MASALA 1"></iframe></div>`,
  },
  {
    id: 15,
    title: 'Pubu Brand',
    description: 'Modern brand presentation with creative storytelling.',
    duration: '1:15',
    views: '289K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614375?h=ecd9ece4b2&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Pubu 01-2"></iframe></div>`,
  },
  {
    id: 16,
    title: 'Tositos Snack 2',
    description: 'Another crispy snack commercial with dynamic visuals.',
    duration: '3:20',
    views: '890K',
    vimeoEmbed: `<div style="padding:177.69% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614453?h=911b3a3b7a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="tositos 05 v4"></iframe></div>`,
  },
  {
    id: 17,
    title: 'Rollex Coffee Launch',
    description: 'Premium coffee brand launch presentation.',
    duration: '1:55',
    views: '134K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614406?h=3453109d04&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Rollex_coffee_Launch"></iframe></div>`,
  },
  {
    id: 18,
    title: 'Jelabikadai Munthiri Thattai',
    description: 'Traditional snack preparation with authentic flavors.',
    duration: '1:10',
    views: '245K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614252?h=7dd743a5ac&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Jelabikadai_Munthiri_Thattai"></iframe></div>`,
  },
  {
    id: 19,
    title: 'Dablr Shoes Premium',
    description: 'Premium footwear collection with elegant design.',
    duration: '2:45',
    views: '678K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614122?h=0dc30f91e8&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="dablr_shoe_1"></iframe></div>`,
  },
  {
    id: 20,
    title: 'Tositos Snack 3',
    description: 'Third installment of the popular snack series.',
    duration: '1:40',
    views: '167K',
    vimeoEmbed: `<div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1094614498?h=4d936e5331&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Tositos_02 v3"></iframe></div>`,
  },
  {
    id: 21,
    title: 'Pet Training',
    description: 'Dog training techniques for pet care company.',
    duration: '1:20',
    views: '298K',
    thumbnail: '/placeholder-reel.jpg',
    vimeoEmbed: null,
  },
  {
    id: 22,
    title: 'DIY Crafts',
    description: 'Creative crafting ideas for hobby store chain.',
    duration: '2:10',
    views: '356K',
    thumbnail: '/placeholder-reel.jpg',
    vimeoEmbed: null,
  },
  {
    id: 23,
    title: 'Urban Photography',
    description: 'Street photography tips and techniques showcase.',
    duration: '1:30',
    views: '189K',
    thumbnail: '/placeholder-reel.jpg',
    vimeoEmbed: null,
  },
  {
    id: 24,
    title: 'Health & Wellness',
    description: 'Mental health awareness campaign for wellness center.',
    duration: '2:00',
    views: '423K',
    thumbnail: '/placeholder-reel.jpg',
    vimeoEmbed: null,
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
    <section id="reels" className="pt-8 pb-8 bg-background scroll-mt-24">
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
                {/* Vimeo embed or placeholder */}
                {reel.vimeoEmbed ? (
                  <div 
                    className="w-full h-full"
                    dangerouslySetInnerHTML={{ __html: reel.vimeoEmbed }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-foreground/50 text-sm">Reel {reel.id}</span>
                  </div>
                )}
                
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
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
      
      {/* Vimeo Player Script */}
      <Script src="https://player.vimeo.com/api/player.js" />
    </section>
  );
};

export default Reels; 