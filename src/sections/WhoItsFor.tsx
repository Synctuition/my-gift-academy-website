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
      <h3 className="font-[family-name:var(--font-display)] text-[length:var(--font-size-h3)] font-bold text-text-dark mb-3">
        {profile.title}
      </h3>
      <p className="text-text-dark-secondary leading-relaxed">
        {profile.description}
      </p>
    </div>
  )
}

export function WhoItsFor() {
  return (
    <section id="who" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background: warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-warm-100 via-warm-50 to-warm-100" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={whoItsForContent.eyebrow}
          title={whoItsForContent.title}
          subtitle={whoItsForContent.subtitle}
          variant="light"
        />

        {/* Overwhelm foreground panel */}
        <div className="relative w-full max-w-3xl mx-auto mb-14 rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.10)]">
          <img
            src="/assets/stills/problem-overwhelm-1600.webp"
            alt="The weight of information overload"
            loading="lazy"
            className="w-full h-auto block"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-100/70 via-transparent to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whoItsForContent.profiles.map((profile, i) => (
            <ProfileCard key={profile.title} profile={profile} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
