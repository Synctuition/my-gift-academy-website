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
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold-500/30 to-gold-700/10 flex items-center justify-center shrink-0 ring-2 ring-gold-500/20">
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
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden grain-overlay">
      {/* Background — different from other dark sections */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80&auto=format)',
        }}
      />
      <div className="absolute inset-0 bg-base-950/93" />

      {/* Ambient effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-500/[0.03] blur-[120px]" />

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
