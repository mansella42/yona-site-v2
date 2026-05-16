"use client"

import { useEffect, useRef, useState } from "react"

interface UseFadeInOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useFadeIn(options: UseFadeInOptions = {}) {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, isVisible }
}
