export const navLinks = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'Academy', href: '#about' },
  { label: 'Who It\'s For', href: '#who' },
  { label: 'How It Works', href: '#journey' },
  { label: 'FAQ', href: '#faq' },
] as const

export const sectionIds = navLinks.map((l) => l.href.slice(1))
