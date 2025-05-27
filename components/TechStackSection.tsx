'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
]

export function IconCloudDemo() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex size-full max-w-md md:max-w-xl items-center justify-center overflow-hidden rounded-lg bg-background px-16 md:px-20 pb-16 md:pb-20 pt-6 md:pt-8">
        <div className="flex items-center justify-center w-full h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex size-full max-w-md md:max-w-xl items-center justify-center overflow-hidden rounded-lg bg-background px-16 md:px-20 pb-16 md:pb-20 pt-6 md:pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}



const TechStackSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="pt-8 pb-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Technology Stack
          </h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80">
            Cutting-edge technologies and frameworks that power our innovative digital solutions
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* First Internal Section - Icon Cloud */}
          <div className="flex justify-center lg:justify-start">
            <IconCloudDemo />
          </div>

          {/* Second Internal Section - Technology Information */}
          <div className="space-y-6 flex flex-col justify-center h-full">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-3 text-primary-gradient">Comprehensive Technology Expertise</h3>

              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs lg:text-sm font-medium text-primary">Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/10 rounded-full">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-xs lg:text-sm font-medium text-secondary">Cloud-Native Solutions</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-full">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-xs lg:text-sm font-medium text-accent">Modern DevOps</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative p-3 lg:p-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-sm lg:text-base text-primary group-hover:text-primary-gradient transition-colors">Frontend</h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['React', 'Vue.js', 'Angular', 'Next.js'].map((tech, index) => (
                      <span key={index} className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 text-xs font-medium bg-muted text-foreground/60 rounded-full">+4 more</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative p-3 lg:p-4 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 rounded-xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-sm lg:text-base text-secondary group-hover:text-primary-gradient transition-colors">Backend</h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['Node.js', 'Python', 'Java', 'Express.js'].map((tech, index) => (
                      <span key={index} className="px-2 py-0.5 text-xs font-medium bg-secondary/10 text-secondary rounded-full border border-secondary/20 hover:bg-secondary/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 text-xs font-medium bg-muted text-foreground/60 rounded-full">+4 more</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative p-3 lg:p-4 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5 rounded-xl border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-sm lg:text-base text-accent group-hover:text-primary-gradient transition-colors">Mobile</h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['React Native', 'Flutter', 'Swift', 'Kotlin'].map((tech, index) => (
                      <span key={index} className="px-2 py-0.5 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 text-xs font-medium bg-muted text-foreground/60 rounded-full">+3 more</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative p-3 lg:p-4 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-blue-500/5 rounded-xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-sm lg:text-base text-emerald-500 group-hover:text-primary-gradient transition-colors">Database</h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'].map((tech, index) => (
                      <span key={index} className="px-2 py-0.5 text-xs font-medium bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 text-xs font-medium bg-muted text-foreground/60 rounded-full">+3 more</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="group relative p-3 lg:p-4 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-pink-500/5 rounded-xl border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-sm lg:text-base text-orange-500 group-hover:text-primary-gradient transition-colors">DevOps</h4>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {['AWS', 'Docker', 'Kubernetes', 'Azure'].map((tech, index) => (
                      <span key={index} className="px-2 py-0.5 text-xs font-medium bg-orange-500/10 text-orange-500 rounded-full border border-orange-500/20 hover:bg-orange-500/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 text-xs font-medium bg-muted text-foreground/60 rounded-full">+4 more</span>
              </div>
              </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="group relative p-3 lg:p-4 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 col-span-2 lg:col-span-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                      <svg className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
              </div>
                    <h4 className="font-bold text-sm lg:text-base text-blue-500 group-hover:text-primary-gradient transition-colors">Tools</h4>
              </div>
                  <div className="flex flex-wrap gap-1">
                    {['Git', 'Figma', 'VS Code', 'Jira'].map((tech, index) => (
                      <span key={index} className="px-2 py-0.5 text-xs font-medium bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                    <span className="px-2 py-0.5 text-xs font-medium bg-muted text-foreground/60 rounded-full">+4 more</span>
              </div>
              </div>
              </motion.div>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection; 