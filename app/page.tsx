import Navbar from "@/components/Navbar";
import { SplineSection } from "@/components/SplineSection";
import { AnimatedGalleryDemo } from "@/components/AnimatedGalleryDemo";
import { GlowingEffectDemo } from "@/components/GlowingEffectDemo";
import Portfolio from "@/components/Portfolio";
import { CaseDemo } from "@/components/CaseDemo";
import Reels from "@/components/Reels";
import { OurStory } from "@/components/OurStory";
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
        <SplineSection />
        <GlowingEffectDemo />
        <OurStory />
        <Portfolio />
        <CaseDemo />
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
