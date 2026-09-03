'use client'

import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface Props { applyHref: string }

export function FinalCtaAndFooter({ applyHref }: Props) {
  return (
    <>
      <section className="py-28 md:py-40 bg-[#111210] text-white border-b border-[#252724]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-6xl sm:text-8xl lg:text-9xl font-medium tracking-tight text-white leading-[0.92] mb-8">
            Start at{' '}
            <span className="font-serif italic font-normal text-[#E44B27]">01.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#8B8C84] max-w-xl mb-10">
            AI Fundamentals is free. Begin there, or tell us you&apos;re not sure yet and we&apos;ll work it out together.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href={applyHref} className="btn py-3.5 px-7">
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#programs" className="link-dark">
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <footer id="blog" className="py-16 bg-[#111210] text-[#F6F4EE]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-[#252724]">
            <div className="lg:col-span-4">
              <a href="#top" className="flex items-baseline gap-2 mb-4">
                <span className="font-serif text-2xl text-white">GAPSO</span>
                <span className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-widest">School of AI</span>
              </a>
              <p className="text-sm text-[#8B8C84] max-w-xs leading-relaxed">
                AI education built around understanding and building — structured programs, small batches, and work you can explain.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-[#8B8C84]">
              <div>
                <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-4">Programs</p>
                <div className="flex flex-col gap-2.5">
                  <a href="#programs" className="hover:text-white transition-colors">AI Fundamentals</a>
                  <a href="#programs-detail" className="hover:text-white transition-colors">AI Professional</a>
                  <a href="#programs-detail" className="hover:text-white transition-colors">AI Developer Foundations</a>
                  <a href="#programs-detail" className="hover:text-white transition-colors">AI Engineering Program</a>
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-4">Learning</p>
                <div className="flex flex-col gap-2.5">
                  <a href="#learning" className="hover:text-white transition-colors">Learning Journey</a>
                  <a href="#learning" className="hover:text-white transition-colors">How You Learn</a>
                  <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                  <a href="#outcomes" className="hover:text-white transition-colors">Outcomes</a>
                </div>
              </div>
              <div>
                <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-4">School</p>
                <div className="flex flex-col gap-2.5">
                  <a href="#why" className="hover:text-white transition-colors">Why GAPSO</a>
                  <a href="#audience" className="hover:text-white transition-colors">Who it&apos;s for</a>
                  <a href="#community" className="hover:text-white transition-colors">Community</a>
                  <a href={applyHref} className="hover:text-white transition-colors">Apply</a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex items-center justify-between font-mono text-[10px] text-[#555750] uppercase tracking-widest">
            <span>© 2026 GAPSO School of AI</span>
            <span className="text-[#E44B27] font-bold">Learn by Building</span>
          </div>
        </div>
      </footer>
    </>
  )
}
