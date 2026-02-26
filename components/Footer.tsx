import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';


export default function Footer() {
  const currentYear = new Date().getFullYear()



  const socialLinks = [
    { name: 'Facebook', href: '#', icon: FaFacebookF },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'LinkedIn', href: '#', icon: FaLinkedinIn },
    { name: 'Instagram', href: '#', icon: FaInstagram },
  ];

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
              <Image
                src="/logo-footer.png"
                alt="IEEE Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
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
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl icon-white-hover"
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
        <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
          <p>© {currentYear} IEEE ERU Student Organization. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
