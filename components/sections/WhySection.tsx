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
            <p className="label mb-4">Why GAPSO</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111210] leading-[1.06] mb-6">
              A teaching model, not a content library.
            </h2>
            <p className="text-base text-[#6B6C65] font-normal leading-relaxed mb-8">
              Six decisions shape every session — how long a batch runs, how much of it you spend on a keyboard, and what you leave with.
            </p>

            {/* 50/50 display */}
            <div className="pt-8 border-t border-[#D6D3C8] bg-[#ECE8DD]/40 p-6 border border-[#D6D3C8]">
              <div className="flex items-center justify-between mb-2">
                <p className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-widest font-semibold">THE RATIO</p>
                <span className="font-mono text-[10px] text-[#E44B27] font-bold">50% / 50%</span>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-bold text-6xl lg:text-7xl text-[#111210] font-mono">50</span>
                <span className="text-3xl text-[#E44B27] font-light">/</span>
                <span className="font-bold text-6xl lg:text-7xl text-[#111210] font-mono">50</span>
              </div>
              <div className="h-2 w-full bg-[#D6D3C8] flex mb-3 overflow-hidden">
                <div className="w-1/2 h-full bg-[#E44B27]" />
                <div className="w-1/2 h-full bg-[#111210]" />
              </div>
              <div className="flex justify-between font-mono text-[10px] text-[#111210] font-semibold tracking-wider uppercase">
                <span className="text-[#E44B27]">THEORY</span>
                <span>PRACTICAL</span>
              </div>
            </div>
          </div>

          {/* Right: decision list */}
          <div className="lg:col-span-7 divide-y divide-[#D6D3C8] border-y border-[#D6D3C8]">
            {decisions.map((d, i) => (
              <div key={d.title} className="py-5 flex items-start gap-4 hover:bg-[#ECE8DD]/40 px-3 -mx-3 transition-colors group">
                <span className="font-mono text-xs font-bold text-[#E44B27] pt-1 shrink-0">0{i + 1}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#111210] tracking-tight mb-1 group-hover:text-[#E44B27] transition-colors">
                    {d.title}
                  </h3>
                  <p className="text-sm text-[#6B6C65] leading-relaxed font-normal">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
