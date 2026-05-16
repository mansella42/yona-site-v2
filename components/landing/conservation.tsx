"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedStat } from "./animated-stat"

const initiatives = [
  "Habitat restoration tracking and documentation",
  "Wildlife population monitoring tools",
  "Native species identification assistance",
  "Invasive species reporting and management",
  "Water quality and watershed monitoring",
  "Carbon sequestration documentation",
]

const stats = [
  { value: 15000, suffix: "+", label: "Acres Restored" },
  { value: 200, suffix: "+", label: "Species Tracked" },
  { value: 5000, suffix: "", label: "Trees Planted" },
  { value: 98, suffix: "%", label: "User Retention" },
]

export function Conservation() {
  return (
    <section id="conservation" className="py-10 bg-primary text-primary-foreground scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-balance">
              Conservation at the Core
            </h2>
            <p className="mt-3 text-lg text-primary-foreground/80">
              Yona isn&apos;t just about managing land—it&apos;s about leaving it better 
              than you found it. Our platform is built with conservation principles at 
              its foundation.
            </p>

            <ul className="mt-6 space-y-3">
              {initiatives.map((initiative) => (
                <li key={initiative} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary-foreground/80 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-primary-foreground/90">{initiative}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button asChild variant="secondary" size="sm">
                <Link href="/conservation">
                  Learn How We Give Back <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  duration={2500}
                  valueClassName="text-xl font-bold text-primary-foreground"
                  labelClassName="text-xs text-primary-foreground/70"
                />
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image
                src="/images/forest-conservation.jpg"
                alt="Sustainable managed forest"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 bg-card text-card-foreground p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-xs font-medium">
                &ldquo;Yona has transformed how we document our conservation work. The data speaks for itself.&rdquo;
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                — Sarah M., Land Trust Director
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
