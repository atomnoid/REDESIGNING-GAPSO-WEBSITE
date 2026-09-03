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
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E6E5E1] py-3.5'
            : 'bg-white border-b border-[#E6E5E1] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#top"
            className="group flex items-baseline gap-2 font-mono text-xs tracking-wider"
          >
            <span className="font-sans font-bold text-lg tracking-tight text-[#0D0D0C] group-hover:text-[#E44B27] transition-colors">
              GAPSO
            </span>
            <span className="text-[10px] font-semibold tracking-[0.14em] text-[#6B6B69] uppercase">
              SCHOOL OF AI
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#2A2A28]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#E44B27] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={applyHref}
              className="hidden sm:inline-flex btn-primary text-[11px] py-2 px-4"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#0D0D0C] hover:text-[#E44B27] transition-colors"
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white border-b border-[#E6E5E1] shadow-lg md:hidden px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 border-b border-[#F0EFEB] text-[#0D0D0C] hover:text-[#E44B27] flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#9E9E9C]">↗</span>
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
