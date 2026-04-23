# PRD: Grid-Style Visual Connections Between Sections

## Overview

This document outlines the requirements for implementing a unified grid-style visual connection system between sections on the Workiflow website, inspired by the Vercel website design language. The goal is to create seamless, cohesive transitions between sections through consistent layout, alignment, and visual cues.

---

## Objectives

### Primary Objectives

1. **Establish Visual Continuity**: Create a unified grid framework where sections appear as connected modules rather than isolated blocks
2. **Seamless Section Transitions**: Implement visual connectors that bridge sections without disrupting existing designs
3. **Consistent Alignment**: Ensure all sections share the same grid width (960px) and horizontal padding for perfect vertical line alignment
4. **Professional Aesthetic**: Achieve a modern, engineering-focused look similar to Vercel's design language

### Secondary Objectives

1. Validate the approach on the homepage before site-wide rollout
2. Maintain full responsiveness across all breakpoints
3. Preserve existing section designs and functionality
4. Create reusable components for consistent implementation

---

## Design Specifications

### Grid Framework

| Property | Value | Notes |
|----------|-------|-------|
| Grid Width | 960px | 12 columns × 80px cell size |
| Cell Size | 80px | Base unit for grid calculations |
| Columns | 12 | Consistent across all sections |
| Horizontal Padding | 24px (px-6) | Applied via wrapper for responsive behavior |
| Border Color | `var(--ds-gray-alpha-200)` | Low-opacity for subtle visual separation |
| Corner Marker Color | `var(--ds-gray-alpha-600)` | Slightly more prominent for intersection points |

### Visual Elements

#### 1. Continuous Vertical Borders
- Thin (1px) vertical lines on left and right edges of the content area
- Run continuously through sections to create visual connection
- Use `var(--ds-gray-alpha-200)` for subtle appearance

#### 2. Horizontal Dividers
- 1px horizontal lines between sections
- Same color as vertical borders for consistency
- Act as section separators while maintaining grid aesthetic

#### 3. Corner Markers (Cross/Plus Symbols)
- 16px × 16px cross markers at grid intersection points
- Positioned at corners where sections meet
- Use `var(--ds-gray-alpha-600)` for visibility
- Add visual interest and emphasize modular structure

#### 4. Background Transitions
- Support for transitioning between background colors (default ↔ card)
- Smooth visual flow when sections have different backgrounds

---

## Component Architecture

### GridConnector Component

**Purpose**: Adds corner markers at section transition points for the Vercel-style aesthetic

**Props**:
```typescript
interface GridConnectorProps {
  /** Height of connector - defaults to 0 (just corner markers) */
  height?: number
  /** Show corner markers at section transitions */
  showCorners?: boolean
  /** Visual variant for background transitions */
  variant?: 'default' | 'to-card' | 'from-card'
}
```

**Key Behavior**:
- By default, GridConnector has **zero height** - it only adds corner markers at grid intersections
- Sections themselves maintain continuous side borders
- Use `height={80}` with `variant="to-card"` for gradient transitions between background colors
- Corner markers are positioned at the intersection of section borders

**Features**:
- Corner markers (16px cross symbols) at transition points
- Background gradient support for transitions (requires height > 0)
- Responsive width matching section grid (960px max)

### Section Requirements

Each section must:
1. Use consistent `maxWidth: 960px` for content container
2. Include `px-6` horizontal padding wrapper
3. Have continuous left/right borders via absolute positioning
4. Remove redundant corner markers (handled by GridConnector)
5. Use `position: relative` for proper stacking

### Section Pattern (Code Example)

```tsx
<section className="relative">
  <div className="flex justify-center px-6">
    <div 
      className="relative"
      style={{ width: '960px', maxWidth: '100%' }}
    >
      {/* Continuous side borders - REQUIRED for seamless grid lines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          borderLeft: '1px solid var(--ds-gray-alpha-200)',
          borderRight: '1px solid var(--ds-gray-alpha-200)',
        }}
      />
      
      {/* Content rows with bottom borders */}
      <div 
        className="relative px-6 py-12"
        style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}
      >
        {/* Section content here */}
      </div>
    </div>
  </div>
</section>
```

**Critical Notes:**
- The `absolute inset-0` border container creates continuous vertical lines
- Each section's borders connect seamlessly with adjacent sections
- GridConnector adds corner markers at the intersection points
- No gaps occur because sections share borders (bottom of one = top of next)

### Complete Multi-Section Example (Expertise Pages Pattern)

This is the actual implementation pattern used across expertise, security, trust-center, and about pages:

```tsx
import { GridConnector } from '@/components/ui/grid-connector'

export default function PageClient() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
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
            
            {/* Hero content */}
            <div 
              className="relative px-6 py-12"
              style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}
            >
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em] mb-4">
                Section Label
              </p>
              <h1 className="text-[42px] sm:text-[56px] font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6">
                Page Title Here
              </h1>
              <p className="text-[16px] text-[var(--text-secondary)] leading-[1.6] max-w-[700px]">
                Description text goes here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GridConnector between sections */}
      <GridConnector showCorners={true} />

      {/* Content Section with Grid Layout */}
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
            
            {/* Content with 2-column grid */}
            <div 
              className="relative px-6 py-12"
              style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-16">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                    Section Heading
                  </h2>
                  <div className="space-y-4 text-muted-foreground text-base leading-[1.7]">
                    <p>Content paragraph 1.</p>
                    <p>Content paragraph 2.</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/path/to/image.jpg"
                    alt="Description"
                    width={500}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GridConnector between sections */}
      <GridConnector showCorners={true} />

      {/* Cards Grid Section */}
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
            
            {/* Cards content */}
            <div 
              className="relative px-6 py-12"
              style={{ borderBottom: '1px solid var(--ds-gray-alpha-200)' }}
            >
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em] mb-4">
                Cards Section
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                  <div
                    key={item.title}
                    className="bg-card rounded-[10px] border border-[var(--border-subtle)] p-6 hover:border-[var(--border-hover)] transition-colors"
                  >
                    <item.icon size={20} className="text-[var(--text-secondary)] mb-4" />
                    <h3 className="text-[15px] font-medium text-foreground mb-2">{item.title}</h3>
                    <p className="text-[13px] text-muted-foreground leading-[1.6]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - typically last */}
      <GridConnector showCorners={true} variant="to-card" height={80} />
      <CTASection />
    </div>
  )
}
```

### Key Implementation Rules

1. **Import GridConnector**: `import { GridConnector } from '@/components/ui/grid-connector'`

2. **Section Structure** (every section follows this pattern):
   - `<section className="relative">` - wrapper
   - `<div className="flex justify-center px-6">` - centering container
   - `<div className="relative" style={{ width: '960px', maxWidth: '100%' }}>` - grid width container
   - Absolute border div for continuous side lines
   - Content div with `className="relative px-6 py-12"` and `borderBottom` style

3. **GridConnector Placement**:
   - Place `<GridConnector showCorners={true} />` between every two sections
   - Use `variant="to-card" height={80}` before CTA sections with card backgrounds
   - Use `variant="from-card" height={80}` after card background sections

4. **Content Indentation**:
   - All content inside the border wrapper must be properly indented
   - The inner content div contains the actual page content with `px-6 py-12` padding

5. **Typography Patterns**:
   - Section label: `text-[11px] font-mono text-muted-foreground uppercase tracking-[0.1em] mb-4`
   - Main heading: `text-[28px] sm:text-[36px] font-bold text-foreground leading-[1.2] tracking-[-0.02em]`
   - Body text: `text-[16px] text-[var(--text-secondary)] leading-[1.6]`

6. **Card Patterns**:
   - Card container: `bg-card rounded-[10px] border border-[var(--border-subtle)] p-6 hover:border-[var(--border-hover)] transition-colors`
   - Icon color: `text-[var(--text-secondary)]`
   - Card title: `text-[15px] font-medium text-foreground`
   - Card description: `text-[13px] text-muted-foreground leading-[1.6]`

---

## Implementation Strategy

### Phase 1: Homepage Validation

1. **Audit Existing Sections**
   - Document current width configurations
   - Identify sections with misaligned grids
   - Map section order and transition points

2. **Standardize Grid Width**
   - Update all sections to use 12-column (960px) grid
   - Ensure consistent `px-6` padding wrappers
   - Verify vertical border alignment

3. **Implement GridConnector**
   - Create reusable component
   - Add between all homepage sections
   - Test all background transition variants

4. **Update Individual Sections**
   - Remove redundant corner markers
   - Add continuous side borders
   - Ensure proper z-index stacking

### Phase 2: Site-Wide Rollout

1. Apply to service pages
2. Apply to partnership pages
3. Apply to about/contact pages
4. Create documentation for future sections

---

## Section Inventory (Homepage)

| Section | Current Width | Target Width | Padding | Status |
|---------|---------------|--------------|---------|--------|
| Hero | 960px | 960px | px-6 | Complete |
| Partnership Grid | 960px | 960px | px-6 | Complete |
| Trust Badge Strip | 960px | 960px | px-6 | Complete |
| Problem | 960px | 960px | px-6 | Complete |
| Services | 960px | 960px | px-6 | Complete |
| Process | 960px | 960px | px-6 | Complete |
| Testimonials | 960px | 960px | px-6 | Complete |
| Stats | 960px | 960px | px-6 | Complete |
| CTA | Full-width card | Full-width card | px-6 | Complete (uses `variant="to-card"`) |

---

## Responsive Behavior

### Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| Desktop (≥960px) | Full 960px grid with visible borders |
| Tablet (640-959px) | Fluid width, borders at container edges |
| Mobile (<640px) | Full-width, minimal visible grid lines |

### Mobile Considerations

- Corner markers may be hidden or simplified on mobile
- Vertical borders remain visible at container edges
- Horizontal dividers remain consistent
- Grid connector height may reduce on smaller screens

---

## Accessibility Requirements

1. Grid lines must not interfere with content readability
2. Corner markers are decorative (aria-hidden)
3. Maintain sufficient contrast ratios
4. Ensure focus states are not obscured by grid elements

---

## Technical Constraints

1. **Preserve Existing Designs**: No changes to section internal layouts, typography, or functionality
2. **CSS Variables**: Use existing design tokens for consistency
3. **Performance**: Grid elements should be lightweight (CSS-only where possible)
4. **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)

---

## Success Criteria

1. All homepage sections visually connect with seamless vertical lines
2. Corner markers appear at consistent intersection points
3. No visible alignment gaps between sections
4. Responsive behavior maintains visual integrity
5. Page load performance unaffected
6. All existing functionality preserved

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Z-index conflicts | Visual layering issues | Establish clear z-index hierarchy |
| Responsive breakage | Mobile layout issues | Thorough testing at all breakpoints |
| Performance impact | Slower page load | Use CSS-only solutions, minimize DOM |
| Design inconsistency | Sections look disconnected | Strict adherence to grid specifications |

---

## Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Phase 1: Homepage | Completed | GridConnector component, updated sections |
| Phase 2: Service Pages | Completed | Applied grid system to managed-retainer, services index |
| Phase 3: Other Pages | Completed | About, Contact, Expertise, Partnerships pages |
| Phase 4: Documentation | Completed | PRD updated with full implementation status |

---

## Implementation Status

### Pages with Full GridConnector Implementation

| Page | Path | Status | Notes |
|------|------|--------|-------|
| Homepage | `/app/page.tsx` | Complete | All 9 sections connected |
| About | `/app/about/about-client.tsx` | Complete | 9 sections with GridConnector |
| Managed Retainer | `/app/services/managed-retainer/managed-retainer-client.tsx` | Complete | Full implementation |
| Partnerships | `/app/partnerships/partnerships-client.tsx` | Complete | GridConnector between sections |
| Services Index | `/app/services/page.tsx` | Complete | Hero → List → CTA |
| Expertise Index | `/app/expertise/page.tsx` | Complete | Hero → Grid → CTA |
| Contact | `/app/contact/page.tsx` | Complete | Hero → Options |
| AI Expertise | `/app/expertise/ai/page-client.tsx` | Complete | Hero → Overview → Capabilities → Approach → CTA |
| Automation Expertise | `/app/expertise/automation/page-client.tsx` | Complete | Hero → Overview → Capabilities → Approach → CTA |
| Custom Development | `/app/expertise/custom-development/page-client.tsx` | Complete | Hero → Overview → Capabilities → Approach → CTA |
| Data Analytics | `/app/expertise/data-analytics/page-client.tsx` | Complete | Hero → Overview → Capabilities → Approach → CTA |
| Implementation | `/app/expertise/implementation/page-client.tsx` | Complete | Hero → Overview → Capabilities → Approach → CTA |
| Security | `/app/security/page.tsx` | Complete | Hero → Certifications → Posture → Insurance → SOC2 Request |
| Trust Center | `/app/trust-center/page.tsx` | Complete | Hero → Badges → Pages Grid → Contact |
| Resources | `/app/resources/page.tsx` | Complete | Hero → Resources Grid |
| Solutions | `/app/solutions/page.tsx` | Complete | Hero → Solutions Grid → CTA |

### Pages Pending Implementation

| Page | Path | Status | Notes |
|------|------|--------|-------|
| DPA | `/app/dpa/page.tsx` | Pending | Legal document - may not need grid |
| Privacy Policy | `/app/privacy/page.tsx` | Pending | Legal document - may not need grid |
| Terms of Service | `/app/terms/page.tsx` | Pending | Legal document - may not need grid |
| Blog Posts | `/app/resources/blog/[slug]/page.tsx` | Pending | Individual blog post pages |
| Video Pages | `/app/resources/videos/page.tsx` | Pending | Video listing pages |
| Case Studies | `/app/case-studies/*` | Pending | Individual case study pages if they exist |

---

## Appendix

### Reference Implementation

The GridConnector component has been implemented at:
`/components/ui/grid-connector.tsx`

### Design Inspiration

- Vercel Homepage: https://vercel.com
- Vercel Product Pages: Grid-connected section layouts

### Related Files

- `/app/page.tsx` - Homepage with GridConnector implementation
- `/components/sections/*.tsx` - Individual section components
- `/app/globals.css` - CSS custom properties for grid styling
