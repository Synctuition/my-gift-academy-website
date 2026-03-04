import { Container } from '../components/ui/Container'
import { useScrollReveal } from '../hooks/useScrollReveal'

const stats = [
  { value: '50K+', label: 'Active Members' },
  { value: '120+', label: 'Countries' },
  { value: '4.9', label: 'App Store Rating' },
  { value: '10+', label: 'Years of Research' },
]

export function SocialProof() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      className={`py-16 bg-surface border-y border-base-800/50 transition-[opacity] duration-1000 ease-out-expo ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Container>
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-[opacity,transform] duration-700 ease-out-expo ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-1 text-text-muted text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
