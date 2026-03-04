'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import bestMembersData from '@/content/best-members.json'
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

interface BestMember {
  id: string
  name: string
  achievement: string
  image: string
  email: string
  linkedin: string
}

export default function BestMembers() {
  const [members, setMembers] = useState<BestMember[]>([])

  useEffect(() => {
    setMembers(bestMembersData as BestMember[])
  }, [])

  if (members.length === 0) return null

  return (
    <section className="section-padding bg-ieee-blue">
      <div className="container-custom">
        <h2 className="text-center mb-16 fade-in-up text-white">Best Members</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member) => (
              <div
                key={member.id}
                className="best-member-card p-6 md:p-8 h-full flex flex-col"
              >
                <div className="relative z-10 flex flex-col items-center text-center gap-4">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white/10 overflow-hidden flex items-center justify-center">
                    {member.image ? (
                      <Image
                        src={`/${member.image}`}
                        alt={member.name || 'Member'}
                        width={140}
                        height={140}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-white text-3xl font-bold">
                        {member.name?.charAt(0) || '?'}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold mb-1 text-white">
                      {member.name || 'Member Name'}
                    </h3>
                    <p className="text-yellow-300 font-medium mb-3 text-sm md:text-base">
                      {member.achievement || 'Achievement'}
                    </p>
                    {/* Contact Icons - Always Display */}
                    <div className="mt-4 flex gap-4 justify-center">
                      <a
                        href={member.linkedin || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-yellow-300 hover:text-yellow-200 transition-all duration-200 hover:scale-110"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <FaLinkedinIn />
                      </a>
                      <a
                        href={`mailto:${member.email || '#'}`}
                        className="text-2xl text-yellow-300 hover:text-yellow-200 transition-all duration-200 hover:scale-110"
                        aria-label={`${member.name} Email`}
                      >
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
