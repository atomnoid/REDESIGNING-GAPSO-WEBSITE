'use client'

import React, { useState, useEffect, useRef } from 'react'
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
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })
  const navRef = useRef<HTMLDivElement>(null)
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx)
    const el = linkRefs.current[idx]
    const nav = navRef.current
    if (el && nav) {
      const navRect = nav.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      setPillStyle({
        left: elRect.left - navRect.left - 10,
        width: elRect.width + 20,
      })
    }
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#F6F4EE]/96 backdrop-blur-lg border-b border-[#D6D3C8] py-3'
            : 'bg-[#F6F4EE] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#top" className="flex items-baseline gap-2 group">
            <span className="font-bold text-xl text-[#111210] group-hover:text-[#E44B27] transition-colors tracking-tight">
              GAPSO
            </span>
            <span className="font-mono text-[9px] text-[#6B6C65] uppercase tracking-widest font-medium">
              School of AI
            </span>
          </a>

          {/* Desktop pill nav */}
          <div
            ref={navRef}
            className="hidden md:flex items-center relative"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Sliding pill background */}
            <AnimatePresence>
              {hoveredIdx !== null && (
                <motion.div
                  key="pill"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1, left: pillStyle.left, width: pillStyle.width }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  className="absolute h-8 bg-[#ECE8DD] rounded-full"
                  style={{ left: pillStyle.left, width: pillStyle.width, top: '50%', transform: 'translateY(-50%)' }}
                />
              )}
            </AnimatePresence>

            {navLinks.map((l, i) => (
              <a
                key={l.label}
                ref={(el) => { linkRefs.current[i] = el }}
                href={l.href}
                onMouseEnter={() => handleMouseEnter(i)}
                className="relative z-10 px-3 py-1.5 text-[13px] font-medium text-[#111210] hover:text-[#E44B27] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a href={applyHref} className="hidden sm:inline-flex btn text-[10px] py-2.5 px-5">
              Apply Now
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden w-9 h-9 flex items-center justify-center hover:bg-[#ECE8DD] rounded-full transition-colors"
              aria-label="Toggle navigation"
            >
              {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[57px] z-40 bg-[#F6F4EE] border-b border-[#D6D3C8] px-6 py-6 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3.5 border-b border-[#D6D3C8] text-base font-medium text-[#111210] hover:text-[#E44B27] flex items-center justify-between transition-colors"
                >
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
