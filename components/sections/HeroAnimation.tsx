'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function HeroAnimation() {
  const [activeStage, setActiveStage] = useState(0)

  // STRICTLY VERBATIM FROM WEBSITE
  const stages = [
    {
      no: '01',
      action: 'Understand',
      track: 'AI FUNDAMENTALS',
      desc: 'How modern AI works, in plain terms — and where it breaks.',
    },
    {
      no: '02',
      action: 'Use',
      track: 'AI PROFESSIONAL',
      desc: 'Apply AI to real work, deliberately rather than accidentally.',
    },
    {
      no: '03',
      action: 'Build',
      track: 'AI DEVELOPER FOUNDATIONS',
      desc: 'Write code that talks to models, and ship something with it.',
    },
    {
      no: '04',
      action: 'Engineer',
      track: 'AI ENGINEERING PROGRAM',
      desc: 'Design, connect and run AI systems that hold up in production.',
    },
  ]

  // Faster cycling timer (0.25x faster: 3000ms instead of 4000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [stages.length])

  return (
    <div className="w-full max-w-lg mx-auto lg:max-w-none relative select-none">
      {/* Top Architectural Drafting Tag */}
      <div className="flex items-center justify-between mb-2 text-xs font-mono text-[#6C6D67]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E44B27]" />
          <span className="text-[10px] tracking-widest uppercase font-semibold text-[#121312]">
            THE LEARNING JOURNEY
          </span>
        </div>
        <span className="text-[10px] text-[#E44B27] tracking-widest uppercase font-medium">
          STAGE 0{activeStage + 1} / 04
        </span>
      </div>

      {/* Main Architectural Card - Always Light, Warm Paper Theme (No Black Blocks) */}
      <div className="relative bg-[#ECE8DD] border border-[#BCB8AC] shadow-[6px_6px_0px_#121312] p-5 sm:p-7 overflow-hidden">
        {/* Subtle blueprint grid background */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-40 pointer-events-none" />

        {/* Corner registration crosshairs */}
        <span className="absolute top-2 left-2.5 text-[#9B9C94] font-mono text-[9px] pointer-events-none">+</span>
        <span className="absolute top-2 right-2.5 text-[#9B9C94] font-mono text-[9px] pointer-events-none">+</span>
        <span className="absolute bottom-2 left-2.5 text-[#9B9C94] font-mono text-[9px] pointer-events-none">+</span>
        <span className="absolute bottom-2 right-2.5 text-[#9B9C94] font-mono text-[9px] pointer-events-none">+</span>

        {/* Card Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#D8D5CA] pb-3 mb-4">
          <span className="font-mono text-[9px] font-semibold text-[#E44B27] tracking-widest uppercase">
            FOUR STAGES · FIRST PRINCIPLES TO PRODUCTION
          </span>
          <span className="font-mono text-[9px] text-[#6C6D67] uppercase">
            ONE FOUNDATION
          </span>
        </div>

        {/* Vertical Stage Stack (Ample breathing room, zero truncation of words) */}
        <div className="relative z-10 space-y-2 mb-5">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx

            return (
              <div
                key={stage.no}
                onClick={() => setActiveStage(idx)}
                className={`p-3 sm:p-3.5 border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-white border-[#E44B27] border-l-4 border-l-[#E44B27] shadow-xs'
                    : 'bg-white/50 border-[#D8D5CA] hover:bg-white/80 hover:border-[#BCB8AC]'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`font-mono text-[10px] font-bold px-1.5 py-0.5 ${
                        isActive
                          ? 'bg-[#E44B27] text-white'
                          : 'bg-[#D8D5CA] text-[#121312]'
                      }`}
                    >
                      {stage.no}
                    </span>

                    {/* Stage Action name fully visible, never truncated */}
                    <span className="font-serif text-base sm:text-lg text-[#121312] tracking-tight">
                      {stage.action}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] text-[#6C6D67] tracking-wider uppercase whitespace-nowrap">
                    {stage.track}
                  </span>
                </div>

                {/* Animated expand for active description with exact website copy */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.19, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-xs sm:text-[13px] text-[#6C6D67] leading-relaxed pt-2.5 mt-2 border-t border-[#E5E2D8] font-normal pl-7">
                        {stage.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Kinetic 50 / 50 Split Balance Footer (Light & warm, no black background) */}
        <div className="relative z-10 pt-3.5 border-t border-[#D8D5CA]">
          <div className="flex items-center justify-between font-mono text-[10px] text-[#121312] mb-1.5 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#121312]" />
              <span>50% THEORY</span>
            </span>

            <span className="text-[#E44B27] font-semibold tracking-wider uppercase text-[9px]">
              PROJECT-DRIVEN
            </span>

            <span className="flex items-center gap-1.5">
              <span>50% PRACTICAL</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />
            </span>
          </div>

          {/* Calm Dual-Tone Ratio Line */}
          <div className="relative w-full h-1.5 bg-[#D8D5CA] overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#121312]" />
            <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#E44B27]" />
            <motion.div
              animate={{ x: ['-25%', '25%', '-25%'] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 bottom-0 w-4 bg-white shadow-xs left-1/2 -translate-x-1/2"
            />
          </div>
        </div>
      </div>

      {/* Under-Card Metadata Caption (Verbatim from website) */}
      <div className="mt-3 flex items-start justify-between text-xs font-mono text-[#6C6D67]">
        <span className="text-[10px] tracking-widest uppercase leading-relaxed">
          01 / THE BUILDER
          <br />
          GAPSO AI, BENGALURU
        </span>
        <span className="text-[10px] text-[#E44B27] font-medium tracking-wider uppercase">
          WEEKEND BATCHES
        </span>
      </div>
    </div>
  )
}
