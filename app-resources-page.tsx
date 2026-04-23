import Link from "next/link"
import { FileText, Play, ArrowRight } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroGrid } from "@/components/sections/hero-grid"
import { CTASection } from "@/components/sections/cta"
import { GridConnector } from "@/components/ui/grid-connector"

export const metadata = {
  title: "Resources | Workiflow",
  description: "Explore blogs, videos, and resources to help you optimize your workflows.",
}

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background relative">
      <Navigation />
      
      {/* HERO */}
      <HeroGrid
        badge="Resources"
        title={<>Everything you need to <span className="gradient-text-blue-teal">master your workflows</span>.</>}
        description="In-depth articles, tutorials, and guides to help you optimize your workflows and scale your operations."
      />

      <GridConnector />

      {/* Resource Cards */}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Blogs Card */}
            <Link
              href="/resources/blogs"
              className="group relative p-8 bg-card border border-[var(--border-subtle)] rounded-[10px] hover:border-[var(--border-hover)] transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-[color-mix(in_srgb,var(--gradient-blue)_10%,transparent)] flex items-center justify-center mb-6">
                <FileText size={24} className="text-[var(--gradient-blue)]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[var(--gradient-blue)] transition-colors">
                Blogs
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                In-depth articles on workflow optimization, monday.com strategies, and client success stories.
              </p>
              <span className="inline-flex items-center gap-2 text-[var(--gradient-blue)] font-medium group-hover:text-[var(--gradient-teal)] transition-colors">
                Explore blogs <ArrowRight size={16} />
              </span>
            </Link>

            {/* Videos Card */}
            <Link
              href="/resources/videos"
              className="group relative p-8 bg-card border border-[var(--border-subtle)] rounded-[10px] hover:border-[var(--border-hover)] transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-[color-mix(in_srgb,var(--gradient-pink)_10%,transparent)] flex items-center justify-center mb-6">
                <Play size={24} className="text-[var(--gradient-pink)]" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-[var(--gradient-pink)] transition-colors">
                Videos
              </h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Tutorials, product demos, and walkthroughs to help you get the most out of our solutions.
              </p>
              <span className="inline-flex items-center gap-2 text-[var(--gradient-pink)] font-medium group-hover:text-[var(--gradient-red)] transition-colors">
                Watch videos <ArrowRight size={16} />
              </span>
            </Link>
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
