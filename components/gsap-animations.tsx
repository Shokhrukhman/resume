'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    gsap?: any
    ScrollTrigger?: any
  }
}

const CONFIG = {
  reveal: {
    fromOpacity: 0,
    toOpacity: 1,
    fromY: 40,
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.12,
  },
  hero: {
    titleDelay: 0.05,
    subtitleDelay: 0.18,
    ctasDelay: 0.28,
  },
  parallax: {
    strength: 2.2, // smaller = subtler
    ease: 0.08,
  },
  hover: {
    duration: 0.25,
    ease: 'power1.inOut',
    scale: 1.1,
  },
} as const

function prefersReducedMotion() {
  if (typeof window === 'undefined') return true
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

export function GsapAnimations() {
  useEffect(() => {
    if (prefersReducedMotion()) return

    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger
    if (!gsap || !ScrollTrigger) return

    try {
      gsap.registerPlugin(ScrollTrigger)
    } catch {
      // ignore if already registered
    }

    // HERO intro
    const heroTitle = document.querySelector('.js-hero-title')
    const heroSubtitle = document.querySelector('.js-hero-subtitle')
    const heroCtas = document.querySelector('.js-hero-ctas')

    if (heroTitle) {
      gsap.fromTo(
        heroTitle,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: CONFIG.reveal.ease, delay: CONFIG.hero.titleDelay }
      )
    }
    if (heroSubtitle) {
      gsap.fromTo(
        heroSubtitle,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.7, ease: CONFIG.reveal.ease, delay: CONFIG.hero.subtitleDelay }
      )
    }
    if (heroCtas) {
      gsap.fromTo(
        heroCtas,
        { opacity: 0, y: 14, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.65, ease: CONFIG.reveal.ease, delay: CONFIG.hero.ctasDelay }
      )
    }

    // SECTION reveal on scroll
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.js-reveal-section'))
    sections.forEach((el) => {
      gsap.set(el, { opacity: CONFIG.reveal.fromOpacity, y: CONFIG.reveal.fromY })

      gsap.to(el, {
        opacity: CONFIG.reveal.toOpacity,
        y: 0,
        duration: CONFIG.reveal.duration,
        ease: CONFIG.reveal.ease,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none', // Не скрывать при обратном скролле
          once: true, // Анимировать только один раз
        },
      })
    })

    // Hover animations (icons/badges/buttons/links) via data attribute
    const hoverTargets = Array.from(document.querySelectorAll<HTMLElement>('[data-gsap-hover]'))
    const cleanupHover: Array<() => void> = []

    hoverTargets.forEach((el) => {
      const onEnter = () => {
        gsap.to(el, {
          scale: CONFIG.hover.scale,
          duration: CONFIG.hover.duration,
          ease: CONFIG.hover.ease,
          boxShadow: '0 0 0 1px rgba(56,189,248,0.22) inset, 0 12px 30px rgba(0,0,0,0.35), 0 0 18px rgba(56,189,248,0.18)',
        })
      }
      const onLeave = () => {
        gsap.to(el, {
          scale: 1,
          duration: CONFIG.hover.duration,
          ease: CONFIG.hover.ease,
          boxShadow: '',
        })
      }
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
      cleanupHover.push(() => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    })

    // Background parallax (very subtle) – updates CSS vars used by body background-position
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * CONFIG.parallax.strength
      const y = (e.clientY / window.innerHeight - 0.5) * CONFIG.parallax.strength
      document.documentElement.style.setProperty('--bg-parallax-x', `${50 + x}%`)
      document.documentElement.style.setProperty('--bg-parallax-y', `${50 + y}%`)
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      cleanupHover.forEach((fn) => fn())
      window.removeEventListener('mousemove', onMove)
      try {
        ScrollTrigger.getAll().forEach((t: any) => t.kill())
      } catch {
        // ignore
      }
    }
  }, [])

  return null
}


