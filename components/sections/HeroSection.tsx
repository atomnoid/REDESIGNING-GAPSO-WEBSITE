'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { HeroAnimation } from './HeroAnimation'

interface HeroSectionProps {
  applyHref: string
}

export function HeroSection({ applyHref }: HeroSectionProps) {
  return (
    <section
      id="top"
      className="relative pt-12 md:pt-20 pb-12 border-b border-[#D8D5CA] bg-blueprint-grid overflow-hidden"
    >
      {/* Editorial Watermark subtle background accent */}
      <div className="absolute right-4 top-12 select-none pointer-events-none text-[#121312]/[0.03] font-serif text-[16vw] leading-none z-0">
        BUILD
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E44B27] animate-pulse" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#E44B27] uppercase">
                FUNDAMENTALS TO PRODUCTION AI
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-[5.2rem] font-medium tracking-tight text-[#121312] leading-[0.98] mb-6"
            >
              Don’t just learn AI.
              <br />
              <em className="font-serif italic font-normal text-[#E44B27] pr-2">
                Learn to build
              </em>
              with it.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#6C6D67] max-w-xl font-normal leading-relaxed mb-8"
            >
              GAPSO School of AI trains students and professionals to understand,
              build and ship real AI systems — from first principles to production.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2"
            >
              <a href={applyHref} className="btn-primary group">
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#programs"
                className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold tracking-wider text-[#121312] hover:text-[#E44B27] uppercase transition-colors group"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Architectural AI Engine Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-start lg:items-end w-full"
          >
            <HeroAnimation />
          </motion.div>
        </div>

        {/* Hero Meta Bottom Ticker Bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-6 border-t border-[#D8D5CA] grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#6C6D67] font-mono text-[11px] tracking-wider uppercase"
        >
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#E44B27]" />
            <span>50% Theory / 50% Practical</span>
          </div>
          <div className="flex items-center gap-3 sm:justify-center">
            <span className="w-1.5 h-1.5 bg-[#E44B27]" />
            <span>Weekend Batches</span>
          </div>
          <div className="flex items-center gap-3 sm:justify-end">
            <span className="w-1.5 h-1.5 bg-[#E44B27]" />
            <span>Project-Driven</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
