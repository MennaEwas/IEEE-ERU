'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import StatsSection from '@/components/StatsSection'
import aboutData from '@/content/about.json'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AboutContent {
  introduction: { title: string; content: string }
  mission: { title: string; content: string }
  vision: { title: string; content: string }
  history: { title: string; content: string }
  values: Array<{ title: string; description: string }>
}

function SectionWithAnimation({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div ref={ref} className={isVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'}>
      {children}
    </div>
  )
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
      
      {/* Introduction Section */}
      <SectionWithAnimation>
        <section className="section-padding bg-ieee-blue">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6 fade-in-up text-white">{content.introduction.title}</h2>
              <p className="text-lg text-gray-100 leading-relaxed fade-in-delay-1">
                {content.introduction.content}
              </p>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Mission Section */}
      <SectionWithAnimation>
        <section className="section-padding bg-ieee-blue-dark">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6 fade-in-up text-white">{content.mission.title}</h2>
              <p className="text-lg text-gray-100 leading-relaxed fade-in-delay-1">
                {content.mission.content}
              </p>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Vision Section */}
      <SectionWithAnimation>
        <section className="section-padding bg-ieee-blue">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6 fade-in-up text-white">{content.vision.title}</h2>
              <p className="text-lg text-gray-100 leading-relaxed fade-in-delay-1">
                {content.vision.content}
              </p>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* History Section */}
      <SectionWithAnimation>
        <section className="section-padding bg-ieee-blue-dark">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6 fade-in-up text-white">{content.history.title}</h2>
              <p className="text-lg text-gray-100 leading-relaxed fade-in-delay-1">
                {content.history.content}
              </p>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Values Section */}
      <SectionWithAnimation>
        <section className="section-padding bg-ieee-blue">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12 fade-in-up text-white">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.values.map((value, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-xl shadow-sm card-hover border border-white/20 hover:border-white/90 hover:shadow-[0_0_35px_rgba(255,255,255,0.9)] hover:ring-4 hover:ring-white/100"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-xl font-semibold mb-3 text-ieee-blue group-hover:text-ieee-blue-dark transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      <StatsSection />
      <Footer />
    </main>
  )
}
