import { testimonials } from '../data/testimonials'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

function TestimonialCard({ t, index }: { t: (typeof testimonials)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`card-glow rounded-xl p-8 transition-[opacity,transform] duration-700 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex items-center gap-4 mb-6">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-200 to-gold-100 flex items-center justify-center shrink-0 ring-2 ring-gold-300/40">
          <span className="text-accent text-lg font-bold">{t.name[0]}</span>
        </div>
        <div>
          <p className="font-[family-name:var(--font-display)] font-semibold text-text-primary">{t.name}</p>
          <p className="text-text-muted text-sm">{t.role}</p>
        </div>
      </div>
      <span className="block font-[family-name:var(--font-serif)] text-4xl text-accent/25 leading-none mb-3">
        &ldquo;
      </span>
      <p className="text-text-secondary leading-relaxed italic">
        {t.quote}
      </p>
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background: warm accent */}
      <div className="absolute inset-0 bg-surface-accent" />

      {/* Ambient effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-300/[0.08] blur-[120px]" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices of Transformation"
          subtitle="Real experiences from those who have walked the path."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
