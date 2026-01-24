'use client'

export function RegisAnimaLogo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="soulGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38BDF8" stopOpacity="1" />
          <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      
      {/* Ядро души (центр) - минималистичный круг */}
      <circle
        cx="16"
        cy="18"
        r="3.5"
        fill="url(#soulGradient)"
        opacity="0.95"
      />
      
      {/* Корона - минималистичный дизайн с тремя пиками */}
      {/* Центральный пик (самый высокий) */}
      <path
        d="M 14 6 L 16 2 L 18 6 L 16 10 Z"
        fill="url(#crownGradient)"
        opacity="0.9"
      />
      
      {/* Левый пик */}
      <path
        d="M 8 12 L 12 8 L 14 12 L 10 14 Z"
        fill="url(#crownGradient)"
        opacity="0.85"
      />
      
      {/* Правый пик */}
      <path
        d="M 18 12 L 22 8 L 24 12 L 20 14 Z"
        fill="url(#crownGradient)"
        opacity="0.85"
      />
      
      {/* Основание короны (соединяет пики) */}
      <path
        d="M 10 14 L 16 10 L 22 14 L 20 18 L 12 18 Z"
        fill="url(#crownGradient)"
        opacity="0.8"
      />
      
      {/* Тонкие линии для детализации */}
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="10"
        stroke="#38BDF8"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.6"
      />
      <line
        x1="12"
        y1="8"
        x2="14"
        y2="12"
        stroke="#38BDF8"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="20"
        y1="8"
        x2="18"
        y2="12"
        stroke="#38BDF8"
        strokeWidth="0.6"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}
