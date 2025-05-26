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
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
        <div className="flex items-center justify-center w-full h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-20 pb-20 pt-8 ">
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology Stack</h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Cutting-edge technologies and tools that power our innovative solutions
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* First Internal Section - Icon Cloud */}
          <div className="flex justify-center">
            <IconCloudDemo />
          </div>

          {/* Second Internal Section - Technology Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Comprehensive Technology Stack</h3>
              <p className="text-foreground/70 mb-6">
                We work with a wide range of modern technologies and frameworks to deliver cutting-edge solutions. 
                Our expertise covers all aspects of digital development across multiple platforms and environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                <h4 className="font-semibold mb-2 text-primary">Frontend Technologies</h4>
                <p className="text-sm text-foreground/70">React, Vue.js, Angular, Next.js, Nuxt.js, Svelte, TypeScript, JavaScript, HTML5, CSS3, Sass, Tailwind CSS, Bootstrap, Material-UI, Chakra UI</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                <h4 className="font-semibold mb-2 text-primary">Backend Technologies</h4>
                <p className="text-sm text-foreground/70">Node.js, Python, Java, PHP, C#, Ruby, Go, Express.js, Django, Flask, Spring Boot, Laravel, ASP.NET, Ruby on Rails, FastAPI</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                <h4 className="font-semibold mb-2 text-primary">Mobile Development</h4>
                <p className="text-sm text-foreground/70">React Native, Flutter, Swift, Kotlin, Xamarin, Ionic, Cordova, Android Studio, Xcode, Unity, PhoneGap</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                <h4 className="font-semibold mb-2 text-primary">Databases & Storage</h4>
                <p className="text-sm text-foreground/70">PostgreSQL, MySQL, MongoDB, Redis, Firebase, SQLite, Oracle, SQL Server, Cassandra, DynamoDB, Elasticsearch</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                <h4 className="font-semibold mb-2 text-primary">Cloud & DevOps</h4>
                <p className="text-sm text-foreground/70">AWS, Google Cloud, Azure, Vercel, Netlify, Docker, Kubernetes, Jenkins, GitHub Actions, GitLab CI, Terraform, Ansible</p>
              </div>
              <div className="p-4 bg-background rounded-lg shadow-sm border border-border">
                <h4 className="font-semibold mb-2 text-primary">Tools & Platforms</h4>
                <p className="text-sm text-foreground/70">Git, GitHub, GitLab, Figma, Adobe Creative Suite, Jira, Slack, VS Code, IntelliJ, Postman, SonarQube, Webpack, Vite</p>
              </div>
            </div>


          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection; 