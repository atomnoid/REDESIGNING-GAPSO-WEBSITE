'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function TrainerSection({ imageUrl }: { imageUrl: string }) {
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

  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <section className="py-24 md:py-32 bg-[#111210] text-[#F6F4EE] border-b border-[#252724] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={sectionRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">

          {/* Portrait */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] overflow-hidden bg-[#191B19] rounded-2xl">
              <img
                src={imageUrl}
                alt="Gowrish H B"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <p className="mt-3 font-mono text-[10px] text-[rgba(246,244,238,0.35)] tracking-widest uppercase">
              Gowrish H B · Bengaluru, 2026
            </p>
          </motion.div>

          {/* Text */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label mb-4">The Trainer</p>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none mb-2">
              Gowrish H B
            </h2>
            <p className="font-mono text-xs text-[#E44B27] tracking-wider uppercase mb-10 font-bold">
              Founder &amp; Chief Executive Officer
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[rgba(246,244,238,0.6)] leading-relaxed mb-12 font-normal">
              <p>Gowrish has been building and shipping software since 2021, and has taught AI and engineering to more than 2,000 students and IT professionals.</p>
              <p>He founded GAPSO AI to close something he had watched from both sides — as a builder taking on client work, and as an instructor in front of rooms full of capable people still waiting to be shown how the systems they studied are actually assembled.</p>
              <p>He teaches GAPSO&apos;s cohorts live himself, so every question is answered by the person who builds and ships these systems commercially.</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-[#252724] mb-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div className="font-bold text-3xl lg:text-5xl text-white mb-1 font-mono tracking-tight">
                    {s.value}
                  </div>
                  <p className="font-mono text-[9px] text-[rgba(246,244,238,0.4)] tracking-widest uppercase leading-relaxed">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="pl-5 border-l-2 border-[#E44B27] text-lg sm:text-xl font-medium text-white/90 leading-relaxed mb-10 italic">
              &ldquo;Everything I teach, I have shipped myself. It is a slower way to build a school, and the only honest one.&rdquo;
            </blockquote>

            {/* Links */}
            <div className="flex flex-wrap gap-6 font-mono text-xs tracking-wider">
              <span className="text-[#E44B27] font-bold uppercase">Connect</span>
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-[rgba(246,244,238,0.45)] hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  {l.label}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#E44B27]">↗</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
