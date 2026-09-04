'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function CommunitySection() {
  const happenings = [
    'Peer code reviews',
    'Project feedback',
    'AI news and tool releases',
    'Guest sessions and walkthroughs',
    'Job and freelance opportunities',
    'Debug sessions',
  ]

  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="community" className="py-24 md:py-32 bg-[#111210] text-[#F6F4EE] border-b border-[#252724]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-3xl mb-16" ref={headRef}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="label mb-5"
          >
            Community
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight text-white leading-[1.05] mb-4"
          >
            Learning shouldn&apos;t stop when the session ends.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base sm:text-lg text-[rgba(246,244,238,0.55)] mb-4 font-normal leading-relaxed"
          >
            Most of what people learn about building with AI happens between sessions — in a thread, in a review, in someone else&apos;s half-working prototype.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="text-xs text-[rgba(246,244,238,0.3)] font-mono border-l border-[#252724] pl-4 mt-6"
          >
            The community is built alongside the first batches. This is how it&apos;s designed to work — not a claim about how large it already is.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Platforms */}
          <div>
            <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-6">
              Where it happens
            </p>
            <div className="divide-y divide-[#252724] border-y border-[#252724]">
              {[
                { name: 'Discord', status: 'Always on', desc: "Where the day-to-day happens — questions, code, and the answer that arrives at 11pm." },
                { name: 'WhatsApp', status: 'Batch', desc: 'Coordination and short updates for your cohort.' },
              ].map((platform, i) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="py-7 group hover:bg-[#181A18] px-3 -mx-3 transition-colors cursor-default"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-extrabold text-white tracking-tight group-hover:text-[#E44B27] transition-colors">
                      {platform.name}
                    </h3>
                    <span className="font-mono text-[10px] text-[#E44B27] uppercase tracking-widest font-bold px-2.5 py-1 border border-[#E44B27]/30 rounded-full">
                      {platform.status}
                    </span>
                  </div>
                  <p className="text-sm text-[rgba(246,244,238,0.5)] leading-relaxed font-normal">
                    {platform.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Happenings */}
          <div>
            <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-6">
              What happens
            </p>
            <div className="divide-y divide-[#252724] border-y border-[#252724]">
              {happenings.map((h, i) => (
                <motion.div
                  key={h}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="py-4 flex items-center justify-between group hover:bg-[#181A18] px-3 -mx-3 transition-colors cursor-default"
                >
                  <p className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#E44B27] transition-colors">
                    {h}
                  </p>
                  <span className="font-mono text-[10px] text-[rgba(246,244,238,0.25)] tracking-widest uppercase group-hover:text-[#E44B27] transition-colors">
                    Network
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
