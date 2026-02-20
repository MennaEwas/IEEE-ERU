'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import officersData from '@/content/officers.json'

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
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    setOfficers(officersData as Officer[])
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % officers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + officers.length) % officers.length)
  }

  if (officers.length === 0) return null

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-16 fade-in-up">Leadership & Officers</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {officers.map((officer) => (
                  <div
                    key={officer.id}
                    className="min-w-full bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 md:p-12 shadow-sm"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-ieee-blue overflow-hidden flex items-center justify-center">
                          {officer.image ? (
                            <Image
                              src={`/${officer.image}`}
                              alt={officer.name || 'Officer'}
                              width={160}
                              height={160}
                              className="object-cover w-full h-full"
                            />
                          ) : (
                            <span className="text-white text-4xl font-bold">
                              {officer.name?.charAt(0) || '?'}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                          {officer.name || 'Officer Name'}
                        </h3>
                        <p className="text-ieee-blue font-medium mb-4">
                          {officer.position || 'Position'}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {officer.bio || 'Officer bio placeholder...'}
                        </p>
                        {(officer.email || officer.linkedin) && (
                          <div className="mt-4 flex gap-4 justify-center md:justify-start">
                            {officer.email && (
                              <a
                                href={`mailto:${officer.email}`}
                                className="text-ieee-blue hover:text-ieee-blue-dark"
                              >
                                Email
                              </a>
                            )}
                            {officer.linkedin && (
                              <a
                                href={officer.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-ieee-blue hover:text-ieee-blue-dark"
                              >
                                LinkedIn
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {officers.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Previous officer"
                >
                  <svg
                    className="w-6 h-6 text-ieee-blue"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                  aria-label="Next officer"
                >
                  <svg
                    className="w-6 h-6 text-ieee-blue"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {officers.length > 1 && (
              <div className="flex justify-center gap-2 mt-6">
                {officers.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-ieee-blue' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
