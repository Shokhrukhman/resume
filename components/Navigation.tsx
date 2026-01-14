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
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/resume', label: 'Resume', icon: FileText },
    { href: '/projects', label: 'Projects', icon: FolderKanban },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="border-b border-border-subtle bg-midnight-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
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

          {/* Mobile Burger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="md:hidden fixed inset-0 top-[73px] bg-black/50 backdrop-blur-sm z-30"
            onClick={() => setIsOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-y-0 right-0 top-[73px] w-80 max-w-[85vw] bg-midnight-950/98 backdrop-blur-md z-40 shadow-2xl border-l border-border-subtle transition-all duration-300 ease-in-out ${
            isOpen
              ? 'opacity-100 visible translate-x-0'
              : 'opacity-0 invisible translate-x-full'
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-accent bg-accent/10 border-l-4 border-accent'
                        : 'text-text-secondary hover:text-accent hover:bg-midnight-800'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="text-lg font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
