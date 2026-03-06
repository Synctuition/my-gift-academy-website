export function SectionDivider({ variant = 'gold' }: { variant?: 'gold' | 'subtle' }) {
  if (variant === 'subtle') {
    return (
      <div className="flex justify-center py-1">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-1">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/40" />
      <div className="mx-4 h-1 w-1 rounded-full bg-accent/60" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/40" />
    </div>
  )
}
