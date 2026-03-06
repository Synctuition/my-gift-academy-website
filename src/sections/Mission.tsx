import { missionBeats, type ManifestoBeat, type BeatVariant } from '../data/content'
import { Container } from '../components/ui/Container'
import { GoldDivider } from '../components/ui/GoldDivider'
import { useScrollReveal } from '../hooks/useScrollReveal'

/* ─── Visual config per beat variant ─── */
const variantConfig: Record<
  BeatVariant,
  { wrapperClass: string; textClass: string; threshold: number }
> = {
  declaration: {
    wrapperClass: 'min-h-[50vh] md:min-h-[60vh] flex items-center justify-center',
    textClass:
      'font-[family-name:var(--font-serif)] text-[length:var(--font-size-h1)] leading-[1.15] text-shimmer font-normal whitespace-pre-line',
    threshold: 0.25,
  },
  emphasis: {
    wrapperClass: 'py-8 md:py-12',
    textClass:
      'font-[family-name:var(--font-serif)] text-[length:var(--font-size-h2)] leading-[1.3] text-text-primary',
    threshold: 0.3,
  },
  statement: {
    wrapperClass: 'py-5 md:py-8',
    textClass:
      'text-[length:var(--font-size-body-lg)] md:text-xl leading-[1.7] text-text-secondary whitespace-pre-line',
    threshold: 0.3,
  },
  whisper: {
    wrapperClass: 'py-8 md:py-12',
    textClass:
      'text-base md:text-lg italic text-accent tracking-wide',
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
      <div className="w-px h-5 md:h-8 bg-gradient-to-b from-transparent to-accent/30" />
      <div className="h-1 w-1 rounded-full bg-accent/50" />
      <div className="w-px h-5 md:h-8 bg-gradient-to-b from-accent/30 to-transparent" />
    </div>
  )
}

/* ─── Single beat ─── */
function MissionBeatBlock({ beat, index }: { beat: ManifestoBeat; index: number }) {
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
export function Mission() {
  const { ref: dividerRef, isVisible: dividerVisible } = useScrollReveal()

  return (
    <section
      id="mission"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background: warm ivory */}
      <div className="absolute inset-0 bg-surface" />

      {/* Subtle gold radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold-300/[0.06] blur-[200px]" />

      <Container narrow className="relative z-10">
        {/* Eyebrow */}
        <div className="text-center mb-6 md:mb-10">
          <p className="text-accent font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.3em]">
            Our Mission
          </p>
        </div>

        {/* Beats with timeline dots */}
        <div className="flex flex-col items-center">
          {missionBeats.map((beat, i) => (
            <div key={i} className="w-full">
              <MissionBeatBlock beat={beat} index={i} />
              {i < missionBeats.length - 1 && <TimelineDot />}
            </div>
          ))}
        </div>

        {/* Closing divider */}
        <div
          ref={dividerRef}
          className={`mt-12 md:mt-20 transition-[opacity,transform] duration-1000 ease-out-expo ${
            dividerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <GoldDivider />
        </div>
      </Container>
    </section>
  )
}
