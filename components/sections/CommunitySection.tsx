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

        <p className="label mb-6">Community</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-4 max-w-3xl">
          Learning shouldn&apos;t stop when the session ends.
        </h2>
        <p className="text-base sm:text-lg text-[#8B8C84] mb-4 max-w-2xl">
          Most of what people learn about building with AI happens between sessions — in a thread, in a review, in someone else&apos;s half-working prototype.
        </p>
        <p className="text-xs text-[#555750] font-mono mb-20 max-w-xl">
          The community is built alongside the first batches. This is how it&apos;s designed to work — not a claim about how large it already is.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">
          <div>
            <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-8">Where it happens</p>
            <div className="divide-y divide-[#252724] border-y border-[#252724]">
              <div className="py-6">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-2xl font-serif text-white">Discord</h3>
                  <span className="font-mono text-[10px] text-[#E44B27] uppercase tracking-widest">Always on</span>
                </div>
                <p className="text-sm text-[#8B8C84]">Where the day-to-day happens — questions, code, and the answer that arrives at 11pm.</p>
              </div>
              <div className="py-6">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="text-2xl font-serif text-white">WhatsApp</h3>
                  <span className="font-mono text-[10px] text-[#E44B27] uppercase tracking-widest">Batch</span>
                </div>
                <p className="text-sm text-[#8B8C84]">Coordination and short updates for your cohort.</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-8">What happens</p>
            <div className="divide-y divide-[#252724] border-y border-[#252724]">
              {happenings.map((h) => (
                <div key={h} className="py-4">
                  <p className="text-lg font-serif text-white">{h}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
