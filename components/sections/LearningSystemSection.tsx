'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Layers } from 'lucide-react'

export interface TrackData {
  no: string
  audience: string
  title: string
  desc: string
  skills: string
  roles: string
  build: string
}

interface LearningSystemSectionProps {
  tracks: TrackData[]
}

export function LearningSystemSection({ tracks }: LearningSystemSectionProps) {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null)

  return (
    <section id="programs" className="py-20 md:py-28 border-b border-[#D8D5CA] bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#E44B27]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#E44B27] uppercase">
              THE LEARNING SYSTEM
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121312] leading-[1.05] mb-4">
            One foundation. Three ways to build.
          </h2>
          <p className="text-base sm:text-lg text-[#6C6D67] font-normal leading-relaxed">
            Independent paths — choose the one that matches where you&apos;re starting from.
          </p>
        </div>

        {/* Foundation Highlight Card (Free Entry Point) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 relative overflow-hidden bg-[#E44B27] text-white p-8 md:p-10 shadow-[6px_6px_0px_#121312] border border-[#BC3B1F] group"
        >
          {/* Background architectural graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center font-serif text-[12rem] select-none">
            00
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2">
                <span className="bg-[#121312] text-white px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-widest uppercase">
                  START HERE
                </span>
                <span className="font-mono text-xs text-white/80 uppercase tracking-wider">
                  Open to everyone · No prerequisite
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif tracking-tight text-white">
                AI Fundamentals
              </h3>
              <p className="text-white/90 text-sm max-w-xl font-normal leading-relaxed">
                Open to everyone · No prerequisite
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="font-mono text-[10px] text-white/75 uppercase tracking-widest">
                  TUITION
                </div>
                <strong className="text-3xl font-mono font-bold tracking-tight text-white block">
                  FREE
                </strong>
              </div>
              <a
                href="#programs"
                aria-label="View AI Fundamentals"
                className="w-12 h-12 rounded-full bg-white text-[#E44B27] flex items-center justify-center hover:bg-[#121312] hover:text-white transition-all shadow-md group-hover:rotate-45"
              >
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3 Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#D8D5CA] bg-white divide-y md:divide-y-0 md:divide-x divide-[#D8D5CA]">
          {tracks.map((t) => {
            const isHovered = hoveredTrack === t.no
            return (
              <motion.div
                key={t.no}
                onMouseEnter={() => setHoveredTrack(t.no)}
                onMouseLeave={() => setHoveredTrack(null)}
                className="p-8 sm:p-10 flex flex-col justify-between relative bg-white hover:bg-[#FAF9F5] transition-colors duration-300 group"
              >
                {/* Top Number & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-bold text-[#E44B27] px-2 py-0.5 bg-[#E44B27]/10">
                      {t.no}
                    </span>
                    <span className="font-mono text-[10px] font-medium tracking-widest text-[#9B9C94] uppercase">
                      {t.audience}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-[#121312] mb-4 group-hover:text-[#E44B27] transition-colors">
                    {t.title}
                  </h3>

                  <p className="text-sm text-[#6C6D67] leading-relaxed mb-6 font-normal">
                    {t.desc}
                  </p>
                </div>

                {/* Bottom link */}
                <div className="pt-6 border-t border-[#E5E2D8] mt-6 flex items-center justify-between">
                  <a
                    href="#programs-detail"
                    className="semi-button-track group"
                  >
                    <span>VIEW TRACK</span>
                    <ArrowUpRight className="w-3.5 h-3.5 track-arrow" />
                  </a>

                  <span className="font-mono text-[10px] text-[#9B9C94]">
                    TRACK {t.no}
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
