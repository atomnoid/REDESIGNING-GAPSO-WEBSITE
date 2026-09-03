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

        {/* Featured RAG Capstone Banner */}
        <div className="mb-14 p-8 sm:p-10 bg-[#ECE8DD] border border-[#BCB8AC] relative group">
          <div className="flex items-center justify-between font-mono text-[10px] tracking-widest text-[#E44B27] font-bold uppercase mb-4">
            <span>FEATURED CAPSTONE</span>
            <span>RETRIEVAL ARCHITECTURE</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold text-[#111210] tracking-tight mb-3">
            RAG System
          </h3>
          <p className="text-base text-[#6B6C65] max-w-2xl font-normal leading-relaxed mb-6">
            Answer questions over a body of documents the model was never trained on — and know when it shouldn&apos;t answer at all.
          </p>
          <div className="pt-4 border-t border-[#D6D3C8] flex flex-wrap items-center gap-2 text-xs font-mono text-[#6B6C65]">
            <span className="text-[#111210] font-semibold">PIPELINE:</span>
            <span>ARCHITECTURE</span>
            <span>·</span>
            <span>DOCUMENTS</span>
            <span>·</span>
            <span>CHUNKING</span>
            <span>·</span>
            <span className="text-[#E44B27] font-semibold">EMBEDDINGS</span>
            <span>·</span>
            <span>VECTOR STORE</span>
            <span>·</span>
            <span>RETRIEVAL</span>
            <span>·</span>
            <span>ANSWER</span>
          </div>
        </div>

        {/* 4 Projects Grid with modern typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D6D3C8] border border-[#D6D3C8]">
          {projects.map((p, i) => (
            <div key={p.title} className="p-8 bg-[#F6F4EE] hover:bg-[#ECE8DD]/60 transition-colors flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#E44B27]">0{i + 1}</span>
                  <span className="font-mono text-[10px] font-semibold text-[#6B6C65] uppercase tracking-wider">{p.badge}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#111210] tracking-tight mb-3 group-hover:text-[#E44B27] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-[#6B6C65] leading-relaxed font-normal">{p.desc}</p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#D6D3C8] flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#6B6C65] uppercase tracking-wider">PROJECT SPEC</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#6B6C65] group-hover:text-[#E44B27] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

