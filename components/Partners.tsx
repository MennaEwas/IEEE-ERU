'use client'

import { useState } from 'react'
import Image from 'next/image'
import partnersData from '@/content/partners.json'

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

  return (
    <section className="relative section-padding overflow-hidden">
      <div className="container-custom">
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
                  className={`flex-shrink-0 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-300 ${
                    partner.website ? '' : 'cursor-default'
                  }`}
                  style={{ width: '200px', height: '100px' }}
                  aria-label={partner.name || `Partner ${index + 1}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`/${partner.logo}`}
                    alt={partner.name || `Partner ${index + 1}`}
                    width={200}
                    height={100}
                    className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
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
