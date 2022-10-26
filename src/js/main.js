document.addEventListener('DOMContentLoaded', () => {
  const advantagesSlider = new Swiper('.advantages__swiper', {
    // Свои классы
    wrapperClass: 'advantages__swiper-wrapper',
    slideClass: 'advantages__swiper-slide',

    // Количество слайдов для показа
    slidesPerView: 1.2,
    enabled: true,

    centeredSlides: true,

    initialSlide: 1,

    spaceBetween: 20,

    // Управление клавиатурой
    keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить управление клавишами pageUp, pageDown
      pageUpDown: true,
    },

    // Управление колесом мыши
    // mousewheel: {
    //   // Чувствительность колеса мыши
    //   sensitivity: 1,
    //   // Класс объекта, на котором будет
    //   // срабатывать прокрутка мышью
    //   // events.target: '.image-slider'
    // },

    // Отключение функционала
    // при изменении элементов слайдера
    watchOverflow: true,

    // Скорость
    speed: 800,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    // Навигация
    // Буллеты, текущее положение, прогрессбар

    // Отключаем автоинициализацию
    // init: false,

    grabCursor: true,

    breakpoints: {
      500: {
        slidesPerView: 2,
        centeredSlides: false,
        initialSlide: 0,
        enabled: true,
      },
      800: {
        slidesPerView: 3,
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 27,
        enabled: true,
      },
      1200: {
        enabled: false,
        centeredSlides: false,
        initialSlide: 0,
        slidesPerView: 4,
      },
    },

    // События
    on: {
      // Событие инициализации
      // init: function () {
      //   menuSlider();
      //   setScrollType();
      //   wrapper.classList.add('_loaded');
      // },
      // Событие смены слайда
      // slideChange: function () {},
      // resize: function () {},
    },
  });

  const burger = () => {
    const burgerBtn = document.querySelector('.header__burger');
    const html = document.querySelector('html');
    const headerMenu = document.querySelector('.header__menu');
    const headerLogoWrapper = document.querySelector('.header__logo-wrapper');
    const headerBurger = document.querySelector('.header__burger');

    burgerBtn.addEventListener('click', () => {
      html.scrollTo({ top: 0 });
      html.classList.toggle('lock');
      headerMenu.classList.toggle('active');
      headerBurger.style.transform = 'translateY(0)';
      headerLogoWrapper.style.transform = 'translateY(0)';
    });
  };

  const menuScroll = () => {
    const headerMenu = document.querySelector('.header__menu');
    const headerLogoWrapper = document.querySelector('.header__logo-wrapper');
    const headerBurger = document.querySelector('.header__burger');
    headerMenu.addEventListener('scroll', (e) => {
      headerLogoWrapper.style.transform = `translateY(-${headerMenu.scrollTop}px)`;
      headerBurger.style.transform = `translateY(-${headerMenu.scrollTop}px)`;
    });
  };

  burger();
  menuScroll();
});
