'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import partnersData from '@/content/partners.json'

interface Partner {
  id: string
  name: string
  logo: string
  website: string
}

export default function Partners() {
  const [partners, setPartners] = useState<Partner[]>([])

  useEffect(() => {
    setPartners(partnersData as Partner[])
  }, [])

  if (partners.length === 0) return null

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center">
          {partners.map((partner) => (
            <a
              key={partner.id}
              href={partner.website || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 hover:opacity-75 transition-opacity duration-200"
            >
              {partner.logo ? (
                <Image
                  src={`/${partner.logo}`}
                  alt={partner.name || 'Partner'}
                  width={150}
                  height={80}
                  className="object-contain max-h-16 w-auto"
                />
              ) : (
                <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{partner.name || 'Partner'}</span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
