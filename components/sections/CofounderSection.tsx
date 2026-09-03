'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Sparkles } from 'lucide-react'

interface CofounderSectionProps {
  imageUrl: string
}

export function CofounderSection({ imageUrl }: CofounderSectionProps) {
  const focusAreas = [
    'Operations',
    'Delivery',
    'E-Waste Management',
    'Community Building',
    'Awareness Campaigns',
  ]

  return (
    <section className="py-24 md:py-32 bg-[#E44B27] text-white border-b border-[#BC3B1F] relative overflow-hidden">
      {/* Editorial watermark */}
      <div className="absolute left-6 bottom-4 select-none pointer-events-none text-white/[0.04] font-serif text-[18vw] leading-none z-0">
        SCALE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#121312]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#121312] uppercase">
                THE CO-FOUNDER
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-none mb-2">
              Surya Bharadwaj
            </h2>
            <p className="text-base font-mono text-white/80 tracking-wider uppercase mb-8">
              Founder &amp; Chief Operating Officer
            </p>

            <div className="space-y-4 text-sm sm:text-base text-white/90 font-normal leading-relaxed mb-10">
              <p>
                A computer science engineer, social entrepreneur and community leader working at the intersection of technology, sustainability and public service.
              </p>
              <p>
                He founded E-Swachha in 2023 — an e-waste and sustainability community whose awareness drives and collection campaigns across Bengaluru have been featured on Vistara News. He presented at Startup Mahakumbh in New Delhi, among some 3,000 student entrepreneurs selected nationwide.
              </p>
              <p>
                At GAPSO, he makes sure the business around every cohort actually works — the operational half of a school where the other half is teaching.
              </p>
            </div>

            {/* Focus Section */}
            <div className="pt-6 border-t border-white/20">
              <h4 className="font-mono text-[10px] tracking-widest text-white/80 uppercase font-semibold mb-3">
                FOCUS
              </h4>
              <div className="font-mono text-xs text-white tracking-wider leading-relaxed">
                Operations · Delivery · E-Waste Management · Community Building · Awareness Campaigns
              </div>
            </div>
          </div>

          {/* Right Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#121312] border border-white/20 shadow-[8px_8px_0px_#121312]">
                <img
                  src={imageUrl}
                  alt="Surya Bharadwaj"
                  className="w-full h-full object-cover object-center saturate-[0.85] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121312]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-[#121312] text-white px-2.5 py-1 font-mono text-[10px] font-bold tracking-widest uppercase">
                  OPERATIONS &amp; GROWTH
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-white/80 tracking-widest uppercase">
                <span>SURYA BHARADWAJ / THE OPERATOR</span>
                <span>BENGALURU</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
