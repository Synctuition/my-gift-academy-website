import { aboutContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

function FeatureIcon({ name }: { name: string }) {
  const cls = 'w-8 h-8'
  const icons: Record<string, React.ReactNode> = {
    eye: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    users: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    compass: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    brain: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
        <line x1="10" y1="22" x2="14" y2="22" />
      </svg>
    ),
  }
  return <>{icons[name] || null}</>
}

function PillarCard({ pillar, index }: { pillar: (typeof aboutContent.pillars)[number]; index: number }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`card-glow rounded-xl p-8 transition-[opacity,transform] duration-700 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center text-accent mb-5">
        <FeatureIcon name={pillar.icon} />
      </div>
      <h3 className="font-[family-name:var(--font-display)] text-[length:var(--font-size-h3)] font-bold text-text-primary mb-3">
        {pillar.title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {pillar.description}
      </p>
    </div>
  )
}

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background: dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-base-950 via-base-900 to-base-950" />

      {/* Golden Boy watermark — top right */}
      <div className="absolute right-[-5%] md:right-[2%] top-[5%] w-[200px] md:w-[280px] opacity-[0.03] pointer-events-none select-none rotate-[-15deg]">
        <img src="/assets/golden-boy/golden_boy.png" alt="" aria-hidden="true" className="w-full h-auto" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-500/[0.03] blur-[100px]" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
          subtitle={aboutContent.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {aboutContent.pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
