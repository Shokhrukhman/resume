'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, FileText, FolderKanban } from 'lucide-react'
import profileData from '@/content/profile.json'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Закрывать меню при клике на ссылку или изменении роута
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Закрывать меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest('.mobile-menu-container') && !target.closest('button[aria-label="Toggle menu"]')) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/resume', label: 'Resume', icon: FileText },
    { href: '/projects', label: 'Projects', icon: FolderKanban },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="border-b border-border-subtle bg-midnight-950/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-accent hover:text-accent/80 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {profileData.personal.name.split(' ')[0]}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-accent bg-accent/10'
                      : 'text-text-secondary hover:text-accent hover:bg-midnight-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Container */}
          <div className="md:hidden relative mobile-menu-container">
            {/* Mobile Burger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-text-primary hover:text-accent transition-colors relative z-10"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Mobile Dropdown Menu */}
            <div
              className={`absolute top-full right-0 w-52 bg-midnight-950 border border-border-subtle rounded-b-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2 pointer-events-none'
              }`}
            >
              <div className="py-1">
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-text-primary hover:text-accent hover:bg-midnight-800 transition-all duration-200 border-b border-border-subtle"
                >
                  <X className="h-4 w-4 flex-shrink-0" />
                  <span className="text-sm font-medium">Close Menu</span>
                </button>
                
                {/* Navigation Items */}
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                        isActive(item.href)
                          ? 'text-accent bg-accent/20 border-l-4 border-accent'
                          : 'text-text-primary hover:text-accent hover:bg-midnight-800'
                      }`}
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
