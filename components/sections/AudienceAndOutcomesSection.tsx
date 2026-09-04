'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function AudienceAndOutcomesSection() {
  const audiences = [
    { no: '01', title: 'Professionals Outside IT', cohort: 'Working Adults', desc: 'Decision-makers, managers and operators who work with documents, data and deadlines. The objective is leverage — becoming the person who can make AI produce reliable, repeatable output.', entry: 'AI Professional Track' },
    { no: '02', title: 'College & Senior School Students', cohort: 'Students', desc: 'Students who intend to build. This track installs the engineering fundamentals that every AI role — however senior — is eventually built on top of.', entry: 'AI Developer Foundations' },
    { no: '03', title: 'Working IT Professionals', cohort: 'Engineers', desc: 'Engineers who can already code and now need the architecture — retrieval, memory, tool use and multi-agent coordination in a system that survives production traffic.', entry: 'AI Engineering Program' },
    { no: '04', title: 'Not Sure Yet', cohort: 'Anyone', desc: 'Start with AI Fundamentals, which is free and has no prerequisites. Everything else routes from there once you know where you are.', entry: 'AI Fundamentals (Free)' },
  ]

  const outcomes = [
    { text: 'Explain how a large language model generates a response', stages: '1' },
    { text: 'Build a prompt that produces consistent, reliable output', stages: '1–2' },
    { text: 'Automate a real workflow using an AI API', stages: '2' },
    { text: 'Write and deploy code that calls a model', stages: '3' },
    { text: 'Build a retrieval-augmented generation system from scratch', stages: '4' },
    { text: 'Design a multi-agent system with memory and tool use', stages: '4' },
    { text: 'Review, debug and explain someone else\'s AI system', stages: '3–4' },
  ]

  const headRef1 = useRef(null)
  const headInView1 = useInView(headRef1, { once: true, margin: '-60px' })
  const headRef2 = useRef(null)
  const headInView2 = useInView(headRef2, { once: true, margin: '-60px' })

  return (
    <>
      {/* ── Who It's For ── */}
      <section id="audience" className="py-24 md:py-32 border-b border-[#D6D3C8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16" ref={headRef1}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={headInView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="label mb-5"
            >
              Who It&apos;s For
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headInView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight text-[#111210] leading-[1.05] mb-4"
            >
              Four ways in. The same path forward.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headInView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base sm:text-lg text-[#6B6C65] font-normal leading-relaxed"
            >
              Start where you are. What differs is the entry point, not what you&apos;re working toward.
            </motion.p>
          </div>

          <div className="divide-y divide-[#D6D3C8] border-t border-[#D6D3C8]">
            {audiences.map((a, i) => (
              <motion.div
                key={a.no}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start hover:bg-[#ECE8DD]/40 px-4 -mx-4 transition-colors group cursor-default"
              >
                <div className="lg:col-span-1">
                  <span className="font-mono text-sm font-bold text-[#E44B27]">{a.no}</span>
                </div>
                <div className="lg:col-span-4">
                  <p className="font-mono text-[10px] font-semibold text-[#6B6C65] uppercase tracking-wider mb-2">{a.cohort}</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#111210] tracking-tight group-hover:text-[#E44B27] transition-colors leading-tight">{a.title}</h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-sm text-[#6B6C65] leading-relaxed font-normal">{a.desc}</p>
                </div>
                <div className="lg:col-span-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ECE8DD] font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-wider border border-[#D6D3C8]">
                    {a.entry}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section id="outcomes" className="py-24 md:py-32 border-b border-[#D6D3C8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16" ref={headRef2}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={headInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="label mb-5"
            >
              Outcomes
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.08 }}
              className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight text-[#111210] leading-[1.05] mb-4"
            >
              What you&apos;ll actually be able to do.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="text-base sm:text-lg text-[#6B6C65] font-normal leading-relaxed"
            >
              Capabilities, not promises.
            </motion.p>
          </div>

          <div className="max-w-4xl divide-y divide-[#D6D3C8] border-t border-[#D6D3C8]">
            {outcomes.map((o, i) => (
              <motion.div
                key={o.text}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="py-5 flex items-baseline justify-between gap-6 hover:bg-[#ECE8DD]/40 px-3 -mx-3 transition-colors group cursor-default"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-bold text-[#E44B27] shrink-0">0{i + 1}</span>
                  <p className="text-base sm:text-lg text-[#111210] font-normal group-hover:text-[#E44B27] transition-colors">{o.text}</p>
                </div>
                <span className="font-mono text-[10px] text-[#6B6C65] shrink-0 uppercase tracking-wider font-semibold px-2.5 py-1 bg-[#ECE8DD] rounded-full border border-[#D6D3C8] whitespace-nowrap">
                  Stage {o.stages}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
