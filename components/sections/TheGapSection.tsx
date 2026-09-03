'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function TheGapSection() {
  const gapItems = [
    {
      no: '01',
      title: 'Theory that stops at the slide',
      desc: 'Concepts get explained, then never implemented.',
    },
    {
      no: '02',
      title: 'Tool tours instead of foundations',
      desc: 'You learn a product. The principles underneath stay invisible.',
    },
    {
      no: '03',
      title: 'Curriculum that ages quietly',
      desc: 'Written once, taught for years, while the field moves weekly.',
    },
    {
      no: '04',
      title: 'Projects that are copied, not reasoned',
      desc: 'Following along produces a result, not an understanding.',
    },
    {
      no: '05',
      title: 'Feedback that never arrives',
      desc: 'Nobody reads the code. Nobody asks why you built it that way.',
    },
    {
      no: '06',
      title: 'No visible progression',
      desc: 'It stays unclear what comes next, or what it’s building toward.',
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-[#121312] text-[#F6F4EE] border-b border-[#2B2D2B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Head */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#E44B27]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#E44B27] uppercase">
              THE GAP
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-4">
            Watching tutorials isn’t the same as building.
          </h2>
          <p className="text-base sm:text-lg text-[#9B9C94] font-normal leading-relaxed">
            AI capability moves faster than most curricula can update. The result is familiar: hours of material consumed, and very little that can be run, changed or explained afterwards.
          </p>
        </div>

        {/* 6-grid architectural breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#2B2D2B] mb-20">
          {gapItems.map((item, idx) => (
            <motion.div
              key={item.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 border-b border-r border-[#2B2D2B] bg-[#151715] hover:bg-[#1C1F1C] transition-colors duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold text-[#E44B27]">
                  {item.no}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3A3D3A] group-hover:bg-[#E44B27] transition-colors" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-white mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-[#9B9C94] font-normal leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-[#2B2D2B] flex flex-col md:flex-row md:items-baseline justify-between gap-6"
        >
          <strong className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight font-sans">
            Understand the system.
            <br />
            <em className="font-serif italic font-normal text-[#E44B27]">
              Then build the system.
            </em>
          </strong>

          <span className="font-mono text-xs tracking-widest text-[#9B9C94] uppercase">
            GAPSO PEDAGOGY / 2026
          </span>
        </motion.div>
      </div>
    </section>
  )
}
