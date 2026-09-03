'use client'

import React from 'react'

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
    <section className="py-24 md:py-32 bg-[#121312] text-[#F6F4EE] border-b border-[#2B2D2B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#E44B27]" />
            <span className="section-label text-[#E44B27]">
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

        {/* 6 Gap Points: 2-Column Editorial List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 border-t border-[#2B2D2B] pt-12 mb-20">
          {gapItems.map((item) => (
            <div key={item.no} className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold text-[#E44B27]">
                  {item.no}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-[#9B9C94] font-normal leading-relaxed pl-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Callout */}
        <div className="pt-8 border-t border-[#2B2D2B] flex flex-col md:flex-row md:items-baseline justify-between gap-6">
          <strong className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight font-sans">
            Understand the system.
            <br />
            <span className="font-serif italic font-normal text-[#E44B27]">
              Then build the system.
            </span>
          </strong>

          <span className="font-mono text-xs tracking-widest text-[#9B9C94] uppercase">
            GAPSO PEDAGOGY / 2026
          </span>
        </div>
      </div>
    </section>
  )
}
