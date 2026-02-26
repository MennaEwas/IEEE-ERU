'use client'

import { useState } from 'react'
import Image from 'next/image'

// Automatically load all partner images from assets/partners/
const PARTNER_IMAGES = [
  'partners/p1.jpg',
  'partners/p2.jpg',
  'partners/p3.jpg',
  'partners/p4.jpg',
  'partners/p5.jpg',
  'partners/p6.jpg',
]

export default function Partners() {
  const [isPaused, setIsPaused] = useState(false)

  // Duplicate the array to create seamless loop
  const duplicatedPartners = [...PARTNER_IMAGES, ...PARTNER_IMAGES]

  return (
    <section className="section-padding bg-ieee-blue-dark overflow-hidden">
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
              className={`flex gap-12 items-center ${isPaused ? 'pause-animation' : 'marquee-animation'}`}
              style={{
                width: 'max-content',
              }}
            >
              {duplicatedPartners.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: '200px', height: '100px' }}
                >
                  <Image
                    src={`/${image}`}
                    alt={`Partner ${index + 1}`}
                    width={200}
                    height={100}
                    className="object-contain w-full h-full grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
