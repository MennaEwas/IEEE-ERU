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
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-12">
          <h2>Upcoming Events</h2>
          <Link href="/events" className="text-ieee-blue hover:text-ieee-blue-dark font-medium">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
            >
              {event.image && (
                <div className="relative h-48 bg-ieee-blue">
                  <Image
                    src={`/${event.image}`}
                    alt={event.title || 'Event'}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              {!event.image && (
                <div className="h-48 bg-gradient-to-br from-ieee-blue to-ieee-blue-dark" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
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
                    className="btn-primary text-sm inline-block"
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
