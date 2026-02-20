/**
 * Content loading utilities
 * This file provides type-safe content loading functions
 * that can be easily replaced with CMS API calls later
 */

export interface Committee {
  id: string
  name: string
  description: string
  roleSummary: string
  responsibilities: string[]
  link: string
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  registrationLink: string
}

export interface Officer {
  id: string
  name: string
  position: string
  image: string
  bio: string
  email: string
  linkedin: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  website: string
}

export interface BestMember {
  id: string
  name: string
  achievement: string
  image: string
  bio: string
  email: string
  linkedin: string
}

/**
 * Load committees data
 * TODO: Replace with CMS API call when CMS is integrated
 */
export async function getCommittees(): Promise<Committee[]> {
  const data = await import('@/content/committees.json')
  return data.default as Committee[]
}

/**
 * Load events data
 * TODO: Replace with CMS API call when CMS is integrated
 */
export async function getEvents(): Promise<Event[]> {
  const data = await import('@/content/events.json')
  return data.default as Event[]
}

/**
 * Load officers data
 * TODO: Replace with CMS API call when CMS is integrated
 */
export async function getOfficers(): Promise<Officer[]> {
  const data = await import('@/content/officers.json')
  return data.default as Officer[]
}

/**
 * Load partners data
 * TODO: Replace with CMS API call when CMS is integrated
 */
export async function getPartners(): Promise<Partner[]> {
  const data = await import('@/content/partners.json')
  return data.default as Partner[]
}

/**
 * Load best members data
 * TODO: Replace with CMS API call when CMS is integrated
 */
export async function getBestMembers(): Promise<BestMember[]> {
  const data = await import('@/content/best-members.json')
  return data.default as BestMember[]
}
