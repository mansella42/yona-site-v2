import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-8 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/wildlife-tracks.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-2xl p-6 md:p-10 text-center shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Ready to Become a Better Land Steward?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Join Southern hunting clubs, landowners, and conservationists who trust 
            Yona to manage their properties and protect wildlife.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="#">
                Start Free Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary">
              <Link href="#">
                Schedule a Demo
              </Link>
            </Button>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            No credit card required • Free plan available forever
          </p>
        </div>
      </div>
    </section>
  )
}
