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
  email: string
  linkedin: string
}

export default function Leadership() {
  const [officers, setOfficers] = useState<Officer[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setOfficers(officersData as Officer[])
  }, [])

  if (officers.length === 0) return null

  const total = officers.length

  type PositionedOfficer = {
    officer: Officer
    position: 'center' | 'side'
  }

  const getWrappedIndex = (index: number) => {
    if (total === 0) return 0
    return (index + total) % total
  }

  let visibleOfficers: PositionedOfficer[] = []

  if (total === 1) {
    visibleOfficers = [{ officer: officers[0], position: 'center' }]
  } else if (total === 2) {
    visibleOfficers = [
      { officer: officers[getWrappedIndex(currentIndex)], position: 'center' },
      { officer: officers[getWrappedIndex(currentIndex + 1)], position: 'side' },
    ]
  } else {
    const leftIndex = getWrappedIndex(currentIndex - 1)
    const rightIndex = getWrappedIndex(currentIndex + 1)

    visibleOfficers = [
      { officer: officers[leftIndex], position: 'side' },
      { officer: officers[currentIndex], position: 'center' },
      { officer: officers[rightIndex], position: 'side' },
    ]
  }

  return (
    <section className="section-padding bg-ieee-blue-dark overflow-hidden">
      <div className="container-custom w-full">
        <h2 className="text-center mb-16 md:mb-44 fade-in-up text-white relative z-20">Leadership &amp; Officers</h2>
        <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch pt-12 md:pt-16 lg:pt-20 pb-8 md:pb-12 lg:pb-16 w-full">
            {visibleOfficers.map(({ officer, position }) => {
              const isCenterCard = position === 'center'

              return (
                <div
                  key={officer.id}
                  className={`relative rounded-3xl pt-20 pb-8 px-6 md:pt-20 md:pb-10 md:px-8 flex flex-col items-center text-center bg-ieee-blue shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 ${
                    isCenterCard
                      ? 'lg:scale-150 brightness-100 z-10'
                      : 'lg:scale-90 opacity-60 blur-[2px]'
                  }`}
                >
                {/* Light blue arch background - smaller than image so image extends below */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none ${
                  isCenterCard ? '-top-20 md:-top-24' : '-top-16'
                }`}>
                  <div className={`relative flex justify-center ${
                    isCenterCard ? 'w-48 h-40 md:w-56 md:h-44' : 'w-40 h-32 md:w-44 md:h-36'
                  }`}>
                    {/* Arch - clean solid light blue, rounded-top-full only - smaller than image */}
                    <div className="w-full h-full bg-[#bcd3e8] rounded-t-full" />
                    {/* Image positioned to extend below the arch border but within card bounds */}
                    {officer.image ? (
                      <Image
                        src={`/${officer.image}`}
                        alt={officer.name || 'Officer'}
                        width={isCenterCard ? 200 : 140}
                        height={isCenterCard ? 260 : 180}
                        className={`pointer-events-auto absolute -top-12 left-1/2 -translate-x-1/2 ${
                          officer.image.includes('l3.png')
                            ? 'object-cover scale-100'
                            : 'object-contain'
                        } ${
                          isCenterCard 
                            ? 'w-48 h-[280px] md:w-56 md:h-[300px] -bottom-4 md:-bottom-6' 
                            : 'w-40 h-[200px] md:w-44 md:h-[220px] -bottom-2 md:-bottom-3'
                        }`}
                        style={{ 
                          maxHeight: 'calc(100% + 50px)',
                          ...(officer.image.includes('l3.png') && { objectPosition: 'center' })
                        }}
                      />
                    ) : (
                      <span className="pointer-events-auto absolute bottom-0 left-1/2 -translate-x-1/2 text-white text-3xl font-bold">
                        {officer.name?.charAt(0) || '?'}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Name - soft yellow, semibold, centered */}
                <h3 className="text-xl md:text-2xl font-semibold mb-1 text-[#f7e36d] mt-8">
                  {officer.name || 'Officer Name'}
                </h3>
                {/* Role - white/80%, smaller, normal weight */}
                <p className="text-white/80 text-sm md:text-base font-normal mb-4">
                  {officer.position || 'Position'}
                </p>
                
                {/* Contact Icons - white, small, centered, subtle hover opacity only */}
                <div className="flex gap-4 justify-center mt-auto">
                  <a
                    href={officer.linkedin || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-white hover:opacity-70 transition-opacity duration-200"
                    aria-label={`${officer.name} LinkedIn`}
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href={`mailto:${officer.email || '#'}`}
                    className="text-base text-white hover:opacity-70 transition-opacity duration-200"
                    aria-label={`${officer.name} Email`}
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>
              )
            })}
          </div>
          {total > 3 && (
            <div className="flex justify-center gap-2 mt-8">
              {officers.map((officer, index) => (
                <button
                  key={officer.id}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full border border-yellow-300 transition-all duration-200 ${
                    index === currentIndex ? 'bg-yellow-300 scale-110' : 'bg-transparent opacity-60'
                  }`}
                  aria-label={`Go to officer ${officer.name || index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
