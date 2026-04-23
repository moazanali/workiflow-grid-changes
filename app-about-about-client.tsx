"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroGrid } from "@/components/sections/hero-grid"
import { CTASection } from "@/components/sections/cta"
import { storageUrl } from "@/lib/supabase"
import { Target, Anchor, CheckCircle, Camera, MapPin, Linkedin } from "lucide-react"
import { GridConnector } from "@/components/ui/grid-connector"

const leadership = [
  { name: "Keenan Theron", title: "Co-Founder", location: "Peniche, Portugal", initials: "KT", image: storageUrl("assets", "images/Team/Keenan.png") },
  { name: "John-Paul Theron", title: "Co-Founder", location: "Montevideo, Uruguay", initials: "JP", image: storageUrl("assets", "images/Team/Image from iOS.jpg") },
  { name: "Danilo Esquivel", title: "CEO", location: "Georgia, United States", initials: "DE", image: storageUrl("assets", "images/Team/Danny.jpeg") },
  { name: "Kiki Ruff", title: "Head of Marketing", location: "Indiana, United States", initials: "KR", image: storageUrl("assets", "images/Team/Kiki .webp") },
  { name: "Ruan Jonker", title: "Head of Operations", location: "Cape Town, South Africa", initials: "RJ", image: storageUrl("assets", "images/Team/Ruan.png") },
  { name: "Misha Theron", title: "Head of Product Development", location: "Cape Town, South Africa", initials: "MT", image: storageUrl("assets", "images/Team/Misha.png") },
  { name: "Gregoire Frank", title: "Head of Finance", location: "Cape Town, South Africa", initials: "GF", image: storageUrl("assets", "images/Team/Greg.jpeg") },
]

const milestones = [
  { year: "2019", title: "The Beginning", description: "Keenan and JP founded Workiflow after building successful freelance careers. The goal was simple: give businesses access to real technology expertise without enterprise overhead.", gradientFrom: "var(--gradient-blue)", gradientTo: "var(--gradient-teal)" },
  { year: "2020", title: "First Partnerships", description: "Became a certified monday.com partner. Grew to 5 team members. Officially incorporated as an LLC in Delaware.", gradientFrom: "var(--gradient-purple)", gradientTo: "var(--gradient-pink)" },
  { year: "2021", title: "Going Global", description: "Expanded to 15 team members across 3 countries. Awarded Expert Vetted on Upwork — top 1% of talent on the platform.", gradientFrom: "var(--gradient-red)", gradientTo: "var(--gradient-gold)" },
  { year: "2022", title: "Building Products", description: "25 team members across 5 countries. Hired dedicated full-stack developers and began building marketplace applications.", gradientFrom: "var(--gradient-blue)", gradientTo: "var(--gradient-teal)" },
  { year: "2023", title: "Scaling Capabilities", description: "Launched Templify and Caseflow on the monday.com marketplace. Expanded into AI, custom development, and complex automation services.", gradientFrom: "var(--gradient-purple)", gradientTo: "var(--gradient-pink)" },
  { year: "2024", title: "Platinum", description: "Jumped from Silver straight to Platinum monday.com partnership. Added CRM Specialization and Advanced Delivery Partner certifications. Restructured as a C-Corp. 50+ team members.", gradientFrom: "var(--gradient-red)", gradientTo: "var(--gradient-gold)" },
  { year: "2025", title: "Managed Partner", description: "Repositioned from implementation services to a full managed technology partner model. Launched managed retainer programs for long-term client relationships.", gradientFrom: "var(--gradient-blue)", gradientTo: "var(--gradient-teal)" },
]

const departments = [
  { name: "Implementation & Delivery", count: "12 specialists", subtitle: "Project managers, implementation leads, account executives, and customer success.", gradientFrom: "var(--gradient-blue)", gradientTo: "var(--gradient-teal)" },
  { name: "Engineering", count: "6 developers", subtitle: "Full-stack engineers, frontend, backend, and UI/UX development.", gradientFrom: "var(--gradient-purple)", gradientTo: "var(--gradient-pink)" },
  { name: "Automation & AI", count: "4 specialists", subtitle: "Automation engineers, integration specialists, and AI implementation.", gradientFrom: "var(--gradient-red)", gradientTo: "var(--gradient-gold)" },
  { name: "Strategy & Operations", count: "7 team members", subtitle: "Leadership, marketing, finance, and operations.", gradientFrom: "var(--gradient-teal)", gradientTo: "var(--gradient-blue)" },
]

const approachCards = [
  { icon: Target, title: "Client-First, Not Tool-First", description: "We recommend what's right for your business. We're not paid to push a specific platform — we're paid to get you the best result." },
  { icon: Anchor, title: "Built to Stay", description: "We don't do hand-offs and disappear. Our retainer model means we're invested in your long-term success, not just project delivery." },
  { icon: CheckCircle, title: "Substance Over Hype", description: "No buzzwords. No overpromising. We tell you what works, what doesn't, and what we'd do if it were our business." },
]

const stats = [
  { value: "50+", label: "Team Members" },
  { value: "500+", label: "Projects Delivered" },
  { value: "6+", label: "Years Running" },
  { value: "5+", label: "Countries" },
]

const countries = ["United States", "South Africa", "Portugal", "Uruguay", "India", "Pakistan"]

export default function AboutClient() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in")
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )
    const items = timelineRef.current?.querySelectorAll(".timeline-item")
    items?.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        <HeroGrid
          badge="About"
          title={<>Built by operators, <span className="gradient-text-blue-teal">for operators</span>.</>}
          description="We started as two founders who saw how much time businesses waste on badly implemented technology. Today, we're a 50+ person team helping companies across the globe get it right."
        />

        <GridConnector />

        <section className="relative">
          <div className="flex justify-center px-6">
            <div 
              className="relative"
              style={{ width: '960px', maxWidth: '100%' }}
            >
              {/* Continuous side borders */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderLeft: '1px solid var(--ds-gray-alpha-200)',
                  borderRight: '1px solid var(--ds-gray-alpha-200)',
                }}
              />
              <div className="relative px-6 py-12" style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}>
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-start">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground mb-6">A managed technology partner</h2>
                <div className="space-y-5 text-[var(--text-secondary)] leading-[1.7]">
                  <p>Workiflow isn&apos;t a platform consultancy or an app reseller. We&apos;re a full-service technology team — strategists, automation engineers, developers, AI specialists, and project managers — all under one roof.</p>
                  <p>We help businesses choose the right tools, build them correctly, and manage them long-term. Most of our clients work with us through a managed retainer, which means we&apos;re not just a vendor �� we&apos;re an extension of their team.</p>
                  <p>Our approach is platform-agnostic. We&apos;ll recommend what&apos;s right for your business, not what we&apos;re paid to sell.</p>
                </div>
              </div>
              <div className="w-full h-[400px] rounded-[10px] bg-card border border-[var(--border-subtle)] flex flex-col items-center justify-center">
                <Camera className="w-8 h-8 text-[var(--ds-gray-400)] mb-3" />
                <p className="text-sm text-[var(--ds-gray-400)]">Team Photo</p>
              </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        <section className="relative">
          <div className="flex justify-center px-6">
            <div 
              className="relative"
              style={{ width: '960px', maxWidth: '100%' }}
            >
              {/* Continuous side borders */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderLeft: '1px solid var(--ds-gray-alpha-200)',
                  borderRight: '1px solid var(--ds-gray-alpha-200)',
                }}
              />
              <div className="relative px-6 py-12" style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center relative">
                  <p className="font-mono text-4xl sm:text-5xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-[13px] text-muted-foreground">{stat.label}</p>
                  {index < stats.length - 1 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-[var(--ds-gray-alpha-100)]" />}
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        <section className="relative">
          <div className="flex justify-center px-6">
            <div 
              className="relative"
              style={{ width: '960px', maxWidth: '100%' }}
            >
              {/* Continuous side borders */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderLeft: '1px solid var(--ds-gray-alpha-200)',
                  borderRight: '1px solid var(--ds-gray-alpha-200)',
                }}
              />
              <div className="relative px-6 py-12" style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {approachCards.map((card) => (
                <div key={card.title} className="p-8 rounded-[10px] bg-card border border-[var(--border-subtle)] hover:border-[var(--border-hover)] transition-all duration-150 hover:-translate-y-0.5">
                  <card.icon className="w-6 h-6 text-[var(--text-secondary)] mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg font-medium text-foreground mb-3">{card.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{card.description}</p>
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        <section className="relative">
          <div className="flex justify-center px-6">
            <div 
              className="relative"
              style={{ width: '960px', maxWidth: '100%' }}
            >
              {/* Continuous side borders */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderLeft: '1px solid var(--ds-gray-alpha-200)',
                  borderRight: '1px solid var(--ds-gray-alpha-200)',
                }}
              />
              <div className="relative px-6 py-12" style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}>
                <div className="text-center mb-16">
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">OUR JOURNEY</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">From two founders to a global team</h2>
            </div>
            <div ref={timelineRef} className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--border-subtle)] md:-translate-x-1/2" />
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`timeline-item relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 opacity-0 translate-y-4 transition-all duration-300 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`} style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full md:-translate-x-1/2 z-10" style={{ background: `linear-gradient(135deg, ${milestone.gradientFrom}, ${milestone.gradientTo})` }} />
                  <div className={`flex-1 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <p className="font-mono text-xl font-bold mb-2" style={{ background: `linear-gradient(90deg, ${milestone.gradientFrom}, ${milestone.gradientTo})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{milestone.year}</p>
                    <h3 className="text-base font-medium text-foreground mb-2">{milestone.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-[400px] inline-block">{milestone.description}</p>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        <section className="relative">
          <div className="flex justify-center px-6">
            <div 
              className="relative"
              style={{ width: '960px', maxWidth: '100%' }}
            >
              {/* Continuous side borders */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderLeft: '1px solid var(--ds-gray-alpha-200)',
                  borderRight: '1px solid var(--ds-gray-alpha-200)',
                }}
              />
              <div className="relative px-6 py-12" style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}>
                <div className="text-center mb-12">
                  <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.2em] mb-4">LEADERSHIP</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.02em] text-foreground">The people behind the strategy</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((person) => (
                <div key={person.name} className="p-6 rounded-[10px] bg-card border border-[var(--border-subtle)] text-center">
                  <div className="w-24 h-24 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center overflow-hidden">
                    {person.image ? (
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="font-mono text-xl text-foreground">{person.initials}</span>
                    )}
                  </div>
                  <h3 className="text-base font-medium text-foreground mb-1">{person.name}</h3>
                  <p className="text-[13px] text-[var(--text-secondary)] mb-2">{person.title}</p>
                  <div className="flex items-center justify-center gap-1 text-[12px] font-mono text-[var(--ds-gray-400)]">
                    <MapPin size={12} />{person.location}
                  </div>
                  <a href="#" className="inline-flex mt-4 text-[var(--ds-gray-400)] hover:text-foreground transition-colors" aria-label={`${person.name} LinkedIn`}>
                    <Linkedin size={16} />
                  </a>
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        <section className="relative">
          <div className="flex justify-center px-6">
            <div 
              className="relative"
              style={{ width: '960px', maxWidth: '100%' }}
            >
              {/* Continuous side borders */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderLeft: '1px solid var(--ds-gray-alpha-200)',
                  borderRight: '1px solid var(--ds-gray-alpha-200)',
                }}
              />
              <div className="relative px-6 py-12" style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}>
                <div className="text-center mb-12">
                  <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-foreground mb-2">A team built for breadth</h2>
              <p className="text-[var(--text-secondary)]">50+ specialists organized into focused teams.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {departments.map((dept) => (
                <div key={dept.name} className="relative p-6 rounded-[10px] bg-card border border-[var(--border-subtle)] overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${dept.gradientFrom}, ${dept.gradientTo})` }} />
                  <h3 className="text-base font-medium text-foreground mb-1">{dept.name}</h3>
                  <p className="font-mono text-[13px] text-[var(--text-secondary)] mb-3">{dept.count}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{dept.subtitle}</p>
                </div>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        <section className="relative">
          <div className="flex justify-center px-6">
            <div 
              className="relative"
              style={{ width: '960px', maxWidth: '100%' }}
            >
              {/* Continuous side borders */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  borderLeft: '1px solid var(--ds-gray-alpha-200)',
                  borderRight: '1px solid var(--ds-gray-alpha-200)',
                }}
              />
              <div className="relative px-6 py-12 text-center" style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}>
                <h2 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-foreground mb-4">100% remote. Truly global.</h2>
                <p className="text-[var(--text-secondary)] max-w-[600px] mx-auto mb-8 leading-relaxed">Our team spans the United States, South Africa, Portugal, Uruguay, India, and Pakistan. We work across time zones so our clients always have coverage — and we hire the best people regardless of where they live.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {countries.map((country) => (
                    <span key={country} className="px-4 py-2 text-sm text-[var(--text-secondary)] rounded-full border border-[var(--border-subtle)] bg-transparent">{country}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector variant="to-card" height={80} />

        <CTASection
          title={<>Want to meet <span className="gradient-text-blue-teal">the team</span> behind the work?</>}
          description="Book a discovery call. We'll match you with the right people for your needs and show you how a managed technology partnership works."
          disclaimer="Free 30-minute consultation. No commitment."
        />
      </main>
      <Footer />
      <style jsx>{`.timeline-item.animate-in { opacity: 1; transform: translateY(0); }`}</style>
    </>
  )
}
