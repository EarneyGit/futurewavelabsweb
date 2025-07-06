"use client";

import { NewsCards } from "@/components/news-cards";
import { useState } from "react";

export default function NewsSection() {
  const [enableAnimations, setEnableAnimations] = useState(true);

  // Custom news data for Future Wave Labs
  const futureWaveNewsCards = [
    {
      id: "1",
      title: "Future Wave Labs Launches Revolutionary AI-Powered News Aggregation Platform",
      category: "Technology",
      subcategory: "AI Innovation",
      timeAgo: "2 hours ago",
      location: "Bangalore, India",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop&q=80",
      gradientColors: ["from-red-500/20", "to-orange-500/20"],
      content: [
        "Future Wave Labs has unveiled its groundbreaking AI-powered news aggregation platform, marking a significant milestone in India's digital news landscape. The platform leverages advanced machine learning algorithms to deliver personalized newsfeeds across multiple regional languages, setting new standards for localized content delivery.",
        "The innovative system employs natural language processing to understand user preferences and automatically curate relevant news from thousands of sources across India. This technology addresses the growing demand for multilingual news consumption in a country with over 22 official languages.",
        "Key features include real-time sentiment analysis, fact-checking integration, and community-driven content verification. The platform's AI agents can process over 10,000 news articles per minute, ensuring users receive the most current and relevant information tailored to their interests and location.",
        "CEO of Future Wave Labs emphasized the platform's role in democratizing access to quality journalism, particularly in rural areas where traditional media reach is limited. The mobile-first approach ensures accessibility across various device types and internet connectivity levels.",
        "Early beta testing has shown remarkable user engagement rates, with 85% of users reporting improved news discovery and 92% appreciating the multilingual capabilities. The platform is expected to launch publicly next quarter.",
        "This development positions Future Wave Labs as a pioneer in India's news technology sector, potentially transforming how millions of Indians consume and interact with news content daily."
      ]
    },
    {
      id: "2",
      title: "Solar Energy Revolution: Future Wave Labs Partners with Leading EPCs for Smart Grid Solutions",
      category: "Energy",
      subcategory: "Solar Technology",
      timeAgo: "5 hours ago",
      location: "Mumbai, India",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&h=900&fit=crop&q=80",
      gradientColors: ["from-green-500/20", "to-emerald-500/20"],
      content: [
        "Future Wave Labs has announced strategic partnerships with three major Engineering, Procurement, and Construction (EPC) companies to deploy advanced solar grid monitoring SaaS solutions across India. This collaboration aims to accelerate the country's renewable energy transition through intelligent infrastructure management.",
        "The company's SolarSaaS Suite provides real-time monitoring, predictive maintenance, and performance optimization for solar installations ranging from residential rooftops to large-scale solar farms. The platform's AI-driven analytics can predict equipment failures up to 30 days in advance, significantly reducing downtime and maintenance costs.",
        "These partnerships will enable the deployment of smart solar solutions across 15 states, with an initial focus on agrivoltaics projects that combine solar energy generation with agricultural activities. This innovative approach maximizes land use efficiency while providing farmers with additional income streams.",
        "The solar-as-a-service model eliminates upfront costs for consumers while ensuring optimal system performance through continuous monitoring and maintenance. Advanced IoT sensors and machine learning algorithms work together to maximize energy output and system longevity.",
        "Industry experts predict this collaboration could accelerate India's solar capacity addition by 25%, contributing significantly to the country's ambitious renewable energy targets. The integrated approach addresses both technical and financial barriers that have historically limited solar adoption.",
        "Future Wave Labs' technology stack includes blockchain-based energy trading capabilities, enabling peer-to-peer energy transactions and creating new economic opportunities within solar-powered communities."
      ]
    },
    {
      id: "3",
      title: "Smart Construction Initiative: Future Wave Labs Introduces AI-Integrated Building Solutions",
      category: "Construction",
      subcategory: "Smart Buildings",
      timeAgo: "1 day ago",
      location: "Delhi, India",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&h=900&fit=crop&q=80",
      gradientColors: ["from-blue-500/20", "to-purple-500/20"],
      content: [
        "Future Wave Labs has launched its Smart Construction Initiative, introducing AI-integrated building solutions that promise to revolutionize India's construction industry. The comprehensive platform combines IoT sensors, machine learning, and automated systems to create intelligent, sustainable buildings.",
        "The initiative focuses on three key areas: commercial infrastructure development, smart home technology integration, and solar-ready building design. Each component is designed to work synergistically, creating buildings that are not only energy-efficient but also adaptive to changing environmental conditions and user needs.",
        "Advanced building management systems powered by AI can reduce energy consumption by up to 40% while maintaining optimal comfort levels for occupants. The technology includes predictive climate control, automated lighting systems, and intelligent security features that learn from usage patterns.",
        "Solar-ready designs are integrated from the ground up, ensuring buildings can seamlessly incorporate renewable energy systems without costly retrofitting. This forward-thinking approach aligns with India's commitment to sustainable development and carbon neutrality goals.",
        "The smart home integration features include voice-controlled systems, automated maintenance alerts, and energy optimization algorithms that can significantly reduce utility costs for residents. These technologies are designed to be user-friendly and accessible to diverse demographic groups.",
        "Construction partners have reported 30% faster project completion times and 25% cost reductions when implementing Future Wave Labs' integrated solutions, demonstrating the practical benefits of this technological approach to modern construction challenges."
      ]
    }
  ];

  const statusBars = [
    {
      id: "1",
      category: "Technology",
      subcategory: "AI Innovation",
      length: 3,
      opacity: 1,
    },
    {
      id: "2", 
      category: "Energy",
      subcategory: "Solar Technology",
      length: 2,
      opacity: 0.7,
    },
    {
      id: "3",
      category: "Construction",
      subcategory: "Smart Buildings",
      length: 1,
      opacity: 0.4,
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <NewsCards
          title="Latest Updates"
          subtitle="Innovations and breakthroughs from Future Wave Labs"
          statusBars={statusBars}
          newsCards={futureWaveNewsCards}
          enableAnimations={enableAnimations}
        />
      </div>
    </section>
  );
} 