'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import committeesData from '@/content/committees.json'

interface Committee {
  id: string
  name: string
  description: string
  icon: string
  link: string
}

export default function Committees() {
  const [committees, setCommittees] = useState<Committee[]>([])

  useEffect(() => {
    setCommittees(committeesData as Committee[])
  }, [])

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center mb-12">Our Committees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((committee) => (
            <Link
              key={committee.id}
              href={committee.link || '#'}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 border border-gray-200 hover:border-ieee-blue"
            >
              <div className="mb-4">
                {committee.icon ? (
                  <div className="w-12 h-12 bg-ieee-blue rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white text-2xl">{committee.icon}</span>
                  </div>
                ) : (
                  <div className="w-12 h-12 bg-ieee-blue rounded-lg mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {committee.name || 'Committee Name'}
                </h3>
              </div>
              <p className="text-gray-600">
                {committee.description || 'Committee description placeholder...'}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
