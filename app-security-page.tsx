import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"
import { HeroGrid } from "@/components/sections/hero-grid"
import { CTASection } from "@/components/sections/cta"
import { Shield, Lock, Eye, AlertTriangle, Building2, GraduationCap, ArrowRight } from "lucide-react"
import { GridConnector } from "@/components/ui/grid-connector"

export const metadata: Metadata = {
  title: "Security",
  description: "Learn how Workiflow protects your data with SOC 2 Type II certification, ISO 27001 compliance, and comprehensive security practices.",
}

const securityPostureCards = [
  {
    icon: Shield,
    title: "Access Controls",
    description: "Role-based access with least-privilege enforcement. Team members only access the systems and data they need for their specific role — nothing more.",
  },
  {
    icon: Lock,
    title: "Encryption",
    description: "Data is encrypted in transit (TLS 1.2+) and at rest. We enforce encryption standards across every system and integration we manage.",
  },
  {
    icon: Eye,
    title: "Continuous Monitoring",
    description: "Active vulnerability monitoring and threat detection powered by At-Bay Stance, our embedded security platform — keeping our environment under constant watch.",
  },
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "A documented incident response plan with defined roles, escalation paths, and communication protocols. If something happens, we move fast and transparently.",
  },
  {
    icon: Building2,
    title: "Vendor & Platform Security",
    description: "We vet every platform and tool in our stack against security, compliance, and data handling standards before it touches client data.",
  },
  {
    icon: GraduationCap,
    title: "Employee Security Training",
    description: "Regular security awareness training and phishing simulations for all team members. Human error is the biggest attack vector — we take it seriously.",
  },
]

export default function SecurityPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navigation />
      <main className="relative z-10">
        {/* SECTION 1 — Hero */}
        <HeroGrid
          badge="Security"
          title={<>Security at <span className="gradient-text-blue-teal">Workiflow</span>.</>}
          description="We protect your data like it's our own — because when you trust us with your technology, that responsibility is non-negotiable. Here's how we back that up."
        />

        <GridConnector />

        {/* SECTION 2 — Certification Badges */}
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
                <p className="text-center text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em] mb-12">
                  Certifications
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20">
                  {/* SOC 2 Type II Badge */}
                  <div className="flex flex-col items-center text-center max-w-[280px]">
                    <div className="mb-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://imwffnpvmmaddvtpzbqf.supabase.co/storage/v1/object/public/assets/images/Security/SOC2%20Type%202%20(1).png"
                        alt="SOC 2 Type II Certification"
                        className="w-[140px] h-[140px] object-contain"
                      />
                    </div>
                    <h3 className="text-[18px] font-bold text-foreground mb-2">SOC 2 Type II</h3>
                    <p className="text-[14px] text-[var(--text-secondary)] leading-[1.6]">
                      Independently audited controls for security, availability, and confidentiality — verified by a third-party assessor.
                    </p>
                  </div>

                  {/* ISO 27001 Badge */}
                  <div className="flex flex-col items-center text-center max-w-[280px]">
                    <div className="mb-6">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="https://imwffnpvmmaddvtpzbqf.supabase.co/storage/v1/object/public/assets/images/Security/ISO%2027001%20(1).png"
                        alt="ISO 27001 Certification"
                        className="w-[140px] h-[140px] object-contain"
                      />
                    </div>
                    <h3 className="text-[18px] font-bold text-foreground mb-2">ISO 27001</h3>
                    <p className="text-[14px] text-[var(--text-secondary)] leading-[1.6]">
                      The international standard for information security management systems (ISMS), certifying that Workiflow maintains a systematic approach to managing sensitive data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        {/* SECTION 3 — Our Security Posture */}
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
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em] mb-4">
                  How We Protect Your Data
                </p>
                <p className="text-[16px] text-[var(--text-secondary)] leading-[1.6] max-w-[700px] mb-12">
                  Security isn&apos;t a feature we bolt on — it&apos;s built into how we operate, how we build, and how we manage your technology. From how our team accesses your systems to how we handle sensitive data, every process is designed with protection in mind.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {securityPostureCards.map((card) => (
                    <div
                      key={card.title}
                      className="bg-card rounded-[10px] border border-[var(--border-subtle)] p-6 hover:border-[var(--border-hover)] transition-colors"
                    >
                      <card.icon size={20} className="text-[var(--text-secondary)] mb-4" />
                      <h3 className="text-[15px] font-medium text-foreground mb-2">{card.title}</h3>
                      <p className="text-[13px] text-muted-foreground leading-[1.6]">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        {/* SECTION 4 — Insurance Coverage */}
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
                <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em] mb-4">
                  Insurance & Liability Protection
                </p>
                <h2 className="text-[28px] sm:text-[36px] font-bold text-foreground leading-[1.2] tracking-[-0.02em] mb-4">
                  Backed by comprehensive coverage.
                </h2>
                <p className="text-[16px] text-[var(--text-secondary)] leading-[1.6] max-w-[700px] mb-12">
                  Workiflow maintains robust insurance coverage to protect both our business and our clients. Our policies provide financial backing in the unlikely event of a professional error or security incident — so you can work with us knowing the risk is managed at every level.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Errors & Omissions */}
                  <div className="bg-card rounded-[10px] border border-[var(--border-subtle)] p-6">
                    <Shield size={24} className="text-[var(--gradient-blue)] mb-4" />
                    <h3 className="text-[18px] font-bold text-foreground mb-2">Errors & Omissions Insurance</h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.6]">
                      Comprehensive professional liability coverage protecting against claims arising from errors, omissions, or negligence in the technology services we deliver.
                    </p>
                  </div>

                  {/* Cyber Liability */}
                  <div className="bg-card rounded-[10px] border border-[var(--border-subtle)] p-6">
                    <Lock size={24} className="text-[var(--gradient-purple)] mb-4" />
                    <h3 className="text-[18px] font-bold text-foreground mb-2">Comprehensive Cyber Liability</h3>
                    <p className="text-[14px] text-muted-foreground leading-[1.6]">
                      Coverage including data breach response, network security liability, regulatory defense, business interruption, ransomware events, and incident recovery costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GridConnector />

        {/* SECTION 5 — Request SOC 2 Report */}
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
            <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em] mb-4">
              Transparency
            </p>
            <h2 className="text-[28px] sm:text-[36px] font-bold text-foreground leading-[1.2] tracking-[-0.02em] mb-4">
              Need more detail? Request our SOC 2 report.
            </h2>
            <p className="text-[16px] text-[var(--text-secondary)] leading-[1.6] max-w-[600px] mx-auto mb-8">
              We&apos;re happy to share our full SOC 2 Type II report with prospective and current clients under NDA. If you&apos;re evaluating Workiflow as a vendor or completing a security review, this is the fastest way to get the detail your team needs.
            </p>
            <GradientBorderButton href="mailto:security@workiflow.com">
                  Request SOC 2 Report
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
