"use client";

import { ContainerAnimated,
  ContainerScroll,
  ContainerStagger,
  ContainerSticky,
  GalleryCol,
  GalleryContainer } from "@/components/animated-gallery"

const IMAGES_1 = [
  "/gallery/ai agent.jpg",
  "/gallery/ai agentss.jpg",
  "/gallery/AI-Agents-scaled.jpg",
  "/gallery/AI MIND.jpeg",
]
const IMAGES_2 = [
  "/gallery/ai 2 flow.JPG",
  "/gallery/ai 3.JPG",
  "/gallery/ai 6.JPG",
  "/gallery/ai 7.JPG",
]
const IMAGES_3 = [
  "/gallery/ai 9.JPG",
  "/gallery/ai 10.JPG",
  "/gallery/ai code.jpg",
  "/gallery/Capture.JPG",
]

export const AnimatedGalleryDemo = () => {
  return (
    <section className="pt-8 pb-8 bg-background">
      <div className="relative">
      <ContainerStagger className="relative z-[9999] -mb-12 place-self-center px-6 pt-12 text-center">
        <ContainerAnimated>
          <h1 className="text-4xl font-bold md:text-5xl text-foreground">
            Building{" "}
            <span className="text-primary-gradient font-bold">
              AI Agents
            </span>
          </h1>
        </ContainerAnimated>
        <ContainerAnimated>
          <h1 className="text-4xl font-bold md:text-5xl text-foreground">
            that automate your business
          </h1>
        </ContainerAnimated>

        <ContainerAnimated className="my-4">
          <p className="leading-normal tracking-tight text-muted-foreground">
            Transform your operations with intelligent automation.
            <br /> We build custom AI agents that work 24/7 for your success.
          </p>
        </ContainerAnimated>


      </ContainerStagger>
      
      <div className="pointer-events-none absolute z-10 h-[70vh] w-full"
        style={{
          background: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 25%, #c084fc 50%, #d946ef 75%, #ec4899 100%)",
          filter: "blur(84px)",
          mixBlendMode: "screen",
        }}
      />

      <ContainerScroll className="relative h-[350vh]">
        <ContainerSticky className="h-svh">
          <GalleryContainer className="">
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_1.map((imageUrl, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt="AI Agents and Automation Systems"
                />
              ))}
            </GalleryCol>
            <GalleryCol className="mt-[-50%]" yRange={["15%", "5%"]}>
              {IMAGES_2.map((imageUrl, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt="AI Workflow and Process Automation"
                />
              ))}
            </GalleryCol>
            <GalleryCol yRange={["-10%", "2%"]} className="-mt-2">
              {IMAGES_3.map((imageUrl, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={index}
                  className="aspect-video block h-auto max-h-full w-full rounded-md object-cover shadow"
                  src={imageUrl}
                  alt="AI Development and Code Implementation"
                />
              ))}
            </GalleryCol>
          </GalleryContainer>
        </ContainerSticky>
      </ContainerScroll>
    </div>
    </section>
  )
} 