new Swiper(".events-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

AOS.init({
  duration: 1000,
  easing: "ease",
  once: true,
});
