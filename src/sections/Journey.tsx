import { journeyContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

function JourneyStep({ step, index }: { step: (typeof journeyContent.steps)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`relative pl-8 md:pl-24 transition-[opacity,transform,filter] duration-1000 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-[4px]'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Step number — large, positioned on the timeline */}
      <span className="absolute left-0 md:left-4 top-0 font-[family-name:var(--font-display)] text-5xl md:text-6xl font-extrabold text-accent/20">
        {step.number}
      </span>

      {/* Dot on the timeline */}
      <div className="hidden md:block absolute left-0 top-3 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(201,168,76,0.4)]" />

      <div className="md:ml-0">
        <h3 className="font-[family-name:var(--font-display)] text-[length:var(--font-size-h3)] font-bold text-text-dark mb-3">
          {step.title}
        </h3>
        <p className="text-text-dark-secondary leading-relaxed max-w-lg">
          {step.description}
        </p>
      </div>
    </div>
  )
}

export function Journey() {
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal()

  return (
    <section id="journey" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background: warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-100 via-warm-50 to-warm-100" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={journeyContent.eyebrow}
          title={journeyContent.title}
          subtitle={journeyContent.subtitle}
          variant="light"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical gold line (desktop) */}
          <div
            ref={timelineRef}
            className={`hidden md:block absolute left-1.5 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/25 to-transparent origin-top transition-transform duration-[1.5s] ease-out-expo ${
              timelineVisible ? 'scale-y-100' : 'scale-y-0'
            }`}
          />

          <div className="space-y-20">
            {journeyContent.steps.map((step, i) => (
              <JourneyStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
