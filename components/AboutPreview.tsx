'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import homeData from '@/content/home.json'

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

  return (
    <section className="section-padding bg-ieee-blue-dark">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-6 fade-in-up text-white">{content.title}</h2>
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100 fade-in-delay-1">
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
