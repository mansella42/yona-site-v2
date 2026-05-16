import Image from "next/image"
import { 
  MapPin, 
  BarChart3, 
  Calendar, 
  Users2, 
  FileText, 
  Bell, 
  Cloud,
  Leaf
} from "lucide-react"

const features = [
  {
    icon: MapPin,
    title: "Interactive Property Maps",
    description: "Upload aerial imagery, mark stands, food plots, water sources, and trails. Create detailed property maps that your whole team can access.",
  },
  {
    icon: BarChart3,
    title: "Wildlife Analytics",
    description: "Monitor population trends, movement patterns, and habitat usage. Generate insights that inform better land management decisions.",
  },
  {
    icon: Calendar,
    title: "Hunt & Activity Logging",
    description: "Record hunts, observations, and land management activities. Build a comprehensive history of your stewardship efforts.",
  },
  {
    icon: Users2,
    title: "Member Management",
    description: "Invite members, assign roles and permissions, coordinate schedules, and keep everyone on the same page.",
  },
  {
    icon: FileText,
    title: "Harvest Records",
    description: "Document harvests with photos, measurements, and GPS locations. Track trends and maintain records for reporting.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get alerts for member check-ins, weather changes, and important dates you set.",
  },
  {
    icon: Cloud,
    title: "Weather Integration",
    description: "Access forecasts, wind patterns, moon phases, and historical weather data right from your dashboard.",
  },
  {
    icon: Leaf,
    title: "Habitat Management",
    description: "Plan and track food plots, timber stands, and habitat improvements. Document your conservation efforts over time.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-10 bg-background scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[350px] rounded-xl overflow-hidden">
              <Image
                src="/images/agriculture-land.jpg"
                alt="Rolling farmland with forest edges"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-primary/10 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-28 h-28 bg-accent/10 rounded-xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Everything You Need to Manage Your Land
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Powerful tools designed for the way land stewards actually work, 
              whether you&apos;re in the field or at home.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Row - Full Width Grid */}
        <div className="mt-8">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-foreground">And Much More</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.slice(4).map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <feature.icon className="h-4 w-4 text-primary" />
                </div>
                <h4 className="font-semibold text-card-foreground text-sm">{feature.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
