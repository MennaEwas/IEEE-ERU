'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import eventsData from '@/content/events.json'

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  registrationLink: string
}

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    setEvents(eventsData as Event[])
  }, [])

  const upcomingEvents = events.slice(0, 3)

  if (upcomingEvents.length === 0) return null

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-16 fade-in-up">
          <h2>Upcoming Events</h2>
          <Link href="/events" className="text-ieee-blue hover:text-ieee-blue-dark font-semibold transition-all duration-200 hover:gap-2 flex items-center gap-1 group">
            View All
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-gray-100"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {event.image && (
                <div className="relative h-48 bg-ieee-blue overflow-hidden">
                  <Image
                    src={`/${event.image}`}
                    alt={event.title || 'Event'}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              )}
              {!event.image && (
                <div className="h-48 bg-gradient-to-br from-ieee-blue to-ieee-blue-dark group-hover:from-ieee-blue-dark group-hover:to-ieee-blue transition-all duration-300" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-ieee-blue transition-colors">
                  {event.title || 'Event Title'}
                </h3>
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  {event.date && (
                    <div className="flex items-center">
                      <span className="font-medium">Date:</span>
                      <span className="ml-2">{event.date}</span>
                    </div>
                  )}
                  {event.time && (
                    <div className="flex items-center">
                      <span className="font-medium">Time:</span>
                      <span className="ml-2">{event.time}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center">
                      <span className="font-medium">Location:</span>
                      <span className="ml-2">{event.location}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {event.description || 'Event description placeholder...'}
                </p>
                {event.registrationLink && (
                  <Link
                    href={event.registrationLink}
                    className="btn-primary text-sm inline-block mt-2"
                  >
                    Register
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
