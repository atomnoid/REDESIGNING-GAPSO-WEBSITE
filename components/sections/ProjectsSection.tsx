'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
    <section id="projects" className="py-24 md:py-32 border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-3xl mb-16" ref={headRef}>
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
            className="text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold tracking-tight text-[#111210] leading-[1.05] mb-4"
          >
            Something to open, run and explain.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-base sm:text-lg text-[#6B6C65] font-normal leading-relaxed"
          >
            A certificate records that you attended. A project records what you can do — and lets you walk someone through it line by line. You get both.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-7 sm:p-9 border border-[#D6D3C8] hover:border-[#111210] hover:bg-[#ECE8DD]/50 transition-all duration-300 rounded-2xl cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ECE8DD] font-mono text-[10px] font-bold text-[#E44B27] uppercase tracking-widest border border-[#D6D3C8]">
                  {p.badge}
                </span>
                <span className="font-mono text-xs font-bold text-[#D6D3C8] group-hover:text-[#E44B27] transition-colors">
                  0{i + 1}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111210] tracking-tight mb-3 group-hover:text-[#E44B27] transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-[#6B6C65] leading-relaxed font-normal">
                {p.desc}
              </p>
              <div className="mt-6 pt-4 border-t border-[#D6D3C8] flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-wider">Project Spec</span>
                <span className="font-mono text-[10px] text-[#E44B27] uppercase tracking-wider font-bold group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
