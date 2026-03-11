'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import homeData from '@/content/home.json'
import FloatingIcons, { IEEEIconSet } from './FloatingIcons'

interface AboutPreviewContent {
  title: string
  content: string
  cta: { text: string; link: string }
}

export default function AboutPreview() {
  const [content, setContent] = useState<AboutPreviewContent | null>(null)

  useEffect(() => {
    if (homeData.aboutPreview) {
      setContent(homeData.aboutPreview as AboutPreviewContent)
    }
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
    <section className="relative section-padding">
      <FloatingIcons icons={floatingIcons} />
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-6 fade-in-up text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{content.title}</h2>
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-gray-100 fade-in-delay-1 px-4">
              {content.content}
            </p>
            <div className="fade-in-delay-2">
              <Link href={content.cta.link} className="btn-secondary inline-block">
                {content.cta.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
