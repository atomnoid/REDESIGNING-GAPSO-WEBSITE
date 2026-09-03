'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function JourneySection() {
  const [activeStage, setActiveStage] = useState(0)

  const journey = [
    {
      no: '01',
      action: 'Understand',
      track: 'AI FUNDAMENTALS',
      desc: 'How modern AI works, in plain terms — and where it breaks.',
      level: 'Stage 1 of 4',
    },
    {
      no: '02',
      action: 'Use',
      track: 'AI PROFESSIONAL',
      desc: 'Apply AI to real work, deliberately rather than accidentally.',
      level: 'Stage 2 of 4',
    },
    {
      no: '03',
      action: 'Build',
      track: 'AI DEVELOPER FOUNDATIONS',
      desc: 'Write code that talks to models, and ship something with it.',
      level: 'Stage 3 of 4',
    },
    {
      no: '04',
      action: 'Engineer',
      track: 'AI ENGINEERING PROGRAM',
      desc: 'Design, connect and run AI systems that hold up in production.',
      level: 'Stage 4 of 4',
    },
  ]

  return (
    <section id="learning" className="py-24 md:py-32 bg-[#F6F4EE] border-b border-[#D8D5CA] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#E44B27]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#E44B27] uppercase">
              THE LEARNING JOURNEY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121312] leading-[1.05] mb-4">
            Four stages. Each one goes a level deeper.
          </h2>
          <p className="text-base sm:text-lg text-[#6C6D67] font-normal leading-relaxed">
            Enter at whichever stage matches where you already are. Nothing later assumes you skipped the thinking earlier.
          </p>
        </div>

        {/* 4 Stage Interactive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D8D5CA] bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#D8D5CA]">
          {journey.map((item, idx) => {
            const isSelected = activeStage === idx

            return (
              <button
                key={item.no}
                onClick={() => setActiveStage(idx)}
                className={`p-8 text-left relative transition-all duration-300 flex flex-col justify-between min-h-[280px] group ${
                  isSelected ? 'bg-[#ECE8DD]/60' : 'bg-white hover:bg-[#FAF9F5]'
                }`}
              >
                {/* Active Top Bar Indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="activeStageIndicator"
                    className="absolute top-0 left-0 right-0 h-1 bg-[#E44B27]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-bold text-[#E44B27]">
                      {item.no}
                    </span>
                    <span className="font-mono text-[10px] text-[#9B9C94] uppercase tracking-wider">
                      {item.level}
                    </span>
                  </div>

                  <h3 className="text-3xl font-serif text-[#121312] mb-2 group-hover:text-[#E44B27] transition-colors">
                    {item.action}
                  </h3>

                  <i className="font-mono text-[11px] font-semibold tracking-wider text-[#E44B27] uppercase block not-italic mb-4">
                    {item.track}
                  </i>

                  <p className="text-sm text-[#6C6D67] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E5E2D8] mt-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#9B9C94] uppercase tracking-widest">
                    STAGE {item.no}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#E44B27] translate-x-1' : 'text-[#9B9C94]'
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
