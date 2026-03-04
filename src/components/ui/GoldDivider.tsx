export function GoldDivider() {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
      <div className="mx-3 h-1.5 w-1.5 rounded-full bg-accent" />
      <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
    </div>
  )
}
