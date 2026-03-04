interface ContainerProps {
  children: React.ReactNode
  narrow?: boolean
  className?: string
}

export function Container({ children, narrow = false, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto px-5 sm:px-8 ${
        narrow ? 'max-w-[var(--width-narrow)]' : 'max-w-[var(--width-content)]'
      } ${className}`}
    >
      {children}
    </div>
  )
}
