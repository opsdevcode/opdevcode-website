'use client'

import { useEffect } from 'react'

/**
 * Sets up a single IntersectionObserver that adds `is-visible` to any element
 * with `data-reveal` once it enters the viewport. Honors `prefers-reduced-motion`
 * by immediately marking everything visible.
 */
export default function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const explicit = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    // Auto-target: home sections + their grids/CTA, so we don't need JSX churn.
    const auto = Array.from(
      document.querySelectorAll<HTMLElement>(
        '.wrap.home > section.section, .wrap.home .hero-inner > *, .wrap.home .grid, .wrap.home .engagement-steps, .wrap.home .before-after-split'
      )
    )
    const seen = new Set<HTMLElement>()
    const els = [...explicit, ...auto].filter((el) => {
      if (seen.has(el)) return false
      seen.add(el)
      el.classList.add('reveal')
      return true
    })
    if (els.length === 0) return

    if (reduce || typeof IntersectionObserver === 'undefined') {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return null
}
