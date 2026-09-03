'use client'

import React from 'react'

export function ProjectsSection() {
  const projects = [
    { badge: 'Capstone', title: 'RAG System', desc: 'Answer questions over a body of documents the model was never trained on — and know when it shouldn\'t answer at all.' },
    { badge: 'Track 01', title: 'AI Automation', desc: 'An automated workflow that processes documents, emails or data without human intervention at each step.' },
    { badge: 'Track 02', title: 'Deployed App', desc: 'A live application that calls a model API, handles state, and returns useful output to a real user.' },
    { badge: 'Track 03', title: 'MCP Tool Server', desc: 'A Model Context Protocol server exposing tools that a model can call to interact with external systems.' },
  ]

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <p className="label mb-6">Project-Driven</p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#111210] leading-[1.05] mb-4 max-w-3xl">
          Something to open, run and explain.
        </h2>
        <p className="text-base sm:text-lg text-[#6B6C65] mb-20 max-w-2xl">
          A certificate records that you attended. A project records what you can do — and lets you walk someone through it line by line. You get both.
        </p>

        <div className="divide-y divide-[#D6D3C8] border-t border-[#D6D3C8]">
          {projects.map((p, i) => (
            <div key={p.title} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-1">
                <span className="font-mono text-xs font-bold text-[#E44B27]">0{i + 1}</span>
              </div>
              <div className="lg:col-span-3">
                <p className="font-mono text-[10px] font-semibold text-[#6B6C65] uppercase tracking-wider mb-1">{p.badge}</p>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#111210]">{p.title}</h3>
              </div>
              <div className="lg:col-span-6">
                <p className="text-sm text-[#6B6C65] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
