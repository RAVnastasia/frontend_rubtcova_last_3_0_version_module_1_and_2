# IT-Школа 12 - Мой финальный проект по Frontend-разработке

![Version](https://img.shields.io/badge/version-3.0-brightgreen.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34C26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Completed-success.svg)

## 👋 О проекте

Привет! Меня зовут **Анастасия Рубцова**, я студентка группы **СИ-25**. Представляю вам мой итоговый проект по курсу Frontend-разработки - лендинг для IT-школы 12.

Это не просто учебный проект - это полноценный сайт, который демонстрирует все навыки, полученные мной за время обучения. Я старалась сделать его максимально профессиональным и удобным для пользователей.

### 🎯 Цель проекта

Создать современный, адаптивный и интерактивный лендинг для IT-школы, который:
- Привлекает внимание родителей и детей
- Понятно рассказывает о курсах
- Упрощает процесс записи на занятия
- Демонстрирует проекты учеников

### ✨ Особенности

- **Адаптивный дизайн** - корректное отображение на всех устройствах (320px+)
- **Hero-видео** - впечатляющий видеофон на главном экране
- **Интерактивные карусели** - Swiper.js для проектов и отзывов
- **Модальные окна** - удобная запись на курсы
- **БЭМ-методология** - чистая и масштабируемая структура CSS
- **Плавная анимация** - прелоадер и переходы
- **TypeScript** - типизированный код для карточек
- **API интеграция** - загрузка данных с JSONPlaceholder

## ✅ Что реализовано в проекте

### Module 1 - Основы

- ✔️ Семантическая HTML5 разметка
- ✔️ БЭМ методология для именования классов
- ✔️ Адаптивная верстка с Flexbox и Grid
- ✔️ Правильная структура проекта по папкам
- ✔️ Подключение шрифтов Inter и оптимизация изображений

### Module 2 - JavaScript

- ✔️ Динамическая загрузка карточек проектов через JavaScript
- ✔️ Swiper.js для каруселей с проектами и отзывами
- ✔️ Модальное окно с формой записи на курсы
- ✔️ Прелоадер с анимацией и задержкой 3 секунды
- ✔️ Загрузка данных с API (JSONPlaceholder)
- ✔️ Плавная прокрутка до якорей и анимации при скролле

### Особенности реализации

- ✔️ Все изображения оптимизированы в формат WebP
- ✔️ Подключены favicon и apple-touch-icon
- ✔️ Используется видео-фон в hero-секции
- ✔️ Настроены мета-теги для SEO

## 🚀 Быстрый старт

1. Клонируйте репозиторий:
```bash
git clone https://github.com/RAVnastasia/frontend_rubtcova_last_3_0_version_module_1_and_2.git
cd frontend_rubtcova_last_3_0_version_module_1_and_2
```

2. Установите зависимости:
```bash
npm install
```

3. Соберите проект для production:
```bash
npm run build
```

4. Откройте `index.html` в браузере или используйте локальный сервер:
```bash
python3 -m http.server 8000
# или просто
open index.html
```

### 📋 Доступные команды:
- `npm run build` - полная сборка (TS, CSS минификация, оптимизация изображений)
- `npm run lint` - проверка кода ESLint
- `npm run format` - форматирование Prettier
- `npm run clean` - очистка build артефактов
# или просто
open index.html
```

## 📁 Структура проекта


frontend_rubtcova_last_3_0_version_module_1_and_2/
├── index.html          # Главная HTML-страница
├── README.md           # Документация проекта (этот файл)
├── package.json        # Конфигурация npm и скрипты
├── tsconfig.json       # Конфигурация TypeScript
├── .gitignore          # Игнорируемые файлы Git
├── styles/
│   ├── style.css      # Главный файл стилей с импортами
│   ├── base/          # Базовые стили
│   │   ├── normalize.css
│   │   └── variables.css
│   └── blocks/        # БЭМ блоки
│       ├── project-card.css
│       └── projects.css
├── scripts/
│   └── scripts.js     # Основная JavaScript логика
├── assets/
│   └── video/
│       └── hero-video.mp4  # Видео для hero-секции
└── img/
    ├── webp/          # Оптимизированные изображения
    │   ├── apps.webp
    │   ├── code.webp
    │   ├── robot.webp
    │   ├── scratch-game.webp
    │   ├── vr.webp
    │   ├── web-portfolio.webp
    │   └── ... (и другие)
    └── icons/
        ├── favicon.ico
        └── apple-touch-icon.png
```

## 🛶 Технологии

- **HTML5** - семантическая разметка
- **CSS3** - современные стили с CSS Grid и Flexbox
- **JavaScript ES6+** - чистый JS без фреймворков
- **TypeScript** - типизированный код
- **Swiper.js** - для слайдеров
- **JSONPlaceholder API** - для загрузки данных

## 📱 Адаптивность

Сайт оптимизирован для всех устройств:

- 🖥 Desktop: 1200px+
- 📱 Tablet: 768px - 1199px
- 📲 Mobile: 320px - 767px

## 🎨 Цветовая схема

```css
--orange: #ff8c00; /* Основной цвет */
--orange-light: #ffb347; /* Светлый акцент */
--black: #1c1c1c; /* Текст */
--gray: #666; /* Вторичный текст */
--white: #ffffff; /* Фон */
```

## 👩‍💻 Что я узнала во время работы

В процессе разработки этого проекта я:

- 🎓 Освоила современные принципы веб-разработки
- 🎯 Научилась работать с Git и GitHub
- 🧩 Поняла важность БЭМ-методологии
- 🌐 Научилась работать с API
- 🚀 Освоила основы TypeScript

## 📧 Контакты

**Автор:** Анастасия Рубцова  
**Группа:** СИ-25  
**Email:** anasyarub2002@gmail.com  
**GitHub:** https://github.com/RAVnastasia/frontend_rubtcova_last_3_0_version_module_1_and_2

---

**Версия:** 3.0  
**Дата релиза:** Июль 2025

_Спасибо за внимание к моему проекту! 🚀_
