'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight, ShieldCheck, Terminal, Cpu } from 'lucide-react'
import { TrackData } from './LearningSystemSection'

interface ProgramsDetailSectionProps {
  tracks: TrackData[]
  applyHref: string
}

export function ProgramsDetailSection({ tracks, applyHref }: ProgramsDetailSectionProps) {
  return (
    <section
      id="programs-detail"
      className="py-24 md:py-32 bg-[#121312] text-[#F6F4EE] border-b border-[#2B2D2B] relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#E44B27]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#E44B27] uppercase">
              PROGRAMS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-4">
            Choose your entry point.
          </h2>
          <p className="text-base sm:text-lg text-[#9B9C94] font-normal leading-relaxed">
            Start free. Then choose the track designed for where you are.
          </p>
        </div>

        {/* Free Program Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-[#E44B27] text-white p-8 sm:p-12 border border-[#BC3B1F] shadow-[8px_8px_0px_#202220] relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/20 pb-6 lg:pb-0 lg:pr-8">
              <span className="font-mono text-[10px] tracking-widest text-white/80 uppercase font-semibold block mb-2">
                FREE ENTRY PROGRAM
              </span>
              <div className="font-serif text-5xl sm:text-6xl font-normal leading-none mb-3">
                FREE
              </div>
              <h3 className="font-serif text-3xl mb-1">AI Fundamentals</h3>
              <p className="font-mono text-xs text-white/80 tracking-wider uppercase">
                OPEN TO ALL
              </p>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                Nobody should pay to find out whether AI is for them. Everyone begins on the same free foundation course, then routes into the track that matches where they are starting from.
              </p>
            </div>

            <div className="lg:col-span-3 flex justify-start lg:justify-end">
              <a
                href={applyHref}
                className="btn-cta-invert"
              >
                <span>START HERE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Specialist Tracks Heading */}
        <div className="mb-10 pb-4 border-b border-[#2B2D2B] flex items-center justify-between">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#E44B27] uppercase">
            SPECIALIST TRACKS
          </span>
          <span className="font-mono text-[10px] text-[#9B9C94] uppercase">
            3 PATHWAYS AVAILABLE
          </span>
        </div>

        {/* Tracks List */}
        <div className="space-y-12">
          {tracks.map((t) => (
            <motion.article
              key={t.no}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#181A18] border border-[#2B2D2B] p-8 sm:p-12 hover:border-[#E44B27]/60 transition-colors relative group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left meta */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#E44B27] bg-[#E44B27]/10 px-2.5 py-1">
                      Track {t.no}
                    </span>
                    <span className="font-mono text-[10px] text-[#9B9C94] uppercase tracking-wider">
                      {t.audience}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white">
                    {t.title}
                  </h3>
                  <p className="text-sm text-[#9B9C94] leading-relaxed font-normal">
                    {t.desc}
                  </p>
                </div>

                {/* Middle details */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Skills pill list */}
                  <div className="p-4 bg-[#121312] border border-[#2B2D2B]">
                    <span className="font-mono text-[9px] tracking-widest text-[#E44B27] uppercase block mb-1.5 font-semibold">
                      CURRICULUM FOCUS
                    </span>
                    <div className="font-mono text-xs text-[#E5E7EB] tracking-wide">
                      {t.skills}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <small className="font-mono text-[9px] tracking-widest text-[#9B9C94] uppercase block font-semibold">
                      TARGET ROLES
                    </small>
                    <p className="text-sm text-white/90 leading-relaxed font-sans font-normal">
                      {t.roles}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <small className="font-mono text-[9px] tracking-widest text-[#9B9C94] uppercase block font-semibold">
                      WHAT YOU WILL BUILD
                    </small>
                    <p className="text-sm text-[#E44B27] font-medium leading-relaxed">
                      {t.build}
                    </p>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="lg:col-span-3 flex flex-col gap-4 justify-between h-full pt-4 lg:pt-0">
                  <a
                    href={applyHref}
                    className="btn-primary w-full justify-center text-center"
                  >
                    <span>APPLY FOR THIS TRACK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#programs-detail"
                    className="semi-button-track-dark w-full text-center group"
                  >
                    <span>VIEW TRACK</span>
                    <ArrowRight className="w-3.5 h-3.5 track-arrow" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
