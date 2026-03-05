'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import committeesData from '@/content/committees.json'
import ProjectsImage from '../assets/committee/projects.png'
import MarketingImage from '@/assets/committee/marketing.png'
import PRImage from '@/assets/committee/PR.png'

interface Committee {
  id: string
  name: string
  description: string
  roleSummary: string
  responsibilities: string[]
  link: string
}

const committeeImages: { [key: string]: any } = {
  Projects: ProjectsImage,
  Marketing: MarketingImage,
  PR: PRImage,
}

export default function Committees() {
  const [committees, setCommittees] = useState<Committee[]>([])
  const [expandedId, setExpandedId] = useState<string | null>(null)
  // Animation speed in seconds (lower = faster, higher = slower)
  // Examples: 2s = fast, 4s = medium (default), 6s = slow, 8s = very slow
  const floatSpeed = 4

  useEffect(() => {
    setCommittees(committeesData as Committee[])
  }, [])

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id))
  }

  return (
    <section className="section-padding bg-ieee-blue overflow-visible relative">
      <div className="container-custom">
        <h2 className="text-center mb-36 fade-in-up text-white">
          Our Committees
        </h2>

        <div className="flex flex-wrap items-start gap-x-6 gap-y-40 relative">
          {committees.map((committee, index) => {
            const imageForCommittee = committeeImages[committee.name]

            return (
              <div
                key={committee.id}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  '--float-speed': `${floatSpeed}s`
                } as React.CSSProperties}
                className={`
                w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]
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
                committee-float
                ${expandedId === committee.id ? 'z-30 shadow-2xl [animation-play-state:paused]' : 'z-10'}
              `}
              >
                {/* Circular image badge, slightly more outside the card */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2">
                  <div className="w-40 h-40 rounded-full border-4 border-white shadow-md bg-white overflow-hidden flex items-center justify-center">
                    {imageForCommittee ? (
                      <Image
                        src={imageForCommittee}
                        alt={`${committee.name} committee illustration`}
                        className={`w-full h-full object-cover ${
                          committee.name === 'Marketing' || committee.name === 'PR'
                            ? 'scale-[1.15]'
                            : ''
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[10px] text-ieee-blue/70 text-center px-1">
                        Illustration
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-12">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-ieee-blue transition-colors text-center">
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

                {/* Animated Collapsible Content (inside card, pushes layout) */}
                <div
                  className={`
                  bg-white
                  border-t border-gray-200
                  px-6 pb-6 pt-0
                  overflow-hidden
                  transition-all duration-300 ease-in-out
                  ${expandedId === committee.id ? 'max-h-[400px] opacity-100 pt-4' : 'max-h-0 opacity-0'}
                `}
                >
                  <div>
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
            )
          })}
        </div>
      </div>
    </section>
  )
}