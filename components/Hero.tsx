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
    <section className="bg-gradient-to-br from-ieee-blue to-ieee-blue-dark text-white section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="mb-6">
            {content.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            {content.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={content.primaryCTA.link} className="btn-secondary">
              {content.primaryCTA.text}
            </Link>
            <Link href={content.secondaryCTA.link} className="btn-primary bg-white text-ieee-blue hover:bg-gray-100">
              {content.secondaryCTA.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
