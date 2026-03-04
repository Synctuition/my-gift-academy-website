import { useEffect, useRef, useState } from 'react'

interface ScrollRevealOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

const observerMap = new Map<string, IntersectionObserver>()
const callbackMap = new Map<Element, (isIntersecting: boolean) => void>()

function getSharedObserver(threshold: number, rootMargin: string, triggerOnce: boolean) {
  const key = `${threshold}_${rootMargin}_${triggerOnce}`
  let observer = observerMap.get(key)
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const cb = callbackMap.get(entry.target)
          if (!cb) continue
          if (entry.isIntersecting) {
            cb(true)
            if (triggerOnce) {
              observer!.unobserve(entry.target)
              callbackMap.delete(entry.target)
            }
          } else if (!triggerOnce) {
            cb(false)
          }
        }
      },
      { threshold, rootMargin },
    )
    observerMap.set(key, observer)
  }
  return observer
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {},
) {
  const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', triggerOnce = true } = options
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    if (isVisible) return

    const element = ref.current
    if (!element) return

    const observer = getSharedObserver(threshold, rootMargin, triggerOnce)
    callbackMap.set(element, (intersecting) => setIsVisible(intersecting))
    observer.observe(element)

    return () => {
      observer.unobserve(element)
      callbackMap.delete(element)
    }
  }, [threshold, rootMargin, triggerOnce]) // eslint-disable-line react-hooks/exhaustive-deps

  return { ref, isVisible }
}
