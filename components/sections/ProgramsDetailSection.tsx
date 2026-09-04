'use client'

import React, { useRef, useState } from 'react'
import { ArrowUpRight, ArrowRight, Sparkles, Terminal, Code2, Layers } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { TrackData } from './LearningSystemSection'

interface Props {
  tracks: TrackData[]
  applyHref: string
}

export function ProgramsDetailSection({ tracks, applyHref }: Props) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px' })
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null)

  // Track icons mapping
  const trackIcons: Record<string, React.ReactNode> = {
    '01': <Sparkles className="w-5 h-5 text-[#E44B27]" />,
    '02': <Terminal className="w-5 h-5 text-[#E44B27]" />,
    '03': <Code2 className="w-5 h-5 text-[#E44B27]" />,
  }

  return (
    <section 
      id="programs-detail" 
      ref={containerRef}
      className="py-24 md:py-36 bg-[#111210] text-[#F6F4EE] border-b border-[#252724] relative overflow-hidden"
    >
      {/* Dynamic ambient background glow */}
      <div 
        className="absolute top-1/4 -right-48 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15 blur-[140px]"
        style={{ background: '#E44B27' }}
      />
      <div 
        className="absolute bottom-10 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10 blur-[130px]"
        style={{ background: '#E44B27' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#252724] bg-[#181A18] text-[#E44B27] font-mono text-[11px] font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27] animate-pulse" />
            Specialist Tracks
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-medium tracking-tight text-white leading-[1.04] mb-6"
          >
            Choose your entry point.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base sm:text-lg text-[#8B8C84] font-normal leading-relaxed max-w-xl"
          >
            Start free. Then choose the track designed for where you are.
          </motion.p>
        </div>

        {/* Featured Free Foundation Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 md:p-14 mb-20 md:mb-24 rounded-3xl bg-gradient-to-br from-[#1c1e1a] via-[#161816] to-[#121312] border border-[#2e312b] relative overflow-hidden shadow-2xl group hover:border-[#E44B27]/50 transition-all duration-500"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E44B27]/10 border border-[#E44B27]/30 text-[#E44B27] font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />
                Free Entry Program · Open to All
              </div>
              <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-3 tracking-tight">
                AI Fundamentals
              </h3>
              <p className="font-mono text-xs text-[#8B8C84] uppercase tracking-wider">
                No prerequisites
              </p>
            </div>

            <div className="flex sm:items-center gap-6 sm:gap-8 flex-wrap lg:flex-col lg:items-end">
              <div className="font-mono font-bold text-5xl sm:text-6xl text-[#E44B27] tracking-tight">
                FREE
              </div>
              <a href={applyHref} className="btn shadow-lg hover:shadow-[#E44B27]/20">
                <span>Start Here</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="mt-8 pt-8 border-t border-[#252724] text-sm sm:text-base text-[#8B8C84] max-w-3xl font-normal leading-relaxed">
            Nobody should pay to find out whether AI is for them. Everyone begins on the same free foundation course, then routes into the track that matches where they are starting from.
          </p>
        </motion.div>

        {/* Section Sub-heading for Tracks */}
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-[#252724]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#E44B27]" />
            <p className="font-mono text-xs font-bold text-[#F6F4EE] uppercase tracking-widest">
              Specialist Tracks
            </p>
          </div>
          <span className="font-mono text-xs text-[#8B8C84]">03 Pathways</span>
        </div>

        {/* Specialist Tracks Cards - Modern Humaan Design */}
        <div className="space-y-6 md:space-y-8">
          {tracks.map((t, index) => {
            const isHovered = hoveredTrack === t.no
            return (
              <motion.div
                key={t.no}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredTrack(t.no)}
                onMouseLeave={() => setHoveredTrack(null)}
                className="p-8 sm:p-12 rounded-3xl bg-[#181A18] border border-[#252724] hover:border-[#E44B27]/50 hover:bg-[#1a1c1a] transition-all duration-500 relative group overflow-hidden shadow-lg"
              >
                {/* Ambient hover corner highlight */}
                <div 
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none transition-opacity duration-500 blur-3xl ${
                    isHovered ? 'opacity-20' : 'opacity-0'
                  }`}
                  style={{ background: '#E44B27' }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
                  
                  {/* Left Column: Track Info & Action Buttons */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Meta Pill Badges */}
                      <div className="flex items-center gap-3 flex-wrap mb-5">
                        <span className="font-mono text-xs font-bold text-[#E44B27] px-3 py-1 rounded-full bg-[#E44B27]/10 border border-[#E44B27]/25 flex items-center gap-2">
                          {trackIcons[t.no] || <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />}
                          Track {t.no}
                        </span>
                        <span className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-wider px-3 py-1 rounded-full border border-[#252724] bg-[#121312]">
                          {t.audience}
                        </span>
                      </div>

                      {/* Track Title */}
                      <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4 tracking-tight group-hover:text-[#E44B27] transition-colors duration-300">
                        {t.title}
                      </h3>

                      {/* Track Description */}
                      <p className="text-sm sm:text-base text-[#8B8C84] leading-relaxed font-normal mb-8 max-w-xl">
                        {t.desc}
                      </p>
                    </div>

                    {/* Pill Action Buttons */}
                    <div className="flex items-center gap-4 flex-wrap pt-2">
                      <a 
                        href={applyHref} 
                        className="btn shadow-md hover:shadow-[#E44B27]/20"
                      >
                        <span>Apply For Track</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                      <a 
                        href="#programs-detail" 
                        className="link-dark px-2 py-1.5 flex items-center gap-2 text-sm text-[#8B8C84] hover:text-white transition-colors"
                      >
                        <span>View Track</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Curriculum, Roles & Build Modular Panels */}
                  <div className="lg:col-span-6 space-y-4">
                    
                    {/* Curriculum Focus Panel */}
                    <div className="p-6 rounded-2xl bg-[#121312] border border-[#252724] group-hover:border-[#2e312b] transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />
                        <p className="font-mono text-[10px] text-[#E44B27] uppercase tracking-widest font-bold">
                          Curriculum Focus
                        </p>
                      </div>
                      <p className="font-mono text-xs sm:text-[13px] text-[#C8C5BA] leading-relaxed font-medium">
                        {t.skills}
                      </p>
                    </div>

                    {/* Target Roles & What You Will Build Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Target Roles */}
                      <div className="p-5 rounded-2xl bg-[#121312]/70 border border-[#252724] flex flex-col justify-between">
                        <p className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-widest font-bold mb-2.5">
                          Target Roles
                        </p>
                        <p className="text-xs sm:text-sm text-[#A2A49B] font-normal leading-relaxed">
                          {t.roles}
                        </p>
                      </div>

                      {/* What You Will Build */}
                      <div className="p-5 rounded-2xl bg-[#121312]/70 border border-[#252724] flex flex-col justify-between group-hover:border-[#E44B27]/30 transition-colors">
                        <p className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-widest font-bold mb-2.5">
                          What You Will Build
                        </p>
                        <p className="text-xs sm:text-sm text-[#E44B27] font-medium leading-relaxed">
                          {t.build}
                        </p>
                      </div>

                    </div>

                  </div>

                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
