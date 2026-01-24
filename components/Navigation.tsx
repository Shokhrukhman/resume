'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, FileText, FolderKanban, Globe } from 'lucide-react'
import { RegisAnimaLogo } from './RegisAnimaLogo'
import { useI18n, Language } from '@/lib/i18n'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const pathname = usePathname()
  const { language, setLanguage, t } = useI18n()

  // Закрывать меню при клике на ссылку или изменении роута
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Закрывать меню при клике вне его
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isOpen && !target.closest('.mobile-menu-container') && !target.closest('button[aria-label="Toggle menu"]') && !target.closest('.mobile-dropdown-menu')) {
        setIsOpen(false)
      }
      if (langMenuOpen && !target.closest('.language-menu-container')) {
        setLangMenuOpen(false)
      }
    }

    if (isOpen || langMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, langMenuOpen])

  const navItems = [
    { href: '/', label: t('nav.home'), icon: Home },
    { href: '/resume', label: t('nav.resume'), icon: FileText },
    { href: '/projects', label: t('nav.projects'), icon: FolderKanban },
  ]

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'uz', name: "O'zbek", flag: '🇺🇿' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav className="border-b border-border-subtle bg-midnight-950/95 backdrop-blur-sm sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-2 md:py-4">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center transition-all duration-300 hover:scale-[1.08] logo-link"
            onClick={() => setIsOpen(false)}
          >
            <RegisAnimaLogo className="h-10 w-10 md:h-12 md:w-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
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
            
            {/* Language Switcher */}
            <div className="relative language-menu-container">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-text-secondary hover:text-accent hover:bg-midnight-800 transition-all duration-300"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm">{languages.find(l => l.code === language)?.flag}</span>
              </button>
              
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-midnight-950 border border-border-subtle rounded-lg shadow-xl overflow-hidden z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setLangMenuOpen(false)
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-sm transition-all duration-200 ${
                        language === lang.code
                          ? 'text-accent bg-accent/20'
                          : 'text-text-primary hover:text-accent hover:bg-midnight-800'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Container */}
          <div className="md:hidden relative mobile-menu-container">
            {/* Mobile Burger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-text-primary hover:text-accent transition-colors relative z-10"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Dropdown Menu - Fixed to top-right corner, above header */}
          <div
            className={`md:hidden fixed top-0 right-0 w-52 bg-midnight-950 border-l border-b border-border-subtle rounded-bl-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out z-[60] mobile-dropdown-menu ${
              isOpen
                ? 'opacity-100 visible translate-x-0'
                : 'opacity-0 invisible translate-x-full pointer-events-none'
            }`}
          >
            <div className="py-1">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 text-text-primary hover:text-accent hover:bg-midnight-800 transition-all duration-200 border-b border-border-subtle"
              >
                <X className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm font-medium">{t('buttons.closeMenu')}</span>
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
              
              {/* Language Switcher in Mobile Menu */}
              <div className="border-t border-border-subtle mt-1">
                <div className="px-4 py-2 text-xs text-text-muted uppercase">{t('mobile.language')}</div>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                      language === lang.code
                        ? 'text-accent bg-accent/20 border-l-4 border-accent'
                        : 'text-text-primary hover:text-accent hover:bg-midnight-800'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span className="text-sm font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
