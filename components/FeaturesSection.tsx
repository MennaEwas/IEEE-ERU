'use client'

import { useEffect, useState } from 'react'
import homeData from '@/content/home.json'
import { FaGraduationCap, FaHandshake, FaCogs, FaStar } from 'react-icons/fa'
import { IconType } from 'react-icons'

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

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <h2 className="text-center mb-16 fade-in-up">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-ieee-blue/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {(() => {
                  const IconComponent = iconMap[feature.icon] || FaStar
                  return <IconComponent className="text-5xl text-ieee-blue group-hover:text-ieee-blue-dark transition-colors" />
                })()}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-ieee-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
