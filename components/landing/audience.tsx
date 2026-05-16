import Image from "next/image"
import Link from "next/link"
import { Users, User, TreeDeciduous, Landmark, Wheat, Trees } from "lucide-react"
import { Button } from "@/components/ui/button"

const audiences = [
  {
    icon: Users,
    title: "Hunting Clubs",
    description: "Coordinate members, track harvests, manage leases, and maintain detailed records for your entire club.",
  },
  {
    icon: User,
    title: "Solo Hunters",
    description: "Track your personal sightings, log hunts, monitor patterns, and become a better steward of the land you hunt.",
  },
  {
    icon: TreeDeciduous,
    title: "Conservationists",
    description: "Monitor wildlife populations, document habitat health, and generate reports that support conservation efforts.",
  },
  {
    icon: Landmark,
    title: "Land Managers",
    description: "Oversee multiple properties, coordinate activities, track improvements, and maintain comprehensive land records.",
  },
  {
    icon: Wheat,
    title: "Small Farmers",
    description: "Balance agriculture with wildlife, track crop impacts, manage food plots, and integrate sustainable practices.",
  },
  {
    icon: Trees,
    title: "Sustainable Foresters",
    description: "Plan timber harvests, monitor forest health, track wildlife corridors, and document sustainable forestry practices.",
  },
]

export function Audience() {
  return (
    <section id="about" className="py-10 bg-secondary/30 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Built for Those Who Care for the Land
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Yona was built by an Alabama boy who wanted to preserve the southern outdoor way of life.
            Whether you manage thousands of acres or a small family plot, Yona gives 
            you the tools to be a responsible steward.
          </p>
          <div className="mt-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/about">Learn More About Our Story</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <audience.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-card-foreground mb-1">
                {audience.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Banner */}
        <div className="mt-8 relative h-48 md:h-56 rounded-xl overflow-hidden">
          <Image
            src="/images/hunting-club.jpg"
            alt="Rustic hunting lodge at dusk"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-lg md:text-xl font-semibold text-foreground max-w-2xl">
              &ldquo;The land ethic simply enlarges the boundaries of the community to include soils, waters, plants, and animals.&rdquo;
            </p>
            <p className="mt-1 text-sm text-muted-foreground">— Aldo Leopold</p>
          </div>
        </div>
      </div>
    </section>
  )
}
