'use client'

import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface FinalCtaAndFooterProps {
  applyHref: string
}

export function FinalCtaAndFooter({ applyHref }: FinalCtaAndFooterProps) {
  return (
    <>
      {/* Final CTA Section */}
      <section className="py-28 md:py-36 bg-[#0D0D0C] text-white relative border-b border-[#242422]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl sm:text-7xl lg:text-[6.5rem] font-medium tracking-tight text-white leading-[0.94] mb-6">
              Start at{' '}
              <span className="font-serif italic font-normal text-[#E44B27]">
                01.
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-[#9E9E9C] font-normal leading-relaxed max-w-xl mb-10">
              AI Fundamentals is free. Begin there, or tell us you’re not sure yet and we’ll work it out together.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <a
                href={applyHref}
                className="btn-primary py-3.5 px-7"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#programs"
                className="link-ghost-dark py-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="blog" className="py-20 bg-[#0D0D0C] text-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#242422]">
            {/* Left Brand Col */}
            <div className="lg:col-span-4 space-y-4">
              <a
                href="#top"
                className="inline-flex items-baseline gap-2 font-mono text-sm tracking-wider"
              >
                <b className="font-sans font-bold text-xl text-white">GAPSO</b>
                <span className="text-[10px] tracking-widest text-[#9E9E9C] uppercase font-semibold">
                  SCHOOL OF AI
                </span>
              </a>

              <p className="text-sm text-[#9E9E9C] font-normal leading-relaxed max-w-sm">
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
                <div className="flex flex-col space-y-2.5 text-sm text-[#9E9E9C]">
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
                <div className="flex flex-col space-y-2.5 text-sm text-[#9E9E9C]">
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
                <div className="flex flex-col space-y-2.5 text-sm text-[#9E9E9C]">
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
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#6B6B69]">
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
