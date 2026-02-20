'use client'

import { useEffect, useState } from 'react'
import aboutData from '@/content/about.json'

interface Stat {
  label: string
  value: string
  description: string
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
    <section className="section-padding bg-ieee-blue text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-200">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
