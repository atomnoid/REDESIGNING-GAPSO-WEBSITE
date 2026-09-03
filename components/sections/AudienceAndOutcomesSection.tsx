'use client'

import React from 'react'

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
              <span className="w-1.5 h-1.5 bg-[#E44B27]" />
              <span className="section-label text-[#E44B27]">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#D8D5CA] divide-y sm:divide-y-0 sm:divide-x divide-[#D8D5CA]">
            {audiences.map((aud) => (
              <div
                key={aud.no}
                className="p-8 flex flex-col justify-between hover:bg-[#ECE8DD]/40 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#E44B27] block mb-6">
                    {aud.no}
                  </span>

                  <h3 className="text-2xl font-serif text-[#121312] mb-2">
                    {aud.title}
                  </h3>

                  <div className="font-mono text-[10px] font-semibold text-[#6C6D67] tracking-wider uppercase block mb-4">
                    {aud.cohort}
                  </div>

                  <p className="text-sm text-[#6C6D67] font-normal leading-relaxed mb-6">
                    {aud.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#D8D5CA] mt-4">
                  <small className="font-mono text-[9px] text-[#9B9C94] tracking-widest uppercase block mb-1">
                    TYPICAL ENTRY
                  </small>
                  <strong className="font-mono text-xs text-[#E44B27] font-semibold block tracking-tight">
                    {aud.entry}
                  </strong>
                </div>
              </div>
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
              <span className="w-1.5 h-1.5 bg-[#E44B27]" />
              <span className="section-label text-[#E44B27]">
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
              <div
                key={item.text}
                className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 hover:bg-[#ECE8DD]/40 px-3 -mx-3 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs font-bold text-[#E44B27]">
                    0{idx + 1}
                  </span>
                  <p className="text-base sm:text-lg text-[#121312] font-normal">
                    {item.text}
                  </p>
                </div>

                <small className="font-mono text-[11px] text-[#6C6D67] whitespace-nowrap pl-8 sm:pl-0">
                  — developed in stage {item.stages}
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
