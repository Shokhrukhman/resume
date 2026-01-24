'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import enTranslations from '@/locales/en.json'
import ruTranslations from '@/locales/ru.json'
import uzTranslations from '@/locales/uz.json'

export type Language = 'en' | 'ru' | 'uz'

type Translations = typeof enTranslations

const translations: Record<Language, Translations> = {
  en: enTranslations,
  ru: ruTranslations,
  uz: uzTranslations,
}

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Загружаем сохраненный язык из localStorage
    const saved = localStorage.getItem('language') as Language
    if (saved && ['en', 'ru', 'uz'].includes(saved)) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (mounted) {
      localStorage.setItem('language', lang)
    }
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
      if (value === undefined) {
        // Fallback to English if translation not found
        value = translations.en
        for (const k2 of keys) {
          value = value?.[k2]
        }
        break
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
