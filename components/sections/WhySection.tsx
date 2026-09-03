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
    <section id="why" className="py-24 md:py-32 bg-white border-b border-[#E6E5E1] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#E44B27]" />
            <span className="section-label text-[#E44B27]">
              WHY GAPSO
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0D0D0C] leading-[1.05] mb-4">
            A teaching model, not a content library.
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B69] font-normal leading-relaxed">
            Six decisions shape every session — how long a batch runs, how much of it you spend on a keyboard, and what you leave with.
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Stat Column */}
          <div className="lg:col-span-5 bg-[#FAFAF9] p-8 sm:p-10 border border-[#E6E5E1]">
            <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#6B6B69] uppercase mb-8">
              <span>THE SPLIT</span>
              <span className="text-[#E44B27]">50% / 50%</span>
            </div>

            {/* Display Numbers */}
            <div className="font-serif text-6xl sm:text-7xl lg:text-8xl text-[#0D0D0C] leading-none mb-6">
              50<span className="font-sans text-3xl sm:text-4xl text-[#9E9E9C] font-light">/</span>50
            </div>

            {/* Visual ratio bar */}
            <div className="w-full h-2 bg-[#E6E5E1] flex mb-4">
              <div className="w-1/2 h-full bg-[#E44B27]" />
              <div className="w-1/2 h-full bg-[#0D0D0C]" />
            </div>

            <div className="flex justify-between font-mono text-xs font-semibold tracking-wider text-[#0D0D0C] mb-6">
              <span className="text-[#E44B27]">THEORY</span>
              <span>PRACTICAL</span>
            </div>

            <p className="text-sm text-[#6B6B69] font-normal leading-relaxed">
              Half the time is spent understanding how something works. The other half is spent making the thing you just understood.
            </p>
          </div>

          {/* Decision List Column */}
          <div className="lg:col-span-7 divide-y divide-[#E6E5E1] border-y border-[#E6E5E1]">
            {decisions.map((d, i) => (
              <div
                key={d.title}
                className="py-6 cursor-pointer group"
                onClick={() => setActiveDecision(i === activeDecision ? null : i)}
              >
                <div className="grid grid-cols-12 gap-4 items-baseline">
                  <span className="col-span-2 font-mono text-xs font-bold text-[#E44B27]">
                    0{i + 1}
                  </span>
                  <div className="col-span-10">
                    <h3 className="text-lg sm:text-xl font-serif text-[#0D0D0C] group-hover:text-[#E44B27] transition-colors mb-1">
                      {d.title}
                    </h3>
                    <p className="text-sm text-[#6B6B69] leading-relaxed font-normal">
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
