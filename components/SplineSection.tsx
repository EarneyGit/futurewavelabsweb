'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSection() {
  return (
    <section className="pt-20 pb-0 bg-background">
      <div className="container mx-auto px-4">
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