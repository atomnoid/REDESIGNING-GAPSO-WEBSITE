'use client'

import React from 'react'
import { SiteHeader } from '@/components/sections/SiteHeader'
import { HeroSection } from '@/components/sections/HeroSection'
import { PrinciplesTicker } from '@/components/sections/PrinciplesTicker'
import { LearningSystemSection, TrackData } from '@/components/sections/LearningSystemSection'
import { TrainerSection } from '@/components/sections/TrainerSection'
import { TheGapSection } from '@/components/sections/TheGapSection'
import { WhySection } from '@/components/sections/WhySection'
import { JourneySection } from '@/components/sections/JourneySection'
import { ProgramsDetailSection } from '@/components/sections/ProgramsDetailSection'
import { HowYouLearnSection } from '@/components/sections/HowYouLearnSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { AudienceAndOutcomesSection } from '@/components/sections/AudienceAndOutcomesSection'
import { CofounderSection } from '@/components/sections/CofounderSection'
import { CommunitySection } from '@/components/sections/CommunitySection'
import { FinalCtaAndFooter } from '@/components/sections/FinalCtaAndFooter'

const applyHref = 'https://gapso.in/apply'

const teamImages = {
  gowrish: 'https://gapso.in/_next/image?url=%2Fimages%2Fgowrish.png&w=640&q=75',
  surya: 'https://gapso.in/_next/image?url=%2Fimages%2Fsurya.png&w=3840&q=75',
}

const tracks: TrackData[] = [
  {
    no: '01',
    audience: 'PROFESSIONALS OUTSIDE IT',
    title: 'AI Professional',
    desc: 'For professionals who work in decisions, documents and deadlines rather than code. The objective is leverage — becoming the person in the room who can make AI produce reliable, repeatable work output.',
    skills: 'AI Basics · Prompting · AI Productivity · AI Content · AI Automation',
    roles: 'AI Productivity Specialist · AI Trainer · AI Operations Manager · AI Program Manager',
    build: 'A Role Prompt Library · An Automated Workflow · An AI Content Pipeline',
  },
  {
    no: '02',
    audience: 'COLLEGE & SENIOR SCHOOL STUDENTS',
    title: 'AI Developer Foundations',
    desc: 'For students who intend to build. This track assumes no professional experience and installs the engineering fundamentals that every AI role — however senior — is eventually built on top of.',
    skills: 'Python · APIs · Git · JSON · AI SDKs · Mini Projects',
    roles: 'Jr. AI Engineer · Generative AI Developer · AI Application Developer · Associate AI Engineer',
    build: 'A Deployed Application · A Public Git History · An SDK-Backed Project',
  },
  {
    no: '03',
    audience: 'WORKING IT PROFESSIONALS',
    title: 'AI Engineering Program',
    desc: 'The senior track. For engineers who can already code and now need the architecture — how retrieval, memory, tool use and coordination fit together in a system that survives production traffic.',
    skills: 'Embeddings · Vector Databases · RAG & Agents · MCP · Multi-Agent Systems',
    roles: 'AI Engineer · Senior AI Engineer · Principal AI Engineer · AI Solutions Architect',
    build: 'Production RAG System · An MCP Tool Server · A Multi-Agent System',
  },
]

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F6F4EE] text-[#121312] selection:bg-[#E44B27] selection:text-white">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#E44B27] text-white px-4 py-2 font-mono text-xs font-semibold"
      >
        Skip to content
      </a>

      {/* Global Site Navigation */}
      <SiteHeader applyHref={applyHref} />

      <div id="main-content">
        {/* 01. Hero Section */}
        <HeroSection applyHref={applyHref} />

        {/* 02. Infinite Principles Ticker */}
        <PrinciplesTicker />

        {/* 03. Learning System Section */}
        <LearningSystemSection tracks={tracks} />

        {/* 04. The Trainer (Gowrish H B) */}
        <TrainerSection imageUrl={teamImages.gowrish} />

        {/* 05. The Gap (Tutorials vs Real Engineering) */}
        <TheGapSection />

        {/* 06. Why GAPSO (50/50 Split & Pedagogical Decisions) */}
        <WhySection />

        {/* 07. The 4-Stage Learning Journey */}
        <JourneySection />

        {/* 08. Detailed Programs Breakdown */}
        <ProgramsDetailSection tracks={tracks} applyHref={applyHref} />

        {/* 09. How You Learn & Weekend Schedule */}
        <HowYouLearnSection />

        {/* 10. Project-Driven & RAG Showcase */}
        <ProjectsSection />

        {/* 11. Who It's For & Capabilities Outcomes */}
        <AudienceAndOutcomesSection />

        {/* 12. The Co-Founder (Surya Bharadwaj) */}
        <CofounderSection imageUrl={teamImages.surya} />

        {/* 13. Community Matrix */}
        <CommunitySection />

        {/* 14. Final Call to Action & Architectural Footer */}
        <FinalCtaAndFooter applyHref={applyHref} />
      </div>
    </main>
  )
}
