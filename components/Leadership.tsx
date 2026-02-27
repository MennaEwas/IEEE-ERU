'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import officersData from '@/content/officers.json'
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

interface Officer {
  id: string
  name: string
  position: string
  image: string
  bio: string
  email: string
  linkedin: string
}

export default function Leadership() {
  const [officers, setOfficers] = useState<Officer[]>([])

  useEffect(() => {
    setOfficers(officersData as Officer[])
  }, [])

  if (officers.length === 0) return null

  return (
    <section className="section-padding bg-ieee-blue-dark">
      <div className="container-custom">
        <h2 className="text-center mb-16 fade-in-up text-white">Leadership & Officers</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {officers.map((officer) => (
              <div
                key={officer.id}
                className="relative bg-ieee-blue-dark/95 border-2 border-white/20 rounded-2xl pt-16 pb-6 px-6 md:pt-20 md:pb-8 md:px-8 shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center overflow-visible"
              >
                {/* Decorative arch background for image */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-40 h-20 md:w-48 md:h-24 bg-white/5 rounded-full blur-2xl"></div>
                    </div>
                    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-ieee-blue border-4 border-white/30 overflow-hidden flex items-center justify-center shadow-xl pointer-events-auto">
                      {officer.image ? (
                        <Image
                          src={`/${officer.image}`}
                          alt={officer.name || 'Officer'}
                          width={140}
                          height={140}
                          className="object-cover w-full h-full"
                        />
                      ) : (
                        <span className="text-white text-3xl font-bold">
                          {officer.name?.charAt(0) || '?'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Name and Position */}
                <h3 className="text-xl md:text-2xl font-bold mb-1 text-white mt-2">
                  {officer.name || 'Officer Name'}
                </h3>
                <p className="text-ieee-blue-light font-medium mb-3 text-sm md:text-base">
                  {officer.position || 'Position'}
                </p>
                
                {/* Bio */}
                <p className="text-gray-200 leading-relaxed mb-4 text-sm md:text-sm">
                  {officer.bio || 'Officer bio placeholder...'}
                </p>
                
                {/* Contact Icons - Always Display */}
                <div className="flex gap-4 justify-center mt-auto">
                  <a
                    href={officer.linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-white hover:text-ieee-blue-light transition-all duration-200 hover:scale-110"
                    aria-label={`${officer.name} LinkedIn`}
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={`mailto:${officer.email || '#'}`}
                    className="text-xl text-white hover:text-ieee-blue-light transition-all duration-200 hover:scale-110"
                    aria-label={`${officer.name} Email`}
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
