import { applicationContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { useScrollReveal } from '../hooks/useScrollReveal'

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof applicationContent.steps)[number]
  index: number
  isLast: boolean
}) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div className="flex items-start gap-6 md:flex-col md:items-center md:text-center md:gap-4 relative">
      {/* Connector line (desktop) */}
      {!isLast && (
        <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] right-[calc(-50%+2rem)] h-px bg-gradient-to-r from-accent/40 to-accent/10" />
      )}

      <div
        ref={ref}
        className={`transition-[opacity,transform] duration-700 ease-out-expo flex items-start gap-6 md:flex-col md:items-center ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        {/* Step number */}
        <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-[family-name:var(--font-display)] font-bold text-lg shrink-0 shadow-gold-glow">
          {step.number}
        </div>

        <div>
          <h3 className="font-[family-name:var(--font-display)] text-[length:var(--font-size-h3)] font-bold text-text-primary mb-2">
            {step.title}
          </h3>
          <p className="text-text-secondary leading-relaxed max-w-xs">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ApplicationProcess() {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal()

  return (
    <section id="apply" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={applicationContent.eyebrow}
          title={applicationContent.title}
          subtitle={applicationContent.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto mb-16">
          {applicationContent.steps.map((step, i) => (
            <StepCard
              key={step.number}
              step={step}
              index={i}
              isLast={i === applicationContent.steps.length - 1}
            />
          ))}
        </div>

        <div
          ref={ctaRef}
          className={`text-center transition-[opacity,transform] duration-700 ease-out-expo ${
            ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <Button size="large" href="#apply">
            Apply to Join the Academy
          </Button>
          <p className="mt-4 text-text-muted text-sm">
            Limited spots per cohort. No commitment until you decide.
          </p>
        </div>
      </Container>
    </section>
  )
}
