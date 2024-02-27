/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();


/*--------------------------------------------Прелоадер и анимация---------------------------------------------*/
if (document.readyState === "complete") {
  init();
} else {
  window.addEventListener("load", init);
}

function init() {
  let preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.classList.add('hide-preloader');
    preloader.classList.add('hidden-preloader');
  }

  //плавное появление
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.1] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  };
}

//-----------------БУРГЕР МЕНЮ---------------------------
let iconMenu = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

document.addEventListener('click', (event) => {
  if (!event.target.closest('.menu__body') && !event.target.closest('.menu__icon')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
});


/*--------------------------------------------HEADER FIXED---------------------------------------------*/
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  if (window.scrollY > window.innerHeight) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
});

/*--------------------------------------------FORM IN MODAL---------------------------------------------*/
/*--------------------------------------------Открытие попапа---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  var openButtons = document.querySelectorAll('.open-modal');
  var popup = document.querySelector('.order-modal');

  if (popup) {
    var closeButton = popup.querySelector('.modal__close-icon');
  }

  function openPopup() {
    if (popup) {
      popup.classList.add('show');
      document.body.classList.add('_modal');
    }
  }

  function closePopup() {
    if (popup) {
      popup.classList.remove('show');
      document.body.classList.remove('_modal');
    }
  }

  if (openButtons.length > 0) {
    openButtons.forEach(function (button) {
      button.addEventListener('click', openPopup);
    });
  }

  if (closeButton && popup) {
    closeButton.addEventListener('click', closePopup);

    window.addEventListener('click', function (event) {
      var isButtonClick = false;
      openButtons.forEach(function (button) {
        if (button === event.target) {
          isButtonClick = true;
        }
      });

      if (!popup.contains(event.target) && !isButtonClick) {
        closePopup();
      }
    });
  }
});


/*--------------------------------------------ORDER POPUP---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  var selectElement = document.getElementById('mail-or-phone');
  var contactInputElement = document.getElementById('contact-input');

  if (selectElement && contactInputElement) {
    selectElement.addEventListener('change', function () {
      var selectedOption = selectElement.value;
      var label, inputType;

      if (selectedOption === 'telephone') {
        label = 'Ваш телефон *';
        inputType = 'number';
      } else if (selectedOption === 'mail') {
        label = 'Ваш email *';
        inputType = 'email';
      }

      contactInputElement.innerHTML = '';

      var labelElement = document.createElement('label');
      labelElement.setAttribute('for', 'contact');
      labelElement.textContent = label;

      var inputElement = document.createElement('input');
      inputElement.setAttribute('type', inputType);
      inputElement.setAttribute('id', 'contact');
      inputElement.setAttribute('required', 'required');

      contactInputElement.appendChild(labelElement);
      contactInputElement.appendChild(inputElement);
    });

    var selectedOption = selectElement.value;
    var label, inputType;

    if (selectedOption === 'telephone') {
      label = 'Ваш телефон *';
      inputType = 'number';
    } else if (selectedOption === 'mail') {
      label = 'Ваш email *';
      inputType = 'email';
    }

    var labelElement = document.createElement('label');
    labelElement.setAttribute('for', 'contact');
    labelElement.textContent = label;

    var inputElement = document.createElement('input');
    inputElement.setAttribute('type', inputType);
    inputElement.setAttribute('id', 'contact');
    inputElement.setAttribute('required', 'required');

    contactInputElement.appendChild(labelElement);
    contactInputElement.appendChild(inputElement);
  }
});


/*--------------------------------------------Открытие попапа---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  var openButtons = document.querySelectorAll('.open-order-popup');
  var popup = document.querySelector('.order-popup');
  var closeButton = popup ? popup.querySelector('.popup__close-icon') : null;

  function openPopup() {
    if (popup) {
      popup.classList.add('show');
      document.body.classList.add('_popup');
    }
  }

  function closePopup() {
    if (popup) {
      popup.classList.remove('show');
      document.body.classList.remove('_popup');
    }
  }

  if (openButtons.length > 0) {
    openButtons.forEach(function (button) {
      button.addEventListener('click', openPopup);
    });
  }

  if (closeButton && popup) {
    closeButton.addEventListener('click', closePopup);

    window.addEventListener('click', function (event) {
      var isButtonClick = false;
      openButtons.forEach(function (button) {
        if (button === event.target) {
          isButtonClick = true;
        }
      });

      if (!popup.contains(event.target) && !isButtonClick) {
        closePopup();
      }
    });
  }
});

/*--------------------------------------------SLIDER---------------------------------------------*/

// Инициализация каждого слайдера Swiper
var sliders = document.querySelectorAll('.projects__swiper');
sliders.forEach(function (slider) {
  new Swiper(slider, {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //Включение/отключение перетаскивания на ПК
    simulateTouch: false,
    //Курсор перетаскивания
    grabCursor: false,
    //Переключение при клике на слайд
    slideToClickedSlide: false,
    //Управление клавиатурой
    keyboard: {
      //Включить\Выключить
      enabled: false,
    },
    //Управление колесом мыши
    mousewheel: false,
    //Отключение функционала если слайдов меньше чем нужно
    watchOverflow: true,
    //Свободный режим (перетаскивание без фиксированных позиций)
    freeMode: false,
    //Скорость
    speed: 300,
    slidesPerView: 1,
    effect: 'slide',
    autoplay: {
      delay: 3000, // Задержка между переключениями в миллисекундах (в данном примере 5000 миллисекунд или 5 секунд)
      disableOnInteraction: true, // Если установлено в true, автоплей будет остановлен при взаимодействии пользователя с слайдером
    },
  });
});


/*--------------------------------------------FAQ---------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      content.classList.toggle('show');
      const icon = this.querySelector('span');
      icon.textContent = icon.textContent === '+' ? '-' : '+';
    });
  });
});


/*--------------------------------------------Анимация svg росписи---------------------------------------------*/
document.addEventListener("DOMContentLoaded", function () {
  const paths = ['paintingPath1', 'paintingPath2', 'paintingPath3'];

  window.addEventListener('scroll', function () {
    paths.forEach(function (pathId) {
      const path = document.getElementById(pathId);
      if (path) {
        const rect = path.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top >= 0) {
          animatePath(path);
        }
      }
    });
  });

  function animatePath(path) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
    setTimeout(function () {
      path.style.transition = "1s";
    }, 500);
    setTimeout(function () {
      path.style.strokeDashoffset = 0;
    }, 2500);
  }
});


/*--------------------------------------------АНИМАЦИЯ COVER CATALOG---------------------------------------------*/
window.addEventListener('load', () => {
  const span = document.querySelector('.typing-text');

  if (span) {
    // Показываем анимацию текста после скрытия прелоадера
    startAnimation(span);
  }
});

function startAnimation(span) {
  if (window.innerWidth <= 600) {
    goAnimation(span);
    span.style.animation = 'typingMobile 2s linear, blink-caret 0.75s step-end infinite';
    span.style.animationIterationCount = 'infinite';
  } else {
    goAnimation(span);
    span.style.animation = 'typing 2s linear, blink-caret 0.75s step-end infinite';
    span.style.animationIterationCount = 'infinite';
  }
}

function goAnimation(span) {
  setInterval(function () {
    const currentText = span.textContent;
    const newText = currentText === 'Качество ' ? 'Дизайн ' : (currentText === 'Дизайн ' ? 'Долговечность ' : 'Качество ');
    span.textContent = newText;
  }, 2000);
}

/*--------------------------------------------Swiper Cover---------------------------------------------*/

const coverSwiper = new Swiper('.category__cover-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //Включение/отключение перетаскивания на ПК
  simulateTouch: false,
  //Курсор перетаскивания
  grabCursor: false,
  //Переключение при клике на слайд
  slideToClickedSlide: false,
  //Управление клавиатурой
  keyboard: {
    //Включить\Выключить
    enabled: false,
  },
  //Управление колесом мыши
  mousewheel: false,
  //Отключение функционала если слайдов меньше чем нужно
  watchOverflow: true,
  //Свободный режим (перетаскивание без фиксированных позиций)
  freeMode: false,
  //Скорость
  speed: 300,
  slidesPerView: 1,
  effect: 'slide',
  autoplay: {
    delay: 3000, // Задержка между переключениями в миллисекундах (в данном примере 5000 миллисекунд или 5 секунд)
    disableOnInteraction: true, // Если установлено в true, автоплей будет остановлен при взаимодействии пользователя с слайдером
  },
});

})();

/******/ })()
;