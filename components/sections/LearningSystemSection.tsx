'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="programs" className="border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32">

        {/* Section header */}
        <div ref={headRef} className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="label mb-5"
          >
            The Learning System
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-[clamp(2.4rem,5.5vw,5rem)] font-extrabold tracking-tight text-[#111210] leading-[1.04] max-w-3xl mb-4"
          >
            One foundation. Three ways to build.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base sm:text-lg text-[#6B6C65] font-normal leading-relaxed max-w-xl"
          >
            Independent paths — choose the one that matches where you&apos;re starting from.
          </motion.p>
        </div>

        {/* Free foundation card — full bleed style */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mb-0 p-8 sm:p-12 bg-[#111210] text-white relative group overflow-hidden"
          style={{ borderRadius: '16px 16px 0 0' }}
        >
          {/* Subtle grain overlay */}
          <div className="absolute inset-0 opacity-[0.03]"
               style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#E44B27] text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-full">
                <span>Start Here</span>
                <span>·</span>
                <span className="opacity-85">Open to All</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-none">
                AI Fundamentals
              </h3>
              <p className="text-sm text-[rgba(246,244,238,0.6)] max-w-xl font-normal leading-relaxed">
                Nobody should pay to find out whether AI is for them. Everyone begins on the same free foundation course, then routes into the track that matches where they are starting from.
              </p>
            </div>
            <div className="flex items-center gap-8 sm:text-right">
              <div>
                <span className="font-mono text-[10px] text-[rgba(246,244,238,0.5)] uppercase tracking-widest block mb-1 font-semibold">
                  Tuition
                </span>
                <span className="text-5xl sm:text-6xl font-extrabold text-[#E44B27] font-mono tracking-tight">
                  FREE
                </span>
              </div>
              <a
                href="#programs-detail"
                className="w-14 h-14 bg-[#E44B27] text-white flex items-center justify-center hover:bg-[#CC3D1A] transition-all shrink-0 hover:scale-105 rounded-full"
                aria-label="Start AI Fundamentals"
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tracks — editorial numbered list */}
        <div className="border-t-0 border border-[#D6D3C8]" style={{ borderRadius: '0 0 16px 16px', overflow: 'hidden' }}>
          {tracks.map((t, idx) => (
            <motion.div
              key={t.no}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`py-10 px-8 sm:px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start hover:bg-[#ECE8DD]/60 transition-all duration-200 group cursor-default ${idx !== 0 ? 'border-t border-[#D6D3C8]' : ''}`}
            >
              <div className="lg:col-span-1">
                <span className="font-mono text-2xl font-bold text-[#E44B27] group-hover:scale-110 inline-block transition-transform origin-left">
                  {t.no}
                </span>
              </div>
              <div className="lg:col-span-4">
                <p className="font-mono text-[10px] font-semibold text-[#6B6C65] uppercase tracking-wider mb-2">
                  {t.audience}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111210] tracking-tight group-hover:text-[#E44B27] transition-colors leading-tight">
                  {t.title}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm text-[#6B6C65] leading-relaxed font-normal">
                  {t.desc}
                </p>
              </div>
              <div className="lg:col-span-2 flex lg:justify-end items-center">
                <a href="#programs-detail" className="link">
                  <span>View Track</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="pb-24 md:pb-32" />
      </div>
    </section>
  )
}
