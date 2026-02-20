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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">{content.title}</h2>
          <div className="prose prose-lg max-w-none text-center text-gray-700">
            <p className="text-lg leading-relaxed mb-6">
              {content.content}
            </p>
            <Link href={content.cta.link} className="btn-primary inline-block">
              {content.cta.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
