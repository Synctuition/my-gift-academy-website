import { whatsInsideContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

function FeatureIcon({ name }: { name: string }) {
  const cls = 'w-7 h-7'
  const icons: Record<string, React.ReactNode> = {
    play: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <path d="M10 8l6 4-6 4V8z" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    mic: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
      </svg>
    ),
    users: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    pen: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    map: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
    compass: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" fill="currentColor" opacity="0.3" />
      </svg>
    ),
  }
  return <>{icons[name] || null}</>
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof whatsInsideContent.features)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`p-7 rounded-xl border border-border bg-surface-elevated transition-[opacity,transform,box-shadow] duration-700 ease-out-expo hover:shadow-card-hover hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-gold-100 flex items-center justify-center text-accent mb-5">
        <FeatureIcon name={feature.icon} />
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-text-primary mb-2">
        {feature.title}
      </h3>
      <p className="text-text-secondary text-[length:var(--font-size-sm)] leading-relaxed">
        {feature.description}
      </p>
    </div>
  )
}

export function WhatsInside() {
  return (
    <section id="inside" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={whatsInsideContent.eyebrow}
          title={whatsInsideContent.title}
          subtitle={whatsInsideContent.subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatsInsideContent.features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
