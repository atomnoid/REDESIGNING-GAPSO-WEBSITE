'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'How It Works', href: '#why' },
  { label: 'Projects', href: '#projects' },
  { label: 'Who It\'s For', href: '#audience' },
  { label: 'Community', href: '#community' },
]

export function SiteHeader({ applyHref }: { applyHref: string }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`sticky top-0 z-50 w-full border-b border-[#D6D3C8] transition-all ${scrolled ? 'bg-[#F6F4EE]/95 backdrop-blur-md py-3.5' : 'bg-[#F6F4EE] py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#top" className="flex items-baseline gap-2 group">
            <span className="font-bold text-xl text-[#111210] group-hover:text-[#E44B27] transition-colors tracking-tight">GAPSO</span>
            <span className="font-mono text-[9px] text-[#6B6C65] uppercase tracking-widest font-medium">School of AI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-[#111210]">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} className="hover:text-[#E44B27] transition-colors">{l.label}</a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href={applyHref} className="hidden sm:inline-flex btn text-xs">Apply Now</a>
            <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle navigation">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-[57px] z-40 bg-[#F6F4EE] border-b border-[#D6D3C8] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className="py-3 border-b border-[#D6D3C8] text-base font-medium text-[#111210] hover:text-[#E44B27] flex items-center justify-between transition-colors">
                  {l.label}
                  <span className="font-mono text-xs text-[#6B6C65]">↗</span>
                </a>
              ))}
              <a href={applyHref} className="mt-4 btn justify-center">Apply Now</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
