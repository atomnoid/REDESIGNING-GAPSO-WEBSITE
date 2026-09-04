'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function WhySection() {
  const decisions = [
    { title: 'Small batches only.', desc: 'Every cohort is capped. When there are fewer people, every question gets a real answer.' },
    { title: '50/50 theory and practical.', desc: 'Half the time understanding how something works. The other half making the thing you just understood.' },
    { title: 'Weekend format.', desc: 'Designed for people who are already working. Intensive Saturdays and Sundays, not weekday evenings.' },
    { title: 'Live sessions, no recordings.', desc: 'Every session is taught live. The instructor is in the room and so is the difficulty.' },
    { title: 'Portfolio over certificates.', desc: 'You leave with code you wrote, systems you deployed, and a git history that shows it.' },
    { title: 'First principles, then tools.', desc: 'Understanding what retrieval actually does matters more than knowing which library to call.' },
  ]

  const leftRef = useRef(null)
  const leftInView = useInView(leftRef, { once: true, margin: '-60px' })
  const rightRef = useRef(null)
  const rightInView = useInView(rightRef, { once: true, margin: '-60px' })

  return (
    <section id="why" className="py-24 md:py-32 border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">

          {/* Left — sticky stat panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start" ref={leftRef}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="label mb-5"
            >
              Why GAPSO
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-[clamp(2rem,4.5vw,4rem)] font-extrabold tracking-tight text-[#111210] leading-[1.05] mb-6"
            >
              A teaching model, not a content library.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base text-[#6B6C65] font-normal leading-relaxed mb-10"
            >
              Six decisions shape every session — how long a batch runs, how much of it you spend on a keyboard, and what you leave with.
            </motion.p>

            {/* 50/50 stat display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={leftInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="p-6 sm:p-8 bg-[#111210] rounded-2xl text-white overflow-hidden"
            >
              <p className="font-mono text-[10px] text-[rgba(246,244,238,0.4)] uppercase tracking-widest font-semibold mb-4">
                The Ratio
              </p>
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-extrabold text-[4.5rem] lg:text-[6rem] text-white font-mono leading-none">50</span>
                <span className="text-4xl text-[#E44B27] font-light">/</span>
                <span className="font-extrabold text-[4.5rem] lg:text-[6rem] text-white font-mono leading-none">50</span>
              </div>
              {/* Bar */}
              <div className="h-2 w-full flex mb-3 overflow-hidden rounded-full bg-[#252724]">
                <div className="w-1/2 h-full bg-[#E44B27] rounded-l-full" />
                <div className="w-1/2 h-full bg-[rgba(246,244,238,0.15)] rounded-r-full" />
              </div>
              <div className="flex justify-between font-mono text-[10px] font-bold tracking-wider uppercase">
                <span className="text-[#E44B27]">Theory</span>
                <span className="text-[rgba(246,244,238,0.6)]">Practical</span>
              </div>
            </motion.div>
          </div>

          {/* Right — decision list */}
          <div className="lg:col-span-7 divide-y divide-[#D6D3C8] border-y border-[#D6D3C8]" ref={rightRef}>
            {decisions.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, x: 16 }}
                animate={rightInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="py-6 sm:py-7 flex items-start gap-5 hover:bg-[#ECE8DD]/50 px-4 -mx-4 transition-colors group cursor-default"
              >
                <span className="font-mono text-xs font-bold text-[#E44B27] pt-0.5 shrink-0 w-6">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#111210] tracking-tight mb-1.5 group-hover:text-[#E44B27] transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-sm text-[#6B6C65] leading-relaxed font-normal">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
