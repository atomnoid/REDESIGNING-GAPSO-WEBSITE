'use client'

import React from 'react'

export function HowYouLearnSection() {
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
    <section className="py-24 md:py-32 bg-[#111210] text-[#F6F4EE] border-b border-[#252724]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <p className="label mb-6">How You Learn</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-4 max-w-3xl">
          Every concept ends in something you can build.
        </h2>
        <p className="text-base sm:text-lg text-[#8B8C84] mb-20 max-w-2xl">
          Sessions don&apos;t finish with a summary slide. They finish with something running on your machine that didn&apos;t exist that morning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-px border-t border-[#252724] mb-20">
          {steps.map((s) => (
            <div key={s.no} className="pt-8 pr-6">
              <span className="font-mono text-xs font-bold text-[#E44B27] block mb-3">{s.no}</span>
              <h3 className="text-xl font-serif text-white mb-2">{s.title}</h3>
              <p className="text-xs text-[#8B8C84] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-[#252724] pt-12">
          <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-8">What a Weekend Looks Like</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-12">
            {weekend.map((w, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="w-1 h-1 bg-[#E44B27] mt-2 shrink-0 rounded-full" />
                <p className="text-sm text-[#8B8C84] leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
