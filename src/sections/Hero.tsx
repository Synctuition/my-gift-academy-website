import { useRef, useState, useCallback } from 'react'
import { heroContent } from '../data/content'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'

function ShareRow() {
  const [copied, setCopied] = useState(false)
  const url = typeof window !== 'undefined' ? window.location.href : ''

  const canShare = typeof navigator !== 'undefined' && !!navigator.share

  const handleShare = useCallback(async () => {
    try {
      await navigator.share({
        title: 'My Gift Academy',
        text: 'Discover the gift that only you can bring.',
        url,
      })
    } catch {
      /* user cancelled — ignore */
    }
  }, [url])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard denied — ignore */
    }
  }, [url])

  const handleEmail = useCallback(() => {
    const subject = encodeURIComponent('Check out My Gift Academy')
    const body = encodeURIComponent(
      `I thought you might find this interesting:\n\n${url}`,
    )
    window.open(`mailto:?subject=${subject}&body=${body}`, '_self')
  }, [url])

  const btnClass =
    'inline-flex items-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-accent transition-colors duration-200 cursor-pointer rounded-lg hover:bg-warm-100'

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
      {canShare && (
        <button onClick={handleShare} className={btnClass}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
          Share
        </button>
      )}
      <button onClick={handleCopy} className={btnClass}>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <rect x="9" y="9" width="13" height="13" rx="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
        {copied ? 'Copied!' : 'Copy Link'}
      </button>
      <button onClick={handleEmail} className={btnClass}>
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        Send to a Friend
      </button>
    </div>
  )
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    const v = videoRef.current
    if (!v) return
    v.play()
    setPlaying(true)
  }

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
    >
      {/* Warm background */}
      <div className="absolute inset-0 bg-surface" />

      {/* Ambient gold orbs */}
      <div className="absolute top-1/4 right-1/3 w-80 h-80 rounded-full bg-gold-400/10 blur-[100px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gold-300/8 blur-[80px] animate-float-slow" />

      <Container className="relative z-10 pt-28 md:pt-36 pb-20 md:pb-28">
        {/* Text content */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
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

          <p className="mt-8 text-text-secondary text-[length:var(--font-size-body-lg)] leading-relaxed max-w-2xl mx-auto animate-fade-up-blur [animation-delay:400ms]">
            {heroContent.subheadline}
          </p>
        </div>

        {/* Video centerpiece */}
        <div className="max-w-4xl mx-auto animate-fade-up-blur [animation-delay:500ms]">
          <div className="relative rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.10)] ring-1 ring-border">
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
                className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/20 transition-opacity duration-300 hover:bg-black/10 cursor-pointer"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <svg className="w-7 h-7 md:w-8 md:h-8 text-accent ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white/90 text-xs font-[family-name:var(--font-display)] uppercase tracking-[0.2em]">
                  Watch (30s)
                </span>
              </button>
            )}
          </div>

          {/* Share row */}
          <ShareRow />
        </div>

        {/* CTA below video */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-5 animate-fade-up-blur [animation-delay:600ms]">
          <Button size="large" href={heroContent.ctaHref}>
            {heroContent.cta}
          </Button>
          <Button size="large" variant="ghost" href="#about">
            Learn More
          </Button>
        </div>
      </Container>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  )
}
