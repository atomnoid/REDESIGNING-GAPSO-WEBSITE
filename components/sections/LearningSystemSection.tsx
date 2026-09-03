'use client'

import React from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'

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
    <section id="programs" className="py-24 md:py-32 border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <p className="label mb-6">The Learning System</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#111210] leading-[1.05] mb-4 max-w-3xl">
          One foundation. Three ways to build.
        </h2>
        <p className="text-base sm:text-lg text-[#6B6C65] mb-16 max-w-2xl">
          Independent paths — choose the one that matches where you&apos;re starting from.
        </p>

        {/* Free foundation */}
        <div className="mb-12 pb-12 border-b border-[#D6D3C8]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#E44B27] uppercase block mb-2">
                Start Here · Free · Open to All
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#111210]">AI Fundamentals</h3>
            </div>
            <div className="font-serif text-4xl sm:text-5xl font-normal text-[#E44B27]">FREE</div>
          </div>
        </div>

        {/* Tracks */}
        <div className="divide-y divide-[#D6D3C8]">
          {tracks.map((t) => (
            <div key={t.no} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
              <div className="lg:col-span-1">
                <span className="font-mono text-xs font-bold text-[#E44B27]">{t.no}</span>
              </div>
              <div className="lg:col-span-4">
                <p className="font-mono text-[10px] font-semibold text-[#6B6C65] uppercase tracking-wider mb-1">{t.audience}</p>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#111210]">{t.title}</h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm text-[#6B6C65] leading-relaxed">{t.desc}</p>
              </div>
              <div className="lg:col-span-2 flex lg:justify-end items-center">
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
