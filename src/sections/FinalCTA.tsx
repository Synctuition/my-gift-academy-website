import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function FinalCTA() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="final-cta"
      className="relative pt-44 md:pt-56 pb-32 md:pb-44 overflow-hidden grain-overlay"
    >
      {/* Gradient transition from light → dark */}
      <div className="absolute top-0 left-0 right-0 h-32 md:h-44 bg-gradient-to-b from-surface via-surface to-warm-900" />
      {/* Background: warm dark for contrast punch */}
      <div className="absolute top-32 md:top-44 inset-x-0 bottom-0 bg-gradient-to-b from-warm-900 via-warm-800 to-warm-900" />

      {/* Golden Boy watermark — centered, behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[450px] opacity-[0.06] pointer-events-none select-none">
        <img src="/assets/golden-boy/golden_boy.png" alt="" aria-hidden="true" className="w-full h-auto animate-float-slow" />
      </div>

      {/* Animated gold glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-400/15 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-gold-300/10 blur-[80px] animate-float-slow" />

      <Container className="relative z-10">
        <div
          ref={ref}
          className={`text-center transition-[opacity,transform,filter] duration-[1.2s] ease-out-expo ${
            isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-12 blur-[6px]'
          }`}
        >
          <p className="text-accent font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.25em] mb-6">
            The time is now
          </p>
          <h2 className="font-[family-name:var(--font-serif)] font-normal text-[length:var(--font-size-h1)] leading-[1.1] text-text-light mb-6">
            Your Gift Is Waiting
          </h2>
          <p className="text-text-light-secondary text-[length:var(--font-size-body-lg)] max-w-xl mx-auto mb-12 leading-relaxed">
            The world does not need more automation. It needs individuality. It needs courage.
            It needs the light that only you can bring.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="large" href="#apply">
              Apply to Join the Academy
            </Button>
            <Button size="large" variant="ghost" href="#faq">
              Have Questions?
            </Button>
          </div>
          <p className="mt-8 text-text-light-secondary text-sm italic">
            In an age of artificial intelligence, choose awakened individuality.
          </p>
        </div>
      </Container>
    </section>
  )
}
