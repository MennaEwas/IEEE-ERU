'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import Link from 'next/link'
import Image from 'next/image'
import eventsData from '@/content/events.json'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

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

function EventCard({ event, index }: { event: Event; index: number }) {
  const { ref, isVisible } = useScrollAnimation()
  
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:border-white/90 card-hover group hover:shadow-[0_0_35px_rgba(255,255,255,0.9)] hover:ring-4 hover:ring-white/100 ${
        isVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
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
  )
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
      <section className="bg-ieee-blue border-b border-ieee-blue-dark">
        <div className="container-custom">
          <div className="flex gap-4 overflow-x-auto py-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-200 transform hover:scale-105 ${
                filter === 'all'
                  ? 'bg-white text-ieee-blue shadow-md'
                  : 'bg-ieee-blue-dark text-white hover:bg-ieee-blue-light'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-6 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-200 transform hover:scale-105 ${
                filter === 'upcoming'
                  ? 'bg-white text-ieee-blue shadow-md'
                  : 'bg-ieee-blue-dark text-white hover:bg-ieee-blue-light'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-6 py-2 rounded-md font-medium whitespace-nowrap transition-all duration-200 transform hover:scale-105 ${
                filter === 'past'
                  ? 'bg-white text-ieee-blue shadow-md'
                  : 'bg-ieee-blue-dark text-white hover:bg-ieee-blue-light'
              }`}
            >
              Past Events
            </button>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="section-padding bg-ieee-blue-dark">
        <div className="container-custom">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-12 fade-in-up">
              <p className="text-gray-100 text-lg">
                No events found. Check back soon for upcoming events!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
