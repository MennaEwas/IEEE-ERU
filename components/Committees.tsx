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
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <section className="section-padding bg-ieee-blue overflow-visible relative">
      <div className="container-custom">
        <h2 className="text-center mb-16 fade-in-up text-white">
          Our Committees
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {committees.map((committee, index) => (
            <div
              key={committee.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={`
                bg-white 
                rounded-xl 
                shadow-md 
                border border-transparent 
                transition-all duration-300 
                relative overflow-visible 
                transform hover:-translate-y-1 
                hover:border-white 
                hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]
                min-h-[220px]
                group
                ${expandedId === committee.id ? 'z-30 shadow-2xl' : 'z-10'}
              `}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-ieee-blue transition-colors">
                  {committee.name || 'Committee Name'}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {committee.description || 'Committee description placeholder...'}
                </p>

                <button
                  onClick={() => toggleExpand(committee.id)}
                  className="w-full flex items-center justify-between text-ieee-blue hover:text-ieee-blue-dark font-semibold transition-all duration-200 py-2"
                  aria-expanded={expandedId === committee.id}
                >
                  <span>Learn More</span>

                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
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

              {/* Animated Collapsible Content */}
              <div
                className={`
                  absolute left-0 right-0 top-full mt-2
                  bg-white
                  rounded-xl
                  shadow-xl
                  border border-gray-200
                  z-40
                  p-6
                  animate-fadeIn
                  ${expandedId === committee.id
                    ? 'max-h-[400px] opacity-100 pt-4'
                    : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-6 pb-6 border-t border-gray-200 pt-4">
                  {committee.roleSummary && (
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Role Summary
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {committee.roleSummary}
                      </p>
                    </div>
                  )}

                  {committee.responsibilities?.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Responsibilities
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        {committee.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {!committee.roleSummary &&
                    (!committee.responsibilities ||
                      committee.responsibilities.length === 0) && (
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