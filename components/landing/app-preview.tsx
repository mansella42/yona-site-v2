"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

const screenshots = [
  {
    id: "dashboard",
    label: "Dashboard",
    src: "/images/app-dashboard.jpg",
    alt: "Yona dashboard showing land overview and wildlife statistics",
    description: "Get a bird's eye view of your property with wildlife activity, weather conditions, and team updates all in one place.",
  },
  {
    id: "map",
    label: "Property Map",
    src: "/images/app-map.jpg", 
    alt: "Interactive property map with marked locations and boundaries",
    description: "Mark stands, food plots, boundaries, and points of interest on detailed aerial imagery. Your whole team stays coordinated.",
  },
  {
    id: "mobile",
    label: "Mobile App",
    src: "/images/app-mobile.jpg",
    alt: "Yona mobile app showing field logging features",
    description: "Log sightings, record observations, and coordinate with your team—even when you're deep in the field with limited connectivity.",
  },
]

export function AppPreview() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const activeScreenshot = screenshots.find((s) => s.id === activeTab)

  return (
    <section id="app-preview" className="py-10 bg-secondary/30 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            See Yona in Action
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools that work as hard as you do, from the comfort of your cabin 
            or out in the field.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-2 mb-4">
          {screenshots.map((screenshot) => (
            <button
              key={screenshot.id}
              onClick={() => setActiveTab(screenshot.id)}
              className={cn(
                "px-5 py-2 rounded-lg font-medium text-sm transition-all duration-200",
                activeTab === screenshot.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground"
              )}
            >
              {screenshot.label}
            </button>
          ))}
        </div>

        {/* Screenshot Display */}
        <div className="relative">
          {/* Browser Frame */}
          <div className="bg-card rounded-xl shadow-xl overflow-hidden border border-border">
            {/* Browser Header */}
            <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-background rounded-md px-4 py-1 text-xs text-muted-foreground max-w-md mx-auto text-center">
                  app.yona.land
                </div>
              </div>
            </div>
            
            {/* Screenshot */}
            <div className="relative aspect-[16/9] bg-muted">
              {activeScreenshot && (
                <Image
                  src={activeScreenshot.src}
                  alt={activeScreenshot.alt}
                  fill
                  className="object-cover object-top"
                />
              )}
              <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-muted-foreground border border-border">
                Replace with your app screenshots
              </div>
            </div>
          </div>

          {/* Description */}
          {activeScreenshot && (
            <div className="mt-4 text-center">
              <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
                {activeScreenshot.description}
              </p>
            </div>
          )}
        </div>

        {/* Feature highlights */}
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground text-sm">Works Offline</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Log data in the field without cell service. Syncs automatically when you&apos;re back in range.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground text-sm">Your Data, Secured</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              End-to-end encryption and regular backups keep your property information safe.
            </p>
          </div>
          <div className="text-center p-4">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 mb-2">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-foreground text-sm">Lightning Fast</h3>
            <p className="mt-1 text-xs text-muted-foreground">
              Built for performance so you spend less time waiting and more time in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
