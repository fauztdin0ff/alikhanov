
/*--------------------------------------------SWITCH В ПОПАПЕ---------------------------------------------*/
const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', function () {
   const toggle = this.nextElementSibling;

   if (this.checked) {
      toggle.style.backgroundColor = '#2196F3';
   } else {
      toggle.style.backgroundColor = '#000';
   }
});


/*--------------------------------------------Галерея---------------------------------------------*/
const gsBgImgSelector = ".item-category__big-slide img";
const sliderImgs = document.querySelectorAll(gsBgImgSelector);

if (sliderImgs.length > 0) {
   const dynamicEl = [...sliderImgs].map((sliderImg) => {/* 
    const descriptionEl = sliderImg.closest('.swiper-slide').querySelector('.slide-card__text'); */
      return {
         src: sliderImg.src,
         thumb: sliderImg.src,/* 
      subHtml: descriptionEl ? descriptionEl.innerHTML : '' */
      };
   });

   const dynamicGallery = document.querySelector(".dynamic-gallery-button");

   const popup = lightGallery(dynamicGallery, {
      dynamic: true,
      download: false,
      dynamicEl,
      mobileSettings: {
         showCloseIcon: true,
      },
   });

   dynamicGallery.addEventListener("click", () => {
      popup.openGallery(0);
   });

   [...document.querySelectorAll(".item-category__big-slide")].map((slide, idx) => {
      slide.addEventListener("click", () => {
         popup.openGallery(idx);
      });
   });
}


/*--------------------------------------------CATEGORY SWIPER---------------------------------------------*/
var smallSwiper1 = new Swiper(".mySwiper", {
   loop: true,
   spaceBetween: 10,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      320: {
         slidesPerView: 4,
      },
      430: {
         slidesPerView: 4,
      },
   },
});
var bigSwiper1 = new Swiper(".mySwiper2", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper1-button-next",
      prevEl: ".swiper1-button-prev",
   },
   thumbs: {
      swiper: smallSwiper1,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
});

var smallSwiper2 = new Swiper(".mySwiper3", {
   loop: true,
   spaceBetween: 10,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      320: {
         slidesPerView: 4,
      },
      430: {
         slidesPerView: 4,
      },
   },
});
var bigSwiper2 = new Swiper(".mySwiper4", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper2-button-next",
      prevEl: ".swiper2-button-prev",
   },
   thumbs: {
      swiper: smallSwiper2,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
});

var smallSwiper3 = new Swiper(".mySwiper5", {
   loop: true,
   spaceBetween: 10,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      320: {
         slidesPerView: 4,
      },
      430: {
         slidesPerView: 4,
      },
   },
});
var bigSwiper3 = new Swiper(".mySwiper6", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper3-button-next",
      prevEl: ".swiper3-button-prev",
   },
   thumbs: {
      swiper: smallSwiper3,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
});

var smallSwiper4 = new Swiper(".mySwiper7", {
   loop: true,
   spaceBetween: 10,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      320: {
         slidesPerView: 4,
      },
      430: {
         slidesPerView: 4,
      },
   },
});
var bigSwiper4 = new Swiper(".mySwiper8", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper4-button-next",
      prevEl: ".swiper4-button-prev",
   },
   thumbs: {
      swiper: smallSwiper4,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
});


var smallSwiper5 = new Swiper(".mySwiper9", {
   loop: true,
   spaceBetween: 10,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      320: {
         slidesPerView: 4,
      },
      430: {
         slidesPerView: 4,
      },
   },
});
var bigSwiper5 = new Swiper(".mySwiper10", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper5-button-next",
      prevEl: ".swiper5-button-prev",
   },
   thumbs: {
      swiper: smallSwiper5,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
});


var smallSwiper6 = new Swiper(".mySwiper11", {
   loop: true,
   spaceBetween: 10,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      320: {
         slidesPerView: 4,
      },
      430: {
         slidesPerView: 4,
      },
   },
});
var bigSwiper6 = new Swiper(".mySwiper12", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper6-button-next",
      prevEl: ".swiper6-button-prev",
   },
   thumbs: {
      swiper: smallSwiper6,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
});



var smallSwiper7 = new Swiper(".mySwiper13", {
   loop: true,
   spaceBetween: 10,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      320: {
         slidesPerView: 4,
      },
      430: {
         slidesPerView: 4,
      },
   },
});
var bigSwiper7 = new Swiper(".mySwiper14", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper7-button-next",
      prevEl: ".swiper7-button-prev",
   },
   thumbs: {
      swiper: smallSwiper7,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
});



var smallSwiper8 = new Swiper(".mySwiper15", {
   loop: true,
   spaceBetween: 10,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      320: {
         slidesPerView: 4,
      },
      430: {
         slidesPerView: 4,
      },
   },
});
var bigSwiper8 = new Swiper(".mySwiper16", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper8-button-next",
      prevEl: ".swiper8-button-prev",
   },
   thumbs: {
      swiper: smallSwiper8,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
});


var smallSwiper9 = new Swiper(".mySwiper17", {
   loop: true,
   spaceBetween: 10,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      320: {
         slidesPerView: 4,
      },
      430: {
         slidesPerView: 4,
      },
   },
});
var bigSwiper9 = new Swiper(".mySwiper18", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper9-button-next",
      prevEl: ".swiper9-button-prev",
   },
   thumbs: {
      swiper: smallSwiper9,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
});



var smallSwiper10 = new Swiper(".mySwiper19", {
   loop: true,
   spaceBetween: 10,
   freeMode: true,
   watchSlidesProgress: true,
   breakpoints: {
      320: {
         slidesPerView: 4,
      },
      430: {
         slidesPerView: 4,
      },
   },
});
var bigSwiper10 = new Swiper(".mySwiper20", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper10-button-next",
      prevEl: ".swiper10-button-prev",
   },
   thumbs: {
      swiper: smallSwiper10,
   },
   autoplay: {
      delay: 3000,
      disableOnInteraction: true,
   },
});



if (typeof Swiper !== 'undefined') {
   var smallSwiper11 = new Swiper(".mySwiper21", {
      loop: true,
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
         320: {
            slidesPerView: 4,
         },
         430: {
            slidesPerView: 4,
         },
      },
   });

   var bigSwiper11 = new Swiper(".mySwiper22", {
      loop: true,
      spaceBetween: 10,
      navigation: {
         nextEl: ".swiper11-button-next",
         prevEl: ".swiper11-button-prev",
      },
      thumbs: {
         swiper: smallSwiper11,
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: true,
      },
   });
}





if (typeof Swiper !== 'undefined') {
   var smallSwiper12 = new Swiper(".mySwiper23", {
      loop: true,
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
         320: {
            slidesPerView: 4,
         },
         430: {
            slidesPerView: 4,
         },
      },
   });

   var bigSwiper12 = new Swiper(".mySwiper24", {
      loop: true,
      spaceBetween: 10,
      navigation: {
         nextEl: ".swiper12-button-next",
         prevEl: ".swiper12-button-prev",
      },
      thumbs: {
         swiper: smallSwiper12,
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: true,
      },
   });
}



if (typeof Swiper !== 'undefined') {
   var smallSwiper13 = new Swiper(".mySwiper25", {
      loop: true,
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
         320: {
            slidesPerView: 4,
         },
         430: {
            slidesPerView: 4,
         },
      },
   });

   var bigSwiper13 = new Swiper(".mySwiper26", {
      loop: true,
      spaceBetween: 10,
      navigation: {
         nextEl: ".swiper13-button-next",
         prevEl: ".swiper13-button-prev",
      },
      thumbs: {
         swiper: smallSwiper13,
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: true,
      },
   });
}


if (typeof Swiper !== 'undefined') {
   var smallSwiper14 = new Swiper(".mySwiper27", {
      loop: true,
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
         320: {
            slidesPerView: 4,
         },
         430: {
            slidesPerView: 4,
         },
      },
   });

   var bigSwiper14 = new Swiper(".mySwiper28", {
      loop: true,
      spaceBetween: 10,
      navigation: {
         nextEl: ".swiper14-button-next",
         prevEl: ".swiper14-button-prev",
      },
      thumbs: {
         swiper: smallSwiper14,
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: true,
      },
   });
}



if (typeof Swiper !== 'undefined') {
   var smallSwiper15 = new Swiper(".mySwiper29", {
      loop: true,
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
         320: {
            slidesPerView: 4,
         },
         430: {
            slidesPerView: 4,
         },
      },
   });

   var bigSwiper15 = new Swiper(".mySwiper30", {
      loop: true,
      spaceBetween: 10,
      navigation: {
         nextEl: ".swiper15-button-next",
         prevEl: ".swiper15-button-prev",
      },
      thumbs: {
         swiper: smallSwiper15,
      },
      autoplay: {
         delay: 3000,
         disableOnInteraction: true,
      },
   });
}