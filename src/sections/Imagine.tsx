import { imagineContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Imagine() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 })

  return (
    <section id="imagine" className="relative py-28 md:py-40 overflow-hidden">
      {/* Background: warm accent with gold glow */}
      <div className="absolute inset-0 bg-surface-accent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gold-200/20 blur-[200px]" />

      <Container narrow className="relative z-10">
        <div
          ref={ref}
          className={`text-center transition-[opacity,transform] duration-[1.2s] ease-out-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-accent font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.25em] mb-10">
            {imagineContent.eyebrow}
          </p>

          <div className="space-y-6 md:space-y-8 mb-12">
            {imagineContent.lines.map((line, i) => (
              <p
                key={i}
                className="font-[family-name:var(--font-serif)] text-[length:var(--font-size-h3)] md:text-[length:var(--font-size-h2)] leading-[1.3] text-text-primary"
              >
                {line}
              </p>
            ))}
          </div>

          <p className="text-accent font-[family-name:var(--font-display)] text-[length:var(--font-size-body-lg)] font-semibold">
            {imagineContent.closing}
          </p>
        </div>
      </Container>
    </section>
  )
}
