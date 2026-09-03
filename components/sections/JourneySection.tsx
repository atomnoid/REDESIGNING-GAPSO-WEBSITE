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
    <section id="learning" className="py-24 md:py-32 bg-white border-b border-[#E6E5E1] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#E44B27]" />
            <span className="section-label text-[#E44B27]">
              THE LEARNING JOURNEY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0D0D0C] leading-[1.05] mb-4">
            Four stages. Each one goes a level deeper.
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B69] font-normal leading-relaxed">
            Enter at whichever stage matches where you already are. Nothing later assumes you skipped the thinking earlier.
          </p>
        </div>

        {/* 4 Stage Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E6E5E1] divide-y sm:divide-y-0 sm:divide-x divide-[#E6E5E1]">
          {journey.map((item, idx) => {
            const isSelected = activeStage === idx

            return (
              <button
                key={item.no}
                onClick={() => setActiveStage(idx)}
                className={`p-8 text-left relative transition-colors flex flex-col justify-between min-h-[260px] ${
                  isSelected ? 'bg-[#FAFAF9]' : 'bg-white hover:bg-[#FAFAF9]/60'
                }`}
              >
                {/* Active Indicator Bar */}
                {isSelected && (
                  <motion.div
                    layoutId="activeStageIndicator"
                    className="absolute top-0 left-0 right-0 h-[2px] bg-[#E44B27]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-[#E44B27]">
                      {item.no}
                    </span>
                    <span className="font-mono text-[10px] text-[#9E9E9C] uppercase tracking-wider">
                      {item.level}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-[#0D0D0C] mb-1">
                    {item.action}
                  </h3>

                  <div className="font-mono text-[10px] font-semibold tracking-wider text-[#6B6B69] uppercase mb-4">
                    {item.track}
                  </div>

                  <p className="text-sm text-[#6B6B69] font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E6E5E1] mt-6 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#9E9E9C] uppercase tracking-widest">
                    STAGE {item.no}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 ${
                      isSelected ? 'text-[#E44B27]' : 'text-[#C8C7C2]'
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
