'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import committeesData from '@/content/committees.json'

interface Committee {
  id: string
  name: string
  description: string
  icon: string
  link: string
}

export default function CommitteesPage() {
  const [committees, setCommittees] = useState<Committee[]>([])

  useEffect(() => {
    setCommittees(committeesData as Committee[])
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Our Committees" 
        subtitle="Explore the various committees that drive our organization forward"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee) => (
              <Link
                key={committee.id}
                href={committee.link || '#'}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-all duration-200 border border-gray-200 hover:border-ieee-blue group"
              >
                <div className="mb-6">
                  {committee.icon ? (
                    <div className="w-16 h-16 bg-ieee-blue rounded-lg flex items-center justify-center mb-4 group-hover:bg-ieee-blue-dark transition-colors">
                      <span className="text-white text-3xl">{committee.icon}</span>
                    </div>
                  ) : (
                    <div className="w-16 h-16 bg-ieee-blue rounded-lg mb-4 group-hover:bg-ieee-blue-dark transition-colors" />
                  )}
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {committee.name || 'Committee Name'}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {committee.description || 'Committee description placeholder. This section will contain detailed information about the committee\'s purpose, activities, and how members can get involved.'}
                </p>
                <span className="text-ieee-blue font-medium group-hover:text-ieee-blue-dark">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Interested in Joining a Committee?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Our committees are always looking for passionate members who want to make a difference. 
              Join us and contribute to our mission!
            </p>
            <Link href="/join" className="btn-primary inline-block">
              Join Us Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}