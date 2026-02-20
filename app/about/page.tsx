'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import StatsSection from '@/components/StatsSection'
import aboutData from '@/content/about.json'

interface AboutContent {
  mission: { title: string; content: string }
  vision: { title: string; content: string }
  history: { title: string; content: string }
  values: Array<{ title: string; description: string }>
}

export default function AboutPage() {
  const [content, setContent] = useState<AboutContent | null>(null)

  useEffect(() => {
    setContent(aboutData as AboutContent)
  }, [])

  if (!content) return null

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about our mission, vision, and values"
      />
      
      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">{content.mission.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.mission.content}
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">{content.vision.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.vision.content}
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6">{content.history.title}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content.history.content}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {content.values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-ieee-blue">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <Footer />
    </main>
  )
}
