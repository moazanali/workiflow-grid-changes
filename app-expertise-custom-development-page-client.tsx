"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"
import { HeroGrid } from "@/components/sections/hero-grid"
import { CTASection } from "@/components/sections/cta"
import { GridConnector } from "@/components/ui/grid-connector"
import { AppWindow, Plug, LayoutDashboard, Hammer, Globe, ArrowRight, Shield } from "lucide-react"
import { serviceSchema, breadcrumbSchema } from "@/lib/schema"

const jsonLd = [
  serviceSchema({
    name: "Custom Development",
    description: "Custom apps, middleware, dashboards, integrations, and tools — designed around your workflow, not the other way around.",
    slug: "/expertise/custom-development",
    serviceType: "Custom Software Development",
  }),
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Expertise", url: "/expertise" },
    { name: "Custom Development", url: "/expertise/custom-development" },
  ]),
]

const capabilities = [
  {
    icon: AppWindow,
    title: "Platform Apps",
    description: "Custom applications built on top of platforms like monday.com. Our marketplace apps Caseflow and Templify serve thousands of users.",
    hoverColor: "var(--gradient-blue)",
  },
  {
    icon: Plug,
    title: "Custom Integrations & Middleware",
    description: "When platforms don't talk to each other natively, we build the connection layer — APIs, middleware, and custom connectors.",
    hoverColor: "var(--gradient-teal)",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Reporting Tools",
    description: "Custom dashboards and reporting interfaces that pull data from multiple sources into a single, clear view.",
    hoverColor: "var(--gradient-purple)",
  },
  {
    icon: Hammer,
    title: "Internal Tools",
    description: "Purpose-built tools for your team — calculators, configurators, admin panels, and workflow utilities.",
    hoverColor: "var(--gradient-pink)",
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Full-stack web applications when your needs go beyond platform customization.",
    hoverColor: "var(--gradient-red)",
  },
]

const steps = [
  {
    number: "01",
    title: "Scope",
    description: "We define the problem, map the requirements, and design the solution before writing a single line of code.",
    textClass: "gradient-text-blue-teal",
  },
  {
    number: "02",
    title: "Develop",
    description: "Iterative development with regular check-ins. You see progress early and often, not just at the end.",
    textClass: "gradient-text-purple-pink",
  },
  {
    number: "03",
    title: "Ship & Support",
    description: "We launch, monitor, and support. Through a retainer, we maintain and evolve your custom tools as your needs change.",
    textClass: "gradient-text-red-gold",
  },
]

export default function CustomDevelopmentPageClient() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background relative">
      <style jsx>{`
        @keyframes gradient-rotate {
          0% { background-position: 0% 50%; }
          25% { background-position: 50% 100%; }
          50% { background-position: 100% 50%; }
          75% { background-position: 50% 0%; }
          100% { background-position: 0% 50%; }
        }
        .animated-border {
          background: linear-gradient(var(--card), var(--card)) padding-box,
                      linear-gradient(90deg,
                        color-mix(in srgb, var(--gradient-blue) 50%, transparent),
                        color-mix(in srgb, var(--gradient-teal) 50%, transparent),
                        color-mix(in srgb, var(--gradient-purple) 50%, transparent),
                        color-mix(in srgb, var(--gradient-pink) 50%, transparent),
                        color-mix(in srgb, var(--gradient-red) 50%, transparent),
                        color-mix(in srgb, var(--gradient-gold) 50%, transparent),
                        color-mix(in srgb, var(--gradient-blue) 50%, transparent)
                      ) border-box;
          background-size: 100% 100%, 300% 100%;
          animation: gradient-rotate 6s linear infinite;
          border: 1px solid transparent;
        }
        @keyframes light-ray {
          0% { left: -15%; }
          14% { left: 10%; }
          18% { left: 10%; }
          46% { left: 43%; }
          50% { left: 43%; }
          78% { left: 76%; }
          82% { left: 76%; }
          100% { left: 100%; }
        }
        .light-ray {
          position: absolute;
          top: 0;
          width: 15%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            color-mix(in srgb, var(--gradient-blue) 5%, transparent) 10%,
            color-mix(in srgb, var(--gradient-teal) 15%, transparent) 25%,
            color-mix(in srgb, var(--gradient-purple) 25%, transparent) 40%,
            color-mix(in srgb, var(--gradient-pink) 40%, transparent) 55%,
            color-mix(in srgb, var(--gradient-red) 60%, transparent) 70%,
            color-mix(in srgb, var(--gradient-gold) 80%, transparent) 85%,
            var(--gradient-gold) 100%
          );
          animation: light-ray 10s ease-in-out infinite;
          pointer-events: none;
          filter: blur(1px);
        }
      `}</style>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <Navigation />

      {/* HERO */}
      <HeroGrid
        badge="Expertise"
        title={<>When off-the-shelf doesn&apos;t cut it, <span className="gradient-text-red-gold">we build</span>.</>}
        description="Custom apps, middleware, dashboards, integrations, and tools — designed around your workflow, not the other way around."
      />

      <GridConnector />

      {/* OVERVIEW */}
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
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                      Built for your workflow, not a demo
                    </h2>
                    <div className="space-y-4 text-muted-foreground text-base leading-[1.7]">
                      <p>
                        Sometimes the right solution doesn&apos;t exist yet. Our development team builds custom applications, platform extensions, middleware, and tools that solve the specific problems your business has — not generic problems that look good in a product demo.
                      </p>
                      <p>
                        We&apos;ve built everything from monday.com marketplace apps (Caseflow, Templify) to custom API middleware, reporting dashboards, and internal tools. Our approach is product-minded: we design for usability, build for reliability, and support for the long term.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://imwffnpvmmaddvtpzbqf.supabase.co/storage/v1/object/public/assets/images/expertise/custom-development.jpg"
                      alt="Custom development visualization"
                      priority
                      width={500}
                      height={400}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIxAAAQMEAgMBAAAAAAAAAAAAAQIDBAAFERIhMUFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKe3WuVdrjHt8FlTsh9YQhI9z6D3P2pxE2kLFKbiFxaHnEBRbQokgHyB/9k="
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <GridConnector />

      {/* WHAT THIS INCLUDES */}
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
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em] mb-4 text-center">
            What This Includes
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
            Custom solutions for real problems
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className={`group relative p-6 rounded-xl bg-card transition-all duration-300 hover:-translate-y-1 ${
                  hoveredIndex === index
                    ? 'animated-border'
                    : 'border border-[var(--border-subtle)] hover:border-[var(--border-hover)]'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative z-10">
                  <cap.icon
                    className="w-5 h-5 mb-4 transition-colors duration-300"
                    style={{ color: hoveredIndex === index ? cap.hoverColor : 'var(--foreground)' }}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg font-medium text-foreground mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <GridConnector />

      {/* APPROACH */}
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

            {/* Row 1: Label */}
            <div 
              className="relative flex items-center justify-center"
              style={{ 
                height: '80px',
                borderTop: '1px solid var(--ds-gray-alpha-200)',
                borderBottom: '1px solid var(--ds-gray-alpha-200)',
              }}
            >
              <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em]">
                How We Approach It
              </span>
            </div>

            {/* Row 2: Headline */}
            <div 
              className="relative flex flex-col items-center justify-center text-center px-6"
              style={{ 
                minHeight: '160px',
                borderBottom: '1px solid var(--ds-gray-alpha-200)',
              }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.02em] text-foreground">
                Product-minded development
              </h2>
            </div>

            {/* Row 3: Process steps */}
            <div 
              className="relative"
              style={{ 
                minHeight: '320px',
                borderBottom: '1px solid var(--ds-gray-alpha-200)',
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative py-8 px-6">
                {/* Connecting dotted line with light ray effect (desktop only) */}
                <div className="hidden md:block absolute top-[56px] left-6 right-6 h-[2px] overflow-hidden">
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(
                        90deg,
                        var(--ds-gray-alpha-400) 0px,
                        var(--ds-gray-alpha-400) 3px,
                        transparent 3px,
                        transparent 6px
                      )`
                    }}
                  />
                  <div className="light-ray" />
                </div>

                {steps.map((step, index) => (
                  <div key={step.number} className="relative text-center">
                    <div className="inline-block relative z-10 bg-background px-2">
                      <span className={`font-mono text-4xl sm:text-5xl font-bold ${step.textClass}`}>
                        {step.number}
                      </span>
                    </div>
                    <div className="mt-6">
                      <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="md:hidden w-[1px] h-8 border-l border-dashed border-[var(--border-hover)] mx-auto mt-8" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GridConnector />

      {/* CONNECTION TO SERVICES */}
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
              <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border-subtle)] relative overflow-hidden">
                <div
                  className="absolute inset-0 rounded-2xl opacity-50"
                  style={{
                    background: "linear-gradient(135deg, var(--gradient-blue), var(--gradient-teal), var(--gradient-purple), var(--gradient-pink), var(--gradient-blue))",
                    backgroundSize: "300% 300%",
                    animation: "gradient-rotate 8s ease infinite",
                  }}
                />
                <div className="absolute inset-0 rounded-2xl bg-background/80" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-6 h-6 text-foreground" strokeWidth={1.5} />
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Managed Retainer
                    </p>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-[-0.02em]">
                    Custom tools need ongoing care.
                  </h3>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 max-w-3xl">
                    Through our retainer, your custom applications get continuous maintenance, feature development, and support — not just a handoff and a good luck.
                  </p>
                  <p className="text-base text-[var(--text-secondary)] mb-6 italic">
                    The retainer isn&apos;t how we package our services. It&apos;s how we deliver them.
                  </p>
                  <Link
                    href="/services/managed-retainer"
                    className="inline-flex items-center gap-2 text-foreground font-medium group/link"
                  >
                    <span className="gradient-text-blue-teal">Learn more about the Managed Retainer</span>
                    <ArrowRight className="w-4 h-4 text-[var(--gradient-teal)] transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GridConnector variant="to-card" height={80} />

      <CTASection
        title={<>Have a problem that needs a <span className="gradient-text-blue-pink">custom solution</span>?</>}
        description="Book a discovery call. We'll scope your requirements and show you what we can build."
        disclaimer="Free 30-minute consultation. No commitment."
      />

      <Footer />
    </div>
  )
}
