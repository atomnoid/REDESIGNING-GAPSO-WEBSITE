'use client'

import React from 'react'
import { ArrowRight, Code2, Database, Cpu, Workflow } from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    { badge: 'Capstone', title: 'RAG System', desc: 'Answer questions over a body of documents the model was never trained on — and know when it shouldn\'t answer at all.' },
    { badge: 'Track 01', title: 'AI Automation', desc: 'An automated workflow that processes documents, emails or data without human intervention at each step.' },
    { badge: 'Track 02', title: 'Deployed App', desc: 'A live application that calls a model API, handles state, and returns useful output to a real user.' },
    { badge: 'Track 03', title: 'MCP Tool Server', desc: 'A Model Context Protocol server exposing tools that a model can call to interact with external systems.' },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[#D6D3C8] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="max-w-3xl mb-16">
          <p className="label mb-4">Project-Driven</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#111210] leading-[1.06] mb-4">
            Something to open, run and explain.
          </h2>
          <p className="text-base sm:text-lg text-[#6B6C65] font-normal leading-relaxed">
            A certificate records that you attended. A project records what you can do — and lets you walk someone through it line by line. You get both.
          </p>
        </div>

        <div className="divide-y divide-[#D6D3C8] border-t border-[#D6D3C8]">
          {projects.map((p, i) => (
            <div key={p.title} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start hover:bg-[#ECE8DD]/30 px-4 -mx-4 transition-colors">
              <div className="lg:col-span-1">
                <span className="font-mono text-xs font-bold text-[#E44B27]">0{i + 1}</span>
              </div>
              <div className="lg:col-span-4">
                <p className="font-mono text-[10px] font-semibold text-[#6B6C65] uppercase tracking-wider mb-1">{p.badge}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#111210] tracking-tight">{p.title}</h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm text-[#6B6C65] leading-relaxed font-normal">{p.desc}</p>
              </div>
              <div className="lg:col-span-2 flex lg:justify-end items-center pt-2 lg:pt-0">
                <span className="font-mono text-[10px] text-[#6B6C65] uppercase tracking-wider">PROJECT SPEC</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

