'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowRight, CornerDownRight, Sparkles } from 'lucide-react'

interface HeroSectionProps {
  applyHref: string
}

const WORDS = ["Don't", "just", "learn", "AI.", "Learn", "to", "build", "with", "it."]

export function HeroSection({ applyHref }: HeroSectionProps) {
  const pathwayStages = [
    { no: '01', title: 'Understand', desc: 'How modern AI works, in plain terms — and where it breaks.' },
    { no: '02', title: 'Use', desc: 'Apply AI to real work, deliberately rather than accidentally.' },
    { no: '03', title: 'Build', desc: 'Write code that talks to models, and ship something with it.' },
    { no: '04', title: 'Engineer', desc: 'Design, connect and run AI systems that hold up in production.' },
  ]

  const containerRef = useRef(null)
  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-40px' })
  const [activeStage, setActiveStage] = useState(0)

  return (
    <section 
      ref={containerRef}
      id="top" 
      className="relative min-h-[92vh] flex flex-col justify-between pt-16 md:pt-24 pb-12 overflow-hidden bg-[#F6F4EE]"
    >
      {/* Editorial Watermark / Spatial Grid Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D6D3C8] to-transparent" />
      <div className="absolute top-0 right-[22%] w-px h-full bg-[#D6D3C8]/40 hidden lg:block pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Top Meta Lineage */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 pb-12 border-b border-[#D6D3C8]">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E44B27] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E44B27]" />
            </span>
            <span className="font-mono text-xs font-bold text-[#111210] uppercase tracking-[0.2em]">
              Fundamentals to Production AI
            </span>
          </motion.div>

          <div className="flex items-center gap-6 font-mono text-[11px] text-[#6B6C65] tracking-widest uppercase">
            <span>Bengaluru · Live &amp; Online</span>
            <span className="w-1 h-1 rounded-full bg-[#D6D3C8]" />
            <span className="text-[#111210] font-semibold">2026 Cohorts</span>
          </div>
        </div>

        {/* Cinematic Headline Installation */}
        <div className="pt-12 md:pt-16 pb-14">
          <h1
            ref={headingRef}
            aria-label="Don't just learn AI. Learn to build with it."
            className="text-[clamp(3.4rem,8.8vw,8.4rem)] font-extrabold tracking-[-0.04em] leading-[0.92] text-[#111210] select-none"
          >
            {WORDS.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden mr-[0.2em] last:mr-0 align-top"
              >
                <motion.span
                  aria-hidden="true"
                  className={`inline-block ${
                    word === 'build' 
                      ? 'text-[#E44B27] italic font-serif font-normal pr-1' 
                      : ''
                  }`}
                  initial={{ y: '110%', rotate: 2 }}
                  animate={headingInView ? { y: 0, rotate: 0 } : { y: '110%', rotate: 2 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.05 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
        </div>

        {/* Narrative Split & Action Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.45 }}
            className="lg:col-span-7"
          >
            <p className="text-xl sm:text-2xl text-[#6B6C65] max-w-xl font-normal leading-[1.4] tracking-tight">
              GAPSO School of AI trains students and professionals to understand,
              build and ship real AI systems — from first principles to production.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.55 }}
            className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:justify-end"
          >
            <a href={applyHref} className="btn py-4 px-8 justify-center shadow-lg hover:shadow-xl hover:shadow-[#E44B27]/15">
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#programs" className="link py-3.5 px-6 justify-center rounded-full border border-[#D6D3C8] hover:border-[#111210] transition-colors">
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* ── Architectural 4-Stage Pathway Dock (Studio Artifact) ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl border border-[#D6D3C8] bg-[#ECE8DD] overflow-hidden shadow-sm"
        >
          {/* Header of Dock */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-[#D6D3C8] bg-[#ECE8DD]/80">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#E44B27]" />
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-[#111210] uppercase">
                The Learning Pathway
              </span>
            </div>
            <span className="font-mono text-[10px] text-[#E44B27] font-bold tracking-widest uppercase px-3 py-1 bg-white/60 rounded-full border border-[#D6D3C8]">
              4 Stages
            </span>
          </div>

          {/* Interactive Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#D6D3C8]">
            {pathwayStages.map((stage, idx) => {
              const isHovered = activeStage === idx
              return (
                <div
                  key={stage.no}
                  onMouseEnter={() => setActiveStage(idx)}
                  className={`p-6 sm:p-8 transition-all duration-300 relative cursor-default ${
                    isHovered ? 'bg-[#FAF8F3]' : 'hover:bg-[#E7E3D6]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#E44B27]">
                      {stage.no}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      isHovered ? 'bg-[#E44B27]' : 'bg-[#D6D3C8]'
                    }`} />
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-[#111210] mb-2 tracking-tight">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#6B6C65] leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Bottom Dock Ledger */}
          <div className="flex flex-wrap items-center justify-between gap-4 px-6 sm:px-8 py-3.5 border-t border-[#D6D3C8] bg-[#E7E3D6]/70 text-[10px] font-mono tracking-wider uppercase text-[#6B6C65]">
            <div className="flex items-center gap-6">
              <span>Bengaluru, India</span>
              <span className="w-1 h-1 rounded-full bg-[#D6D3C8]" />
              <span className="text-[#111210] font-bold">Live In-Person &amp; Online</span>
            </div>
            <div className="flex items-center gap-6">
              <span>Weekend Batches</span>
              <span className="w-1 h-1 rounded-full bg-[#D6D3C8]" />
              <span>Project-Driven</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
