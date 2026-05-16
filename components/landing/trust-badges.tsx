import { Shield, Award, Users, TreePine } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "SOC 2 Compliant",
    description: "Enterprise-grade security",
  },
  {
    icon: Award,
    title: "QDMA Partner",
    description: "Quality Deer Management",
  },
  {
    icon: Users,
    title: "10,000+ Members",
    description: "Growing community",
  },
  {
    icon: TreePine,
    title: "1% for Conservation",
    description: "Every subscription gives back",
  },
]

const affiliations = [
  "National Wild Turkey Federation",
  "Rocky Mountain Elk Foundation", 
  "Pheasants Forever",
  "Ducks Unlimited",
  "Quail Forever",
]

export function TrustBadges() {
  return (
    <section className="py-8 bg-muted/50 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-2 p-3 rounded-lg bg-card border border-border"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-xs text-foreground">{badge.title}</p>
                <p className="text-xs text-muted-foreground">{badge.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Affiliations */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground mb-3">
            Proud to partner with leading conservation organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
            {affiliations.map((org) => (
              <span
                key={org}
                className="text-xs font-medium text-muted-foreground/70 hover:text-foreground transition-colors"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
