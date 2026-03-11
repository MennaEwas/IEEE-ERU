'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import StatsSection from '@/components/StatsSection'
import aboutData from '@/content/about.json'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import FloatingIcons, { IEEEIconSet } from '@/components/FloatingIcons'
import { FaLightbulb, FaTrophy, FaUsers, FaBriefcase, FaRocket, FaEye, FaHistory, FaStar } from 'react-icons/fa'

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
    <main className="bg-ieee-blue-dark min-h-screen overflow-x-hidden">
      <div className="overflow-x-hidden">
        <Navbar />
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about our mission, vision, and values"
      />
      
      {/* Introduction Section */}
      <SectionWithAnimation>
        <section className="relative section-padding">
          <FloatingIcons icons={[
            { icon: IEEEIconSet.circle, top: '8%', left: '3%', size: 'lg' as const, duration: 12, delay: 0 },
            { icon: IEEEIconSet.star, top: '15%', right: '5%', size: 'md' as const, duration: 16, delay: 1.5 },
            { icon: IEEEIconSet.hexagon, bottom: '20%', left: '7%', size: 'sm' as const, duration: 14, delay: 0.5 },
            { icon: IEEEIconSet.diamond, bottom: '12%', right: '8%', size: 'md' as const, duration: 18, delay: 2 },
            { icon: IEEEIconSet.triangle, top: '45%', left: '2%', size: 'md' as const, duration: 10, delay: 1 },
            { icon: IEEEIconSet.star, top: '55%', right: '3%', size: 'sm' as const, duration: 15, delay: 3 },
          ]} />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-6 fade-in-up text-white">{content.introduction.title}</h2>
              <div className="about-paragraph-frame">
                <p className="text-lg text-gray-100 leading-relaxed fade-in-delay-1">
                  {content.introduction.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Mission, Vision, and History Cards Section */}
      <SectionWithAnimation>
        <section className="relative section-padding">
          <FloatingIcons icons={[
            { icon: IEEEIconSet.circle, top: '8%', left: '3%', size: 'lg' as const, duration: 12, delay: 0 },
            { icon: IEEEIconSet.star, top: '15%', right: '5%', size: 'md' as const, duration: 16, delay: 1.5 },
            { icon: IEEEIconSet.hexagon, bottom: '20%', left: '7%', size: 'sm' as const, duration: 14, delay: 0.5 },
            { icon: IEEEIconSet.diamond, bottom: '12%', right: '8%', size: 'md' as const, duration: 18, delay: 2 },
            { icon: IEEEIconSet.triangle, top: '45%', left: '2%', size: 'md' as const, duration: 10, delay: 1 },
            { icon: IEEEIconSet.star, top: '55%', right: '3%', size: 'sm' as const, duration: 15, delay: 3 },
          ]} />
          <div className="container-custom relative z-10">
            <div className="max-w-6xl mx-auto">
              {/* Vision and Mission in same row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Vision Card */}
                <div className="about-card-frame">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mr-4">
                      <FaEye className="text-2xl text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{content.vision.title}</h2>
                  </div>
                  <p className="text-lg text-gray-100 leading-relaxed">
                    {content.vision.content}
                  </p>
                </div>

                {/* Mission Card */}
                <div className="about-card-frame">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mr-4">
                      <FaRocket className="text-2xl text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{content.mission.title}</h2>
                  </div>
                  <p className="text-lg text-gray-100 leading-relaxed">
                    {content.mission.content}
                  </p>
                </div>
              </div>

              {/* History Card - Full width below */}
              <div className="about-card-frame">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/15 flex items-center justify-center mr-4">
                    <FaHistory className="text-2xl text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{content.history.title}</h2>
                </div>
                <p className="text-lg text-gray-100 leading-relaxed">
                  {content.history.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      {/* Values Section */}
      <SectionWithAnimation>
        <section className="relative section-padding">
          <FloatingIcons icons={[
            { icon: IEEEIconSet.circle, top: '8%', left: '3%', size: 'lg' as const, duration: 12, delay: 0 },
            { icon: IEEEIconSet.star, top: '15%', right: '5%', size: 'md' as const, duration: 16, delay: 1.5 },
            { icon: IEEEIconSet.hexagon, bottom: '20%', left: '7%', size: 'sm' as const, duration: 14, delay: 0.5 },
            { icon: IEEEIconSet.diamond, bottom: '12%', right: '8%', size: 'md' as const, duration: 18, delay: 2 },
            { icon: IEEEIconSet.triangle, top: '45%', left: '2%', size: 'md' as const, duration: 10, delay: 1 },
            { icon: IEEEIconSet.star, top: '55%', right: '3%', size: 'sm' as const, duration: 15, delay: 3 },
          ]} />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-center mb-12 fade-in-up text-white">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.values.map((value, index) => {
                  // Map values to appropriate icons
                  const valueIcons: Record<string, React.ReactNode> = {
                    'Innovation': <FaLightbulb className="text-3xl text-ieee-blue" />,
                    'Excellence': <FaTrophy className="text-3xl text-ieee-blue" />,
                    'Community': <FaUsers className="text-3xl text-ieee-blue" />,
                    'Professional Development': <FaBriefcase className="text-3xl text-ieee-blue" />,
                  }
                  
                  const icon = valueIcons[value.title] || <FaStar className="text-3xl text-ieee-blue" />
                  
                  return (
                    <div 
                      key={index} 
                      className="bg-white p-6 rounded-xl shadow-sm card-hover border-2 border-white/30 hover:border-white/100 hover:shadow-[0_0_50px_rgba(255,255,255,1)] hover:ring-4 hover:ring-white/100"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-ieee-blue/10 flex items-center justify-center mr-4">
                          {icon}
                        </div>
                        <h3 className="text-xl font-semibold text-ieee-blue group-hover:text-ieee-blue-dark transition-colors">
                          {value.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      <StatsSection />
      <Footer />
      </div>
    </main>
  )
}
