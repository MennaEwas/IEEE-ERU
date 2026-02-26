'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import homeData from '@/content/home.json'

interface HeroContent {
  title: string
  subtitle: string
  primaryCTA: { text: string; link: string }
  secondaryCTA: { text: string; link: string }
}

export default function Hero() {
  const [content, setContent] = useState<HeroContent | null>(null)

  useEffect(() => {
    if (homeData.hero) {
      setContent(homeData.hero as HeroContent)
    }
  }, [])

  if (!content) return null

  return (
    <section className="text-white section-padding relative overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background.jpeg)'
        }}
      >
      </div>
      
      {/* Transparent Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-ieee-blue/85 via-ieee-blue/80 to-ieee-blue-dark/85"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-8 fade-in-up">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-10 text-gray-100 leading-relaxed fade-in-delay-1 max-w-3xl mx-auto">
            {content.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center fade-in-delay-2">
            <Link href={content.primaryCTA.link} className="btn-secondary">
              {content.primaryCTA.text}
            </Link>
            <Link href={content.secondaryCTA.link} className="btn-primary">
              {content.secondaryCTA.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
