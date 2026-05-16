"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"
import { AnimatedStat } from "./animated-stat"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")

    const syncMotionPreference = () => {
      const video = videoRef.current
      if (!video) return

      if (media.matches) {
        video.pause()
        video.style.visibility = "hidden"
      } else {
        video.style.visibility = "visible"
        void video.play().catch(() => {})
      }
    }

    syncMotionPreference()
    media.addEventListener("change", syncMotionPreference)
    return () => media.removeEventListener("change", syncMotionPreference)
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center pt-16">
      {/* Background video (still image fallback underneath) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-wildlife.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-wildlife.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden
        >
          <source src="/images/hero-wildlife.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Love the land
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Manage your land.{" "}
            <span className="text-primary">Preserve your way of life.</span>
          </h1>
          
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Yona is the land management platform built for Southern hunting clubs, conservationists, 
            and land stewards. Track wildlife, manage habitats, coordinate your club, 
            and steward your land the way it deserves.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#pricing">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
              <Link href="#features">
                Explore Features
              </Link>
            </Button>
          </div>

          {/* Trust indicators with animated stats */}
          <div className="mt-10 pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-3">Trusted by Southern land stewards</p>
            <div className="flex flex-wrap gap-6 items-center">
              <AnimatedStat 
                value={2500} 
                suffix="+" 
                label="Active Clubs"
                valueClassName="text-xl font-bold text-foreground"
                labelClassName="text-xs text-muted-foreground"
                className="text-center"
              />
              <AnimatedStat 
                value={1200000} 
                label="Acres Managed"
                valueClassName="text-xl font-bold text-foreground"
                labelClassName="text-xs text-muted-foreground"
                className="text-center"
              />
              <AnimatedStat 
                value={50000} 
                suffix="+" 
                label="Wildlife Sightings"
                valueClassName="text-xl font-bold text-foreground"
                labelClassName="text-xs text-muted-foreground"
                className="text-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
