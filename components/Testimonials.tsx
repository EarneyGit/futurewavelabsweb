'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

// Sample testimonials data - replace with actual testimonials later
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    testimonial: 'Earney Portfolio transformed our online presence with a stunning website that perfectly captures our brand identity. Their attention to detail and strategic approach to development resulted in a 40% increase in our conversion rate.',
    rating: 5,
    // Replace with actual image path
    image: '/placeholder-avatar.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Marketing Director, FreshFoods',
    testimonial: 'The team at Earney Portfolio produced incredible video content for our brand campaign. The quality of their reels exceeded our expectations and helped us reach a whole new audience on social media.',
    rating: 5,
    // Replace with actual image path
    image: '/placeholder-avatar.jpg',
  },
  {
    id: 3,
    name: 'Jessica Williams',
    position: 'Founder, Wellness Hub',
    testimonial: 'Our mobile app developed by Earney Portfolio has been a game-changer for our business. The user experience is seamless, and we have received overwhelmingly positive feedback from our customers.',
    rating: 5,
    // Replace with actual image path
    image: '/placeholder-avatar.jpg',
  },
  {
    id: 4,
    name: 'David Rodriguez',
    position: 'COO, Finance Solutions',
    testimonial: 'The custom software solution delivered by Earney Portfolio has streamlined our operations and saved us countless hours of manual work. Their team was professional, responsive, and delivered exactly what we needed.',
    rating: 5,
    // Replace with actual image path
    image: '/placeholder-avatar.jpg',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Auto-advance the testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full p-4"
                >
                  <div className="bg-background rounded-2xl p-8 md:p-10 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                      <div className="flex-shrink-0">
                        {/* Placeholder div until actual images are provided */}
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <FiStar key={i} className="fill-current" style={{ color: '#d946ef' }} />
                          ))}
                        </div>
                        <p className="text-lg mb-6 italic text-foreground/80">"{testimonial.testimonial}"</p>
                        <div>
                          <h4 className="font-bold text-lg">{testimonial.name}</h4>
                          <p className="text-sm text-foreground/60">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center z-10 hover:bg-primary hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 w-10 h-10 rounded-full bg-background shadow-md flex items-center justify-center z-10 hover:bg-primary hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="text-xl" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-primary' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 