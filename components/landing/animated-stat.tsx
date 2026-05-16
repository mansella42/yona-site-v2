"use client"

import { useAnimatedCounter } from "@/hooks/use-animated-counter"

interface AnimatedStatProps {
  value: number
  suffix?: string
  prefix?: string
  label: string
  duration?: number
  className?: string
  valueClassName?: string
  labelClassName?: string
}

export function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  className = "",
  valueClassName = "text-2xl font-bold",
  labelClassName = "text-sm",
}: AnimatedStatProps) {
  const { count, ref } = useAnimatedCounter(value, { duration })

  return (
    <div ref={ref} className={className}>
      <p className={valueClassName}>
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      <p className={labelClassName}>{label}</p>
    </div>
  )
}
