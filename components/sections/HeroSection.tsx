import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  applyHref: string
}

export function HeroSection({ applyHref }: HeroSectionProps) {
  const pathwayStages = [
    { no: '01', title: 'Understand', desc: 'How modern AI works, in plain terms — and where it breaks.' },
    { no: '02', title: 'Use', desc: 'Apply AI to real work, deliberately rather than accidentally.' },
    { no: '03', title: 'Build', desc: 'Write code that talks to models, and ship something with it.' },
    { no: '04', title: 'Engineer', desc: 'Design, connect and run AI systems that hold up in production.' },
  ]

  return (
    <section id="top" className="relative pt-16 md:pt-24 pb-20 md:pb-28 border-b border-[#D6D3C8]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Bold, simple, human editorial typography */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 bg-[#E44B27]" />
              <span className="label">
                Fundamentals to Production AI
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#111210] leading-[1.04] mb-6">
              Don&apos;t just learn AI.{' '}
              <span className="text-[#E44B27] block sm:inline">
                Learn to build
              </span>{' '}
              with it.
            </h1>

            <p className="text-lg md:text-xl text-[#6B6C65] max-w-xl leading-relaxed mb-10 font-normal">
              GAPSO School of AI trains students and professionals to understand,
              build and ship real AI systems — from first principles to production.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a href={applyHref} className="btn">
                <span>Apply Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="#programs" className="link">
                <span>Explore Programs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean, calm editorial pathway card */}
          <div className="lg:col-span-5 bg-[#ECE8DD] border border-[#D6D3C8] p-7 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#D6D3C8]">
              <span className="font-mono text-[10px] font-bold tracking-widest text-[#111210] uppercase">
                THE LEARNING PATHWAY
              </span>
              <span className="font-mono text-[10px] text-[#E44B27] tracking-widest uppercase font-semibold">
                4 STAGES
              </span>
            </div>

            <div className="space-y-4 divide-y divide-[#D6D3C8]">
              {pathwayStages.map((stage, idx) => (
                <div key={stage.no} className={idx === 0 ? '' : 'pt-4'}>
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="font-bold text-lg text-[#111210] tracking-tight">
                      {stage.title}
                    </span>
                    <span className="font-mono text-[11px] text-[#6B6C65]">
                      {stage.no}
                    </span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#6B6C65] leading-relaxed font-normal">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#D6D3C8] flex items-center justify-between font-mono text-[10px] text-[#6B6C65] uppercase tracking-wider">
              <span>BENGALURU, INDIA</span>
              <span className="text-[#111210] font-semibold">LIVE IN-PERSON &amp; ONLINE</span>
            </div>
          </div>
        </div>

        {/* Human Creative Meta Strip */}
        <div className="mt-16 pt-8 border-t border-[#D6D3C8] grid grid-cols-2 md:grid-cols-4 gap-6 text-[#6B6C65] font-mono text-[11px] tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#E44B27] rounded-full" />
            <span>50% Theory / 50% Practical</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#111210] rounded-full" />
            <span>Weekend Batches</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#E44B27] rounded-full" />
            <span>Project-Driven</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#111210] rounded-full" />
            <span>Bengaluru · Live &amp; Online</span>
          </div>
        </div>
      </div>
    </section>
  )
}
