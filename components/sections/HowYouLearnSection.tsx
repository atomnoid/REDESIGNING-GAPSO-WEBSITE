'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function HowYouLearnSection() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px' })

  const steps = [
    { no: '01', title: 'Concept', desc: 'The trainer explains how something works — clearly, with the edge cases named.' },
    { no: '02', title: 'Demonstration', desc: 'It gets built live in front of you, not shown via slides.' },
    { no: '03', title: 'Practice', desc: 'You build the same thing from scratch, with guidance available.' },
    { no: '04', title: 'Extension', desc: 'You change the objective. Now you understand, not just remember.' },
    { no: '05', title: 'Review', desc: 'Code reviewed and corrected. You leave with working output.' },
  ]

  const weekend = [
    'Session begins with a live build — no pre-recorded content',
    'Every concept is paired with a keyboard exercise',
    'Questions answered in real time by the person who shipped the system',
    'Code review at the end of every session',
    'You leave with something running, not just slides to read later',
    'Same format every weekend — the discipline is the design',
  ]

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-36 bg-[#111210] text-[#F6F4EE] border-b border-[#252724] relative overflow-hidden"
    >
      {/* Background radial glow */}
      <div 
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #E44B27 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252724] bg-[#181A18] text-[#E44B27] font-mono text-[11px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />
            How You Learn
          </div>

          <h2 className="text-[clamp(2.2rem,5.5vw,4.8rem)] font-medium tracking-tight text-white leading-[1.05] mb-6 max-w-4xl">
            Every concept ends in something you can build.
          </h2>

          <p className="text-base sm:text-lg text-[#8B8C84] max-w-2xl font-normal leading-relaxed">
            Sessions don&apos;t finish with a summary slide. They finish with something running on your machine that didn&apos;t exist that morning.
          </p>
        </motion.div>

        {/* 5-Step Learning Framework Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20 md:mb-28">
          {steps.map((s, idx) => (
            <motion.div
              key={s.no}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-2xl bg-[#181A18] border border-[#252724] hover:border-[#E44B27]/40 transition-colors duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold text-[#E44B27] px-2.5 py-1 rounded-full bg-[#E44B27]/10 border border-[#E44B27]/20">
                    {s.no}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#252724] group-hover:bg-[#E44B27] transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#E44B27] transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8B8C84] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* What a Weekend Looks Like */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 md:p-12 rounded-3xl bg-[#181A18]/60 border border-[#252724] backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#E44B27] animate-pulse" />
            <p className="font-mono text-[11px] font-bold text-[#E44B27] uppercase tracking-widest">
              What a Weekend Looks Like
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {weekend.map((w, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                className="flex items-start gap-4 group"
              >
                <span className="w-5 h-5 rounded-full bg-[#252724] group-hover:bg-[#E44B27]/20 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />
                </span>
                <p className="text-sm text-[#8B8C84] group-hover:text-[#C8C5BA] transition-colors leading-relaxed">
                  {w}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
