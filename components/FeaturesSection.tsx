'use client'

import { useEffect, useState } from 'react'
import homeData from '@/content/home.json'

interface Feature {
  title: string
  description: string
  icon: string
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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-12">Why Join Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
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
