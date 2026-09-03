'use client'

import React from 'react'
import { motion } from 'framer-motion'

export function PrinciplesTicker() {
  const principles = [
    'LEARN BY BUILDING',
    '50% THEORY / 50% PRACTICAL',
    'SMALL BATCHES',
    'WEEKEND LEARNING',
    'PORTFOLIO OVER CERTIFICATES',
  ]

  // Double the list for infinite seamless marquee
  const tickerItems = [...principles, ...principles, ...principles]

  return (
    <section
      aria-label="How GAPSO teaches"
      className="relative overflow-hidden py-3 border-b border-[#D6D3C8]"
    >
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, repeatType: 'loop', duration: 32, ease: 'linear' }}
          className="flex items-center gap-10 whitespace-nowrap"
        >
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-10">
              <span className={`font-mono text-[10px] tracking-[0.16em] font-medium uppercase ${item.includes('50%') ? 'text-[#E44B27]' : 'text-[#6B6C65]'}`}>
                {item}
              </span>
              <span className="w-[3px] h-[3px] bg-[#D6D3C8] inline-block" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

