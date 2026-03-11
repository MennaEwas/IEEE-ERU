'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import officersData from '@/content/officers.json'
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import FloatingIcons, { IEEEIconSet } from './FloatingIcons'

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
    index: number
    position: 'center' | 'side'
  }

  const getWrappedIndex = (index: number) => {
    if (total === 0) return 0
    return (index + total) % total
  }

  let visibleOfficers: PositionedOfficer[] = []

  if (total === 1) {
    visibleOfficers = [{ officer: officers[0], index: 0, position: 'center' }]
  } else if (total === 2) {
    const centerIndex = getWrappedIndex(currentIndex)
    const sideIndex = getWrappedIndex(currentIndex + 1)

    visibleOfficers = [
      { officer: officers[centerIndex], index: centerIndex, position: 'center' },
      { officer: officers[sideIndex], index: sideIndex, position: 'side' },
    ]
  } else {
    const leftIndex = getWrappedIndex(currentIndex - 1)
    const rightIndex = getWrappedIndex(currentIndex + 1)

    visibleOfficers = [
      { officer: officers[leftIndex], index: leftIndex, position: 'side' },
      { officer: officers[currentIndex], index: currentIndex, position: 'center' },
      { officer: officers[rightIndex], index: rightIndex, position: 'side' },
    ]
  }

  const floatingIcons = [
    { icon: IEEEIconSet.star, top: '10%', left: '5%', size: 'md' as const, duration: 10, delay: 0 },
    { icon: IEEEIconSet.circle, top: '20%', right: '8%', size: 'sm' as const, duration: 14, delay: 2 },
    { icon: IEEEIconSet.hexagon, bottom: '15%', left: '10%', size: 'lg' as const, duration: 18, delay: 1 },
    { icon: IEEEIconSet.diamond, bottom: '25%', right: '12%', size: 'md' as const, duration: 12, delay: 3 },
    { icon: IEEEIconSet.triangle, top: '50%', left: '3%', size: 'sm' as const, duration: 16, delay: 0.5 },
    { icon: IEEEIconSet.star, top: '60%', right: '5%', size: 'md' as const, duration: 14, delay: 2.5 },
  ]

  return (
    <section className="relative section-padding overflow-hidden">
      <FloatingIcons icons={floatingIcons} />
      <div className="container-custom w-full relative z-10">
        <h2 className="text-center mb-12 sm:mb-16 md:mb-24 lg:mb-44 fade-in-up text-white relative z-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Leadership &amp; Officers</h2>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 items-stretch pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-12 lg:pb-16 w-full">
            {visibleOfficers.map(({ officer, position, index }) => {
              const isCenterCard = position === 'center'

              return (
                <div
                  key={officer.id}
                  onClick={() => {
                    if (!isCenterCard) {
                      setCurrentIndex(index)
                    }
                  }}
                  className={`relative rounded-2xl sm:rounded-3xl pt-16 sm:pt-20 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 flex flex-col items-center text-center bg-ieee-blue shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-300 ${
                    isCenterCard
                      ? 'md:scale-110 lg:scale-125 xl:scale-150 brightness-100 z-10 cursor-default'
                      : 'md:scale-95 lg:scale-90 opacity-60 blur-[1px] md:blur-[2px] cursor-pointer'
                  }`}
                >
                {/* Light blue arch background - smaller than image so image extends below */}
                <div className={`absolute left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none ${
                  isCenterCard ? '-top-16 sm:-top-20 md:-top-24' : '-top-12 sm:-top-16'
                }`}>
                  <div className={`relative flex justify-center ${
                    isCenterCard ? 'w-36 h-32 sm:w-44 sm:h-36 md:w-48 md:h-40 lg:w-56 lg:h-44' : 'w-32 h-28 sm:w-36 sm:h-30 md:w-40 md:h-32 lg:w-44 lg:h-36'
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
                        className={`pointer-events-auto absolute -top-8 sm:-top-10 md:-top-12 left-1/2 -translate-x-1/2 ${
                          officer.image.includes('l3.png')
                            ? 'object-cover scale-100'
                            : 'object-contain'
                        } ${
                          isCenterCard 
                            ? 'w-36 h-[220px] sm:w-44 sm:h-[260px] md:w-48 md:h-[280px] lg:w-56 lg:h-[300px] -bottom-3 sm:-bottom-4 md:-bottom-6' 
                            : 'w-32 h-[160px] sm:w-36 sm:h-[180px] md:w-40 md:h-[200px] lg:w-44 lg:h-[220px] -bottom-2 sm:-bottom-2 md:-bottom-3'
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
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 text-[#f7e36d] mt-6 sm:mt-8">
                  {officer.name || 'Officer Name'}
                </h3>
                {/* Role - white/80%, smaller, normal weight */}
                <p className="text-white/80 text-xs sm:text-sm md:text-base font-normal mb-3 sm:mb-4">
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
