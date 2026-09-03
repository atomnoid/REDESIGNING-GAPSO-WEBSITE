'use client'

import React from 'react'

export function TheGapSection() {
  const gaps = [
    { no: '01', title: 'Tutorials teach features, not systems.', desc: 'You can follow every step and still not know how to change the objective.' },
    { no: '02', title: 'Most AI courses skip the engineering part.', desc: 'They stop before retrieval, memory, tool use or anything that survives production.' },
    { no: '03', title: 'The pace of tooling makes curricula obsolete.', desc: 'Courses built on last year\'s API version are already teaching the wrong thing.' },
    { no: '04', title: 'Certificates say nothing about capability.', desc: 'A pass mark proves you finished. A project proves you understood.' },
    { no: '05', title: 'Cohorts are too large to be useful.', desc: 'In a room of 200 you can\'t ask a real question and get a real answer.' },
    { no: '06', title: 'Practice is treated as a bonus, not the point.', desc: 'When you spend more time reading slides than writing code, you leave with slides.' },
  ]

  return (
    <section className="py-24 md:py-32 bg-[#111210] text-[#F6F4EE] border-b border-[#252724]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <p className="label mb-6">The Gap</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-6 max-w-3xl">
          Watching tutorials isn&apos;t the same as building.
        </h2>
        <p className="text-base sm:text-lg text-[#8B8C84] mb-20 max-w-2xl">
          AI capability moves faster than most curricula can update. The result is familiar: hours of material consumed, and very little that can be run, changed or explained afterwards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 border-t border-[#252724] pt-12 mb-20">
          {gaps.map((g) => (
            <div key={g.no}>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-mono text-xs font-bold text-[#E44B27]">{g.no}</span>
                <h3 className="text-lg font-serif text-white">{g.title}</h3>
              </div>
              <p className="text-sm text-[#8B8C84] leading-relaxed pl-7">{g.desc}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-[#252724]">
          <p className="text-3xl sm:text-5xl font-normal text-white leading-tight">
            Understand the system.{' '}
            <span className="font-serif italic text-[#E44B27]">Then build the system.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
