'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { TrackData } from './LearningSystemSection'

interface Props {
  tracks: TrackData[]
  applyHref: string
}

export function ProgramsDetailSection({ tracks, applyHref }: Props) {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: '-60px' })

  return (
    <section 
      id="programs-detail" 
      ref={containerRef}
      className="py-24 md:py-36 bg-[#111210] text-[#F6F4EE] border-b border-[#252724] relative overflow-hidden"
    >
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{ backgroundImage: 'radial-gradient(#F6F4EE 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Manifesto Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 md:mb-28">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E44B27]" />
              <span className="font-mono text-xs font-bold text-[#E44B27] uppercase tracking-[0.2em]">
                Specialist Curricula
              </span>
            </div>
            <h2 className="text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold tracking-[-0.03em] text-white leading-[0.98]">
              Choose your entry point.
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <p className="text-base sm:text-lg text-[#8B8C84] font-normal leading-relaxed">
              Start free. Then choose the track designed for where you are.
            </p>
          </motion.div>
        </div>

        {/* ── Monolithic Free Entry Chamber ── */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-14 mb-20 md:mb-28 rounded-3xl bg-[#171816] border border-[#252724] relative overflow-hidden group hover:border-[#E44B27]/40 transition-colors duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E44B27]/10 border border-[#E44B27]/25 font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest">
                <span>Free Entry Program</span>
                <span>·</span>
                <span>Open to All</span>
              </div>

              <h3 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-none pt-2">
                AI Fundamentals
              </h3>

              <p className="font-mono text-xs text-[#8B8C84] uppercase tracking-wider">
                No prerequisites
              </p>

              <p className="pt-6 text-sm sm:text-base text-[#8B8C84] max-w-2xl font-normal leading-relaxed">
                Nobody should pay to find out whether AI is for them. Everyone begins on the same free foundation course, then routes into the track that matches where they are starting from.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-between h-full space-y-6">
              <div className="lg:text-right">
                <span className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-widest block mb-1 font-semibold">
                  Tuition
                </span>
                <span className="text-6xl sm:text-7xl font-mono font-bold text-[#E44B27] tracking-tighter">
                  FREE
                </span>
              </div>

              <a href={applyHref} className="btn w-full sm:w-auto justify-center shadow-lg hover:shadow-xl hover:shadow-[#E44B27]/20">
                <span>Start Here</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Specialist Tracks: Museum-Grade Dossier Architecture ── */}
        <div className="mb-8 flex items-baseline justify-between border-b border-[#252724] pb-4">
          <span className="font-mono text-xs font-bold text-[#E44B27] uppercase tracking-widest">
            Specialist Tracks
          </span>
          <span className="font-mono text-xs text-[#6B6C65]">
            03 Curricula
          </span>
        </div>

        <div className="space-y-8">
          {tracks.map((t, idx) => (
            <motion.div
              key={t.no}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-12 md:p-14 rounded-3xl bg-[#161715] border border-[#252724] hover:border-[#3a3c36] transition-all duration-300 relative group"
            >
              {/* Giant Background Architectural Number watermark */}
              <div className="absolute right-8 top-6 font-mono font-bold text-7xl sm:text-9xl text-white/[0.03] select-none pointer-events-none">
                {t.no}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
                
                {/* Identity & Scope */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-[#E44B27] px-2.5 py-0.5 rounded-full bg-[#E44B27]/10 border border-[#E44B27]/25">
                        Track {t.no}
                      </span>
                      <span className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-wider">
                        {t.audience}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4 group-hover:text-[#E44B27] transition-colors leading-[1.05]">
                      {t.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#8B8C84] leading-relaxed font-normal max-w-md">
                      {t.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-4">
                    <a href={applyHref} className="btn">
                      <span>Apply For Track</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a href="#programs-detail" className="link-dark text-xs text-[#8B8C84] hover:text-white">
                      <span>View Track</span>
                    </a>
                  </div>
                </div>

                {/* Technical Dossier Spec */}
                <div className="lg:col-span-7 space-y-6 lg:border-l lg:border-[#252724] lg:pl-10 pt-6 lg:pt-0">
                  
                  {/* Curriculum Focus */}
                  <div className="p-6 rounded-2xl bg-[#111210] border border-[#252724]">
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27]" />
                      <p className="font-mono text-[10px] text-[#E44B27] uppercase tracking-widest font-bold">
                        Curriculum Focus
                      </p>
                    </div>
                    <p className="font-mono text-xs sm:text-[13px] text-[#C8C5BA] leading-relaxed font-medium">
                      {t.skills}
                    </p>
                  </div>

                  {/* Dual Grid: Roles & Deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-[#111210]/60 border border-[#252724]">
                      <p className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-widest font-bold mb-2">
                        Target Roles
                      </p>
                      <p className="text-xs sm:text-sm text-[#8B8C84] leading-relaxed">
                        {t.roles}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#111210]/60 border border-[#252724]">
                      <p className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-widest font-bold mb-2">
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
