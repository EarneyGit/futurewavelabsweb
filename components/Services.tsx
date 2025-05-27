'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiCode, FiVideo, FiPenTool, FiTrendingUp } from 'react-icons/fi';

const services = [
  {
    icon: <FiMonitor className="text-4xl" style={{ color: '#8b5cf6' }} />,
    title: 'Website Development',
    description: 'We build stunning, responsive websites that drive conversions and provide exceptional user experiences across all devices.',
  },
  {
    icon: <FiSmartphone className="text-4xl" style={{ color: '#a855f7' }} />,
    title: 'App Development',
    description: 'Our team creates intuitive, high-performance mobile applications that engage users and solve real business problems.',
  },
  {
    icon: <FiCode className="text-4xl" style={{ color: '#c084fc' }} />,
    title: 'Software Development',
    description: 'Custom software solutions designed to streamline your operations, increase productivity, and give you a competitive edge.',
  },
  {
    icon: <FiVideo className="text-4xl" style={{ color: '#d946ef' }} />,
    title: 'High-Quality Reels',
    description: 'Professional video production that captures attention and tells your brand story in a compelling, shareable format.',
  },
  {
    icon: <FiPenTool className="text-4xl" style={{ color: '#9333ea' }} />,
    title: 'Brand Strategy',
    description: 'Strategic brand development that differentiates your business and resonates with your target audience.',
  },
  {
    icon: <FiTrendingUp className="text-4xl" style={{ color: '#ec4899' }} />,
    title: 'Digital Marketing ( End to End )',
    description: 'Comprehensive end-to-end digital marketing solutions covering strategy, execution, optimization, and analytics to maximize your online presence and ROI.',
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            We provide comprehensive digital solutions to help your brand stand out and succeed in today&apos;s competitive market.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="mb-5 p-4 rounded-full bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 inline-block">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 