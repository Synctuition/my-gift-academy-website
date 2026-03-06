import { applicationContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { useScrollReveal } from '../hooks/useScrollReveal'

function StepCircle({
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
    <div
      ref={ref}
      className={`flex flex-col items-center text-center relative transition-[opacity,transform] duration-700 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Connector line — horizontal on desktop, vertical on mobile */}
      {!isLast && (
        <>
          <div className="hidden md:block absolute top-7 left-[calc(50%+2.25rem)] w-[calc(100%-4.5rem)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40" />
          </div>
          <div className="md:hidden absolute top-[3.75rem] left-1/2 -translate-x-1/2 w-px h-8">
            <div className="w-full h-full bg-gradient-to-b from-accent/40 to-accent/10" />
          </div>
        </>
      )}

      {/* Gold numbered circle */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 text-white flex items-center justify-center font-[family-name:var(--font-display)] font-bold text-lg shrink-0 shadow-gold-glow ring-4 ring-gold-100 mb-5">
        {step.number}
      </div>

      <h3 className="font-[family-name:var(--font-display)] text-[length:var(--font-size-h3)] font-bold text-text-primary mb-2">
        {step.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed max-w-[200px]">
        {step.description}
      </p>
    </div>
  )
}

export function ApplicationProcess() {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal()

  return (
    <section id="apply" className="relative py-24 md:py-32 overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-surface" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={applicationContent.eyebrow}
          title={applicationContent.title}
          subtitle={applicationContent.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 md:gap-4 max-w-4xl mx-auto mb-16">
          {applicationContent.steps.map((step, i) => (
            <StepCircle
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
