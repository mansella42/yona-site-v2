import { Hero } from "@/components/landing/hero"
import { Audience } from "@/components/landing/audience"
import { Features } from "@/components/landing/features"
import { AppPreview } from "@/components/landing/app-preview"
import { Conservation } from "@/components/landing/conservation"
import { Testimonials } from "@/components/landing/testimonials"
import { TrustBadges } from "@/components/landing/trust-badges"
import { Pricing } from "@/components/landing/pricing"
import { CTA } from "@/components/landing/cta"

export default function LandingPage() {
  return (
    <main className="pt-16">
      <Hero />
      <Audience />
      <Features />
      <AppPreview />
      <Conservation />
      <Testimonials />
      <TrustBadges />
      <Pricing />
      <CTA />
    </main>
  )
}
