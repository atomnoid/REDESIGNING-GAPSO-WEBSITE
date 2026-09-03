'use client'

import React from 'react'

interface Props { imageUrl: string }

export function CofounderSection({ imageUrl }: Props) {
  return (
    <section className="py-24 md:py-32 border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">

          <div className="lg:col-span-7">
            <p className="label mb-5">The Co-Founder</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#111210] leading-none mb-1">Surya Bharadwaj</h2>
            <p className="font-mono text-xs text-[#E44B27] tracking-wider uppercase mb-10">Founder &amp; Chief Operating Officer</p>

            <div className="space-y-4 text-sm sm:text-base text-[#6B6C65] leading-relaxed mb-10">
              <p>A computer science engineer, social entrepreneur and community leader working at the intersection of technology, sustainability and public service.</p>
              <p>He founded E-Swachha in 2023 — an e-waste and sustainability community whose awareness drives and collection campaigns across Bengaluru have been featured on Vistara News. He presented at Startup Mahakumbh in New Delhi, among some 3,000 student entrepreneurs selected nationwide.</p>
              <p>At GAPSO, he makes sure the business around every cohort actually works — the operational half of a school where the other half is teaching.</p>
            </div>

            <div className="pt-6 border-t border-[#D6D3C8]">
              <p className="font-mono text-[10px] text-[#111210] uppercase tracking-widest font-bold mb-1">Focus</p>
              <p className="font-mono text-xs text-[#6B6C65]">Operations · Delivery · E-Waste Management · Community Building · Awareness Campaigns</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-[#EAE7E0]">
              <img src={imageUrl} alt="Surya Bharadwaj" className="w-full h-full object-cover grayscale" />
            </div>
            <p className="mt-3 font-mono text-[10px] text-[#6B6C65] tracking-widest uppercase">Surya Bharadwaj · Bengaluru</p>
          </div>
        </div>
      </div>
    </section>
  )
}
