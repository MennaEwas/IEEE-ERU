import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Twitter', href: '#', icon: '🐦' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Instagram', href: '#', icon: '📷' },
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
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-ieee-blue rounded flex items-center justify-center">
                <span className="text-white font-bold">IEEE</span>
              </div>
              <span className="ml-3 font-semibold">Student Organization</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering engineers and innovators through collaboration and professional development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-2xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          <p>© {currentYear} IEEE Student Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
