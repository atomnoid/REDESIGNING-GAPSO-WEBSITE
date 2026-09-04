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

  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })
  const gridRef = useRef(null)
  const gridInView = useInView(gridRef, { once: true, margin: '-60px' })

  return (
    <section className="py-24 md:py-32 bg-[#111210] text-[#F6F4EE] border-b border-[#252724] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-3xl mb-16" ref={headRef}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="label mb-5"
          >
            The Gap
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight text-white leading-[1.05] mb-6"
          >
            Watching tutorials isn&apos;t the same as building.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base sm:text-lg text-[rgba(246,244,238,0.55)] font-normal leading-relaxed"
          >
            AI capability moves faster than most curricula can update. The result is familiar: hours of material consumed, and very little that can be run, changed or explained afterwards.
          </motion.p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-[#252724] mb-20">
          {gaps.map((g, i) => (
            <motion.div
              key={g.no}
              initial={{ opacity: 0, y: 16 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group p-8 border-b border-[#252724] hover:bg-[#181A18] transition-colors cursor-default ${
                i % 2 === 0 ? 'md:border-r md:border-[#252724]' : ''
              }`}
            >
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-mono text-xs font-bold text-[#E44B27] shrink-0">{g.no}</span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#E44B27] transition-colors leading-tight">
                  {g.title}
                </h3>
              </div>
              <p className="text-sm text-[rgba(246,244,238,0.5)] leading-relaxed pl-7 font-normal">
                {g.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="pt-10 border-t border-[#252724] flex flex-col sm:flex-row sm:items-baseline justify-between gap-6"
        >
          <p className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Understand the system.{' '}
            <span className="text-[#E44B27]">Then build the system.</span>
          </p>
          <span className="font-mono text-xs text-[rgba(246,244,238,0.3)] tracking-widest uppercase shrink-0">
            GAPSO Pedagogy
          </span>
        </motion.div>
      </div>
    </section>
  )
}
