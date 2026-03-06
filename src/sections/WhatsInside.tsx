import { whatsInsideContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

function FeatureIcon({ name }: { name: string }) {
  const cls = 'w-7 h-7'
  const icons: Record<string, React.ReactNode> = {
    film: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    ),
    book: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    pen: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    sparkle: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8L12 2z" />
      </svg>
    ),
    headphones: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    mic: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
      </svg>
    ),
    broadcast: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="2" />
        <path d="M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14" />
      </svg>
    ),
  }
  return <>{icons[name] || null}</>
}

function FeatureCard({
  feature,
  index,
  isHighlight,
}: {
  feature: (typeof whatsInsideContent.features)[number]
  index: number
  isHighlight: boolean
}) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`group relative rounded-2xl border transition-[opacity,transform,box-shadow,border-color] duration-700 ease-out-expo hover:shadow-card-hover hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        isHighlight
          ? 'p-8 bg-surface-elevated border-accent/20 shadow-card sm:col-span-2 lg:col-span-1'
          : 'p-7 bg-surface-elevated border-border'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-accent mb-5 ${
        isHighlight ? 'bg-gradient-to-br from-gold-100 to-gold-200' : 'bg-gold-100'
      }`}>
        <FeatureIcon name={feature.icon} />
      </div>

      {/* Gold hairline accent on highlight cards */}
      {isHighlight && (
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      )}

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
    <section id="inside" className="relative py-24 md:py-32 overflow-hidden grain-overlay">
      <div className="absolute inset-0 bg-surface" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold-200/10 blur-[200px]" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={whatsInsideContent.eyebrow}
          title={whatsInsideContent.title}
          subtitle={whatsInsideContent.subtitle}
        />

        {/* Top row: 3 highlight items (Film, Book, Workbooks) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {whatsInsideContent.features.slice(0, 3).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} isHighlight />
          ))}
        </div>

        {/* Bottom row: 4 standard items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whatsInsideContent.features.slice(3).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 3} isHighlight={false} />
          ))}
        </div>
      </Container>
    </section>
  )
}
