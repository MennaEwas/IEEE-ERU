'use client'

import { useEffect, useState } from 'react'
import committeesData from '@/content/committees.json'

interface Committee {
  id: string
  name: string
  description: string
  icon: string
  link: string
}

export default function JoinUs() {
  const [committees, setCommittees] = useState<Committee[]>([])

  useEffect(() => {
    setCommittees(committeesData as Committee[])
  }, [])

  return (
    <section className="section-padding bg-gradient-to-br from-ieee-blue to-ieee-blue-dark text-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 text-gray-100 leading-relaxed">
            Become part of a vibrant community of engineers, innovators, and leaders.
            Connect with peers, develop new skills, and make a lasting impact.
          </p>
          <div className="bg-white rounded-lg p-8 text-gray-900">
            <form
              name="join-us"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              encType="multipart/form-data"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="join-us" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              
              <div>
                <label htmlFor="name" className="block text-left mb-2 font-medium">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="university" className="block text-left mb-2 font-medium">
                  University <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="university"
                  name="university"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                  placeholder="Your university name"
                />
              </div>
              
              <div>
                <label htmlFor="faculty" className="block text-left mb-2 font-medium">
                  Faculty <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="faculty"
                  name="faculty"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                  placeholder="e.g., Engineering, Computer Science"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-left mb-2 font-medium">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ieee-blue focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="committee" className="block text-left mb-2 font-medium">
                  Which Committee? <span className="text-red-500">*</span>
                </label>
                <select
                  id="committee"
                  name="committee"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ieee-blue focus:border-transparent bg-white"
                >
                  <option value="">Select a committee</option>
                  {committees.map((committee) => (
                    <option key={committee.id} value={committee.name || committee.id}>
                      {committee.name || `Committee ${committee.id}`}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="cv" className="block text-left mb-2 font-medium">
                  CV/Resume <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-ieee-blue focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-ieee-blue file:text-white hover:file:bg-ieee-blue-dark file:cursor-pointer"
                />
                <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 10MB)</p>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
