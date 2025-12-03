// Убедитесь, что DOM полностью загружен
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    slidesPerView: "auto", // Автоматическая ширина слайдов
    spaceBetween: 24, // Отступ между слайдами
    centeredSlides: false,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        enabled: false,
      },
    },
  });
});
