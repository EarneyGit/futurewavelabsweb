'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSection() {
  return (
    <section className="pt-32 md:pt-40 lg:pt-44 pb-0 bg-background">
      <div className="container mx-auto px-4">
        {/* Hero Text Content */}
        <div className="text-center mb-12">
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-4 font-medium">
            We&apos;re not watching the Future. We&apos;re Building it.
          </p>
          <div className="aurora-content">
            <h1 className="aurora-title">AI Revolution
              <div className="aurora">
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
                <div className="aurora__item"></div>
              </div>
            </h1>
          </div>
        </div>
        
        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
          
          {/* Full width 3D model */}
          <div className="w-full h-full relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </Card>
      </div>
    </section>
  )
} 