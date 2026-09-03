'use client'

import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  applyHref: string
}

export function HeroSection({ applyHref }: HeroSectionProps) {
  return (
    <section id="top" className="pt-20 md:pt-28 pb-20 md:pb-28 border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Eyebrow */}
        <p className="label mb-8">Fundamentals to Production AI</p>

        {/* Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tight text-[#111210] leading-[1.0] mb-8 max-w-4xl">
          Don't just learn AI.{' '}
          <span className="font-serif italic font-normal text-[#E44B27]">
            Learn to build
          </span>{' '}
          with it.
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-[#6B6C65] max-w-2xl leading-relaxed mb-12">
          GAPSO School of AI trains students and professionals to understand,
          build and ship real AI systems â€” from first principles to production.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-5">
          <a href={applyHref} className="btn">
            <span>Apply Now</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a href="#programs" className="link">
            <span>Explore Programs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Meta strip */}
        <div className="mt-20 pt-8 border-t border-[#D6D3C8] flex flex-wrap gap-x-12 gap-y-3 text-[#6B6C65] font-mono text-[11px] tracking-widest uppercase">
          <span>50% Theory · 50% Practical</span>
          <span>Weekend Batches</span>
          <span>Project-Driven</span>
          <span>Bengaluru, India · Live In-Person &amp; Online</span>
        </div>
      </div>
    </section>
  )
}
