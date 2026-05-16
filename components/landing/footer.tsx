"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { YonaLogo } from "@/components/yona-logo"

const footerLinks = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Mobile App", href: "/#app-preview" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Conservation Efforts", href: "/conservation" },
  ],
  resources: [
    { name: "Help Center", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Community", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
}

const subPages = ["/about", "/conservation"]

export function Footer() {
  const pathname = usePathname()
  const isSubPage = subPages.includes(pathname)

  if (isSubPage) {
    return (
      <footer className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <YonaLogo size={28} className="[&_span]:text-background [&_svg]:text-background" />
            <div className="flex items-center gap-6">
              <Link href="/about" className="text-sm text-background/70 hover:text-background transition-colors">About Us</Link>
              <Link href="/conservation" className="text-sm text-background/70 hover:text-background transition-colors">Conservation</Link>
              <Link href="/#pricing" className="text-sm text-background/70 hover:text-background transition-colors">Pricing</Link>
              <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">Privacy</Link>
            </div>
            <p className="text-sm text-background/60">&copy; {new Date().getFullYear()} Yona</p>
          </div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <YonaLogo size={32} className="mb-4 [&_span]:text-background [&_svg]:text-background" />
            <p className="text-sm text-background/70 leading-relaxed">
              Land and wildlife management for Southern folks who care about stewardship.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-background mb-3 text-sm">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              &copy; {new Date().getFullYear()} Yona. All rights reserved.
            </p>
            <p className="text-sm text-background/60">
              Made with care for the land.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
