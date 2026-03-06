import { useState } from 'react'
import { faqItems, type FAQItem } from '../data/faq'
import { Container } from '../components/ui/Container'
import { SectionHeading } from '../components/ui/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

function FAQAccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false)
  const { ref, isVisible } = useScrollReveal()
  const triggerId = `faq-trigger-${index}`
  const panelId = `faq-panel-${index}`

  return (
    <div
      ref={ref}
      className={`border border-warm-300 rounded-xl overflow-hidden bg-warm-50/60 transition-[opacity,transform,box-shadow] duration-700 ease-out-expo hover:shadow-[0_2px_20px_rgba(0,0,0,0.06)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <h3>
        <button
          id={triggerId}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-warm-200/40 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls={panelId}
        >
          <span className="font-[family-name:var(--font-display)] font-semibold text-text-primary pr-4">
            {item.question}
          </span>
          <span
            className={`text-accent text-xl transition-transform duration-300 shrink-0 ${
              isOpen ? 'rotate-45' : ''
            }`}
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen}
      >
        <div className="px-6 pb-6">
          <p className="text-text-secondary leading-relaxed">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden grain-overlay">
      {/* Background */}
      <div className="absolute inset-0 bg-surface-warm" />

      <Container narrow className="relative z-10">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
        />

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <FAQAccordionItem key={item.question} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
