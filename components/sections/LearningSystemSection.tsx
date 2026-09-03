'use client'

import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

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
  return (
    <section id="programs" className="py-20 md:py-28 border-b border-[#E6E5E1] bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#E44B27]" />
            <span className="section-label text-[#E44B27]">
              THE LEARNING SYSTEM
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#0D0D0C] leading-[1.05] mb-4">
            One foundation. Three ways to build.
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B69] font-normal leading-relaxed">
            Independent paths — choose the one that matches where you&apos;re starting from.
          </p>
        </div>

        {/* Foundation Banner (AI Fundamentals - Free) */}
        <div className="mb-14 bg-[#0D0D0C] text-white p-8 md:p-10 border border-[#242422]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2.5">
                <span className="bg-[#E44B27] text-white px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-widest uppercase">
                  START HERE
                </span>
                <span className="font-mono text-xs text-[#9E9E9C] uppercase tracking-wider">
                  Open to everyone · No prerequisite
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif tracking-tight text-white">
                AI Fundamentals
              </h3>
              <p className="text-[#9E9E9C] text-sm max-w-xl font-normal leading-relaxed">
                Open to everyone · No prerequisite
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-left md:text-right">
                <div className="font-mono text-[10px] text-[#9E9E9C] uppercase tracking-widest">
                  TUITION
                </div>
                <strong className="text-3xl font-mono font-bold tracking-tight text-white block">
                  FREE
                </strong>
              </div>
              <a
                href="#programs"
                aria-label="View AI Fundamentals"
                className="w-11 h-11 bg-white text-[#0D0D0C] flex items-center justify-center hover:bg-[#E44B27] hover:text-white transition-colors"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Tracks - Editorial Row List */}
        <div className="border-t border-[#E6E5E1] divide-y divide-[#E6E5E1]">
          {tracks.map((t) => (
            <div
              key={t.no}
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start hover:bg-[#FAFAF9] px-4 -mx-4 transition-colors"
            >
              {/* Col 1: Track Number */}
              <div className="lg:col-span-1">
                <span className="font-mono text-sm font-bold text-[#E44B27]">
                  {t.no}
                </span>
              </div>

              {/* Col 2: Track Title & Audience */}
              <div className="lg:col-span-4 space-y-1.5">
                <div className="font-mono text-[10px] font-semibold text-[#6B6B69] uppercase tracking-wider">
                  {t.audience}
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#0D0D0C]">
                  {t.title}
                </h3>
              </div>

              {/* Col 3: Description */}
              <div className="lg:col-span-5">
                <p className="text-sm text-[#6B6B69] leading-relaxed font-normal">
                  {t.desc}
                </p>
              </div>

              {/* Col 4: Action */}
              <div className="lg:col-span-2 flex justify-start lg:justify-end items-center pt-2 lg:pt-0">
                <a
                  href="#programs-detail"
                  className="link-ghost"
                >
                  <span>VIEW TRACK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
