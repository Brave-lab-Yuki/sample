'use strict';

{
 
// ========
// スライド
// ========

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
let meter = document.querySelectorAll('.circle');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeContsLeft.length; i++){
    const rect = fadeContsLeft[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) {
      fadeContsLeft[i].classList.add('.circle');
    }
  }
});



}