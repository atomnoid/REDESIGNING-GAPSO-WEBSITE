'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export function AudienceAndOutcomesSection() {
  const audiences = [
    {
      no: '01',
      title: 'School Students',
      cohort: '11th · 12th',
      desc: 'Start before the field feels intimidating. Understanding early changes what you choose next.',
      entry: 'AI FUNDAMENTALS',
    },
    {
      no: '02',
      title: 'College Students',
      cohort: 'Diploma · BCA · BSc · BE · BTech · MCA',
      desc: 'Turn a degree into demonstrable ability, with projects you can actually walk someone through.',
      entry: 'AI FUNDAMENTALS → AI DEVELOPER FOUNDATIONS',
    },
    {
      no: '03',
      title: 'Working Professionals',
      cohort: 'Developers · Managers · HR · Marketing · Sales · Business owners · Teachers · Career switchers',
      desc: 'Add AI to the work you already do — or move toward building the systems themselves.',
      entry: 'AI PROFESSIONAL → AI SYSTEMS ENGINEERING',
    },
    {
      no: '04',
      title: 'Business Owners & Entrepreneurs',
      cohort: 'Founders · CEOs · Directors',
      desc: 'Learn to build workflows and AI pipelines that save thousands of hours across your team.',
      entry: 'AI PROFESSIONAL',
    },
  ]

  const outcomes = [
    { text: 'Understand how modern AI systems work', stages: '1, 2, 3, 4' },
    { text: 'Judge where AI helps — and where it doesn’t', stages: '1, 2, 3, 4' },
    { text: 'Use AI deliberately in professional work', stages: '2, 3, 4' },
    { text: 'Write code that calls and controls AI APIs', stages: '2, 3, 4' },
    { text: 'Build applications powered by LLMs', stages: '3, 4' },
    { text: 'Build retrieval-based systems over your own data', stages: '3, 4' },
    { text: 'Reason about agents, tools and multi-step workflows', stages: '3, 4' },
    { text: 'Understand what production AI actually requires', stages: '4' },
    { text: 'Ship projects you can explain line by line', stages: '4' },
  ]

  return (
    <>
      {/* Audience Section */}
      <section id="audience" className="py-24 md:py-32 bg-[#F6F4EE] border-b border-[#D8D5CA] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Head */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#E44B27]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#E44B27] uppercase">
                WHO IT&apos;S FOR
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121312] leading-[1.05] mb-4">
              Four ways in. The same path forward.
            </h2>
            <p className="text-base sm:text-lg text-[#6C6D67] font-normal leading-relaxed">
              Start where you are. What differs is the entry point, not what you&apos;re working toward.
            </p>
          </div>

          {/* 4 Audience Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D8D5CA] bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#D8D5CA]">
            {audiences.map((aud) => (
              <motion.div
                key={aud.no}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors group"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#E44B27] block mb-6">
                    {aud.no}
                  </span>

                  <h3 className="text-2xl font-serif text-[#121312] mb-2 group-hover:text-[#E44B27] transition-colors">
                    {aud.title}
                  </h3>

                  <b className="font-mono text-[10px] font-semibold text-[#6C6D67] tracking-wider uppercase block mb-4">
                    {aud.cohort}
                  </b>

                  <p className="text-sm text-[#6C6D67] font-normal leading-relaxed mb-6">
                    {aud.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#E5E2D8] mt-4">
                  <small className="font-mono text-[9px] text-[#9B9C94] tracking-widest uppercase block mb-1">
                    TYPICAL ENTRY
                  </small>
                  <strong className="font-mono text-xs text-[#E44B27] font-semibold block tracking-tight">
                    {aud.entry}
                  </strong>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-24 md:py-32 bg-[#F6F4EE] border-b border-[#D8D5CA] relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Head */}
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#E44B27]" />
              <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#E44B27] uppercase">
                OUTCOMES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121312] leading-[1.05] mb-4">
              What you&apos;ll actually be able to do.
            </h2>
            <p className="text-base sm:text-lg text-[#6C6D67] font-normal leading-relaxed">
              Capabilities, not promises — and the stage each one is developed in.
            </p>
          </div>

          {/* Outcomes Matrix */}
          <div className="max-w-4xl border-t border-[#D8D5CA] divide-y divide-[#D8D5CA]">
            {outcomes.map((item, idx) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 group hover:bg-[#FAF9F5] px-3 -mx-3 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-bold text-[#E44B27]">
                    0{idx + 1}
                  </span>
                  <p className="text-base sm:text-lg text-[#121312] font-normal group-hover:text-[#E44B27] transition-colors">
                    {item.text}
                  </p>
                </div>

                <small className="font-mono text-[11px] text-[#6C6D67] whitespace-nowrap pl-8 sm:pl-0">
                  — developed in stage {item.stages}
                </small>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
