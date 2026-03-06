import { useScrollReveal } from '../../hooks/useScrollReveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  invertColors?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  invertColors = false,
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`mb-16 transition-[opacity,transform] duration-700 ease-out-expo ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${centered ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <p className="text-accent font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-[family-name:var(--font-display)] font-bold text-[length:var(--font-size-h2)] leading-[1.15] ${
          invertColors ? 'text-text-light' : 'text-text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-[length:var(--font-size-body-lg)] max-w-2xl leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${invertColors ? 'text-text-light-secondary' : 'text-text-secondary'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
