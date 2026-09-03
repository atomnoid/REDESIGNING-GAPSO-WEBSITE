'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface FinalCtaAndFooterProps {
  applyHref: string
}

export function FinalCtaAndFooter({ applyHref }: FinalCtaAndFooterProps) {
  return (
    <>
      {/* Final CTA Section */}
      <section className="py-28 md:py-36 bg-[#E44B27] text-white relative overflow-hidden">
        {/* Background architectural watermark */}
        <div className="absolute right-0 bottom-0 select-none pointer-events-none text-white/[0.05] font-serif text-[24vw] leading-none z-0">
          01
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-medium tracking-tight text-white leading-[0.92] mb-6">
              Start at{' '}
              <em className="font-serif italic font-normal text-[#121312]">
                01.
              </em>
            </h2>

            <p className="text-lg sm:text-xl text-white/90 font-normal leading-relaxed max-w-xl mb-10">
              AI Fundamentals is free. Begin there, or tell us you’re not sure yet and we’ll work it out together.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={applyHref}
                className="btn-cta-invert py-4 px-8 text-xs gap-3"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#programs"
                className="font-mono text-xs font-semibold tracking-wider text-white hover:text-[#121312] uppercase transition-colors inline-flex items-center gap-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="blog" className="py-20 bg-[#121312] text-[#F6F4EE] border-t border-[#2B2D2B]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#2B2D2B]">
            {/* Left Brand Col */}
            <div className="lg:col-span-4 space-y-4">
              <a
                href="#top"
                className="inline-flex items-baseline gap-2.5 font-mono text-sm tracking-wider"
              >
                <b className="font-serif text-2xl text-white">GAPSO</b>
                <span className="text-[10px] tracking-widest text-[#9B9C94] uppercase font-medium">
                  SCHOOL OF AI
                </span>
              </a>

              <p className="text-sm text-[#9B9C94] font-normal leading-relaxed max-w-sm">
                AI education built around understanding and building — structured programs, small batches, and work you can explain.
              </p>
            </div>

            {/* Right Links Col */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Programs */}
              <div className="space-y-3">
                <b className="font-mono text-xs font-bold text-[#E44B27] tracking-widest uppercase block mb-4">
                  PROGRAMS
                </b>
                <div className="flex flex-col space-y-2.5 text-sm text-[#9B9C94]">
                  <a href="#programs" className="hover:text-white transition-colors">
                    AI Fundamentals
                  </a>
                  <a href="#programs-detail" className="hover:text-white transition-colors">
                    AI Professional
                  </a>
                  <a href="#programs-detail" className="hover:text-white transition-colors">
                    AI Developer Foundations
                  </a>
                  <a href="#programs-detail" className="hover:text-white transition-colors">
                    AI Engineering Program
                  </a>
                </div>
              </div>

              {/* Learning */}
              <div className="space-y-3">
                <b className="font-mono text-xs font-bold text-[#E44B27] tracking-widest uppercase block mb-4">
                  LEARNING
                </b>
                <div className="flex flex-col space-y-2.5 text-sm text-[#9B9C94]">
                  <a href="#learning" className="hover:text-white transition-colors">
                    Learning journey
                  </a>
                  <a href="#learning" className="hover:text-white transition-colors">
                    How you learn
                  </a>
                  <a href="#projects" className="hover:text-white transition-colors">
                    Projects
                  </a>
                  <a href="#outcomes" className="hover:text-white transition-colors">
                    Outcomes
                  </a>
                </div>
              </div>

              {/* School */}
              <div className="space-y-3">
                <b className="font-mono text-xs font-bold text-[#E44B27] tracking-widest uppercase block mb-4">
                  SCHOOL
                </b>
                <div className="flex flex-col space-y-2.5 text-sm text-[#9B9C94]">
                  <a href="#why" className="hover:text-white transition-colors">
                    Why GAPSO
                  </a>
                  <a href="#audience" className="hover:text-white transition-colors">
                    Who it&apos;s for
                  </a>
                  <a href="#community" className="hover:text-white transition-colors">
                    Community
                  </a>
                  <a href={applyHref} className="hover:text-white transition-colors">
                    Apply
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#777873]">
            <small className="text-xs">© 2026 GAPSO School of AI</small>
            <small className="text-xs text-[#E44B27] tracking-widest font-semibold uppercase">
              LEARN BY BUILDING
            </small>
          </div>
        </div>
      </footer>
    </>
  )
}
