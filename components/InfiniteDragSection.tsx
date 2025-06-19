"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  GridBody,
  DraggableContainer,
  GridItem, 
} from "@/components/infinite-drag-scroll";

// Your team photos arranged in a visually appealing masonry pattern
const images = [
  // Top row: Large landscape, vertical, medium landscape
  {
    id: 1,
    alt: "Team gathering 2022",
    src: "/images/team/2022-05-17_13.09.37_(2).jpg",
    type: "landscape"
  },
  {
    id: 2,
    alt: "Team moment June 2022",
    src: "/images/team/IMG-20220621-WA0027.jpg",
    type: "vertical"
  },
  {
    id: 3,
    alt: "Team meeting 2022",
    src: "/images/team/2022-05-17_11.20.13.jpg",
    type: "landscape"
  },
  
  // Second row: Vertical, large landscape, vertical
  {
    id: 4,
    alt: "Team collaboration May 2022",
    src: "/images/team/IMG-20220531-WA0051.jpg",
    type: "vertical"
  },
  {
    id: 5,
    alt: "Team journey milestone",
    src: "/images/team/C3C9BB40-FDA7-4D2D-8FA8-4EB6A2CCA9E8.jpg",
    type: "landscape"
  },
  {
    id: 6,
    alt: "Team milestone April 2021",
    src: "/images/team/IMG-20210414-WA0024.jpg",
    type: "vertical"
  },
  
  // Third row: Medium landscape, vertical, landscape
  {
    id: 7,
    alt: "Team development July 2022",
    src: "/images/team/IMG_20220709_165724.jpg",
    type: "landscape"
  },
  {
    id: 8,
    alt: "Team project April 2021",
    src: "/images/team/IMG-20210409-WA0020.jpg",
    type: "vertical"
  },
  {
    id: 9,
    alt: "Team creative session",
    src: "/images/team/PicsArt_08-24-12.32.10.jpg",
    type: "landscape"
  },
  
  // Fourth row: Vertical, landscape, vertical
  {
    id: 10,
    alt: "Team achievement March 2021",
    src: "/images/team/IMG-20210329-WA0063.jpg",
    type: "vertical"
  },
  {
    id: 11,
    alt: "Team success May 2022",
    src: "/images/team/IMG_20220512_231955.jpg",
    type: "landscape"
  },
  {
    id: 12,
    alt: "Team bonding February 2021",
    src: "/images/team/IMG-20210218-WA0009.jpg",
    type: "vertical"
  },
  
  // Fifth row: Large landscape, vertical, medium landscape
  {
    id: 13,
    alt: "Team special moment",
    src: "/images/team/IMG_3169.HEIC",
    type: "landscape"
  },
  {
    id: 14,
    alt: "Team celebration July 2021",
    src: "/images/team/IMG_20210712_175853_043.jpg",
    type: "vertical"
  },
  {
    id: 15,
    alt: "Team celebration",
    src: "/images/team/IMG_3191.HEIC",
    type: "landscape"
  },
  
  // Bottom row: Vertical, landscape, vertical
  {
    id: 16,
    alt: "Team innovation July 2022",
    src: "/images/team/IMG_20220705_181818_134.jpg",
    type: "vertical"
  },
  {
    id: 17,
    alt: "Team memory",
    src: "/images/team/IMG_8780.HEIC",
    type: "landscape"
  },
  {
    id: 18,
    alt: "Team progress July 2022",
    src: "/images/team/IMG-20220711-WA0012.jpg",
    type: "vertical"
  },
];

const DemoOne = () => {
  return (
    <DraggableContainer variant="masonry">
      <GridBody>
        {images.map((image, index) => {
          const isLandscape = image.type === 'landscape';
          
          // Create more varied sizing like the reference image
          let sizeClass = '';
          if (isLandscape) {
            // Landscape images - some larger, some medium
            if (index % 4 === 0) {
              sizeClass = 'w-40 md:w-96'; // Extra large landscape
            } else if (index % 3 === 0) {
              sizeClass = 'w-36 md:w-80'; // Large landscape  
            } else {
              sizeClass = 'w-32 md:w-72'; // Medium landscape
            }
          } else {
            // Vertical images - varied heights
            if (index % 5 === 0) {
              sizeClass = 'w-28 md:w-56'; // Smaller vertical
            } else if (index % 3 === 0) {
              sizeClass = 'w-32 md:w-64'; // Medium vertical
            } else {
              sizeClass = 'w-24 md:w-52'; // Standard vertical
            }
          }
          
          return (
            <GridItem
              key={image.id}
              className={`relative group ${sizeClass}`}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="pointer-events-none w-full h-auto object-cover"
                  style={{ 
                    maxHeight: isLandscape ? '320px' : '450px',
                    minHeight: isLandscape ? '180px' : '250px'
                  }}
                />
                {/* Black overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-lg group-hover:from-black/50 group-hover:via-black/10 transition-all duration-300 ease-in-out pointer-events-none"></div>
              </div>
            </GridItem>
          );
        })}
      </GridBody>
    </DraggableContainer>
  );
};

const InfiniteDragSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Team Gallery
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Drag and explore our five-year journey together. Experience the moments, 
            milestones, and memories that shaped our team's incredible story.
          </p>
        </motion.div>

        {/* Infinite Drag Scroll Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <DemoOne />
        </motion.div>
      </div>
    </section>
  );
};

export default InfiniteDragSection; 