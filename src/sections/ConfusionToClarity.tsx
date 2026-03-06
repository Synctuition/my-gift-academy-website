import { confusionToClarityContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

function PointsList({
  heading,
  points,
  variant,
  delay = 0,
}: {
  heading: string
  points: string[]
  variant: 'before' | 'after'
  delay?: number
}) {
  const { ref, isVisible } = useScrollReveal()

  const isBefore = variant === 'before'

  return (
    <div
      ref={ref}
      className={`rounded-2xl p-8 md:p-10 border transition-[opacity,transform] duration-700 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isBefore
          ? 'bg-warm-100 border-warm-300/60'
          : 'bg-surface-elevated border-accent/20 shadow-card'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Gold hairline on the "after" card */}
      {!isBefore && (
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      )}

      <h3
        className={`font-[family-name:var(--font-display)] text-[length:var(--font-size-h3)] font-bold mb-6 ${
          isBefore ? 'text-text-muted' : 'text-accent'
        }`}
      >
        {heading}
      </h3>
      <ul className="space-y-4">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <span
              className={`mt-1.5 block w-2 h-2 rounded-full shrink-0 ${
                isBefore ? 'bg-text-muted/40' : 'bg-accent'
              }`}
            />
            <span className="text-text-secondary leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ArrowDivider() {
  return (
    <div className="flex items-center justify-center py-4 md:py-0">
      {/* Mobile: vertical arrow */}
      <div className="md:hidden flex flex-col items-center text-accent/40">
        <div className="w-px h-6 bg-gradient-to-b from-transparent to-accent/30" />
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
      {/* Desktop: horizontal arrow */}
      <div className="hidden md:flex items-center text-accent/40">
        <div className="w-8 h-px bg-gradient-to-r from-transparent to-accent/30" />
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <div className="w-8 h-px bg-gradient-to-l from-transparent to-accent/30" />
      </div>
    </div>
  )
}

export function ConfusionToClarity() {
  return (
    <section id="clarity" className="relative py-24 md:py-32 overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-surface" />

      {/* Subtle gold glow behind cards */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-200/8 blur-[150px]" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={confusionToClarityContent.eyebrow}
          title={confusionToClarityContent.title}
        />

        <div className="flex flex-col md:flex-row md:items-stretch gap-0 md:gap-0 max-w-4xl mx-auto">
          <div className="flex-1">
            <PointsList
              heading={confusionToClarityContent.before.heading}
              points={confusionToClarityContent.before.points}
              variant="before"
            />
          </div>
          <ArrowDivider />
          <div className="flex-1 relative">
            <PointsList
              heading={confusionToClarityContent.after.heading}
              points={confusionToClarityContent.after.points}
              variant="after"
              delay={150}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
