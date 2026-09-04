'use client'

import React, { useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { TrackData } from './LearningSystemSection'

interface Props {
  tracks: TrackData[]
  applyHref: string
}

export function ProgramsDetailSection({ tracks, applyHref }: Props) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-60px' })
  const [activeTrackIndex, setActiveTrackIndex] = useState<number>(0)

  return (
    <section 
      id="programs-detail" 
      ref={containerRef}
      className="py-24 md:py-36 bg-[#111210] text-[#F6F4EE] border-b border-[#252724]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />
            <span className="label">Programs</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-[clamp(2.4rem,5.5vw,4.8rem)] font-extrabold tracking-tight text-white leading-[1.04] mb-6"
          >
            Choose your entry point.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base sm:text-lg text-[#8B8C84] font-normal leading-relaxed"
          >
            Start free. Then choose the track designed for where you are.
          </motion.p>
        </div>

        {/* 00. Free Foundation Card — Clean Human Editorial Style */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="p-8 sm:p-12 mb-20 md:mb-24 rounded-2xl bg-[#171816] border border-[#252724]"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
            <div>
              <span className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest block mb-3">
                Free Entry Program · Open to All
              </span>
              <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-none mb-2">
                AI Fundamentals
              </h3>
              <p className="font-mono text-xs text-[#8B8C84] uppercase tracking-wider">
                No prerequisites
              </p>
            </div>

            <div className="flex sm:items-center gap-8 flex-wrap lg:flex-col lg:items-end">
              <span className="text-5xl sm:text-6xl font-bold text-[#E44B27] font-mono tracking-tight leading-none">
                FREE
              </span>
              <a href={applyHref} className="btn">
                <span>Start Here</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="pt-8 border-t border-[#252724] text-sm sm:text-base text-[#8B8C84] max-w-3xl font-normal leading-relaxed">
            Nobody should pay to find out whether AI is for them. Everyone begins on the same free foundation course, then routes into the track that matches where they are starting from.
          </p>
        </motion.div>

        {/* ── Specialist Tracks ── */}
        <div className="pt-4 mb-8 flex items-baseline justify-between border-b border-[#252724] pb-5">
          <div>
            <p className="font-mono text-[11px] font-bold text-[#E44B27] uppercase tracking-widest">
              Specialist Tracks
            </p>
          </div>
          <span className="font-mono text-xs text-[#6B6C65]">
            03 Pathways
          </span>
        </div>

        {/* Editorial Tab Switcher for Desktop / Mobile Quick Select */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-10">
          {tracks.map((t, idx) => {
            const isSelected = activeTrackIndex === idx
            return (
              <button
                key={t.no}
                onClick={() => setActiveTrackIndex(idx)}
                className={`text-left p-5 rounded-xl border transition-all duration-200 cursor-pointer ${
                  isSelected 
                    ? 'bg-[#1C1E1B] border-[#E44B27] text-white shadow-sm' 
                    : 'bg-[#141513] border-[#252724] text-[#8B8C84] hover:border-[#383A35] hover:text-[#C8C5BA]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#E44B27]' : 'text-[#6B6C65]'}`}>
                    Track {t.no}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#6B6C65] truncate max-w-[140px]">
                    {t.audience}
                  </span>
                </div>
                <div className="font-semibold text-base text-white">
                  {t.title}
                </div>
              </button>
            )
          })}
        </div>

        {/* Active Track Comprehensive Editorial View */}
        {(() => {
          const currentTrack = tracks[activeTrackIndex]
          return (
            <motion.div
              key={currentTrack.no}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-12 md:p-14 rounded-2xl bg-[#171816] border border-[#252724]"
            >
              {/* Header inside the panel */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-10 border-b border-[#252724]">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-bold text-[#E44B27]">
                      Track {currentTrack.no}
                    </span>
                    <span className="text-[#383A35]">/</span>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#8B8C84]">
                      {currentTrack.audience}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                    {currentTrack.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#8B8C84] leading-relaxed max-w-2xl font-normal">
                    {currentTrack.desc}
                  </p>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end justify-center">
                  <a 
                    href={applyHref} 
                    className="btn w-full sm:w-auto justify-center"
                  >
                    <span>Apply For Track</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <a 
                    href="#programs-detail" 
                    className="link-dark text-xs text-[#8B8C84] hover:text-white"
                  >
                    <span>View Track</span>
                  </a>
                </div>
              </div>

              {/* Editorial 3-Column Spec Sheet */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
                {/* 1. Curriculum Focus */}
                <div>
                  <p className="font-mono text-[10px] text-[#E44B27] uppercase tracking-widest font-bold mb-3">
                    Curriculum Focus
                  </p>
                  <p className="font-mono text-xs sm:text-sm text-[#C8C5BA] leading-relaxed">
                    {currentTrack.skills}
                  </p>
                </div>

                {/* 2. Target Roles */}
                <div>
                  <p className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-widest font-bold mb-3">
                    Target Roles
                  </p>
                  <p className="text-sm text-[#8B8C84] leading-relaxed font-normal">
                    {currentTrack.roles}
                  </p>
                </div>

                {/* 3. What You Will Build */}
                <div>
                  <p className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-widest font-bold mb-3">
                    What You Will Build
                  </p>
                  <p className="text-sm text-[#E44B27] font-semibold leading-relaxed">
                    {currentTrack.build}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })()}

      </div>
    </section>
  )
}
