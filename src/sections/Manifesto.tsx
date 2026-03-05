import { useRef, useEffect, useCallback } from 'react'
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
    wrapperClass: 'min-h-[50vh] md:min-h-[60vh] flex items-center justify-center',
    textClass:
      'font-[family-name:var(--font-serif)] text-[length:var(--font-size-h1)] leading-[1.15] text-shimmer font-normal whitespace-pre-line drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]',
    threshold: 0.25,
  },
  emphasis: {
    wrapperClass: 'py-8 md:py-12',
    textClass:
      'font-[family-name:var(--font-serif)] text-[length:var(--font-size-h2)] leading-[1.3] text-text-primary drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]',
    threshold: 0.3,
  },
  statement: {
    wrapperClass: 'py-5 md:py-8',
    textClass:
      'text-[length:var(--font-size-body-lg)] md:text-xl leading-[1.7] text-text-secondary drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]',
    threshold: 0.3,
  },
  whisper: {
    wrapperClass: 'py-8 md:py-12',
    textClass:
      'text-base md:text-lg italic text-text-muted tracking-wide drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]',
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
function ManifestoBeatBlock({ beat, index }: { beat: ManifestoBeat; index: number }) {
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

/* ─── Scroll-scrub video hook (supports multiple video elements) ─── */
function useScrollScrubVideo() {
  const videosRef = useRef<HTMLVideoElement[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const rafId = useRef(0)
  const isActive = useRef(false)

  const addVideoRef = useCallback((el: HTMLVideoElement | null) => {
    if (el && !videosRef.current.includes(el)) videosRef.current.push(el)
  }, [])

  const scrub = useCallback(() => {
    const section = sectionRef.current
    if (!section || !isActive.current) return

    const rect = section.getBoundingClientRect()
    const viewH = window.innerHeight
    const totalTravel = rect.height + viewH
    const traveled = viewH - rect.top
    const progress = Math.max(0, Math.min(1, traveled / totalTravel))

    for (const video of videosRef.current) {
      if (video.duration) video.currentTime = progress * video.duration
    }

    rafId.current = requestAnimationFrame(scrub)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isActive.current = true
          rafId.current = requestAnimationFrame(scrub)
        } else {
          isActive.current = false
          cancelAnimationFrame(rafId.current)
        }
      },
      { threshold: 0 },
    )

    observer.observe(section)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(rafId.current)
    }
  }, [scrub])

  return { addVideoRef, sectionRef }
}

/* ─── Section ─── */
export function Manifesto() {
  const { ref: dividerRef, isVisible: dividerVisible } = useScrollReveal()
  const { addVideoRef, sectionRef } = useScrollScrubVideo()

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background: deep dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-surface via-base-900 to-surface" />

      {/* Scroll-scrub video background — 2 layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Back layer: blurred cover fill for edges */}
        <video
          ref={addVideoRef}
          src="/assets/video/manifesto-scrub.mp4"
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.10] blur-[12px] saturate-50"
        />
        {/* Front layer: contained, readable footage */}
        <video
          ref={addVideoRef}
          src="/assets/video/manifesto-scrub.mp4"
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 w-full h-auto max-h-full object-contain mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.25] saturate-[1.1] contrast-[1.05] mix-blend-screen"
        />
        {/* Edge gradients for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-transparent to-surface/60" />
      </div>

      {/* Restrained gold radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-gold-500/[0.02] blur-[200px]" />
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/[0.015] blur-[160px]" />

      <Container narrow className="relative z-10">
        {/* Eyebrow */}
        <div className="text-center mb-6 md:mb-10">
          <p className="text-accent font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.3em]">
            The Manifesto
          </p>
        </div>

        {/* Beats with timeline dots */}
        <div className="flex flex-col items-center">
          {manifestoBeats.map((beat, i) => (
            <div key={i} className="w-full">
              <ManifestoBeatBlock beat={beat} index={i} />
              {i < manifestoBeats.length - 1 && <TimelineDot />}
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
