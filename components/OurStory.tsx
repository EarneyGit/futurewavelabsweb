import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function OurStory() {
  const data = [
    {
      title: "2020",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Founded Earney with a focus on comprehensive brand strategy and innovative content creation. We established our core expertise in UI/UX design principles and launched our end-to-end digital marketing services to drive measurable results for our clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Brand Strategy</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Content Creation</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">UI/UX Design</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Digital Marketing ( End to End )</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Expanded into full-scale development services, delivering cutting-edge website projects and innovative mobile applications. We launched our custom software development division and elevated our video content production capabilities to serve clients across diverse industries.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Website Projects</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Mobile Apps</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Software Solutions</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Video Content</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Revolutionized our content strategy by specializing in short-form video marketing. We mastered the art of creating engaging reels, shorts, and viral content that captures attention and drives engagement across all major social media platforms.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-secondary/10 via-primary/10 to-accent/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Instagram Reels</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-accent/10 via-secondary/10 to-primary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">YouTube Shorts</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">TikTok Content</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Viral Marketing</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Embracing the future with cutting-edge AI technologies. We've integrated advanced AI automations, intelligent agents, and smart tools to revolutionize business processes and deliver unprecedented efficiency for our clients.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">AI Automations</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">AI Agents</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">AI Tools</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">AI Marketing</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Our Achievements",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Milestones that define our journey and commitment to excellence
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ 1800+ Successful Projects Delivered
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ 10+ Years Combined Experience
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Award-Winning Solutions
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ 24/7 Client Support & Maintenance
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Client Success</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-accent/10 via-primary/10 to-secondary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Innovation</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-secondary/10 via-accent/10 to-primary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Quality Assurance</span>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center justify-center p-2">
              <span className="text-primary-gradient text-xs sm:text-sm md:text-base font-semibold text-center">Global Reach</span>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <section className="pt-8 pb-8 bg-background relative overflow-hidden md:overflow-visible">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Story
          </h2>
          <div className="w-20 h-1 bg-primary-gradient mx-auto mb-6"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The journey of innovation, creativity, and excellence that defines Earney Portfolio
          </p>
        </div>
        
        <div className="w-full relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  );
} 