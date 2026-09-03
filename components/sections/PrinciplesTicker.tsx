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
      className="relative overflow-hidden py-3.5 border-b border-[#D8D5CA] bg-[#ECE8DD]/60"
    >
      <div className="flex w-max">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 28,
            ease: 'linear',
          }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {tickerItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-12">
              <span
                className={`font-mono text-[11px] tracking-[0.14em] font-medium uppercase ${
                  item.includes('50%')
                    ? 'text-[#E44B27] font-semibold'
                    : 'text-[#6C6D67]'
                }`}
              >
                {item}
              </span>
              <span className="w-1 h-1 bg-[#BCB8AC] rotate-45 inline-block" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
