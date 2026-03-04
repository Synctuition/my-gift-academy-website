import { missionContent } from '../data/content'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GoldDivider } from '../components/ui/GoldDivider'
import { useScrollReveal } from '../hooks/useScrollReveal'

function RevealParagraph({ text, delay }: { text: string; delay: number }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <p
      ref={ref}
      className={`text-text-secondary text-[length:var(--font-size-body-lg)] leading-relaxed
        transition-[opacity,transform,filter] duration-1000 ease-out-expo
        ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-6 blur-[4px]'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {text}
    </p>
  )
}

export function Mission() {
  const { ref: mottoRef, isVisible: mottoVisible } = useScrollReveal()

  return (
    <section id="mission" className="relative py-24 md:py-32 overflow-hidden grain-overlay">
      {/* Background image — contemplative, depth */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80&auto=format)',
        }}
      />
      <div className="absolute inset-0 bg-base-950/92" />

      {/* Golden Boy watermark */}
      <div className="absolute left-[-10%] md:left-[3%] bottom-[-5%] w-[250px] md:w-[320px] opacity-[0.04] pointer-events-none select-none">
        <img src="/assets/golden-boy/golden_boy.png" alt="" aria-hidden="true" className="w-full h-auto" />
      </div>

      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/[0.03] blur-[120px]" />

      <Container narrow className="relative z-10">
        <SectionHeading
          eyebrow={missionContent.eyebrow}
          title={missionContent.title}
        />

        <div className="space-y-6">
          {missionContent.paragraphs.map((paragraph, i) => (
            <RevealParagraph key={i} text={paragraph} delay={i * 150} />
          ))}
        </div>

        <div
          ref={mottoRef}
          className={`mt-16 text-center transition-[opacity,transform] duration-1000 ease-out-expo ${
            mottoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <GoldDivider />
          <p className="mt-8 font-[family-name:var(--font-serif)] italic text-shimmer text-[length:var(--font-size-h2)]">
            {missionContent.motto}
          </p>
        </div>
      </Container>
    </section>
  )
}
