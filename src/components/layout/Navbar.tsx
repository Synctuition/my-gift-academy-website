import { useState, useEffect, useRef, useCallback } from 'react'
import { navLinks, sectionIds } from '../../data/navigation'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import { Button } from '../ui/Button'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds)
  const mobileNavRef = useRef<HTMLElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false)
    requestAnimationFrame(() => triggerRef.current?.focus())
  }, [])

  useFocusTrap(mobileNavRef, isMobileOpen, closeMobile)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        className="fixed top-0 left-0 z-[100] -translate-y-full focus:translate-y-0 bg-accent text-base-950 px-4 py-2 font-semibold transition-transform duration-200"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
          isScrolled
            ? 'bg-white/92 border-b border-border shadow-[0_1px_8px_rgba(0,0,0,0.04)] supports-[backdrop-filter]:backdrop-blur-xl'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto max-w-[var(--width-content)] px-5 sm:px-8 flex items-center justify-between h-18">
          {/* Logo — Golden Boy icon + brand name */}
          <a
            href="#"
            className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <img
              src="/assets/golden-boy/golden_boy.png"
              alt=""
              className="h-9 w-auto"
              aria-hidden="true"
            />
            <span className="font-[family-name:var(--font-display)] text-lg font-bold text-text-primary">
              My Gift Academy
            </span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    activeSection === link.href.slice(1)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="default" href="#apply">
              Apply Now
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            ref={triggerRef}
            className="md:hidden text-text-primary p-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-nav"
          >
            <span className={`hamburger-icon ${isMobileOpen ? 'open' : ''}`} />
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileOpen && (
          <nav
            ref={mobileNavRef}
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className="md:hidden bg-white/95 supports-[backdrop-filter]:backdrop-blur-xl border-t border-border"
          >
            <ul className="flex flex-col py-4 px-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-3 text-text-secondary hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button href="#apply" className="w-full" onClick={closeMobile}>
                  Apply Now
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  )
}
