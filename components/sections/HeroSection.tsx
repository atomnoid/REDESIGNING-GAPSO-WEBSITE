'use client'

import React from 'react'
import { ArrowUpRight, ArrowRight, Sparkles } from 'lucide-react'
import { HeroAnimation } from './HeroAnimation'

interface HeroSectionProps {
  applyHref: string
}

export function HeroSection({ applyHref }: HeroSectionProps) {
  return (
    <section id="top" className="relative pt-16 md:pt-24 pb-20 md:pb-28 border-b border-[#D6D3C8] subtle-mesh overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold, simple, modern typography */}
          <div className="lg:col-span-7">
            {/* Creative Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ECE8DD] border border-[#D6D3C8] text-[#111210] rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-[#E44B27] animate-pulse" />
              <span className="font-mono text-[10px] font-semibold tracking-wider uppercase">
                Fundamentals to Production AI
              </span>
            </div>

            {/* Headline with clean modern sans heading font */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111210] leading-[1.04] mb-6">
              Don&apos;t just learn AI.{' '}
              <span className="text-[#E44B27] block sm:inline">
                Learn to build
              </span>{' '}
              with it.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#6B6C65] max-w-xl leading-relaxed mb-10 font-normal">
              GAPSO School of AI trains students and professionals to understand,
              build and ship real AI systems — from first principles to production.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a href={applyHref} className="btn">
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#programs" className="link">
                <span>Explore Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Dynamic, visually engaging animated pathway card */}
          <div className="lg:col-span-5">
            <HeroAnimation />
          </div>
        </div>

        {/* Human Creative Meta Strip */}
        <div className="mt-16 pt-8 border-t border-[#D6D3C8] grid grid-cols-2 md:grid-cols-4 gap-6 text-[#6B6C65] font-mono text-[11px] tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#E44B27] rounded-full" />
            <span>50% Theory / 50% Practical</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#111210] rounded-full" />
            <span>Weekend Batches</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#E44B27] rounded-full" />
            <span>Project-Driven</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#111210] rounded-full" />
            <span>Bengaluru · Live &amp; Online</span>
          </div>
        </div>
      </div>
    </section>
  )
}
