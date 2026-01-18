import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUsSection from "@/components/about-us-section";
import NewsSection from "@/components/NewsSection";
import { AnimatedGalleryDemo } from "@/components/AnimatedGalleryDemo";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";
import Reels from "@/components/Reels";
import Contact from "@/components/Contact";
import TechStackSection from "@/components/TechStackSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUsSection />
        <NewsSection />
        <GlowingEffectDemo />
        <Reels />
        <TechStackSection />
        <Testimonials />
        <AnimatedGalleryDemo />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
