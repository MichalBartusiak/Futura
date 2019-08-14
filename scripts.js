const hamburger = document.querySelector(".header__hamburger")
const menu = document.querySelector('.menu')
hamburger.addEventListener('click', function () {
  menu.classList.toggle('menu--active')
})