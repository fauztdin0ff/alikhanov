
/*--------------------------------------------Анимая текста О нас---------------------------------------------*/
window.addEventListener('scroll', function () {
   var scrollPosition = window.scrollY;
   var scale = 1 - scrollPosition / 1000; // регулируйте это значение для желаемого эффекта масштабирования
   var blur = scrollPosition / 10; // регулируйте это значение для желаемого эффекта размытия
   if (scale < 0.5) scale = 0.5; // минимальный масштаб
   if (blur > 10) blur = 10; // максимальное размытие
   document.querySelector('.about-page__body h1').style.transform = 'scale(' + scale + ')';
   document.querySelector('.about-page__body h1').style.filter = 'blur(' + blur + 'px)';
});

/*--------------------------------------------DATE ANIMATION---------------------------------------------*/
function handleScrollAnimation(elementClass, xOffset1, xOffset2, xOffset3) {
   const element = document.querySelector(`.${elementClass} span`);
   const elementRect = element.getBoundingClientRect();
   const elementTop = elementRect.top;
   const elementBottom = elementRect.bottom;

   if (elementTop < window.innerHeight && elementBottom >= 0) {
      const scrollPosition = window.scrollY;
      const screenWidth = window.innerWidth;
      const elementWidth = element.offsetWidth;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const extraOffset = 200;

      let newPosition;

      if (screenWidth < 600 || screenWidth >= 1000) {
         if (screenWidth < 500) {
            newPosition = ((scrollPosition / maxScroll) * (screenWidth - elementWidth + extraOffset) - xOffset1) * 9;
         } else if (screenWidth < 600) {
            newPosition = ((scrollPosition / maxScroll) * (screenWidth - elementWidth + extraOffset) - xOffset2) * 9;
         } else {
            newPosition = ((scrollPosition / maxScroll) * (screenWidth - elementWidth + extraOffset) - xOffset3) * 9;
         }
         element.style.transform = `translateX(${newPosition}px)`;
      }
   }
}

window.addEventListener('scroll', function () {
   handleScrollAnimation('animated-date', 20, 25, 50);
});

window.addEventListener('scroll', function () {
   handleScrollAnimation('animated-date2', 100, 100, 150);
});

window.addEventListener('scroll', function () {
   handleScrollAnimation('animated-date3', 140, 140, 200);
});

window.addEventListener('scroll', function () {
   handleScrollAnimation('animated-date4', 170, 150, 215);
});

window.addEventListener('scroll', function () {
   handleScrollAnimation('animated-date5', 180, 160, 260);
});



