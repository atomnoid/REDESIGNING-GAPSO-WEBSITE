'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface Props { applyHref: string }

export function FinalCtaAndFooter({ applyHref }: Props) {
  return (
    <>
      {/* ── CTA Section ── */}
      <section className="relative py-32 md:py-48 bg-[#111210] text-white overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 pointer-events-none"
             style={{
               backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(228,75,39,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(228,75,39,0.05) 0%, transparent 50%)'
             }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="label mb-6"
          >
            Ready
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="text-[clamp(4rem,12vw,11rem)] font-extrabold tracking-tight text-white leading-[0.88] mb-10"
          >
            Start at{' '}
            <span className="text-[#E44B27]">01.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="text-lg sm:text-xl text-[rgba(246,244,238,0.55)] max-w-xl mb-14 font-normal leading-relaxed"
          >
            AI Fundamentals is free. Begin there, or tell us you&apos;re not sure yet and we&apos;ll work it out together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="flex flex-wrap items-center gap-5"
          >
            <a href={applyHref} className="btn py-3.5 px-8">
              <span>Apply Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a href="#programs" className="link-dark">
              <span>Explore Programs</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="blog" className="bg-[#0D0E0C] text-[#F6F4EE] border-t border-[#1A1C1A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">

          {/* Top: logo + nav cols */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-[#1A1C1A]">
            <div className="lg:col-span-4">
              <a href="#top" className="flex items-baseline gap-2 mb-5 group w-fit">
                <span className="font-extrabold text-2xl text-white tracking-tight group-hover:text-[#E44B27] transition-colors">GAPSO</span>
                <span className="font-mono text-[10px] text-[rgba(246,244,238,0.35)] uppercase tracking-widest">School of AI</span>
              </a>
              <p className="text-sm text-[rgba(246,244,238,0.45)] max-w-xs leading-relaxed font-normal">
                AI education built around understanding and building — structured programs, small batches, and work you can explain.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
              {[
                {
                  label: 'Programs', links: [
                    { text: 'AI Fundamentals', href: '#programs' },
                    { text: 'AI Professional', href: '#programs-detail' },
                    { text: 'AI Developer Foundations', href: '#programs-detail' },
                    { text: 'AI Engineering Program', href: '#programs-detail' },
                  ]
                },
                {
                  label: 'Learning', links: [
                    { text: 'Learning Journey', href: '#learning' },
                    { text: 'How You Learn', href: '#learning' },
                    { text: 'Projects', href: '#projects' },
                    { text: 'Outcomes', href: '#outcomes' },
                  ]
                },
                {
                  label: 'School', links: [
                    { text: 'Why GAPSO', href: '#why' },
                    { text: "Who it's for", href: '#audience' },
                    { text: 'Community', href: '#community' },
                    { text: 'Apply', href: applyHref },
                  ]
                },
              ].map((col) => (
                <div key={col.label}>
                  <p className="font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest mb-5">
                    {col.label}
                  </p>
                  <div className="flex flex-col gap-3">
                    {col.links.map((l) => (
                      <a key={l.text} href={l.href} className="text-[rgba(246,244,238,0.45)] hover:text-white transition-colors">
                        {l.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-widest">
            <span className="text-[rgba(246,244,238,0.25)]">© 2026 GAPSO School of AI</span>
            <span className="text-[#E44B27] font-bold">Learn by Building</span>
          </div>
        </div>
      </footer>
    </>
  )
}
