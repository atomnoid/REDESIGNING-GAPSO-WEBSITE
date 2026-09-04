'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    { badge: 'Capstone', title: 'RAG System', desc: "Answer questions over a body of documents the model was never trained on — and know when it shouldn't answer at all." },
    { badge: 'Track 01', title: 'AI Automation', desc: 'An automated workflow that processes documents, emails or data without human intervention at each step.' },
    { badge: 'Track 02', title: 'Deployed App', desc: 'A live application that calls a model API, handles state, and returns useful output to a real user.' },
    { badge: 'Track 03', title: 'MCP Tool Server', desc: 'A Model Context Protocol server exposing tools that a model can call to interact with external systems.' },
  ]

  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="py-24 md:py-36 border-b border-[#D6D3C8] bg-[#F6F4EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24" ref={headRef}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="label mb-5"
          >
            Project-Driven
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="text-[clamp(2.4rem,5.5vw,5rem)] font-extrabold tracking-tight text-[#111210] leading-[1.02] mb-6"
          >
            Something to open, run and explain.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base sm:text-lg text-[#6B6C65] font-normal leading-relaxed max-w-xl"
          >
            A certificate records that you attended. A project records what you can do — and lets you walk someone through it line by line. You get both.
          </motion.p>
        </div>

        {/* Engineering Blueprint Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 sm:p-10 border border-[#D6D3C8] bg-[#FAF8F3] hover:border-[#111210] hover:bg-white transition-all duration-300 rounded-3xl cursor-default flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ECE8DD] font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest border border-[#D6D3C8]">
                    {p.badge}
                  </span>
                  <span className="font-mono text-sm font-bold text-[#6B6C65] group-hover:text-[#111210] transition-colors">
                    [0{i + 1}]
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#111210] tracking-tight mb-4 group-hover:text-[#E44B27] transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm sm:text-base text-[#6B6C65] leading-relaxed font-normal mb-8">
                  {p.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-[#D6D3C8] flex items-center justify-between font-mono text-[11px] text-[#6B6C65] uppercase tracking-wider">
                <span>Production Deliverable</span>
                <span className="w-8 h-8 rounded-full border border-[#D6D3C8] group-hover:border-[#E44B27] group-hover:bg-[#E44B27] group-hover:text-white flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
