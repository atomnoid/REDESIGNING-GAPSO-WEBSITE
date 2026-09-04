'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Props { imageUrl: string }

export function CofounderSection({ imageUrl }: Props) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px' })

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-36 border-b border-[#D6D3C8] bg-[#F6F4EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Bio & Details */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D6D3C8] bg-white text-[#E44B27] font-mono text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />
              The Co-Founder
            </div>

            <h2 className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-serif font-bold tracking-tight text-[#111210] leading-none mb-3">
              Surya Bharadwaj
            </h2>
            
            <p className="font-mono text-xs text-[#E44B27] tracking-wider uppercase mb-8 font-semibold">
              Founder &amp; Chief Operating Officer
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#6B6C65] leading-relaxed mb-10 font-normal max-w-2xl">
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

            <div className="pt-6 border-t border-[#D6D3C8] max-w-xl">
              <p className="font-mono text-[10px] text-[#111210] uppercase tracking-widest font-bold mb-2">
                Focus
              </p>
              <p className="font-mono text-xs text-[#6B6C65] leading-relaxed">
                Operations · Delivery · E-Waste Management · Community Building · Awareness Campaigns
              </p>
            </div>
          </motion.div>

          {/* Right: Portrait Image Card with Humaan-style pill caption & smooth grayscale transition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="group relative rounded-3xl overflow-hidden bg-[#ECE8DD] border border-[#D6D3C8] shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={imageUrl} 
                  alt="Surya Bharadwaj" 
                  className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-between">
                <div>
                  <p className="font-serif text-lg font-bold text-white leading-tight">Surya Bharadwaj</p>
                  <p className="font-mono text-[10px] text-white/70 tracking-widest uppercase mt-0.5">Bengaluru</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] tracking-wider uppercase">
                  Co-Founder
                </span>
              </div>
            </div>
            <p className="mt-4 font-mono text-[10px] text-[#6B6C65] tracking-widest uppercase text-center sm:text-left">
              Surya Bharadwaj · Bengaluru
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
