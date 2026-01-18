'use client';

import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Outstanding web development work! The team delivered a modern, responsive website that perfectly captures our brand. The attention to detail is exceptional.",
    gender: "female",
    name: "Priya Krishnan",
    role: "Founder, Mysore Digital Solutions",
  },
  {
    text: "Professional, reliable, and incredibly talented. They transformed our outdated website into a stunning digital experience that our customers love.",
    gender: "male",
    name: "Arjun Reddy",
    role: "CEO, Hyderabad Tech Ventures",
  },
  {
    text: "The mobile app they developed exceeded all expectations. Clean code, beautiful UI, and seamless performance across all devices.",
    gender: "female",
    name: "Kavya Nair",
    role: "Entrepreneur, Kochi Innovations",
  },
  {
    text: "Exceptional full-stack development skills. They built our e-commerce platform from scratch with advanced features and robust security.",
    gender: "male",
    name: "Vikram Subramanian",
    role: "Founder, Chennai Commerce Hub",
  },
  {
    text: "Their expertise in React and Next.js is impressive. Fast delivery, clean code, and excellent communication throughout the project.",
    gender: "female",
    name: "Meera Iyer",
    role: "CEO, Bangalore StartupLab",
  },
  {
    text: "Amazing work on our company website redesign. The new site is fast, SEO-optimized, and has significantly improved our conversion rates.",
    gender: "female",
    name: "Ananya Sharma",
    role: "Founder, Coimbatore Digital Agency",
  },
  {
    text: "Top-notch development team! They delivered a complex web application on time and within budget. Highly recommend their services.",
    gender: "male",
    name: "Rajesh Kumar",
    role: "Entrepreneur, Trivandrum Tech Solutions",
  },
  {
    text: "Incredible attention to user experience and modern design principles. Our new platform has received amazing feedback from users.",
    gender: "female",
    name: "Deepika Menon",
    role: "CEO, Mangalore Design Studio",
  },
  {
    text: "Professional development services with cutting-edge technology stack. They helped us modernize our entire digital infrastructure.",
    gender: "male",
    name: "Karthik Raman",
    role: "Founder, Madurai Software Systems",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="pt-8 pb-8 bg-background relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our clients say
          </h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto mt-6 mb-6"></div>
          <p className="text-center opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 