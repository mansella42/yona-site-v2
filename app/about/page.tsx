import Image from "next/image"
import Link from "next/link"
import { Target, Users, Leaf, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Us | WildTrack",
  description: "The story behind WildTrack - built by a hunter and conservationist who wanted better tools for land stewardship.",
}

export default function AboutPage() {
  return (
    <main className="bg-background pt-16">

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[380px]">
          <Image
            src="/images/founder-hero.jpg"
            alt="Founder in the field - replace with your photo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="mx-auto max-w-4xl">
              <p className="text-sm font-medium text-primary mb-2">The Story Behind WildTrack</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                Built by a Hunter, for Those Who Steward the Land
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">My Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I grew up in the rural South, where weekends meant helping my grandfather check on the family land,
            scouting for deer sign, and learning which oaks dropped acorns first. Those days shaped who I am —
            a hunter, a forager, and someone who believes deeply in responsible land stewardship.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            For years, I managed our family property the old-fashioned way: handwritten notes, mental maps,
            and spreadsheets that never quite captured what I needed. When I joined a hunting club with
            fifteen other members, the coordination became nearly impossible. Who saw what and where?
            Which food plots needed attention? When was the last time we worked on that timber stand?
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I searched for a tool that could help — something that understood the rhythms of land management,
            not just generic task tracking. When I couldn&apos;t find one, I decided to build it myself.
          </p>
        </div>
      </section>

      {/* Why I Built This */}
      <section className="py-10 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Why I Built WildTrack</h2>
          <div className="grid gap-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">To Solve My Own Problem</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I needed a single place to track observations, map our stands and food plots, coordinate with
                  club members, and document our land improvements over time. Existing tools were either too
                  complex or designed for commercial operations — not for folks like us.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">To Help Clubs Work Together</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A hunting club is a community, and communities need good communication. I wanted to make it
                  easy for members to share sightings, coordinate schedules, and work toward common goals
                  without endless group texts and lost emails.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">To Promote Better Stewardship</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When you track your land over years, you start to see patterns. You make better decisions.
                  You become a better steward. Giving people the right tools leads to healthier land, healthier
                  wildlife populations, and a stronger connection to place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Use It */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">How I Use WildTrack</h2>
          <div className="bg-card border border-border rounded-xl p-6 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Every time I&apos;m on the property, I log what I see — deer activity, turkey scratching,
              hog damage, that sort of thing. I&apos;ve mapped every stand, food plot, and mineral site.
              When I plant our spring plots, I note the date, the seed mix, and the conditions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our club uses it to coordinate who&apos;s hunting where and when. No more showing up to find
              someone already in your stand. We track our harvests together and can see trends over the
              seasons — it&apos;s changed how we think about management.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              But honestly? My favorite part is just having a record. Three years from now, I can look
              back and see exactly what we observed, what we planted, what we improved. That history
              matters — it&apos;s how we learn and how we pass knowledge to the next generation.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-10 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">My Goals for WildTrack</h2>
          <div className="space-y-4">
            {[
              { num: "1", title: "Keep it simple.", body: "This should be a tool that anyone can pick up and use, whether you're tech-savvy or not. No bloat, no unnecessary complexity." },
              { num: "2", title: "Build a community.", body: "I want WildTrack users to learn from each other — sharing what works on their land, their management strategies, their successes and failures." },
              { num: "3", title: "Support conservation.", body: "A portion of every subscription goes directly to habitat restoration and conservation organizations. Using WildTrack means contributing to the land beyond your own property lines." },
              { num: "4", title: "Listen and improve.", body: "This is built by someone who uses it. I read every piece of feedback, and the features we add come from real users with real needs." },
            ].map((goal) => (
              <div key={goal.num} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">{goal.num}</span>
                </div>
                <p className="text-primary-foreground/90 text-sm leading-relaxed">
                  <strong>{goal.title}</strong> {goal.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Better Manage Your Land?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join thousands of hunters, landowners, and conservationists who are building a legacy of responsible stewardship.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#">
                Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}
