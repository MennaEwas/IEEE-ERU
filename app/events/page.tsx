'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
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

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([])
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all')

  useEffect(() => {
    setEvents(eventsData as Event[])
  }, [])

  const filteredEvents = events.filter((event) => {
    if (filter === 'all') return true
    if (filter === 'upcoming') {
      const eventDate = new Date(event.date)
      return eventDate >= new Date()
    }
    if (filter === 'past') {
      const eventDate = new Date(event.date)
      return eventDate < new Date()
    }
    return true
  })

  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Events" 
        subtitle="Join us for workshops, seminars, and networking opportunities"
      />
      
      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex gap-4 overflow-x-auto py-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-md font-medium whitespace-nowrap transition-colors ${
                filter === 'all'
                  ? 'bg-ieee-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-md font-medium whitespace-nowrap transition-colors ${
                filter === 'upcoming'
                  ? 'bg-ieee-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-md font-medium whitespace-nowrap transition-colors ${
                filter === 'past'
                  ? 'bg-ieee-blue text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No events found. Check back soon for upcoming events!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
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
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {event.title || 'Event Title'}
                    </h3>
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      {event.date && (
                        <div className="flex items-center">
                          <span className="font-medium mr-2">📅</span>
                          <span>{event.date}</span>
                        </div>
                      )}
                      {event.time && (
                        <div className="flex items-center">
                          <span className="font-medium mr-2">🕐</span>
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center">
                          <span className="font-medium mr-2">📍</span>
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description || 'Event description placeholder...'}
                    </p>
                    {event.registrationLink && (
                      <Link
                        href={event.registrationLink}
                        className="btn-primary text-sm inline-block w-full text-center"
                      >
                        Register Now
                      </Link>
                    )}
                    {!event.registrationLink && (
                      <button className="btn-primary text-sm w-full" disabled>
                        Registration Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
