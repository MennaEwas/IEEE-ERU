'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import consularData from '@/content/consular.json'

interface ConsularContent {
  title: string
  image: string
  bio: string
}

export default function Consular() {
  const [content, setContent] = useState<ConsularContent | null>(null)

  useEffect(() => {
    setContent(consularData as ConsularContent)
  }, [])

  if (!content) return null

  return (
    <section className="section-padding bg-gradient-to-b from-ieee-blue to-ieee-blue-dark">
      <div className="container-custom">
        <h2 className="text-center mb-16 fade-in-up text-white">{content.title}</h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="fade-in-up order-2 md:order-1">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={`/${content.image}`}
                    alt="Consular"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Bio Text */}
            <div className="fade-in-delay-1 order-1 md:order-2">
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-100 leading-relaxed space-y-6">
                  {content.bio.split(/\n\n|\\n\\n/).filter(p => p.trim()).map((paragraph, index) => (
                    <p key={index} className="text-lg md:text-xl">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
