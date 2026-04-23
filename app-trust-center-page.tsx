import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"
import { HeroGrid } from "@/components/sections/hero-grid"
import { CTASection } from "@/components/sections/cta"
import { Shield, FileText, Scale, FileBarChart, ArrowRight, Users } from "lucide-react"
import { GridConnector } from "@/components/ui/grid-connector"

export const metadata: Metadata = {
  title: "Trust Center | Workiflow",
  description: "Explore Workiflow's commitment to security, privacy, and compliance. Access our security overview, privacy policy, terms of service, and data processing agreement.",
}

const trustCenterPages = [
  {
    icon: Shield,
    title: "Security Overview",
    description: "Learn how Workiflow protects your data with SOC 2 Type II certification, ISO 27001 compliance, and comprehensive security practices.",
    href: "/security",
    gradient: { from: "var(--gradient-blue)", to: "var(--gradient-teal)" },
  },
  {
    icon: FileText,
    title: "Privacy Policy",
    description: "Understand how we collect, use, and protect your personal information when you use our services.",
    href: "/privacy",
    gradient: { from: "var(--gradient-purple)", to: "var(--gradient-pink)" },
  },
  {
    icon: Scale,
    title: "Terms of Service",
    description: "Review the terms and conditions that govern your use of Workiflow's services and platform.",
    href: "/trust-center/terms-of-service",
    gradient: { from: "var(--gradient-pink)", to: "var(--gradient-red)" },
  },
  {
    icon: FileBarChart,
    title: "Data Processing Agreement",
    description: "Our commitment to GDPR compliance and data protection for enterprise clients processing personal data.",
    href: "/dpa",
    gradient: { from: "var(--gradient-red)", to: "var(--gradient-gold)" },
  },
  {
    icon: Users,
    title: "Sub-processors",
    description: "List of third-party sub-processors we use to deliver our services, with details on purpose and data processing locations.",
    href: "/sub-processors",
    gradient: { from: "var(--gradient-teal)", to: "var(--gradient-blue)" },
  },
]

export default function TrustCenterPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroGrid
          badge="Trust Center"
          title={<>Built on <span className="gradient-text-blue-teal">trust</span>.</>}
          description="Transparency is fundamental to how we operate. Explore our security practices, compliance certifications, and legal documentation — everything you need to trust Workiflow with your technology."
        />

        <GridConnector />

        {/* Certification Badges */}
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://imwffnpvmmaddvtpzbqf.supabase.co/storage/v1/object/public/assets/images/Security/SOC2%20Type%202%20(1).png"
                      alt="SOC 2 Type II Certification"
                      className="w-[80px] h-[80px] object-contain"
                    />
                    <div>
                      <p className="text-[14px] font-medium text-foreground">SOC 2 Type II</p>
                      <p className="text-[12px] text-muted-foreground">Certified</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://imwffnpvmmaddvtpzbqf.supabase.co/storage/v1/object/public/assets/images/Security/ISO%2027001%20(1).png"
                      alt="ISO 27001 Certification"
                      className="w-[80px] h-[80px] object-contain"
                    />
                    <div>
                      <p className="text-[14px] font-medium text-foreground">ISO 27001</p>
                      <p className="text-[12px] text-muted-foreground">Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        {/* Trust Center Pages Grid */}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustCenterPages.map((page) => (
                <Link
                  key={page.title}
                  href={page.href}
                  className="group bg-card rounded-[10px] border border-[var(--border-subtle)] p-6 hover:border-[var(--border-hover)] transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <page.icon 
                      size={24} 
                      style={{ color: page.gradient.from }}
                    />
                    <ArrowRight 
                      size={16} 
                      className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" 
                    />
                  </div>
                  <h3 className="text-[18px] font-bold text-foreground mb-2">{page.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-[1.6]">{page.description}</p>
                </Link>
              ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        {/* Contact Section */}
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
              <div className="relative px-6 py-12 text-center bg-[var(--ds-gray-900)]" style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}>
          <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em] mb-4">
                  Questions?
                </p>
                <h2 className="text-[28px] sm:text-[36px] font-bold text-foreground leading-[1.2] tracking-[-0.02em] mb-4">
                  We&apos;re here to help.
                </h2>
                <p className="text-[16px] text-[var(--text-secondary)] leading-[1.6] max-w-[600px] mx-auto mb-8">
                  Need our SOC 2 report, have questions about our security practices, or require additional documentation for your vendor review? Reach out to our team.
                </p>
                <GradientBorderButton href="mailto:security@workiflow.com">
                  Contact Security Team
                </GradientBorderButton>
              </div>
            </div>
          </div>
        </section>

        <GridConnector variant="to-card" height={80} />

        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
