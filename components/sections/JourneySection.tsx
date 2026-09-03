'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export function JourneySection() {
  const [active, setActive] = useState(0)

  const stages = [
    { no: '01', action: 'Understand', level: 'Foundation', track: 'AI Fundamentals (Free)', desc: 'How modern AI works — the concepts, the constraints, where it breaks. No prerequisites. Everyone starts here.' },
    { no: '02', action: 'Use', level: 'Applied', track: 'AI Professional', desc: 'Apply AI to real work — prompting with intent, building workflows, making AI produce reliable output consistently.' },
    { no: '03', action: 'Build', level: 'Technical', track: 'AI Developer Foundations', desc: 'Write code that calls models. Work with APIs, SDKs, and git. Ship something that runs.' },
    { no: '04', action: 'Engineer', level: 'Advanced', track: 'AI Engineering Program', desc: 'Design, connect and run AI systems in production — RAG, agents, memory, multi-model coordination.' },
  ]

  return (
    <section id="learning" className="py-24 md:py-32 border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-3xl mb-16">
          <p className="label mb-4">The Learning Journey</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111210] leading-[1.06] mb-4">
            Four stages. Each one goes a level deeper.
          </h2>
          <p className="text-base sm:text-lg text-[#6B6C65] font-normal leading-relaxed">
            Enter at whichever stage matches where you already are.
          </p>
        </div>

        {/* Stage tabs with modern typography and visual indicator */}
        <div className="border-t border-[#D6D3C8] divide-y divide-[#D6D3C8]">
          {stages.map((s, i) => (
            <button
              key={s.no}
              onClick={() => setActive(i)}
              className={"w-full text-left py-7 px-4 -mx-4 flex items-start gap-6 group transition-all duration-200 " + (active === i ? 'bg-[#ECE8DD]/50' : 'hover:bg-[#ECE8DD]/20')}
            >
              <span className={`font-mono text-xs font-bold pt-1 w-8 shrink-0 transition-colors ${active === i ? 'text-[#E44B27]' : 'text-[#6B6C65]'}`}>
                {s.no}
              </span>
              <div className="flex-1">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${active === i ? 'text-[#111210]' : 'text-[#6B6C65] group-hover:text-[#111210]'}`}>
                    {s.action}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] font-semibold text-[#E44B27] uppercase tracking-wider hidden sm:inline-block">
                      {s.level}
                    </span>
                    <span className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-wider hidden md:inline-block">
                      {s.track}
                    </span>
                  </div>
                </div>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-[#6B6C65] leading-relaxed mt-2.5 max-w-2xl font-normal"
                  >
                    {s.desc}
                  </motion.p>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
