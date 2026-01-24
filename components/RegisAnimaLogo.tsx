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
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Корона - 3 пика, только контур */}
      {/* Центральный пик (самый высокий) */}
      <path
        d="M 12 10 L 16 4 L 20 10"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Левый пик */}
      <path
        d="M 6 16 L 10 12 L 12 16"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Правый пик */}
      <path
        d="M 20 16 L 24 12 L 26 16"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Основание короны (горизонтальная линия, соединяющая пики) */}
      <line
        x1="6"
        y1="16"
        x2="26"
        y2="16"
        stroke="#38BDF8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Ядро души - маленький круг под короной */}
      <circle
        cx="16"
        cy="22"
        r="3"
        stroke="#38BDF8"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}
