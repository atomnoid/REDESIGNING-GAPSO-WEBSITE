'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function TheGapSection() {
  const gaps = [
    { no: '01', title: 'Tutorials teach features, not systems.', desc: 'You can follow every step and still not know how to change the objective.' },
    { no: '02', title: 'Most AI courses skip the engineering part.', desc: 'They stop before retrieval, memory, tool use or anything that survives production.' },
    { no: '03', title: 'The pace of tooling makes curricula obsolete.', desc: "Courses built on last year's API version are already teaching the wrong thing." },
    { no: '04', title: 'Certificates say nothing about capability.', desc: 'A pass mark proves you finished. A project proves you understood.' },
    { no: '05', title: 'Cohorts are too large to be useful.', desc: "In a room of 200 you can't ask a real question and get a real answer." },
    { no: '06', title: 'Practice is treated as a bonus, not the point.', desc: 'When you spend more time reading slides than writing code, you leave with slides.' },
  ]

  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-60px' })

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-36 bg-[#111210] text-[#F6F4EE] border-b border-[#252724] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />
            <span className="label">The Gap</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-[clamp(2.4rem,5.5vw,5rem)] font-extrabold tracking-[-0.03em] text-white leading-[1.02] mb-6"
          >
            Watching tutorials isn&apos;t the same as building.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base sm:text-lg text-[rgba(246,244,238,0.55)] font-normal leading-relaxed"
          >
            AI capability moves faster than most curricula can update. The result is familiar: hours of material consumed, and very little that can be run, changed or explained afterwards.
          </motion.p>
        </div>

        {/* Asymmetrical Matrix Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 md:mb-24">
          {gaps.map((g, i) => (
            <motion.div
              key={g.no}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="p-8 rounded-3xl bg-[#171816] border border-[#252724] hover:border-[#E44B27]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-[#E44B27] px-2.5 py-1 rounded-full bg-[#E44B27]/10 border border-[#E44B27]/20">
                    {g.no}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#252724] group-hover:bg-[#E44B27] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3 tracking-tight group-hover:text-[#E44B27] transition-colors leading-snug">
                  {g.title}
                </h3>
              </div>

              <p className="text-sm text-[rgba(246,244,238,0.55)] leading-relaxed font-normal pt-4 border-t border-[#252724]">
                {g.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Monumental Kinetic Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#171816] via-[#1b1d1a] to-[#171816] border border-[#2e312b] flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] max-w-2xl">
            Understand the system.{' '}
            <span className="text-[#E44B27] italic font-serif font-normal">Then build the system.</span>
          </p>

          <span className="font-mono text-xs text-[rgba(246,244,238,0.4)] tracking-[0.2em] uppercase font-bold px-4 py-2 rounded-full border border-[#2e312b] bg-[#121312] shrink-0 self-start lg:self-center">
            GAPSO Pedagogy
          </span>
        </motion.div>

      </div>
    </section>
  )
}
