# Shokhrukh Koshel - Personal Resume Website

A modern, dark-themed personal resume website built with Next.js 14, TypeScript, and Tailwind CSS. Optimized for recruiters and HR specialists with a clean, professional design.

## 🚀 Features

- **Dark Theme**: Professional dark design optimized for readability
- **Responsive**: Mobile-friendly design that works on all devices
- **SEO Optimized**: Complete SEO setup with sitemap, robots.txt, and meta tags
- **Print Friendly**: Resume page optimized for printing
- **Contact Form**: Interactive contact form for potential employers
- **Modern Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Accessible**: Semantic HTML and ARIA labels for accessibility

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles and dark theme
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage with hero section
│   ├── resume/             # Resume page
│   ├── projects/           # Projects showcase
│   ├── sitemap.ts          # SEO sitemap
│   ├── robots.ts           # SEO robots.txt
│   └── manifest.ts         # PWA manifest
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui components
│   └── contact-form.tsx    # Contact form component
├── content/                # Content management
│   └── profile.json        # All profile data
├── lib/                    # Utilities
│   └── utils.ts            # Helper functions
└── public/                 # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (ready)

## 📝 Как редактировать контент (Руководство)

### 🎯 Важно: Это статический сайт без базы данных

Ваш сайт — это **статический Next.js сайт**:
- ✅ **Нет базы данных** — все данные в файле `content/profile.json`
- ✅ **Нет PHP** — это Next.js/React, генерирует статические HTML файлы
- ✅ **Простое редактирование** — меняете JSON файл, сайт обновляется автоматически

### 📋 Где редактировать

**Единственный файл для правок**: `content/profile.json`

Откройте этот файл в любом текстовом редакторе (VS Code, Notepad++, или даже в браузере через GitHub).

---

### 🔧 Пошаговая инструкция

#### 1️⃣ **Добавить новое место работы**

Найдите раздел `"experience"` и добавьте новый объект:

```json
{
  "experience": [
    {
      "company": "Новая Компания",
      "position": "Senior Developer",
      "period": "2025–2026",
      "achievements": [
        "Достижение 1",
        "Достижение 2",
        "Достижение 3"
      ]
    },
    // ... остальные места работы
  ]
}
```

**Важно**: 
- Объекты в массиве разделяются запятыми
- Период работы в формате `"2024–2025"` или `"2024"` (если один год)
- Достижения — массив строк

#### 2️⃣ **Добавить новый навык**

Найдите раздел `"skills"`:

```json
{
  "skills": {
    "technical": [
      "Python (automation & analytics)",
      "PostgreSQL",
      "Новый навык"  // ← просто добавьте сюда
    ],
    "analytical": [
      "Data Analysis",
      "Новый аналитический навык"  // ← или сюда
    ]
  }
}
```

#### 3️⃣ **Добавить новый проект**

Найдите раздел `"projects"`:

```json
{
  "projects": [
    {
      "title": "Название проекта",
      "description": "Описание проекта и что было сделано",
      "technologies": ["Python", "PostgreSQL", "n8n"],
      "impact": "Измеримый результат (например: 50% улучшение)"
    },
    // ... остальные проекты
  ]
}
```

#### 4️⃣ **Обновить личную информацию**

Найдите раздел `"personal"`:

```json
{
  "personal": {
    "name": "Shokhrukh Koshel",
    "title": "Ваша новая должность",  // ← измените здесь
    "location": "Dubai — Remote",
    "email": "ваш@email.com",
    "phone": "+7 (904) 776-07-54",
    "telegram": "https://t.me/ваш_username",
    "whatsapp": "https://wa.me/79047760754",
    "linkedin": "https://www.linkedin.com/in/ваш-профиль/"
  }
}
```

#### 5️⃣ **Добавить достижение**

Найдите раздел `"achievements"`:

```json
{
  "achievements": [
    "Ваше существующее достижение",
    "Новое достижение"  // ← добавьте сюда
  ]
}
```

#### 6️⃣ **Обновить образование**

Найдите раздел `"education"`:

```json
{
  "education": [
    {
      "degree": "Название степени",
      "institution": "Название учебного заведения",
      "period": "2020–2024"
    }
  ]
}
```

#### 7️⃣ **Изменить описание (Summary)**

Найдите поле `"summary"` в начале файла:

```json
{
  "summary": "Ваше новое описание. Можно использовать **жирный текст** для выделения."
}
```

---

### 🚀 После редактирования

#### Вариант A: Если сайт на Vercel + GitHub

1. Сохраните изменения в `content/profile.json`
2. Закоммитьте и запушьте в GitHub:
   ```bash
   git add content/profile.json
   git commit -m "Обновил резюме: добавил новый опыт"
   git push
   ```
3. **Vercel автоматически пересоберёт сайт** через 30-60 секунд
4. Готово! Изменения появятся на сайте

#### Вариант B: Если редактируете через GitHub веб-интерфейс

1. Откройте `content/profile.json` на GitHub
2. Нажмите кнопку **"Edit"** (карандаш)
3. Внесите изменения
4. Прокрутите вниз, напишите сообщение коммита
5. Нажмите **"Commit changes"**
6. Vercel автоматически обновит сайт

#### Вариант C: Локальная разработка

```bash
# 1. Отредактируйте content/profile.json
# 2. Проверьте локально:
npm run dev

# 3. Если всё ок, закоммитьте:
git add content/profile.json
git commit -m "Обновил резюме"
git push
```

---

### ⚠️ Важные правила при редактировании JSON

1. **Всегда используйте запятые** между элементами массива/объекта
2. **Закрывайте кавычки** для всех строк
3. **Проверяйте скобки** `{ }` и `[ ]` — они должны быть парными
4. **Не используйте запятые** после последнего элемента

**Правильно:**
```json
{
  "skills": {
    "technical": ["Python", "PostgreSQL", "Looker Studio"]
  }
}
```

**Неправильно:**
```json
{
  "skills": {
    "technical": ["Python", "PostgreSQL", "Looker Studio",]  // ← лишняя запятая
  }
}
```

---

### 🛠️ Проверка JSON перед сохранением

Если не уверены в синтаксисе, используйте онлайн валидатор:
- https://jsonlint.com/
- Просто вставьте ваш JSON и проверьте ошибки

---

### 📝 Примеры редактирования

#### Добавить новое место работы в начало списка:

```json
{
  "experience": [
    {
      "company": "Новая Компания",
      "position": "Senior Automation Specialist",
      "period": "2025–present",
      "achievements": [
        "Автоматизировал процессы, сократив время на 80%",
        "Внедрил новую систему аналитики"
      ]
    },
    // ... остальные места работы (старые)
  ]
}
```

#### Обновить контакты:

```json
{
  "personal": {
    "email": "новый@email.com",  // ← измените
    "phone": "+7 (999) 123-45-67",  // ← измените
    // ... остальные поля
  }
}
```

---

### 💡 Советы

- ✅ **Делайте бэкап** перед большими изменениями (скопируйте `profile.json`)
- ✅ **Тестируйте локально** перед пушем: `npm run dev`
- ✅ **Используйте форматирование** — JSON должен быть читаемым
- ✅ **Один коммит = одно логическое изменение** (например, "Добавил новое место работы")

---

### 📞 Нужна помощь?

Если что-то пошло не так:
1. Проверьте JSON на валидность (jsonlint.com)
2. Посмотрите ошибки в консоли браузера (F12)
3. Откатите изменения через Git: `git checkout content/profile.json`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd resume-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors and Theme
The dark theme is configured in `app/globals.css`. To customize colors:

```css
:root {
  --background: 0 0% 3%;        /* Background color */
  --foreground: 0 0% 90%;       /* Text color */
  --primary: 180 100% 50%;      /* Accent color (cyan) */
}
```

### Typography
The site uses Inter font with Cyrillic support. To change fonts, update `app/layout.tsx`:

```typescript
const inter = Inter({ subsets: ['latin', 'cyrillic'] })
```

### Adding New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update navigation in existing pages
4. Add to sitemap.ts

## 📱 SEO Optimization

The site includes:
- **Meta tags**: Title, description, keywords
- **Open Graph**: Social media sharing
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine instructions
- **Structured Data**: JSON-LD for search engines

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 Print Optimization

The resume page is optimized for printing with:
- Print-specific CSS styles
- A4 page layout
- Hidden navigation elements
- Optimized typography for print

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Structure
- **Components**: Reusable UI components
- **Pages**: Route-based page components
- **Content**: JSON-based content management
- **Styles**: Tailwind CSS with custom theme

## 📞 Support

For questions or issues:
- Email: regisanima55@gmail.com
- Telegram: [@regis_anima](https://t.me/regis_anima)

## 📄 License

© 2025 Shokhrukh Koshel — All Rights Reserved

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**


