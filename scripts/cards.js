// Класс для управления карточками проектов
class ProjectCardsManager {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.projects = [
      {
        image: 'img/photo_site.png',
        title: 'Фото-портфолио',
        description: 'Фото‑портфолио: сайт‑визитка современного фотографа, адаптив и стиль.',
        author: 'Мария, 15 лет',
      },
      {
        image: 'img/vr_htc.png',
        title: 'VR-квест «Escape the Lab»',
        description: 'VR‑квест «Escape the Lab» под HTC Vive: три комнаты, таймер и головоломки.',
        author: 'Алексей, 16 лет',
      },
      {
        image: 'img/scratch_space.png',
        title: 'Scratch-игра «Space Miner»',
        description:
          'Scratch‑игра «Space Miner»: собери алмазы и уклонись от стремительных астероидов.',
        author: 'Даниил, 11 лет',
      },
      {
        image: 'img/coffe.png',
        title: 'Робо-бариста «CoffeeBot»',
        description: 'Робо‑бариста «CoffeeBot» на Arduino: сварит и подаст кофе гостю по команде.',
        author: 'Команда «Роботех», 13-14 лет',
      },
      {
        image: 'img/site_coding.png',
        title: 'Лэндинг «Кодинг — это просто»',
        description:
          'Лэндинг «Кодинг — это просто»: адаптив, подсветка кода и встроенная тёмная тема.',
        author: 'София, 14 лет',
      },
      {
        image: 'img/todo.png',
        title: 'Мобильное To-Do «Tasky»',
        description:
          'Мобильное To‑Do «Tasky»: офлайн‑режим, напоминания и синхронизация задач через Firebase.',
        author: 'Егор, 17 лет',
      },
    ];
  }
  // Метод для создания HTML карточки
  createProjectCard(project) {
    return `
      <div class="swiper-slide">
        <div class="project-card">
          <img src="${project.image}" alt="${project.title}" class="project-card__image">
          <div class="project-card__content">
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__description">${project.description}</p>
            <p class="project-card__author">Автор: ${project.author}</p>
          </div>
        </div>
      </div>
    `;
  }
  // Метод для рендеринга всех карточек
  render() {
    if (!this.container) {
      console.error('Container not found');
      return;
    }
    const projectsHTML = this.projects.map((project) => this.createProjectCard(project)).join('');
    this.container.innerHTML = projectsHTML;
  }
}
// Класс для работы с API карточками
class ApiCardsManager {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }
  // Метод для загрузки данных с API
  async loadCards(limit = 3) {
    try {
      const response = await fetch(`${this.apiUrl}?_limit=${limit}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error loading cards from API:', error);
      return [];
    }
  }
  // Метод для создания HTML карточки из API данных
  createApiCard(post) {
    return `
      <div class="api-card">
        <h3 class="api-card__title">${post.title}</h3>
        <p class="api-card__body">${post.body}</p>
        <span class="api-card__id">ID: ${post.id}</span>
      </div>
    `;
  }
  // Метод для рендеринга карточек из API
  async renderApiCards() {
    const posts = await this.loadCards(3);
    if (posts.length === 0) {
      return;
    }
    const apiCardsSection = document.createElement('section');
    apiCardsSection.className = 'api-cards';
    apiCardsSection.innerHTML = `
      <div class="container">
        <h2 class="section-title">Последние статьи</h2>
        <div class="api-cards__grid">
          ${posts.map((post) => this.createApiCard(post)).join('')}
        </div>
      </div>
    `;
    // Вставляем после секции новостей
    const newsSection = document.querySelector('.news');
    if (newsSection && newsSection.nextElementSibling) {
      newsSection.parentNode?.insertBefore(apiCardsSection, newsSection.nextElementSibling);
    }
  }
}
// Экспортируем классы для использования
export { ProjectCardsManager, ApiCardsManager };
