"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YonaLogo } from "@/components/yona-logo"

const navItems = [
  { name: "About Us", href: "/#about" },
  { name: "Features", href: "/#features" },
  { name: "Conservation Efforts", href: "/#conservation" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Pricing", href: "/#pricing" },
]

const subPages = ["/about", "/conservation"]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isSubPage = subPages.includes(pathname)

  // Slim header for About and Conservation pages
  if (isSubPage) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Home className="h-5 w-5" />
              <span className="text-sm font-medium">Home</span>
            </Link>
            <Link href="/">
              <YonaLogo size={36} />
            </Link>
            <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://app.yona.land" target="_blank" rel="noopener noreferrer">Launch Web App</a>
            </Button>
          </div>
        </nav>
      </header>
    )
  }

  // Full header for home page
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <YonaLogo size={40} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://app.yona.land" target="_blank" rel="noopener noreferrer">Launch Web App</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://app.yona.land" target="_blank" rel="noopener noreferrer">Launch Web App</a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
