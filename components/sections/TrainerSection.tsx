'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface TrainerSectionProps {
  imageUrl: string
}

export function TrainerSection({ imageUrl }: TrainerSectionProps) {
  const stats = [
    { value: '2,000+', label: 'LEARNERS TAUGHT' },
    { value: '2021', label: 'IN INDUSTRY SINCE' },
    { value: '03', label: 'SPECIALIST TRACKS' },
  ]

  const socialLinks = [
    { label: 'LinkedIn', href: '#community' },
    { label: 'GitHub', href: '#community' },
    { label: 'Instagram', href: '#community' },
    { label: 'Email', href: '#community' },
  ]

  return (
    <section id="why" className="py-24 md:py-32 bg-[#0D0D0C] text-[#F5F5F3] border-b border-[#242422] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-5">
            <div className="max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#161614] border border-[#242422]">
                <img
                  src={imageUrl}
                  alt="Gowrish H B"
                  className="w-full h-full object-cover object-center grayscale contrast-105"
                />
              </div>

              <div className="mt-4 flex items-center justify-between font-mono text-[10px] text-[#9E9E9C] tracking-widest uppercase">
                <span>THE TRAINER / 2026</span>
                <span className="text-[#E44B27]">LIVE IN-PERSON &amp; ONLINE</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#E44B27]" />
              <span className="section-label text-[#E44B27]">
                THE TRAINER
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-none mb-2">
              Gowrish H B
            </h2>
            <p className="text-sm font-mono text-[#E44B27] tracking-wider uppercase mb-8">
              Founder &amp; Chief Executive Officer
            </p>

            {/* Editorial Bios */}
            <div className="space-y-4 text-sm sm:text-base text-[#9E9E9C] font-normal leading-relaxed mb-8">
              <p>
                Gowrish has been building and shipping software since 2021, and has taught AI and engineering to more than 2,000 students and IT professionals.
              </p>
              <p>
                He founded GAPSO AI to close something he had watched from both sides — as a builder taking on client work, and as an instructor in front of rooms full of capable people still waiting to be shown how the systems they studied are actually assembled.
              </p>
              <p>
                He teaches GAPSO’s cohorts live himself, so every question is answered by the person who builds and ships these systems commercially.
              </p>
            </div>

            {/* Stat Row */}
            <div className="grid grid-cols-3 gap-6 py-6 border-y border-[#242422] mb-8">
              {stats.map((s, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                    {s.value}
                  </div>
                  <div className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#9E9E9C] uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Blockquote */}
            <blockquote className="relative pl-5 border-l border-[#E44B27] text-base sm:text-lg font-serif italic text-white/95 leading-relaxed mb-8">
              “Everything I teach, I have shipped myself. It is a slower way to build a school, and the only honest one.”
            </blockquote>

            {/* Social Connect Links */}
            <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs tracking-wider">
              <span className="text-[#E44B27] font-semibold tracking-widest uppercase">
                CONNECT
              </span>
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#9E9E9C] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#E44B27]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
