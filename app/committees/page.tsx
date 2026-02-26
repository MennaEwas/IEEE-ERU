'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import committeesData from '@/content/committees.json'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface Committee {
  id: string
  name: string
  description: string
  roleSummary: string
  responsibilities: string[]
  link: string
}

function CommitteeCard({ 
  committee, 
  index, 
  expandedId, 
  toggleExpand 
}: { 
  committee: Committee
  index: number
  expandedId: string | null
  toggleExpand: (id: string) => void
}) {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-md border-2 border-white/30 hover:border-white/100 overflow-hidden card-hover group hover:brightness-110 hover:shadow-[0_0_50px_rgba(255,255,255,1)] hover:ring-4 hover:ring-white/100 ${
        isVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-8">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-ieee-blue transition-colors">
            {committee.name || 'Committee Name'}
          </h3>
        </div>
        <p className="text-gray-600 leading-relaxed mb-4">
          {committee.description || 'Committee description placeholder. This section will contain detailed information about the committee\'s purpose, activities, and how members can get involved.'}
        </p>
        
        <button
          onClick={() => toggleExpand(committee.id)}
          className="w-full flex items-center justify-between text-ieee-blue hover:text-ieee-blue-dark font-semibold transition-all duration-200 py-2 group-hover:gap-2"
          aria-expanded={expandedId === committee.id}
        >
          <span>View Details</span>
          <svg
            className={`w-5 h-5 transition-transform duration-200 ${
              expandedId === committee.id ? 'rotate-180' : ''
            }`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Collapsible Content */}
      {expandedId === committee.id && (
        <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-[1000px] opacity-100">
          <div className="px-8 pb-8 border-t border-gray-200 pt-6">
          {committee.roleSummary && (
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">Role Summary</h4>
              <p className="text-gray-600 leading-relaxed">
                {committee.roleSummary}
              </p>
            </div>
          )}
          
          {committee.responsibilities && committee.responsibilities.length > 0 && (
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-lg">Responsibilities</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {committee.responsibilities.map((responsibility, index) => (
                  <li key={index} className="leading-relaxed">{responsibility}</li>
                ))}
              </ul>
            </div>
          )}
          
          {(!committee.roleSummary && (!committee.responsibilities || committee.responsibilities.length === 0)) && (
            <p className="text-gray-500 italic">
              Role summary and responsibilities coming soon...
            </p>
          )}
          </div>
        </div>
      )}
    </div>
  )
}

function SectionWithAnimation({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div ref={ref} className={isVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'}>
      {children}
    </div>
  )
}

export default function CommitteesPage() {
  const [committees, setCommittees] = useState<Committee[]>([])
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    setCommittees(committeesData as Committee[])
  }, [])

  const toggleExpand = (id: string) => {
    setExpandedId(prev => {
      // If clicking the same card, collapse it
      if (prev === id) {
        return null
      }
      // Otherwise, expand only this card (collapse any other)
      return id
    })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Our Committees" 
        subtitle="Explore the various committees that drive our organization forward"
      />
      
      <section className="section-padding bg-ieee-blue">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee, index) => (
              <CommitteeCard 
                key={committee.id} 
                committee={committee} 
                index={index} 
                expandedId={expandedId} 
                toggleExpand={toggleExpand} 
              />
            ))}
          </div>
        </div>
      </section>

      <SectionWithAnimation>
        <section className="section-padding bg-ieee-blue-dark">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6 fade-in-up text-white">Interested in Joining a Committee?</h2>
              <p className="text-lg text-gray-100 mb-8 fade-in-delay-1">
                Our committees are always looking for passionate members who want to make a difference. 
                Join us and contribute to our mission!
              </p>
              <div className="fade-in-delay-2">
                <Link href="/join" className="btn-secondary inline-block">
                  Join Us Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      <Footer />
    </main>
  )
}
