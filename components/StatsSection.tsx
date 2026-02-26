'use client'

import { useEffect, useState, useRef } from 'react'
import aboutData from '@/content/about.json'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Stat {
  label: string
  value: string
  description: string
}

function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 })

  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true)
      
      const startTime = Date.now()
      const startValue = 0
      const endValue = target

      const animate = () => {
        const now = Date.now()
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)

        setCount(currentValue)

        if (progress < 1) {
          requestAnimationFrame(animate)
        } else {
          setCount(endValue)
        }
      }

      requestAnimationFrame(animate)
    }
  }, [isVisible, hasStarted, target, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold mb-2">
      {count}
    </div>
  )
}

export default function StatsSection() {
  const [stats, setStats] = useState<Stat[]>([])

  useEffect(() => {
    if (aboutData.stats) {
      setStats(aboutData.stats as Stat[])
    }
  }, [])

  if (stats.length === 0) return null

  return (
    <section className="section-padding bg-ieee-blue-dark text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const targetValue = parseInt(stat.value) || 0
            return (
              <div key={index} className="text-center">
                <Counter target={targetValue} duration={2000} />
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-200">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
