import { mirrorContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { useScrollReveal } from '../hooks/useScrollReveal'

function RevealLine({ text, delay, isFirst }: { text: string; delay: number; isFirst: boolean }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <p
      ref={ref}
      className={`leading-relaxed transition-[opacity,transform,filter] duration-1000 ease-out-expo
        ${isFirst
          ? 'font-[family-name:var(--font-serif)] text-[length:var(--font-size-h2)] text-text-dark'
          : 'text-[length:var(--font-size-body-lg)] text-text-dark-secondary'
        }
        ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-[4px]'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </p>
  )
}

export function Mirror() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background image — golden hour, warmth */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80&auto=format)',
        }}
      />
      <div className="absolute inset-0 bg-warm-100/88" />

      <Container narrow className="relative z-10">
        <div className="space-y-8 text-center max-w-2xl mx-auto">
          {mirrorContent.lines.map((line, i) => (
            <RevealLine
              key={i}
              text={line}
              delay={i * 200}
              isFirst={i === 0}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
