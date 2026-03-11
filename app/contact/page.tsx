'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { FaLinkedinIn, FaEnvelope, FaFacebookF } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import contactData from '@/content/contact.json'
import FloatingIcons, { IEEEIconSet } from '@/components/FloatingIcons'

function SectionWithAnimation({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div ref={ref} className={isVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'}>
      {children}
    </div>
  )
}

interface ContactContent {
  email: string
  office: {
    building: string
    room: string
    address: string
  }
  hours: {
    weekdays: string
    saturday: string
    sunday: string
  }
  social: {
    facebook: string
    linkedin: string
    tiktok: string
  }
}

const contact = contactData as ContactContent

export default function ContactPage() {
  return (
    <main className="bg-ieee-blue-dark min-h-screen overflow-x-hidden">
      <div className="overflow-x-hidden">
        <Navbar />
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team"
      />
      
      <SectionWithAnimation>
        <section className="relative section-padding bg-ieee-blue">
          <FloatingIcons icons={[
            { icon: IEEEIconSet.circle, top: '8%', left: '3%', size: 'lg' as const, duration: 12, delay: 0 },
            { icon: IEEEIconSet.star, top: '15%', right: '5%', size: 'md' as const, duration: 16, delay: 1.5 },
            { icon: IEEEIconSet.hexagon, bottom: '20%', left: '7%', size: 'sm' as const, duration: 14, delay: 0.5 },
            { icon: IEEEIconSet.diamond, bottom: '12%', right: '8%', size: 'md' as const, duration: 18, delay: 2 },
            { icon: IEEEIconSet.triangle, top: '45%', left: '2%', size: 'md' as const, duration: 10, delay: 1 },
            { icon: IEEEIconSet.star, top: '55%', right: '3%', size: 'sm' as const, duration: 15, delay: 3 },
          ]} />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="fade-in-up">
                  <h2 className="mb-6 text-white">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <a 
                      href={`mailto:${contact.email}`} 
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      {contact.email}
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-2">Office Location</h3>
                    <p className="text-gray-200">
                      {contact.office.building}<br />
                      {contact.office.room}<br />
                      {contact.office.address}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-2">Office Hours</h3>
                    <p className="text-gray-200">
                      {contact.hours.weekdays}<br />
                      {contact.hours.saturday}<br />
                      {contact.hours.sunday}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a 
                        href={contact.social.linkedin} 
                        className="text-2xl text-white hover:text-gray-200 transition-colors duration-200" 
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                      <a 
                        href={`mailto:${contact.email}`} 
                        className="text-2xl text-white hover:text-gray-200 transition-colors duration-200" 
                        aria-label="Email"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaEnvelope />
                      </a>
                      <a 
                        href={contact.social.facebook} 
                        className="text-2xl text-white hover:text-gray-200 transition-colors duration-200" 
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                      <a 
                        href={contact.social.tiktok} 
                        className="text-2xl text-white hover:text-gray-200 transition-colors duration-200" 
                        aria-label="TikTok"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTiktok />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

                {/* Contact Form */}
                <div className="fade-in-delay-1">
                  <h2 className="mb-6 text-white">Send us a Message</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    const form = e.target as HTMLFormElement
                    const formData = new FormData(form)
                    const name = formData.get('name') as string
                    const email = formData.get('email') as string
                    const subject = formData.get('subject') as string
                    const message = formData.get('message') as string
                    
                    // Format email body
                    const emailBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`
                    
                    // Create mailto link with fixed recipient and subject prefix
                    const mailtoLink = `mailto:mennatullah.abdelrahman@gmail.com?subject=IEEE-ERU: ${subject}&body=${emailBody}`
                    
                    // Open email client
                    window.location.href = mailtoLink
                    
                    // Show success message
                    alert('Your email client will open. Please send the email to complete your message.')
                    
                    // Reset form
                    form.reset()
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-white">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white placeholder-gray-300 rounded-md focus:ring-2 focus:ring-white focus:border-white focus:bg-white/20"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-white">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white placeholder-gray-300 rounded-md focus:ring-2 focus:ring-white focus:border-white focus:bg-white/20"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block mb-2 font-medium text-white">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white placeholder-gray-300 rounded-md focus:ring-2 focus:ring-white focus:border-white focus:bg-white/20"
                      placeholder="Message subject"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-white">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="w-full px-4 py-2 border border-white/30 bg-white/10 text-white placeholder-gray-300 rounded-md focus:ring-2 focus:ring-white focus:border-white focus:bg-white/20"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button type="submit" className="btn-secondary w-full">
                    Send Message
                  </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionWithAnimation>

      <Footer />
      </div>
    </main>
  )
}