'use client'

import React from 'react'

interface CofounderSectionProps {
  imageUrl: string
}

export function CofounderSection({ imageUrl }: CofounderSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-[#F6F4EE] border-b border-[#D8D5CA] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#E44B27]" />
              <span className="section-label text-[#E44B27]">
                THE CO-FOUNDER
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121312] leading-none mb-2">
              Surya Bharadwaj
            </h2>
            <p className="text-sm font-mono text-[#E44B27] tracking-wider uppercase mb-8">
              Founder &amp; Chief Operating Officer
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#6C6D67] font-normal leading-relaxed mb-10">
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
            <div className="pt-6 border-t border-[#D8D5CA]">
              <span className="font-mono text-[10px] tracking-widest text-[#121312] uppercase font-semibold block mb-2">
                FOCUS
              </span>
              <div className="font-mono text-xs text-[#6C6D67] tracking-wider leading-relaxed">
                Operations · Delivery · E-Waste Management · Community Building · Awareness Campaigns
              </div>
            </div>
          </div>

          {/* Right Column: Portrait */}
          <div className="lg:col-span-5">
            <div className="max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE8DD] border border-[#D8D5CA]">
                <img
                  src={imageUrl}
                  alt="Surya Bharadwaj"
                  className="w-full h-full object-cover object-center grayscale contrast-105"
                />
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-[#9B9C94] tracking-widest uppercase">
                <span>SURYA BHARADWAJ / THE OPERATOR</span>
                <span>BENGALURU</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
