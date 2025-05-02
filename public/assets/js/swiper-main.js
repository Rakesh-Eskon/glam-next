
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 10,
  grabCursor: true,
  autoplay: {
    delay: 3000, // Set the delay between slides in milliseconds
    disableOnInteraction: false, // Set to false if you want autoplay to continue even when user interacts with the slider
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  speed: 2000,
  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 4,
    },
  },
});



let videotestimonial = new Swiper(".video-testimonial", {
  loop: true,
  spaceBetween: 10,
  grabCursor: true,
  autoplay: {
    delay: 3000, // Set the delay between slides in milliseconds
    disableOnInteraction: false, // Set to false if you want autoplay to continue even when user interacts with the slider
  },
  pagination: {
    el: ".swiper-pagination-videotestimonial", // Use separate pagination element
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next-videotestimonial",
    prevEl: ".swiper-button-prev-videotestimonial",
  },
  speed: 2000,
  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 4,
    },
  },
});

let hometestimonial = new Swiper(".home-testimonial", {
  loop: true,
  spaceBetween: 10,
  grabCursor: true,
  autoplay: {
    delay: 3000, // Set the delay between slides in milliseconds
    disableOnInteraction: false, // Set to false if you want autoplay to continue even when user interacts with the slider
  },
  pagination: {
    el: ".swiper-pagination-hometestimonial", // Use separate pagination element
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next-hometestimonial",
    prevEl: ".swiper-button-prev-hometestimonial",
  },
  speed: 2000,
  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});



let personalgrooming = new Swiper(".personal-grooming", {
  loop: true,
  spaceBetween: 10,
  grabCursor: true,
  autoplay: {
    delay: 3000, // Set the delay between slides in milliseconds
    disableOnInteraction: false, // Set to false if you want autoplay to continue even when user interacts with the slider
  },
  pagination: {
    el: ".swiper-pagination-personalgrooming",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-personalgrooming",
    prevEl: ".swiper-button-prev-personalgrooming",
  },
  speed: 2000,
  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 2,
    },
  },
});

let homecourses = new Swiper(".home-courses", {
  loop: true,
  spaceBetween: 0,
  grabCursor: true,
  autoplay: {
    delay: 3000, // Set the delay between slides in milliseconds
    disableOnInteraction: false, // Set to false if you want autoplay to continue even when user interacts with the slider
  },
  pagination: {
    el: ".swiper-pagination-homecourses", // Use separate pagination element
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next-homecourses",
    prevEl: ".swiper-button-prev-homecourses",
  },
  speed: 2000,
  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 2,
    },
  },
});


