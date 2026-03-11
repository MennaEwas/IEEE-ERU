'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import consularData from '@/content/consular.json'
import { FaGraduationCap, FaAward, FaBook, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import FloatingIcons, { IEEEIconSet } from './FloatingIcons'

interface ConsularContent {
  title?: string
  image: string
  name?: string
  position?: string
  academicLeadership?: string
  awardsRecognition?: string
  researchContributions?: string
  bio: string
}

export default function Consular() {
  const [content, setContent] = useState<ConsularContent | null>(null)

  useEffect(() => {
    setContent(consularData as ConsularContent)
  }, [])

  if (!content) return null

  const floatingIcons = [
    { icon: IEEEIconSet.circle, top: '8%', left: '3%', size: 'lg' as const, duration: 12, delay: 0 },
    { icon: IEEEIconSet.star, top: '15%', right: '5%', size: 'md' as const, duration: 16, delay: 1.5 },
    { icon: IEEEIconSet.hexagon, bottom: '20%', left: '7%', size: 'sm' as const, duration: 14, delay: 0.5 },
    { icon: IEEEIconSet.diamond, bottom: '12%', right: '8%', size: 'md' as const, duration: 18, delay: 2 },
    { icon: IEEEIconSet.triangle, top: '45%', left: '2%', size: 'md' as const, duration: 10, delay: 1 },
    { icon: IEEEIconSet.star, top: '55%', right: '3%', size: 'sm' as const, duration: 15, delay: 3 },
  ]

  return (
    <section className="relative section-padding text-white">
      <FloatingIcons icons={floatingIcons} />
      <div className="container-custom relative z-10">
        {/* Section Title with Decorative Divider */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 tracking-wider uppercase">Our CONSULAR</h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 md:w-24 bg-white/50"></div>
            <div className="w-3 h-3 bg-white/70 rotate-45 shadow-lg"></div>
            <div className="h-px w-20 md:w-24 bg-white/50"></div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-end">
            {/* Left Column: Profile Image + Research Card */}
            <div className="fade-in-up flex flex-col">
              {/* Doctor Profile */}
              <div className="flex flex-col items-center md:items-start mb-6">
                <div className="relative mb-6 float-z-animation">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl aspect-square">
                    <Image
                      src={`/${content.image}`}
                      alt={content.name || "Dr. Wael Badawy"}
                      fill
                      className="object-cover rounded-full"
                      style={{ borderRadius: '50%' }}
                    />
                  </div>
                  {/* Decorative border glow */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 -z-10"></div>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left">{content.name || "Dr. Wael Badawy"}</h3>
                <p className="text-base sm:text-lg text-gray-200 mt-2 text-center md:text-left">{content.position || "Professor of Electrical and Electronic Engineering"}</p>
              </div>

              {/* Research & Contributions Card - Below Profile */}
              <div className="bg-ieee-blue-dark/90 border-2 border-white/30 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 flex flex-col min-h-0">
                <div className="flex flex-col items-center text-center mb-4 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/15 flex items-center justify-center mb-3 sm:mb-4 shadow-inner flex-shrink-0">
                    <FaBook className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-ieee-blue-light mb-2 sm:mb-3">Research & Contributions</h4>
                </div>
                <p className="text-gray-200 leading-relaxed text-center text-sm sm:text-base md:text-lg flex-grow min-h-0">
                  {content.researchContributions || ""}
                </p>
              </div>
            </div>


            {/* Right Column: Academic Leadership + Awards Cards */}
            <div className="fade-in-delay-1 grid grid-cols-1 gap-6">
              {/* Academic Leadership Card */}
              <div className="bg-ieee-blue-dark/90 border-2 border-white/30 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 flex flex-col min-h-0">
                <div className="flex flex-col items-center text-center mb-4 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/15 flex items-center justify-center mb-3 sm:mb-4 shadow-inner flex-shrink-0">
                    <FaGraduationCap className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-ieee-blue-light mb-2 sm:mb-3">Academic Leadership</h4>
                </div>
                <p className="text-gray-200 leading-relaxed text-center text-sm sm:text-base md:text-lg flex-grow min-h-0">
                  {content.academicLeadership || ""}
                </p>
              </div>

              {/* Awards & Recognition Card */}
              <div className="bg-ieee-blue-dark/90 border-2 border-white/30 rounded-xl p-4 sm:p-6 md:p-8 shadow-xl hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 flex flex-col min-h-0">
                <div className="flex flex-col items-center text-center mb-4 flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/15 flex items-center justify-center mb-3 sm:mb-4 shadow-inner flex-shrink-0">
                    <FaAward className="text-2xl sm:text-3xl text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-ieee-blue-light mb-2 sm:mb-3">Awards & Recognition</h4>
                </div>
                <p className="text-gray-200 leading-relaxed text-center text-sm sm:text-base md:text-lg flex-grow min-h-0">
                  {content.awardsRecognition || ""}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Biography Paragraph */}
        <div className="max-w-4xl mx-auto fade-in-delay-2 mt-6 sm:mt-8">
          <div className="bg-ieee-blue-dark/70 border border-white/20 rounded-xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-lg">
            <p className="text-gray-100 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl text-center whitespace-pre-line">
              {content.bio}
            </p>
          </div>
        </div>

        {/* Contact Icons - End of Section */}
        <div className="flex gap-6 mt-8 justify-center fade-in-delay-2">
          <a 
            href="#" 
            className="text-3xl text-white hover:text-ieee-blue-light transition-all duration-200 hover:brightness-110 hover:scale-110"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="#" 
            className="text-3xl text-white hover:text-ieee-blue-light transition-all duration-200 hover:brightness-110 hover:scale-110"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  )
}
