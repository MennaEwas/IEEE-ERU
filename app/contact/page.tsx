'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

function SectionWithAnimation({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollAnimation()
  return (
    <div ref={ref} className={isVisible ? 'scroll-fade-in visible' : 'scroll-fade-in'}>
      {children}
    </div>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PageHeader 
        title="Contact Us" 
        subtitle="Get in touch with our team"
      />
      
      <SectionWithAnimation>
        <section className="section-padding bg-ieee-blue">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="fade-in-up">
                  <h2 className="mb-6 text-white">Get in Touch</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-white mb-2">Email</h3>
                    <a 
                      href="mailto:contact@ieee-student.org" 
                      className="text-gray-200 hover:text-white transition-colors"
                    >
                      contact@ieee-student.org
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-2">Office Location</h3>
                    <p className="text-gray-200">
                      Engineering Building<br />
                      Room 101<br />
                      University Campus
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-2">Office Hours</h3>
                    <p className="text-gray-200">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                      <a 
                        href="#" 
                        className="text-2xl text-ieee-blue hover:text-ieee-blue-dark transition-colors duration-200" 
                        aria-label="Facebook"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                      <a 
                        href="#" 
                        className="text-2xl text-ieee-blue hover:text-ieee-blue-dark transition-colors duration-200" 
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaTwitter />
                      </a>
                      <a 
                        href="#" 
                        className="text-2xl text-ieee-blue hover:text-ieee-blue-dark transition-colors duration-200" 
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                      <a 
                        href="#" 
                        className="text-2xl text-ieee-blue hover:text-ieee-blue-dark transition-colors duration-200" 
                        aria-label="Instagram"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

                {/* Contact Form */}
                <div className="fade-in-delay-1">
                  <h2 className="mb-6 text-white">Send us a Message</h2>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Do not fill this out if you are human: <input name="bot-field" />
                    </label>
                  </p>
                  
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
    </main>
  )
}