"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import {
  Globe,
  Brain,
  Video,
  Smartphone,
  Code,
  TrendingUp,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  Building,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
      title: "News Media",
      description:
        "India-first, multilingual digital news aggregator and platform for regional journalism.",
      features: ["AI-personalized newsfeeds", "Local reporter network", "Mobile-first news apps"],
      position: "left",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
      title: "AI & Tech Services",
      description:
        "AI innovation lab delivering GPT integrations, enterprise automation, and custom AI products for India.",
      features: ["AI automation for GovTech, FinTech, EduTech", "Chatbots and NLP tools", "Data & ML strategy"],
      position: "left",
    },
    {
      icon: <Code className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
      title: "Niche SaaS Products",
      description:
        "We build industry-specific SaaS solutions that fill technology gaps in underserved Indian sectors.",
      features: ["EduPro – Education SaaS", "LegalMate – Legal automation SaaS", "SolarSaaS Suite – SaaS for solar EPCs"],
      position: "left",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
      title: "Solar Energy Services",
      description:
        "Democratizing solar energy through agrivoltaics, community solar, and tech-enabled energy platforms.",
      features: ["Investor-driven solar projects", "Solar-as-a-service models", "Solar grid monitoring SaaS"],
      position: "right",
    },
    {
      icon: <Building className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
      title: "Building Construction",
      description:
        "Reimagining construction with smart, green, and tech-integrated buildings across India.",
      features: ["Commercial infra development", "Smart home tech integration", "Solar-ready building design"],
      position: "right",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-red-400" />,
      title: "Coming Soon",
      description:
        "We're constantly expanding into new sectors and developing innovative solutions. Stay tuned for our next breakthrough.",
      features: ["Innovation in progress", "Market research phase", "Strategic partnerships"],
      position: "right",
    },
  ]



  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-gradient-to-b from-background to-background/95 text-foreground overflow-hidden relative"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-500/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-red-600/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-red-500/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-red-400/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-red-500 font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            DISCOVER OUR STORY
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-center">About Us</h2>
          <motion.div
            className="w-24 h-1 bg-red-500"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-foreground/80" variants={itemVariants}>
          We are Future Wave Labs, a passionate team of innovators and technologists dedicated to powering India's next wave of digital transformation. With expertise across diverse and critical sectors, we accelerate progress through cutting-edge AI solutions, modern web technologies, and strategic digital marketing.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="/fwl-about.jpg"
                  alt="Future Wave Labs About"
                  className="w-full h-full object-cover"
                />

              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-red-500/20 rounded-md -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-red-500/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-red-400/15"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              ></motion.div>

              {/* Additional decorative elements */}
              <motion.div
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-red-400"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>


      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  features?: string[]
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number }
  }
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, features, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-red-500 bg-red-500/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-red-500/20 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-medium text-foreground group-hover:text-red-500 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-foreground/80 leading-relaxed pl-12 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      {features && (
        <motion.ul
          className="pl-12 space-y-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.6 }}
        >
          {features.map((feature, index) => (
            <li key={index} className="text-xs text-foreground/70 flex items-start gap-2">
              <span className="w-1 h-1 bg-red-500 rounded-full mt-1.5 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </motion.ul>
      )}
      <motion.div
        className="mt-3 pl-12 flex items-center text-red-500 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  )
}



