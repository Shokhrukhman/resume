/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Статический экспорт для GitHub Pages
  images: {
    unoptimized: true, // Нужно для статического экспорта
  },
  // Базовый путь для GitHub Pages (если репозиторий не в корне)
  // basePath: '/resume', // Раскомментируйте, если репозиторий не в корне домена
  // assetPrefix: '/resume', // Раскомментируйте, если репозиторий не в корне домена
}

module.exports = nextConfig
