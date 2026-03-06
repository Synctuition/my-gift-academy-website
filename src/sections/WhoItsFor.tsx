import { whoItsForContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

function ProfileCard({
  profile,
  index,
}: {
  profile: (typeof whoItsForContent.profiles)[number]
  index: number
}) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`relative p-8 rounded-xl border border-warm-300/80 bg-warm-50/50 transition-[opacity,transform,box-shadow] duration-700 ease-out-expo hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Gold accent dot */}
      <div className="w-2 h-2 rounded-full bg-accent mb-4" />
      <h3 className="font-[family-name:var(--font-display)] text-[length:var(--font-size-h3)] font-bold text-text-primary mb-3">
        {profile.title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {profile.description}
      </p>
    </div>
  )
}

export function WhoItsFor() {
  return (
    <section id="who" className="relative py-24 md:py-32 overflow-hidden grain-overlay">
      {/* Background: warm accent */}
      <div className="absolute inset-0 bg-surface-accent" />
      {/* Gold hairlines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={whoItsForContent.eyebrow}
          title={whoItsForContent.title}
          subtitle={whoItsForContent.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whoItsForContent.profiles.map((profile, i) => (
            <ProfileCard key={profile.title} profile={profile} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
