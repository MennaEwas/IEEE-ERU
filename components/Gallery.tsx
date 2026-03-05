'use client'

import { useEffect, useState } from 'react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import img01 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.27 PM.jpeg'
import img02 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.28 PM (1).jpeg'
import img03 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.28 PM (2).jpeg'
import img04 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.28 PM (3).jpeg'
import img05 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.29 PM (1).jpeg'
import img06 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.29 PM (2).jpeg'
import img07 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.29 PM (3).jpeg'
import img08 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.29 PM (4).jpeg'
import img09 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.29 PM (5).jpeg'
import img10 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.29 PM (6).jpeg'
import img11 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.30 PM (1).jpeg'
import img12 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.30 PM (2).jpeg'
import img13 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.30 PM (3).jpeg'
import img14 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.30 PM (4).jpeg'
import img15 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.30 PM.jpeg'
import img16 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.31 PM (1).jpeg'
import img17 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.31 PM (2).jpeg'
import img18 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.31 PM (3).jpeg'
import img19 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.31 PM (4).jpeg'
import img20 from '@/assets/gallery/event gallery/WhatsApp Image 2026-02-20 at 5.39.31 PM.jpeg'

interface GalleryItem {
  id: string
  src: StaticImageData
  alt?: string
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'gallery-1', src: img01, alt: '' },
  { id: 'gallery-2', src: img02, alt: '' },
  { id: 'gallery-3', src: img03, alt: '' },
  { id: 'gallery-4', src: img04, alt: '' },
  { id: 'gallery-5', src: img05, alt: '' },
  { id: 'gallery-6', src: img06, alt: '' },
  { id: 'gallery-7', src: img07, alt: '' },
  { id: 'gallery-8', src: img08, alt: '' },
  { id: 'gallery-9', src: img09, alt: '' },
  { id: 'gallery-10', src: img10, alt: '' },
  { id: 'gallery-11', src: img11, alt: '' },
  { id: 'gallery-12', src: img12, alt: '' },
  { id: 'gallery-13', src: img13, alt: '' },
  { id: 'gallery-14', src: img14, alt: '' },
  { id: 'gallery-15', src: img15, alt: '' },
  { id: 'gallery-16', src: img16, alt: '' },
  { id: 'gallery-17', src: img17, alt: '' },
  { id: 'gallery-18', src: img18, alt: '' },
  { id: 'gallery-19', src: img19, alt: '' },
  { id: 'gallery-20', src: img20, alt: '' },
]

const VISIBLE_COUNT = 3
const AUTO_PLAY_INTERVAL = 3500 // ms

export default function Gallery() {
  const items = GALLERY_ITEMS
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (items.length <= VISIBLE_COUNT) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length)
    }, AUTO_PLAY_INTERVAL)

    return () => clearInterval(interval)
  }, [items.length])

  if (items.length === 0) return null

  const getVisibleItems = () => {
    if (items.length <= VISIBLE_COUNT) {
      return items
    }

    const visible: GalleryItem[] = []
    for (let i = 0; i < VISIBLE_COUNT; i++) {
      const index = (currentIndex + i) % items.length
      visible.push(items[index])
    }
    return visible
  }

  const visibleItems = getVisibleItems()

  return (
    <section className="relative section-padding">
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-white mb-2">Our Gallery</h2>
          <p className="text-sm md:text-base text-white/80 max-w-xl mx-auto">
            A glimpse of our activities, members, and moments across IEEE ERU.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {visibleItems.map((item, idx) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/30 shadow-lg shadow-black/40 h-64 md:h-72 group transition-transform duration-500 hover:-translate-y-1"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.src}
                    alt={item.alt || 'Gallery image'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-60 transition-opacity duration-500" />
                </div>

                <div className="relative z-10 h-full" />
              </div>
            ))}
          </div>

          {/* Simple progress dots to show movement, based on total items */}
          {items.length > VISIBLE_COUNT && (
            <div className="flex justify-center gap-2 mt-6">
              {items.map((item, index) => {
                // Map the logical "window start" to a dot; normalize by VISIBLE_COUNT
                const isActive = index === currentIndex
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full border border-white/50 transition-all duration-200 ${
                      isActive ? 'bg-white scale-110' : 'bg-transparent opacity-60'
                    }`}
                    aria-label={`Show gallery images starting from ${index + 1}`}
                  />
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

