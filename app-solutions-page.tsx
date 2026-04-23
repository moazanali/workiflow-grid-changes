import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroGrid } from "@/components/sections/hero-grid"
import { CTASection } from "@/components/sections/cta"
import { GridConnector } from "@/components/ui/grid-connector"
import { Scale, FileText, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions | Workiflow",
  description: "Caseflow and Templify — purpose-built products from Workiflow for monday.com.",
}

const solutions = [
  {
    icon: Scale,
    title: "Caseflow",
    description: "A CRM and practice management platform for immigration law firms, built on monday.com. Track clients, cases, deadlines, and communications in one unified workspace.",
    href: "/solutions",
    tag: "monday.com App",
  },
  {
    icon: FileText,
    title: "Templify",
    description: "Dynamic document templates for monday.com. Generate professional documents directly from your board data — proposals, contracts, reports, and more.",
    href: "/solutions",
    tag: "monday.com App",
  },
]

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />

      {/* HERO */}
      <HeroGrid
        badge="Solutions"
        title={<>Products built for <span className="gradient-text-purple-pink">specific industries</span>.</>}
        description="Beyond our services, Workiflow builds and maintains purpose-built products for specific industries and workflows."
      />

      <GridConnector />

      {/* SOLUTIONS */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group p-8 rounded-xl bg-card border border-[var(--border-subtle)] hover:border-[var(--border-hover)] hover:-translate-y-0.5 transition-all duration-150"
              >
                <div className="flex items-center gap-2 mb-4">
                  <solution.icon size={24} className="text-muted-foreground" strokeWidth={1.5} />
                  <span className="text-[10px] font-mono text-muted-foreground border border-[var(--border-subtle)] px-2 py-0.5 rounded-full">
                    {solution.tag}
                  </span>
                </div>
                <h2 className="text-lg font-medium text-foreground mb-2">{solution.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {solution.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GridConnector variant="to-card" height={80} />

      <CTASection />

      <Footer />
    </div>
  )
}
