'use client'

import { useEffect, useState } from 'react'
import committeesData from '@/content/committees.json'

interface Committee {
  id: string
  name: string
  description: string
  roleSummary: string
  responsibilities: string[]
  link: string
}

export default function Committees() {
  const [committees, setCommittees] = useState<Committee[]>([])
  const [expandedId, setExpandedId] = useState<string | null>(null)

  useEffect(() => {
    setCommittees(committeesData as Committee[])
  }, [])

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-16 fade-in-up">Our Committees</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {committees.map((committee, index) => (
            <div
              key={committee.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-ieee-blue transition-colors">
                    {committee.name || 'Committee Name'}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {committee.description || 'Committee description placeholder...'}
                </p>
                
                <button
                  onClick={() => toggleExpand(committee.id)}
                  className="w-full flex items-center justify-between text-ieee-blue hover:text-ieee-blue-dark font-semibold transition-all duration-200 py-2 group-hover:gap-2"
                  aria-expanded={expandedId === committee.id}
                >
                  <span>Learn More</span>
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
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedId === committee.id ? 'max-h-[1000px]' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                  {committee.roleSummary && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Role Summary</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {committee.roleSummary}
                      </p>
                    </div>
                  )}
                  
                  {committee.responsibilities && committee.responsibilities.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Responsibilities</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        {committee.responsibilities.map((responsibility, index) => (
                          <li key={index}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {(!committee.roleSummary && (!committee.responsibilities || committee.responsibilities.length === 0)) && (
                    <p className="text-gray-500 text-sm italic">
                      Role summary and responsibilities coming soon...
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
