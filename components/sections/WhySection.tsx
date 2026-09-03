'use client'

import React, { useState } from 'react'

export function WhySection() {
  const decisions = [
    { title: 'Small batches only.', desc: 'Every cohort is capped. When there are fewer people, every question gets a real answer.' },
    { title: '50/50 theory and practical.', desc: 'Half the time understanding how something works. The other half making the thing you just understood.' },
    { title: 'Weekend format.', desc: 'Designed for people who are already working. Intensive Saturdays and Sundays, not weekday evenings.' },
    { title: 'Live sessions, no recordings.', desc: 'Every session is taught live. The instructor is in the room and so is the difficulty.' },
    { title: 'Portfolio over certificates.', desc: 'You leave with code you wrote, systems you deployed, and a git history that shows it.' },
    { title: 'First principles, then tools.', desc: 'Understanding what retrieval actually does matters more than knowing which library to call.' },
  ]

  return (
    <section id="why" className="py-24 md:py-32 border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

          {/* Left: header + stat */}
          <div className="lg:col-span-5">
            <p className="label mb-6">Why GAPSO</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#111210] leading-[1.05] mb-8">
              A teaching model, not a content library.
            </h2>

            {/* 50/50 display */}
            <div className="pt-8 border-t border-[#D6D3C8]">
              <p className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-widest mb-2">The split</p>
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-serif text-7xl lg:text-8xl text-[#111210]">50</span>
                <span className="font-sans text-3xl text-[#E44B27]">/</span>
                <span className="font-serif text-7xl lg:text-8xl text-[#111210]">50</span>
              </div>
              <div className="h-1 w-full bg-[#D6D3C8] flex mb-3">
                <div className="w-1/2 h-full bg-[#E44B27]" />
                <div className="w-1/2 h-full bg-[#111210]" />
              </div>
              <div className="flex justify-between font-mono text-[10px] text-[#6B6C65] tracking-widest uppercase">
                <span className="text-[#E44B27]">Theory</span>
                <span>Practical</span>
              </div>
            </div>
          </div>

          {/* Right: decision list */}
          <div className="lg:col-span-7 divide-y divide-[#D6D3C8] border-y border-[#D6D3C8]">
            {decisions.map((d, i) => (
              <div key={d.title} className="py-5 flex items-start gap-4">
                <span className="font-mono text-xs font-bold text-[#E44B27] pt-0.5 shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="text-base sm:text-lg text-[#111210] font-medium mb-0.5">{d.title}</h3>
                  <p className="text-sm text-[#6B6C65] leading-relaxed">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
