'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'About Us', href: '/about' },
  { name: 'Providers', href: '/providers' },
  {
    name: 'Services', href: '/services',
    children: [
      { name: 'Abdominal Aortic Aneurysm', href: '/services#aaa' },
      { name: 'Angiogram', href: '/services#arteriograms' },
      { name: 'Angioplasty', href: '/services#angioplasty' },
      { name: 'Carotid Treatments', href: '/services#carotid' },
      { name: 'Lower Extremity Bypass', href: '/services#bypass' },
      { name: 'Sclerotherapy', href: '/services#sclerotherapy' },
      { name: 'Vein Treatments', href: '/services#vein' },
    ],
  },
  {
    name: 'Centers', href: '/centers',
    children: [
      { name: 'Vascular Centers', href: '/centers#vascular' },
      { name: 'Vascular Labs', href: '/centers#labs' },
      { name: 'Vein Center', href: '/centers#vein' },
      { name: 'Mobility Center', href: '/centers#mobility' },
      { name: 'Richmond Vein Center', href: '/centers#rvc' },
    ],
  },
  { name: 'News', href: '/news' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <>
      {/* Top bar with Patient Portal / Patient Forms */}
      <div className="bg-coral">
        <div className="container-custom flex justify-end items-center py-0">
          <div className="flex">
            <a
              href="#"
              className="text-white text-sm font-bold px-5 py-2.5 hover:bg-coral-dark transition-colors border-l border-white/20"
            >
              Patient Portal
            </a>
            <a
              href="#"
              className="text-white text-sm font-bold px-5 py-2.5 hover:bg-coral-dark transition-colors border-l border-white/20"
            >
              Patient Forms
            </a>
          </div>
        </div>
      </div>

      {/* Logo section */}
      <div className="bg-white py-4 border-b border-gray-100">
        <div className="container-custom flex justify-center">
          <Link href="/" className="flex items-center">
            {/* VSA Stylized Logo */}
            <svg width="120" height="80" viewBox="0 0 120 80" className="flex-shrink-0">
              <text x="10" y="62" fontFamily="'Libre Baskerville', serif" fontSize="60" fontWeight="700" fill="#d06860" fontStyle="italic">V</text>
              <text x="42" y="55" fontFamily="'Libre Baskerville', serif" fontSize="42" fontWeight="700" fill="#999999" fontStyle="italic">S</text>
              <text x="68" y="62" fontFamily="'Libre Baskerville', serif" fontSize="60" fontWeight="700" fill="#3696da" fontStyle="italic">A</text>
            </svg>
          </Link>
        </div>
      </div>

      {/* Main navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container-custom">
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center justify-center gap-0">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`block px-5 py-4 text-sm font-bold uppercase tracking-wider transition-colors ${
                    pathname === item.href || pathname?.startsWith(item.href + '/')
                      ? 'text-coral'
                      : 'text-gray-700 hover:text-coral'
                  }`}
                >
                  {item.name}
                </Link>
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 shadow-lg py-2 min-w-[240px] z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-gray-600 hover:text-coral hover:bg-gray-50 transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center justify-between h-14">
            <Link href="/" className="flex items-center">
              <svg width="60" height="40" viewBox="0 0 120 80">
                <text x="10" y="62" fontFamily="serif" fontSize="60" fontWeight="700" fill="#d06860" fontStyle="italic">V</text>
                <text x="42" y="55" fontFamily="serif" fontSize="42" fontWeight="700" fill="#999" fontStyle="italic">S</text>
                <text x="68" y="62" fontFamily="serif" fontSize="60" fontWeight="700" fill="#3696da" fontStyle="italic">A</text>
              </svg>
            </Link>
            <button className="p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <nav className="container-custom py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-3 py-2 text-sm font-bold uppercase tracking-wider ${
                      pathname === item.href ? 'text-coral' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link key={child.name} href={child.href} onClick={() => setMobileOpen(false)} className="block px-3 py-1.5 text-sm text-gray-600">
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
