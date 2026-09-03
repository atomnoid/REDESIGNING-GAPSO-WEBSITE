'use client'

import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { TrackData } from './LearningSystemSection'

interface Props {
  tracks: TrackData[]
  applyHref: string
}

export function ProgramsDetailSection({ tracks, applyHref }: Props) {
  return (
    <section id="programs-detail" className="py-24 md:py-32 bg-[#111210] text-[#F6F4EE] border-b border-[#252724] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-3xl mb-16">
          <p className="label mb-4">Programs</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-4">
            Choose your entry point.
          </h2>
          <p className="text-base sm:text-lg text-[#8B8C84] font-normal leading-relaxed">
            Start free. Then choose the track designed for where you are.
          </p>
        </div>

        {/* Free card */}
        <div className="p-8 sm:p-12 mb-16 bg-[#181A18] border border-[#252724]">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-2">
                Free Entry Program · Open to All
              </p>
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                AI Fundamentals
              </h3>
              <p className="font-mono text-xs text-[#8B8C84] uppercase tracking-wider">
                No prerequisites
              </p>
            </div>
            <div className="sm:text-right">
              <div className="font-mono font-bold text-5xl sm:text-6xl text-[#E44B27] mb-4 tracking-tight">
                FREE
              </div>
              <a href={applyHref} className="btn">
                <span>Start Here</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="mt-6 pt-6 border-t border-[#252724] text-sm sm:text-base text-[#8B8C84] max-w-2xl font-normal leading-relaxed">
            Nobody should pay to find out whether AI is for them. Everyone begins on the same free foundation course, then routes into the track that matches where they are starting from.
          </p>
        </div>

        {/* Specialist Tracks */}
        <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-8">
          Specialist Tracks
        </p>

        <div className="divide-y divide-[#252724] border-t border-[#252724]">
          {tracks.map((t) => (
            <div key={t.no} className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group">
              <div className="lg:col-span-1">
                <span className="font-mono text-xs font-bold text-[#E44B27]">Track {t.no}</span>
              </div>
              <div className="lg:col-span-4">
                <p className="font-mono text-[10px] text-[#8B8C84] uppercase tracking-wider mb-1.5">
                  {t.audience}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight group-hover:text-[#E44B27] transition-colors">
                  {t.title}
                </h3>
                <p className="text-sm text-[#8B8C84] leading-relaxed font-normal">
                  {t.desc}
                </p>
              </div>
              <div className="lg:col-span-4 space-y-4">
                <div className="p-4 bg-[#111210] border border-[#252724]">
                  <p className="font-mono text-[9px] text-[#E44B27] uppercase tracking-widest font-bold mb-1">
                    Curriculum Focus
                  </p>
                  <p className="font-mono text-xs text-[#C8C5BA] leading-relaxed">
                    {t.skills}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-[#8B8C84] uppercase tracking-widest font-bold mb-1">
                    Target Roles
                  </p>
                  <p className="text-sm text-[#8B8C84] font-normal">
                    {t.roles}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-[#8B8C84] uppercase tracking-widest font-bold mb-1">
                    What You Will Build
                  </p>
                  <p className="text-sm text-[#E44B27] font-semibold">
                    {t.build}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-3 flex flex-col gap-3 lg:items-end">
                <a href={applyHref} className="btn w-full sm:w-auto justify-center">
                  <span>Apply For Track</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#programs-detail" className="link-dark">
                  <span>View Track</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

