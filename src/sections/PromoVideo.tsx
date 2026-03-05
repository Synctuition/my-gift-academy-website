import { Container } from '../components/ui/Container'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function PromoVideo() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })

  return (
    <section id="promo" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-base-900 to-surface" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/[0.03] blur-[150px]" />

      <Container className="relative z-10">
        {/* Eyebrow + heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-accent font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            A Glimpse
          </p>
          <h2 className="font-[family-name:var(--font-serif)] text-[length:var(--font-size-h2)] leading-[1.2] text-text-primary">
            Watch the Film
          </h2>
        </div>

        {/* Video frame */}
        <div
          ref={ref}
          className={`relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-[0_12px_60px_rgba(0,0,0,0.4)] ring-1 ring-white/[0.06] transition-[opacity,transform] duration-1000 ease-out-expo ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <video
            src="/assets/video/promo.mp4"
            poster="/assets/stills/hero-corridor-1200.webp"
            controls
            muted
            playsInline
            preload="metadata"
            className="w-full h-auto block"
          />
        </div>
      </Container>
    </section>
  )
}
