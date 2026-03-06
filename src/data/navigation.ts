export const navLinks = [
  { label: 'Academy', href: '#about' },
  { label: 'Mission', href: '#mission' },
  { label: 'Process', href: '#rebirth' },
  { label: 'Who It\'s For', href: '#who' },
  { label: 'FAQ', href: '#faq' },
] as const

export const sectionIds = navLinks.map((l) => l.href.slice(1))
