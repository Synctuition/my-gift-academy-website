import { rebirthContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

function RebirthStep({ step, index }: { step: (typeof rebirthContent.steps)[number]; index: number }) {
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
      <span className="absolute left-0 md:left-4 top-0 font-[family-name:var(--font-display)] text-5xl md:text-6xl font-extrabold text-accent/15">
        {step.number}
      </span>

      {/* Dot on the timeline */}
      <div className="hidden md:block absolute left-0 top-3 w-3 h-3 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 shadow-[0_0_12px_rgba(176,143,58,0.4)] ring-2 ring-gold-100" />

      <div className="md:ml-0">
        <h3 className="font-[family-name:var(--font-display)] text-[length:var(--font-size-h3)] font-bold text-text-primary mb-3">
          {step.title}
        </h3>
        <p className="text-text-secondary leading-relaxed max-w-lg">
          {step.description}
        </p>
      </div>
    </div>
  )
}

export function RebirthProcess() {
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollReveal()

  return (
    <section id="rebirth" className="relative py-24 md:py-32 overflow-hidden grain-overlay">
      {/* Background: warm accent */}
      <div className="absolute inset-0 bg-surface-accent" />

      {/* Gold hairline at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-gold-200/10 blur-[150px]" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={rebirthContent.eyebrow}
          title={rebirthContent.title}
          subtitle={rebirthContent.subtitle}
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
            {rebirthContent.steps.map((step, i) => (
              <RebirthStep key={step.number} step={step} index={i} />
            ))}
          </div>
        </div>
      </Container>

      {/* Gold hairline at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
    </section>
  )
}
