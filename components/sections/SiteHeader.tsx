'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'

interface SiteHeaderProps {
  applyHref: string
}

export function SiteHeader({ applyHref }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Programs', href: '#programs' },
    { label: 'Why GAPSO', href: '#why' },
    { label: 'Learning', href: '#learning' },
    { label: 'Community', href: '#community' },
    { label: 'Blog', href: '#blog' },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F6F4EE]/90 backdrop-blur-md border-b border-[#D8D5CA] shadow-xs py-3.5'
            : 'bg-[#F6F4EE] border-b border-[#D8D5CA] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#top"
            className="group flex items-baseline gap-2.5 font-mono text-xs tracking-wider"
          >
            <span className="font-serif text-xl tracking-tight text-[#121312] group-hover:text-[#E44B27] transition-colors">
              GAPSO
            </span>
            <span className="text-[10px] font-medium tracking-[0.14em] text-[#6C6D67] uppercase">
              SCHOOL OF AI
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 text-[#2C2E2C] hover:text-[#E44B27] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E44B27] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={applyHref}
              className="hidden sm:inline-flex btn-primary text-[11px] py-2 px-4 shadow-[2px_2px_0px_#121312]"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#121312] hover:text-[#E44B27] transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#F6F4EE] border-b border-[#D8D5CA] shadow-xl md:hidden px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 border-b border-[#E5E2D8] text-[#121312] hover:text-[#E44B27] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#9B9C94]">↗</span>
                </a>
              ))}
              <a
                href={applyHref}
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-3 text-center w-full justify-center"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
