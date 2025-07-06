// main.js
(function() {
  'use strict';

  // DOM elements
  const preloader = document.getElementById('preloader');
  const modal = document.getElementById('modal');
  const modalOverlay = modal.querySelector('.modal__overlay');
  const modalClose = modal.querySelector('.modal__close');
  const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
  const menuBurger = document.querySelector('.hero__menu-burger');
  const menu = document.querySelector('.hero__menu');
  const projectsContainer = document.getElementById('projects-container');
  const heroNav = document.querySelector('.hero__nav');

  // Hide preloader after page load
  window.addEventListener('load', () => {
    // Ensure all resources are loaded
    setTimeout(() => {
      if (preloader) {
        preloader.classList.add('preloader--hidden');
        // Remove preloader from DOM after animation
        setTimeout(() => {
          preloader.style.display = 'none';
        }, 300);
      }
    }, 500);
    
    // Initialize animations on scroll after a short delay
    setTimeout(() => {
      initScrollAnimations();
    }, 100);
  });
  
  // Fallback in case load event doesn't fire
  setTimeout(() => {
    if (preloader && !preloader.classList.contains('preloader--hidden')) {
      preloader.classList.add('preloader--hidden');
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 300);
    }
  }, 3000);

  // Initialize Swiper carousels
  function initSwipers() {
    // Projects swiper
    new Swiper('.projects-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      }
    });

    // Reviews swiper
    new Swiper('.reviews-swiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoHeight: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      }
    });
  }

  // Render local projects
  function loadProjects() {
    const projects = [
      {
        image: 'img/photo_site.png',
        title: 'Фото-портфолио',
        description: 'Фото‑портфолио: сайт‑визитка современного фотографа, адаптив и стиль.',
        author: 'Мария, 15 лет'
      },
      {
        image: 'img/vr_htc.png',
        title: 'VR-квест «Escape the Lab»',
        description: 'VR‑квест «Escape the Lab» под HTC Vive: три комнаты, таймер и головоломки.',
        author: 'Алексей, 16 лет'
      },
      {
        image: 'img/scratch_space.png',
        title: 'Scratch-игра «Space Miner»',
        description: 'Scratch‑игра «Space Miner»: собери алмазы и уклонись от стремительных астероидов.',
        author: 'Даниил, 11 лет'
      },
      {
        image: 'img/coffe.png',
        title: 'Робо-бариста «CoffeeBot»',
        description: 'Робо‑бариста «CoffeeBot» на Arduino: сварит и подаст кофе гостю по команде.',
        author: 'Команда «Роботех», 13-14 лет'
      },
      {
        image: 'img/site_coding.png',
        title: 'Лэндинг «Кодинг — это просто»',
        description: 'Лэндинг «Кодинг — это просто»: адаптив, подсветка кода и встроенная тёмная тема.',
        author: 'София, 14 лет'
      },
      {
        image: 'img/todo.png',
        title: 'Мобильное To-Do «Tasky»',
        description: 'Мобильное To‑Do «Tasky»: офлайн‑режим, напоминания и синхронизация задач через Firebase.',
        author: 'Егор, 17 лет'
      }
    ];

    const projectsHTML = projects.map((project) => {
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
    }).join('');

    projectsContainer.innerHTML = projectsHTML;

    // Initialize swipers after content is loaded
    initSwipers();
  }

  // Modal functionality
  function openModal() {
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
  }

  // Modal event listeners
  modalOpenButtons.forEach(button => {
    button.addEventListener('click', openModal);
  });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Close modal on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
      closeModal();
    }
  });

  // Form submission handling
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Simple validation
      const phone = data.phone;
      if (phone && !phone.match(/^[+]?[0-9\s\-\(\)]+$/)) {
        alert('Пожалуйста, введите корректный номер телефона');
        return;
      }
      
      // Show success message
      alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
      
      // Log form data (in production, this would be sent to a server)
      console.log('Форма отправлена:', data);
      
      if (modal.classList.contains('modal--open')) {
        closeModal();
      }
      form.reset();
    });
  });

  // Mobile menu toggle
  if (menuBurger) {
    menuBurger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // Play video on user interaction
  const heroVideoElement = document.querySelector('.hero__video');
  if (heroVideoElement) {
    // Handle video load
    heroVideoElement.addEventListener('loadeddata', () => {
      // Attempt to play video
      const playPromise = heroVideoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay was prevented:', error);
          // If autoplay is prevented, play on user interaction
          document.addEventListener('click', () => {
            heroVideoElement.play();
          }, { once: true });
        });
      }
    });
    
    // Handle video error
    heroVideoElement.addEventListener('error', (e) => {
      console.error('Video loading error:', e);
      // Video already has a poster attribute, so it will show the poster image on error
    });
  }

  // Функция для загрузки данных с jsonplaceholder
  async function loadCardsFromAPI() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
      const posts = await response.json();
      
      // Создаем контейнер для карточек из API
      const apiCardsSection = document.createElement('section');
      apiCardsSection.className = 'api-cards';
      apiCardsSection.innerHTML = `
        <div class="container">
          <h2 class="section-title">Последние статьи</h2>
          <div class="api-cards__grid">
            ${posts.map(post => `
              <div class="api-card">
                <h3 class="api-card__title">${post.title}</h3>
                <p class="api-card__body">${post.body}</p>
                <span class="api-card__id">ID: ${post.id}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
      
      // Вставляем после секции новостей
      const newsSection = document.querySelector('.news');
      if (newsSection && newsSection.nextElementSibling) {
        newsSection.parentNode.insertBefore(apiCardsSection, newsSection.nextElementSibling);
      }
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  }
  
  // Load projects on page load
  loadProjects();
  
  // Загружаем карточки с API после загрузки страницы
  loadCardsFromAPI();

  // Sticky header with glass effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      heroNav.classList.add('is-scrolled');
    } else {
      heroNav.classList.remove('is-scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // Initialize scroll animations
  function initScrollAnimations() {
    // Add animation classes to elements
    const animateElements = [
      { selector: '.section-title', animation: 'fadeInUp' },
      { selector: '.about__feature', animation: 'scaleIn', stagger: true },
      { selector: '.courses__card', animation: 'fadeInUp', stagger: true },
      { selector: '.benefits__item', animation: 'rotateIn', stagger: true },
      { selector: '.news__card', animation: 'fadeInLeft', stagger: true },
      { selector: '.about__text p', animation: 'fadeInUp', stagger: true },
      { selector: '.trial-form__content', animation: 'scaleIn' },
      { selector: '.reviews__card', animation: 'fadeInUp' }
    ];
    
    animateElements.forEach(({ selector, animation, stagger }) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.dataset.animation = animation;
        if (stagger) {
          el.dataset.delay = Math.min(index + 1, 4);
        }
      });
    });
    
    // Create intersection observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const animation = el.dataset.animation;
          const delay = el.dataset.delay;
          
          el.classList.add('animated', animation);
          if (delay) {
            el.classList.add(`delay-${delay}`);
          }
          
          observer.unobserve(el);
        }
      });
    }, observerOptions);
    
    // Observe all elements
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }

  // Stats counter animation
  const statsSection = document.querySelector('.stats');
  const statsNumbers = document.querySelectorAll('.stats__number');
  let hasAnimated = false;

  function animateStats() {
    statsNumbers.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const suffix = stat.getAttribute('data-suffix') || '';
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const updateNumber = () => {
        current += increment;
        if (current < target) {
          stat.textContent = Math.floor(current) + suffix;
          requestAnimationFrame(updateNumber);
        } else {
          stat.textContent = target + suffix;
        }
      };

      updateNumber();
    });
  }

  // Intersection Observer for stats animation
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        setTimeout(animateStats, 300); // Small delay for better effect
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the section is visible
  });

  if (statsSection) {
    statsObserver.observe(statsSection);
  }
  
  // Add parallax effect to hero section
  const heroContent = document.querySelector('.hero__content');
  const heroVideoPar = document.querySelector('.hero__video');
  
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroVideoPar && scrolled < window.innerHeight) {
      heroVideoPar.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
  });
  
  // Add hover effects to cards
  const addHoverEffects = () => {
    const cards = document.querySelectorAll('.courses__card, .project-card, .benefits__item, .news__card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  };
  
  // Initialize hover effects after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addHoverEffects);
  } else {
    setTimeout(addHoverEffects, 100);
  }

})();
