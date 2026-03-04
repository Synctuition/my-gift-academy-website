export const navLinks = [
  { label: 'Mission', href: '#mission' },
  { label: 'Academy', href: '#about' },
  { label: 'The Journey', href: '#journey' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
] as const

export const sectionIds = navLinks.map((l) => l.href.slice(1))
