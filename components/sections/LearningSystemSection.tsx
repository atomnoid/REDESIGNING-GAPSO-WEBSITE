'use client'

import React from 'react'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'

export interface TrackData {
  no: string
  audience: string
  title: string
  desc: string
  skills: string
  roles: string
  build: string
}

interface Props { tracks: TrackData[] }

export function LearningSystemSection({ tracks }: Props) {
  return (
    <section id="programs" className="py-24 md:py-32 border-b border-[#D6D3C8] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-3xl mb-16">
          <p className="label mb-4">The Learning System</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111210] leading-[1.06] mb-4">
            One foundation. Three ways to build.
          </h2>
          <p className="text-base sm:text-lg text-[#6B6C65] font-normal leading-relaxed">
            Independent paths — choose the one that matches where you&apos;re starting from.
          </p>
        </div>

        {/* Free Foundation Showcase Card - Visually Engaging */}
        <div className="mb-14 p-8 sm:p-10 bg-gradient-to-r from-[#ECE8DD] to-[#F2EFE8] border border-[#BCB8AC] relative group hover:border-[#111210] transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-[#E44B27] text-white font-mono text-[10px] font-bold tracking-widest uppercase">
                <span>START HERE</span>
                <span>·</span>
                <span className="font-normal opacity-90">OPEN TO ALL</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#111210] tracking-tight">
                AI Fundamentals
              </h3>
              <p className="text-sm text-[#6B6C65] max-w-xl font-normal leading-relaxed">
                Nobody should pay to find out whether AI is for them. Everyone begins on the same free foundation course, then routes into the track that matches where they are starting from.
              </p>
            </div>
            <div className="flex items-center gap-6 sm:text-right">
              <div>
                <span className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-widest block mb-1 font-semibold">
                  TUITION
                </span>
                <span className="text-4xl sm:text-5xl font-extrabold text-[#E44B27] font-mono tracking-tight">
                  FREE
                </span>
              </div>
              <a
                href="#programs-detail"
                className="w-12 h-12 bg-[#111210] text-white flex items-center justify-center hover:bg-[#E44B27] transition-all group-hover:scale-105 shrink-0"
                aria-label="Start AI Fundamentals"
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Tracks List with tactile hover and bold sans typography */}
        <div className="divide-y divide-[#D6D3C8] border-t border-[#D6D3C8]">
          {tracks.map((t) => (
            <div 
              key={t.no} 
              className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start hover:bg-[#ECE8DD]/40 px-4 -mx-4 transition-all duration-200 group"
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-sm font-bold text-[#E44B27] group-hover:translate-x-1 inline-block transition-transform">
                  {t.no}
                </span>
              </div>
              <div className="lg:col-span-4">
                <p className="font-mono text-[10px] font-semibold text-[#6B6C65] uppercase tracking-wider mb-1.5">
                  {t.audience}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111210] tracking-tight group-hover:text-[#E44B27] transition-colors">
                  {t.title}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm text-[#6B6C65] leading-relaxed font-normal">
                  {t.desc}
                </p>
              </div>
              <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                <a href="#programs-detail" className="link">
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

