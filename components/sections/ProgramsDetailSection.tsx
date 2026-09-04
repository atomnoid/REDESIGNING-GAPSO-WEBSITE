'use client'

import React, { useRef } from 'react'
import { ArrowUpRight, ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { TrackData } from './LearningSystemSection'

interface Props {
  tracks: TrackData[]
  applyHref: string
}

export function ProgramsDetailSection({ tracks, applyHref }: Props) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-80px' })

  return (
    <section 
      id="programs-detail" 
      ref={containerRef}
      className="py-24 md:py-36 bg-[#111210] text-[#F6F4EE] border-b border-[#252724] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#252724] bg-[#181A18] text-[#E44B27] font-mono text-[11px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />
            Programs
          </div>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tight text-white leading-[1.05] mb-6">
            Choose your entry point.
          </h2>
          <p className="text-base sm:text-lg text-[#8B8C84] font-normal leading-relaxed">
            Start free. Then choose the track designed for where you are.
          </p>
        </motion.div>

        {/* Featured Free Entry Program Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 md:p-16 mb-20 md:mb-24 rounded-3xl bg-gradient-to-br from-[#1c1e1a] to-[#141513] border border-[#2e312b] relative overflow-hidden shadow-2xl"
        >
          {/* Subtle accent glow */}
          <div 
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ background: '#E44B27' }}
          />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E44B27]/10 border border-[#E44B27]/30 text-[#E44B27] font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
                Free Entry Program · Open to All
              </div>
              <h3 className="text-3xl sm:text-5xl font-bold text-white mb-3 tracking-tight">
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
              <a href={applyHref} className="btn">
                <span>Start Here</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="mt-8 pt-8 border-t border-[#252724] text-sm sm:text-base text-[#8B8C84] max-w-3xl font-normal leading-relaxed">
            Nobody should pay to find out whether AI is for them. Everyone begins on the same free foundation course, then routes into the track that matches where they are starting from.
          </p>
        </motion.div>

        {/* Specialist Tracks Header */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-2 h-2 rounded-full bg-[#E44B27]" />
          <p className="font-mono text-[11px] font-bold text-[#E44B27] uppercase tracking-widest">
            Specialist Tracks
          </p>
        </div>

        {/* Specialist Tracks Cards */}
        <div className="space-y-6">
          {tracks.map((t, index) => (
            <motion.div
              key={t.no}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-3xl bg-[#181A18] border border-[#252724] hover:border-[#E44B27]/40 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Number & Basic Info */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs font-bold text-[#E44B27] px-2.5 py-0.5 rounded-full bg-[#E44B27]/10 border border-[#E44B27]/20">
                      Track {t.no}
                    </span>
                    <p className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-wider">
                      {t.audience}
                    </p>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#E44B27] transition-colors">
                    {t.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-[#8B8C84] leading-relaxed font-normal mb-6">
                    {t.desc}
                  </p>

                  <div className="flex items-center gap-4 flex-wrap pt-2">
                    <a href={applyHref} className="btn">
                      <span>Apply For Track</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a href="#programs-detail" className="link-dark">
                      <span>View Track</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Curriculum & Outcomes Details */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="p-5 rounded-2xl bg-[#111210] border border-[#252724]">
                    <p className="font-mono text-[9px] text-[#E44B27] uppercase tracking-widest font-bold mb-2">
                      Curriculum Focus
                    </p>
                    <p className="font-mono text-xs text-[#C8C5BA] leading-relaxed">
                      {t.skills}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-[#111210]/60 border border-[#252724]">
                      <p className="font-mono text-[9px] text-[#8B8C84] uppercase tracking-widest font-bold mb-2">
                        Target Roles
                      </p>
                      <p className="text-xs sm:text-sm text-[#8B8C84] font-normal leading-relaxed">
                        {t.roles}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#111210]/60 border border-[#252724]">
                      <p className="font-mono text-[9px] text-[#8B8C84] uppercase tracking-widest font-bold mb-2">
                        What You Will Build
                      </p>
                      <p className="text-xs sm:text-sm text-[#E44B27] font-semibold leading-relaxed">
                        {t.build}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
