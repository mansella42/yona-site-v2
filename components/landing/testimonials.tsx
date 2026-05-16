import { Star } from "lucide-react"

const testimonials = [
  {
    content: "Yona completely changed how our hunting club operates. We went from scattered notes and spreadsheets to a unified system everyone can use. The mapping and member coordination alone is worth it.",
    author: "Mike Richardson",
    role: "President, Whitetail Ridge Hunting Club, Alabama",
    rating: 5,
  },
  {
    content: "As a solo hunter managing 200 acres, I needed something simple but powerful. Yona gives me professional-grade tools without the complexity. I've learned more about the deer on my property in 6 months than the previous 10 years.",
    author: "David Chen",
    role: "Private Landowner, Georgia",
    rating: 5,
  },
  {
    content: "We use Yona to coordinate timber harvests with wildlife habitat preservation. The mapping tools and documentation features have been invaluable for maintaining our certification.",
    author: "Jennifer Brooks",
    role: "Certified Forester, Mississippi",
    rating: 5,
  },
  {
    content: "Our small farm needed a way to balance crop production with the wildlife habitat we're proud of maintaining. Yona helps us track everything from food plot success to deer damage patterns.",
    author: "Tom & Linda Hayes",
    role: "Family Farm Owners, Tennessee",
    rating: 5,
  },
  {
    content: "The conservation reporting features are exactly what we needed for our grant applications. Yona provides the documentation that shows the real impact of our habitat work.",
    author: "Dr. Rachel Torres",
    role: "Conservation Biologist, Louisiana",
    rating: 5,
  },
  {
    content: "Managing multiple properties for different clients used to be a nightmare. Now I can keep everything organized, share access with property owners, and demonstrate value with real data.",
    author: "James Whitmore",
    role: "Professional Land Manager, South Carolina",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-10 bg-secondary/30 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Trusted by Southern Land Stewards
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            From hunting clubs to conservation organizations, see why Southern folks 
            choose Yona for their land management needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-5 flex flex-col"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-card-foreground leading-relaxed flex-grow">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-border">
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
