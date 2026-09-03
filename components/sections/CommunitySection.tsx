'use client'

import React from 'react'

export function CommunitySection() {
  const happenings = [
    'Peer code reviews',
    'Project feedback',
    'AI news and tool releases',
    'Guest sessions and walkthroughs',
    'Job and freelance opportunities',
    'Debug sessions',
  ]

  return (
    <section id="community" className="py-24 md:py-32 bg-[#111210] text-[#F6F4EE] border-b border-[#252724]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-3xl mb-12">
          <p className="label mb-4">Community</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-4">
            Learning shouldn&apos;t stop when the session ends.
          </h2>
          <p className="text-base sm:text-lg text-[#8B8C84] mb-4 font-normal leading-relaxed">
            Most of what people learn about building with AI happens between sessions — in a thread, in a review, in someone else&apos;s half-working prototype.
          </p>
          <p className="text-xs text-[#6B6C65] font-mono border-l border-[#252724] pl-4 mt-6">
            The community is built alongside the first batches. This is how it&apos;s designed to work — not a claim about how large it already is.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 pt-8">
          <div>
            <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-6">
              Where it happens
            </p>
            <div className="divide-y divide-[#252724] border-y border-[#252724]">
              <div className="py-7 group">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#E44B27] transition-colors">
                    Discord
                  </h3>
                  <span className="font-mono text-[10px] text-[#E44B27] uppercase tracking-widest font-semibold">
                    Always on
                  </span>
                </div>
                <p className="text-sm text-[#8B8C84] leading-relaxed font-normal">
                  Where the day-to-day happens — questions, code, and the answer that arrives at 11pm.
                </p>
              </div>
              <div className="py-7 group">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#E44B27] transition-colors">
                    WhatsApp
                  </h3>
                  <span className="font-mono text-[10px] text-[#E44B27] uppercase tracking-widest font-semibold">
                    Batch
                  </span>
                </div>
                <p className="text-sm text-[#8B8C84] leading-relaxed font-normal">
                  Coordination and short updates for your cohort.
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-6">
              What happens
            </p>
            <div className="divide-y divide-[#252724] border-y border-[#252724]">
              {happenings.map((h) => (
                <div key={h} className="py-4 flex items-center justify-between group hover:bg-[#181A18] px-3 -mx-3 transition-colors cursor-pointer">
                  <p className="text-lg font-bold text-white tracking-tight group-hover:text-[#E44B27] transition-colors">
                    {h}
                  </p>
                  <span className="font-mono text-[10px] text-[#8B8C84] tracking-widest uppercase">
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
