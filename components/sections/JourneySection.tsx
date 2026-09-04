'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export function JourneySection() {
  const [active, setActive] = useState(0)

  const stages = [
    { no: '01', action: 'Understand', level: 'Foundation', track: 'AI Fundamentals (Free)', desc: 'How modern AI works — the concepts, the constraints, where it breaks. No prerequisites. Everyone starts here.' },
    { no: '02', action: 'Use', level: 'Applied', track: 'AI Professional', desc: 'Apply AI to real work — prompting with intent, building workflows, making AI produce reliable output consistently.' },
    { no: '03', action: 'Build', level: 'Technical', track: 'AI Developer Foundations', desc: 'Write code that calls models. Work with APIs, SDKs, and git. Ship something that runs.' },
    { no: '04', action: 'Engineer', level: 'Advanced', track: 'AI Engineering Program', desc: 'Design, connect and run AI systems in production — RAG, agents, memory, multi-model coordination.' },
  ]

  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="learning" className="py-24 md:py-32 border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-3xl mb-16" ref={headRef}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="label mb-5"
          >
            The Learning Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight text-[#111210] leading-[1.05] mb-4"
          >
            Four stages. Each one goes a level deeper.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base sm:text-lg text-[#6B6C65] font-normal leading-relaxed"
          >
            Enter at whichever stage matches where you already are.
          </motion.p>
        </div>

        {/* Interactive stage accordion */}
        <div className="border-t border-[#D6D3C8] divide-y divide-[#D6D3C8]">
          {stages.map((s, i) => (
            <button
              key={s.no}
              onClick={() => setActive(i)}
              className={`w-full text-left py-8 px-4 -mx-4 flex items-start gap-6 group transition-all duration-300 ${
                active === i ? 'bg-[#ECE8DD]/60' : 'hover:bg-[#ECE8DD]/25'
              }`}
            >
              {/* Number */}
              <motion.span
                animate={{ scale: active === i ? 1.1 : 1 }}
                transition={{ duration: 0.2 }}
                className={`font-mono text-sm font-bold pt-1 w-10 shrink-0 transition-colors ${
                  active === i ? 'text-[#E44B27]' : 'text-[#6B6C65]'
                }`}
              >
                {s.no}
              </motion.span>

              <div className="flex-1">
                <div className="flex items-baseline justify-between gap-4 mb-0.5">
                  <h3 className={`text-2xl sm:text-4xl font-extrabold tracking-tight transition-colors leading-tight ${
                    active === i ? 'text-[#111210]' : 'text-[#6B6C65] group-hover:text-[#111210]'
                  }`}>
                    {s.action}
                  </h3>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`font-mono text-[10px] font-bold uppercase tracking-widest rounded-full px-3 py-1 transition-all hidden sm:inline-block ${
                      active === i
                        ? 'bg-[#E44B27] text-white'
                        : 'bg-[#ECE8DD] text-[#6B6C65]'
                    }`}>
                      {s.level}
                    </span>
                    <span className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-wider hidden md:inline-block">
                      {s.track}
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {active === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-sm sm:text-base text-[#6B6C65] leading-relaxed max-w-2xl font-normal overflow-hidden"
                    >
                      {s.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
