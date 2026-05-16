"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, TreePine, Leaf, Bird, Fish, Mountain, Sprout } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Longleaf Pine Initiative",
    organization: "Longleaf Alliance",
    location: "Southeast US",
    description: "Restoring the longleaf pine ecosystem that once covered 90 million acres across the South. These forests support over 900 plant species and provide critical habitat for wildlife like the red-cockaded woodpecker and gopher tortoise.",
    impact: "50,000+ acres restored",
    icon: TreePine,
    color: "bg-emerald-700",
  },
  {
    id: 2,
    name: "Bottomland Hardwood Restoration",
    organization: "Ducks Unlimited",
    location: "Mississippi Delta",
    description: "Protecting and restoring bottomland hardwood forests along the Mississippi River flyway. These wetland forests filter water, prevent flooding, and provide vital habitat for migrating waterfowl.",
    impact: "25,000 acres protected",
    icon: Leaf,
    color: "bg-green-700",
  },
  {
    id: 3,
    name: "Bobwhite Quail Recovery",
    organization: "Quail Forever",
    location: "Southern Great Plains",
    description: "Working with private landowners to restore native grasslands and create early successional habitat. Healthy quail populations indicate thriving ecosystems that benefit all grassland wildlife.",
    impact: "100,000+ acres improved",
    icon: Bird,
    color: "bg-amber-700",
  },
  {
    id: 4,
    name: "Native Brook Trout Streams",
    organization: "Trout Unlimited",
    location: "Southern Appalachians",
    description: "Protecting cold-water streams and restoring native Southern Appalachian brook trout populations. These ancient fish are indicators of pristine mountain ecosystems.",
    impact: "200+ stream miles restored",
    icon: Fish,
    color: "bg-sky-700",
  },
  {
    id: 5,
    name: "Working Lands Conservation",
    organization: "Land Trust Alliance",
    location: "Across the South",
    description: "Partnering with farmers, ranchers, and foresters to keep working lands in production while enhancing wildlife habitat. Conservation easements protect land forever while allowing sustainable use.",
    impact: "75,000 acres in easements",
    icon: Mountain,
    color: "bg-stone-600",
  },
  {
    id: 6,
    name: "Pollinator Pathway Project",
    organization: "Xerces Society",
    location: "Gulf Coast States",
    description: "Creating corridors of native wildflowers and pollinator habitat on farms, ranches, and private lands across the Gulf Coast. Healthy pollinator populations support agriculture and natural ecosystems alike.",
    impact: "10,000+ habitat sites",
    icon: Sprout,
    color: "bg-yellow-700",
  },
]

export default function ConservationPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)

  const current = projects[currentIndex]
  const Icon = current.icon

  return (
    <main className="bg-background pt-16">

      {/* Hero */}
      <section className="py-10 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-balance">
              10% of Every Subscription Goes to Conservation
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
              When you subscribe to Yona, you&apos;re not just getting a land management tool — you&apos;re
              directly funding conservation projects that protect wild and sustainably managed lands
              across the Southern US.
            </p>
            <p className="mt-3 text-primary-foreground/70">
              You choose where your contribution goes. Every subscriber picks a project that matters to them.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel + Phone */}
      <section className="py-10 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Choose Your Conservation Project</h2>
            <p className="mt-2 text-muted-foreground text-sm">
              Explore the projects your subscription can support
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-center">

            {/* Carousel */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className={`${current.color} p-3 rounded-lg flex-shrink-0`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span>{current.organization}</span>
                      <span>·</span>
                      <span>{current.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{current.name}</h3>
                  </div>
                </div>

                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {current.description}
                </p>

                <span className="mt-4 inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {current.impact}
                </span>

                {/* Nav */}
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <button
                    onClick={prev}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="h-4 w-4" /> Previous
                  </button>
                  <div className="flex gap-1.5">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        aria-label={`Go to project ${idx + 1}`}
                        className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? "bg-primary" : "bg-border hover:bg-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <button
                    onClick={next}
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Next project"
                  >
                    Next <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Quick-jump pills */}
              <div className="mt-4 flex flex-wrap gap-2 justify-center">
                {projects.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      idx === currentIndex
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card border-border text-muted-foreground hover:border-primary hover:text-foreground"
                    }`}
                  >
                    {p.name.split(" ").slice(0, 2).join(" ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="lg:col-span-2 flex flex-col items-center gap-4">
              <p className="text-sm font-medium text-muted-foreground text-center">
                Choose your project right inside the app
              </p>
              <div className="relative">
                <div className="relative bg-foreground rounded-[2.5rem] p-2 shadow-2xl">
                  <div className="bg-background rounded-[2rem] overflow-hidden w-[260px]">
                    <div className="relative h-[520px]">
                      <Image
                        src="/images/app-conservation-choice.jpg"
                        alt="Yona app showing conservation project selection — replace with real screenshot"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-xs font-medium opacity-80">Account Settings</p>
                        <p className="text-sm font-bold">Choose Your Project</p>
                        <p className="text-xs opacity-70 mt-0.5">10% of your subscription, directed by you</p>
                      </div>
                    </div>
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-foreground rounded-full" />
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    Replace with your app screenshot
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-8">How It Works</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Subscribe", body: "Choose a Club or Club Pro plan that fits your needs." },
              { step: "2", title: "Pick a Project", body: "Select which conservation initiative matters most to you inside your account settings." },
              { step: "3", title: "Make an Impact", body: "10% of your subscription goes directly to your chosen project every month." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-lg font-bold mx-auto">
                  {s.step}
                </div>
                <h3 className="mt-3 font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Give Back */}
      <section className="py-10 bg-card border-y border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Why We Give Back</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Yona exists because we believe in responsible land stewardship. The hunters, farmers,
            foresters, and conservationists who use our platform are already doing the hard work of
            caring for the land. We think it&apos;s only right that we support the organizations
            working alongside them.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Every project we partner with focuses on the Southern US — the region we know and love.
            From longleaf pine forests to bottomland hardwoods, from native brook trout streams to
            working farms and ranches, these landscapes deserve our protection and our investment.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground">Ready to Make a Difference?</h2>
          <p className="mt-2 text-muted-foreground">Join Yona and put your subscription to work for conservation.</p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/#pricing">View Pricing</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}
