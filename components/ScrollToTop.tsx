'use client'

import { useState, useEffect } from 'react'
import { Rocket } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Показывать кнопку после скролла вниз на 300px
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-32 right-4 md:bottom-16 md:right-6 z-50 p-3 bg-accent text-black rounded-full shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out ${
        isVisible ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to top"
      style={{
        boxShadow: isVisible 
          ? '0 4px 20px rgba(56, 189, 248, 0.4), 0 0 0 1px rgba(56, 189, 248, 0.2) inset'
          : 'none'
      }}
    >
      <Rocket className="h-5 w-5 md:h-6 md:w-6" />
    </button>
  )
}
