'use client'

import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export function PrintButton() {
  const handleDownload = () => {
    // Создаем ссылку для скачивания PDF
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Shokhrukh_Koshel_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Button className="no-print" onClick={handleDownload}>
      <Download className="mr-2 h-4 w-4" />
      Download Resume
    </Button>
  )
}


