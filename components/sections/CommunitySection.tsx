'use client'

import React from 'react'

export function CommunitySection() {
  const happenings = [
    'Guest Sessions',
    'Hackathons',
    'AI Challenges',
    'Meetups',
    'Alumni',
  ]

  return (
    <section id="community" className="py-24 md:py-32 bg-[#121312] text-[#F6F4EE] border-b border-[#2B2D2B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#E44B27]" />
            <span className="section-label text-[#E44B27]">
              COMMUNITY
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-4">
            Learning shouldn’t stop when the session ends.
          </h2>
          <p className="text-base sm:text-lg text-[#9B9C94] font-normal leading-relaxed">
            Most of what people learn about building with AI happens between sessions — in a thread, in a review, in someone else’s half-working prototype.
          </p>
        </div>

        {/* Community Note */}
        <p className="text-xs text-[#777873] font-mono tracking-wide max-w-2xl mb-16 border-l border-[#2B2D2B] pl-4">
          The community is built alongside the first batches. This is how it’s designed to work — not a claim about how large it already is.
        </p>

        {/* 2-Column Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Where it happens */}
          <div className="space-y-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-[#E44B27] uppercase block mb-4">
              WHERE IT HAPPENS
            </span>

            {/* Discord */}
            <div className="p-8 bg-[#181A18] border border-[#2B2D2B]">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  Discord
                </h3>
                <span className="font-mono text-[10px] text-[#E44B27] tracking-widest uppercase font-semibold">
                  ALWAYS ON
                </span>
              </div>
              <p className="text-sm text-[#9B9C94] font-normal leading-relaxed">
                Where the day-to-day happens — questions, code, and the answer that arrives at 11pm.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="p-8 bg-[#181A18] border border-[#2B2D2B]">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-2xl sm:text-3xl font-serif text-white">
                  WhatsApp
                </h3>
                <span className="font-mono text-[10px] text-[#E44B27] tracking-widest uppercase font-semibold">
                  BATCH
                </span>
              </div>
              <p className="text-sm text-[#9B9C94] font-normal leading-relaxed">
                Coordination and short updates for your cohort.
              </p>
            </div>
          </div>

          {/* What happens */}
          <div>
            <span className="font-mono text-xs font-semibold tracking-widest text-[#E44B27] uppercase block mb-8">
              WHAT HAPPENS
            </span>

            <div className="divide-y divide-[#2B2D2B] border-y border-[#2B2D2B]">
              {happenings.map((item) => (
                <div
                  key={item}
                  className="py-5 flex items-center justify-between hover:bg-[#181A18] px-3 -mx-3 transition-colors group cursor-pointer"
                >
                  <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-[#E44B27] transition-colors">
                    {item}
                  </h3>
                  <span className="font-mono text-[10px] text-[#9B9C94] tracking-widest uppercase">
                    NETWORK
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
