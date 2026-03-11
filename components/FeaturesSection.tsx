'use client'

import { useEffect, useState } from 'react'
import homeData from '@/content/home.json'
import { FaGraduationCap, FaHandshake, FaCogs, FaStar } from 'react-icons/fa'
import { IconType } from 'react-icons'
import FloatingIcons, { IEEEIconSet } from './FloatingIcons'

interface Feature {
  title: string
  description: string
  icon: string
}

const iconMap: Record<string, IconType> = {
  'graduation': FaGraduationCap,
  'networking': FaHandshake,
  'projects': FaCogs,
  'community': FaStar,
}

export default function FeaturesSection() {
  const [features, setFeatures] = useState<Feature[]>([])

  useEffect(() => {
    if (homeData.features) {
      setFeatures(homeData.features as Feature[])
    }
  }, [])

  if (features.length === 0) return null

  const floatingIcons = [
    { icon: IEEEIconSet.circle, top: '8%', left: '3%', size: 'lg' as const, duration: 12, delay: 0 },
    { icon: IEEEIconSet.star, top: '15%', right: '5%', size: 'md' as const, duration: 16, delay: 1.5 },
    { icon: IEEEIconSet.hexagon, bottom: '20%', left: '7%', size: 'sm' as const, duration: 14, delay: 0.5 },
    { icon: IEEEIconSet.diamond, bottom: '12%', right: '8%', size: 'md' as const, duration: 18, delay: 2 },
    { icon: IEEEIconSet.triangle, top: '45%', left: '2%', size: 'md' as const, duration: 10, delay: 1 },
    { icon: IEEEIconSet.star, top: '55%', right: '3%', size: 'sm' as const, duration: 15, delay: 3 },
  ]

  return (
    <section className="relative section-padding">
      <FloatingIcons icons={floatingIcons} />
      <div className="container-custom relative z-10">
        <h2 className="text-center mb-12 sm:mb-16 fade-in-up text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Why Join Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group bg-white p-6 sm:p-8 rounded-xl shadow-sm card-hover border-2 border-white/30 hover:border-white/100 hover:shadow-[0_0_50px_rgba(255,255,255,1)] hover:ring-4 hover:ring-white/100 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {(() => {
                  const IconComponent = iconMap[feature.icon] || FaStar
                  return <IconComponent className="text-4xl sm:text-5xl text-ieee-blue group-hover:text-ieee-blue-dark transition-colors" />
                })()}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 group-hover:text-ieee-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
