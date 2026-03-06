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
          : 'bg-surface-elevated border-border shadow-card'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
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

export function ConfusionToClarity() {
  return (
    <section id="clarity" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={confusionToClarityContent.eyebrow}
          title={confusionToClarityContent.title}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <PointsList
            heading={confusionToClarityContent.before.heading}
            points={confusionToClarityContent.before.points}
            variant="before"
          />
          <PointsList
            heading={confusionToClarityContent.after.heading}
            points={confusionToClarityContent.after.points}
            variant="after"
            delay={150}
          />
        </div>
      </Container>
    </section>
  )
}
