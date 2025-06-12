/* ハンバーガーボタン */
const hamburgerBtn = document.querySelector('.js-hamburger');
const nav = document.querySelector('.js-nav');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});