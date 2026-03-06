type ButtonVariant = 'primary' | 'ghost'
type ButtonSize = 'default' | 'large'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: React.ReactNode
  className?: string
}

type AnchorProps = BaseProps & { href: string } & Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof BaseProps
>

type NativeButtonProps = BaseProps & { href?: never } & Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  keyof BaseProps
>

type ButtonProps = AnchorProps | NativeButtonProps

const base =
  'inline-flex items-center justify-center font-[family-name:var(--font-display)] font-semibold tracking-wider uppercase cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white transition-[background-color,box-shadow,transform] duration-300 ease-out-expo hover:bg-accent-hover hover:shadow-gold-glow active:scale-[0.97]',
  ghost:
    'border-2 border-border text-text-secondary transition-[border-color,color,transform] duration-300 ease-out-expo hover:border-accent hover:text-accent active:scale-[0.97]',
}

const sizes: Record<ButtonSize, string> = {
  default: 'px-8 py-3.5 text-sm',
  large: 'px-12 py-5 text-base',
}

export function Button(props: ButtonProps) {
  const { variant = 'primary', size = 'default', children, className = '', ...rest } = props
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if ('href' in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorProps
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
