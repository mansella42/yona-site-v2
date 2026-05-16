"use client"

interface YonaLogoProps {
  className?: string
  size?: number
  showText?: boolean
}

export function YonaLogo({ className = "", size = 40, showText = true }: YonaLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Bear head outline - sketch style */}
        <path
          d="M32 8c-12 0-22 9-22 22 0 8 4 15 10 19 2 1.5 4 3 4 6v1h16v-1c0-3 2-4.5 4-6 6-4 10-11 10-19 0-13-10-22-22-22z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Left ear */}
        <path
          d="M14 18c-3-5-2-10 1-12s8 0 10 4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Right ear */}
        <path
          d="M50 18c3-5 2-10-1-12s-8 0-10 4"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Bandana - wrapped around forehead */}
        <path
          d="M12 24c2-3 10-6 20-6s18 3 20 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M12 24c1 2 2 3 3 3h34c1 0 2-1 3-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Bandana knot on side */}
        <path
          d="M48 27c2 1 4 3 6 2s3-3 2-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M54 24c2 2 5 4 7 3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M56 29c1 2 2 5 1 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Eyes */}
        <circle cx="24" cy="34" r="3" fill="currentColor" />
        <circle cx="40" cy="34" r="3" fill="currentColor" />
        
        {/* Snout/nose area */}
        <ellipse cx="32" cy="44" rx="8" ry="6" stroke="currentColor" strokeWidth="2" fill="none" />
        <ellipse cx="32" cy="42" rx="4" ry="3" fill="currentColor" />
        
        {/* Arrow going through mouth right to left */}
        {/* Arrow shaft */}
        <line
          x1="58"
          y1="48"
          x2="6"
          y2="48"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        
        {/* Arrow head (left side) */}
        <path
          d="M6 48l8-4v8z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        
        {/* Arrow fletching (right side) */}
        <path
          d="M58 48l-6-5v3h-4v4h4v3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      
      {showText && (
        <span className="font-bold text-xl tracking-tight text-foreground">Yona</span>
      )}
    </div>
  )
}
