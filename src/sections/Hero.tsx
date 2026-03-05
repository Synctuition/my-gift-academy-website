import { heroContent } from '../data/content'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay"
    >
      {/* Background: cinematic gradient — no external stock photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-base-950 via-base-900 to-base-950" />

      {/* Optional hero still — drop a file at /assets/hero/hero.jpg to activate
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/hero/hero.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-base-950/90 via-base-950/70 to-base-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-base-950 via-transparent to-base-950/30" />
      */}

      {/* Golden Boy motif — ethereal, right side */}
      <div className="absolute right-[-5%] md:right-[5%] top-1/2 -translate-y-1/2 w-[300px] md:w-[420px] lg:w-[500px] opacity-[0.08] pointer-events-none select-none">
        <img
          src="/assets/golden-boy/golden_boy.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto animate-float-slow [filter:brightness(1.5)_sepia(1)_hue-rotate(-10deg)_saturate(2)]"
        />
      </div>

      {/* Ambient gold orbs */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-gold-500/8 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gold-300/6 blur-[80px] animate-float-slow" />

      <Container className="relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-accent font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.25em] mb-8 animate-fade-up-blur">
            My Gift Academy
          </p>

          <h1 className="font-[family-name:var(--font-serif)] font-normal text-[length:var(--font-size-hero)] leading-[1.05] text-text-primary animate-fade-up-blur [animation-delay:100ms]">
            {heroContent.headline.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-5 font-[family-name:var(--font-display)] font-bold text-[length:var(--font-size-h3)] leading-[1.3] text-shimmer animate-fade-up-blur [animation-delay:250ms]">
            {heroContent.emphasis}
          </p>

          <p className="mt-8 text-text-secondary text-[length:var(--font-size-body-lg)] leading-relaxed max-w-2xl animate-fade-up-blur [animation-delay:400ms]">
            {heroContent.subheadline}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-fade-up-blur [animation-delay:550ms]">
            <Button size="large" href={heroContent.ctaHref}>
              {heroContent.cta}
            </Button>
            <Button size="large" variant="ghost" href="#manifesto">
              Read the Manifesto
            </Button>
          </div>
        </div>
      </Container>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-surface to-transparent" />
    </section>
  )
}
