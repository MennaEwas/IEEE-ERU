'use client'

import { useState } from 'react'
import Image from 'next/image'
import partnersData from '@/content/partners.json'
import FloatingIcons, { IEEEIconSet } from './FloatingIcons'

interface Partner {
  id: string
  name: string
  logo: string
  website?: string
}

export default function Partners() {
  const [isPaused, setIsPaused] = useState(false)

  const partners = partnersData as Partner[]

  // Duplicate the array to create seamless loop
  const duplicatedPartners = [...partners, ...partners]

  const floatingIcons = [
    { icon: IEEEIconSet.circle, top: '8%', left: '3%', size: 'lg' as const, duration: 12, delay: 0 },
    { icon: IEEEIconSet.star, top: '15%', right: '5%', size: 'md' as const, duration: 16, delay: 1.5 },
    { icon: IEEEIconSet.hexagon, bottom: '20%', left: '7%', size: 'sm' as const, duration: 14, delay: 0.5 },
    { icon: IEEEIconSet.diamond, bottom: '12%', right: '8%', size: 'md' as const, duration: 18, delay: 2 },
    { icon: IEEEIconSet.triangle, top: '45%', left: '2%', size: 'md' as const, duration: 10, delay: 1 },
    { icon: IEEEIconSet.star, top: '55%', right: '3%', size: 'sm' as const, duration: 15, delay: 3 },
  ]

  return (
    <section className="relative section-padding overflow-hidden">
      <FloatingIcons icons={floatingIcons} />
      <div className="container-custom relative z-10">
        <h2 className="text-center mb-16 fade-in-up text-white">Our Partners</h2>
        
        {/* Marquee Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <div 
              className={`flex gap-12 items-center marquee-animation ${isPaused ? 'pause-animation' : ''}`}
              style={{
                width: 'max-content',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <a
                  key={`${partner.id}-${index}`}
                  href={partner.website || '#'}
                  className={`flex-shrink-0 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 lg:w-56 lg:h-28 ${
                    partner.website ? '' : 'cursor-default'
                  }`}
                  aria-label={partner.name || `Partner ${index + 1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/${partner.logo}`}
                    alt={partner.name || `Partner ${index + 1}`}
                    width={200}
                    height={100}
                    className="object-contain w-full h-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
