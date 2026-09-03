'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Database, FileText, Cpu, ArrowRight, Layers, Bot, Workflow } from 'lucide-react'

export function ProjectsSection() {
  const [activePipelineStep, setActivePipelineStep] = useState<number | null>(null)

  const pipelineSteps = [
    'ARCHITECTURE',
    'DOCUMENTS',
    'CHUNKING',
    'EMBEDDINGS',
    'VECTOR STORE',
    'RETRIEVAL',
    'ANSWER',
  ]

  const projectList = [
    {
      title: 'AI Application',
      desc: 'A real interface with a model behind it.',
      badge: 'FRONTEND + LLM',
    },
    {
      title: 'AI Agent',
      desc: 'A goal, a set of tools, and a loop that decides.',
      badge: 'TOOL USE & LOOPS',
    },
    {
      title: 'Workflow Automation',
      desc: 'Work that used to be manual, now triggered and traced.',
      badge: 'PIPELINES & WEBHOOKS',
    },
    {
      title: 'Production AI System',
      desc: 'The part most tutorials skip: running it after it works once.',
      badge: 'EVALS & OBSERVABILITY',
    },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#F6F4EE] border-b border-[#D8D5CA] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#E44B27]" />
            <span className="font-mono text-[11px] font-semibold tracking-[0.14em] text-[#E44B27] uppercase">
              PROJECT-DRIVEN
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#121312] leading-[1.05] mb-4">
            Something to open, run and explain.
          </h2>
          <p className="text-base sm:text-lg text-[#6C6D67] font-normal leading-relaxed">
            A certificate records that you attended. A project records what you can do — and lets you walk someone through it line by line. You get both.
          </p>
        </div>

        {/* Featured Project Showcase: RAG System */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-[#ECE8DD] border border-[#BCB8AC] p-8 sm:p-12 shadow-[6px_6px_0px_#121312] relative overflow-hidden"
        >
          <div className="flex items-center justify-between font-mono text-xs tracking-widest text-[#E44B27] font-semibold uppercase mb-4">
            <span>FEATURED CAPSTONE</span>
            <span>RETRIEVAL</span>
          </div>

          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#121312] mb-4">
            RAG System
          </h3>

          <p className="text-base sm:text-lg text-[#6C6D67] max-w-2xl font-normal leading-relaxed mb-8">
            Answer questions over a body of documents the model was never trained on — and know when it shouldn’t answer at all.
          </p>

          {/* Interactive RAG Pipeline visualization */}
          <div className="pt-6 border-t border-[#D8D5CA]">
            <div className="font-mono text-[10px] text-[#6C6D67] uppercase tracking-widest mb-4">
              PIPELINE ARCHITECTURE
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {pipelineSteps.map((step, idx) => {
                const isActive = activePipelineStep === idx

                return (
                  <React.Fragment key={step}>
                    <button
                      onClick={() => setActivePipelineStep(isActive ? null : idx)}
                      onMouseEnter={() => setActivePipelineStep(idx)}
                      className={`px-3 py-2 border font-mono text-[10px] sm:text-[11px] font-medium tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                        isActive
                          ? 'bg-[#E44B27] text-white border-[#E44B27] shadow-sm'
                          : 'bg-white text-[#121312] border-[#D8D5CA] hover:border-[#121312]'
                      }`}
                    >
                      {step}
                    </button>
                    {idx < pipelineSteps.length - 1 && (
                      <span className="text-[#9B9C94] font-mono text-xs">·</span>
                    )}
                  </React.Fragment>
                )
              })}
            </div>

            <div className="mt-4 text-xs font-mono text-[#6C6D67]">
              ARCHITECTURE · DOCUMENTS · CHUNKING · EMBEDDINGS · VECTOR STORE · RETRIEVAL · ANSWER
            </div>
          </div>
        </motion.div>

        {/* 4 Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D8D5CA] bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#D8D5CA]">
          {projectList.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 flex flex-col justify-between hover:bg-[#FAF9F5] transition-colors group"
            >
              <div>
                <span className="font-mono text-[9px] font-semibold text-[#E44B27] tracking-wider uppercase block mb-4">
                  0{idx + 1} / {p.badge}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif text-[#121312] mb-3 group-hover:text-[#E44B27] transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm text-[#6C6D67] font-normal leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E5E2D8] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#9B9C94] uppercase tracking-wider">
                  PROJECT SPEC
                </span>
                <ArrowRight className="w-4 h-4 text-[#BCB8AC] group-hover:text-[#E44B27] group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
