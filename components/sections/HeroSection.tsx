'use client'

import React, { useRef } from 'react'
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
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' })
  const panelRef = useRef(null)
  const panelInView = useInView(panelRef, { once: true, margin: '-60px' })

  return (
    <section id="top" className="relative overflow-hidden">
      {/* ── Giant headline ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-8"
        >
          <span className="w-1.5 h-1.5 bg-[#E44B27] rounded-full" />
          <span className="label">Fundamentals to Production AI</span>
        </motion.div>

        <h1
          ref={headingRef}
          aria-label="Don't just learn AI. Learn to build with it."
          className="text-[clamp(3rem,8vw,7.5rem)] font-extrabold tracking-tight leading-[0.95] text-[#111210] mb-10 overflow-hidden"
        >
          {WORDS.map((word, i) => (
            <span
              key={i}
              style={{ display: 'inline-block', overflow: 'hidden', marginRight: i < WORDS.length - 1 ? '0.22em' : 0 }}
            >
              <motion.span
                aria-hidden="true"
                style={{ display: 'inline-block' }}
                initial={{ y: '100%' }}
                animate={headingInView ? { y: 0 } : { y: '100%' }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.055,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* "build" gets accent colour */}
                {word === 'build' ? (
                  <span className="text-[#E44B27]">{word}</span>
                ) : word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Sub + CTAs row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-lg md:text-xl text-[#6B6C65] max-w-lg leading-relaxed font-normal"
          >
            GAPSO School of AI trains students and professionals to understand,
            build and ship real AI systems — from first principles to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 shrink-0"
          >
            <a href={applyHref} className="btn">
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#programs" className="link">
              <span>Explore Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* ── Featured pathway panel (Humaan showreel-style) ── */}
        <motion.div
          ref={panelRef}
          initial={{ opacity: 0, y: 32, scale: 0.985 }}
          animate={panelInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full border border-[#D6D3C8] bg-[#ECE8DD] overflow-hidden"
          style={{ borderRadius: 20 }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-[#D6D3C8]">
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
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
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

          {/* Bottom meta bar */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 px-6 sm:px-10 py-4 border-t border-[#D6D3C8]">
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
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-20">
        <div className="flex flex-wrap gap-3">
          {['50% Theory / 50% Practical', 'Weekend Batches', 'Project-Driven', 'Bengaluru · Live & Online'].map((pill) => (
            <span key={pill} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D6D3C8] font-mono text-[10px] text-[#6B6C65] uppercase tracking-widest bg-[#F6F4EE] hover:border-[#111210] hover:text-[#111210] transition-colors cursor-default">
              {pill.includes('50%') && <span className="w-1.5 h-1.5 bg-[#E44B27] rounded-full" />}
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
