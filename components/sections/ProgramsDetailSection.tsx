'use client'

import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { TrackData } from './LearningSystemSection'

interface ProgramsDetailSectionProps {
  tracks: TrackData[]
  applyHref: string
}

export function ProgramsDetailSection({ tracks, applyHref }: ProgramsDetailSectionProps) {
  return (
    <section
      id="programs-detail"
      className="py-24 md:py-32 bg-[#0D0D0C] text-[#F5F5F3] border-b border-[#242422] relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#E44B27]" />
            <span className="section-label text-[#E44B27]">
              PROGRAMS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-4">
            Choose your entry point.
          </h2>
          <p className="text-base sm:text-lg text-[#9E9E9C] font-normal leading-relaxed">
            Start free. Then choose the track designed for where you are.
          </p>
        </div>

        {/* Free Program Card */}
        <div className="mb-20 bg-[#161614] text-white p-8 sm:p-12 border border-[#242422] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#242422] pb-6 lg:pb-0 lg:pr-8">
              <span className="font-mono text-[10px] tracking-widest text-[#E44B27] uppercase font-semibold block mb-2">
                FREE ENTRY PROGRAM
              </span>
              <div className="font-serif text-5xl sm:text-6xl font-normal leading-none mb-3 text-white">
                FREE
              </div>
              <h3 className="font-serif text-3xl mb-1 text-white">AI Fundamentals</h3>
              <p className="font-mono text-xs text-[#9E9E9C] tracking-wider uppercase">
                OPEN TO ALL
              </p>
            </div>

            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-[#C8C7C2] leading-relaxed font-normal">
                Nobody should pay to find out whether AI is for them. Everyone begins on the same free foundation course, then routes into the track that matches where they are starting from.
              </p>
            </div>

            <div className="lg:col-span-3 flex justify-start lg:justify-end">
              <a
                href={applyHref}
                className="btn-primary"
              >
                <span>START HERE</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Specialist Tracks Heading */}
        <div className="mb-10 pb-4 border-b border-[#242422] flex items-center justify-between">
          <span className="font-mono text-xs font-semibold tracking-widest text-[#E44B27] uppercase">
            SPECIALIST TRACKS
          </span>
          <span className="font-mono text-[10px] text-[#9E9E9C] uppercase">
            3 PATHWAYS AVAILABLE
          </span>
        </div>

        {/* Tracks List */}
        <div className="space-y-8">
          {tracks.map((t) => (
            <article
              key={t.no}
              className="bg-[#161614] border border-[#242422] p-8 sm:p-12 relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left meta */}
                <div className="lg:col-span-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#E44B27]">
                      Track {t.no}
                    </span>
                    <span className="font-mono text-[10px] text-[#9E9E9C] uppercase tracking-wider">
                      {t.audience}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white">
                    {t.title}
                  </h3>
                  <p className="text-sm text-[#9E9E9C] leading-relaxed font-normal">
                    {t.desc}
                  </p>
                </div>

                {/* Middle details */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Skills pill list */}
                  <div className="p-4 bg-[#0D0D0C] border border-[#242422]">
                    <span className="font-mono text-[9px] tracking-widest text-[#E44B27] uppercase block mb-1.5 font-semibold">
                      CURRICULUM FOCUS
                    </span>
                    <div className="font-mono text-xs text-[#E5E7EB] tracking-wide">
                      {t.skills}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <small className="font-mono text-[9px] tracking-widest text-[#9E9E9C] uppercase block font-semibold">
                      TARGET ROLES
                    </small>
                    <p className="text-sm text-[#C8C7C2] leading-relaxed font-sans font-normal">
                      {t.roles}
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <small className="font-mono text-[9px] tracking-widest text-[#9E9E9C] uppercase block font-semibold">
                      WHAT YOU WILL BUILD
                    </small>
                    <p className="text-sm text-[#E44B27] font-medium leading-relaxed">
                      {t.build}
                    </p>
                  </div>
                </div>

                {/* Right Actions */}
                <div className="lg:col-span-3 flex flex-col gap-3 justify-start pt-4 lg:pt-0">
                  <a
                    href={applyHref}
                    className="btn-primary w-full justify-center text-center"
                  >
                    <span>APPLY FOR THIS TRACK</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#programs-detail"
                    className="link-ghost-dark py-2 text-center justify-center"
                  >
                    <span>VIEW TRACK</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
