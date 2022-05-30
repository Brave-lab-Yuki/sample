'use strict';

{
  const navi = document.getElementById('hamburger-navigation');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const hamburgerMask = document.querySelector('.hamburger-mask');
  const title = document.querySelector('.site-title');
  const header = document.querySelector('.header');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navi.classList.toggle('active');
    hamburgerMask.classList.toggle('active');
    title.classList.toggle('active');
    header.classList.toggle('active');
  });

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let fadeContsLeft = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeContsLeft.length; i++){
    const rect = fadeContsLeft[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeContsLeft[i].classList.add('scroll-in');
    }
  }
});

}
