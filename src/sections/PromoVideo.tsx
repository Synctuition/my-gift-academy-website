import { useRef, useState } from 'react'
import { Container } from '../components/ui/Container'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function PromoVideo() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 })
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    const v = videoRef.current
    if (!v) return
    v.play()
    setPlaying(true)
  }

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
            ref={videoRef}
            src="/assets/video/promo-30s.mp4"
            poster="/assets/stills/promo-poster-1200.webp"
            controls
            muted
            playsInline
            preload="metadata"
            className="w-full h-auto block"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onEnded={() => setPlaying(false)}
          />

          {/* Play overlay — visible until user plays */}
          {!playing && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-base-950/30 transition-opacity duration-300 hover:bg-base-950/20 cursor-pointer"
            >
              {/* Play icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <svg className="w-7 h-7 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-white/70 text-xs font-[family-name:var(--font-display)] uppercase tracking-[0.2em]">
                Play (30s)
              </span>
            </button>
          )}
        </div>
      </Container>
    </section>
  )
}
