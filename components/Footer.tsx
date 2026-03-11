import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedinIn, FaEnvelope, FaFacebookF } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa6'
import contactData from '@/content/contact.json'

interface ContactContent {
  email: string
  social: {
    facebook: string
    linkedin: string
    tiktok: string
  }
}

const contact = contactData as ContactContent

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'LinkedIn', href: contact.social.linkedin, icon: FaLinkedinIn },
    { name: 'Email', href: `mailto:${contact.email}`, icon: FaEnvelope },
    { name: 'Facebook', href: contact.social.facebook, icon: FaFacebookF },
    { name: 'TikTok', href: contact.social.tiktok, icon: FaTiktok },
  ]

  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/committees', label: 'Committees' },
    { href: '/events', label: 'Events' },
    { href: '/join', label: 'Join Us' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-8 sm:py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logo-footer.png"
                alt="IEEE Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="ml-2 sm:ml-3 text-sm sm:text-base font-semibold">IEEE ERU Student Organization</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              Empowering engineers and innovators through collaboration and professional development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h3>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl icon-white-hover"
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-400">
          <p>© {currentYear} IEEE ERU Student Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
