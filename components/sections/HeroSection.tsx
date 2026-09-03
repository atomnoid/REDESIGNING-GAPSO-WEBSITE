'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  applyHref: string
}

export function HeroSection({ applyHref }: HeroSectionProps) {
  const learningStages = [
    { no: '01', title: 'Understand', desc: 'How modern AI works, in plain terms — and where it breaks.' },
    { no: '02', title: 'Use', desc: 'Apply AI to real work, deliberately rather than accidentally.' },
    { no: '03', title: 'Build', desc: 'Write code that talks to models, and ship something with it.' },
    { no: '04', title: 'Engineer', desc: 'Design, connect and run AI systems that hold up in production.' },
  ]

  return (
    <section
      id="top"
      className="relative pt-16 md:pt-24 pb-16 border-b border-[#E6E5E1] bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline & Manifesto */}
          <div className="lg:col-span-7">
            {/* Eyebrow label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-[#E44B27]" />
              <span className="section-label text-[#E44B27]">
                FUNDAMENTALS TO PRODUCTION AI
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-medium tracking-tight text-[#0D0D0C] leading-[1.02] mb-6">
              Don’t just learn AI.
              <br />
              <span className="font-serif italic font-normal text-[#E44B27]">
                Learn to build
              </span>{' '}
              with it.
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-[#6B6B69] max-w-xl font-normal leading-relaxed mb-8">
              GAPSO School of AI trains students and professionals to understand,
              build and ship real AI systems — from first principles to production.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <a href={applyHref} className="btn-primary">
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#programs"
                className="link-ghost"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Learning Architecture Card */}
          <div className="lg:col-span-5 bg-[#FAFAF9] border border-[#E6E5E1] p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E6E5E1]">
              <span className="font-mono text-[10px] font-semibold tracking-widest text-[#0D0D0C] uppercase">
                THE LEARNING PATHWAY
              </span>
              <span className="font-mono text-[10px] text-[#E44B27] tracking-widest uppercase">
                4 STAGES
              </span>
            </div>

            <div className="space-y-4 divide-y divide-[#E6E5E1]">
              {learningStages.map((stage, idx) => (
                <div key={stage.no} className={idx === 0 ? '' : 'pt-4'}>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-serif text-lg text-[#0D0D0C]">
                      {stage.title}
                    </span>
                    <span className="font-mono text-[10px] text-[#9E9E9C]">
                      {stage.no}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B6B69] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E6E5E1] flex items-center justify-between font-mono text-[10px] text-[#6B6B69] uppercase tracking-wider">
              <span>BENGALURU, INDIA</span>
              <span className="text-[#0D0D0C] font-semibold">LIVE IN-PERSON &amp; ONLINE</span>
            </div>
          </div>
        </div>

        {/* Hero Meta Bar */}
        <div className="mt-16 pt-6 border-t border-[#E6E5E1] grid grid-cols-1 sm:grid-cols-3 gap-4 text-[#6B6B69] font-mono text-[11px] tracking-wider uppercase">
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
        </div>
      </div>
    </section>
  )
}
