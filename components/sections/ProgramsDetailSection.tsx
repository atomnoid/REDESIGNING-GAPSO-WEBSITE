'use client'

import React, { useRef } from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
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

        {/* Free Entry Foundation Card */}
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

        {/* Section Sub-heading for Tracks */}
        <div className="mb-10 flex items-baseline justify-between border-b border-[#252724] pb-5">
          <p className="font-mono text-[11px] font-bold text-[#E44B27] uppercase tracking-widest">
            Specialist Tracks
          </p>
          <span className="font-mono text-xs text-[#6B6C65]">
            03 Pathways
          </span>
        </div>

        {/* Specialist Tracks — Clean Architectural List / Cards */}
        <div className="space-y-6">
          {tracks.map((t, index) => (
            <motion.div
              key={t.no}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="p-8 sm:p-10 md:p-12 rounded-2xl bg-[#171816] border border-[#252724] hover:border-[#3a3c36] transition-colors duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left Side: Track Number, Audience, Title, Description, and CTA Buttons */}
                <div className="lg:col-span-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs font-bold text-[#E44B27]">
                        Track {t.no}
                      </span>
                      <span className="text-[#383A35]">/</span>
                      <span className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-wider">
                        {t.audience}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                      {t.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#8B8C84] leading-relaxed font-normal mb-8 max-w-xl">
                      {t.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap pt-2">
                    <a href={applyHref} className="btn">
                      <span>Apply For Track</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                    <a href="#programs-detail" className="link-dark text-xs flex items-center gap-1.5 text-[#8B8C84] hover:text-white">
                      <span>View Track</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Right Side: Curriculum, Roles, and What You Will Build spec sheet */}
                <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0 lg:border-l lg:border-[#252724] lg:pl-10">
                  
                  {/* Curriculum Focus */}
                  <div>
                    <p className="font-mono text-[10px] text-[#E44B27] uppercase tracking-widest font-bold mb-2">
                      Curriculum Focus
                    </p>
                    <p className="font-mono text-xs sm:text-sm text-[#C8C5BA] leading-relaxed">
                      {t.skills}
                    </p>
                  </div>

                  {/* Target Roles */}
                  <div>
                    <p className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-widest font-bold mb-2">
                      Target Roles
                    </p>
                    <p className="text-xs sm:text-sm text-[#8B8C84] leading-relaxed">
                      {t.roles}
                    </p>
                  </div>

                  {/* What You Will Build */}
                  <div>
                    <p className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-widest font-bold mb-2">
                      What You Will Build
                    </p>
                    <p className="text-xs sm:text-sm text-[#E44B27] font-medium leading-relaxed">
                      {t.build}
                    </p>
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
