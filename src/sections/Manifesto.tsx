import { manifestoBeats, type ManifestoBeat, type BeatVariant } from '../data/content'
import { Container } from '../components/ui/Container'
import { GoldDivider } from '../components/ui/GoldDivider'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* ─── Visual config per beat variant ─── */
const variantConfig: Record<
  BeatVariant,
  { wrapperClass: string; textClass: string; threshold: number }
> = {
  declaration: {
    wrapperClass: 'min-h-[60vh] md:min-h-[70vh] flex items-center justify-center',
    textClass:
      'font-[family-name:var(--font-serif)] text-[length:var(--font-size-h1)] leading-[1.15] text-shimmer font-normal whitespace-pre-line',
    threshold: 0.25,
  },
  emphasis: {
    wrapperClass: 'py-16 md:py-24',
    textClass:
      'font-[family-name:var(--font-serif)] text-[length:var(--font-size-h2)] leading-[1.3] text-text-primary',
    threshold: 0.3,
  },
  statement: {
    wrapperClass: 'py-10 md:py-14',
    textClass:
      'text-[length:var(--font-size-body-lg)] md:text-xl leading-[1.7] text-text-secondary',
    threshold: 0.3,
  },
  whisper: {
    wrapperClass: 'py-12 md:py-20',
    textClass:
      'text-base md:text-lg italic text-text-muted tracking-wide',
    threshold: 0.4,
  },
}

/* ─── Fade direction for visual rhythm ─── */
const fadeDirections = [
  { hidden: 'opacity-0 translate-y-10', visible: 'opacity-100 translate-y-0' },
  { hidden: 'opacity-0 -translate-y-6', visible: 'opacity-100 translate-y-0' },
  { hidden: 'opacity-0 translate-x-8', visible: 'opacity-100 translate-x-0' },
  { hidden: 'opacity-0 -translate-x-8', visible: 'opacity-100 translate-x-0' },
] as const

/* ─── Timeline dot between beats ─── */
function TimelineDot() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.5 })
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-0 transition-opacity duration-700 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="w-px h-8 md:h-12 bg-gradient-to-b from-transparent to-accent/30" />
      <div className="h-1 w-1 rounded-full bg-accent/50" />
      <div className="w-px h-8 md:h-12 bg-gradient-to-b from-accent/30 to-transparent" />
    </div>
  )
}

/* ─── Single beat ─── */
function ManifestoBeat({ beat, index }: { beat: ManifestoBeat; index: number }) {
  const config = variantConfig[beat.variant]
  const fade = fadeDirections[index % fadeDirections.length]
  const { ref, isVisible } = useScrollReveal({ threshold: config.threshold })

  const duration =
    beat.variant === 'declaration' ? 'duration-[1.6s]' :
    beat.variant === 'whisper' ? 'duration-[2s]' :
    'duration-[1.2s]'

  return (
    <div
      ref={ref}
      className={`${config.wrapperClass} transition-[opacity,transform,filter] ${duration} ease-out-expo ${
        isVisible ? `${fade.visible} blur-0` : `${fade.hidden} blur-[2px]`
      }`}
    >
      <p className={`${config.textClass} max-w-[680px] mx-auto text-center`}>
        {beat.text}
      </p>
    </div>
  )
}

/* ─── Section ─── */
export function Manifesto() {
  const { ref: dividerRef, isVisible: dividerVisible } = useScrollReveal()

  return (
    <section
      id="manifesto"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background: deep dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-base-900 to-surface" />

      {/* Subtle photographic backgrounds — restrained opacity */}
      <div className="absolute inset-0 top-0 h-1/2 overflow-hidden">
        <img
          src="/assets/stills/manifesto-clock-2000.webp"
          loading="lazy"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
      </div>
      <div className="absolute inset-0 top-1/2 h-1/2 overflow-hidden">
        <img
          src="/assets/stills/manifesto-figure-2000.webp"
          loading="lazy"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.07]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
      </div>

      {/* Restrained gold radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold-500/[0.02] blur-[200px]" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/[0.015] blur-[160px]" />

      <Container narrow className="relative z-10">
        {/* Eyebrow */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-accent font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.3em]">
            The Manifesto
          </p>
        </div>

        {/* Beats with timeline dots */}
        <div className="flex flex-col items-center">
          {manifestoBeats.map((beat, i) => (
            <div key={i} className="w-full">
              <ManifestoBeat beat={beat} index={i} />
              {i < manifestoBeats.length - 1 && <TimelineDot />}
            </div>
          ))}
        </div>

        {/* Closing divider */}
        <div
          ref={dividerRef}
          className={`mt-16 md:mt-24 transition-[opacity,transform] duration-1000 ease-out-expo ${
            dividerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <GoldDivider />
        </div>
      </Container>
    </section>
  )
}
