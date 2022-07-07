'use strict';{


function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');
  
    hamburger.addEventListener('click', function() {
      body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function() {
      body.classList.remove('nav-open');
    });
  }
  toggleNav();

  let fadeContsLeft = document.querySelectorAll('.fadeInBefore');
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