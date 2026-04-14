'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/public/lgg.png'

const navLinks = [
  { href: '#home',           label: 'Home' },
  { href: '#temple',         label: 'Temple' },
  { href: '#thero',          label: 'Head Thero' },
  { href: '#deputy-thero',   label: 'Dhamma Principal' },  // Updated
  { href: '#dhamma-school',  label: 'Dhamma School' },      // New
  { href: '#portfolio',      label: 'Gallery' },
  { href: '#contact',        label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active, setActive]       = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-glass' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with PNG image */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <Image
              src={logo}
              alt="Sri Sambuddhaloka Logo"
              fill
              className="object-contain"
              priority 
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-gold-300 text-sm tracking-widest leading-none">Sri Sambuddhaloka</p>
            <p className="font-sans text-cream-200 text-xs tracking-[0.2em] opacity-70 mt-0.5">DHAMMA SCHOOL</p>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-xs tracking-widest text-cream-300 hover:text-gold-300 transition-colors duration-300 uppercase relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle - UPDATED to white */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="nav-glass px-6 py-4 border-t border-gold-600/20">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-sans text-xs tracking-widest text-cream-300 hover:text-gold-300 transition-colors uppercase border-b border-gold-600/10"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}