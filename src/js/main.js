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

  const mainTovarSlider = new Swiper('.tovar__swiper', {
    // Свои классы
    wrapperClass: 'tovar__swiper-wrapper',
    slideClass: 'tovar__swiper-slide',

    // Количество слайдов для показа
    slidesPerView: 1,

    effect: 'fade',

    // Управление клавиатурой
    keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить управление клавишами pageUp, pageDown
      pageUpDown: true,
    },

    // Отключение функционала
    // при изменении элементов слайдера
    watchOverflow: true,

    // Скорость
    speed: 600,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    navigation: {
      nextEl: '.tovar__swiper-button-next',
      prevEl: '.tovar__swiper-button-prev',
    },

    breakpoints: {
      1200: {
        navigation: false,
        // navigation: {
        //   nextEl: '.tovar__swiper-button-next',
        //   prevEl: '.tovar__swiper-button-prev',
        // }
      },
    },

    thumbs: {
      swiper: {
        el: '.tovar-mini__swiper',
        slidesPerView: 'auto',
        speed: 600,
        wrapperClass: 'tovar-mini__swiper-wrapper',
        slideClass: 'tovar-mini__swiper-slide',

        direction: 'horizontal',

        spaceBetween: 20,

        slideToClickedSlide: true,

        // Управление клавиатурой
        keyboard: {
          // Включить\выключить
          enabled: true,
          // Включить\выключить только когда слайдер в пределах вьюпорта
          onlyInViewport: true,
          // Включить\выключить управление клавишами pageUp, pageDown
          pageUpDown: true,
        },
        breakpoints: {
          1200: {
            direction: 'vertical',
          },
        },
      },
    },
  });

  const copyLink = (e) => {
    let link = e.target.dataset.link;
    let tmp = document.createElement('INPUT');
    tmp.value = link;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    document.body.removeChild(tmp);
  };

  const link = () => {
    const tovarLinkBtn = document.querySelector('.tovar__link-btn');

    if (tovarLinkBtn) {
      tovarLinkBtn.addEventListener('click', (e) => {
        copyLink(e);
        tovarLinkBtn.classList.add('copied');
        tovarLinkBtn.innerHTML = 'Скопировано';
      });
    }
  };

  const video = () => {
    const videoWrapper = document.querySelector(
      '.tovar__swiper-slide-img-wrapper--video'
    );

    if (videoWrapper) {
      const video = videoWrapper.querySelector('.tovar__swiper-slide-img');

      video.addEventListener('play', () => {
        videoWrapper.classList.remove('tovar__swiper-slide-img-wrapper--video');
      });

      video.addEventListener('pause', () => {
        videoWrapper.classList.add('tovar__swiper-slide-img-wrapper--video');
      });
    }
  };

  const categoriesSwiper = new Swiper('.categories__swiper', {
    // Свои классы
    wrapperClass: 'categories__swiper-wrapper',
    slideClass: 'categories__swiper-slide',

    // Количество слайдов для показа
    slidesPerView: 1,

    navigation: {
      nextEl: '.categories__swiper-button-next',
      prevEl: '.categories__swiper-button-prev',
    },

    spaceBetween: 30,

    // Управление клавиатурой
    keyboard: {
      // Включить\выключить
      enabled: true,
      // Включить\выключить только когда слайдер в пределах вьюпорта
      onlyInViewport: true,
      // Включить\выключить управление клавишами pageUp, pageDown
      pageUpDown: true,
    },

    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },

    // Скорость
    speed: 800,
    grabCursor: true,
  });

  const chat = () => {
    const chatBtn = document.querySelector('.chat_btn');
    const chatSoc = document.querySelector('.chat_soc');

    chatBtn.addEventListener('click', () => {
      chatSoc.classList.toggle('active');
    });
  };

  chat();
  video();
  link();
  burger();
  menuScroll();
});
