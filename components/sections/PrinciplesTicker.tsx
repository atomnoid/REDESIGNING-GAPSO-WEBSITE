'use client'

import React from 'react'

export function PrinciplesTicker() {
  const principles = [
    'LEARN BY BUILDING',
    '50% THEORY / 50% PRACTICAL',
    'SMALL BATCHES',
    'WEEKEND LEARNING',
    'PORTFOLIO OVER CERTIFICATES',
    'FIRST PRINCIPLES',
    'LIVE SESSIONS ONLY',
    'BENGALURU · INDIA',
  ]

  const items = [...principles, ...principles]

  return (
    <section
      aria-label="How GAPSO teaches"
      className="relative overflow-hidden py-4 border-y border-[#D6D3C8] bg-[#F6F4EE]"
    >
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-20 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(to right, #F6F4EE, transparent)' }} />
      <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none"
           style={{ background: 'linear-gradient(to left, #F6F4EE, transparent)' }} />

      <div className="flex w-max animate-marquee">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-12 pl-12">
            <span
              className={`font-mono text-[11px] tracking-[0.2em] font-semibold uppercase whitespace-nowrap ${
                item.includes('50%') ? 'text-[#E44B27]' : 'text-[#6B6C65]'
              }`}
            >
              {item}
            </span>
            <span className="w-[4px] h-[4px] rounded-full bg-[#D6D3C8] shrink-0" />
          </div>
        ))}
      </div>
    </section>
  )
}
