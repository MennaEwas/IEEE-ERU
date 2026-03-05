'use client'

interface FloatingIcon {
  icon: React.ReactNode
  top?: string
  left?: string
  right?: string
  bottom?: string
  size?: 'sm' | 'md' | 'lg'
  duration?: number
  delay?: number
  opacity?: '5' | '10'
  blur?: boolean
}

interface FloatingIconsProps {
  icons: FloatingIcon[]
  className?: string
}

export default function FloatingIcons({ icons, className = '' }: FloatingIconsProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {icons.map((iconConfig, index) => {
        const sizeClasses = {
          sm: 'w-16 h-16',
          md: 'w-20 h-20',
          lg: 'w-24 h-24',
        }

        const size = sizeClasses[iconConfig.size || 'md']
        const duration = iconConfig.duration || 10
        const delay = iconConfig.delay || 0
        const opacityValue = iconConfig.opacity === '10' ? 0.1 : 0.05
        const blur = iconConfig.blur ? 'blur-sm' : ''

        const positionStyle: React.CSSProperties = {
          top: iconConfig.top,
          left: iconConfig.left,
          right: iconConfig.right,
          bottom: iconConfig.bottom,
          animation: `float ${duration}s ease-in-out ${delay}s infinite`,
          willChange: 'transform',
          opacity: opacityValue,
        }

        return (
          <div
            key={index}
            className={`absolute ${size} ${blur}`}
            style={positionStyle}
          >
            <div className="w-full h-full text-white">
              {iconConfig.icon}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// Predefined icon sets for common use cases
export const IEEEIconSet = {
  // Simple geometric shapes
  circle: (
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
      <circle cx="50" cy="50" r="45" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
      <path d="M50 5 L61 35 L95 35 L68 55 L79 85 L50 65 L21 85 L32 55 L5 35 L39 35 Z" />
    </svg>
  ),
  hexagon: (
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
      <path d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z" />
    </svg>
  ),
  diamond: (
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
      <path d="M50 5 L95 50 L50 95 L5 50 Z" />
    </svg>
  ),
  triangle: (
    <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
      <path d="M50 10 L90 90 L10 90 Z" />
    </svg>
  ),
}
