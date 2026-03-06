import { Container } from '../ui/Container'
import { navLinks } from '../../data/navigation'

function SocialIcon({ name }: { name: string }) {
  const cls = 'w-5 h-5'
  const icons: Record<string, React.ReactNode> = {
    instagram: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    youtube: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    facebook: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  }
  return <>{icons[name] || null}</>
}

const socials = [
  { name: 'instagram', href: '#' },
  { name: 'youtube', href: '#' },
  { name: 'facebook', href: '#' },
]

export function Footer() {
  return (
    <footer className="border-t border-warm-800/30 bg-warm-900 grain-overlay">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img
                src="/assets/golden-boy/golden_boy.png"
                alt=""
                className="h-10 w-auto"
                aria-hidden="true"
              />
              <p className="font-[family-name:var(--font-display)] text-xl font-bold text-text-light">
                My Gift Academy
              </p>
            </div>
            <p className="text-text-light-secondary text-sm leading-relaxed max-w-xs">
              Defending the sovereign human mind. Awakening the gift that only you can bring.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-text-light uppercase tracking-wider mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-light-secondary text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-text-light uppercase tracking-wider mb-4">
              Connect
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full border border-warm-800/50 flex items-center justify-center text-text-light-secondary hover:text-accent hover:border-accent/50 transition-colors duration-200"
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-warm-800/30 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/golden-boy/golden_boy.png"
              alt="My Gift Academy"
              className="h-6 w-auto opacity-60"
            />
            <span className="text-text-light-secondary text-xs">
              &copy; {new Date().getFullYear()} My Gift Academy O&Uuml;. All rights reserved.
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-text-light-secondary text-xs hover:text-accent transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-text-light-secondary text-xs hover:text-accent transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
