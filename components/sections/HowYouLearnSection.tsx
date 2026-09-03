'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function HowYouLearnSection() {
  const steps = [
    { no: '01', title: 'Concept', desc: 'The idea, and the reason it exists.' },
    { no: '02', title: 'Guided Lab', desc: 'Run it yourself, with someone watching.' },
    { no: '03', title: 'Assignment', desc: 'Apply it without the guardrails.' },
    { no: '04', title: 'Project', desc: 'Build something that has to work.' },
    { no: '05', title: 'Review', desc: 'Get told what to fix, then fix it.' },
  ]

  const weekendBullets = [
    'Weekend schedule · Batches that fit around the week.',
    'Theory sessions · Concepts, first principles, context.',
    'Guided labs · Hands on keyboard, same session.',
    'Assignments · Work you complete on your own.',
    'Q&A · Open questions, no wrong ones.',
    'Office hours · Time set aside for being stuck.',
    'Project reviews · Your work, read and critiqued.',
  ]

  return (
    <section className="py-24 md:py-32 bg-[#121312] text-[#F6F4EE] border-b border-[#2B2D2B] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#E44B27]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#E44B27] uppercase">
              HOW YOU LEARN
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.05] mb-4">
            Every concept ends in something you can build.
          </h2>
          <p className="text-base sm:text-lg text-[#9B9C94] font-normal leading-relaxed">
            Sessions don&apos;t finish with a summary slide. They finish with something running on your machine that didn&apos;t exist that morning.
          </p>
        </div>

        {/* 5 Steps Pipeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-[#2B2D2B] mb-20">
          {steps.map((step, idx) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 border-b border-r border-[#2B2D2B] bg-[#161816] hover:bg-[#1E201E] transition-colors relative flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#E44B27] block mb-6">
                  {step.no}
                </span>
                <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#E44B27] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#9B9C94] font-normal leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#2B2D2B] flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#6C6D67] uppercase tracking-widest">
                  STEP {step.no}
                </span>
                {idx < 4 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#3A3D3A] group-hover:text-[#E44B27] transition-colors" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* What a Weekend Looks Like Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1C1E1C] border border-[#2B2D2B] p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[10px] tracking-widest text-[#E44B27] uppercase font-semibold">
              THEN AGAIN — ONE LEVEL DEEPER
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-white mb-8">
            WHAT A WEEKEND LOOKS LIKE
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {weekendBullets.map((item, i) => (
              <div
                key={i}
                className="p-4 bg-[#141614] border border-[#2B2D2B] flex items-start gap-3 hover:border-[#E44B27]/40 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E44B27] mt-2 shrink-0" />
                <span className="text-xs sm:text-sm text-[#C2C4BC] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
