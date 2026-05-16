import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Solo",
    description: "Perfect for individual landowners and solo hunters",
    price: "Free",
    period: "forever",
    features: [
      "1 property (up to 500 acres)",
      "Wildlife sighting logs",
      "Property mapping tools",
      "Weather integration",
      "Mobile app access",
      "Basic reporting",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Club",
    description: "For hunting clubs and land management teams",
    price: "$5",
    period: "/month",
    features: [
      "Up to 3 properties",
      "Up to 15 members",
      "Harvest tracking & reports",
      "Member scheduling",
      "10% goes to conservation",
      "Email support",
    ],
    cta: "Start 14-Day Trial",
    highlighted: false,
  },
  {
    name: "Founder",
    description: "Lifetime access at the price of a year—the ultimate show of support",
    price: "$10",
    period: "/month, cancel anytime",
    features: [
      "Unlimited properties",
      "Unlimited members",
      "Advanced analytics",
      "Custom roles & permissions",
      "10% goes to conservation",
      "Priority support",
    ],
    cta: "Start 14-Day Trial",
    highlighted: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-10 bg-background scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-6 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground ring-2 ring-primary"
                  : "bg-card border border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className={`text-lg font-bold ${
                  plan.highlighted ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {plan.name}
                </h3>
                <p className={`mt-1 text-xs ${
                  plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}>
                  {plan.description}
                </p>

                <div className="mt-4">
                  <span className={`text-3xl font-bold ${
                    plan.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${
                    plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mt-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-primary-foreground/80" : "text-primary"
                    }`} />
                    <span className={`text-xs ${
                      plan.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button
                  asChild
                  size="sm"
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <Link href="#app">{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
