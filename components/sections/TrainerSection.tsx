'use client'

import React from 'react'
import { ArrowUpRight } from 'lucide-react'

interface Props { imageUrl: string }

export function TrainerSection({ imageUrl }: Props) {
  const stats = [
    { value: '2,000+', label: 'Students & Professionals Taught' },
    { value: '5 yrs', label: 'Building & Shipping Software' },
    { value: '100%', label: 'Live Sessions — No Pre-recorded' },
  ]
  const links = [
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ]

  return (
    <section className="py-24 md:py-32 bg-[#111210] text-[#F6F4EE] border-b border-[#252724]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">

          {/* Portrait */}
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] overflow-hidden bg-[#191B19]">
              <img src={imageUrl} alt="Gowrish H B" className="w-full h-full object-cover grayscale" />
            </div>
            <p className="mt-3 font-mono text-[10px] text-[#8B8C84] tracking-widest uppercase">
              Gowrish H B · Bengaluru, 2026
            </p>
          </div>

          {/* Text */}
          <div className="lg:col-span-8">
            <p className="label mb-5">The Trainer</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-none mb-1">Gowrish H B</h2>
            <p className="font-mono text-xs text-[#E44B27] tracking-wider uppercase mb-10">Founder &amp; Chief Executive Officer</p>

            <div className="space-y-4 text-sm sm:text-base text-[#8B8C84] leading-relaxed mb-10">
              <p>Gowrish has been building and shipping software since 2021, and has taught AI and engineering to more than 2,000 students and IT professionals.</p>
              <p>He founded GAPSO AI to close something he had watched from both sides — as a builder taking on client work, and as an instructor in front of rooms full of capable people still waiting to be shown how the systems they studied are actually assembled.</p>
              <p>He teaches GAPSO&apos;s cohorts live himself, so every question is answered by the person who builds and ships these systems commercially.</p>
            </div>

            <div className="grid grid-cols-3 gap-8 py-8 border-y border-[#252724] mb-10">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-4xl lg:text-5xl text-white mb-1">{s.value}</div>
                  <p className="font-mono text-[9px] text-[#8B8C84] tracking-widest uppercase">{s.label}</p>
                </div>
              ))}
            </div>

            <blockquote className="pl-4 border-l border-[#E44B27] text-lg font-serif italic text-white/90 leading-relaxed mb-8">
              &ldquo;Everything I teach, I have shipped myself. It is a slower way to build a school, and the only honest one.&rdquo;
            </blockquote>

            <div className="flex flex-wrap gap-6 font-mono text-xs tracking-wider">
              <span className="text-[#E44B27] font-bold uppercase">Connect</span>
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-[#8B8C84] hover:text-white transition-colors flex items-center gap-1">
                  {l.label} <ArrowUpRight className="w-3 h-3 text-[#E44B27]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
