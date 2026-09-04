'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

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

  const headingRef = useRef(null)
  const headingInView = useInView(headingRef, { once: true, margin: '-40px' })
  const panelRef = useRef(null)
  const panelInView = useInView(panelRef, { once: true, margin: '-60px' })

  return (
    <section id="top" className="relative overflow-hidden bg-[#F6F4EE]">
      {/* ── Headline & Intro Area (Moderate spacing, perfectly balanced) ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 md:pt-12 pb-14">
        
        {/* Top category label line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="w-1.5 h-1.5 bg-[#E44B27] rounded-full" />
          <span className="label">Fundamentals to Production AI</span>
        </motion.div>

        {/* Giant Headline — clean, robust, full "build" visibility without clipped serifs */}
        <h1
          ref={headingRef}
          aria-label="Don't just learn AI. Learn to build with it."
          className="text-[clamp(3rem,8vw,7.6rem)] font-extrabold tracking-tight leading-[0.96] text-[#111210] mb-8 overflow-hidden"
        >
          {WORDS.map((word, i) => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                marginRight: i < WORDS.length - 1 ? '0.22em' : 0,
                verticalAlign: 'top',
              }}
            >
              <motion.span
                aria-hidden="true"
                style={{ display: 'inline-block' }}
                initial={{ y: '100%' }}
                animate={headingInView ? { y: 0 } : { y: '100%' }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word === 'build' ? (
                  <span className="text-[#E44B27]">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subtitle + Action buttons row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-12">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#6B6C65] max-w-xl leading-relaxed font-normal"
          >
            GAPSO School of AI trains students and professionals to understand,
            build and ship real AI systems — from first principles to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 shrink-0"
          >
            <a href={applyHref} className="btn shadow-sm hover:shadow-md">
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#programs" className="link">
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* ── Featured pathway panel (Humaan showreel-style dock) ── */}
        <motion.div
          ref={panelRef}
          initial={{ opacity: 0, y: 24, scale: 0.99 }}
          animate={panelInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full border border-[#D6D3C8] bg-[#ECE8DD] overflow-hidden rounded-2xl shadow-sm"
        >
          {/* Top dock bar */}
          <div className="flex items-center justify-between px-6 sm:px-10 py-4 border-b border-[#D6D3C8] bg-[#ECE8DD]/90">
            <span className="font-mono text-[11px] font-bold tracking-[0.18em] text-[#111210] uppercase">
              The Learning Pathway
            </span>
            <span className="font-mono text-[11px] text-[#E44B27] tracking-[0.18em] uppercase font-bold">
              4 Stages
            </span>
          </div>

          {/* Stages grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y divide-[#D6D3C8] md:divide-y-0">
            {pathwayStages.map((stage, idx) => (
              <motion.div
                key={stage.no}
                initial={{ opacity: 0, y: 10 }}
                animate={panelInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + idx * 0.08 }}
                className="px-6 sm:px-8 py-7 group hover:bg-[#E8E4D8] transition-colors"
              >
                <span className="font-mono text-[10px] font-bold text-[#E44B27] tracking-widest block mb-3">
                  {stage.no}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111210] tracking-tight mb-2 group-hover:text-[#E44B27] transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#6B6C65] leading-relaxed font-normal">
                  {stage.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom dock meta bar */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 px-6 sm:px-10 py-3.5 border-t border-[#D6D3C8] bg-[#ECE8DD]/60">
            <span className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-widest">
              Bengaluru, India
            </span>
            <span className="w-1 h-1 bg-[#D6D3C8] rounded-full hidden sm:block" />
            <span className="font-mono text-[10px] text-[#111210] font-bold uppercase tracking-widest">
              Live In-Person &amp; Online
            </span>
            <span className="w-1 h-1 bg-[#D6D3C8] rounded-full hidden sm:block" />
            <span className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-widest">
              Weekend Batches
            </span>
            <span className="w-1 h-1 bg-[#D6D3C8] rounded-full hidden sm:block" />
            <span className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-widest">
              Project-Driven
            </span>
          </div>
        </motion.div>
      </div>

      {/* Meta pill strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="flex flex-wrap gap-3">
          {['50% Theory / 50% Practical', 'Weekend Batches', 'Project-Driven', 'Bengaluru · Live & Online'].map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6D3C8] font-mono text-[10px] text-[#6B6C65] uppercase tracking-widest bg-[#F6F4EE] hover:border-[#111210] hover:text-[#111210] transition-colors cursor-default"
            >
              {pill.includes('50%') && <span className="w-1.5 h-1.5 bg-[#E44B27] rounded-full" />}
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
