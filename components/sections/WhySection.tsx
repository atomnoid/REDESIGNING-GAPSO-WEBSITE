'use client'

import React, { useState } from 'react'

export function WhySection() {
  const [activeDecision, setActiveDecision] = useState<number | null>(0)

  const decisions = [
    {
      title: 'Teach what you build',
      desc: 'Everything in our classroom has already survived contact with a client.',
    },
    {
      title: 'Learn by Building',
      desc: 'Every track is half theory and half hands-on build time.',
    },
    {
      title: 'Live Cohorts',
      desc: 'Taught live in person by the founder, adapting to the room.',
    },
    {
      title: 'Assessed on what you built',
      desc: 'Progression is measured by working artefacts, not multiple-choice recall.',
    },
    {
      title: 'Ends at a named role',
      desc: 'Each track is reverse-engineered from real job descriptions.',
    },
  ]

  return (
    <section id="why" className="py-24 md:py-32 bg-[#F6F4EE] border-b border-[#D8D5CA] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#E44B27]" />
            <span className="section-label text-[#E44B27]">
              WHY GAPSO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121312] leading-[1.05] mb-4">
            A teaching model, not a content library.
          </h2>
          <p className="text-base sm:text-lg text-[#6C6D67] font-normal leading-relaxed">
            Six decisions shape every session — how long a batch runs, how much of it you spend on a keyboard, and what you leave with.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Stat Column */}
          <div className="lg:col-span-5 bg-[#ECE8DD] p-8 sm:p-10 border border-[#BCB8AC]">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#6C6D67] uppercase mb-8">
              <span>THE SPLIT</span>
              <span className="text-[#E44B27]">50% / 50%</span>
            </div>

            {/* Display Numbers */}
            <div className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#121312] leading-none mb-6">
              50<span className="font-sans text-3xl sm:text-4xl text-[#E44B27] font-light">/</span>50
            </div>

            {/* Visual ratio bar */}
            <div className="w-full h-2 bg-[#D8D5CA] flex mb-4">
              <div className="w-1/2 h-full bg-[#E44B27]" />
              <div className="w-1/2 h-full bg-[#121312]" />
            </div>

            <div className="flex justify-between font-mono text-xs font-semibold tracking-wider text-[#121312] mb-6">
              <span className="text-[#E44B27]">THEORY</span>
              <span>PRACTICAL</span>
            </div>

            <p className="text-sm text-[#6C6D67] font-normal leading-relaxed">
              Half the time is spent understanding how something works. The other half is spent making the thing you just understood.
            </p>
          </div>

          {/* Decision List Column */}
          <div className="lg:col-span-7 divide-y divide-[#D8D5CA] border-y border-[#D8D5CA]">
            {decisions.map((d, i) => (
              <div
                key={d.title}
                className="py-6 cursor-pointer group hover:bg-[#ECE8DD]/40 px-3 -mx-3 transition-colors"
                onClick={() => setActiveDecision(i === activeDecision ? null : i)}
              >
                <div className="grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-2 font-mono text-xs font-bold text-[#E44B27]">
                    0{i + 1}
                  </span>
                  <div className="col-span-10">
                    <h3 className="text-lg sm:text-xl font-serif text-[#121312] group-hover:text-[#E44B27] transition-colors mb-1">
                      {d.title}
                    </h3>
                    <p className="text-sm text-[#6C6D67] leading-relaxed font-normal">
                      {d.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
